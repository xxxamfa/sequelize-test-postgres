const Sequelize = require('sequelize')

const conf = {
    host: 'localhost',
    // 資料庫廠牌
    dialect: 'postgres'
}

// (db名,帳號,密碼,config)
const seq = new Sequelize('longyao', 'postgres', 'longyao7639', conf)



// 測試連結 . 回傳為promise
// seq.authenticate().then(() => {
//     console.log('ok');
// }).catch((err) => {
//     console.log('err', err);
// })

// 測試連結時要mark掉
module.exports = seq