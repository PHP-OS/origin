/*const WXAPI = require('../../wxapi/main')*/
const CONFIG = require('../../config.js')
//获取应用实例
var app = getApp()
Page({
  data: {    
    showModal: false,
    inputShowed: false, // 是否显示搜索框
    inputVal: "", // 搜索框内容
    category_box_width: 750, //分类总宽度
    goodsRecommend: [], // 推荐商品
    kanjiaList: [], //砍价商品列表
    pingtuanList: [], //拼团商品列表
    kanjiaGoodsMap: {}, //砍价商品列表
    movies: [
      { url: '../../images/wiper.jpg' },
      { url: '../../images/wiper2.jpg' },
      { url: '../../images/wiper3.jpg' }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: false, // loading
    userInfo: {},
    swiperCurrent: 0,
    selectCurrent: 0,
    categories: [],
    activeCategoryId: 0,
    goods: [],
    
    scrollTop: 0,
    loadingMoreHidden: true,

    coupons: [],

    curPage: 1,
    pageSize: 20,
    cateScrollTop: 0
  },
  ToMore:function(){
    wx.redirectTo({
      url: '../wiki/wiki'
    })
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
  }
  
 
})