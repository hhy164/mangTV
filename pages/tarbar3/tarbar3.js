// pages/hot/hot.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:[
          "总榜",
          "综艺",
          "电视剧",
          "电影",
          "动漫"
        ],
        hotList:[
          {
            imageUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww2.sinaimg.cn%2Fmw690%2F001Oy9kEgy1gxfhb74njaj61900u0gv802.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642236677&t=aa056787f542c92c7035d01ae944bedf",
            icon1:"one",
            text:"1",
            t1:"沉睡花园",
            t2:"龚俊|乔欣|经超|周奇奇|王梓轩|王梓...",
            t3:"热播指数:96.28"
          },
          {
            imageUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0410%2Fd21d685fj00q8j3qj007qc000u000f6m.jpg&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642251216&t=cf2fd0585fda903740033b02e0c0591f",
            icon1:"two",
            text:"2",
            t1:"锦衣之下",
            t2:"任嘉伦|谭松韵|韩栋|叶青姚奕辰...",
            t3:"热播指数:95.77"
          },
          {
            imageUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F10194330134%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642251185&t=8026ab72c939f795a720addca39c165b",
            icon1:"three",
            text:"3",
            t1:"加油，你是最棒的",
            t2:"邓伦|马思纯|韩童生|倪虹洁...",
            t3:"热播指数:94.34"
          },
          {
            imageUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11951387340%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642251052&t=e801d00262bd968466181870c88176a2",
            icon1:"gray",
            text:"4",
            t1:"慕白首",
            t2:"任嘉伦|张慧雯|李艺彤|郭昊钧...",
            t3:"热播指数:95.91"
          },
          {
            imageUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190320%2Ff95eb6c619ae44b5872b124be0a88927.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642251100&t=e7527a9bb68ba44dca5fd123a6b64263",
            icon1:"gray",
            text:"5",
            t1:"只为遇见你",
            t2:"张铭恩|文咏珊|魏千翔|汤梦佳...",
            t3:"热播指数:95.71"
          },
          {
            imageUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2F2019%2F1223%2F0fde5cdej00q2yj300033c000nm00dam.jpg&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642292416&t=059747cd8a0fe93ff8791e26da04f308",
            icon1:"gray",
            text:"6",
            t1:"精英律师",
            t2:"蓝盈莹|孙淳|田雨|刘敏涛|朱珠|代旭...",
            t3:"热播指数:95.56"
          },
          {
            imageUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F8000834614%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642292607&t=6f2abd7e743c6f68eacd36b5f4f03764",
            icon1:"gray",
            text:"7",
            t1:"知否知否",
            t2:"朱一龙|施诗|张佳宁|曹翠芬...",
            t3:"热播指数:95.31"
          },
          {
            imageUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F06%2F20160106175915_CtcxG.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642251026&t=0ece2147b6e1f6819fdca3b95e847168&qq-pf-to=pcqq.group",
            icon1:"gray",
            text:"8",
            t1:"蜀山奇侠",
            t2:"关礼杰|杨宝玲|李婉华|龚慈恩|王绮琴...",
            t3:"热播指数:95.31"
          },
          {
            imageUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp7.itc.cn%2Fimages01%2F20210702%2F064c38cc9f914d748f770de54c3adb97.jpeg&refer=http%3A%2F%2Fp7.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642250975&t=40842569fdc93fb7ec70ce8484acaead&qq-pf-to=pcqq.group",
            icon1:"gray",
            text:"9",
            t1:"余生,请多指教",
            t2:"杨紫|肖战|翟子路|马渝捷|李沐宸...",
            t3:"热播指数:95.31"
          },
          {
            imageUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.itc.cn%2Fimages01%2F20210917%2F6245fbebec27483988a815f387119563.jpeg&refer=http%3A%2F%2Fp0.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642250949&t=22d91822e9b115b8f95cf6042275f47f&qq-pf-to=pcqq.group",
            icon1:"gray",
            text:"10",
            t1:"长歌行",
            t2:"迪丽热巴|吴磊|赵露思|刘宇宁|方逸伦...",
            t3:"热播指数:95.28"
          }
        ]
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