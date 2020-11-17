module.exports = {
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src'),
      styles: path.resolve(__dirname, 'src/styles'),
      vue$: 'vue/dist/vue.esm.js',
      images: path.resolve(__dirname, 'src/images'),
      '~images': path.resolve(__dirname, 'src/images')
    }
  }
};
