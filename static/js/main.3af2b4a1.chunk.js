(this.webpackJsonpapi_integration_documentation=this.webpackJsonpapi_integration_documentation||[]).push([[0],{11:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i.n(n),a=i(4),c=i.n(a),o=(i(9),i(3),i(0));var r=function(){return Object(o.jsxs)("div",{className:"documentation",children:[Object(o.jsx)("div",{className:"heading",style:{display:"flex",justifyContent:"center"},children:"API Integration Document"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{className:"heading",children:"Types of content supported"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"subHeading",children:"Movies"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"In this category, content partners will be able to ingest content which comes in below categories:"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"1.Feature Films"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"2.Short Movies"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"3.Documentaries"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"subHeading",children:" TV Shows "}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"Airtel Xstream provides the flexibility to ingest TV Shows on the platform. A TV Show can include multiple seasons and under each season there can be multiple episodes."}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"subHeading",children:"Videos"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"Airtel Xstream also allows to ingest standalone video contents. Some examples of video contents :"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"1.Music Videos"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"2.News Clips"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"subHeading",children:" Promos"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"Each content partner can provide us with a promo video which will be displayed on the partner channel page. Whenever a user visits the partner channel page this promo video will be played automatically. This gives a brief overview of content provided by the partner and helps with user engagement."}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"subHeading",children:"Trailers"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"Content partners are allowed to ingest trailer contents also. Below content types can have trailers associated with them :"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"1.Movies"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"2.TV Shows"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"3.Seasons"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"4.Episodes"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"Trailers are considered as free content (unless specified otherwise) and hence are playable without subscription. For paid content, once the trailer is played users will be provided with the option to subscribe in order to continue watching the actual content."}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})},l=[{id:1,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"},{id:1,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"},{id:1,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"},{id:1,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"},{id:1,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"},{id:1,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"},{id:1,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"},{id:1,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"},{id:1,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"},{id:1,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"},{id:1,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"},{id:1,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"},{id:1,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"},{id:1,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"},{id:1,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"},{id:1,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"},{id:1,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"},{id:1,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"}];var d=function(){return Object(o.jsxs)("div",{className:"documentation",children:[Object(o.jsx)("p",{className:"heading",children:"Ingestion Workflow"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"For each content partner, ingestion is the core component to get onboarded on the Airtel Xtream platform. Through ingestion, Airtel Xstream will collect the content catalog from the partner and ingest it into our database. Below is the basic workflow of the ingestion process :"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"To ingest contents Airtel Xstream servers will hit the APIs provided by content partners. The below mentioned fields are common for all content types:"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("table",{className:"table",children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"API Field Name"}),Object(o.jsx)("th",{children:"Description"}),Object(o.jsx)("th",{children:"Mandatory"})]}),l.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.apiFieldName}),Object(o.jsx)("td",{children:e.description}),Object(o.jsx)("td",{children:e.mandatory})]},t)}))]})]})};var j=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(r,{}),Object(o.jsx)(d,{})]})},b=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,12)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;i(e),n(e),s(e),a(e),c(e)}))};c.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),b()},3:function(e,t,i){},9:function(e,t,i){}},[[11,1,2]]]);
//# sourceMappingURL=main.3af2b4a1.chunk.js.map