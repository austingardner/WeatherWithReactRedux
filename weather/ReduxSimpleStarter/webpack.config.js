module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    headers: {
       "Access-Control-Allow-Origin": "*",
       "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
       "Access-Control-Allow-Credentials": true,
       "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    },
    historyApiFallback: true,
    contentBase: './'
  }
};