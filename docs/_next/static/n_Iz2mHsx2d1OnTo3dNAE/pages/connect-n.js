(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"5pKv":function(e,t){e.exports="\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"6BQ9":function(e,t,n){e.exports=n("uekQ")},"6nty":function(e,t,n){"use strict";var c=n("zrwo"),a=n("sLDa"),o=n("HBON"),r=n("cLMx"),i={boards:[[],[]],win:-1,filledBoard:[],filledColumn:0,gameOver:!0,turn:0};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.f:return Object(o.a)()({},e,t.payload);case a.c:return Object(c.a)({},e,Object(r.c)(t.payload));case a.e:return Object(c.a)({},e,Object(r.d)(t.payload));default:return e}}},"H1/e":function(e,t,n){"use strict";var c,a=n("iYmT"),o=n("v7Px"),r=n.n(o),i=n("6BQ9"),u=n.n(i),l=n("doui"),s=n("qKvR"),b=n("q1tI"),f=n("/MKj"),p=n("R234"),d=n("cLMx"),m=n("h2aq"),O=n("sLDa"),y=n("pLtp"),j=n.n(y),g=function(e){return 0===j()(e).length};!function(e){e.CHANGE_RULES_SETTINGS="CHANGE_RULES_SETTINGS",e.CHANGE_PLAYERS_SETTINGS="CHANGE_PLAYERS_SETTINGS"}(c||(c={}));var h=Object(s.b)("display:block;text-align:center;margin:",Object(m.a)(15)," auto;font-size:",Object(m.a)(32),";"),w=function(e){return Object(s.b)("&::after{content:'Connect ",e,"';}")},v={name:"1s3w3lo",styles:"&::after{content:'Tic-Tac-Toe';}"},C=Object(s.b)("box-sizing:border-box;display:flex;flex-flow:row wrap;margin:",Object(m.a)(10)," auto;font-size:",Object(m.a)(20),";justify-content:center;height:100%;"),N=Object(s.b)("margin:0 ",Object(m.a)(10),";display:inline-block;:first-of-type{margin-left:0;}:last-of-type{margin-right:0;}"),E=Object(s.b)("display:inline-block;margin-right:",Object(m.a)(10),";width:",Object(m.a)(15),";height:",Object(m.a)(15),";"),T={connectN:Object(s.b)("border:",Object(m.a)(1)," solid lightgray;border-radius:50%;")},x=Object(s.b)("height:",Object(m.a)(25),";"),R=Object(s.b)("display:block;text-align:center;font-size:",Object(m.a)(16),";outline:none;margin:",Object(m.a)(10)," auto;max-width:",Object(m.a)(350),";border:",Object(m.a)(1)," solid gray;height:100%;width:100%;"),S={name:"1l4w6pd",styles:"display:flex;justify-content:center;"},k=Object(s.b)("font-size:",Object(m.a)(20),";border:",Object(m.a)(1)," dashed gray;cursor:pointer;margin:",Object(m.a)(10)," ",Object(m.a)(15),";:hover{color:blue;}");t.a=Object(f.c)(function(e){return{setup:e.setup||{},game:e.game||{}}},function(e){return{resetGame:function(t){return e({type:O.e,payload:t})},placeOnePiece:function(t){return e({type:O.c,payload:t})},changeRules:function(t){return e({type:O.b,payload:t})},changePlayers:function(t){return e({type:O.a,payload:t})}}})(function(e){var t=e.gameType,n=e.setup,o=e.game,i=e.resetGame,f=e.placeOnePiece,O=e.changeRules,y=e.changePlayers,j=Object(b.useState)(null),A=Object(l.default)(j,2),_=A[0],P=A[1],G=Object(b.useState)(""),I=Object(l.default)(G,2),M=I[0],L=I[1],H=n.fullBoard,z=n.boardSetup,B=n.next,U=n.names,K=n.rowNum,D=n.checkAgainst,q=n.winRule,Y=n.fullColumn,X=o.win,W=o.gameOver,Z=o.turn,Q=o.boards,V=Object(b.useCallback)(function(){P(null),L("")},[P,L]),F=Object(b.useCallback)(function(e){e&&e.focus()},[]),J=function(){return i({next:B,fullBoard:H,fullColumn:Y,boardSetup:z,turn:Z})};Object(b.useEffect)(function(){g(n)||J()},[n]);var $,ee=Object(b.useCallback)(function(e){return L(e.target.value)},[L]);return g(o)||g(n)?null:Object(s.c)("div",null,Object(s.c)("h1",null,Object(s.c)("div",{css:Object(a.a)([h,t===d.a.connectN&&w(q),t===d.a.ticTacToe&&v],"")})),Object(s.c)("div",{css:x},_===c.CHANGE_RULES_SETTINGS?Object(s.c)("input",{ref:F,"aria-label":"change-rules-label",css:R,type:"text",placeholder:"[column],[row],[number]",value:M,onChange:ee,onKeyDown:function(e){if(13===e.which)try{var n=M.split(",").map(function(e){var t=u()(e.trim(),10);if(r()(t))throw new Error;return t});if(3!==n.length)throw new Error("invalid input");O({gameType:t,rowNum:n[1],colNum:n[0],winRule:n[2]}),V()}catch(c){console.log(c)}else 27===e.keyCode&&V()},onBlur:function(){V()}}):Object(s.c)("div",{css:($=Object(d.b)({gameOver:W,turn:Z,names:U,win:X}),Object(s.b)("display:block;text-align:center;margin:",Object(m.a)(10)," auto;font-size:",Object(m.a)(20),';height:100%;::after{content:"',$,'";}'))})),Object(s.c)("div",{css:x},_===c.CHANGE_PLAYERS_SETTINGS?Object(s.c)("input",{ref:F,"aria-label":"change-players-input",css:R,type:"text",placeholder:t===d.a.ticTacToe?"change players' names, with comma in between":"up to 4 player's names, with comma in between",value:M,onChange:ee,onKeyDown:function(e){if(13===e.which)try{var n=M.split(",").map(function(e){return e.trim()});y({gameType:t,names:n}),V()}catch(c){console.log(c)}else 27===e.keyCode&&V()},onBlur:V}):Object(s.c)("div",{css:C},U.map(function(e,n){return Object(s.c)("div",{css:N,key:"legend-".concat(e)},Object(s.c)("div",{css:Object(a.a)([E,T[t],p.b[t][n]],"")}),e)}))),Object(s.c)("div",{css:S},t!==d.a.ticTacToe&&Object(s.c)("button",{type:"button",css:k,onClick:function(){_!==c.CHANGE_RULES_SETTINGS&&t===d.a.connectN&&P(c.CHANGE_RULES_SETTINGS)}},"Change Rules"),Object(s.c)("button",{type:"button",css:k,onClick:function(){return P(c.CHANGE_PLAYERS_SETTINGS)}},"Change Players"),Object(s.c)("button",{type:"button",css:k,onClick:J},"Restart")),Object(s.c)(p.a,{gameType:t,boards:Q,rowNum:K,onClickOnCell:function(e,n){return function(){_||(W?J():function(e){var n=e.colInd,c=e.rowInd;f({gameType:t,colInd:n,rowInd:c,curRecord:o,fullColumn:Y,checkAgainst:D,next:B})}({colInd:e,rowInd:n}))}}}))})},Igcr:function(e,t,n){"use strict";var c=n("qKvR"),a=n("q1tI"),o=n("/MKj"),r=function(e){var t=e.store,n=e.callbackOnMount,o=e.callbackOnUnmount,r=e.Child;return Object(a.useEffect)(function(){return n(t),function(){o&&o(t)}},[]),r?Object(c.c)(r,null):null};t.a=function(e){var t=e.callbackOnMount,n=e.callbackOnUnmount,a=e.Child;return function(){return Object(c.c)(o.b.Consumer,null,function(e){var o=e.store;return Object(c.c)(r,{callbackOnMount:t,callbackOnUnmount:n,store:o,Child:a})})}}},NrZH:function(e,t,n){"use strict";n.d(t,"b",function(){return i});var c=n("zrwo"),a=n("sLDa"),o={ticTacToe:{maxRow:3,maxCol:3,minRow:3,minCol:3},connectN:{maxRow:10,maxCol:12,minRow:3,minCol:3},gomoku:{maxRow:10,maxCol:12,minRow:3,minCol:3}},r={ticTacToe:{maxPlayers:2,minPlayers:2},connectN:{maxPlayers:4,minPlayers:2},gomoku:{maxPlayers:4,minPlayers:2}},i={ticTacToe:{rowNum:3,colNum:3,winRule:3,names:["O","X"],next:[1,0],fullColumn:Math.pow(2,3)-1,fullBoard:Array(3).fill(Math.pow(2,3)-1),checkAgainst:Math.pow(2,3)-1,boardSetup:Array(3).fill(0)},connectN:{rowNum:6,colNum:7,winRule:4,names:["O","X"],next:[1,0],fullColumn:Math.pow(2,7)-1,fullBoard:Array(7).fill(Math.pow(2,6)-1),checkAgainst:Math.pow(2,4)-1,boardSetup:Array(7).fill(0)},gomoku:{rowNum:19,colNum:19,winRule:5,names:["O","X"],next:[1,0],fullColumn:Math.pow(2,19)-1,fullBoard:Array(19).fill(Math.pow(2,19)-1),checkAgainst:Math.pow(2,5)-1,boardSetup:Array(19).fill(0)}},u=i.ticTacToe;t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.d:return t.payload;case a.a:var n=t.payload,i=n.names,l=n.gameType,s=r[l],b=s.maxPlayers,f=s.minPlayers;return i.length>b||i.length<f?e:Object(c.a)({},e,{names:i,next:i.map(function(e,t){return t+1===i.length?0:t+1})});case a.b:var p=t.payload,d=p.rowNum,m=p.colNum,O=p.winRule,y=p.gameType,j=o[y],g=j.maxCol,h=j.minCol,w=j.maxRow,v=j.minRow;return O>d||O>m||O<3?e:m>g||m<h||d>w||d<v?e:Object(c.a)({},e,{rowNum:d,colNum:m,winRule:O,fullColumn:Math.pow(2,m)-1,fullBoard:Array(m).fill(Math.pow(2,d)-1),checkAgainst:Math.pow(2,O)-1,boardSetup:Array(m).fill(0)});default:return e}}},TclB:function(e,t,n){n("Vzfy"),e.exports=n("WEpk").Number.isNaN},Vzfy:function(e,t,n){var c=n("Y7ZC");c(c.S,"Number",{isNaN:function(e){return e!=e}})},XWtR:function(e,t,n){var c=n("5T2Y").parseInt,a=n("oc46").trim,o=n("5pKv"),r=/^[-+]?0[xX]/;e.exports=8!==c(o+"08")||22!==c(o+"0x16")?function(e,t){var n=a(String(e),3);return c(n,t>>>0||(r.test(n)?16:10))}:c},dEVD:function(e,t,n){var c=n("Y7ZC"),a=n("XWtR");c(c.G+c.F*(parseInt!=a),{parseInt:a})},jqzG:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/connect-n",function(){var e=n("yitL");return{page:e.default||e}}])},oc46:function(e,t,n){var c=n("Y7ZC"),a=n("Jes0"),o=n("KUxP"),r=n("5pKv"),i="["+r+"]",u=RegExp("^"+i+i+"*"),l=RegExp(i+i+"*$"),s=function(e,t,n){var a={},i=o(function(){return!!r[e]()||"\u200b\x85"!="\u200b\x85"[e]()}),u=a[e]=i?t(b):r[e];n&&(a[n]=u),c(c.P+c.F*i,"String",a)},b=s.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(l,"")),e};e.exports=s},sLDa:function(e,t,n){"use strict";n.d(t,"f",function(){return c}),n.d(t,"e",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return u});var c="UPDATE_GAME_RECORD",a="RESTART_GAME",o="PLACE_ONE_PIECE",r="RESET_SETUP",i="CHANGE_PLAYERS",u="CHANGE_RULES"},uekQ:function(e,t,n){n("dEVD"),e.exports=n("WEpk").parseInt},v7Px:function(e,t,n){e.exports=n("TclB")},yitL:function(e,t,n){"use strict";n.r(t),n.d(t,"Page",function(){return j});var c=n("qKvR"),a=(n("q1tI"),n("HohS")),o=n.n(a),r=n("ntF4"),i=n("Igcr"),u=n("H1/e"),l=n("8Rtz"),s=n("NrZH"),b=n("6nty"),f=n("sLDa"),p=n("cLMx"),d=n("h2aq"),m=o()().publicRuntimeConfig.commonKeyWords,O={name:"1l4w6pd",styles:"display:flex;justify-content:center;"},y=Object(c.b)("display:inline-block;font-size:",Object(d.a)(30),";border:",Object(d.a)(1)," dotted gray;cursor:pointer;margin:",Object(d.a)(10)," auto;"),j=function(){return Object(c.c)("div",null,Object(c.c)(r.a,{title:"Connect N",description:"Connect N - a simple expandable connect game like connect 4 using bitwise operations",keywords:m,themeColor:"red",hrefCanonical:"/connect-n",favIconPath:"/static/icons/favicon.ico",appleIconPath:"/static/icons/icon192x192.png",hrefManifest:"/static/manifest/manifest.json"}),Object(c.c)(u.a,{gameType:p.a.connectN}),Object(c.c)("footer",null,Object(c.c)("div",{css:O},Object(c.c)(l.a,{href:"/"},Object(c.c)("a",null,Object(c.c)("div",{css:y},"index"))))))};t.default=Object(i.a)({callbackOnMount:function(e){e.substitueReducers({setup:s.a,game:b.a}),e.dispatch({type:f.d,payload:s.b.connectN}),e.dispatch({type:f.e,payload:s.b.connectN})},callbackOnUnmount:function(e){e.removeReducers(["setup","game"])},Child:j})}},[["jqzG",1,0]]]);