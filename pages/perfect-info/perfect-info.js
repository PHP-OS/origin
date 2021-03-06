Page({
  data: {
    objArray: [
      {
        index: 0,
        title: '性别',
        option: ['女', '男'],
      },
      {
        index: 0,
        title: '警种',
        option: ['交警', '武警'],
      },
      {
        index: 0,
        title: '警衔',
        option: ['二级', '一级'],
      },
      {
        index: 0,
        title: '职级',
        option: ['二级', '一级'],
      },
    ],
    stArray: [
      {
        index: 0,
        title: '身体状况',
        option: ['亚健康', '健康', '疾病'],
      },
    ],
  },
  bindChange_select: function (ev) {
    const curindex = ev.target.dataset.current
    this.data.objArray[curindex].index = ev.detail.value
    this.setData({
      objArray: this.data.objArray
    })
  },
  bindChange_select1: function (ev) {
    const curindex = ev.target.dataset.current
    this.data.stArray[curindex].index = ev.detail.value
    this.setData({
      stArray: this.data.stArray
    })
  }
})