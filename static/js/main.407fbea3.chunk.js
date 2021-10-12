(this.webpackJsonpapi_integration_documentation=this.webpackJsonpapi_integration_documentation||[]).push([[0],{11:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),n=s(4),r=s.n(n),c=(s(9),s(3),s(0));var o=function(){return Object(c.jsxs)("div",{className:"documentation",children:[Object(c.jsx)("div",{className:"heading",style:{display:"flex",justifyContent:"center"},children:"API Integration Document"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{className:"heading",children:"Types of content supported"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"subHeading",children:"Movies"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"In this category, content partners will be able to ingest content which comes in below categories:"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"1.Feature Films"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"2.Short Movies"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"3.Documentaries"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"subHeading",children:" TV Shows "}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"Airtel Xstream provides the flexibility to ingest TV Shows on the platform. A TV Show can include multiple seasons and under each season there can be multiple episodes."}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"subHeading",children:"Videos"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"Airtel Xstream also allows to ingest standalone video contents. Some examples of video contents :"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"1.Music Videos"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"2.News Clips"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"subHeading",children:" Promos"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"Each content partner can provide us with a promo video which will be displayed on the partner channel page. Whenever a user visits the partner channel page this promo video will be played automatically. This gives a brief overview of content provided by the partner and helps with user engagement."}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"subHeading",children:"Trailers"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"Content partners are allowed to ingest trailer contents also. Below content types can have trailers associated with them :"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"1.Movies"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"2.TV Shows"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"3.Seasons"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"4.Episodes"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"Trailers are considered as free content (unless specified otherwise) and hence are playable without subscription. For paid content, once the trailer is played users will be provided with the option to subscribe in order to continue watching the actual content."}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{})]})},l=[{id:1,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"},{id:2,name:"Description",apiFieldName:"description",description:"This should contain the synopsis of given content",mandatory:"YES"},{id:3,name:"Short Description",apiFieldName:"short_description",description:"A brief description about content in less than 150 characters",mandatory:"NO"},{id:4,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"},{id:5,name:"Portrait Image of Aspect Ratio 2:3",apiFieldName:"portrait_23",description:"Portrait image to be displayed for a content",mandatory:"YES"},{id:6,name:"Landscape Image of Aspect Ratio 16:9",apiFieldName:"landscape_169",description:"Landscape image to be displayed for a content",mandatory:"YES"},{id:7,name:"Unique content identifier",apiFieldName:"contentId",description:"A unique ID to identify the contents. This will be used to uniquely identify a content between Airtel and the partner in case of issues.",mandatory:"YES"},{id:8,name:"Credits",apiFieldName:"credits",description:"List of actors, directors, producers etc",mandatory:"NO"},{id:9,name:"Duration",apiFieldName:"duration",description:"Duration of content (In seconds preferably)",mandatory:"YES"},{id:10,name:"Release Date/Year",apiFieldName:"releaseDate",description:"Release date or year of the content",mandatory:"YES"},{id:11,name:"Expiry Date of Content",apiFieldName:"expiryTime",description:"The timestamp after which content will be removed/expired",mandatory:"NO"},{id:12,name:"Free/Paid flag",apiFieldName:"isFree",description:"Boolean value representing if content is free or paid",mandatory:"YES"},{id:13,name:"Genres",apiFieldName:"geners",description:"Genres list of the conten",mandatory:"YES"},{id:14,name:"Downloadable Flag",apiFieldName:"isDownloadable",description:"Boolean value representing if content is downloadable or not",mandatory:"YES"},{id:15,name:"Age Rating*",apiFieldName:"ageRating",description:"Age Rating of content as per OTT guidelines",mandatory:"YES"},{id:16,name:"Content Type**",apiFieldName:"contentType",description:"To identify the content type",mandatory:"YES"},{id:17,name:"Stream Urls",apiFieldName:"streamUrls",description:"List of HLS/DASH stream urls of content (Refer to point 5 for more details)",mandatory:"NO"},{id:18,name:"Language",apiFieldName:"language",description:"List of audio languages used in content",mandatory:"YES"},{id:19,name:"Feature Banner HD",apiFieldName:"featureBannerHD",description:"Feature banner for displaying on Large screens. Dimension : 2280x699 / 300ppi",mandatory:"YES"}],d=[{id:1,name:"Duration",apiFieldName:"duration",description:"Duration of trailer",mandatory:"YES"},{id:2,name:"Title",apiFieldName:"title",description:"Title of trailer. If not provide MOVIE_NAME - TRAILER will be used",mandatory:"NO"},{id:3,name:"Trailer URL",apiFieldName:"trailerUrl",description:"HLS/DASH URL of trailer video",mandatory:"YES"},{id:4,name:"Portrait Image of Aspect Ratio 2:3",apiFieldName:"portrait_23",description:"Portrait image to be displayed for trailer",mandatory:"YES"},{id:5,name:"Landscape Image of Aspect Ratio 16:9",apiFieldName:"landscape_169",description:"Landscape image to be displayed for trailer",mandatory:"YES"}],j=[{id:1,name:"Season Number",apiFieldName:"seasonNumber",description:"Indicating the season number",mandatory:"YES"},{id:2,name:"Title",apiFieldName:"title",description:"Title of trailer. If not provided TVSHOW_NAME - SEASON NUMBER will be used",mandatory:"NO"},{id:3,name:"Season Id",apiFieldName:"seasonId",description:"Unique identifier to identify different seasons",mandatory:"YES"}],m=[{id:1,name:"Episode Number",apiFieldName:"episodeNumber",description:"Indicating the episode number",mandatory:"YES"},{id:2,name:"Title",apiFieldName:"title",description:"Title of Episode. If not provided TVSHOW_NAME - SEASON NUMBER - EPISODE NUMBER will be used",mandatory:"NO"}],b=s.p+"static/media/movie.951fe290.png",p=s.p+"static/media/episode.2a8bea6c.png",h=s.p+"static/media/contentDeletion.ee3ecf45.png",x={totalPages:2,nextPage:!0,data:[{contentId:"sample_movie_1",title:"Sample Movie 1",images:{portrait_23:"https://mydomain.com/600x900.jpg",landscape_169:"https://mydomain.com/1920x1080.jpg"},streamUrl:[{url:"https://mydomain.com/sample_movie_1/master.m3u8",type:"HLS"},{url:"https://mydomain.com/sample_movie_1/master.mpd",type:"DASH"}],description:"This is synopsis/plot of sample movie 1",short_description:"Short description here",isFree:!0,isDownloadable:!0,ageRating:"A",language:["English","Hindi"],contentType:"MOVIE",releaseDate:"2021",genres:["Action","Thriller"],credits:[{name:"Chris Pratt",role:"Actor"},{name:"Scarlett Johansson",role:"Actor"},{name:"Anthony",role:"Director"},{name:"David",role:"Producer"}],duration:600,expiryTime:"1 Jan 2022 12:00 AM"},{contentId:"sample_movie_2",title:"Sample Movie 2 with Trailers",images:{portrait_23:"https://mydomain.com/600x900.jpg",landscape_169:"https://mydomain.com/1920x1080.jpg"},streamUrl:[],description:"This is synopsis/plot of sample movie 2",short_description:"Short description here",isFree:!0,isDownloadable:!0,ageRating:"U",language:["English","Hindi"],trailers:[{title:"Trailer 1 for Sample Movie 2",duration:30,trailerUrl:[{url:"https://mydomain.com/sample_movie_2/trailer/master.m3u8",type:"HLS"},{url:"https://mydomain.com/sample_movie_2/trailer/master.mpd",type:"DASH"}],images:{portrait_23:"https://mydomain.com/600x900.jpg",landscape_169:"https://mydomain.com/1920x1080.jpg"}}],contentType:"MOVIE",releaseDate:"1 Jan 2021",genres:["Action","Thriller"],credits:[{name:"Chris Pratt",role:"Actor"},{name:"Scarlett Johansson",role:"Actor"},{name:"Anthony",role:"Director"},{name:"David",role:"Producer"}],duration:600,expiryTime:"1 Jan 2022 12:00 AM"},{contentId:"sample_video_1",title:"Sample Video 1",images:{portrait_23:"https://mydomain.com/600x900.jpg",landscape_169:"https://mydomain.com/1920x1080.jpg"},streamUrl:[{url:"https://mydomain.com/sample_video_1/master.m3u8",type:"HLS"},{url:"https://mydomain.com/sample_video_1/master.mpd",type:"DASH"}],description:"This is synopsis/plot of sample video 1",short_description:"Short description here",isFree:!0,isDownloadable:!0,ageRating:"A",language:["English","Hindi"],contentType:"VIDEO",releaseDate:"2021",genres:["Action","Thriller"],credits:[],duration:60,expiryTime:"1 Jan 2022 12:00 AM"},{contentId:"sample_promo_1",title:"Sample Promo 1",images:{portrait_23:"https://mydomain.com/600x900.jpg",landscape_169:"https://mydomain.com/1920x1080.jpg"},streamUrl:[{url:"https://mydomain.com/promo/master.m3u8",type:"HLS"},{url:"https://mydomain.com/promo/master.mpd",type:"DASH"}],description:"Description of content partner",short_description:"Short description here",isFree:!0,isDownloadable:!0,ageRating:"A",language:["English","Hindi"],contentType:"PROMO",releaseDate:"2021",genres:["Action","Thriller"],credits:[],duration:60}]};var O=function(){return Object(c.jsxs)("div",{className:"documentation",children:[Object(c.jsx)("p",{className:"heading",children:"Ingestion Workflow"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"For each content partner, ingestion is the core component to get onboarded on the Airtel Xtream platform. Through ingestion, Airtel Xstream will collect the content catalog from the partner and ingest it into our database. Below is the basic workflow of the ingestion process :"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"To ingest contents Airtel Xstream servers will hit the APIs provided by content partners. The below mentioned fields are common for all content types:"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)("table",{className:"table",children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"API Field Name"}),Object(c.jsx)("th",{children:"Description"}),Object(c.jsx)("th",{children:"Mandatory"})]}),l.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.apiFieldName}),Object(c.jsx)("td",{children:e.description}),Object(c.jsx)("td",{children:e.mandatory})]},t)}))]}),Object(c.jsx)("br",{})," ",Object(c.jsx)("span",{className:"small_text",children:"Table 1 : Commons fields for all content types"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"* Possible values of ageRating : A, U, U/A 7+, U/A 13+, U/A 16+"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"** Possible values of contentType : MOVIE, VIDEO, TVSHOW, EPISODE, TRAILER, PROMO, SEASON"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"Apart from above mentioned fields we need additional details based on content type as described below :"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"subHeading",children:"Movies/Videos"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{className:"text",children:["In the case of movies and videos we need a paginated API from a content partner. Movies can also contain trailers with them. In that case we need trailer information with movie itself with following additional details in trailers key : ",Object(c.jsx)("a",{href:"https://run.mocky.io/v3/67a72c59-6193-4288-b8d1-4974f00f9849",target:"_blank",children:"(Click here for sample response)"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:"json_display",style:{height:"200px",width:"500px"},children:Object(c.jsx)("p",{children:Object(c.jsx)("code",{children:x})})}),Object(c.jsxs)("table",{className:"table",children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"API Field Name"}),Object(c.jsx)("th",{children:"Description"}),Object(c.jsx)("th",{children:"Mandatory"})]}),d.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.apiFieldName}),Object(c.jsx)("td",{children:e.description}),Object(c.jsx)("td",{children:e.mandatory})]},t)}))]}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"small_text",children:"Table 2 : Additional fields for Movies"}),Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),Object(c.jsx)("img",{src:b,alt:"movie"}),Object(c.jsx)("span",{className:"small_text",children:"Flowchart for fetching non-TvShow content from API"}),Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"subHeading",children:"Promo"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"Each content partner is allowed to have a promo video to display on the partner channel page. "}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:" Partners can send contentType : PROMO for promo videos."}),Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"subHeading",children:"TV Shows"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"On Airtel Xtream platform we support TV Shows as per below hierarchy :"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"Since each tv show can contain multiple seasons and multiple episodes, we primarily need two "}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"text",children:"APIs from content partners to ingest the TV Shows :"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"subHeading",children:"Get TV Shows List API "}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{className:"text",children:["Content partners can provide an API to fetch all the available TV Shows list. Apart from the mentioned common fields in Table 1 we need season details. Details regarding seasons can be stored in seasons key with each season containing below additional information :",Object(c.jsx)("a",{href:"https://run.mocky.io/v3/c74e4633-5735-40cd-aefa-824913a75fb8",target:"_blank",children:"(Click here for sample response)"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)("table",{className:"table",children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"API Field Name"}),Object(c.jsx)("th",{children:"Description"}),Object(c.jsx)("th",{children:"Mandatory"})]}),j.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.apiFieldName}),Object(c.jsx)("td",{children:e.description}),Object(c.jsx)("td",{children:e.mandatory})]},t)}))]}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"small_text",children:"Table 3 : Additional Fields for TV Shows"}),Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"subHeading",children:"Get TV Shows List API "}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{className:"text",children:["Once the TV Shows list is fetched as described in section 3.3.1 we will have TV Show and Season IDs. Using these ids we can fetch the episodes by calling the episodes API like this : ",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"For episodes we need below additional information : ",Object(c.jsx)("a",{href:"https://run.mocky.io/v3/86e09e8c-5561-48f4-ab2b-b10a0f2e12d0?tvshowId=A&seasonId=B",target:"_blank",children:"(Click here for sample response)"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)("table",{className:"table",children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"API Field Name"}),Object(c.jsx)("th",{children:"Description"}),Object(c.jsx)("th",{children:"Mandatory"})]}),m.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.apiFieldName}),Object(c.jsx)("td",{children:e.description}),Object(c.jsx)("td",{children:e.mandatory})]},t)}))]}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"small_text",children:"Table 4 : Additional Fields for Episodes"}),Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),Object(c.jsx)("img",{src:p,alt:"movie"}),Object(c.jsx)("span",{className:"small_text",children:" Flowchart for fetching TvShow content from API"}),Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"heading",children:" Content Deletion"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{className:"text",children:["Sometimes content partners might need to unpublish the content from the Airtel Xtream platform and for that they can provide the content deletion API which can include the content ids which needs to be unpublished from the Airtel Xtream system. We will periodically hit this API and will unpublish contents accordingly. ",Object(c.jsx)("a",{href:"https://run.mocky.io/v3/6425e2ba-042a-41b4-9fd8-92fb6ccf6636",target:"_blank",children:" (Click here for sample response)"})]}),Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),Object(c.jsx)("img",{src:h,alt:"movie"}),Object(c.jsx)("span",{className:"small_text",children:" Flowchart for fetching deleted content from API"}),Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{})]})};var g=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o,{}),Object(c.jsx)(O,{})]})},f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,12)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),i(e),n(e),r(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),f()},3:function(e,t,s){},9:function(e,t,s){}},[[11,1,2]]]);
//# sourceMappingURL=main.407fbea3.chunk.js.map