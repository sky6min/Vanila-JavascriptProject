const express = require('express');
const fs = require('fs');
var iconv = require('iconv-lite');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public')); // 전체 이미지 파일과 연결. 배치 처리
app.listen(3000, () => {
    console.log('Server running at port: 3000!');
});
var Data = new Array(0) // 전체 과제 리스트
var NData = new Array(0) // 미해결 과제 리스트
var FData = new Array(0) // 해결 과제 리스트
var sig = '0`'
var sig1 = '1`'



var temp
var content = fs.readFileSync("data.txt",'binary');
var utf8Text = iconv.decode(content, "euc-kr");
var lineArray = utf8Text.toString().split('\n');
for(var i=0; i<lineArray.length; i++)
{
    var Hwork = {
        Sname: "",
        Pname: "",
        Hname: "",
        date: "",
        state: "",
        contents: ""
    }
    temp = lineArray[i].split('`');
    Hwork.Sname = temp[0]
    Hwork.Pname = temp[1]
    Hwork.Hname = temp[2]
    Hwork.date = temp[3]
    Hwork.state = temp[4]
    Hwork.contents = temp[5]
    Data.push(Hwork)
    if(Number(Hwork.state) == 0)
    {
        NData.push(Hwork)
    }else{
        FData.push(Hwork)
    }
}

app.get('/', (req, res) => res.sendFile(__dirname+"/main.html"));

app.post('/search',(req,res)=>{
    var SnameData = new Array(0)  // 과목명 리스트
    var HnameData = new Array(0) // 과제명 리스트
    if(req.body.name == "subject") // 과목명 입력이 들어오면
    {
        for(var i =0; i<Data.length;i++)
        {
            var temp = Data[i].Sname.toString();
            if(temp.indexOf(req.body.con) != -1)
            {
                SnameData.push(Data[i])
            }
        }
        res.send(SnameData)
    }else{
        for(var i =0; i<Data.length;i++)
        {
            var temp = Data[i].Hname.toString();
            if(temp.indexOf(req.body.con) != -1)
            {
                HnameData.push(Data[i])
            }
        }
        res.send(HnameData)
    }
    });

app.post('/ajax',(req,res)=>{
    res.send(Data)});

app.post('/nlist',(req,res)=>{
    res.send(NData)});

app.post('/flist',(req,res)=>{
    res.send(FData)});

app.post('/post', (req,res)=>{
    var temp
    console.log(req.body.hid)
    var title = req.body.title
    var con = req.body.con
    var hid = req.body.hid
    title = title.toString()
    con = con.toString()
    var newdata = title.concat("|",con,"\r")
    newdata = sig1.concat(newdata)
    console.log(newdata)

    var hid2 = sig.concat(hid)
    temp = utf8Text.toString().replace(hid2,newdata)
    let euckrStr = iconv.encode(temp, 'euc-kr')
    fs.writeFileSync('data.txt',euckrStr,{encoding: 'binary'})
    var Data2 = new Array(0) // 전체 과제 리스트
    var NData2 = new Array(0) // 미해결 과제 리스트
    var FData2 = new Array(0) // 해결 과제 리스트
    var lineArray2 = temp.toString().split('\n');
    for(var i=0; i<lineArray2.length; i++)
    {
        var Hwork = {
            Sname: "",
            Pname: "",
            Hname: "",
            date: "",
            state: "",
            contents: ""
        }
        temp = lineArray2[i].split('`');
        Hwork.Sname = temp[0]
        Hwork.Pname = temp[1]
        Hwork.Hname = temp[2]
        Hwork.date = temp[3]
        Hwork.state = temp[4]
        Hwork.contents = temp[5]
        Data2.push(Hwork)
        if(Number(Hwork.state) == 0)
        {
            NData2.push(Hwork)
        }else{
            FData2.push(Hwork)
        }
    }
    Data = Data2
    NData = NData2
    FData = FData2
    res.sendStatus(200);
    });










