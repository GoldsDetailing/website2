const express = require('express');
const path = require('path');


const app = express();
app.use(express.static(path.join(__dirname, 'public')));

/*app.use(express.static('public'));
app.use(express.static(__dirname + 'public/css'))
app.use(express.static(__dirname + 'public/js'))
*/

const PORT = 3000;

app.set('view engine', 'ejs');


app.use('/images', express.static(__dirname + '/Images'));

app.use('/', require('./routes/index'));
app.use('/services', require('./routes/services'));
app.use('/gallery', require('./routes/gallery'));

app.listen(PORT, console.log(`server started on ${PORT}`));
