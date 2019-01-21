const axios = require('axios');
let news = [
    {
        id: 1,
        text: "News Flash 1",
        person: "admin"
    },
    {
        id: 2,
        text: "Messi is the G.O.A.T.",
        person: "admin"
    },
    {
        id: 3,
        text: "Messi is the G.O.A.T.",
        person: "admin"
    },
    {
        id: 4,
        text: "Messi is the G.O.A.T.",
        person: "admin"
    },
    {
        id: 5,
        text: "Messi is the G.O.A.T.",
        person: "admin"
    }
];

let standing = [];

let id = 6
module.exports = {
    getAll: (req, res) => {                            //Read
        res.send(news)
    },
    addNews: (req, res) => {                          //Create
        req.body.id = id;

        news.push(req.body);
        res.status(201).send(news);

        id++;
    },
    deleteNews: (req, res) => {                       //Delete
        news = news.filter((news1) => {
            return news1.id !== +req.params.id
        })
        res.status(200).send(news)
    },
    changeNews: (req, res) => {                       //Update
        const { id } = req.params;
        const { body } = req;
        news = news.map((news1) => {
            if (news1.id === +id) {
                news1.text = body.text;
            }
            return news1
        })
        res.status(200).send(news)
    },
    getStandings: (req, res) => {
        axios.get(`http://api.football-data.org/v2/competitions/PD/standings`,{headers:{"X-Auth-Token":"549681e4c288473da4389adacec78a3e"}})
            .then(response => {
                standing=response.data.standings[1].table;                                               res.send(standing); 
            })
            

    }

}
