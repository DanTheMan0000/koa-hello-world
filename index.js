// adds async/await support
require('babel-core/register')({
  presets: ['es2015-node5', 'stage-3'],
  plugins: [
    'babel-plugin-transform-es2015-parameters',
    'babel-plugin-transform-es2015-destructuring',
    'babel-plugin-transform-async-to-generator'
  ]
});
console.log("This is my first")
