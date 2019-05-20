// components/star/star.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      score: {
        type: Number,
        value: 0,
      },
      whitecolor: {
        type: Number,
        value: 0,
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    scoreArr: [0, 0, 0, 0, 0],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    scoreRender: function () {
      var scoreArr = [0, 0, 0, 0, 0]
      var scoreInt = Math.floor(this.data.score);
      var scoreDec = this.data.score - scoreInt;
      for (var i = 0; i < scoreInt; i++) {
        scoreArr[i] = 1;
      }
      scoreArr[scoreInt] = scoreDec;
      this.setData({
        scoreArr: scoreArr
      })
    }
  }
})
