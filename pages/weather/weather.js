// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://restapi.amap.com/v3/weather/weatherInfo?key=9d20d1bd6df3f8f952e437c9d7ff003f&city=210200',
      success: (res) => {
        this.setData({
          weather: res.data.lives
        })
      }
    })
    wx.request({
      url: 'https://restapi.amap.com/v3/weather/weatherInfo?key=9d20d1bd6df3f8f952e437c9d7ff003f&city=150400',
      success: (res) => {
        this.setData({
          weather: this.data.weather.concat(res.data.lives)
        })
        
      }
    })
    wx.request({
      url: 'https://restapi.amap.com/v3/weather/weatherInfo?key=9d20d1bd6df3f8f952e437c9d7ff003f&city=150200',
      success: (res) => {
        this.setData({
          weather: this.data.weather.concat(res.data.lives)
        })
        
      }
    })
    wx.request({
      url: 'https://restapi.amap.com/v3/weather/weatherInfo?key=9d20d1bd6df3f8f952e437c9d7ff003f&city=110000',
      success: (res) => {
        this.setData({
          weather: this.data.weather.concat(res.data.lives)
        })
        
      }
    })
    wx.request({
      url: 'https://restapi.amap.com/v3/weather/weatherInfo?key=9d20d1bd6df3f8f952e437c9d7ff003f&city=330100',
      success: (res) => {
        this.setData({
          weather: this.data.weather.concat(res.data.lives)
        })
        
      }
    })
    wx.request({
      url: 'https://restapi.amap.com/v3/weather/weatherInfo?key=9d20d1bd6df3f8f952e437c9d7ff003f&city=310000',
      success: (res) => {
        this.setData({
          weather: this.data.weather.concat(res.data.lives)
        })
        
      }
    })
    wx.request({
      url: 'https://restapi.amap.com/v3/weather/weatherInfo?key=9d20d1bd6df3f8f952e437c9d7ff003f&city=440100',
      success: (res) => {
        this.setData({
          weather: this.data.weather.concat(res.data.lives)
        })
        
      }
    })
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