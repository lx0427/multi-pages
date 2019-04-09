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
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/dist/', // 更改产出路径
  outputDir: 'dist',
  assetsDir: '', // 静态资源
  indexPath: 'index.html', // index.html
  filenameHashing: true, // 文件名hash
  pages,
  lintOnSave: true,
  transpileDependencies: [],
  productionSourceMap: true,
  crossorigin: undefined,
  css: {
    loaderOptions: {
      'postcss': {
        plugins: [
          require('postcss-px-to-viewport')({
            viewportWidth: 750, // (Number) The width of the viewport.
            // viewportHeight: 1334, // (Number) The height of the viewport.
            unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
            viewportUnit: 'vw', // (String) Expected units.
            selectorBlackList: ['.ignore', '.hairlines', '.mobileSelect'], // (Array) The selectors to ignore and leave as px.
            minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
            mediaQuery: false // (Boolean) Allow px to be converted in media queries.
          })
        ]
      }
    }
  }
}
