//app.js
App({
  onLaunch: function () {
    // 初始化
    wx.setStorageSync('memberId', null);
    wx.setStorageSync('clubId', 362);
    
  },
  constant:{
     base_pic_url:'https://www.ecartoon.com.cn/picture/',
     base_img_url:'https://fish.ecartoon.com.cn/img/'
  },
  request_url:'https://www.ecartoon.com.cn/wiseclubmp!'

  
})