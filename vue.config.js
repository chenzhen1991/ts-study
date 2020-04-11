module.exports = {
  devServer: {
    before (app) {
      app.get('/api/list', (req, res) => {
        res.json([
          { id: 1, name: '类型注解', selected: true },
          { id: 2, name: '编译语言', selected: false },
          { id: 3, name: '语言汇编', selected: true }
        ])
      })
    }
  }
}
