import fs from "fs";

//一个文件只能有一个default，多个会报错 Duplicate export of 'default'
//封装文件读取
export default url => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                console.log(err);
                reject(err);
            }
        })
    })
}

// 👇️ named export
export function read(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                console.log(err);
                reject(err);
            }
        })
    })
}