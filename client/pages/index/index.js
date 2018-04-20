Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: 'Hello World123！',
    jobList: [
      {
        logo: '../../images/baidu.jpg',
        name: '百度',
        city: '北京',
        posttime: '2018-04-20',
        salary: 100
      }, {
        logo: '../../images/alibaba.jpeg',
        name: '阿里巴巴',
        city: '杭州',
        posttime: '2018-03-20',
        salary: 150
      }, {
        logo: '../../images/baidu.jpg',
        name: '百度',
        city: '北京',
        posttime: '2018-04-20',
        salary: 100
      }, {
        logo: '../../images/alibaba.jpeg',
        name: '阿里巴巴',
        city: '杭州',
        posttime: '2018-03-20',
        salary: 150
      }, {
        logo: '../../images/baidu.jpg',
        name: '百度',
        city: '北京',
        posttime: '2018-04-20',
        salary: 100
      }, {
        logo: '../../images/alibaba.jpeg',
        name: '阿里巴巴',
        city: '杭州',
        posttime: '2018-03-20',
        salary: 150
      }, {
        logo: '../../images/baidu.jpg',
        name: '百度',
        city: '北京',
        posttime: '2018-04-20',
        salary: 100
      }, {
        logo: '../../images/alibaba.jpeg',
        name: '阿里巴巴',
        city: '杭州',
        posttime: '2018-03-20',
        salary: 150
      }
    ]
  },

  handleTap:function(){
      wx.showToast({
          title: '你好，世界',
          icon: 'success',
          duration: 2000
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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