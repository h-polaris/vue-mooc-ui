const glob= require('glob')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const list = {}
// list结构，不能写死，之后手动每次添加，要动态读取
// {
//   card: './components/lib/card/index.js',
//   demo: './components/lib/demo/index.js'
// }

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`)
  console.log('files', files)
  for(let file of files) {
    const component = file.split(/[/.]/)[2]
    console.log('component', component)
    list[component] = `./${file}`
  }
  console.log(list)
}

makeList('components/lib', list)

module.exports = {
  mode: 'development',
  entry: list,
  output: {
    filename: '[name].umd.js', // card.umd.js
    path: path.resolve(__dirname, 'dist'),
    library: 'mui',
    libraryTarget: 'umd'
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  }
}
