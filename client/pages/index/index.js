Page({

    /**
     * 页面的初始数据
     */
    data: {
        msg: 'Hello World123！',
        jobList: []
    },
    apply: function (e) {

        wx.request({
            url: 'https://cthmcof7.qcloud.la/index.php/job/apply_job',
            data: {
                jobid: e.target.dataset.jobid,
                userid: 1 // 应该获取当前登录用户对应的userid
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: res => {
                if(res.data > 0){
                    wx.showToast({
                      title: '申请成功',
                      icon: 'success',
                      duration: 2000
                    })
                }else{
                    wx.showToast({
                        title: '申请失败',
                        icon: 'warn',
                        duration: 2000
                    })
                }

            }
        })

    },

    handleTap: function () {
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
        wx.request({
            url: 'https://cthmcof7.qcloud.la/index.php/job/get_job_list',
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: res => {
                // console.log(res)
                this.setData({
                    jobList: res.data
                });
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
