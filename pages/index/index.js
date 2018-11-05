//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    movies:[],
    url:''
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function () {
    var that=this
    that.loadMovie()
  },
  
  loadMovie: function () {
    var url ='http://douban.uieee.com/v2/movie/'
    var page = this;
    wx.request({
      url: url+'coming_soon',
      method:'GET',
      header: {
        'Content-Type': "json"
      },
      success: function (res) {
        var subjects= res.data.subjects;
        page.storageMovie(subjects)
        page.setData({
          movies:subjects
        })
        console.log(res);
      }
    })
  },
  storageMovie:function(subjects){
    for(let i=0;i<subjects.length;i++){
      var subject=subjects[i]
      this.storageMovieDetails(subject)
    }
  },
  storageMovieDetails:function(subject){
    var title=subject.title
  },
})
