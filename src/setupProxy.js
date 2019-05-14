//解决本地跨域问题，直接安装http-proxy-middleware，把当前文件放在src下运行
const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(proxy('/api', { 
        target: 'http://localhost:8080',
        changeOrigin: true
    }))
//   app.use(proxy('/*.svg', { target: 'http://localhost:5000/' }))
}
