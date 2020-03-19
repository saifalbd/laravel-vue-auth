// tslint:disable

module.exports ={
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: process.env.NODE_ENV === 'production'
    ? '/api'
    : 'http://127.0.0.1:8000/api'
  },
    publicPath: '',
    assetsDir:'',
    outputDir:'../public_html',
    filenameHashing: true,
    indexPath: '../public_html/views/vue.blade.php',
  

    pwa: {
      name: 'vue-auth',
    
      
    }
}

