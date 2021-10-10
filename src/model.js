const Sequelize = require('sequelize')
const seq = require('./seq')

//創建user模型
// 'user'定義模型名稱.程式會自動在創表時後面加s所以表名最後為users
const User = seq.define('user', {
    // id會自動創建所以不用再建 . 並自動設為主key且自增
    userName: {
        // Sequelize.STRING=varchar(255).不用再特別縮減字符量.
        // 原因 :
        // 1. 若只輸入5個字符只會佔5字符而不是255字符
        // 2. 大數據時代資料比硬體空間寶貴
        // 3. 避免客製化設定造成維護開發困難
        type: Sequelize.STRING,
        // 必填欄位
        allowNULL: false
    },
    password: {
        type: Sequelize.STRING,
        allowNULL: false
    },
    nickName: {
        type: Sequelize.STRING,
    },

});

module.exports = {
    User
}