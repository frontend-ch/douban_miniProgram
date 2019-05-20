//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    near_movies:[],
    hot_movies:[],
    top_movies: [],
    url:'',
    moviesId:''
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function () {
    var that=this
    that.loadMovie()
    that.loadHotMovie()
    that.loadTopMovie()
  },
  
  loadMovie:function(){
    var server = 'coming_soon'
    // var server ='us_box'
    app.http(server,{},(res)=>{
      console.log(res)
      this.setData({
        near_movies:res
      })
    },
    (err)=>{
      console.log('err')
    })
  },
  loadHotMovie: function () {
    var server = 'in_theaters'
    app.http(server, {}, (res) => {
      console.log(res)
      this.setData({
       hot_movies: res
      })
    },
      (err) => {
        console.log('err')
      })
  },
  loadTopMovie:function(){
    var server = 'top250?start=0&count=20'
    app.http(server, {}, (res) => {
      console.log(res)
      this.setData({
        top_movies: res
      })
    },
      (err) => {
        console.log('err')
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
  detailsAction:function(e){
    var arr='';
    console.log(e.currentTarget.dataset.id)
    if (e.currentTarget.dataset.id=="nearMovie"){
      var idx = e.currentTarget.dataset.index
      this.setData({
        arr:this.data.near_movies[idx].id
      })
    } else if (e.currentTarget.dataset.id == "hotMovie"){
      var idx = e.currentTarget.dataset.index
      this.setData({
        arr: this.data.hot_movies[idx].id
      })
    } else if (e.currentTarget.dataset.id == "bordMovie") {
      var idx = e.currentTarget.dataset.index
      this.setData({
        arr: this.data.top_movies[idx].id
      })
    }
    console.log(this.data.arr)
    wx.navigateTo({
      url: 'details/details?moviesId='+this.data.arr,
    })
  }
})
