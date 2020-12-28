(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{26:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),s=n(19),i=n.n(s);n(26);function o(){return Object(r.jsx)("div",{children:Object(r.jsx)("h2",{children:" Expense Tracker"})})}var u=n(4),j=n.n(u),l=n(8),d=n(6),b=n(20),O=n(3),p=function(e,t){switch(t.type){case"GET_TRANSACTION":return Object(O.a)(Object(O.a)({},e),{},{loading:!1,transactions:t.payload});case"DELETE_TRANSACTION":return Object(O.a)(Object(O.a)({},e),{},{transactions:e.transactions.filter((function(e){return e._id!==t.payload}))});case"ADD_TRANSACTION":return Object(O.a)(Object(O.a)({},e),{},{transactions:[].concat(Object(b.a)(e.transactions),[t.payload])});case"TRANSACTION_ERROR":return Object(O.a)(Object(O.a)({},e),{},{error:t.payload});default:return e}},x=n(9),h=n.n(x),f={transactions:[],error:null,loading:!0},m=Object(a.createContext)(f),v=function(e){var t=e.children,n=Object(a.useReducer)(p,f),c=Object(d.a)(n,2),s=c[0],i=c[1];function o(){return(o=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/v1/transactions");case 3:t=e.sent,i({type:"GET_TRANSACTIONS",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),i({type:"TRANSACTIONS_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function u(){return(u=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("/api/v1/transactions/".concat(t));case 3:i({type:"DELETE_TRANSACTION",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),i({type:"TRANSACTIONS_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function b(){return(b=Object(l.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,h.a.post("/api/v1/transactions",t,n);case 4:r=e.sent,i({type:"ADD_TRANSACTION",payload:r.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),i({type:"TRANSACTIONS_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(r.jsx)(m.Provider,{value:{transactions:s.transactions,getTransactions:function(){return o.apply(this,arguments)},error:s.error,loading:s.loading,deleteTransaction:function(e){return u.apply(this,arguments)},addTransaction:function(e){return b.apply(this,arguments)}},children:t})};function T(){var e=Object(a.useContext)(m).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:" Your Balance"}),Object(r.jsxs)("h1",{children:[" Rs. ",e]})]})}function N(){var e=Object(a.useContext)(m).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"inc-exp-container",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:" Income "}),Object(r.jsxs)("p",{className:"money-plus",children:[" Rs. ",t]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:" Expense"}),Object(r.jsxs)("p",{className:"money-minus",children:[" Rs. ",n]})]})]})})}function y(e){var t=e.transaction,n=t.amount<0?"-":"+",c=Object(a.useContext)(m).deleteTransaction;return Object(r.jsx)("div",{children:Object(r.jsxs)("li",{className:t.amount<0?"minus":"plus",children:[t.text," ",Object(r.jsxs)("span",{children:[" ",n,"Rs. ",Math.abs(t.amount)]})," ",Object(r.jsx)("button",{onClick:function(){return c(t._id)},className:"delete-btn",children:" X "})]})})}function R(){var e=Object(a.useContext)(m),t=e.transactions,n=e.getTransactions;return Object(a.useEffect)((function(){n()}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:" History"}),Object(r.jsx)("ul",{className:"list",children:t.map((function(e){return Object(r.jsx)(y,{transaction:e},e.id)}))})]})}function A(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),i=Object(d.a)(s,2),o=i[0],u=i[1],j=Object(a.useContext)(m).addTransaction;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:" Add New Transaction"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e6*Math.random()),text:n,amount:+o};j(t)},children:[Object(r.jsxs)("div",{className:"form-control",children:[Object(r.jsx)("label",{for:"text",children:" Text"}),Object(r.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter text..."})]}),Object(r.jsxs)("div",{className:"form-control",children:[Object(r.jsxs)("label",{for:"amount",children:[" Amount ",Object(r.jsx)("br",{}),"(Negative - expense, Postive - income) "]}),Object(r.jsx)("input",{type:"number",value:o,onChange:function(e){return u(e.target.value)},placeholder:"Enter Amount..."})]}),Object(r.jsx)("button",{className:"btn",children:" Add Transaction"})]})]})}var C=function(){return Object(r.jsxs)(v,{children:[Object(r.jsx)(o,{}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(T,{}),Object(r.jsx)(N,{}),Object(r.jsx)(R,{}),Object(r.jsx)(A,{})]})]})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.63d48b3a.chunk.js.map