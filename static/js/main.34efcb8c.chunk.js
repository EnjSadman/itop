(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(6),s=c.n(r),u=(c(11),c(3)),i=c.n(u),o=c(4),l=c(2),j=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://v6.exchangerate-api.com/v6/","/").concat("07644e766c705c511537d423","/latest/UAH"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=(c(13),c(14),c(0)),h=function(e){var t=e.exchangeCourse,c=Object(a.useState)("UAH"),n=Object(l.a)(c,2),r=n[0],s=n[1],u=Object(a.useState)(0),i=Object(l.a)(u,2),o=i[0],j=i[1],h=Object(a.useState)("USD"),d=Object(l.a)(h,2),b=d[0],O=d[1],x=Object(a.useState)(0),f=Object(l.a)(x,2),g=f[0],m=f[1];return Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:"converter",children:[Object(v.jsxs)("div",{className:"converter__field",children:[Object(v.jsxs)("select",{className:"converter__currency",name:"currency",value:r,onChange:function(e){s(e.target.value),1!==+t[e.target.value]&&1===+t[b]?m(p(o/+t[e.target.value]*+t[b])):m(p(o*+t[e.target.value]/+t[b]))},children:[Object(v.jsx)("option",{value:"USD",children:"USD"}),Object(v.jsx)("option",{value:"EUR",children:"EUR"}),Object(v.jsx)("option",{value:"UAH",children:"UAH"})]}),Object(v.jsx)("input",{className:"converter__input",type:"text",placeholder:"Amount",value:o,onChange:function(e){isNaN(+e.target.value)||(j(+e.target.value),1!==+t[r]&&1===+t[r]?m(p(+e.target.value/+t[r]/+t[b])):m(p(+e.target.value/+t[r]*+t[b])))}})]}),Object(v.jsxs)("div",{className:"converter__field",children:[Object(v.jsxs)("select",{className:"converter__currency",name:"currency",value:b,onChange:function(e){O(e.target.value),1!==+t[e.target.value]&&1===+t[r]?j(p(g/+t[e.target.value]*+t[r])):j(p(g*+t[e.target.value]/+t[r]))},children:[Object(v.jsx)("option",{value:"USD",children:"USD"}),Object(v.jsx)("option",{value:"EUR",children:"EUR"}),Object(v.jsx)("option",{value:"UAH",children:"UAH"})]}),Object(v.jsx)("input",{type:"text",className:"converter__input",placeholder:"Amount",value:g,onChange:function(e){isNaN(+e.target.value)||(m(+e.target.value),1!==+t[b]&&1===+t[r]?j(p(+e.target.value/+t[b]/+t[r])):j(p(+e.target.value/+t[r]*+t[b])))}})]})]})})},d=(c(16),function(e){var t=e.exchangeCourse;return Object(v.jsx)("header",{className:"header",children:Object(v.jsxs)("div",{className:"header__container",children:[Object(v.jsxs)("h1",{className:"header__currency",children:[p(1/+t.USD)," UAH per USD"]}),Object(v.jsxs)("h1",{className:"header__currency",children:[p(1/+t.EUR)," UAH per EUR"]})]})})});function p(e){var t=e;return t=Math.round(100*t)/100}var b=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,n(t.conversion_rates);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(d,{exchangeCourse:c}),Object(v.jsx)(h,{exchangeCourse:c})]})};s.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(b,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.34efcb8c.chunk.js.map