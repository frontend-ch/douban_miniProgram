//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    near_movies:[],
    url:''
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function () {
    var that=this
    that.loadMovie()
  },
  
  loadMovie:function(){
    var server = 'coming_soon'
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
