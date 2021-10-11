(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{106:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(19),a=c.n(i),l=(c(75),c(25)),r=(c(76),c(0));function o(e){var t=e.currentPage,c=e.handlePageChange;return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"navbar",children:[Object(r.jsx)("a",{className:"Home"===t?"nav-link active":"nav-link",href:"#home",onClick:function(){return c("Home")},children:"Home"}),Object(r.jsx)("a",{className:"About"===t?"nav-link active":"nav-link",href:"#about",onClick:function(){return c("About")},children:"About"}),Object(r.jsx)("a",{className:"Portfolio"===t?"nav-link active":"nav-link",href:"#portfolio",onClick:function(){return c("Portfolio")},children:"Portfolio"}),Object(r.jsx)("a",{className:"Resume"===t?"nav-link active":"nav-link",href:"#resume",onClick:function(){return c("Resume")},children:"Resume"}),Object(r.jsx)("a",{className:"Contact"===t?"nav-link active":"nav-link",href:"#contact",onClick:function(){return c("Contact")},children:"Contact"})]})})}function d(e){return Object(s.useEffect)((function(){document.title="".concat(e.title," | React Portfolio")})),Object(r.jsx)("div",{children:Object(r.jsx)("h1",{className:"display-5 fw-bold",children:e.title})})}c(78);function j(e){return Object(s.useEffect)((function(){document.title="".concat(e.title," | React Portfolio")})),Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"px-4 py-5 my-5 text-center",children:[Object(r.jsx)("img",{className:"profile-pic d-block mx-auto mb-4",src:"img/andrew.png",alt:""}),Object(r.jsx)("h1",{className:"display-5 fw-bold",children:"About"}),Object(r.jsx)("div",{className:"col-lg-6 mx-auto",children:Object(r.jsx)("p",{children:"Motivated software developer with a background in IT troubleshooting. Experience with analytical thinking, project management, strong team skills and excellent verbal and written communication ability. Comfortable in high-pressure, time-sensitive situations. Able to resolve conflicts between parties in a professional environment to harness productivity and positive business relationships. Willingness and ability to learn and takes pride in producing high quality work."})})]})})}c(79);function b(e){var t=Object(s.useState)(""),c=Object(l.a)(t,2),n=c[0],i=c[1],a=Object(s.useState)(""),o=Object(l.a)(a,2),d=o[0],j=o[1],b=Object(s.useState)(""),m=Object(l.a)(b,2),h=m[0],u=m[1];Object(s.useEffect)((function(){document.title="".concat(e.title," | React Portfolio")}));var x=function(e){var t=e.target,c=t.name,s=t.value;"email"===c?j(s):"name"===c?i(s):u(s)};return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"container col-xl-10 col-xxl-8 px-4 py-5",children:Object(r.jsxs)("div",{className:"row align-items-center g-lg-5 py-5",children:[Object(r.jsxs)("div",{className:"col-lg-7 text-center text-lg-start",children:[Object(r.jsx)("h1",{className:"display-4 fw-bold lh-1 mb-3",children:"Send a message"}),Object(r.jsx)("p",{className:"col-lg-10 fs-4",children:"This form doesn't actually submit since this is only a front-end application. To send me a message, please email:"}),Object(r.jsx)("a",{href:"mailto:info@andrewkeiser.me",children:"info@andrewkeiser.me"})]}),Object(r.jsx)("div",{className:"col-md-10 mx-auto col-lg-5",children:Object(r.jsxs)("form",{className:"p-4 p-md-5 border rounded-3 bg-light",children:[Object(r.jsx)("div",{className:"form-floating mb-3",children:Object(r.jsx)("input",{className:n?"form-control m-1 valid":"form-control m-1 invalid",name:"name",onChange:x,placeholder:"Name",value:n,required:"true",type:"text"},"afl2423")}),Object(r.jsx)("div",{className:"form-floating mb-3",children:Object(r.jsx)("input",{className:d?"form-control m-1 valid":"form-control m-1 invalid",name:"email",placeholder:"Email",value:d,onChange:x,type:"text",required:"true"},"afl2233")}),Object(r.jsx)("div",{className:"checkbox mb-3",children:Object(r.jsx)("input",{className:h?"form-control m-1 valid":"form-control m-1 invalid",name:"message",placeholder:"Message",value:h,onChange:x,type:"text",required:"true"},"af1234l2423")}),Object(r.jsx)("button",{type:"button",className:"mt-2 btn btn-primary",onClick:function(e){e.preventDefault(),0!==n.length?0!==d.length?0!==h.length?!function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(d)?alert("Please enter a valid email"):(alert("Thank you for your message, ".concat(n,"!")),i(""),j(""),u("")):alert("You must enter a message"):alert("You must enter a email"):alert("You must enter a name")},children:"Submit"}),Object(r.jsx)("p",{className:"text-muted",children:"By clicking Sign up, you agree to the terms of use."})]})})]})}),Object(r.jsx)("div",{className:"form-signin",children:Object(r.jsx)("div",{className:"d-flex justify-content-center",children:Object(r.jsx)("form",{className:"needs-validation",action:"POST"})})})]})}c(80);function m(e){return Object(r.jsx)("div",{className:"col",children:Object(r.jsx)("div",{className:"card shadow-sm",children:Object(r.jsx)("div",{className:"card-body",children:Object(r.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(r.jsx)("p",{className:"card-title",children:e.title}),Object(r.jsxs)("div",{className:"btn-group",children:[Object(r.jsx)("button",{type:"button",className:"btn btn-sm",children:Object(r.jsx)("a",{href:e.repo,children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",className:"bi bi-github",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})})}),Object(r.jsx)("button",{type:"button",className:"btn btn-sm",children:Object(r.jsx)("a",{href:e.deployed,children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",class:"bi bi-globe2",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"})})})})]})]})})})})}var h=[{title:"Full Portfolio",repo:"https://github.com/webdev410/andrewkeiser-portfolio",deployed:"https://www.andrewkeiser.me/"},{title:"Invoicing System",repo:"https://github.com/webdev410/invoice-system",deployed:"https://invoice-tech.herokuapp.com/"},{title:"Note Taker Application",repo:"https://github.com/webdev410/notes-app",deployed:"https://salty-fortress-76405.herokuapp.com/"},{title:"CMS Blog",repo:"https://www.github.com/webdev410/blog",deployed:"https://secure-spire-42375.herokuapp.com/"},{title:"Workout Tracker",repo:"https://github.com/webdev410/workout-tracker-app",deployed:"https://mongoose-workout-plan.herokuapp.com/"},{title:"Budget Tracker",repo:"https://github.com/webdev410/budget-tracker",deployed:"https://budget-trx.herokuapp.com/"},{title:"Team Profile Generator",repo:"https://github.com/webdev410/team-profile-generator",deployed:"#"},{title:"Employee Tracker",repo:"https://github.com/webdev410/employee-tracker",deployed:"#"},{title:"eCommerce Backend",repo:"https://github.com/webdev410/ecommerce-backend",deployed:"#"}];function u(e){return Object(s.useEffect)((function(){document.title="".concat(e.title," | React Portfolio")})),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"display-5 fw-bold",children:e.title}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("p",{children:["This is simply a react version of my portfolio. A full portfolio can be found",Object(r.jsx)("a",{className:"m-1",href:"https://www.andrewkeiser.me",children:"here."})]}),Object(r.jsx)("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3",children:h.map((function(e){return Object(r.jsx)(m,{title:e.title,repo:e.repo,deployed:e.deployed})}))})]})]})}c(81);var x=c(12),p=c(9);function O(){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"container col-xxl-8 px-4 py-5",children:Object(r.jsxs)("div",{className:"row flex-lg-row-reverse align-items-center g-5 py-5",children:[Object(r.jsxs)("div",{className:"col-12 col-sm-8 col-lg-6",children:[Object(r.jsx)(x.a,{className:"techIcon m-3",icon:p.f}),Object(r.jsx)(x.a,{className:"techIcon m-3",icon:p.b}),Object(r.jsx)(x.a,{className:"techIcon m-3",icon:p.e}),Object(r.jsx)(x.a,{className:"techIcon m-3",icon:p.i}),Object(r.jsx)(x.a,{className:"techIcon m-3",icon:p.l}),Object(r.jsx)(x.a,{className:"techIcon m-3",icon:p.g}),Object(r.jsx)(x.a,{className:"techIcon m-3",icon:p.a}),Object(r.jsx)(x.a,{className:"techIcon m-3",icon:p.j}),Object(r.jsx)(x.a,{className:"techIcon m-3",icon:p.k})]}),Object(r.jsxs)("div",{className:"col-lg-6",children:[Object(r.jsx)("h1",{className:"display-5 fw-bold lh-1 mb-3",children:"Technologies"}),Object(r.jsx)("p",{className:"lead",children:"HTML, HTML5, CSS, Git, JavaScript, jQuery, Bootstrap, AJAX, Web APIs, Third-Party APIs, Server-Side APIs, Node.js, Object-Oriented Programming, Media Queries, JSON, React"}),Object(r.jsx)("div",{className:"d-grid gap-2 d-md-flex justify-content-center",children:Object(r.jsx)("a",{href:"/assets/andrew-keiser-technical-skills.docx",download:"andrew-keiser-technical-skills.docx",children:Object(r.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-lg px-4",children:"Download Technologies"})})})]})]})})})}var f=c(56);function v(e){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"px-4 py-5 my-5 text-center",children:[Object(r.jsx)("h1",{className:"display-5 fw-bold",children:e.title}),Object(r.jsxs)("div",{className:"col-lg-6 mx-auto",children:[Object(r.jsx)("p",{className:"lead mb-4",children:"Thank you for viewing my React portfolio."}),Object(r.jsx)("p",{className:"text-muted",children:"Download a printable copy of my resume"}),Object(r.jsxs)("div",{className:"d-grid gap-2 d-sm-flex justify-content-sm-center",children:[Object(r.jsx)("a",{href:"/assets/andrew-keiser-resume.docx",download:"andrew-keiser-resume.docx",children:Object(r.jsx)("button",{type:"button",className:"btn btn-outline-secondary px-4 gap-3 download-btn",children:Object(r.jsx)(x.a,{icon:f.b})})}),Object(r.jsx)("a",{href:"/assets/andrew-keiser-resume.pdf",download:"andrew-keiser-resume.pdf",children:Object(r.jsx)("button",{type:"button",className:"btn btn-outline-secondary px-4 download-btn",children:Object(r.jsx)(x.a,{icon:f.a})})})]})]})]})})}function g(e){var t=e.currentModule,c=e.handleModuleChange;return Object(r.jsx)("div",{children:Object(r.jsx)("div",{class:"container",children:Object(r.jsx)("header",{class:"d-flex justify-content-center py-3",children:Object(r.jsxs)("ul",{class:"nav nav-pills",children:[Object(r.jsx)("li",{class:"nav-item",children:Object(r.jsx)("a",{className:"title"===t?"nav-link active":"nav-link",href:"#title",onClick:function(){return c("title")},children:"Resume"})}),Object(r.jsx)("li",{class:"nav-item",children:Object(r.jsx)("a",{className:"education"===t?"nav-link active":"nav-link",href:"#education",onClick:function(){return c("education")},children:"Education"})}),Object(r.jsx)("li",{class:"nav-item",children:Object(r.jsx)("a",{className:"experience"===t?"nav-link active":"nav-link",href:"#experience",onClick:function(){return c("experience")},children:"Experience"})}),Object(r.jsx)("li",{class:"nav-item",children:Object(r.jsx)("a",{className:"technologies"===t?"nav-link active":"nav-link",href:"#technologies",onClick:function(){return c("technologies")},children:"Technologies"})})]})})})})}function N(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"display-5 fw-bold",children:"Experience"}),Object(r.jsxs)("div",{className:"row g-4 py-5 row-cols-1 row-cols-lg-3",children:[Object(r.jsx)("div",{className:"feature col",children:Object(r.jsx)("div",{className:"feature-icon bg-gradient",children:Object(r.jsx)("img",{src:"img/godaddy.png",className:"university-logo",alt:""})})}),Object(r.jsx)("div",{className:"feature col",children:Object(r.jsx)("div",{className:"feature-icon bg-gradient",children:Object(r.jsx)("img",{src:"img/dhs.png",className:"university-logo",alt:""})})}),Object(r.jsx)("div",{className:"feature col",children:Object(r.jsx)("div",{className:"feature-icon bg-gradient",children:Object(r.jsx)("img",{src:"img/ticketmaster.png",className:"university-logo",alt:""})})})]}),Object(r.jsxs)("div",{className:"row g-4 py-2 row-cols-1 row-cols-lg-3",children:[Object(r.jsx)("div",{className:"feature col",children:Object(r.jsx)("h2",{children:"GoDaddy"})}),Object(r.jsx)("div",{className:"feature col",children:Object(r.jsx)("h2",{children:"Department of Homeland Security"})}),Object(r.jsx)("div",{className:"feature col",children:Object(r.jsx)("h2",{children:"Ticketmaster"})})]}),Object(r.jsxs)("div",{className:"row g-4 py-5 row-cols-1 row-cols-lg-3",children:[Object(r.jsx)("div",{className:"feature col",children:Object(r.jsx)("p",{children:"Hosting Sales & Support"})}),Object(r.jsx)("div",{className:"feature col",children:Object(r.jsx)("p",{children:"Technical Support"})}),Object(r.jsx)("div",{className:"feature col",children:Object(r.jsx)("p",{children:"Product Support"})})]})]})}function w(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"display-5 fw-bold",children:"Education"}),Object(r.jsxs)("div",{className:"row g-4 py-5 row-cols-1 row-cols-lg-2",children:[Object(r.jsx)("div",{className:"feature col",children:Object(r.jsxs)("div",{className:"feature-icon bg-gradient",children:[Object(r.jsx)("img",{src:"img/jhu.png",className:"university-logo",alt:""}),Object(r.jsx)("h2",{children:"Johns Hopkins University"}),Object(r.jsx)("p",{children:"An intensive 24-week bootcamp covering both front-end and back-end development."}),Object(r.jsx)("code",{children:"Academic Average: A+"})]})}),Object(r.jsx)("div",{className:"feature col",children:Object(r.jsxs)("div",{className:"feature-icon bg-gradient",children:[Object(r.jsx)("img",{src:"img/asu.png",className:"university-logo",alt:""}),Object(r.jsx)("h2",{children:"Arizona State University"}),Object(r.jsx)("p",{children:"Bachelor of Arts: English (Creative Writing)"}),Object(r.jsx)("code",{children:"Graduation: 2014"})]})})]})]})}function y(e){var t=Object(s.useState)("title"),c=Object(l.a)(t,2),n=c[0],i=c[1];return Object(s.useEffect)((function(){document.title="".concat(e.title," | React Portfolio")})),Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"d-flex flex-column justify-content-between",children:[Object(r.jsx)("div",{children:"technologies"===n?Object(r.jsx)(O,{}):"education"===n?Object(r.jsx)(w,{}):"experience"===n?Object(r.jsx)(N,{}):Object(r.jsx)(v,{title:"Resume"})}),Object(r.jsx)("div",{children:Object(r.jsx)(g,{currentModule:n,handleModuleChange:function(e){return i(e)}})})]})})}var k=c(113),C=c(114),A=c(68);function P(){var e=function(e){return"Github"===e.name?Object(r.jsx)(x.a,{icon:p.e}):"LinkedIn"===e.name?Object(r.jsx)(x.a,{icon:p.h}):Object(r.jsx)(x.a,{icon:A.a})};return Object(r.jsx)("div",{className:"d-flex flex-row",children:[{name:"Github",url:"https://github.com/webdev410",iconClass:"bi bi-github"},{name:"LinkedIn",url:"https://github.com/webdev410",iconClass:"bi bi-linkedin"},{name:"Portfolio",url:"https://andrewkeiser.me",iconClass:"bi bi-globe2"}].map((function(t){return Object(r.jsx)("li",{className:"ms-3",children:Object(r.jsx)(C.a,{placement:"top",overlay:Object(r.jsx)(k.a,{id:"tooltip-".concat(t.name),children:t.name}),children:Object(r.jsx)("button",{className:"footer-icon",children:Object(r.jsx)("a",{className:"text-muted",target:"blank",href:t.url,children:e(t)})})},t.name)})}))})}function S(){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("footer",{className:"d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top",children:[Object(r.jsx)("div",{className:"col-md-4 d-flex align-items-center",children:Object(r.jsx)("span",{className:"text-muted",children:"\xa9 2021 Andrew Keiser"})}),Object(r.jsx)("ul",{className:"nav col-md-4 justify-content-end list-unstyled d-flex footer-list",children:Object(r.jsx)(P,{})})]})})})}c(26).b.add(p.m,p.h,p.d,p.c);var z=function(){var e=Object(s.useState)("About"),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(r.jsxs)("div",{className:"App d-flex flex-column justify-content-between",children:[Object(r.jsx)(o,{currentPage:c,handlePageChange:function(e){return n(e)}}),"Home"===c?Object(r.jsx)(d,{title:"Home"}):"About"===c?Object(r.jsx)(j,{title:"About"}):"Portfolio"===c?Object(r.jsx)(u,{title:"Portfolio"}):"Resume"===c?Object(r.jsx)(y,{title:"Resume"}):"Contact"===c?Object(r.jsx)(b,{title:"Contact"}):void 0,Object(r.jsx)("div",{className:"",children:Object(r.jsx)(S,{className:""})})]})};c(88),c(101),c(102);a.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(z,{})}),document.getElementById("root"))},75:function(e,t,c){},76:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){}},[[106,1,2]]]);
//# sourceMappingURL=main.fc030fdc.chunk.js.map