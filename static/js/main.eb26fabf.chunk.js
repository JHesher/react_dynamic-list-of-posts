(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(6),s=n.n(c),a=n(4),r=n(3),i=n(2),o=n.n(i),u=n(1),l="https://mate.academy/students-api";function j(e,t){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(o.a.mark((function e(t,n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l).concat(t),n);case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=function(){var e=Object(a.a)(o.a.mark((function e(t,n,c,s){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l,"/comments"),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({postId:t,name:n,email:c,body:s})});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t,n,c,s){return e.apply(this,arguments)}}();function m(e){return j(0!==e?"/posts?userId=".concat(e):"/posts")}n(12),n(13),n(14);var p=n(0),h=function(e){var t=e.posts,n=e.selectedPostId,c=e.handleClick;return Object(p.jsxs)("div",{className:"PostsList",children:[Object(p.jsx)("h2",{children:"Posts:"}),Object(p.jsx)("ul",{className:"PostsList__list",children:t.map((function(e){return Object(p.jsxs)("li",{className:"PostsList__item",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"[User #".concat(e.userId,"]:")}),e.title]}),Object(p.jsx)("button",{type:"button",className:"PostsList__button button",value:n,onClick:function(){return c(e.id)},children:n===e.id?"Close":"Open"})]},e.id)}))})]})},f=(n(16),function(e){var t=e.addNewComment,n=Object(u.useState)(""),c=Object(r.a)(n,2),s=c[0],a=c[1],i=Object(u.useState)(""),o=Object(r.a)(i,2),l=o[0],j=o[1],d=Object(u.useState)(""),b=Object(r.a)(d,2),m=b[0],h=b[1];return Object(p.jsxs)("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),t(s,l,m),a(""),j(""),h("")},children:[Object(p.jsx)("div",{className:"form-field",children:Object(p.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:s,onChange:function(e){return function(e){a(e.target.value)}(e)}})}),Object(p.jsx)("div",{className:"form-field",children:Object(p.jsx)("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:l,onChange:function(e){return function(e){j(e.target.value)}(e)}})}),Object(p.jsx)("div",{className:"form-field",children:Object(p.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:m,onChange:function(e){return function(e){h(e.target.value)}(e)}})}),Object(p.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})});n(17);var O=function(e){var t=e.selectedPostId,n=e.selectedPost,c=Object(u.useState)([]),s=Object(r.a)(c,2),i=s[0],l=s[1],d=Object(u.useState)(!0),m=Object(r.a)(d,2),h=m[0],O=m[1],x=function(){var e=Object(a.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/comments?postId=".concat(t));case 2:n=e.sent,l(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){x()}),[t]);var v=function(){var e=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/comments/".concat(t),{method:"DELETE"});case 2:return e.next=4,x();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(a.a)(o.a.mark((function e(n,c,s){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t,n,c,s);case 2:return e.next=4,x();case 4:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"PostDetails",children:[Object(p.jsx)("h2",{children:"Post details:"}),Object(p.jsx)("section",{className:"PostDetails__post",children:Object(p.jsx)("p",{children:n.title})}),Object(p.jsxs)("section",{className:"PostDetails__comments",children:[Object(p.jsx)("button",{type:"button",className:"button",onClick:function(){O(!h)},children:h?"Hide ".concat(i.length," comments"):"Show ".concat(i.length," comments")}),h&&Object(p.jsx)("ul",{className:"PostDetails__list",children:i.map((function(e){return Object(p.jsxs)("li",{className:"PostDetails__list-item",children:[Object(p.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return v(e.id)},children:"X"}),Object(p.jsx)("p",{children:e.body})]},e.id)}))})]}),Object(p.jsx)("section",{children:Object(p.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(p.jsx)(f,{addNewComment:_})})})]})},x=function(){var e=Object(u.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(u.useState)(0),i=Object(r.a)(s,2),l=i[0],j=i[1],d=Object(u.useState)(0),b=Object(r.a)(d,2),f=b[0],x=b[1],v=n.find((function(e){return e.id===f})),_=function(){var e=Object(a.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(l);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){_()}),[l]);return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("header",{className:"App__header",children:Object(p.jsxs)("label",{children:["Select a user: \xa0",Object(p.jsxs)("select",{onChange:function(e){j(+e.target.value)},value:l,className:"App__user-selector",children:[Object(p.jsx)("option",{value:"0",children:"All users"}),Object(p.jsx)("option",{value:"1",children:"Leanne Graham"}),Object(p.jsx)("option",{value:"2",children:"Ervin Howell"}),Object(p.jsx)("option",{value:"3",children:"Clementine Bauch"}),Object(p.jsx)("option",{value:"4",children:"Patricia Lebsack"}),Object(p.jsx)("option",{value:"5",children:"Chelsey Dietrich"}),Object(p.jsx)("option",{value:"6",children:"Mrs. Dennis Schulist"}),Object(p.jsx)("option",{value:"7",children:"Kurtis Weissnat"}),Object(p.jsx)("option",{value:"8",children:"Nicholas Runolfsdottir V"}),Object(p.jsx)("option",{value:"9",children:"Glenna Reichert"}),Object(p.jsx)("option",{value:"10",children:"Leanne Graham"})]})]})}),Object(p.jsxs)("main",{className:"App__main",children:[Object(p.jsx)("div",{className:"App__sidebar",children:Object(p.jsx)(h,{posts:n,selectedPostId:f,handleClick:function(e){return x(e!==f?e:0)}})}),Object(p.jsx)("div",{className:"App__content",children:v&&Object(p.jsx)(O,{selectedPostId:f,selectedPost:v})})]})]})};s.a.render(Object(p.jsx)(x,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.eb26fabf.chunk.js.map