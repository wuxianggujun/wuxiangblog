//博客板块的数据持久化操作
//添加博客
export function add(blog) {

}

//更新博客
export function update(arr) {

}

//删除博客
export function del(id) {
    this.update([{is_del: 1, id}])
}

//获取指定用户的博文
export function getUserBlog(userId) {

}

//获取所有博文
export function getBlog() {

}


