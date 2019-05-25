Page({
  data:{},
  toMemberCenter: function () {
    wx.redirectTo({
      url: '../member-center/member-center'
    })
  },
  toAdvisoryRecord: function () {
    wx.redirectTo({
      url: '../advisory-record/advisory-record'
    })
  },
  toMyInfo:function() {
    wx.redirectTo({
      url: '../my/info'
    })
  },
})
