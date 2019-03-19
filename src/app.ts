import  express from 'express';
const hbs = require ('express-handlebars');
import  path from 'path';
const routes = require ('./routes/index');

const app = express();

app.set("port", process.env.PORT || 3000);
//API EndPoint
app.engine('hbs', hbs({
    extname:'hbs',
    defaultLayout:'layout',
    layoutDir: __dirname + '../build/views/'
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

export default app;