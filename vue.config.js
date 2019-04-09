let pages = {}
let pagesArr = [
  { chunk: 'index', title: '首页' },
  { chunk: 'about', title: 'about' },
  { chunk: 'home', title: 'home' }
]
pagesArr.forEach(v => {
  pages[v.chunk] = {
    entry: `src/pages/${v.chunk}/main.js`,
    template: 'public/index.html',
    filename: `${v.chunk}.html`,
    title: `${v.title}`
  }
})
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: '', // 静态资源
  indexPath: 'index.html', // index.html
  filenameHashing: true, // 文件名hash
  pages,
  lintOnSave: true,
  transpileDependencies: [],
  productionSourceMap: true,
  crossorigin: undefined
}
