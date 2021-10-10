const seq = require('./seq')

require('./model')

// 測試連結 . 回傳為promise
seq.authenticate().then(() => {
    console.log('auth ok');
}).catch((err) => {
    console.log('auth err', err);
})

// 執行同步
seq.sync({force:true}).then(()=>{
    console.log('sync ok');
    // 退出sequelize進程不要一直佔著
    process.exit()
})
