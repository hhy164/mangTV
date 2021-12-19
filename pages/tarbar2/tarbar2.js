// pages/tarbar2/tarbar2.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        videoList:[
            {
                videoUrl:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
                url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11341806572%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642244922&t=73285b0be2dbe44ded28695fa261fefc",
                name:"可爱柒柒",
                icon1:" https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F27%2F92%2F580187862e092_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642236776&t=7d68162dbda3e2e5c56c6469210f5a58 ",
                icon2:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F01%2F40%2F40%2F04573cfbc31b8db.jpg&refer=http%3A%2F%2Fku.90sjimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642237030&t=26aaf7d3dbf92f455fce6c535927d1db"
            },
            {
                videoUrl:"https://vd2.bdstatic.com/mda-mmf61xbgb5nt4sh6/sc/cae_h264_nowatermark/1639628337339938602/mda-mmf61xbgb5nt4sh6.mp4?v_from_s=hkapp-haokan-hna&amp;auth_key=1639647747-0-0-c12d8d10bfacb8060311393678490197&amp;bcevod_channel=searchbox_feed&amp;pd=1&amp;pt=3&amp;abtest=3000185_1&amp;klogid=0747688072",
                url:"https://img1.baidu.com/it/u=766523959,2437478707&fm=26&fmt=auto",
                name:"天线宝宝",
                icon1:" https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F27%2F92%2F580187862e092_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642236776&t=7d68162dbda3e2e5c56c6469210f5a58 ",
                icon2:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F01%2F40%2F40%2F04573cfbc31b8db.jpg&refer=http%3A%2F%2Fku.90sjimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642237030&t=26aaf7d3dbf92f455fce6c535927d1db"
            },
            {
                videoUrl:"https://vd2.bdstatic.com/mda-mmejvhzfbf5mg0eq/720p/h264/1639576898874206328/mda-mmejvhzfbf5mg0eq.mp4?v_from_s=hkapp-haokan-hnb&amp;auth_key=1639649124-0-0-5117217918bb2790615fc9382d0f6ca1&amp;bcevod_channel=searchbox_feed&amp;pd=1&amp;pt=3&amp;abtest=3000185_1&amp;klogid=2124509046",
                url:"https://img2.baidu.com/it/u=382957196,3622903378&fm=26&fmt=auto",
                name:"大芒微剧",
                icon1:" https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F27%2F92%2F580187862e092_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642236776&t=7d68162dbda3e2e5c56c6469210f5a58 ",
                icon2:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F01%2F40%2F40%2F04573cfbc31b8db.jpg&refer=http%3A%2F%2Fku.90sjimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642237030&t=26aaf7d3dbf92f455fce6c535927d1db"
            },
            {
                videoUrl:"https://vd2.bdstatic.com/mda-mh566idbzbp2v8bk/sc/cae_h264/1628224184771237244/mda-mh566idbzbp2v8bk.mp4?v_from_s=hkapp-haokan-hnb&amp;auth_key=1639654608-0-0-10b2a0254c76b6276ca249527b2572a5&amp;bcevod_channel=searchbox_feed&amp;pd=1&amp;pt=3&amp;abtest=3000185_1&amp;klogid=0408286514",
                url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F20%2F20200520233505_utunp.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642327485&t=797d10bf78d8339f84c4a01c3145b1ce",
                name:"萌宠世界",
                icon1:" https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F27%2F92%2F580187862e092_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642236776&t=7d68162dbda3e2e5c56c6469210f5a58 ",
                icon2:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F01%2F40%2F40%2F04573cfbc31b8db.jpg&refer=http%3A%2F%2Fku.90sjimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642237030&t=26aaf7d3dbf92f455fce6c535927d1db"
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
        console.log("onShareAppMessage");
    }
})