Page({
  data: {
    sexArray: [
      {
        index: 0,
        title: '性别',
        option: ['请选择您的性别', '男', '女'],
      },
    ],
    objArray: [
      {
        index: 0,
        title: '年龄',
        option: ['请选择您的年龄', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16','17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32','33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49','50','51','52','53','54','55'],
      },
    ],
  },
  staticData: {
    name:"",
    idCard: "",
    sex:"",
    age:"",
    phone:""
  },
  bindChange_select1: function (ev) {
    const curindex = ev.target.dataset.current
    this.data.sexArray[curindex].index = ev.detail.value
    this.setData({
      sexArray: this.data.sexArray
    })
    console.log(this.data.sexArray[0].index);
  },
  bindChange_select: function (ev) {
    const curindex = ev.target.dataset.current
    this.data.objArray[curindex].index = ev.detail.value
    this.setData({
      objArray: this.data.objArray
    })
    console.log(this.data.objArray[0].index);
  },
  handleName:function(e){
    this.staticData.name = e.detail.value;
    // console.log(e.detail.value);
  },
  handleIdCard:function(e){
    this.staticData.idCard = e.detail.value;
    // console.log(e.detail.value);
    // console.log(this.staticData.idCard);
  },
  handlePhone:function(e){
    this.staticData.phone = e.detail.value;
    // console.log(e.detail.value);
  },
  handleSubmit:function(){
    if (!this.staticData.name) {
      wx.showToast({
        title: '请填写姓名',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
    if (!this.staticData.idCard) {
      wx.showToast({
        title: '请填写身份证号',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
    if (this.data.sexArray[0].index===0) {
      wx.showToast({
        title: '请选择您的性别',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
    if (this.data.objArray[0].index === 0) {
      wx.showToast({
        title: '请选择您的年龄',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
    if(!this.staticData.phone){
      wx.showToast({
        title: '请填写手机号码',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
  },
  onLoad(option) {
    wx.navigateBack({
      delta: 1
    })
  }

})