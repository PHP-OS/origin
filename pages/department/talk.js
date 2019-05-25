const app = getApp();
var inputVal = '';
var msgList = [];
var windowWidth = wx.getSystemInfoSync().windowWidth;
var windowHeight = wx.getSystemInfoSync().windowHeight;
var keyHeight = 0;

function initData(that) {
  inputVal = '';

  msgList = [{
    speaker: 'server',
    contentType: 'text',
    content: '你好'
  },
  // {
  //   speaker: 'customer',
  //   contentType: 'text',
  //   content: '你好,医生'
  // }
  ]
  that.setData({
    msgList,
    inputVal
  })
}

/**
 * 计算msg总高度
 */
// function calScrollHeight(that, keyHeight) {
//   var query = wx.createSelectorQuery();
//   query.select('.scrollMsg').boundingClientRect(function(rect) {
//   }).exec();
// }

Page({
  data: {
    showModal: false,
    time: '15:45',//默认起始时间  
    time2: '16:00',//默认结束时间 
    scrollHeight: '100vh',
    inputBottom: 0
  },
  submit: function () {
    this.setData({
      showModal: true
    })
  },
  preventTouchMove: function () { },
  go: function () {
    this.setData({
      showModal: false
    })
  },
  onShow(options) {
    let self = this;
    let aShow = JSON.parse(sessionStorage.getItem('aShow')) || '';
    if (aShow) {
      wx.showModal({
        title: 'hahahahah',
        success: function (res) {
          sessionStorage.setItem('aShow', false);
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  },
  // 时间段选择  
  bindTimeChange(e) {
    let that = this;
    console.log(e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindTimeChange2(e) {
    let that = this;
    that.setData({
      time2: e.detail.value,
    })
  },
  onLoad: function (options) {
    initData(this);
    this.setData({
      cusHeadIcon: app.globalData.userInfo.avatarUrl,
    });
  },
  focus: function (e) {
    keyHeight = e.detail.height;
    this.setData({
      scrollHeight: (windowHeight - keyHeight) + 'px'
    });
    this.setData({
      toView: 'msg-' + (msgList.length - 1),
      inputBottom: keyHeight + 'px'
    })
    //计算msg高度
    // calScrollHeight(this, keyHeight);

  },

  //失去聚焦(软键盘消失)
  blur: function (e) {
    this.setData({
      scrollHeight: '100vh',
      inputBottom: 0
    })
    this.setData({
      toView: 'msg-' + (msgList.length - 1)
    })

  },

  /**
   * 发送点击监听
   */
  sendClick: function (e) {
    msgList.push({
      speaker: 'customer',
      contentType: 'text',
      content: e.detail.value
    })
    console.log(e.detail.value)
    inputVal = '';
    this.setData({
      msgList,
      inputVal
    });


  },
  upimg: function () {
    var that = this;
    wx.chooseImage({
      success: function (res) {
        var data = {
          program_id: app.jtappid,
          openid: app._openid,
          zx_info_id: zx_info_id,
        }
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'pg.php/ZXinfo/session_submit', //提交信息至后台
          filePath: tempFilePaths[0],
          name: 'content', //文件对应的参数名字(key)
          formData: data,  //其它的表单信息
          success: function (res) {
            var a = true;
            that.loaddata(a);
            message = ''
          }
        })
      }
    })
  },
  /**
   * 退回上一页
   */
  toBackClick: function () {
    wx.navigateBack({})
  }
})