(this["webpackJsonpnear-earth"]=this["webpackJsonpnear-earth"]||[]).push([[0],{19:function(e,t,a){e.exports=a(35)},24:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=new Date,s=String(o.getDate()).padStart(2,"0"),m=String(o.getMonth()+1).padStart(2,"0"),i=o.getFullYear();o=i+"-"+m+"-"+s;a(24);var u=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Near Earth"),r.a.createElement("div",null,o))},d=a(7),h=a(1),E=a(8),f=a.n(E),p=a(10),_=a(11),v=(a(26),function(e){return r.a.createElement("article",{className:"cometa ".concat(e.hazardous)},r.a.createElement("div",{className:"cometa-circulo"}),r.a.createElement("h2",null,e.name),r.a.createElement("div",{className:"cometa-info"},r.a.createElement("h3",null,"miss distance"),r.a.createElement("p",null,e.km," km")))}),b=(a(27),function(){var e="CziZhPZbOadaO66f58O2idb8Z7F4UxoDbDOlCFrJ",t=Object(n.useState)([]),a=Object(_.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){(function(){var t=Object(p.a)(f.a.mark((function t(){var a,n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=".concat(o,"&end_date=").concat(o,"&api_key=").concat(e));case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,console.log(n.near_earth_objects[o]),r=n.near_earth_objects[o],l(r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),r.a.createElement("main",null,r.a.createElement("div",{className:"info"},"Asteroids and Comets near Earth today."),c.map((function(e,t){return r.a.createElement(d.b,{key:t,to:"cometas/".concat(e.id)},r.a.createElement(v,{name:e.name,hazardous:!0===e.is_potentially_hazardous_asteroid?"hazardous":"",km:e.close_approach_data[0].miss_distance.kilometers}))})))}),k=(a(33),function(e){var t=e.match.params.id;console.log(t);var a,c="CziZhPZbOadaO66f58O2idb8Z7F4UxoDbDOlCFrJ",l=Object(n.useState)([]),o=Object(_.a)(l,2),s=o[0],m=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(p.a)(f.a.mark((function e(){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/neo/rest/v1/neo/".concat(t,"?api_key=").concat(c));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,console.log(n.estimated_diameter.kilometers.estimated_diameter_max),m(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,c]),a=!0===s.is_potentially_hazardous_asteroid,r.a.createElement("main",{id:"cometa"},r.a.createElement("article",{className:'cometa detalhe ${ hazardous ? "hazardous : ""}'},r.a.createElement("div",{className:"cometa-circulo"}),r.a.createElement("h2",null,s.name),r.a.createElement("div",{className:"cometa-info"},r.a.createElement("h3",null,"estimated diameter min"),r.a.createElement("p",null,s.estimated_diameter?s.estimated_diameter.kilometers.estimated_diameter_min:null," km")),r.a.createElement("div",{className:"cometa-info"},r.a.createElement("h3",null,"estimated diameter max"),r.a.createElement("p",null,s.estimated_diameter?s.estimated_diameter.kilometers.estimated_diameter_max:null," km")),r.a.createElement("div",{className:"cometa-info"},r.a.createElement("h3",null,"last observation date"),r.a.createElement("p",null,s.orbital_data?s.orbital_data.last_observation_date:null)),a&&r.a.createElement("div",{className:"cometa-hazardous"},"it is a potentially hazardous asteroid!")),r.a.createElement(d.b,{to:"/"},r.a.createElement("div",{className:"btn-home"},"all asteroids and comets")))}),O=function(){return r.a.createElement(d.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:b}),r.a.createElement(h.a,{path:"/cometas/:id",component:k})))},x=(a(34),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement(O,null))});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.dcc34c1e.chunk.js.map