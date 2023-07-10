const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path')
const crypto = require('crypto');
const fs = require('fs');
const port = 3000;
app.use(bodyParser.urlencoded({extended: false}))


app.set('views', './templates')
app.set('view engine','pug');

app.get('/', (req, res) => {
    res.render('index', {
            date: 'Date' + new Date().toLocaleDateString() + ' Time:' + new Date().toLocaleTimeString(),
            hello_text:"Hello  World"
        })
})

app.post('/form',(req, res) => {
    res.send(req.body.str.split('').reverse().join(''))
})

/* Static Server File */
app.use(express.static(path.join(__dirname, 'public')))

/* Param Pam Pam */
app.get('/message/:id', (req, res) => {
    let hashed = crypto.createHash('sha1')
    .update(new Date().toDateString().toString() + req.params.id)
    .digest('hex');
    
    res.send(hashed)
})

app.get('/search', (req, res) => {
   res.json(req.query);
})

/*Read file */
fs.readFile("filepath", "utf8", function(err, data){
    if(err) throw err;

    var resultArray = //do operation on data that generates say resultArray;

    res.json(resultArray);
});


app.listen(port,()=>{
    console.log(`Server is listening on port no ${port}`);
})
