(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{116:function(e,t,a){},117:function(e,t,a){},148:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),c=a.n(s),r=a(29),i=a.n(r),o=(a(116),a(117),a(9)),l=a.n(o),u=a(19),j=a(85),b=a(86),g=a(110),d=a(105),p=a(6),h=a(87),f=a(193),O=a(190),A=a(199),m=a(200),x=a(106),v=a(191),k=a(194),w=a(20),N=a.n(w),S=a(196),C=(a(148),function(e){var t=Object(s.useState)(e.tags),a=Object(p.a)(t,2),c=a[0],r=a[1],i=Object(s.useState)(-1),o=Object(p.a)(i,2),j=o[0],b=o[1],g=Object(s.useState)(""),d=Object(p.a)(g,2),h=d[0],f=d[1],O=Object(s.useState)(!1),A=Object(p.a)(O,2),m=A[0],w=A[1],C=Object(s.useState)(""),P=Object(p.a)(C,2),B=P[0],y=P[1],E=function(t){function a(){return(a=Object(u.a)(l.a.mark((function t(a){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N()({url:"https://songbook-cvs.herokuapp.com/songbook/"+e.id,method:"PATCH",data:{tags:a}});case 2:if(!(200!==(n=t.sent).status&201!==n.status)){t.next=5;break}throw new Error("Error!");case 5:return t.next=7,n.data;case 7:return s=t.sent,t.abrupt("return",s);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(e){return a.apply(this,arguments)})(t).then((function(e){})).catch((function(e){console.log("error",e.message)}))},T=function(t){c[j]=h.toLowerCase(),r(c),E(c),b(-1),f(""),y(""),w(!1),e.setTagsMissing(!1)},Q=function(e){b(-1),f(""),y(""),w(!1)},I=function(e){f(e.target.value),y(""),w(!1)},_=c?c.map((function(e,t){var a=e.length>30;return j===t?Object(n.jsx)(v.a,{size:"small",className:"tag-input",value:h,onChange:I,onBlur:Q,onPressEnter:T},t):Object(n.jsx)(k.a,{className:"edit-tag",closable:!0,onClose:function(){return function(e){var t=c;t.splice(e,1),r(t)}(t)},children:Object(n.jsx)("span",{onDoubleClick:function(a){b(t),f(e),a.preventDefault()},children:a?"".concat(e.slice(0,30),"..."):e})},t)})):[];return Object(n.jsxs)("div",{className:"tags",children:[_,m&&Object(n.jsx)(v.a,{type:"text",size:"small",className:"tag-input",value:B,onChange:function(e){y(e.target.value)},onBlur:function(){y(""),w(!1),b(-1),f("")},onPressEnter:function(t){var a=t.target.value.toLowerCase();if(void 0===c||null===c){var n=[a];E(n),r(n)}else if(a&&-1===c.indexOf(a)){var s=[].concat(Object(x.a)(c),[a]);E(s),r(s)}y(""),w(!1),b(-1),f(""),e.setTagsMissing(!1)}}),!m&&Object(n.jsxs)(k.a,{className:"site-tag-plus",onClick:function(){w(!0),b(-1),f("")},children:[Object(n.jsx)(S.a,{})," Add Tag"]})]})}),P=a(69),B=a.n(P),y=function(e){var t=Object(s.useState)("Loading ..."),a=Object(p.a)(t,2),c=a[0],r=a[1],i="https://orion.apiseeds.com/api/music/lyric/"+e.artist.replace(/ /g,"%20")+"/"+e.song.replace(/ /g,"%20")+"?apikey=DoQSFaMhpnnHth7pgqmXYJjkNtV1Fn1VGZAjGwpKvaCGiKdIQk1LS1OeCApW8RN9";return"Loading ..."===c&&function(){function t(){return(t=Object(u.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N()({url:i,method:"GET"});case 2:if(!(200!==(t=e.sent).status&201!==t.status)){e.next=5;break}throw new Error("Error!");case 5:return e.next=7,t.data;case 7:return a=e.sent,n=a.result,e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return t.apply(this,arguments)})().then((function(t){var a=e.artist.toLowerCase().replace(/ /g,""),n=t.artist.name.toLowerCase().replace(/ /g,"");B()(a,n)<5||t.similarity>.9?r(t.track.text):(console.log("levenshtein:",a,n,B()(a,n)),console.log("similarity:",t.similarity),r("No lyrics found."))})).catch((function(e){r("No lyrics found."),console.log(e.message)}))}(),Object(n.jsx)("div",{style:{whiteSpace:"pre-line"},children:c})},E=a(197),T=a(198),Q=(a(176),function(e){var t=Object(s.useState)(e.tabs),a=Object(p.a)(t,2),c=a[0],r=a[1],i=Object(s.useState)(e.video),o=Object(p.a)(i,2),j=o[0],b=o[1],g=Object(s.useState)(e.pic),d=Object(p.a)(g,2),h=d[0],f=d[1],O=Object(s.useState)(!1),A=Object(p.a)(O,2),m=A[0],x=A[1],w=Object(s.useState)(!1),S=Object(p.a)(w,2),C=S[0],P=S[1],B=Object(s.useState)(!1),y=Object(p.a)(B,2),Q=y[0],I=y[1],_=Object(s.useState)(""),M=Object(p.a)(_,2),D=M[0],G=M[1],V=e.isDrawerFold?165:400,F=e.isDrawerFold?230:480,X=function(t){function a(){return(a=Object(u.a)(l.a.mark((function t(a){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N()({url:"https://songbook-cvs.herokuapp.com/songbook/"+e.id,method:"PATCH",data:a});case 2:if(!(200!==(n=t.sent).status&201!==n.status)){t.next=5;break}throw new Error("Error!");case 5:return t.next=7,n.data;case 7:return s=t.sent,t.abrupt("return",s);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(e){return a.apply(this,arguments)})(t).then((function(e){})).catch((function(e){console.log("error",e.message)}))},L=function(e){G(e.target.value)},R=function(){m&&x(!1),C&&P(!1),Q&&I(!1),G("")},Y=function(){m?(D.length>0?(X({link:D}),e.setTabsMissing(!1)):(X({link:"null"}),e.setTabsMissing(!0)),r(D),x(!1)):C?(D.length>0?(X({videourl:D}),e.setVideoMissing(!1)):(X({videourl:"null"}),e.setVideoMissing(!0)),b(D),P(!1)):Q&&(D.length>0?(X({picurl:D}),e.setPicMissing(!1)):(X({picurl:"null"}),e.setPicMissing(!0)),f(D),I(!1)),G("")},U=function(e,t){var a,n,s=!1,c=function(e){var t=document.createElement("canvas").getContext("2d");return t.font="12px sans-serif",t.measureText(e).width};for(a=e.length;c(e.slice(0,a))>t;a--)n=a,s=!0;return s?"".concat(e.slice(0,n),"..."):e};return Object(n.jsxs)("div",{className:"links",children:[Object(n.jsxs)("div",{children:["\xa0\xa0Tabs:",m?Object(n.jsx)(v.a,{size:"small",style:{width:F},className:"tag-input",value:D,onChange:L,onBlur:R,onPressEnter:Y},"link_input_".concat(e.id)):Object(n.jsx)("a",{href:c,target:"_Blank",rel:"noreferrer",children:Object(n.jsxs)(k.a,{className:"links__tag",children:[Object(n.jsx)(E.a,{}),"\xa0\xa0",U(c,V),Object(n.jsx)(T.a,{onClick:function(e){G(c),x(!0),e.preventDefault()}})]},"tabs")})]}),Object(n.jsxs)("div",{children:["Video:",C?Object(n.jsx)(v.a,{size:"small",style:{width:F},className:"tag-input",value:D,onChange:L,onBlur:R,onPressEnter:Y},"link_input_".concat(e.id)):Object(n.jsx)("a",{href:j,target:"_Blank",rel:"noreferrer",children:Object(n.jsxs)(k.a,{className:"links__tag",children:[Object(n.jsx)(E.a,{}),"\xa0\xa0",U(j,V),Object(n.jsx)(T.a,{onClick:function(e){G(j),P(!0),e.preventDefault()}})]},"video")})]}),Object(n.jsxs)("div",{children:["\xa0\xa0\xa0\xa0Pic:",Q?Object(n.jsx)(v.a,{size:"small",style:{width:F},className:"tag-input",value:D,onChange:L,onBlur:R,onPressEnter:Y},"link_input_".concat(e.id)):Object(n.jsx)("a",{href:h,target:"_Blank",rel:"noreferrer",children:Object(n.jsxs)(k.a,{className:"links__tag",children:[Object(n.jsx)(E.a,{}),"\xa0\xa0",U(h,V),Object(n.jsx)(T.a,{onClick:function(e){G(h),I(!0),e.preventDefault()}})]},"pic")})]})]})}),I=a(192),_=(a(177),function(e){var t=Object(s.useState)(e.bass?"b":e.piano?"p":"g"),a=Object(p.a)(t,2),c=a[0],r=a[1],i=Object(s.useState)(e.artist),o=Object(p.a)(i,2),j=o[0],b=o[1],g=Object(s.useState)(e.song),d=Object(p.a)(g,2),h=d[0],f=d[1],O=Object(s.useState)(!1),A=Object(p.a)(O,2),m=A[0],x=A[1],w=Object(s.useState)(!1),S=Object(p.a)(w,2),C=S[0],P=S[1],B=Object(s.useState)(""),y=Object(p.a)(B,2),E=y[0],Q=y[1],_=e.isDrawerFold?165:400,M=function(t){function a(){return(a=Object(u.a)(l.a.mark((function t(a){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N()({url:"https://songbook-cvs.herokuapp.com/songbook/"+e.id,method:"PATCH",data:a});case 2:if(!(200!==(n=t.sent).status&201!==n.status)){t.next=5;break}throw new Error("Error!");case 5:return t.next=7,n.data;case 7:return s=t.sent,t.abrupt("return",s);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(e){return a.apply(this,arguments)})(t).then((function(e){console.log("Success",e)})).catch((function(e){console.log("error",e.message)}))},D=function(e){Q(e.target.value)},G=function(){m&&x(!1),C&&P(!1),Q("")},V=function(){m?(E.length>0?M({artist:E}):M({artist:"null"}),b(E),e.setArtist(E),x(!1)):C&&(E.length>0?M({song:E}):M({song:"null"}),f(E),e.setSong(E),P(!1)),Q("")},F=function(e,t){var a,n,s=!1,c=function(e){var t=document.createElement("canvas").getContext("2d");return t.font="12px sans-serif",t.measureText(e).width};for(a=e.length;c(e.slice(0,a))>t;a--)n=a,s=!0;return s?"".concat(e.slice(0,n),"..."):e};return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"Extras__radioType",children:Object(n.jsxs)(I.a.Group,{onChange:function(t){switch(t.target.value){case"g":e.setIsBass(!1),e.setIsPiano(!1),M({bass:!1,piano:!1});break;case"b":e.setIsBass(!0),e.setIsPiano(!1),M({bass:!0,piano:!1});break;case"p":e.setIsBass(!1),e.setIsPiano(!0),M({bass:!1,piano:!0})}r(t.target.value)},value:c,children:[Object(n.jsx)(I.a,{value:"g",children:"Guitar"}),Object(n.jsx)(I.a,{value:"b",children:"Bass"}),Object(n.jsx)(I.a,{value:"p",children:"Piano"})]})}),Object(n.jsx)("div",{className:"Extra__spacer"}),Object(n.jsxs)("div",{className:"Extras__artist",children:["\xa0\xa0Artist:",m?Object(n.jsx)(v.a,{size:"small",className:"Extras__input",value:E,onChange:D,onBlur:G,onPressEnter:V},"link_input_".concat(e.id)):Object(n.jsxs)(k.a,{children:[F(j,_),"\xa0\xa0",Object(n.jsx)(T.a,{onClick:function(e){Q(j),x(!0),e.preventDefault()}})]},"Artist")]}),Object(n.jsxs)("div",{className:"Extras__song",children:["\xa0\xa0\xa0Song:",C?Object(n.jsx)(v.a,{size:"small",className:"Extras__input",value:E,onChange:D,onBlur:G,onPressEnter:V},"link_input_".concat(e.id)):Object(n.jsxs)(k.a,{children:[F(h,_),"\xa0\xa0",Object(n.jsx)(T.a,{onClick:function(e){Q(h),P(!0),e.preventDefault()}})]},"Song")]})]})}),M=function(e){var t=Object(s.useState)(350),a=Object(p.a)(t,2),c=a[0],r=a[1],i=Object(s.useState)(!0),o=Object(p.a)(i,2),l=o[0],u=o[1],j=Object(s.useState)(e.page.artist),b=Object(p.a)(j,2),g=b[0],d=b[1],x=Object(s.useState)(e.page.song),v=Object(p.a)(x,2),k=v[0],w=v[1],N=e.page.videourl?e.page.videourl.split("=")[1]:"",S={height:l?227:310,width:l?300:550,playerVars:{autoplay:0}};Object(s.useEffect)((function(){P(l)}),[l]);var P=function(e){r(e?350:600),u(e)};return Object(n.jsxs)(f.a,{title:Object(n.jsxs)("div",{children:[l?Object(n.jsx)(A.a,{onClick:function(){return P(!1)}}):Object(n.jsx)(m.a,{onClick:function(){return P(!0)}}),"\xa0\xa0",l?k.toUpperCase():g.toUpperCase()+" - "+k.toUpperCase()]}),placement:"right",closable:!0,onClose:function(){u(!0),e.setDrawerVisible(!1)},visible:e.drawerVisible,width:c,children:[e.page.videourl?Object(n.jsx)(h.a,{videoId:N,opts:S}):Object(n.jsx)("img",{src:e.page.picurl,className:"Page-drawer__artwork",alt:"pic_missing"}),Object(n.jsx)(O.a,{orientation:"left",plain:!0,children:Object(n.jsx)("span",{className:"Page-drawer__diviser",children:"Links"})}),Object(n.jsx)(Q,{tabs:e.page.link,video:e.page.videourl,pic:e.page.picurl,id:e.page.id,setTabsMissing:e.setTabsMissing,setVideoMissing:e.setVideoMissing,setPicMissing:e.setPicMissing,isDrawerFold:l}),Object(n.jsx)(O.a,{orientation:"left",plain:!0,children:Object(n.jsx)("span",{className:"Page-drawer__diviser",children:"Tags"})}),Object(n.jsx)(C,{tags:e.page.tags,id:e.page.id,setTagsMissing:e.setTagsMissing}),Object(n.jsx)(O.a,{orientation:"left",plain:!0,children:Object(n.jsx)("span",{className:"Page-drawer__diviser",children:"Extras"})}),Object(n.jsx)(_,{artist:e.page.artist,song:e.page.song,piano:e.page.piano,bass:e.page.bass,setArtist:d,setSong:w,isDrawerFold:l,id:e.page.id,setIsPiano:e.setIsPiano,setIsBass:e.setIsBass}),Object(n.jsx)(O.a,{orientation:"left",plain:!0,children:Object(n.jsx)("span",{className:"Page-drawer__diviser",children:"Lyrics"})}),Object(n.jsx)(y,{artist:e.page.artist,song:e.page.song})]})},D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACwklEQVRoge1Yy47aMBQ9thM2hVlTiSXsqFCnoxZWsIAvGPUDRl2OxKj9oOkPVLMHNkFQIbWqKiQ+AXXYkxXCdTfjNBC/SGCmjxzJIvjca9+Tex07AXLkyJHjr4Pv+5993xd7bXIs/hAQE9ntdl8QQj4CeAmAyv4gCJT2nU4HQgiMx2Ml3263QQgx+sfAAXwnhFwNh8OFLkbPJIAQcgvglYqrVCo7/5fLJTjnEEIYeUKIlt8DA3AhhLgF8DqVAADnAPD28hLPy+WoMwgCMMYSxu/7fQDAdDpV8h9ubgAAk8lEyfevr6PrH/f3+HR3F8WQVgAFgGq1miQoTfQ9KxaPxtdqNXmZVBqDTQAAoHR2luhTBRC3y8q7IrUAVQnE7bLyrnASoLpbtr6svCv+XwGqEojbZeVd8e9nQAjhfLfidll5Obfc+HRwEvBUGTipgMdYA/JYYoJRgBDiyTNgE/HHl5ANqTPwWCWUOQOqgQFgu92iUCgAADabTcIuK++K1AJms5nRLivvCicPSulOazabCZtWq3U0XjYX2N7IQAhJ1OtgMAAANBoNcM6xWCyUfPnhJWi1Win5er0Oxhjm87lx/tQCbINITsd7nhfZpfG3BQ84ZkAHSqnxKaF60uz7m0rl5BmQAtJmQAo4WQZsg9gyIAWY/G0ZsCGzABNsJcQYO70A00AywCwlxBhzClQHJwE62Ca3lZDneak2r50xXIxMGTAtcluGZAmdPAO6uyQF6HiZAZP/Ibuucg4XI1OAnPNMAmwL2QYnAbqtXmZAx0sBJp5SquVdYBPwEwD1fR/F2HdLAAjDMBKg4tfrdSTA8zyUSiWlP6VU6R+GobzkpgCNq6fX630FcGGyAX6/eOy3nYli5x7bGWgPX0aj0RsdaTsLXT18nz+H4StxPBgZuEpA/NcBHMA3Qsg7V4ccOXLkyHEwfgGWMvrsH43YhwAAAABJRU5ErkJggg==",G=a(195),V=(a(178),function(e){var t=e.isPiano;return Object(n.jsx)("div",{className:"piano",id:"piano",children:t&&Object(n.jsx)(G.a,{placement:"bottomRight",title:"Play this on keys!",children:Object(n.jsx)("img",{className:"piano__img",src:D,alt:D})})})}),F="data:image/png;base64,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",X=(a(180),function(e){var t=e.isBass;return Object(n.jsx)("div",{className:"bass",id:"piano",children:t&&Object(n.jsx)(G.a,{placement:"bottomRight",title:"Play this on bass!",children:Object(n.jsx)("img",{className:"bass__img",src:F,alt:F})})})}),L=a(201),R=(a(181),function(e){var t=Object(s.useState)(e.checked),a=Object(p.a)(t,2),c=a[0],r=a[1],i=(e.isVisitor,function(t){!function(t){function a(){return(a=Object(u.a)(l.a.mark((function t(a){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N()({url:"https://songbook-cvs.herokuapp.com/songbook/"+e.id,method:"PATCH",data:{checked:a}});case 2:if(!(200!==(n=t.sent).status&201!==n.status)){t.next=5;break}throw new Error("Error!");case 5:return t.next=7,n.data;case 7:return s=t.sent,t.abrupt("return",s);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(e){return a.apply(this,arguments)})(t).then((function(e){})).catch((function(e){console.log("error",e.message)}))}(t),r(t)});return Object(n.jsx)("div",{className:"CheckAdd",id:"checkAdd",children:c?Object(n.jsx)(G.a,{placement:"top",title:"Click to mark this song as unknown.",children:Object(n.jsx)(L.a,{onClick:function(){return i(!1)},className:"CheckAdd__ico clickable"})}):Object(n.jsx)(G.a,{placement:"top",title:"Click to mark this song as known.",children:Object(n.jsx)(L.a,{onClick:function(){return i(!0)},className:"CheckAdd__ico clickable grey_check"})})})}),Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABhklEQVRoge3ZsUsCYRjH8d/jhaQmlkuLf0FBU3SGBGpDm1vQ1NAQNNQU1ChNQZAEDTU1NLW3ieFwELa1tNRYQwRJ2ImEd09Di0SJD93xGjyf8e7e532/cDcdoJT610i6oJ23M2xxhYElAMmAztEipmrXwm6q2riXLBQFtPN2xrf4FkBadLzBvUbYmolfXT8NuiAimc4WVxDe4QEg7cM7lCyQBXy9NuEi2R6iAAT3zveTkjwsDRg6GmCaBpimAaZpgGkaYJoGmKYBpmmAaRpgmgaYpgGmaYBpGmBaWAEM4NInWiCfZkE4B+CFsdFIwPM+QLhgpv1krXHXc331LT+/Z1n+JsDrAEaD2lD0g+N9cY5/udUC6Czi4SBebzz2n2FPMvEGAVtgTPz0zFjtZuBz/TXgmQknXid6NO44Tcmsl1wuGRvtrgG8DSDTey/0ACI8MNNxwoudUr3ekcz4jpeno24zsQLGDoApQBYg4hZtxy1kS1wO/uPnMiJuIVtyi7YT9Gyl1BD7BGkmaI4lwsjMAAAAAElFTkSuQmCC",U=(a(182),function(e){var t=function(t){e.setIsBookmarked(t),function(t){function a(){return(a=Object(u.a)(l.a.mark((function t(a){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N()({url:"https://songbook-cvs.herokuapp.com/songbook/"+e.id,method:"PATCH",data:{bookmark:a}});case 2:if(!(200!==(n=t.sent).status&201!==n.status)){t.next=5;break}throw new Error("Error!");case 5:return t.next=7,n.data;case 7:return s=t.sent,t.abrupt("return",s);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(e){return a.apply(this,arguments)})(t).then((function(e){var t=e;console.log("Sucess",t)})).catch((function(e){console.log("error",e.message)}))}(t)},a=e.isBookmarked;return Object(n.jsx)("div",{className:"bookmark",id:"bookmark",children:a?Object(n.jsx)(G.a,{placement:"right",title:"Delete the bookmark.",children:Object(n.jsx)("img",{onClick:function(){return t(!1)},className:"bookmark__img clickable",src:Y,alt:Y})}):Object(n.jsx)(G.a,{placement:"right",title:"Bookmark this.",children:Object(n.jsx)("img",{onClick:function(){return t(!0)},className:"bookmark__img clickable bookmark__grey",src:Y,alt:Y})})})}),W=(a(183),function(e){var t=Object(s.useState)(e.title.replace(/ /g,"").length>23?"".concat(e.title.replace("-","/").replace(/ /g,"").slice(0,25),"..."):e.title.replace("-","/").replace(/ /g,"")),a=Object(p.a)(t,2),c=a[0],r=a[1],i=Object(s.useState)(!1),o=Object(p.a)(i,2),j=o[0],b=o[1],g=Object(s.useState)(e.title.replace("-","/")),d=Object(p.a)(g,2),h=d[0],f=d[1];return Object(n.jsx)(n.Fragment,{children:j?Object(n.jsx)(v.a,{size:"small",className:"title__input",value:h,onChange:function(e){f(e.target.value)},onBlur:function(){b(!1),f(e.title.replace("-","/")),console.log("cancel")},onPressEnter:function(){!function(t){function a(){return(a=Object(u.a)(l.a.mark((function t(a){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N()({url:"https://songbook-cvs.herokuapp.com/songbook/"+e.id,method:"PATCH",data:{title:a}});case 2:if(!(200!==(n=t.sent).status&201!==n.status)){t.next=5;break}throw new Error("Error!");case 5:return t.next=7,n.data;case 7:return s=t.sent,t.abrupt("return",s);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(e){return a.apply(this,arguments)})(t).then((function(e){console.log("Sucess",e)})).catch((function(e){console.log("error",e.message)}))}(h.replace("/","-")),r(h.replace(/ /g,"").length>23?"".concat(h.replace("-","/").replace(/ /g,"").slice(0,23),"..."):h.replace("-","/").replace(/ /g,"")),b(!1)}},"title_input_".concat(e.id)):Object(n.jsx)("div",{className:"Page__title",onDoubleClick:function(){return b(!0)},children:c})})}),q=(a.p,a(184),function(e){var t=Object(s.useState)(e.page.bookmark),a=Object(p.a)(t,2),c=a[0],r=a[1],i=Object(s.useState)(e.page.piano),o=Object(p.a)(i,2),l=o[0],u=o[1],j=Object(s.useState)(e.page.bass),b=Object(p.a)(j,2),g=b[0],d=b[1],h=Object(s.useState)(!1),f=Object(p.a)(h,2),O=f[0],A=f[1],m=Object(s.useState)("null"===e.page.link),x=Object(p.a)(m,2),v=x[0],k=x[1],w=Object(s.useState)(null===e.page.tags),N=Object(p.a)(w,2),S=N[0],C=N[1],P=Object(s.useState)("null"===e.page.videourl),B=Object(p.a)(P,2),y=B[0],E=B[1],T=Object(s.useState)("null"===e.page.picurl),Q=Object(p.a)(T,2),I=Q[0],_=Q[1],D=Object(s.useState)(!!(v||S||y||I)),G=Object(p.a)(D,2),F=G[0],L=G[1];Object(s.useEffect)((function(){L(!!(v||S||y||I))}),[v,S,y,I]);var Y=function(){A(!0)};return Object(n.jsxs)("div",{className:"Page__main",children:[F&&Object(n.jsxs)("div",{className:"Page__notab",onClick:Y,children:[Object(n.jsx)("div",{className:"Page__notab-text",children:function(){var e=[];if(F)return!0===v&&e.push("TABS MISSING"),!0===S&&e.push("HASHTAGS MISSING"),!0===y&&e.push("VIDEO MISSING"),!0===I&&e.push("PICTURE MISSING"),e.map((function(e,t){return Object(n.jsxs)("div",{children:[e," ",Object(n.jsx)("br",{})]},t)}))}()}),Object(n.jsx)("div",{className:"Page__notab Page__notab-background"})]}),Object(n.jsx)("div",{className:"Page__opendrawer",onClick:Y,children:Object(n.jsx)("img",{src:e.page.picurl,alt:"pic_missing",className:"Page__artwork"})}),Object(n.jsx)(U,{id:e.page.id,setIsBookmarked:r,isBookmarked:c}),Object(n.jsxs)("div",{className:"Page__icons",children:[Object(n.jsx)(V,{isPiano:l}),Object(n.jsx)(X,{isBass:g})]}),Object(n.jsx)("div",{className:"Page__actionicon",children:Object(n.jsx)(R,{isVisitor:!1,checked:e.page.checked,id:e.page.id})}),Object(n.jsx)(W,{title:e.page.title,id:e.page.id}),Object(n.jsx)(M,{page:e.page,setDrawerVisible:A,drawerVisible:O,setTabsMissing:k,setTagsMissing:C,setVideoMissing:E,setPicMissing:_,setIsPiano:u,setIsBass:d})]},e.page.id)}),z=(a(185),function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={songbookPages:[],isLoading:!0},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.loadPages()}},{key:"loadPages",value:function(){var e=this;function t(){return(t=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N()({url:"https://songbook-cvs.herokuapp.com/songbook",method:"GET"});case 2:if(!(200!==(t=e.sent).status&201!==t.status)){e.next=5;break}throw new Error("Error!");case 5:return e.next=7,t.data;case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return t.apply(this,arguments)})().then((function(t){var a=t;e.setState({songbookPages:a}),e.setState({isLoading:!1})})).catch((function(e){console.log(e.message)}))}},{key:"render",value:function(){var e=this.state.songbookPages.map((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)(q,{page:e})},e.id)}));return Object(n.jsx)("div",{style:{margin:30},children:this.state.isLoading?Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:"https://avatars0.githubusercontent.com/u/12551446",className:"book-loader",alt:"Loading"}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{style:{fontSize:18},children:"Loading ... "})]}):Object(n.jsx)("div",{className:"Book__main",children:e})})}}]),a}(s.Component)),H=(a(186),function(){return Object(n.jsxs)("div",{className:"Footer__Main",children:["Songbook by ",Object(n.jsx)("a",{href:"http://www.clementvanstaen.com",target:"_blank",rel:"noopener noreferrer",children:"Cl\xe9ment van Staen"}),", 2020"]})});var J=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{className:"App-header",children:Object(n.jsx)(z,{})}),Object(n.jsx)(H,{})]})};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(J,{})}),document.getElementById("root"))}},[[187,1,2]]]);
//# sourceMappingURL=main.e23e9b39.chunk.js.map