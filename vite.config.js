const { createVuePlugin } = require('vite-plugin-vue2');
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  plugins: [createVuePlugin()],
  resolve:{
    alias:{
      'img':resolve('src/assets/img')
    }
  }
};
