
Page({
  data:{
    arrayM: ['请选择>', '张三', '李四'],
    objArrayM: [
      {
        id: 0,
        name: '请选择>'
      },
      {
        id: 3,
        name: '张三'
      },
      {
        id: 4,
        name: '李四'
      },
    ],
    index: 0,
  },
  bindPickerChange2(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
})