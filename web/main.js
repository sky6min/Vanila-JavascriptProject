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
    con = req.body.con
    title = req.body.title

    res.sendStatus(200);
    });










