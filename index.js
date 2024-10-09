const express = require("express")
const exp = require("express")
const fs=require("fs")
const app = exp()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("home page")
})

app.post("/addProduct", (req, res) => {
    fs.readFile("./db.json","utf-8", (err,data)=>{
        if(err){
            res.send(err)
        }else{
            const newData=JSON.parse(data)
            newData.products.push(req.body)
            fs.appendFile("./db.json",JSON.stringify(newData),()=>{
                if(err){
                    res.send(err)
                }else{
                    res.send("Product Addded ")
                }
            })

        }
    })
})

app.listen(8000, () => {
    console.log("chal raha he bhai")
}) 