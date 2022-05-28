//用户模块的数据持久化操作
import db from '../db.js';

//根据手机号获取用户信息
export async function getUserByPhone(phone) {
    //SELECT id, phone, password, nickname, head_img, personal_sign, level_id, create_time, update_time, is_del FROM blog.t_user;
    const sql = "select id,phone,password,nickname,head_img,personal_sign,level_id from t_user where phone =? and is_del = 0 ";
    return await db(sql, [phone]);
}

//添加用户信息
export async function addUser(user) {
    //{name:'',phone:'',password:''}
    const sql = "insert into t_user set ?"
    return await db(sql, user);
}

//更新用户信息
export async function update(arr) {
    //[user,id] =>[{nickname:'},id]
    const sql = "update t_user set ? where id = ?"
    return await db(sql, arr);
}

//删除用户信息
export async function del(id) {
    //删除用户信息正常情况下不会真实的删除数据，都是通过伪删除操作
    return await update([{is_del: 1}, id])
}

//获取所有用户信息
export async function getAll() {
    const sql = "SELECT id, phone, password, nickname, head_img, personal_sign, level_id, create_time FROM blog.t_user where is_del = 0";
    return await db(sql)
}
