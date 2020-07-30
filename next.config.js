const isProd = process.env.NODE_ENV === 'production'
// 生产环境可以把 .next/static 下静态资源上传到静态资源服务器
module.exports = {
  assetPrefix: isProd ? '' : '',
}
