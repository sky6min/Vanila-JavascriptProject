var Hwork = {
    Sname: "",
    Pname: "",
    Hname: "",
    date: "",
    state: "",
    contents: ""
}
var tempData = new Array(0)
var tempStatData = new Array(0)
var tempContData = new Array(0)

var ck

var toggle1 =  Array.apply(null, new Array(100)).map(Number.prototype.valueOf,0);
var toggle2 = Array.apply(null, new Array(100)).map(Number.prototype.valueOf,0);
var index=0


window.onload = function () {
    ck = document.getElementById('list')
    document.getElementById('submit').onclick=()=>{
        var names = document.getElementsByName('name');
        var value;
        for(var i=0; i<names.length; i++) {
            if(names[i].checked) {
                value = names[i].value;
            }
        }
        var contents = document.getElementById('contents').value;
        var num = 0
        $.post({
        url:"/search",
        data:{
            con:contents,
            name:value
        },
        success:function(data){ // 성공 시 호출 콜백
            console.log("asdasdas")
            if (ck.childElementCount != 0) {
                while (ck.childElementCount > 0) {
                    ck.removeChild(ck.firstChild)
                }
            }
            setInit(num,data)
            }
        });
        var title = document.getElementById('title')
        title.innerHTML='나의 과제'
    }
    addList()
}
//전체 목록 리스트 Ajax
function addList() {
    var num = 0
    $.post({
        url:"/ajax",
        data:{
        },
        success:function(data){ // 성공 시 호출 콜백
            setInit(num,data)
            }
        });
}

//해결 목록 리스트 Ajax
function addFList() {
    var num = 0
    var title = document.getElementById('title')
    title.innerHTML="나의 과제 (해결)"
    $.post({
        url:"/flist",
        data:{
        },
        success:function(data){ // 성공 시 호출 콜백
            setInit(num,data)
            }
        });
}

//미해결 목록 리스트 Ajax
function addNList() {
    var num = 0
    var title = document.getElementById('title')
    title.innerHTML="나의 과제 (미해결)"
    $.post({
        url:"/nlist",
        data:{
        },
        success:function(data){ // 성공 시 호출 콜백
            
            setInit(num,data)
            }
        });
}

// 작성 화면
function setSub1(num,subli) {
    subli.style.position="relative"
    subli.style.display="none"
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var label = document.createElement('label')
    var label2 = document.createElement('label')
    var input = document.createElement('input')
    var submit = document.createElement('input')
    var cont = document.createElement('input')
    submit.style.float="right"
    submit.style.marginRight="10px"
    submit.style.marginTop="5px"
    submit.setAttribute('id',index.toString())
    submit.setAttribute('type','button')
    submit.setAttribute('value',"작성완료")
    submit.setAttribute('onclick','bt3_click(this.id)')
    label.innerHTML="제목 : "
    label.style.float="left"
    label2.innerHTML="내용 : "
    input.setAttribute('type','text')
    input.setAttribute('name','title')
    cont.setAttribute('type','text')
    cont.setAttribute('name','cont')
    cont.style.width="740px"
    cont.style.height="120px"
    cont.style.marginLeft="5px"
    input.style.width="300px"
    div.style.position="relative"
    div.style.height="200px"
    div.style.width="auto"
    div2.style.width="800px"
    div2.style.marginTop="30px"
    div2.style.position="relative"
    label.appendChild(input)
    label2.appendChild(cont)
    div.appendChild(label)
    div.appendChild(submit)
    div2.appendChild(label2)
    div.appendChild(div2)

    div.style.backgroundColor="white"
    div.style.border="1px solid"

    subli.appendChild(div)
}

// 상세 화면
function setSub2(num,subli2) {
    subli2.style.position="relative"
    subli2.style.display="none"
    var div = document.createElement('div')
    var title = document.createElement('P')
    var cont = document.createElement('cont')
    div.style.position="relative"
    div.style.height="200px"
    div.style.width="auto"
    div.style.backgroundColor="white"
    div.style.border="1px solid"
    var con = Hwork.contents.toString().split('|');
    title.innerText=con[0]
    cont.innerText=con[1]
    div.appendChild(title)
    div.appendChild(cont)
    subli2.appendChild(div)
}



// 윈도우 시작 시
function setInit(num,data){
    tempData=data;
    while(num < data.length)
    {
        var li = document.createElement('li')
        var ul = document.createElement('ul')
        var subli = document.createElement('li')
        var subli2 = document.createElement('li')
        ul.setAttribute("class","sub")
        ul.style.padding="0px"
        setList(num,li)
        setSub1(num,subli)
        setSub2(num,subli2)

        ul.appendChild(subli)
        ul.appendChild(subli2)
        li.appendChild(ul)
        ck.appendChild(li)
        tempStatData.push(Hwork.state)
        tempContData.push(Hwork.contents)
        num += 1
        index += 1
    }
    index=0
}
// 윈도우 시작 시 리스트 그리기
function setList(num,li) {
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var span = document.createElement('span')
    var span2 = document.createElement('span')
    var span3 = document.createElement('span')
    var span4 = document.createElement('span')
    var bt1 = document.createElement('input')
    var bt2 = document.createElement('input')
    div.style.height="40px"
    li.style.border="1px solid"
    li.style.display="block"
    li.style.margin="0px"
    li.style.height="auto"
    li.style.lineHeight="30px"
    span.style.marginLeft="5px"
    span.style.color="#0067a3"
    span.setAttribute("class","hname")
    span2.style.marginRight="15px"
    span2.style.height="30px"
    span2.style.float="right"
    span2.setAttribute("class","pname")
    span3.style.marginRight="15px"
    span3.style.height="30px"
    span3.style.float="right"
    span3.setAttribute("class","sname")
    span4.style.marginRight="15px"
    span4.style.height="30px"
    span4.style.float="right"
    span4.setAttribute("class","date")
    bt1.setAttribute("type","button")
    bt1.setAttribute("id",index.toString())
    bt1.setAttribute("onclick","bt1_click(this.id)")
    bt1.style.padding="5px 24px"
    bt1.style.float="right"
    bt1.style.marginRight="9px"
    bt1.style.marginTop="5px"
    bt1.style.boxShadow="1px 1px 1px"
    bt1.setAttribute("value","상세")
    div.appendChild(bt1)
    Hwork.Sname=tempData[num].Sname 
    Hwork.Pname=tempData[num].Pname
    Hwork.Hname=tempData[num].Hname
    Hwork.date=tempData[num].date
    Hwork.contents= tempData[num].contents
    Hwork.state=tempData[num].state
    if(Number(Hwork.state) == 0){
    bt2.setAttribute("type","button")
    bt2.setAttribute("id",index.toString())
    bt2.setAttribute("onclick","bt2_click(this.id)")
    bt2.style.padding="5px 24px"
    bt2.style.float="right"
    bt2.style.marginRight="9px"
    bt2.style.marginTop="5px"
    bt2.style.boxShadow="1px 1px 1px"
    bt2.setAttribute("value","작성")
    div.appendChild(bt2)
    }
    div2.style.height="30px"

    span.innerHTML=Hwork.Hname
    span2.innerHTML=Hwork.Pname
    span3.innerHTML=Hwork.Sname
    span4.innerHTML=Hwork.date
    div.appendChild(span)
    div2.appendChild(span4)
    div2.appendChild(span3)
    div2.appendChild(span2)
    li.appendChild(div)
    li.appendChild(div2)
}

//미해결 목록 버튼
function button1_click(){
    if (ck.childElementCount != 0) {
        while (ck.childElementCount > 0) {
            ck.removeChild(ck.firstChild)
        }
    }
    addNList()
}

//해결 목록 버튼
function button1_click2(){
    if (ck.childElementCount != 0) {
        while (ck.childElementCount > 0) {
            ck.removeChild(ck.firstChild)
        }
    }
    addFList()
}

// 상세 버튼
function bt1_click(clicked_id){
    console.log(clicked_id)
    var node = document.getElementsByClassName('sub')[parseInt(clicked_id)]
    if(toggle1[parseInt(clicked_id)]%2 == 0){
        node.lastChild.style.display="block"
        if(node.firstChild.style.display=="block"){
            node.firstChild.style.display="none"
            toggle2[parseInt(clicked_id)]+= 1
        }
    }else{
        node.lastChild.style.display="none"
    }
    toggle1[parseInt(clicked_id)]+= 1
} 

// 작성 버튼
function bt2_click(clicked_id){
    console.log(clicked_id)
     var node = document.getElementsByClassName('sub')[parseInt(clicked_id)]
    if(toggle2[parseInt(clicked_id)]%2 == 0){
        node.firstChild.style.display="block"
        if(node.lastChild.style.display=="block"){
            node.lastChild.style.display="none"
            toggle1[parseInt(clicked_id)]+= 1
        }
        
    }else{
        node.firstChild.style.display="none"
    } 
    toggle2[parseInt(clicked_id)]+= 1
}

//작성 완료 버튼
function bt3_click(clicked_id){
    var title = document.getElementsByName('title')[parseInt(clicked_id)].value;
    var cont = document.getElementsByName('cont')[parseInt(clicked_id)].value;
    $.post({
    url:"/post",
    data:{
        title:title,
        con:cont
    },
    success:function(data){ // 성공 시 호출 콜백
        window.location.reload()
        }
    });
} 
