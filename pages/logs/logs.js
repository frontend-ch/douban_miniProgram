//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    movies:[]
  },
  onLoad: function () {
    var that=this
  },
  loadMovie: function () {
    var url = 'http://douban.uieee.com/v2/movie/'
    var page = this;
    wx.request({
      url: url + '',
      method: 'GET',
      header: {
        'Content-Type': "json"
      },
      success: function (res) {
        var subjects = res.data.subjects;
        // page.storageMovie(subjects)
        page.setData({
          movies: subjects
        })
        console.log(res);
      }
    })
  },
})
