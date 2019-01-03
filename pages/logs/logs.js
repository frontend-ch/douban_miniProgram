//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    movies:[]
  },
  onLoad: function () {
    var that=this
    that.loadMovie()
  },
  loadMovie: function () {
    var url = 'http://douban.uieee.com/v2/movie/subject/30410968'
    var page = this;
    wx.request({
      url: url,
      method: 'GET',
      header: {
        'Content-Type': "json"
      },
      success: function (res) {
        var subjects = res.data;
        // page.storageMovie(subjects)
        page.setData({
          movies: subjects
        })
        console.log(page.data.movies);
      }
    })
  },
})
