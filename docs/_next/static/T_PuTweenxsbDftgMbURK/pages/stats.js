(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+aWK":function(t,n,a){"use strict";a.r(n);var e=a("qKvR"),c=(a("q1tI"),a("/MKj")),u=a("ntF4"),r=a("8Rtz"),s=a("Igcr"),o=a("zrwo"),i=a("sLDa"),b={stats:-3},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case i.a.ADD:return Object(o.a)({},t,{stats:t.stats+n.payload});case i.a.MINUS:return Object(o.a)({},t,{stats:t.stats-n.payload});default:return t}},f=a("7zJJ"),d=a("ln6h"),O=a.n(d),p=a("5rFJ"),j=O.a.mark(v),h=O.a.mark(m);function v(){var t;return O.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(p.d)(i.a.MINUS);case 3:t=n.sent,console.log("Logged MINUS",t.payload),n.next=0;break;case 7:case"end":return n.stop()}},j)}function m(){return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.a)([Object(p.b)(v)]);case 2:case"end":return t.stop()}},h)}var w=m;a.d(n,"Page",function(){return k});var k=function(t){var n=t.numstats,a=t.minus5,c=t.add8;return Object(e.b)("main",null,Object(e.b)(u.a,{title:"Nextjs Typescript Eslint stats",themeColor:"red",hrefCanonical:"/stats",favIconPath:"/static/icons/favicon.ico",appleIconPath:"/static/icons/icon192x192.png",hrefManifest:"/static/manifest/manifest.json"}),Object(e.b)("span",null,"This is stats"),Object(e.b)("div",null,"Number is ".concat(n)),Object(e.b)("button",{type:"button",onClick:c},"add 8"),Object(e.b)("button",{type:"button",onClick:a},"minus 5"),Object(e.b)("br",null),Object(e.b)(r.a,{href:"/",prefetch:!1},Object(e.b)("a",null,"index")),Object(e.b)("br",null),Object(e.b)(r.a,{href:"/about",prefetch:!1},Object(e.b)("a",null,"about")))},M=Object(c.c)(function(t){return{numstats:(t.stats||{}).stats||0}},function(t){return{add8:function(){return t(Object(f.a)(8))},minus5:function(){return t(Object(f.b)(5))}}})(k);n.default=Object(s.a)({callbackOnMount:function(t){t.substitueReducers({stats:l}),t.substitueSagas({stats:w})},Child:M})},"7zJJ":function(t,n,a){"use strict";a.d(n,"a",function(){return c}),a.d(n,"b",function(){return u});var e=a("sLDa"),c=function(t){return{type:e.a.ADD,payload:t}},u=function(t){return{type:e.a.MINUS,payload:t}}},BnGh:function(t,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stats",function(){var t=a("+aWK");return{page:t.default||t}}])},Igcr:function(t,n,a){"use strict";var e=a("qKvR"),c=a("q1tI"),u=a("/MKj"),r=function(t){var n=t.store,a=t.callbackOnMount,u=t.callbackOnUnmount,r=t.Child;return Object(c.useEffect)(function(){return a(n),function(){u&&u(n)}},[]),r?Object(e.b)(r,null):null};n.a=function(t){var n=t.callbackOnMount,a=t.callbackOnUnmount,c=t.Child;return function(){return Object(e.b)(u.b.Consumer,null,function(t){var u=t.store;return Object(e.b)(r,{callbackOnMount:n,callbackOnUnmount:a,store:u,Child:c})})}}},sLDa:function(t,n,a){"use strict";n.a={ADD:"ADD",MINUS:"MINUS"}}},[["BnGh",1,0]]]);