let news = [
    {id:1,
    news:"Messi is the G.O.A.T.",
    },
    {id:2,
        news:"Messi is the G.O.A.T.",
    },
    {id:3,
        news:"Messi is the G.O.A.T.",
    },
    {id:4,
        news:"Messi is the G.O.A.T.",
    },
    {id:5,
        news:"Messi is the G.O.A.T.",
    }
];
let id = 6
module.exports = {
    getAll: (req,res)=>{                            //Read
        res.send(news)
    },
    addNews: (req,res)=>{                          //Create
        req.body.id=id;
        id++;
        news.push(req.body);
        res.sendStatus(201);
    },
    deleteNews: (req,res)=>{                       //Delete
        news=news.filter((news1)=>{
            return news1.id !== +req.params.id
        })
        res.status(200).send(news)
    },
    changeNews: (req,res)=>{                       //Update
        const {id} = req.params;
        const {body} = req;
        news = news.map((news1)=>{
        if(news1.id === +id){
            news1.news = body;
        }
        return news 
        })
        res.status(200).send(news)
    }
}