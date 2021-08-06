(this["webpackJsonpcovid-sl"]=this["webpackJsonpcovid-sl"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(5),l=a.n(n),i=(a(14),a(15),a(0));function r(e){return Object(i.jsxs)("div",{className:"px-4 pt-5 text-center",children:[Object(i.jsx)("h1",{className:"display-4 fw-bold",children:"\ud83c\uddf1\ud83c\uddf0 Covid Status"}),Object(i.jsx)("div",{className:"col-lg-6 mx-auto",children:Object(i.jsx)("p",{className:"lead mb-4",children:"Sri Lanka, covid status in nutshell"})})]})}var o=a(2),d=a.n(o),u=a(3),b=a(6),h=a(7),m=a(9),j=a(8),v="https://www.hpb.health.gov.lk/api/get-current-statistical";function p(){return _.apply(this,arguments)}function _(){return(_=Object(u.a)(d.a.mark((function e(){var t,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={error:!0,payload:{}},e.prev=1,e.next=4,fetch(v);case 4:return a=e.sent,e.next=7,a.json();case 7:s=e.sent,t={error:!1,payload:s},e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function f(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var x=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(b.a)(this,a),(s=t.call(this,e)).state={isBusy:!0,isError:!1,update_date_time:null,local_new_cases:0,local_new_deaths:0,local_total_cases:0,local_total_number_of_individuals_in_hospitals:0,local_deaths:0,local_recovered:0,local_active_cases:0},s.loadData(),s}return Object(h.a)(a,[{key:"loadData",value:function(){var e=Object(u.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isBusy:!0}),e.next=3,p();case 3:if(t=e.sent,this.setState({isBusy:!1}),!t.error){e.next=8;break}return this.setState({isError:!0}),e.abrupt("return");case 8:a=t.payload.data,this.setState({update_date_time:a.update_date_time,local_new_cases:a.local_new_cases,local_new_deaths:a.local_new_deaths,local_total_cases:a.local_total_cases,local_total_number_of_individuals_in_hospitals:a.local_total_number_of_individuals_in_hospitals,local_deaths:a.local_deaths,local_recovered:a.local_recovered,local_active_cases:a.local_active_cases});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderItem",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{icon:"face",value:"",label:"",description:"",numberFromat:!0},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(i.jsx)("div",{className:"feature col",children:Object(i.jsx)("div",{className:"card",children:Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("div",{className:"feature-icon bg-primary bg-gradient",children:Object(i.jsx)("span",{className:"material-icons md-36",children:e.icon})}),Object(i.jsx)("h2",{children:e.label}),Object(i.jsx)("p",{children:e.description}),Object(i.jsx)("h4",{children:e.numberFromat?f(e.value):e.value})]})})},t)}},{key:"render",value:function(){var e=this,t=this.state,a=t.isBusy,s=t.update_date_time,c=t.local_new_cases,n=t.local_new_deaths,l=t.local_total_cases,r=t.local_total_number_of_individuals_in_hospitals,o=t.local_deaths,d=t.local_recovered,u=[{icon:"coronavirus",label:"New Cases",description:"New cases identified within 24hrs",value:c,numberFromat:!0},{icon:"sentiment_very_dissatisfied",label:"New Deaths",description:"New deaths reported within 24hrs",value:n,numberFromat:!0},{icon:"local_hospital",label:"Hospitalized",description:"Hospitalized number of individuals",value:r,numberFromat:!0},{icon:"coronavirus",label:"Total Cases",description:"Number of cases identified yet",value:l,numberFromat:!0},{icon:"masks",label:"Active Cases",description:"Number of total active cases",value:t.local_active_cases,numberFromat:!0},{icon:"sentiment_very_dissatisfied",label:"Total Deaths",description:"Number of deths reported yet",value:o,numberFromat:!0},{icon:"verified",label:"Recovered",description:"Number of recovered individuals",value:d,numberFromat:!0},{icon:"update",label:"Data",description:"Last updated on",value:s,numberFromat:!1}];return[Object(i.jsx)("div",{className:"container",style:{textAlign:"center"},id:"featured-2",children:Object(i.jsx)("button",{className:"btn btn-primary",onClick:function(){e.loadData()},disabled:a,children:a?"Data is being refreshed...":"Refresh Data"})}),Object(i.jsx)("div",{className:"container px-4 py-5",id:"featured-3",children:Object(i.jsx)("div",{className:"row g-4 row-cols-1 row-cols-lg-3",children:u.map((function(t,a){return e.renderItem(t,a)}))})})]}}]),a}(s.Component);function O(e){return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("footer",{className:"d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top",children:[Object(i.jsx)("div",{className:"col-md-5 d-flex align-items-center",children:Object(i.jsxs)("span",{className:"text-muted",children:["\xa9 2021, Raslan Rauff (Data obtained from"," ",Object(i.jsx)("span",{children:"www.hpb.health.gov.lk"}),")"]})}),Object(i.jsxs)("ul",{className:"nav col-auto justify-content-end list-unstyled d-flex",children:[Object(i.jsx)("li",{className:"ms-3",children:Object(i.jsx)("a",{className:"github-button",href:"https://github.com/raslan1994","aria-label":"Follow @raslan1994 on GitHub",children:"Follow @raslan1994"})}),Object(i.jsx)("li",{className:"ms-3",children:Object(i.jsx)("a",{className:"github-button",href:"https://github.com/raslan1994/covid-sl","data-icon":"octicon-star","aria-label":"Star raslan1994/covid-sl on GitHub",children:"Star"})})]}),Object(i.jsxs)("ul",{className:"nav col-auto",children:[Object(i.jsx)("li",{className:"ms-3",children:Object(i.jsx)("a",{className:"text-muted",href:"mailto:rstudioDevelopment@gmail.com",children:"Connect via email"})}),Object(i.jsx)("li",{className:"ms-3",children:Object(i.jsx)("a",{rel:"license",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",children:Object(i.jsx)("img",{alt:"Creative Commons License",style:{borderWidth:0},src:"https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"})})})]})]})})}var N=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(r,{}),Object(i.jsx)(x,{}),Object(i.jsx)(O,{})]})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),s(e),c(e),n(e),l(e)}))};l.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(N,{})}),document.getElementById("root")),w()}},[[18,1,2]]]);
//# sourceMappingURL=main.9559ff22.chunk.js.map