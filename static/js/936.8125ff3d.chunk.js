"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{1510:function(e,t,r){r.d(t,{e:function(){return i}});var n=r(7689),a=r(1087),u="MovieList_list__yjDCC",s="MovieList_item__tDivI",c=r(184),i=function(e){var t=e.movieList,r=(0,n.TH)();return(0,c.jsx)("ul",{className:u,children:Array.isArray(t)&&(null===t||void 0===t?void 0:t.map((function(e){var t=e.id,n=e.name,u=e.title;return(0,c.jsx)(a.rU,{state:{from:r},className:s,to:"/movies/".concat(t),children:(0,c.jsx)("h3",{children:n||u})},t)})))})}},4936:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(5861),a=r(9439),u=r(7757),s=r.n(u),c=r(2791),i=r(8809),o=r(1510),f=r(4635),p="Home_title__L087v",v=r(184);var l=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],l=(0,c.useState)(!1),h=(0,a.Z)(l,2),m=h[0],d=h[1],w=(0,c.useState)(null),x=(0,a.Z)(w,2),k=x[0],_=x[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,(0,f.Aj)();case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),_(e.t0.message);case 11:return e.prev=11,d(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h2",{className:p,children:"Trends of the week"}),m&&(0,v.jsx)(i.a,{}),k&&(0,v.jsx)("p",{children:"Oops...Somesing went wrong.."}),r.length>0&&(0,v.jsx)(o.e,{movieList:r})]})}},4635:function(e,t,r){r.d(t,{Aj:function(){return c},IQ:function(){return f},Jh:function(){return p},TP:function(){return o},Wf:function(){return i}});var n=r(5861),a=r(7757),u=r.n(a),s=r(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"b28b490f154ff7780023675ee4255d6a",language:"en-US",include_adult:!1}}),c=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/movie/week");case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=936.8125ff3d.chunk.js.map