(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["hot"],{"0b70":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"hot"},[a("div",{staticClass:"hotSon"},[a("div",{staticClass:"hot-top"},[a("div",{staticClass:"hotimg"}),a("img",{staticClass:"hotbg",attrs:{src:"https://s3.music.126.net/mobile-new/img/hot_music_bg_3x.jpg?2bfefd3ba37eaffbd66b7d108b9de26a="}}),a("div",{staticClass:"time"},[a("span",[t._v("更新日期："+t._s(((new Date).getMonth()+1).toString().padStart(2,"0"))+"月"+t._s((new Date).getDate().toString().padStart(2,"0"))+"日")])])]),t._l(t.hotlist,(function(s,e){return a("SongList",{key:s.id,class:{cl:e<3},attrs:{item:s,songItemId:t.songItemId,playstart:t.playstart},on:{"get-song-list":function(s){t.$emit("get-song-list",s),t.$emit("get-home-play",t.hotlist)}}},[t._v(t._s((e+1).toString().padStart(2,"0")))])}))],2)])},i=[],n=(a("a9e3"),a("fb6a"),a("6fcc")),o={components:{SongList:n["a"]},props:{songItemId:{type:Number},playstart:{type:Boolean}},data:function(){return{hotlist:[]}},computed:{},created:function(){var t=this;this.axios.get("http://apis.netstart.cn/music/playlist/detail?id=3778678").then((function(s){t.hotlist=s.data.playlist.tracks.slice(0,20)}))}},c=o,l=(a("74ef"),a("2877")),r=Object(l["a"])(c,e,i,!1,null,"4aca43f0",null);s["default"]=r.exports},"74ef":function(t,s,a){"use strict";a("cbf6")},cbf6:function(t,s,a){}}]);
//# sourceMappingURL=hot.094520f2.js.map