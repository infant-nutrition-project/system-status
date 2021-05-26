(this["webpackJsonpsystem-status"]=this["webpackJsonpsystem-status"]||[]).push([[0],{33:function(t,e,a){},34:function(t,e,a){},35:function(t,e,a){},58:function(t,e,a){"use strict";a.r(e);var s=a(1),c=a.n(s),n=a(25),r=a.n(n),i=(a(33),a(34),a(35),a(6)),j=a(7),l=a(9),b=a(8),d=a(0),o=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{children:Object(d.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:Object(d.jsx)("div",{children:Object(d.jsx)("a",{href:"/",className:"navbar-brand",children:"DIAPER System Status"})})})})}}]),a}(s.Component),u=a(10),h=a(11),O=a(28),m=a.n(O),x=new(function(){function t(){Object(i.a)(this,t)}return Object(j.a)(t,[{key:"systemStatusData",value:function(t){return m.a.get("https://SECRET.execute-api.us-east-1.amazonaws.com/default/getMonitorResults".replace("SECRET",t))}}]),t}()),v={Timestamp:null,DailyCount:[],CumulativeCount:[]},f={Timestamp:null,ErrorCount:0,Data:[]},p=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(t){var s;return Object(i.a)(this,a),(s=e.call(this,t)).state={secret:"",isSecretWrong:!1,showSystemStatusData:!1,job1Data:v,job2Data:f},s.validate=s.validate.bind(Object(u.a)(s)),s.onSubmit=s.onSubmit.bind(Object(u.a)(s)),s}return Object(j.a)(a,[{key:"validate",value:function(t){var e={};return""!==t.secret&&""!==t.secret.trim()||(e.secret="Must enter secret string"),e}},{key:"onSubmit",value:function(t){var e=this;x.systemStatusData(t.secret).then((function(t){e.setState({isSecretWrong:!1,showSystemStatusData:!0,job1Data:{Timestamp:t.data.job1.Timestamp,DailyCount:t.data.job1.Result[0],CumulativeCount:t.data.job1.Result[1]},job2Data:{Timestamp:t.data.job2.Timestamp,ErrorCount:t.data.job2.Result.filter((function(t){return"ERROR"===t.status})).length,Data:t.data.job2.Result}})})).catch((function(t){console.log(t),e.setState({isSecretWrong:!0,showSystemStatusData:!1,job1Data:v,job2Data:f})}))}},{key:"render",value:function(){var t=this,e=this.state.secret,a=this.state.job1Data.Timestamp,s=this.state.job1Data.DailyCount,c=this.state.job1Data.CumulativeCount,n=this.state.job2Data.Timestamp,r=this.state.job2Data.ErrorCount,i=this.state.job2Data.Data;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h4",{children:"Secret Key"}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(h.d,{initialValues:{secret:e},enableReinitialize:!0,onSubmit:this.onSubmit,validate:this.validate,validateOnChange:!1,validateOnBlur:!1,children:function(e){return Object(d.jsxs)(h.c,{children:[Object(d.jsx)(h.a,{name:"secret",component:"div",className:"alert alert-warning"}),t.state.isSecretWrong&&Object(d.jsx)("div",{className:"alert alert-danger",children:"Secret INCORRECT. Please retry"}),Object(d.jsxs)("fieldset",{className:"form-group",children:[Object(d.jsx)("label",{children:"If you do not know the secret key, please contact Liz."}),Object(d.jsx)(h.b,{className:"form-control",type:"text",name:"secret"})]}),Object(d.jsx)("button",{className:"btn btn-success",type:"submit",children:"Submit"})]})}})}),this.state.showSystemStatusData&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{children:" Job 1 "}),Object(d.jsxs)("h4",{children:[" Timestamp (UTC Time): ",a," "]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("b",{children:"Daily Count"}),Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Date"}),Object(d.jsx)("th",{children:"Count"})]})}),Object(d.jsx)("tbody",{children:s.map((function(t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t._id}),Object(d.jsx)("td",{children:t.total})]},t._id)}))})]})]}),Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("b",{children:"Cumulative Count"}),Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"User"}),Object(d.jsx)("th",{children:"Cumulative count"})]})}),Object(d.jsx)("tbody",{children:c.map((function(t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t._id}),Object(d.jsx)("td",{children:t.cumulative_count})]},t._id)}))})]})]})]})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{children:"Job 2"}),Object(d.jsxs)("h4",{children:[" Timestamp (UTC Time): ",n]}),Object(d.jsx)("b",{children:0===r&&Object(d.jsx)("p",{className:"text-success",children:"All status OK"})}),Object(d.jsx)("b",{children:r>0&&Object(d.jsxs)("p",{className:"text-warning bg-dark",children:["WARNING: ",r," error(s) detected"]})}),Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Status"}),Object(d.jsx)("th",{children:"Info"})]})}),Object(d.jsx)("tbody",{children:i.map((function(t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.name}),Object(d.jsx)("td",{children:t.status}),Object(d.jsx)("td",{children:JSON.stringify(t.info)})]},t.name)}))})]})]})]})]})}}]),a}(s.Component),y=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o,{}),Object(d.jsx)(p,{})]})}}]),a}(s.Component);var S=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(y,{})})},C=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(e){var a=e.getCLS,s=e.getFID,c=e.getFCP,n=e.getLCP,r=e.getTTFB;a(t),s(t),c(t),n(t),r(t)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),C()}},[[58,1,2]]]);
//# sourceMappingURL=main.0e94dd42.chunk.js.map