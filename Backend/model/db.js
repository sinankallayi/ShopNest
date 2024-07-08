const db=require('mongoose');
db.connect("mongodb+srv://sinukallayi:sinankallayi@cluster0.l5rp8zb.mongodb.net/shop_nest")
.then(()=>{
    console.log("DB Connected")
})
.catch(err=>console.log(err))


module.exports=db

