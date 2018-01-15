const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index',{user: "Great User",title:"homepage"});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
