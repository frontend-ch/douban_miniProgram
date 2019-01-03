// pages/index/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    showTotalBtn:true,
    typeName:'展开',
    actorArr:[],
    imageArr:[],
    moviesId:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.setData({
      moviesId: options.moviesId
    })
    console.log(this.data.moviesId)
    that.loadMovie(options.moviesId)
  },
  loadMovie: function (id) {
    var url = 'http://douban.uieee.com/v2/movie/subject/'+id
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
          movies: subjects,
          
        })
        page.setData({
          actorArr: page.data.movies.directors.concat(page.data.movies.casts, page.data.movies.writers)
        })
        page.setData({
          imageArr: page.data.movies.photos
        })
        console.log(page.data.movies);
      }
    })
  },
  showAll:function(){
    this.setData({
      showTotalBtn: !this.data.showTotalBtn,
    })
    if(this.data.showTotalBtn){
      this.setData({
        typeName:'展开'
      })
    }else{
      this.setData({
        typeName: '收起'
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})