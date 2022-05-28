import mysql from "mysql";

const config = {
    host: '106.13.195.2',
    database: 'blog',
    user: 'blog',
    password: 'blog'
}

//[],{},[{},id]
export default function db(sql, sqlParams) {
    sqlParams = sqlParams || [];
    //console.log('SqlParams:'+sqlParams)
    return new Promise((resolve, reject) => {
        const pool = mysql.createPool(config);
        pool.getConnection((err, conn) => {
            if (!err) {
                conn.query(sql, sqlParams, (e, results) => {
                    if (!e) {
                        //console.log("resolve"+results)
                        resolve(results);
                        conn.destroy();
                    } else {
                        reject(e);
                    }
                })
            } else {
                reject(err);
            }
        })
    })
};
