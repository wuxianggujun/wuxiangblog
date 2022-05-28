import express from "express";
import ejs from "ejs";
import {fileURLToPath} from 'url'
import path, {dirname} from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express();

app.engine('.html', ejs.__express);
app.set('views', path.join(__dirname, 'pages'))
app.set('view engine', 'html')
app.get('/index', (req, resp) => {
    resp.render('index', {
        title: "博客系统"
    })
})
app.get('/blog', (req, res) => {
    res.render('blog', {
        title: "博客中心",
        blog: "这是一段文本"
    })
})
app.listen(3000);