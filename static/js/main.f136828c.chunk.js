(this.webpackJsonpapi_integration_documentation=this.webpackJsonpapi_integration_documentation||[]).push([[0],{10:function(e,t,s){},12:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),n=s(5),r=s.n(n),o=(s(10),s(4),s(0));var c=function(){return Object(o.jsxs)("div",{className:"documentation",children:[Object(o.jsx)("div",{className:"heading",style:{display:"flex",justifyContent:"center"},children:"API Integration Document"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{className:"heading",children:"Types of content supported"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"subHeading",children:"Movies"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"In this category, content partners will be able to ingest content which comes in below categories:"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"1.Feature Films"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"2.Short Movies"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"3.Documentaries"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"subHeading",children:" TV Shows "}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"Airtel Xstream provides the flexibility to ingest TV Shows on the platform. A TV Show can include multiple seasons and under each season there can be multiple episodes."}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"subHeading",children:"Videos"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"Airtel Xstream also allows to ingest standalone video contents. Some examples of video contents :"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"1.Music Videos"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"2.News Clips"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"subHeading",children:" Promos"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"Each content partner can provide us with a promo video which will be displayed on the partner channel page. Whenever a user visits the partner channel page this promo video will be played automatically. This gives a brief overview of content provided by the partner and helps with user engagement."}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"subHeading",children:"Trailers"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"Content partners are allowed to ingest trailer contents also. Below content types can have trailers associated with them :"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"1.Movies"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"2.TV Shows"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"3.Seasons"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"4.Episodes"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"Trailers are considered as free content (unless specified otherwise) and hence are playable without subscription. For paid content, once the trailer is played users will be provided with the option to subscribe in order to continue watching the actual content."}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})},l=[{id:1,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"},{id:2,name:"Description",apiFieldName:"description",description:"This should contain the synopsis of given content",mandatory:"YES"},{id:3,name:"Short Description",apiFieldName:"short_description",description:"A brief description about content in less than 150 characters",mandatory:"NO"},{id:4,name:"Title",apiFieldName:"title",description:"This should contain the title of content",mandatory:"YES"},{id:5,name:"Portrait Image of Aspect Ratio 2:3",apiFieldName:"portrait_23",description:"Portrait image to be displayed for a content",mandatory:"YES"},{id:6,name:"Landscape Image of Aspect Ratio 16:9",apiFieldName:"landscape_169",description:"Landscape image to be displayed for a content",mandatory:"YES"},{id:7,name:"Unique content identifier",apiFieldName:"contentId",description:"A unique ID to identify the contents. This will be used to uniquely identify a content between Airtel and the partner in case of issues.",mandatory:"YES"},{id:8,name:"Credits",apiFieldName:"credits",description:"List of actors, directors, producers etc",mandatory:"NO"},{id:9,name:"Duration",apiFieldName:"duration",description:"Duration of content (In seconds preferably)",mandatory:"YES"},{id:10,name:"Release Date/Year",apiFieldName:"releaseDate",description:"Release date or year of the content",mandatory:"YES"},{id:11,name:"Expiry Date of Content",apiFieldName:"expiryTime",description:"The timestamp after which content will be removed/expired",mandatory:"NO"},{id:12,name:"Free/Paid flag",apiFieldName:"isFree",description:"Boolean value representing if content is free or paid",mandatory:"YES"},{id:13,name:"Genres",apiFieldName:"geners",description:"Genres list of the conten",mandatory:"YES"},{id:14,name:"Downloadable Flag",apiFieldName:"isDownloadable",description:"Boolean value representing if content is downloadable or not",mandatory:"YES"},{id:15,name:"Age Rating*",apiFieldName:"ageRating",description:"Age Rating of content as per OTT guidelines",mandatory:"YES"},{id:16,name:"Content Type**",apiFieldName:"contentType",description:"To identify the content type",mandatory:"YES"},{id:17,name:"Stream Urls",apiFieldName:"streamUrls",description:"List of HLS/DASH stream urls of content (Refer to point 5 for more details)",mandatory:"NO"},{id:18,name:"Language",apiFieldName:"language",description:"List of audio languages used in content",mandatory:"YES"},{id:19,name:"Feature Banner HD",apiFieldName:"featureBannerHD",description:"Feature banner for displaying on Large screens. Dimension : 2280x699 / 300ppi",mandatory:"YES"}],d=[{id:1,name:"Duration",apiFieldName:"duration",description:"Duration of trailer",mandatory:"YES"},{id:2,name:"Title",apiFieldName:"title",description:"Title of trailer. If not provide MOVIE_NAME - TRAILER will be used",mandatory:"NO"},{id:3,name:"Trailer URL",apiFieldName:"trailerUrl",description:"HLS/DASH URL of trailer video",mandatory:"YES"},{id:4,name:"Portrait Image of Aspect Ratio 2:3",apiFieldName:"portrait_23",description:"Portrait image to be displayed for trailer",mandatory:"YES"},{id:5,name:"Landscape Image of Aspect Ratio 16:9",apiFieldName:"landscape_169",description:"Landscape image to be displayed for trailer",mandatory:"YES"}],m=[{id:1,name:"Season Number",apiFieldName:"seasonNumber",description:"Indicating the season number",mandatory:"YES"},{id:2,name:"Title",apiFieldName:"title",description:"Title of trailer. If not provided TVSHOW_NAME - SEASON NUMBER will be used",mandatory:"NO"},{id:3,name:"Season Id",apiFieldName:"seasonId",description:"Unique identifier to identify different seasons",mandatory:"YES"}],p=[{id:1,name:"Episode Number",apiFieldName:"episodeNumber",description:"Indicating the episode number",mandatory:"YES"},{id:2,name:"Title",apiFieldName:"title",description:"Title of Episode. If not provided TVSHOW_NAME - SEASON NUMBER - EPISODE NUMBER will be used",mandatory:"NO"}],j=s.p+"static/media/movie.951fe290.png",b=s.p+"static/media/episode.2a8bea6c.png",h=s.p+"static/media/contentDeletion.ee3ecf45.png",x={totalPages:2,nextPage:!0,data:[{contentId:"sample_movie_1",title:"Sample Movie 1",images:{portrait_23:"https://mydomain.com/600x900.jpg",landscape_169:"https://mydomain.com/1920x1080.jpg"},streamUrl:[{url:"https://mydomain.com/sample_movie_1/master.m3u8",type:"HLS"},{url:"https://mydomain.com/sample_movie_1/master.mpd",type:"DASH"}],description:"This is synopsis/plot of sample movie 1",short_description:"Short description here",isFree:!0,isDownloadable:!0,ageRating:"A",language:["English","Hindi"],contentType:"MOVIE",releaseDate:"2021",genres:["Action","Thriller"],credits:[{name:"Chris Pratt",role:"Actor"},{name:"Scarlett Johansson",role:"Actor"},{name:"Anthony",role:"Director"},{name:"David",role:"Producer"}],duration:600,expiryTime:"1 Jan 2022 12:00 AM"},{contentId:"sample_movie_2",title:"Sample Movie 2 with Trailers",images:{portrait_23:"https://mydomain.com/600x900.jpg",landscape_169:"https://mydomain.com/1920x1080.jpg"},streamUrl:[],description:"This is synopsis/plot of sample movie 2",short_description:"Short description here",isFree:!0,isDownloadable:!0,ageRating:"U",language:["English","Hindi"],trailers:[{title:"Trailer 1 for Sample Movie 2",duration:30,trailerUrl:[{url:"https://mydomain.com/sample_movie_2/trailer/master.m3u8",type:"HLS"},{url:"https://mydomain.com/sample_movie_2/trailer/master.mpd",type:"DASH"}],images:{portrait_23:"https://mydomain.com/600x900.jpg",landscape_169:"https://mydomain.com/1920x1080.jpg"}}],contentType:"MOVIE",releaseDate:"1 Jan 2021",genres:["Action","Thriller"],credits:[{name:"Chris Pratt",role:"Actor"},{name:"Scarlett Johansson",role:"Actor"},{name:"Anthony",role:"Director"},{name:"David",role:"Producer"}],duration:600,expiryTime:"1 Jan 2022 12:00 AM"},{contentId:"sample_video_1",title:"Sample Video 1",images:{portrait_23:"https://mydomain.com/600x900.jpg",landscape_169:"https://mydomain.com/1920x1080.jpg"},streamUrl:[{url:"https://mydomain.com/sample_video_1/master.m3u8",type:"HLS"},{url:"https://mydomain.com/sample_video_1/master.mpd",type:"DASH"}],description:"This is synopsis/plot of sample video 1",short_description:"Short description here",isFree:!0,isDownloadable:!0,ageRating:"A",language:["English","Hindi"],contentType:"VIDEO",releaseDate:"2021",genres:["Action","Thriller"],credits:[],duration:60,expiryTime:"1 Jan 2022 12:00 AM"},{contentId:"sample_promo_1",title:"Sample Promo 1",images:{portrait_23:"https://mydomain.com/600x900.jpg",landscape_169:"https://mydomain.com/1920x1080.jpg"},streamUrl:[{url:"https://mydomain.com/promo/master.m3u8",type:"HLS"},{url:"https://mydomain.com/promo/master.mpd",type:"DASH"}],description:"Description of content partner",short_description:"Short description here",isFree:!0,isDownloadable:!0,ageRating:"A",language:["English","Hindi"],contentType:"PROMO",releaseDate:"2021",genres:["Action","Thriller"],credits:[],duration:60}]},O={totalPages:10,nextPage:!0,data:[{contentId:"sample_tvshow_1_season_1_episode_1",title:"Sample Show 1 Season 1 Episode 1",images:{portrait_23:"https://mydomain.com/600x900.jpg",landscape_169:"https://mydomain.com/1920x1080.jpg"},episodeNumber:1,description:"This is synopsis/plot of episode 1",short_description:"Short description here",isFree:!0,isDownloadable:!0,ageRating:"A",language:["English","Hindi"],contentType:"EPISODE",releaseDate:"2021",genres:["Action","Thriller"],streamUrl:[{url:"https://mydomain.com/sample_tvshow_1/ep1/master.m3u8",type:"HLS"},{url:"https://mydomain.com/sample_tvshow_1/ep1/master.mpd",type:"DASH"}],credits:[{name:"Chris Pratt",role:"Actor"}],expiryTime:"1 Jan 2022 12:00 AM"},{contentId:"sample_tvshow_1_season_1_episode_2",title:"Sample Show 1 Season 1 Episode 2",images:{portrait_23:"https://mydomain.com/600x900.jpg",landscape_169:"https://mydomain.com/1920x1080.jpg"},episodeNumber:2,description:"This is synopsis/plot of episode 2",short_description:"Short description here",isFree:!0,isDownloadable:!0,ageRating:"A",language:["English","Hindi"],contentType:"EPISODE",releaseDate:"2021",genres:["Action","Thriller"],credits:[{name:"Chris Pratt",role:"Actor"}],expiryTime:"1 Jan 2022 12:00 AM"}]},g={totalPages:1,nextPage:!1,data:[{contentId:"sample_tvshow_1",title:"Sample Show 1",images:{portrait_23:"https://mydomain.com/600x900.jpg",landscape_169:"https://mydomain.com/1920x1080.jpg"},seasons:[{seasonNumber:1,title:"Sample TVShow Season 1",seasonId:"sample_tvshow_1_season_1"},{seasonNumber:2,title:"Sample TVShow Season 2",seasonId:"sample_tvshow_1_season_2"}],trailers:[{title:"Trailer 1 for Sample TVShow 1",duration:30,trailerUrl:[{url:"https://mydomain.com/sample_tvshow_1/trailer/master.m3u8",type:"HLS"},{url:"https://mydomain.com/sample_tvshow_1/trailer/master.mpd",type:"DASH"}],images:{portrait_23:"https://mydomain.com/600x900.jpg",landscape_169:"https://mydomain.com/1920x1080.jpg"}}],description:"This is synopsis/plot of sample show 1",short_description:"Short description here",isFree:!0,isDownloadable:!0,ageRating:"A",language:["English","Hindi"],contentType:"TVSHOW",releaseDate:"2021",genres:["Action","Thriller"],credits:[{name:"Chris Pratt",role:"Actor"}],expiryTime:"1 Jan 2022 12:00 AM"}]},y=s(2),u=s.n(y),f={contentIdsToDelete:["sample_movie_1","sample_tvshow_1"]};var N=function(){return Object(o.jsxs)("div",{className:"documentation",children:[Object(o.jsx)("p",{className:"heading",children:"Ingestion Workflow"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"For each content partner, ingestion is the core component to get onboarded on the Airtel Xtream platform. Through ingestion, Airtel Xstream will collect the content catalog from the partner and ingest it into our database. Below is the basic workflow of the ingestion process :"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"To ingest contents Airtel Xstream servers will hit the APIs provided by content partners. The below mentioned fields are common for all content types:"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("table",{className:"table",children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"API Field Name"}),Object(o.jsx)("th",{children:"Description"}),Object(o.jsx)("th",{children:"Mandatory"})]}),l.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.apiFieldName}),Object(o.jsx)("td",{children:e.description}),Object(o.jsx)("td",{children:e.mandatory})]},t)}))]}),Object(o.jsx)("br",{})," ",Object(o.jsx)("span",{className:"small_text",children:"Table 1 : Commons fields for all content types"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"* Possible values of ageRating : A, U, U/A 7+, U/A 13+, U/A 16+"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"** Possible values of contentType : MOVIE, VIDEO, TVSHOW, EPISODE, TRAILER, PROMO, SEASON"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"Apart from above mentioned fields we need additional details based on content type as described below :"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"subHeading",children:"Movies/Videos"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"In the case of movies and videos we need a paginated API from a content partner. Movies can also contain trailers with them. In that case we need trailer information with movie itself with following additional details in trailers key :"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(u.a,{src:x,theme:"monokai"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("table",{className:"table",children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"API Field Name"}),Object(o.jsx)("th",{children:"Description"}),Object(o.jsx)("th",{children:"Mandatory"})]}),d.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.apiFieldName}),Object(o.jsx)("td",{children:e.description}),Object(o.jsx)("td",{children:e.mandatory})]},t)}))]}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"small_text",children:"Table 2 : Additional fields for Movies"}),Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{}),Object(o.jsx)("img",{src:j,alt:"movie"}),Object(o.jsx)("span",{className:"small_text",children:"Flowchart for fetching non-TvShow content from API"}),Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"subHeading",children:"Promo"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"Each content partner is allowed to have a promo video to display on the partner channel page. "}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:" Partners can send contentType : PROMO for promo videos."}),Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"subHeading",children:"TV Shows"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"On Airtel Xtream platform we support TV Shows as per below hierarchy :"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"Since each tv show can contain multiple seasons and multiple episodes, we primarily need two "}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"APIs from content partners to ingest the TV Shows :"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"subHeading",children:"Get TV Shows List API "}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"Content partners can provide an API to fetch all the available TV Shows list. Apart from the mentioned common fields in Table 1 we need season details. Details regarding seasons can be stored in seasons key with each season containing below additional information :"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(u.a,{src:g,theme:"monokai"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("table",{className:"table",children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"API Field Name"}),Object(o.jsx)("th",{children:"Description"}),Object(o.jsx)("th",{children:"Mandatory"})]}),m.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.apiFieldName}),Object(o.jsx)("td",{children:e.description}),Object(o.jsx)("td",{children:e.mandatory})]},t)}))]}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"small_text",children:"Table 3 : Additional Fields for TV Shows"}),Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"subHeading",children:"Get Episodes List API "}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("span",{className:"text",children:["Once the TV Shows list is fetched, we will have TV Show and Season IDs. Using these ids we can fetch the episodes by calling the episodes API like this : ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"For episodes we need below additional information :"]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(u.a,{src:O,theme:"monokai"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("table",{className:"table",children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"API Field Name"}),Object(o.jsx)("th",{children:"Description"}),Object(o.jsx)("th",{children:"Mandatory"})]}),p.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.apiFieldName}),Object(o.jsx)("td",{children:e.description}),Object(o.jsx)("td",{children:e.mandatory})]},t)}))]}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"small_text",children:"Table 4 : Additional Fields for Episodes"}),Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{}),Object(o.jsx)("img",{src:b,alt:"movie"}),Object(o.jsx)("span",{className:"small_text",children:" Flowchart for fetching TvShow content from API"}),Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"heading",children:" Content Deletion"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"Sometimes content partners might need to unpublish the content from the Airtel Xtream platform and for that they can provide the content deletion API which can include the content ids which needs to be unpublished from the Airtel Xtream system. We will periodically hit this API and will unpublish contents accordingly."}),Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{}),Object(o.jsx)(u.a,{src:f,theme:"monokai"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("img",{src:h,alt:"movie"}),Object(o.jsx)("span",{className:"small_text",children:" Flowchart for fetching deleted content from API"}),Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{})]})};var S=function(){return Object(o.jsxs)("div",{className:"documentation",children:[Object(o.jsx)("span",{className:"heading",children:"Playback"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"As per table 1, stream URL is not a mandatory field during content ingestion. If content partners decide not to provide stream URLs during content ingestion they need to provide a playback API. "}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"The playback API will be called every time XStream backend receives a content play request. Content Partner can send us playback URL in this API using which content will be played on Xstream apps."}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"Xstream players support both DRM and non-DRM-protected content."}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"1. For DRM-protected contents, Xstream players support Widevine (for non-ios devices) and Fairplay (for ios devices)"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text",children:"2. For non-DRM contents, Xstream players support HLS play-URL (for all platforms)"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})};var w=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(c,{}),Object(o.jsx)(N,{}),Object(o.jsx)(S,{})]})},_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,13)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),i(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root")),_()},4:function(e,t,s){}},[[12,1,2]]]);
//# sourceMappingURL=main.f136828c.chunk.js.map