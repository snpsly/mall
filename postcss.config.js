module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 15, // 75表示750设计稿，37.5表示375设计稿
      propList: ['*']
    }
  }
}