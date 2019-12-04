// import React from 'react'
// import './Fly.css'

// export default function Fly(){
//     var $ = window.$;
//     var i = 0;
//     $(function () {
//         var offset = $("#end").offset();
//         $(".addcar").click(function () {
//             i++;
//             var img = $(this).parent().find("img");
//             var flyer = img.clone().addClass("u-flyer");
//             flyer.fly({
//                 start:
//                 {
//                     left: $(this).offset().left,
//                     top: $(this).offset().top
//                 },
//                 end: {
//                     left: offset.left + 10,
//                     top: offset.top + 10,
//                     width: 0,
//                     height: 0
//                 },
//                 onEnd: function () {
//                     $("#pnum").text("(" + i + ")");
//                     $("#msg").show().animate({ width: '250px' }, 200).fadeOut(1000); //提示信息 
//                     flyer.remove(); //移除dom
//                 }
//             });
//             $(this).css({ "cursor": "default", "background-color": "#cccccc" }).unbind('click');
//         });
//     });
//     return(
//         <div className="community_div_no1">
//             <div class="box">
//         <img src="img/xiang.png" />
//         <button class="button orange addcar">加入购物车</button>
//     </div>
//     <div class="m-sidebar">
//         <div class="cart">
//             <i id="end"></i>
//             <span>购物车</span>
//             <span id="pnum">(0)</span>
//         </div>
//     </div>
//     <div id="msg">已成功加入购物车！</div>
//         </div>
//     )
// }