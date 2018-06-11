//app.js
App({
  onLaunch: function () {
    // 初始化
    wx.setStorageSync('memberId', null);
    wx.setStorageSync('clubId', 468);
    
  },
  request_url:'https://www.ecartoon.com.cn/wiseclubmp!'

  
})