(this["webpackJsonpnice-app"]=this["webpackJsonpnice-app"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(7),r=n.n(a),i=(n(13),n(8)),o=n(2),l=n(5),d=n(0);var u=function(){return Object(d.jsxs)("h2",{style:{textAlign:"center",color:"black"},className:"mb-5",children:["Task Manager.",Object(d.jsx)("i",{className:"fa fa-edit"})]})};var j=function(e){var t=e.addTask,n=Object(c.useState)(""),s=Object(l.a)(n,2),a=s[0],r=s[1];return Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),a?(t({name:a,completed:false}),r("")):alert("You didnt enter any value! ")},method:"post",children:Object(d.jsxs)("div",{className:"input-group",children:[Object(d.jsx)("input",{className:"form-control",onChange:function(e){return r(e.target.value)}}),Object(d.jsxs)("button",{className:"btn btn-success  input-group-addon",type:"submit",children:["Add ",Object(d.jsx)("i",{className:"fa fa-plus-circle"})]})]})})},m={color:"red",cursor:"pointer"};var b=function(e){var t=e.tasks,n=e.deleteTask,c=e.toggleCompleted;return Object(d.jsx)("div",{className:"list-group mt-4 shadow-sm",children:t.map((function(e){return Object(d.jsxs)("div",{className:"list-group-item task-item ".concat(e.completed&&"reminder","  "),onDoubleClick:function(){return c(e.id)},children:[Object(d.jsx)("b",{children:e.name}),Object(d.jsx)("i",{className:"fa fa-times",style:m,onClick:function(){return n(e.id)}})]},e.id)}))})},f={position:"fixed",bottom:"0",left:"0",textAlign:"center",borderTopRightRadius:"17%",borderTopLeftRadius:"17%",width:"100%",height:"15%",zIndex:"5",display:"flex",alignItems:"center",justifyContent:"center"};var p=function(){return Object(d.jsx)("footer",{className:"bg-dark text-white",style:f,children:Object(d.jsxs)("h1",{className:"text-muted",children:[Object(d.jsx)("i",{className:"fa fa-check"}),"Built By Eskay \xa9 2021."]})})};localStorage.getItem("list")||localStorage.setItem("list",JSON.stringify([]));var g=JSON.parse(localStorage.getItem("list"));var O=function(){console.log(g);var e=Object(c.useState)(g),t=Object(l.a)(e,2),n=t[0],s=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"card shadow col-md-6  mx-auto p-5 mt-5 col-xs-9",style:{maxHeight:"445px",overflow:"scroll"},children:[Object(d.jsx)(u,{}),Object(d.jsx)(j,{addTask:function(e){console.log(e);var t=Math.floor(1e4*Math.random())+1,c=Object(o.a)({id:t},e);s([].concat(Object(i.a)(n),[c])),g.push(c),localStorage.setItem("list",JSON.stringify(g))}}),n.length>0?Object(d.jsx)(b,{tasks:n,deleteTask:function(e){s(n.filter((function(t){return t.id!==e}))),g=g.filter((function(t){return t.id!==e})),localStorage.setItem("list",JSON.stringify(g))},toggleCompleted:function(e){s(n.map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{completed:!t.completed}):t}))),g=g.map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{completed:!t.completed}):t})),localStorage.setItem("list",JSON.stringify(g))}}):Object(d.jsx)("h5",{style:{marginTop:"50px"},children:"There are no tasks!"})]}),Object(d.jsx)(p,{})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.4e0c021c.chunk.js.map