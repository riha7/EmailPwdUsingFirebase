(this.webpackJsonploginformvalidation=this.webpackJsonploginformvalidation||[]).push([[0],{19:function(e,n,t){},25:function(e,n,t){},26:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var c=t(9),o=t.n(c),i=t(18),a=t.n(i),r=(t(25),t(12)),l=t(11),s=(t(26),t(4)),u=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Something Went Wrong!!!!!"})})},d=t(13);d.a.initializeApp({apiKey:"AIzaSyDZMzdQw1WNU8gY1DHL0X_QfSVuL1H70EU",authDomain:"authlogin-a8f6c.firebaseapp.com",projectId:"authlogin-a8f6c",storageBucket:"authlogin-a8f6c.appspot.com",messagingSenderId:"127006863837",appId:"1:127006863837:web:9c1ce9c301d3723c360634"});d.a.firestore();var j=d.a.auth(),h=function(e){var n=e.presentUser;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{children:["Welcome to ",n.email]}),Object(s.jsx)("button",{onClick:function(){return j.signOut()},children:"SignOut"})]})},b=t(20),g=t(19),p=t.n(g),f=function(){var e=Object(c.useState)({email:"",password:""}),n=Object(r.a)(e,2),t=n[0],o=n[1],i=Object(l.useErrorHandler)(),a=t.email,u=t.password,d=function(e){var n=Object(b.a)({},t);n[e.target.name]=e.target.value,o(n)};return Object(s.jsx)("div",{children:Object(s.jsxs)("center",{children:[Object(s.jsx)("h1",{style:{background:"darkblue",opacity:"0.6",color:"white"},children:"Login Page with Authentication"}),Object(s.jsxs)("div",{className:"formstyle",children:[Object(s.jsx)("h3",{children:"Login"}),Object(s.jsxs)("form",{autoComplete:"off",style:p.a,children:[Object(s.jsx)("input",{type:"email",name:"email",placeholder:"email",value:a,onChange:d})," ",Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"password",name:"password",placeholder:"*****",value:u,onChange:d})," ",Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"btn-primary",onClick:function(e){e.preventDefault(),j.signInWithEmailAndPassword(a,u).then(a,u).then((function(e){return console.log(e)})).catch((function(e){console.log(e),i(e)}))},children:"Login"}),Object(s.jsx)("button",{className:"btn-outline",onClick:function(e){e.preventDefault(),j.createUserWithEmailAndPassword(a,u).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))},children:"SignUp"})]})]})]})})};var m=function(){var e=Object(c.useState)(null),n=Object(r.a)(e,2),t=n[0],o=n[1];return Object(c.useEffect)((function(){j.onAuthStateChanged((function(e){o(e?{uid:null===e||void 0===e?void 0:e.uid,email:null===e||void 0===e?void 0:e.email}:null)}))}),[]),Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("header",{className:"App-header",children:t?Object(s.jsx)(h,{presentUser:t}):Object(s.jsx)(l.ErrorBoundary,{FallbackComponent:u,onError:function(e,n){console.log("Logging Error",e,n)},children:Object(s.jsx)(f,{})})})})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),c(e),o(e),i(e),a(e)}))};a.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),O()}},[[33,1,2]]]);
//# sourceMappingURL=main.6dbb4d97.chunk.js.map