// pages/index/index.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    stories: [],
    title: 'Global News'
  },

  showStory(event) {
    const data = event.currentTarget.dataset;
    const id = data.id;

    wx.navigateTo({
      url: `/pages/show/show?id=${id}`
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this;
    const request = {
      url:
        'https://cloud.minapp.com/oserve/v1/table/84988/record',
      header: { 'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e' },
      success:this.getResult
    } 
    wx.request(request)
  },
  getResult(res) {
    console.log(res)
    this.setData({
      stories: res.data.objects
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    // const request = {

    //   method: 'GET',
    //   success: this.getResult
    // }
    // wx.request(request)
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})