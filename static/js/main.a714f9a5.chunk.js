(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{21:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(14),i=n.n(r),s=(n(21),n(4)),j=n.n(s),d=n(15),h=n(5),l=(n(23),n(16)),o=n.n(l),p=n(0);var u=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),i=Object(h.a)(r,2),s=i[0],l=i[1],u="https://api.openweathermap.org/data/2.5/weather?q=".concat(s,"&appid=6719d32b652fe28155d01d21980d3432");Object(a.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(s),e.next=3,o.a.get(u);case 3:t=e.sent,c(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]);var b=function(e){return(e-273.15).toFixed(2)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{id:"full-box",children:[Object(p.jsx)("h1",{id:"heading",children:"Weather Site"}),Object(p.jsx)("div",{className:"set",children:Object(p.jsx)("input",{placeholder:"Search for any City",className:"search-field",value:s,onChange:function(e){l(e.target.value)}})}),n.weather?Object(p.jsx)("div",{className:"data",children:Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"Name: "}),n.name," [",n.sys.country,"]"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:" Weather: "}),n.weather[0].main," - ",n.weather[0].description]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"Temperature: "}),b(n.main.temp),"\xb0C \xa0 [",Object(p.jsx)("span",{children:"Min: "}),b(n.main.temp_min),"\xb0C -",Object(p.jsx)("span",{children:" Max: "}),b(n.main.temp_max),"\xb0C]"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"Pressure: "}),n.main.pressure," mbar \xa0 \xa0 ",Object(p.jsx)("span",{children:" Humidity: "}),n.main.humidity," %"]})]})}):Object(p.jsx)("p",{id:"no-data",children:"Data Not Available"})]}),Object(p.jsxs)("footer",{children:["All data are based on"," ",Object(p.jsxs)("a",{target:"_blank",href:"https://openweathermap.org/",children:[" ","OpenWeather"]})]})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(u,{})}),document.getElementById("root")),b()}},[[43,1,2]]]);
//# sourceMappingURL=main.a714f9a5.chunk.js.map