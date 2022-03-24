const express = require('express');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');


app.use('/', require('./routes/index'));
app.use('/services', require('./routes/services'));
app.use('/gallery', require('./routes/gallery'));

app.listen(port, console.log(`server started on ${port}`));
