Page({
  data: {
    selected: true,
    selected1: false,
    selected2: false,
    selected3: false,
    selected4: false,
    selected5: false
  },
  selected: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false,
      selected5: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected2: false,
      selected3: false,
      selected4: false,
      selected5: false,
      selected1: true
    })
  },
  selected2: function (e) {
    this.setData({
      selected1: false,
      selected: false,
      selected3: false,
      selected4: false,
      selected5: false,
      selected2: true
    })
  },
  selected3: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected: false,
      selected4: false,
      selected5: false,
      selected3: true
    })
  },
  selected4: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected3: false,
      selected: false,
      selected5: false,
      selected4: true
    })
  },
  selected5: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false,
      selected: false,
      selected5: true
    })
  }
})