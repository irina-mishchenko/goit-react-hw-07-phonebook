(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={contactListItem:"ContactListItem_contactListItem__1-GxK",contact:"ContactListItem_contact__19MDF",contactListButton:"ContactListItem_contactListButton__3xfjE"}},14:function(t,e,n){t.exports={filterContainer:"Filter_filterContainer__31GbT",filterLabel:"Filter_filterLabel__t0Dir",filterInput:"Filter_filterInput__3L5fu"}},30:function(t,e,n){t.exports={contactList:"ContactList_contactList__2JHBl"}},60:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),o=n(10),r=n.n(o),s=n(6),u=n(19),i=n(2),b=Object(i.b)("contacts/fetchContactsRequest"),l=Object(i.b)("contacts/fetchContactsSuccess"),f=Object(i.b)("contacts/fetchContactsError"),j=Object(i.b)("contacts/addContactRequest"),m=Object(i.b)("contacts/addContactSuccess"),O=Object(i.b)("contacts/addContactError"),d=Object(i.b)("contacts/deleteContactRequest"),_=Object(i.b)("contacts/deleteContactSuccess"),h=Object(i.b)("contacts/deleteContactError"),C=Object(i.b)("contacts/changeFilter"),p=n(9),x=n.n(p);x.a.defaults.baseURL="http://localhost:3000";var v=function(t){return t.contacts.items},L=function(t){return t.contacts.filter},N=function(t){var e=v(t),n=L(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},I=n(7),g=n.n(I),F=n(1);function w(){var t=Object(c.useState)(""),e=Object(u.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(""),r=Object(u.a)(o,2),i=r[0],b=r[1];Object(c.useEffect)((function(){}),[]);var l=Object(s.c)(v),f=Object(s.b)(),d=function(t){switch(t.target.name){case"name":a(t.target.value);break;case"number":b(t.target.value);break;default:return}},_=function(){a(""),b("")};return Object(F.jsxs)("div",{className:g.a.formContainer,children:[Object(F.jsx)("h2",{className:g.a.formTitle,children:"Phonebook"}),Object(F.jsxs)("form",{onSubmit:function(t){t.preventDefault(),l.some((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts!")):(f(function(t,e){return function(n){var c={name:t,number:e};n(j()),x.a.post("/contacts",c).then((function(t){var e=t.data;return n(m(e))})).catch((function(t){return n(O(t.message))}))}}(n,i)),_())},className:g.a.form,autoComplete:"off",children:[Object(F.jsxs)("label",{className:g.a.formLabel,children:["Name",Object(F.jsx)("input",{className:g.a.formInput,type:"text",name:"name",value:n,onChange:d})]}),Object(F.jsxs)("label",{className:g.a.formLabel,children:["Number",Object(F.jsx)("input",{className:g.a.formInput,type:"number",name:"number",value:i,onChange:d})]}),Object(F.jsx)("button",{type:"submit",className:g.a.formButton,children:"Add contact"})]})]})}var y=n(13),k=n.n(y),B=function(t){var e=t.contact,n=t.number,c=t.onDeleteContact,a=t.id;return Object(F.jsxs)("li",{className:k.a.contactListItem,children:[Object(F.jsxs)("p",{className:k.a.contact,children:[e,": ",n]}),Object(F.jsx)("button",{onClick:function(){return c(a)},className:k.a.contactListButton,children:"Delete"})]})},E=n(30),S=n.n(E);var D=function(){var t=Object(s.c)(N),e=Object(s.b)();return Object(F.jsx)("ul",{className:S.a.contactList,children:t.map((function(t){var n=t.name,c=t.id,a=t.number;return Object(F.jsx)(B,{contact:n,number:a,onDeleteContact:function(){return e((t=c,function(e){e(d()),x.a.delete("/contacts/".concat(t)).then((function(){return e(_(t))})).catch((function(t){return e(h(t))}))}));var t}},c)}))})},T=n(14),J=n.n(T),R=function(){var t=Object(s.c)(L),e=Object(s.b)();return Object(F.jsx)("div",{className:J.a.filterContainer,children:Object(F.jsxs)("label",{className:J.a.filterLabel,children:["Find contact",Object(F.jsx)("input",{className:J.a.filterInput,type:"text",value:t,onChange:function(t){return e(C(t.target.value))}})]})})};var q,M,G=function(){return Object(F.jsxs)("div",{children:[Object(F.jsx)(w,{}),Object(F.jsx)(R,{}),Object(F.jsx)(D,{})]})},H=n(12),K=n(31),X=n.n(K),A=n(3),P=n(5),U=Object(i.c)([],(q={},Object(A.a)(q,b,(function(t,e){return e.payload})),Object(A.a)(q,m,(function(t,e){return[e.payload].concat(Object(H.a)(t))})),Object(A.a)(q,_,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),q)),z=Object(i.c)(!1,(M={},Object(A.a)(M,b,(function(){return!0})),Object(A.a)(M,l,(function(){return!1})),Object(A.a)(M,f,(function(){return!1})),Object(A.a)(M,j,(function(){return!0})),Object(A.a)(M,m,(function(){return!1})),Object(A.a)(M,O,(function(){return!1})),Object(A.a)(M,d,(function(){return!0})),Object(A.a)(M,_,(function(){return!1})),Object(A.a)(M,h,(function(){return!1})),M)),Q=Object(i.c)("",Object(A.a)({},C,(function(t,e){return e.payload}))),V=Object(P.c)({items:U,filter:Q,loading:z}),W=[].concat(Object(H.a)(Object(i.d)()),[X.a]),Y=Object(i.a)({reducer:{contacts:V},middleware:W,devTools:!1});r.a.render(Object(F.jsx)(a.a.StrictMode,{children:Object(F.jsx)(s.a,{store:Y,children:Object(F.jsx)(G,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={formContainer:"ContactForm_formContainer__oHbJt",formTitle:"ContactForm_formTitle__2hME0",form:"ContactForm_form__TXJnq",formLabel:"ContactForm_formLabel__4gLcR",formInput:"ContactForm_formInput__3IoCl",formButton:"ContactForm_formButton__1cXK_"}}},[[60,1,2]]]);
//# sourceMappingURL=main.7ef11c97.chunk.js.map