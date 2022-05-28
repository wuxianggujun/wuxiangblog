import express from 'express';
import {read} from './util.js';
import {fileURLToPath} from 'url'
import path, {dirname} from 'path'
import * as user from './manage/user.js';
import * as blog from './manage/blog.js';
import ejs from "ejs";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const app = express();

//设置静态资源路径
//app.use('/static',express.static(path.join(__dirname, 'static')))
app.use('/static', express.static(__dirname + '/static'));

//引入ejs
app.engine('.html', ejs.__express);
app.set('views', path.join(__dirname, 'pages'))
app.set('view engine', 'html')


//发送get请求 'pages/index.html'
app.get('/', (req, resp) => {
    // read('pages/index.html').then(res => {
    //     resp.write(res);
    //     resp.end();
    // });
    resp.render('index', {
        title: '无相博客首页'
    })

})


app.get('/toLogin', (req, resp) => {
    // const data = await read('pages/login.html');
    // resp.end(data);
    resp.render('login', {
        title: '博客系统登录'
    })
})

app.get('/getUser', (req, resp) => {
    const sql = "select * from t_user";
    db(sql).then(res => {
        resp.send(res);
    })
})

class Response {
    constructor(code, message, data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    static success(data) {
        return new Response(200, "请求成功", data)
    }

    static error(message) {
        message = message ? message : "请求失败"
        return new Response(5000, message, null)
    }

    static nologin() {
        return new Response(5010, "用户未登录", null)
    }
}

//判断用户信息是否已经存在
app.get('/user/getUserByPhone', async (req, resp) => {
//调用该方法返回数据库数据
    const userinfo = await user.getUserByPhone('52-498-5483')
    console.log(userinfo);
})

app.post('/login', (req, resp) => {
    let json = null;
    req.on('data', (chunk) => {
        const str = Buffer.from(chunk).toString();
        json = JSON.parse(str);
    })
    req.on('end', async () => {
        console.log("json:", json);
        const u = await user.login(json);
        if (u != null) {
            req.session.userId = u.id;
            resp.send(Response.success(u));
        } else {
            resp.send(Response.error("用户名或者密码错误"))
        }
    })
})


app.get('/addUser', (req, resp) => {
    const sql = "insert into t_user set ?";
    const sqlParams = {phone: '123456789', password: '123456789', nickname: '狗蛋'}
    db(sql, sqlParams).then(res => {
        resp.send(res);
    })
})

//监听端口
app.listen(3000, () => {
    console.log('listening on port 3000');
});