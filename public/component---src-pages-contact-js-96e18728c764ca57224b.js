(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{241:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(250),A=t(259),c=t(261),l=t(254),o=t(240),m=t.n(o),s="Your name",d="Your email",p="Your message",u="Submit",g=function(){return r.a.createElement("section",null,r.a.createElement(l.a,{title:"Contact us",subtitle:"now"}),r.a.createElement("div",null,r.a.createElement("form",{action:"https://formspree.io/...",method:"POST",className:m.a.form},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"name"),r.a.createElement("input",{type:"text",name:"name",id:"name",className:m.a.formControl,placeholder:s})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"email"),r.a.createElement("input",{type:"email",name:"email",id:"email",className:m.a.formControl,placeholder:d})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"message"},"Message"),r.a.createElement("textarea",{name:"message",id:"message",rows:"10",className:m.a.formControl,placeholder:p})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",value:u,className:m.a.submit})))))},f=t(247),E=f.a.div.withConfig({displayName:"MapContact__MapWrapper",componentId:"sc-182m6os-0"})(["box-shadow:var(--lightShadow);transition:var(--mainTransition);&:hover{box-shadow:var(--darkShadow);}"]),h=function(){return r.a.createElement("section",null,r.a.createElement(l.a,{title:"Join us",subtitle:"in studio"}),r.a.createElement(E,null,r.a.createElement("iframe",{title:"change-maps",frameBorder:"0",width:"100%",height:"350px",scrolling:"no",marginHeight:"0",marginWidth:"0",src:"https://maps.google.com/maps?q=Via%20oriani%2022%20Cervia&t=m&z=15&output=embed&iwloc=near","aria-label":"Via oriani 22 Cervia"})))},b=t(278),x=t(252);t.d(a,"getContactImage",function(){return w});a.default=function(e){var a=e.data;return r.a.createElement(i.a,null,r.a.createElement(x.a,{title:"Contact",description:"Contact us to request a quote!"}),r.a.createElement(A.a,{img:a.contactImage.childImageSharp.fluid},r.a.createElement(c.a,{title:"Contact us!"})),r.a.createElement(v,null,r.a.createElement(h,null),r.a.createElement(g,null)),r.a.createElement(b.a,null))};var v=f.a.div.withConfig({displayName:"contact__ContactWrapper",componentId:"sc-14irfxl-0"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));grid-gap:20px;padding:2rem;"]),w="636749818"},249:function(e,a,t){e.exports=t.p+"static/logo-c98ee526eb0887fd225930f62e876823.png"},250:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(227),A=t.n(i),c=t(255),l=[{path:"/",text:"home"},{path:"/portfolio",text:"portfolio"},{path:"/blog",text:"blog"},{path:"/contact",text:"contacts"}],o=t(249),m=t.n(o),s=t(246),d=t.n(s),p=function(){var e=Object(n.useState)(!1),a=e[0],t=e[1];return r.a.createElement("nav",{className:A.a.navbar},r.a.createElement("div",{className:A.a.navCenter},r.a.createElement("div",{className:A.a.navHeader},r.a.createElement(d.a,{fade:!0,to:"/","data-cy":"logo"},r.a.createElement("img",{src:m.a,alt:"logo"})),r.a.createElement("button",{type:"button",className:A.a.logoBtn,onClick:function(){t(!a)},"data-cy":"mobile-button"},r.a.createElement(c.a,{className:A.a.logoIcon}))),r.a.createElement("ul",{className:a?A.a.navLinks+" "+A.a.showNav:""+A.a.navLinks},l.map(function(e,a){return r.a.createElement("li",{key:a},r.a.createElement(d.a,{fade:!0,to:e.path,"data-cy":e.text},e.text))}))))},u=t(228),g=t.n(u),f=function(){return r.a.createElement("footer",{className:g.a.footer},r.a.createElement("div",{className:g.a.links},l.map(function(e,a){return r.a.createElement(d.a,{fade:!0,key:a,to:e.path},e.text)})),r.a.createElement("div",{className:g.a.copyright},"copyright © Jian Sorge ",(new Date).getFullYear()," All rights reserved"))};t(229),a.a=function(e){var a=e.children;return r.a.createElement("main",null,r.a.createElement(p,null),a,r.a.createElement(f,null))}},252:function(e,a,t){"use strict";var n=t(253),r=t(0),i=t.n(r),A=t(258);a.a=function(e){var a=e.title,t=e.description,r=n.data.site.siteMetadata,c=r.siteDesc,l=r.siteTitle,o=r.siteUrl,m=r.author,s=r.image,d=r.twitterUsername;return i.a.createElement(A.Helmet,{htmlAttributes:{lang:"it"},title:a+" | "+l},i.a.createElement("meta",{name:"description",content:t||c}),i.a.createElement("meta",{name:"image",content:s}),i.a.createElement("meta",{name:"author",content:m}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:d}),i.a.createElement("meta",{name:"twitter:title",content:l}),i.a.createElement("meta",{name:"twitter:description",content:t}),i.a.createElement("meta",{name:"twitter:image",content:""+o+s}),i.a.createElement("meta",{property:"og:url",content:o}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:title",content:l}),i.a.createElement("meta",{property:"og:description",content:c}),i.a.createElement("meta",{property:"og:image",content:""+o+s}),i.a.createElement("meta",{property:"og:image:width",content:"400"}),i.a.createElement("meta",{property:"og:image:height",content:"300"}))}},253:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"Jian Sorge",siteDesc:"Jian Sorge's Portfolio using Gatsby+Contentful",author:"Jian Sorge",siteUrl:"https://jiansorge.com",image:"/index-hero.jpg",twitterUsername:""}}}}},254:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(247);a.a=Object(i.a)(function(e){var a=e.title,t=e.subtitle,n=e.className;return r.a.createElement("div",{className:n},r.a.createElement("h4",null,r.a.createElement("span",{className:"title"},a),r.a.createElement("span",null,t)))}).withConfig({displayName:"Title",componentId:"sc-9c95lg-0"})(["text-transform:uppercase;font-size:1.8rem;margin-bottom:2rem;margin-top:2rem;h4{text-align:center;letter-spacing:7px;color:var(--primaryColor);}.title{color:var(--mainBlack);}span{display:block;}@media (min-width:576px){font-size:2.3rem;span{display:inline;margin:0 0.35rem;}}"])},259:function(e,a,t){"use strict";var n=t(260),r=t(0),i=t.n(r),A=t(247),c=t(264),l=t.n(c);a.a=Object(A.a)(function(e){var a=e.img,t=e.className,r=e.children,A=(e.home,n.data.file.childImageSharp.fluid),c=a||A;return i.a.createElement(l.a,{className:t,fluid:c},r)}).withConfig({displayName:"StyledHero",componentId:"mrrdq6-0"})(["min-height:",";background-position:center;background-size:cover;opacity:1!important;display:flex;justify-content:start;align-items:center;"],function(e){return e.home?"calc(100vh - 62px)":"50vh"})},260:function(e){e.exports={data:{file:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIDBAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHLRgrkgf/EABkQAAIDAQAAAAAAAAAAAAAAAAABAhESIv/aAAgBAQABBQLnORikUNH/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwFX/8QAFxAAAwEAAAAAAAAAAAAAAAAAABAhMf/aAAgBAQAGPwKFWP8A/8QAGhABAAMAAwAAAAAAAAAAAAAAAQARIRBBUf/aAAgBAQABPyFaTTKHQlLyHWlfYhFrh//aAAwDAQACAAMAAAAQEx//xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQMBAT8Qia//xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQIBAT8QuIf/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMVFBgf/aAAgBAQABPxByuTVahsQ2dfkBdMRFuRNQuUTrcES3Z4T/2Q==",aspectRatio:1.497584541062802,src:"/static/9cfea6741382add6eaf6a058ebb38a5a/0c160/index-hero.jpg",srcSet:"/static/9cfea6741382add6eaf6a058ebb38a5a/ac6ef/index-hero.jpg 1040w,\n/static/9cfea6741382add6eaf6a058ebb38a5a/5d93e/index-hero.jpg 2080w,\n/static/9cfea6741382add6eaf6a058ebb38a5a/0c160/index-hero.jpg 2480w",srcWebp:"/static/9cfea6741382add6eaf6a058ebb38a5a/0bfaa/index-hero.webp",srcSetWebp:"/static/9cfea6741382add6eaf6a058ebb38a5a/17cca/index-hero.webp 1040w,\n/static/9cfea6741382add6eaf6a058ebb38a5a/93223/index-hero.webp 2080w,\n/static/9cfea6741382add6eaf6a058ebb38a5a/0bfaa/index-hero.webp 2480w",sizes:"(max-width: 2480px) 100vw, 2480px"}}}}}},261:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(230),A=t.n(i);a.a=function(e){var a=e.title,t=e.info,n=e.children;return r.a.createElement("div",{className:A.a.banner},r.a.createElement("p",null,t),r.a.createElement("h1",null,a),n)}},278:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(247).a.section.withConfig({displayName:"ProjectWithUs__ProjectWrapper",componentId:"sc-1esqgs5-0"})(["background:var(--primaryColor);color:var(--mainWhite);padding:2rem;display:flex;flex-direction:column;align-items:center;justify-content:space-around;text-align:center;.project_phones{display:flex;flex-direction:column;a{text-decoration:none;color:var(--mainWhite);border:2px solid var(--mainWhite);padding:1rem;text-align:center;border-radius:2rem;width:150px;margin-top:1rem;transition:var(--mainTransition);&:hover{background:var(--mainWhite);color:var(--primaryColor);transform:scale(1.1);}}}@media (min-width:760px){flex-direction:row;}"]);a.a=function(){return r.a.createElement(i,null)}}}]);
//# sourceMappingURL=component---src-pages-contact-js-96e18728c764ca57224b.js.map