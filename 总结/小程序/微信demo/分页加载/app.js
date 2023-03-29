
App({
  onLaunch: function () {

    // 模拟加载数据
    wx.$request = ({url, data}) => {
      let p = new Promise((resolve, reject) => {

        setTimeout(() => {
          let list = []

          if (data.pageNum < 3) { // 只加载两页数据
            for (let i = 0; i < data.pageSize; i++) {
              list.push({
                id: (data.pageNum - 1) * data.pageSize + i,
                coverUrl: 'http://img.darengongyuan.com/article-1574751190000',
                title: ' 粉丝运营变现系列—— 适合电商卖家【图书类】吸粉链路设计思路',
                createTime: '2019-12-23 16:30:00',
                readed: (data.pageNum - 1) * data.pageSize + i
              })
            }
          }


          let res = {
            code: 200,
            data: {
              rows: list
            }
          }

          resolve(res)
        }, 1000)
      })
      return p
    }


  }
})
