(window.webpackJsonp=window.webpackJsonp||[]).push([[13,4],{244:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(250),o=r(233),c=r.n(o),s=r(246),u=r.n(s),l=r(266),d=r.n(l),f=(r(273),r(247)),p=r(324),m=f.a.div.withConfig({displayName:"RichTextDisplay__RichTextWrapper",componentId:"t6u22t-0"})(["word-break:break-all;.content-image{display:block;margin:0 auto;}"]),g=function(e){var t=e.json,r={renderNode:{"embedded-asset-block":function(e){return a.a.createElement("div",null,a.a.createElement("img",{className:"content-image",width:"400",src:e.data.target.fields.file["en-US"].url,alt:""}))},"embedded-entry-block":function(e){var t=e.data.target.fields,r=t.title,n=t.image,i=t.text;return a.a.createElement("div",null,a.a.createElement("h1",null,"Related article: ",r["en-US"]),a.a.createElement("img",{width:"400",src:n["en-US"].fields.file["en-US"].url,alt:r}),Object(p.documentToReactComponents)(i["en-US"]))}}};return a.a.createElement(m,null,Object(p.documentToReactComponents)(t,r))},A=r(252),y=r(259);r.d(t,"getPost",function(){return v});var h=f.a.article.withConfig({displayName:"post-template__BlogWrapper",componentId:"sc-1moutn5-0"})([".post-image{margin:0 auto;width:90%;}.post-container{padding:1rem;margin:0 auto;a.btn-primary{font-size:0.8rem;display:block;text-align:center;}.content-container{margin-top:3rem;.content-title{font-size:2.3rem;font-weight:600;text-align:center;word-break:break-all;}.content-published{text-transform:capitalize;}}}@media (min-width:760px){.post-container{padding:4rem;width:80vw;a.btn-primary{font-size:1rem;display:inline;}}}"]),v="516644985";t.default=function(e){var t=e.data;d()().locale("it");var r=t.post,n=r.title,o=r.date,s=r.content.json,l=r.image;return a.a.createElement(i.a,null,a.a.createElement(A.a,{title:n}),a.a.createElement(h,null,a.a.createElement(y.a,{img:l.fluid,className:"post-image"}),a.a.createElement("div",{className:"post-container"},a.a.createElement(u.a,{fade:!0,to:"/blog",className:"btn-primary"},"All the articles"),a.a.createElement("div",{className:"content-container"},a.a.createElement("h1",{className:"content-title"},n),a.a.createElement("h4",{className:"content-published"},"Published: ",d()(o).format("MMMM DD, YYYY")),a.a.createElement("hr",null),a.a.createElement("article",{className:c.a.post},a.a.createElement(g,{json:s}))))))}},249:function(e,t,r){e.exports=r.p+"static/logo-c98ee526eb0887fd225930f62e876823.png"},250:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(227),o=r.n(i),c=r(255),s=[{path:"/",text:"home"},{path:"/portfolio",text:"portfolio"},{path:"/blog",text:"blog"},{path:"/contact",text:"contacts"}],u=r(249),l=r.n(u),d=r(246),f=r.n(d),p=function(){var e=Object(n.useState)(!1),t=e[0],r=e[1];return a.a.createElement("nav",{className:o.a.navbar},a.a.createElement("div",{className:o.a.navCenter},a.a.createElement("div",{className:o.a.navHeader},a.a.createElement(f.a,{fade:!0,to:"/","data-cy":"logo"},a.a.createElement("img",{src:l.a,alt:"logo"})),a.a.createElement("button",{type:"button",className:o.a.logoBtn,onClick:function(){r(!t)},"data-cy":"mobile-button"},a.a.createElement(c.a,{className:o.a.logoIcon}))),a.a.createElement("ul",{className:t?o.a.navLinks+" "+o.a.showNav:""+o.a.navLinks},s.map(function(e,t){return a.a.createElement("li",{key:t},a.a.createElement(f.a,{fade:!0,to:e.path,"data-cy":e.text},e.text))}))))},m=r(228),g=r.n(m),A=function(){return a.a.createElement("footer",{className:g.a.footer},a.a.createElement("div",{className:g.a.links},s.map(function(e,t){return a.a.createElement(f.a,{fade:!0,key:t,to:e.path},e.text)})),a.a.createElement("div",{className:g.a.copyright},"copyright © Jian Sorge ",(new Date).getFullYear()," All rights reserved"))};r(229),t.a=function(e){var t=e.children;return a.a.createElement("main",null,a.a.createElement(p,null),t,a.a.createElement(A,null))}},251:function(e,t,r){"use strict";r(42),r(84),r(85),r(19),r(248),r(63),r(6);var n=r(4);t.__esModule=!0,t.combineArray=t.filteredJoin=t.hashString=t.stringToArray=t.toKebabCase=t.toCamelCase=t.hasImageArray=t.convertProps=t.stripRemainingProps=t.isString=void 0;var a=n(r(25)),i=["resolutions","sizes","fixed","fluid","fadeIn","durationFadeIn","className","critical","crossOrigin","style","backgroundColor","onLoad","onError","onStartLoad","Tag","classId","preserveStackingContext"],o=function(e){return"[object String]"===Object.prototype.toString.call(e)};t.isString=o;t.stripRemainingProps=function(e){var t=(0,a.default)({},e);return i.forEach(function(e){Object.prototype.hasOwnProperty.call(t,e)&&delete t[e]}),t};t.convertProps=function(e){var t=(0,a.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t};t.hasImageArray=function(e){return e.fluid&&Array.isArray(e.fluid)||e.fixed&&Array.isArray(e.fixed)};t.toCamelCase=function(e){return o(e)&&e.toLowerCase().replace(/(?:^\w|-|[A-Z]|\b\w)/g,function(e,t){return 0===t?e.toLowerCase():e.toUpperCase()}).replace(/\s|\W+/g,"")};t.toKebabCase=function(e){return o(e)&&e.replace(/\s|\W+/g,"").replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})};t.stringToArray=function(e,t){return void 0===t&&(t=" "),e instanceof Array?e:!!o(e)&&(e.includes(t)?e.split(t):[e])};t.hashString=function(e){return o(e)&&[].reduce.call(e,function(e,t){return 0|(e=(e<<5)-e+t.charCodeAt(0))},0)};t.filteredJoin=function(e){return e.filter(function(e){return""!==e}).join()};t.combineArray=function(e,t){return e.map(function(e,r){return e||t[r]})}},252:function(e,t,r){"use strict";var n=r(253),a=r(0),i=r.n(a),o=r(258);t.a=function(e){var t=e.title,r=e.description,a=n.data.site.siteMetadata,c=a.siteDesc,s=a.siteTitle,u=a.siteUrl,l=a.author,d=a.image,f=a.twitterUsername;return i.a.createElement(o.Helmet,{htmlAttributes:{lang:"it"},title:t+" | "+s},i.a.createElement("meta",{name:"description",content:r||c}),i.a.createElement("meta",{name:"image",content:d}),i.a.createElement("meta",{name:"author",content:l}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:f}),i.a.createElement("meta",{name:"twitter:title",content:s}),i.a.createElement("meta",{name:"twitter:description",content:r}),i.a.createElement("meta",{name:"twitter:image",content:""+u+d}),i.a.createElement("meta",{property:"og:url",content:u}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:title",content:s}),i.a.createElement("meta",{property:"og:description",content:c}),i.a.createElement("meta",{property:"og:image",content:""+u+d}),i.a.createElement("meta",{property:"og:image:width",content:"400"}),i.a.createElement("meta",{property:"og:image:height",content:"300"}))}},253:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"Jian Sorge",siteDesc:"Jian Sorge's Portfolio using Gatsby+Contentful",author:"Jian Sorge",siteUrl:"https://jiansorge.com",image:"/index-hero.jpg",twitterUsername:""}}}}},256:function(e,t,r){"use strict";r(272),r(248);var n=r(4);t.__esModule=!0,t.imageLoaded=t.imageReferenceCompleted=t.createDummyImageArray=t.initialBgImage=t.imageArrayPropsChanged=t.imagePropsChanged=t.getUrlString=t.getCurrentFromData=t.switchImageSettings=t.activateMultiplePictureRefs=t.activatePictureRef=t.createMultiplePictureRefs=t.createPictureRef=t.hasPictureElement=t.resetImageCache=t.activateCacheForMultipleImages=t.activateCacheForImage=t.allInImageCache=t.inImageCache=void 0;var a=n(r(25)),i=r(251),o=Object.create({}),c=function(e){var t=(0,i.convertProps)(e);if((0,i.hasImageArray)(t))return s(e);var r=t.fluid?t.fluid.src:t.fixed?t.fixed.src:null;return o[r]||!1};t.inImageCache=c;var s=function(e){var t=(0,i.convertProps)(e);return(t.fluid||t.fixed).every(function(e){return t.fluid?c({fluid:e}):c({fixed:e})})};t.allInImageCache=s;var u=function(e){var t=(0,i.convertProps)(e);if((0,i.hasImageArray)(t))return l(e);var r=t.fluid?t.fluid.src:t.fixed?t.fixed.src:null;r&&(o[r]=!0)};t.activateCacheForImage=u;var l=function(e){var t=(0,i.convertProps)(e);(t.fluid||t.fixed).forEach(function(e){t.fluid?u({fluid:e}):u({fixed:e})})};t.activateCacheForMultipleImages=l;t.resetImageCache=function(){for(var e in o)delete o[e]};var d=function(){return"undefined"!=typeof HTMLPictureElement||"undefined"==typeof window};t.hasPictureElement=d;var f=function(e,t){var r=(0,i.convertProps)(e);if("undefined"!=typeof window&&(void 0!==r.fluid||void 0!==r.fixed)){if((0,i.hasImageArray)(r))return p(e,t);var n=new Image;return n.onload=function(){return t()},n.complete||"function"!=typeof r.onLoad||n.addEventListener("load",r.onLoad),"function"==typeof r.onError&&n.addEventListener("error",r.onError),r.crossOrigin&&(n.crossOrigin=r.crossOrigin),r.critical||r.isVisible?m(n,r):n}return null};t.createPictureRef=f;var p=function(e,t){var r=(0,i.convertProps)(e);return(r.fluid||r.fixed).map(function(e){return r.fluid?f((0,a.default)({},r,{fluid:e}),t):f((0,a.default)({},r,{fixed:e}),t)})};t.createMultiplePictureRefs=p;var m=function(e,t){var r=(0,i.convertProps)(t);if("undefined"!=typeof window&&(void 0!==r.fluid||void 0!==r.fixed)){if((0,i.hasImageArray)(r))return g(e,t);var n=r.fluid?r.fluid:r.fixed;if(d()){var a=document.createElement("picture");if(n.srcSetWebp){var o=document.createElement("source");o.type="image/webp",o.srcset=n.srcSetWebp,o.sizes=n.sizes,a.appendChild(o)}a.appendChild(e)}return e.srcset=n.srcSet?n.srcSet:"",e.src=n.src?n.src:"",e}return null};t.activatePictureRef=m;var g=function(e,t){var r=(0,i.convertProps)(t);return e.map(function(e,t){return r.fluid?m(e,(0,a.default)({},r,{fluid:r.fluid[t]})):m(e,(0,a.default)({},r,{fixed:r.fixed[t]}))})};t.activateMultiplePictureRefs=g;t.switchImageSettings=function(e){var t,r,n=e.image,a=e.bgImage,o=e.imageRef,c=e.state,s=A({data:o,propName:"currentSrc"}),u=Array.isArray(n),l=Array.isArray(a)?(0,i.filteredJoin)(a):a;if(u){t=A({data:n,propName:"tracedSVG",returnArray:u}),t=(0,i.combineArray)(A({data:n,propName:"base64",returnArray:u}),t),t=(0,i.combineArray)(A({data:n,propName:"CSS_STRING",addUrl:!1,returnArray:u}),t),c.imgLoaded&&c.isVisible&&(t=s?(0,i.combineArray)(A({data:o,propName:"currentSrc",returnArray:u}),t):(0,i.combineArray)(A({data:o,propName:"src",returnArray:u}),t)),t=(0,i.combineArray)(t,a);var d=v(n.length);r=t=(0,i.combineArray)(t,d),t=(0,i.filteredJoin)(t)}else t="",n.tracedSVG&&(t=A({data:n,propName:"tracedSVG"})),n.base64&&!n.tracedSVG&&(t=A({data:n,propName:"base64"})),c.imgLoaded&&c.isVisible&&(t=s);var f=c.imageState%2;!u&&""===t&&c.imgLoaded&&c.isVisible&&o&&!o.currentSrc&&(t=A({data:o,propName:"src"})),t||(t=l);var p={lastImage:l,nextImage:t,afterOpacity:f};return r&&(p.nextImageArray=r),p};var A=function(e){var t=e.data,r=e.propName,n=e.addUrl,a=void 0===n||n,o=e.returnArray,c=void 0!==o&&o;if(!t||!r)return"";var s="tracedSVG"===r;if(Array.isArray(t)){var u=t.map(function(e){return"currentSrc"===r||"src"===r?b(e)&&e[r]||"":"CSS_STRING"===r&&(0,i.isString)(e)?e:e[r]||""});return y({imageString:u,tracedSVG:s,addUrl:a,returnArray:c})}return("currentSrc"===r||"src"===r)&&r in t?y({imageString:b(t)&&t[r]||""}):r in t?y({imageString:t[r],tracedSVG:s,addUrl:a}):""};t.getCurrentFromData=A;var y=function(e){var t=e.imageString,r=e.tracedSVG,n=void 0!==r&&r,a=e.addUrl,o=void 0===a||a,c=e.returnArray,s=void 0!==c&&c,u=e.hasImageUrls,l=void 0!==u&&u;if(Array.isArray(t)){var d=t.map(function(e){var t=-1!==e.indexOf("base64"),r=l||"http"===e.substr(0,4),a=e&&n?'"'+e+'"':e&&!t&&!n&&r?"'"+e+"'":e;return o&&e?"url("+a+")":a});return s?d:(0,i.filteredJoin)(d)}var f=-1!==t.indexOf("base64"),p=l||"http"===t.substr(0,4),m=t&&n?'"'+t+'"':t&&!f&&!n&&p?"'"+t+"'":t;return t?o?"url("+m+")":m:""};t.getUrlString=y;t.imagePropsChanged=function(e,t){return e.fluid&&!t.fluid||e.fixed&&!t.fixed||h(e,t)||e.fluid&&t.fluid&&e.fluid.src!==t.fluid.src||e.fixed&&t.fixed&&e.fixed.src!==t.fixed.src};var h=function(e,t){var r=Array.isArray(e.fluid),n=Array.isArray(t.fluid),a=Array.isArray(e.fixed),i=Array.isArray(t.fixed);return!!(r&&!n||a&&!i||!r&&n||!a&&i)||(r&&n?e.fluid.length!==t.fluid.length||e.fluid.every(function(e,r){return e.src!==t.fluid[r].src}):a&&i?e.fixed.length!==t.fixed.length||e.fixed.every(function(e,r){return e.src!==t.fixed[r].src}):void 0)};t.imageArrayPropsChanged=h;t.initialBgImage=function(e,t){void 0===t&&(t=!0);var r=(0,i.convertProps)(e),n=r.fluid||r.fixed;if(!n)return"";var a,o=(0,i.hasImageArray)(r);if(o){if(a=A({data:n,propName:"tracedSVG",returnArray:o}),a=(0,i.combineArray)(A({data:n,propName:"base64",returnArray:o}),a),a=(0,i.combineArray)(A({data:n,propName:"CSS_STRING",addUrl:!1,returnArray:o}),a),t){var c=v(n.length);a=(0,i.combineArray)(a,c)}}else a="",n.tracedSVG&&(a=A({data:n,propName:"tracedSVG"})),n.base64&&!n.tracedSVG&&(a=A({data:n,propName:"base64"}));return a};var v=function(e){var t=y({imageString:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="});return Array(e).fill(t)};t.createDummyImageArray=v;t.imageReferenceCompleted=function(e){return!!e&&(Array.isArray(e)?e.every(function(e){return b(e)}):b(e))};var b=function(e){return!!e&&(e.complete&&0!==e.naturalWidth&&0!==e.naturalHeight)};t.imageLoaded=b},259:function(e,t,r){"use strict";var n=r(260),a=r(0),i=r.n(a),o=r(247),c=r(264),s=r.n(c);t.a=Object(o.a)(function(e){var t=e.img,r=e.className,a=e.children,o=(e.home,n.data.file.childImageSharp.fluid),c=t||o;return i.a.createElement(s.a,{className:r,fluid:c},a)}).withConfig({displayName:"StyledHero",componentId:"mrrdq6-0"})(["min-height:",";background-position:center;background-size:cover;opacity:1!important;display:flex;justify-content:start;align-items:center;"],function(e){return e.home?"calc(100vh - 62px)":"50vh"})},260:function(e){e.exports={data:{file:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIDBAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHLRgrkgf/EABkQAAIDAQAAAAAAAAAAAAAAAAABAhESIv/aAAgBAQABBQLnORikUNH/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwFX/8QAFxAAAwEAAAAAAAAAAAAAAAAAABAhMf/aAAgBAQAGPwKFWP8A/8QAGhABAAMAAwAAAAAAAAAAAAAAAQARIRBBUf/aAAgBAQABPyFaTTKHQlLyHWlfYhFrh//aAAwDAQACAAMAAAAQEx//xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQMBAT8Qia//xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQIBAT8QuIf/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMVFBgf/aAAgBAQABPxByuTVahsQ2dfkBdMRFuRNQuUTrcES3Z4T/2Q==",aspectRatio:1.497584541062802,src:"/static/9cfea6741382add6eaf6a058ebb38a5a/0c160/index-hero.jpg",srcSet:"/static/9cfea6741382add6eaf6a058ebb38a5a/ac6ef/index-hero.jpg 1040w,\n/static/9cfea6741382add6eaf6a058ebb38a5a/5d93e/index-hero.jpg 2080w,\n/static/9cfea6741382add6eaf6a058ebb38a5a/0c160/index-hero.jpg 2480w",srcWebp:"/static/9cfea6741382add6eaf6a058ebb38a5a/0bfaa/index-hero.webp",srcSetWebp:"/static/9cfea6741382add6eaf6a058ebb38a5a/17cca/index-hero.webp 1040w,\n/static/9cfea6741382add6eaf6a058ebb38a5a/93223/index-hero.webp 2080w,\n/static/9cfea6741382add6eaf6a058ebb38a5a/0bfaa/index-hero.webp 2480w",sizes:"(max-width: 2480px) 100vw, 2480px"}}}}}},264:function(e,t,r){"use strict";r(63),r(6),r(19),r(248);var n=r(4);t.__esModule=!0,t.default=void 0;var a=n(r(49)),i=n(r(25)),o=n(r(50)),c=n(r(32)),s=n(r(52)),u=n(r(0)),l=n(r(21)),d=n(r(267)),f=r(251),p=r(256),m=r(268),g=r(269),A=function(e){function t(t){var r;r=e.call(this,t)||this,(0,s.default)((0,o.default)(r),"cleanUpListeners",void 0),(0,s.default)((0,o.default)(r),"intersectionListener",function(){var e=(0,p.inImageCache)(r.props);r.state.isVisible||"function"!=typeof r.props.onStartLoad||r.props.onStartLoad({wasCached:e}),r.imageRef=(0,p.activatePictureRef)(r.imageRef,r.props),r.setState({isVisible:!0,imageState:r.state.imageState+1},function(){r.setState({imgLoaded:e,imgCached:!!r.imageRef.currentSrc,imageState:r.state.imageState+1})})});var n=!0,a=!1,c=t.fadeIn,u=(0,p.inImageCache)(t);!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,a=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,a=!1);var l=!(t.critical&&!c),f=(0,m.fixClassName)(t),g=f[0],A=f[1];return r.state={isVisible:n,imgLoaded:!1,IOSupported:a,fadeIn:c,hasNoScript:l,seenBefore:u,imageState:0,currentClassNames:g,addedClassName:A},r.backgroundStyles=(0,m.presetBackgroundStyles)((0,d.default)(t.className)),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)(r)),r.handleRef=r.handleRef.bind((0,o.default)(r)),r.imageRef=(0,p.createPictureRef)((0,i.default)({},t,{isVisible:n}),r.handleImageLoaded),r.bgImage=(0,p.initialBgImage)(t),r}(0,c.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.backgroundStyles=(0,m.presetBackgroundStyles)((0,d.default)(this.props.className)),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:(0,p.inImageCache)(this.props)}),this.props.critical&&(0,p.imageReferenceCompleted)(this.imageRef)&&this.handleImageLoaded();var e=(0,m.fixClassName)(this.props),t=e[0],r=e[1];this.setState({currentClassNames:t,addedClassName:r})},r.componentDidUpdate=function(e){var t=this;if((0,p.imagePropsChanged)(this.props,e)){var r=(0,p.inImageCache)(this.props),n=(0,m.fixClassName)(this.props),a=n[0],o=n[1];this.setState({isVisible:r||this.props.critical,imgLoaded:r,currentClassNames:a,addedClassName:o},function(){t.bgImage=(0,p.getCurrentFromData)({data:t.imageRef,propName:"currentSrc",returnArray:!0})||(0,p.getCurrentFromData)({data:t.imageRef,propName:"src",returnArray:!0}),t.imageRef=(0,p.createPictureRef)((0,i.default)({},t.props,{isVisible:t.state.isVisible}),t.handleImageLoaded)})}},r.componentWillUnmount=function(){this.imageRef&&(Array.isArray(this.imageRef)?this.imageRef.forEach(function(e){return e.onload=null}):this.imageRef.onload=null),this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){this.state.IOSupported&&e&&(this.cleanUpListeners=(0,g.listenToIntersections)(e,this.intersectionListener))},r.handleImageLoaded=function(){(0,p.activateCacheForImage)(this.props),this.setState({imgLoaded:!0,imageState:this.state.imageState+1}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e,t,r=(0,m.fixOpacity)((0,f.convertProps)(this.props),this.props.preserveStackingContext),n=r.className,o=r.style,c=void 0===o?{}:o,s=r.fluid,l=r.fixed,d=r.backgroundColor,g=r.durationFadeIn,A=r.Tag,y=r.children,h=r.classId,v=void 0===h?n?"":Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,7)+"_depr":h,b=(0,a.default)(r,["className","style","fluid","fixed","backgroundColor","durationFadeIn","Tag","children","classId"]),E=(0,f.stripRemainingProps)(b),S="boolean"==typeof d?"lightgray":void 0!==d?d:"",I=!0===this.state.fadeIn&&!this.state.imgCached||"soft"===this.props.fadeIn,N=this.state.imgLoaded?g+"ms":"0.25s",C=(0,i.default)({position:"relative"},c);if(!this.props.preserveStackingContext&&(C.opacity=.99),s)e=s,t=Array.isArray(s)?s[0]:s;else{if(!l)return null;e=l,C.width=e.width,C.height=e.height,C.display="inline-block","inherit"===c.display&&delete C.display,t=Array.isArray(l)?l[0]:l}var x=(0,p.switchImageSettings)({image:e,bgImage:this.bgImage,imageRef:this.imageRef,state:this.state});this.bgImage=x.nextImageArray||x.nextImage||this.bgImage;var T=(0,m.createPseudoStyles)((0,i.default)({classId:v,className:this.state.currentClassNames,transitionDelay:N,bgColor:S,backgroundStyles:this.backgroundStyles,style:c,fadeIn:I},x)),O=(0,m.createNoScriptStyles)({image:e,bgColor:S,classId:v,className:this.state.currentClassNames,backgroundStyles:this.backgroundStyles,style:c}),w=""+(s&&"fluid")+(l&&"fixed")+"-"+JSON.stringify(t.srcSet);return u.default.createElement(A,(0,i.default)({className:""+(this.state.currentClassNames||"")+(v&&" gatsby-background-image-"+v)+" gatsby-image-wrapper",style:(0,i.default)({},C,this.backgroundStyles),ref:this.handleRef,key:w},E),u.default.createElement("style",{dangerouslySetInnerHTML:{__html:T}}),this.state.hasNoScript&&u.default.createElement("noscript",null,u.default.createElement("style",{dangerouslySetInnerHTML:{__html:O}})),y)},t}(u.default.Component);A.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,Tag:"div",preserveStackingContext:!1};var y=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),h=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string});A.propTypes={resolutions:l.default.oneOfType([y,l.default.arrayOf(l.default.oneOfType([y,l.default.string]))]),sizes:l.default.oneOfType([h,l.default.arrayOf(l.default.oneOfType([h,l.default.string]))]),fixed:l.default.oneOfType([y,l.default.arrayOf(l.default.oneOfType([y,l.default.string]))]),fluid:l.default.oneOfType([h,l.default.arrayOf(l.default.oneOfType([h,l.default.string]))]),fadeIn:l.default.oneOfType([l.default.string,l.default.bool]),durationFadeIn:l.default.number,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.oneOfType([l.default.object,l.default.array]),backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,classId:l.default.string,preserveStackingContext:l.default.bool};var v=A;t.default=v},267:function(e,t,r){"use strict";r(18),r(26),r(16),r(17),r(150),r(63),r(6),r(82),t.__esModule=!0,t.default=t.getBackgroundStylesForSingleClass=t.getStyleRules=t.rulesForCssText=t.getStyle=void 0;var n=r(251),a=function(e){for(var t="undefined"!=typeof window?window.document.styleSheets:[],r=0;r<t.length;r++){var n=void 0;try{n=void 0!==t[r].rules?t[r].rules:void 0!==t[r].cssRules?t[r].cssRules:""}catch(o){}if(n){var a=Array.prototype.slice.call(n).reduce(function(t,r){return r.selectorText===e&&""===t?r:t},"");if(a){var i=a.cssText?a.cssText:a.style.cssText;return-1===i.indexOf(a.selectorText)?a.selectorText+"{"+i+"}":i}}}};t.getStyle=a;var i=function(e){if("undefined"!=typeof document&&e){var t=document.implementation.createHTMLDocument(""),r=document.createElement("style");return r.textContent=e,t.body.appendChild(r),r.sheet.cssRules}return{}};t.rulesForCssText=i;var o=function(e){var t={};if(e.length>0&&void 0!==e[0].style)switch(e[0].style.constructor.name||e[0].style.constructor.toString()){case"CSS2Properties":case"[object MSStyleCSSProperties]":Object.values(e[0].style).forEach(function(r){t[(0,n.toCamelCase)(r)]=e[0].style[r]});break;case"CSSStyleDeclaration":t=e[0].style;break;default:console.error("Unknown style object prototype")}return t};t.getStyleRules=o;var c=function(e){if((0,n.isString)(e)){var t=a("."+e),r=i(t);if(r.length>0&&void 0!==r[0].style)return Object.keys(o(r)).filter(function(e){return 0===e.indexOf("background")&&""!==r[0].style[e]}).reduce(function(e,t){return e[t]=r[0].style[t],e},{})}return{}};t.getBackgroundStylesForSingleClass=c;var s=function(e){if("undefined"!=typeof window){var t=(0,n.stringToArray)(e);if(t instanceof Array){var r=[];return t.forEach(function(e){return r.push(c(e))}),Object.assign.apply(Object,r)}return c(e)}return{}};t.default=s},268:function(e,t,r){"use strict";r(16),r(17),r(6),r(26),r(248);var n=r(4);t.__esModule=!0,t.createNoScriptStyles=t.createPseudoStyles=t.presetBackgroundStyles=t.fixOpacity=t.setTransitionStyles=t.kebabifyBackgroundStyles=t.fixClassName=t.createPseudoElement=t.resetComponentClassCache=t.activateCacheForComponentClass=t.inComponentClassCache=void 0;var a=n(r(25)),i=n(r(49)),o=r(251),c=r(256),s=Object.create({}),u=function(e){return s[e]||!1};t.inComponentClassCache=u;var l=function(e){e&&(s[e]=!0)};t.activateCacheForComponentClass=l;t.resetComponentClassCache=function(){for(var e in s)delete s[e]};var d=function(e,t,r){void 0===t&&(t=""),void 0===r&&(r=":before");var n=(0,o.stringToArray)(e),a="";return n instanceof Array&&n.length>0&&""!==n[0]&&(a="."+n.join(".")+r),""!==t&&(a+=(a&&",\n")+".gatsby-background-image-"+t+r),a};t.createPseudoElement=d;t.fixClassName=function(e){var t=e.className,r=e.addedClassName,n=void 0===r?"":r,a=(0,i.default)(e,["className","addedClassName"]),c=(0,o.convertProps)(a),s=u(t),d=c.fluid?Array.isArray(c.fluid)?c.fluid[0]:c.fluid:Array.isArray(c.fixed)?c.fixed[0]:c.fixed,f=n||Math.round(42*Math.random()),p=" gbi-"+(0,o.hashString)(d&&d.srcSet||t)+"-"+f,m=s?p:"",g=(""+(t||"")+(m||"")).trim();return!s&&l(t),[g,m]};var f=function(e){return(0,o.isString)(e)?e:e instanceof Object?Object.keys(e).filter(function(t){return 0===t.indexOf("background")&&""!==e[t]}).reduce(function(t,r){return""+t+(0,o.toKebabCase)(r)+": "+e[r]+";\n"},""):""};t.kebabifyBackgroundStyles=f;var p=function(e,t){return void 0===e&&(e="0.25s"),void 0===t&&(t=!0),t?"transition: opacity 0.5s ease "+e+";":"transition: none;"};t.setTransitionStyles=p;t.fixOpacity=function(e){var t=(0,a.default)({},e);if(!t.preserveStackingContext)try{t.style&&t.style.opacity&&(isNaN(t.style.opacity)||t.style.opacity>.99)&&(t.style.opacity=.99)}catch(r){}return t};t.presetBackgroundStyles=function(e){return(0,a.default)({},{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},e)};t.createPseudoStyles=function(e){var t=e.classId,r=e.className,n=e.transitionDelay,i=e.lastImage,o=e.nextImage,c=e.afterOpacity,s=e.bgColor,u=e.fadeIn,l=e.backgroundStyles,m=e.style,g=d(r,t),A=d(r,t,":after");return"\n          "+g+",\n          "+A+" {\n            content: '';\n            display: block;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            "+(s&&"background-color: "+s+";")+"\n            "+p(n,u)+"\n            "+f((0,a.default)({},l,m))+"\n          }\n          "+g+" {\n            z-index: -100;\n            "+(c&&o?"background-image: "+o+";":"")+"\n            "+(!c&&i?"background-image: "+i+";":"")+"\n            opacity: "+c+"; \n          }\n          "+A+" {\n            z-index: -101;\n            "+(!c&&o?"background-image: "+o+";":"")+"\n            "+(c&&i?"background-image: "+i+";":"")+"\n          }\n        "};t.createNoScriptStyles=function(e){var t=e.classId,r=e.className,n=e.image;if(n){var a=Array.isArray(n),i=(0,c.getCurrentFromData)({data:n,propName:"src",addUrl:!1,returnArray:a}),s=(0,c.getUrlString)({imageString:i,hasImageUrls:!0,returnArray:a}),u="";if(a){var l=(0,c.getCurrentFromData)({data:n,propName:"CSS_STRING",addUrl:!1,returnArray:a});u=(0,o.filteredJoin)((0,o.combineArray)(s,l))}return"\n          "+d(r,t)+" {\n            opacity: 1;\n            background-image: "+(u||s)+";\n          }"}return""}},269:function(e,t,r){"use strict";var n;r(16),r(17),r(6),r(83),r(145),t.__esModule=!0,t.listenToIntersections=t.getIO=t.callbackIO=void 0;var a=new WeakMap,i=function(e){e.forEach(function(e){if(a.has(e.target)){var t=a.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),a.delete(e.target),t())}})};t.callbackIO=i;var o=function(){return void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(i,{rootMargin:"200px"})),n};t.getIO=o;t.listenToIntersections=function(e,t){var r=o();return r?(r.observe(e),a.set(e,t),function(){r.unobserve(e),a.delete(e)}):function(){}}},324:function(e,t,r){"use strict";(function(e){r(148),r(43),r(282),r(150),r(84),r(85),r(33),r(325),r(64),r(16),r(17),r(26),r(19),r(51),r(20),r(42),r(63),r(108),r(6),r(18),r(44),Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(0),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n,o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var s,u,l=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function n(e,t){return e(t={exports:{}},t.exports),t.exports}var a,i,o,s="object",u=function(e){return e&&e.Math==Math&&e},l=u(typeof globalThis==s&&globalThis)||u(typeof window==s&&window)||u(typeof self==s&&self)||u(typeof r==s&&r)||Function("return this")(),d=function(e){try{return!!e()}catch(t){return!0}},f=!d(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),p={}.propertyIsEnumerable,m=Object.getOwnPropertyDescriptor,g={f:m&&!p.call({1:2},1)?function(e){var t=m(this,e);return!!t&&t.enumerable}:p},A=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},y={}.toString,h="".split,v=d(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==function(e){return y.call(e).slice(8,-1)}(e)?h.call(e,""):Object(e)}:Object,b=function(e){return v(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},E=function(e){return"object"==typeof e?null!==e:"function"==typeof e},S=function(e,t){if(!E(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!E(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!E(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!E(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")},I={}.hasOwnProperty,N=function(e,t){return I.call(e,t)},C=l.document,x=E(C)&&E(C.createElement),T=function(e){return x?C.createElement(e):{}},O=!f&&!d(function(){return 7!=Object.defineProperty(T("div"),"a",{get:function(){return 7}}).a}),w=Object.getOwnPropertyDescriptor,R={f:f?w:function(e,t){if(e=b(e),t=S(t,!0),O)try{return w(e,t)}catch(r){}if(N(e,t))return A(!g.f.call(e,t),e[t])}},L=function(e){if(!E(e))throw TypeError(String(e)+" is not an object");return e},k=Object.defineProperty,_={f:f?k:function(e,t,r){if(L(e),t=S(t,!0),L(r),O)try{return k(e,t,r)}catch(n){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},P=f?function(e,t,r){return _.f(e,t,A(1,r))}:function(e,t,r){return e[t]=r,e},D=function(e,t){try{P(l,e,t)}catch(r){l[e]=t}return t},j=n(function(e){var t=l["__core-js_shared__"]||D("__core-js_shared__",{});(e.exports=function(e,r){return t[e]||(t[e]=void 0!==r?r:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),M=j("native-function-to-string",Function.toString),B=l.WeakMap,G="function"==typeof B&&/native code/.test(M.call(B)),H=0,U=Math.random(),Q=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++H+U).toString(36)},Y=j("keys"),F=function(e){return Y[e]||(Y[e]=Q(e))},V={},z=l.WeakMap;if(G){var K=new z,W=K.get,J=K.has,q=K.set;a=function(e,t){return q.call(K,e,t),t},i=function(e){return W.call(K,e)||{}},o=function(e){return J.call(K,e)}}else{var Z=F("state");V[Z]=!0,a=function(e,t){return P(e,Z,t),t},i=function(e){return N(e,Z)?e[Z]:{}},o=function(e){return N(e,Z)}}var X={set:a,get:i,has:o,enforce:function(e){return o(e)?i(e):a(e,{})},getterFor:function(e){return function(t){var r;if(!E(t)||(r=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}},$=n(function(e){var t=X.get,r=X.enforce,n=String(M).split("toString");j("inspectSource",function(e){return M.call(e)}),(e.exports=function(e,t,a,i){var o=!!i&&!!i.unsafe,c=!!i&&!!i.enumerable,s=!!i&&!!i.noTargetGet;"function"==typeof a&&("string"!=typeof t||N(a,"name")||P(a,"name",t),r(a).source=n.join("string"==typeof t?t:"")),e!==l?(o?!s&&e[t]&&(c=!0):delete e[t],c?e[t]=a:P(e,t,a)):c?e[t]=a:D(t,a)})(Function.prototype,"toString",function(){return"function"==typeof this&&t(this).source||M.call(this)})}),ee=l,te=function(e){return"function"==typeof e?e:void 0},re=function(e,t){return arguments.length<2?te(ee[e])||te(l[e]):ee[e]&&ee[e][t]||l[e]&&l[e][t]},ne=Math.ceil,ae=Math.floor,ie=function(e){return isNaN(e=+e)?0:(e>0?ae:ne)(e)},oe=Math.min,ce=Math.max,se=Math.min,ue=function(e){return function(t,r,n){var a,i,o=b(t),c=(a=o.length)>0?oe(ie(a),9007199254740991):0,s=function(e,t){var r=ie(e);return r<0?ce(r+t,0):se(r,t)}(n,c);if(e&&r!=r){for(;c>s;)if((i=o[s++])!=i)return!0}else for(;c>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},le={includes:ue(!0),indexOf:ue(!1)},de=le.indexOf,fe=function(e,t){var r,n=b(e),a=0,i=[];for(r in n)!N(V,r)&&N(n,r)&&i.push(r);for(;t.length>a;)N(n,r=t[a++])&&(~de(i,r)||i.push(r));return i},pe=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],me=pe.concat("length","prototype"),ge={f:Object.getOwnPropertyNames||function(e){return fe(e,me)}},Ae={f:Object.getOwnPropertySymbols},ye=re("Reflect","ownKeys")||function(e){var t=ge.f(L(e)),r=Ae.f;return r?t.concat(r(e)):t},he=function(e,t){for(var r=ye(t),n=_.f,a=R.f,i=0;i<r.length;i++){var o=r[i];N(e,o)||n(e,o,a(t,o))}},ve=/#|\.prototype\./,be=function(e,t){var r=Se[Ee(e)];return r==Ne||r!=Ie&&("function"==typeof t?d(t):!!t)},Ee=be.normalize=function(e){return String(e).replace(ve,".").toLowerCase()},Se=be.data={},Ie=be.NATIVE="N",Ne=be.POLYFILL="P",Ce=be,xe=R.f,Te=function(e,t){var r,n,a,i,o,c=e.target,s=e.global,u=e.stat;if(r=s?l:u?l[c]||D(c,{}):(l[c]||{}).prototype)for(n in t){if(i=t[n],a=e.noTargetGet?(o=xe(r,n))&&o.value:r[n],!Ce(s?n:c+(u?".":"#")+n,e.forced)&&void 0!==a){if(typeof i==typeof a)continue;he(i,a)}(e.sham||a&&a.sham)&&P(i,"sham",!0),$(r,n,i,e)}},Oe=Object.keys||function(e){return fe(e,pe)},we=g.f,Re=function(e){return function(t){for(var r,n=b(t),a=Oe(n),i=a.length,o=0,c=[];i>o;)r=a[o++],f&&!we.call(n,r)||c.push(e?[r,n[r]]:n[r]);return c}},Le={entries:Re(!0),values:Re(!1)}.values;Te({target:"Object",stat:!0},{values:function(e){return Le(e)}}),ee.Object.values;var ke=!!Object.getOwnPropertySymbols&&!d(function(){return!String(Symbol())}),_e=l.Symbol,Pe=j("wks"),De=f?Object.defineProperties:function(e,t){L(e);for(var r,n=Oe(t),a=n.length,i=0;a>i;)_.f(e,r=n[i++],t[r]);return e},je=re("document","documentElement"),Me=F("IE_PROTO"),Be=function(){},Ge=function(){var e,t=T("iframe"),r=pe.length;for(t.style.display="none",je.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),Ge=e.F;r--;)delete Ge.prototype[pe[r]];return Ge()},He=Object.create||function(e,t){var r;return null!==e?(Be.prototype=L(e),r=new Be,Be.prototype=null,r[Me]=e):r=Ge(),void 0===t?r:De(r,t)};V[Me]=!0;var Ue,Qe=Pe[Ue="unscopables"]||(Pe[Ue]=ke&&_e[Ue]||(ke?_e:Q)("Symbol."+Ue)),Ye=Array.prototype;null==Ye[Qe]&&P(Ye,Qe,He(null));var Fe,Ve=le.includes;Te({target:"Array",proto:!0},{includes:function(e){return Ve(this,e,arguments.length>1?arguments[1]:void 0)}}),Fe="includes",Ye[Qe][Fe]=!0;var ze,Ke,We,Je=function(e,t,r){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(r){case 0:return function(){return e.call(t)};case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,a){return e.call(t,r,n,a)}}return function(){return e.apply(t,arguments)}},qe=Function.call;ze="includes",Je(qe,l["Array"].prototype[ze],Ke),function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(We||(We={}));var Ze,Xe=We;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(Ze||(Ze={}));var $e,et=Ze,tt=[Xe.PARAGRAPH,Xe.HEADING_1,Xe.HEADING_2,Xe.HEADING_3,Xe.HEADING_4,Xe.HEADING_5,Xe.HEADING_6,Xe.OL_LIST,Xe.UL_LIST,Xe.HR,Xe.QUOTE,Xe.EMBEDDED_ENTRY,Xe.EMBEDDED_ASSET],rt=[Xe.HR,Xe.EMBEDDED_ENTRY,Xe.EMBEDDED_ASSET],nt=(($e={})[Xe.OL_LIST]=[Xe.LIST_ITEM],$e[Xe.UL_LIST]=[Xe.LIST_ITEM],$e[Xe.LIST_ITEM]=tt.slice(),$e[Xe.QUOTE]=[Xe.PARAGRAPH],$e),at=Object.freeze({isInline:function(e){return Object.values(et).includes(e.nodeType)},isBlock:function(e){return Object.values(Xe).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=Xe,t.CONTAINERS=nt,t.INLINES=et,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=tt,t.VOID_BLOCKS=rt,t.helpers=at}(s={exports:{}},s.exports),s.exports);(u=l)&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")&&u.default;var d,f,p=l.BLOCKS,m=(l.CONTAINERS,l.INLINES),g=l.MARKS,A=(l.TOP_LEVEL_BLOCKS,l.VOID_BLOCKS,l.helpers);function y(e,t){return e.map(function(e,r){return n=h(e,t),i=r,a.isValidElement(n)&&null===n.key?a.cloneElement(n,{key:i}):n;var n,i})}function h(e,t){var r=t.renderNode,n=t.renderMark,a=t.renderText;if(A.isText(e))return e.marks.reduce(function(e,t){return n[t.type]?n[t.type](e):e},a?a(e.value):e.value);var o=y(e.content,t);return e.nodeType&&r[e.nodeType]?r[e.nodeType](e,o):i.createElement(i.Fragment,null,o)}var v=((d={})[p.DOCUMENT]=function(e,t){return t},d[p.PARAGRAPH]=function(e,t){return i.createElement("p",null,t)},d[p.HEADING_1]=function(e,t){return i.createElement("h1",null,t)},d[p.HEADING_2]=function(e,t){return i.createElement("h2",null,t)},d[p.HEADING_3]=function(e,t){return i.createElement("h3",null,t)},d[p.HEADING_4]=function(e,t){return i.createElement("h4",null,t)},d[p.HEADING_5]=function(e,t){return i.createElement("h5",null,t)},d[p.HEADING_6]=function(e,t){return i.createElement("h6",null,t)},d[p.EMBEDDED_ENTRY]=function(e,t){return i.createElement("div",null,t)},d[p.UL_LIST]=function(e,t){return i.createElement("ul",null,t)},d[p.OL_LIST]=function(e,t){return i.createElement("ol",null,t)},d[p.LIST_ITEM]=function(e,t){return i.createElement("li",null,t)},d[p.QUOTE]=function(e,t){return i.createElement("blockquote",null,t)},d[p.HR]=function(){return i.createElement("hr",null)},d[m.ASSET_HYPERLINK]=function(e){return E(m.ASSET_HYPERLINK,e)},d[m.ENTRY_HYPERLINK]=function(e){return E(m.ENTRY_HYPERLINK,e)},d[m.EMBEDDED_ENTRY]=function(e){return E(m.EMBEDDED_ENTRY,e)},d[m.HYPERLINK]=function(e,t){return i.createElement("a",{href:e.data.uri},t)},d),b=((f={})[g.BOLD]=function(e){return i.createElement("b",null,e)},f[g.ITALIC]=function(e){return i.createElement("i",null,e)},f[g.UNDERLINE]=function(e){return i.createElement("u",null,e)},f[g.CODE]=function(e){return i.createElement("code",null,e)},f);function E(e,t){return i.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?h(e,{renderNode:o({},v,t.renderNode),renderMark:o({},b,t.renderMark),renderText:t.renderText}):null}}).call(this,r(151))},325:function(e,t,r){var n=r(1);n(n.S+n.F*!r(9),"Object",{defineProperties:r(158)})}}]);
//# sourceMappingURL=component---src-templates-post-template-js-b47aaa28396530d63977.js.map