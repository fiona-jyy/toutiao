// pages/show/show.js
Page({

  /**
   * Page initial data
   */
  data: {
    story: {},
    comments: []
  },

  deleteComment(event){
    const data = event.currentTarget.dataset;
    console.log(data)
    wx.request({
      url: `https://cloud.minapp.com/oserve/v1/table/85188/record/${data.id}`,
      method: 'DELETE',
      header: { 'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e' }, // API key from Above

      success() {
        // no need for response data
        // redirect to index page when done
        wx.redirectTo({
          url: '/pages/index/index'
        });
      }
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const id = options.id
    const request = {
      url: `https://cloud.minapp.com/oserve/v1/table/84988/record/${id}`,
      method: 'GET',
      header: {
        'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'
      },
      success: this.getResult
    }

    const requestComment = {
      url: 'https://cloud.minapp.com/oserve/v1/table/85188/record/',
      method: 'GET',
      header: { 'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e' 
      },

      data: {
        where: { // filtering comments for a specific story
          "story_id": { "$eq": id } // story id
        }
      },
        
        success: this.getComments
      }

    wx.request(request)
    wx.request(requestComment)
  },

  getResult(res) {
    this.setData({
      story: res.data
    })
  },
  getComments(res) {
    this.setData({
      comments: res.data.objects.filter(item => !!item.content)
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