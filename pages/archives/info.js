Page({
  data: {
    date: '请选择>',
    array: ['请选择>', '男', '女'],
    objectArray: [
      {
        id: 0,
        name: '请选择>'
      },
      {
        id: 1,
        name: '男'
      },
      {
        id: 2,
        name: '女'
      },
    ],
    index: 0,
    mzArray: [
      {
        index: 0,
        title: '民族',
        option: ['请选择>', '汉族','壮族', '藏族', '裕固族', '彝族', '瑶族', '锡伯族', '乌孜别克族', '维吾尔族', '佤族', '土家族', '土族', '塔塔尔族', '塔吉克族', '水族', '畲族', '撒拉族', '羌族', '普米族', '怒族', '纳西族', '仫佬族', '苗族', '蒙古族', '门巴族', '毛南族', '满族', '珞巴族', '僳僳族', '黎族', '拉祜族', '柯尔克孜族', '景颇族', '京族', '基诺族', '回族', '汉族', '赫哲族', '哈萨克族', '哈尼族', '仡佬族', '高山族', '鄂温克族', '俄罗斯族', '鄂伦春族', '独龙族', '东乡族', '侗族', '德昂族', '傣族', '达斡尔族', '朝鲜族', '布依族', '保安族', '布朗族', '白族', '阿昌族',],
      },
    ],
    whArray: [
      {
        index: 0,
        title: '文化程度',
        option: ['请选择>', '学龄前','小学', '初中','高中','专科','本科','以上'],
      },
    ],
    hunyin: [
      {
        index: 0,
        option: ['请选择>', '已婚', '未婚']
      },
    ],
    xuexing: [
      {
        index: 0,
        option: ['请选择>', 'A', 'B', 'AB', 'O']
      },
    ],
    RH: [
      {
        index: 0,
        option: ['请选择>', '阳性', '阴性']
      },
    ],
    yibao: [
      {
        index: 0,
        option: ['请选择>', '城镇医保', '农村医保']
      },
    ]
    
  },
  
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindChange_select: function (ev) {
    const curindex = ev.target.dataset.current
    this.data.Array[curindex].index = ev.detail.value
    this.setData({
      Array: this.data.Array
    })
  },
  bindChange_select2: function (ev) {
    const curindex = ev.target.dataset.current
    this.data.mzArray[curindex].index = ev.detail.value
    this.setData({
      mzArray: this.data.mzArray
    })
  },
  bindChange_select3: function (ev) {
    const curindex = ev.target.dataset.current
    this.data.whArray[curindex].index = ev.detail.value
    this.setData({
      whArray: this.data.whArray
    })
  },
  bindChange_select4: function (ev) {
    const curindex = ev.target.dataset.current
    this.data.hunyin[curindex].index = ev.detail.value
    this.setData({
      whArray: this.data.whArray
    })
  },
  bindChange_select5: function (ev) {
    const curindex = ev.target.dataset.current
    this.data.whArray[curindex].index = ev.detail.value
    this.setData({
      whArray: this.data.whArray
    })
  },
  bindChange_select6: function (ev) {
    const curindex = ev.target.dataset.current
    this.data.whArray[curindex].index = ev.detail.value
    this.setData({
      whArray: this.data.whArray
    })
  },
  onLoad: function (options) {},
  onLoad(option) {
    wx.navigateBack({
      delta: 1
    })
  }

})