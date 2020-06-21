var Hwork = {
    Sname: "",
    Pname: "",
    Hname: "",
    date: "",
    state: "",
    contents: "contents"
}
var tempData = new Array(0)
var tempStatData = new Array(0)
var tempContData = new Array(0)

var ck

var toggle1 =  Array.apply(null, new Array(100)).map(Number.prototype.valueOf,0);
var toggle2 = Array.apply(null, new Array(100)).map(Number.prototype.valueOf,0);
var index=0


window.onload = function () {
    document.getElementById('submit').onclick=()=>{
        var names = document.getElementsByName('name');
        var value;
        for(var i=0; i<names.length; i++) {
            if(names[i].checked) {
                value = names[i].value;
            }
        }
        var contents = document.getElementById('contents').value;
        $.post({
        url:"/search",
        data:{
            con:contents,
            name:value
        },
        success:()=>vex.dialog.alert('업데이트 완료'),
        error:()=>vex.dialog.alert('값을 제대로 입력하셔야 합니다!')
        });
    }

    ck = document.getElementById('list')
    addList()
}

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

function setSub1(num,subli) {
    var div = document.createElement('div');

}

function setSub2(num,subli2) {

}

function setSub3(num,subli2) {

}
function setInit(num,data){
    tempData=data;
    while(num < data.length)
    {
        var li = document.createElement('li')
        var ul = document.createElement('ul')
        var subli = document.createElement('li')
        var subli2 = document.createElement('li')
        ul.setAttribute("class","sub")
        subli.style.position="relative"
        subli.style.display="none"
        subli.innerHTML="111111111"
        subli2.style.position="relative"
        subli2.style.display="none"
        subli2.innerHTML="2222222"
        setSub1(num,subli)
        setSub2(num,subli2)
        setList(num,li)
        ul.appendChild(subli)
        ul.appendChild(subli2)
        console.log(Hwork.state)
        li.appendChild(ul)
        ck.appendChild(li)
        tempStatData.push(Hwork.state)
        tempContData.push(Hwork.contents)
        num += 1
        index += 1
    }
    index=0
}

function setList(num,li) {
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var span = document.createElement('span')
    var span2 = document.createElement('span')
    var span3 = document.createElement('span')
    var span4 = document.createElement('span')
    var bt1 = document.createElement('input')
    var bt2 = document.createElement('input')
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
    bt2.setAttribute("type","button")
    bt2.setAttribute("id",index.toString())
    bt2.setAttribute("onclick","bt2_click(this.id)")
    bt2.style.padding="5px 24px"
    bt2.style.float="right"
    bt2.style.marginRight="9px"
    bt2.style.marginTop="5px"
    bt2.style.boxShadow="1px 1px 1px"
    bt2.setAttribute("value","작성")
    div.style.height="40px"
    div2.style.height="30px"
    Hwork.Sname=tempData[num].Sname 
    Hwork.Pname=tempData[num].Pname
    Hwork.Hname=tempData[num].Hname
    Hwork.date=tempData[num].date
    Hwork.contents= "웹페이지 구축 해봅니다."
    Hwork.state=tempData[num].state
    span.innerHTML=Hwork.Hname
    span2.innerHTML=Hwork.Pname
    span3.innerHTML=Hwork.Sname
    span4.innerHTML=Hwork.date
    div.appendChild(span)
    div.appendChild(bt1)
    div.appendChild(bt2)
    div2.appendChild(span4)
    div2.appendChild(span3)
    div2.appendChild(span2)
    li.appendChild(div)
    li.appendChild(div2)
}

function button1_click(){
    if (ck.childElementCount != 0) {
        while (ck.childElementCount > 0) {
            ck.removeChild(ck.firstChild)
        }
    }
    addNList()
}

function button1_click2(){
    if (ck.childElementCount != 0) {
        while (ck.childElementCount > 0) {
            ck.removeChild(ck.firstChild)
        }
    }
    addFList()
}

function bt1_click(clicked_id){

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

function bt2_click(clicked_id){
   
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


