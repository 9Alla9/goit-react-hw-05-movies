"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{1510:function(e,t,r){r.d(t,{e:function(){return i}});var n=r(7689),a=r(1087),u="MovieList_list__yjDCC",s="MovieList_item__tDivI",c=r(184),i=function(e){var t=e.movieList,r=(0,n.TH)();return(0,c.jsx)("ul",{className:u,children:Array.isArray(t)&&(null===t||void 0===t?void 0:t.map((function(e){var t=e.id,n=e.name,u=e.title;return(0,c.jsx)(a.rU,{state:{from:r},className:s,to:"/movies/".concat(t),children:(0,c.jsx)("h3",{children:n||u})},t)})))})}},5881:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(5861),a=r(9439),u=r(7757),s=r.n(u),c=r(2791),i=r(1087),o=r(6355),f=r(1686),p=r(1510),l=r(8809),v=r(4635),m="Movies_form__4ow+Z",h="Movies_input__KrUqs",d="Movies_btn__TlfBQ",x=r(184);var w=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],w=(0,c.useState)(!1),_=(0,a.Z)(w,2),g=_[0],y=_[1],b=(0,c.useState)(null),k=(0,a.Z)(b,2),j=k[0],Z=k[1],N=(0,i.lr)(),S=(0,a.Z)(N,2),T=S[0],L=S[1],M=T.get("query");return(0,c.useEffect)((function(){if(null!==M&&void 0!==M&&M.trim()){var e=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,(0,v.Wf)(t);case 4:0===(r=e.sent).length&&f.Notify.info("No results for ".concat(t)),u(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Z(e.t0.message);case 12:return e.prev=12,y(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();e(M)}}),[M]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===e.currentTarget.search.value.trim()&&f.Notify.warning("The input field is empty!"),L({query:e.currentTarget.search.value}),e.target.reset()},className:m,children:[(0,x.jsx)("input",{name:"search",className:h,placeholder:"search..."}),(0,x.jsx)("button",{type:"submit",className:d,children:(0,x.jsx)(o.U41,{})})]}),g&&(0,x.jsx)(l.a,{}),j&&(0,x.jsx)("p",{children:"Oops...Somesing went wrong.."}),r.length>0&&(0,x.jsx)(p.e,{movieList:r})]})}},4635:function(e,t,r){r.d(t,{Aj:function(){return c},IQ:function(){return f},Jh:function(){return p},TP:function(){return o},Wf:function(){return i}});var n=r(5861),a=r(7757),u=r.n(a),s=r(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"b28b490f154ff7780023675ee4255d6a",language:"en-US",include_adult:!1}}),c=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/movie/week");case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=881.5b93624c.chunk.js.map