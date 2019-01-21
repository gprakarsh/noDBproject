const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const ctrl = require('./controllers/controller')

let lineup=[];
// axios.get("https://api-football-v1.p.mashape.com/players/2018/33")
// .then((res)=>{
//     lineup=res.data;    
// });
app.use(bodyParser.json());

app.get('/api/news',ctrl.getAll) //requires a string and a function
 //calling api is convention
            
// app.get(`/api/news/:id`,ctrl.getOne) // to be used later
                      
app.post('/api/news',ctrl.addNews)

app.delete('/api/news/:id',ctrl.deleteNews)

                  //':id' is url parameter
app.put(`/api/news/:id`,ctrl.changeNews)      



app.listen(4000, ()=>{
    console.log('Server Running on port 4000');
})