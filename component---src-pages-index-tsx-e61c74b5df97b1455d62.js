(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},2858:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3884:function(e){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(l){c=!0,a=l}finally{try{i||null==r.return||r.return()}finally{if(c)throw a}}return o}},e.exports.__esModule=!0,e.exports.default=e.exports},521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},3038:function(e,t,r){var n=r(2858),a=r(3884),o=r(379),i=r(521);e.exports=function(e,t){return n(e)||a(e,t)||o(e,t)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),a=r(6860),o=r(379),i=r(8206);e.exports=function(e){return n(e)||a(e)||o(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},7091:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(o){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],a(r),a(n))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},a=n.exec(e);a;){try{r[a[0]]=decodeURIComponent(a[0])}catch(t){var i=o(a[0]);i!==a[0]&&(r[a[0]]=i)}a=n.exec(e)}r["%C2"]="�";for(var c=Object.keys(r),l=0;l<c.length;l++){var u=c[l];e=e.replace(new RegExp(u,"g"),r[u])}return e}(e)}}},8616:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),a=Array.isArray(t),o=0;o<n.length;o++){var i=n[o],c=e[i];(a?-1!==t.indexOf(i):t(i,c,e))&&(r[i]=c)}return r}},2203:function(e,t,r){"use strict";var n=r(9713),a=r(3038),o=r(319);function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=r(8936),u=r(7091),s=r(4734),f=r(8616),p=Symbol("encodeFragmentIdentifier");function m(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function d(e,t){return t.encode?t.strict?l(e):encodeURIComponent(e):e}function y(e,t){return t.decode?u(e):e}function g(e){return Array.isArray(e)?e.sort():"object"==typeof e?g(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function x(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function v(e){var t=(e=x(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function b(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function h(e,t){m((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return function(e,r,n){t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var a="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!a&&y(r,e).includes(e.arrayFormatSeparator);r=o?y(r,e):r;var i=a||o?r.split(e.arrayFormatSeparator).map((function(t){return y(t,e)})):null===r?r:y(r,e);n[t]=i};case"bracket-separator":return function(t,r,n){var a=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),a){var o=null===r?[]:r.split(e.arrayFormatSeparator).map((function(t){return y(t,e)}));void 0!==n[t]?n[t]=[].concat(n[t],o):n[t]=o}else n[t]=r?y(r,e):r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var o,c=i(e.split("&"));try{for(c.s();!(o=c.n()).done;){var l=o.value;if(""!==l){var u=s(t.decode?l.replace(/\+/g," "):l,"="),f=a(u,2),p=f[0],d=f[1];d=void 0===d?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?d:y(d,t),r(y(p,t),d,n)}}}catch(w){c.e(w)}finally{c.f()}for(var x=0,v=Object.keys(n);x<v.length;x++){var h=v[x],E=n[h];if("object"==typeof E&&null!==E)for(var k=0,N=Object.keys(E);k<N.length;k++){var j=N[k];E[j]=b(E[j],t)}else n[h]=b(E,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=g(r):e[t]=r,e}),Object.create(null))}t.extract=v,t.parse=h,t.stringify=function(e,t){if(!e)return"";m((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[d(t,e),"[",a,"]"].join("")]:[[d(t,e),"[",d(a,e),"]=",d(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[d(t,e),"[]"].join("")]:[[d(t,e),"[]=",d(n,e)].join("")])}};case"colon-list-separator":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[d(t,e),":list="].join("")]:[[d(t,e),":list=",d(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===e.arrayFormat?"[]=":"=";return function(r){return function(n,a){return void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[d(r,e),t,d(a,e)].join("")]:[[n,d(a,e)].join(e.arrayFormatSeparator)])}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[d(t,e)]:[[d(t,e),"=",d(n,e)].join("")])}}}}(t),a={},i=0,c=Object.keys(e);i<c.length;i++){var l=c[i];r(l)||(a[l]=e[l])}var u=Object.keys(a);return!1!==t.sort&&u.sort(t.sort),u.map((function(r){var a=e[r];return void 0===a?"":null===a?d(r,t):Array.isArray(a)?0===a.length&&"bracket-separator"===t.arrayFormat?d(r,t)+"[]":a.reduce(n(r),[]).join("&"):d(r,t)+"="+d(a,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=s(e,"#"),n=a(r,2),o=n[0],i=n[1];return Object.assign({url:o.split("?")[0]||"",query:h(v(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:y(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign(n({encode:!0,strict:!0},p,!0),r);var a=x(e.url).split("?")[0]||"",o=t.extract(e.url),i=t.parse(o,{sort:!1}),c=Object.assign(i,e.query),l=t.stringify(c,r);l&&(l="?".concat(l));var u=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u="#".concat(r[p]?d(e.fragmentIdentifier,r):e.fragmentIdentifier)),"".concat(a).concat(l).concat(u)},t.pick=function(e,r,a){a=Object.assign(n({parseFragmentIdentifier:!0},p,!1),a);var o=t.parseUrl(e,a),i=o.url,c=o.query,l=o.fragmentIdentifier;return t.stringifyUrl({url:i,query:f(c,r),fragmentIdentifier:l},a)},t.exclude=function(e,r,n){var a=Array.isArray(r)?function(e){return!r.includes(e)}:function(e,t){return!r(e,t)};return t.pick(e,a,n)}},4734:function(e){"use strict";e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},8936:function(e){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},9060:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(7294),a=r(2203);var o=r(5444),i=["active"],c=function(e){var t=e.active,r=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,i);return n.createElement("div",{className:"inline-block duration-100 px-1 py-1  text-center min-w-[135px] "+(t?"bg-blue-200  rounded-2xl":"font-base")},n.createElement(o.rU,Object.assign({},r,{className:"category cursor-pointer hover:font-bold duration-100  "+(t?"font-bold  ":"font-base")})))},l=function(e){var t=e.selectedCategory,r=e.categoryList;return n.createElement(n.Fragment,null,n.createElement("div",{className:"pt-20 pb-10 md:py-10 "},n.createElement("div",{className:"mx-auto container lg:px-[10%]"},n.createElement("div",{className:"flex gap-2 md:flex-wrap "},Object.entries(r).map((function(e){var r=e[0],a=e[1];return n.createElement(c,{key:r,to:"/?category="+r,active:r===t},r,"(",a,")")}))))))},u=r(2906),s=function(e){var t=e.profileImage;return n.createElement(u.G,{image:t,alt:"Profile Image",className:"rounded-full p-4"})},f=function(){var e="Lee Chang Mook",t=(0,n.useState)(""),r=t[0],a=t[1],o=(0,n.useState)(0),i=o[0],c=o[1];return(0,n.useEffect)((function(){var t=setInterval((function(){a(r+e[i]),c(i+1)}),300);return i>e.length&&(c(0),a(""),clearInterval(t)),function(){return clearInterval(t)}})),n.createElement("p",{className:"md:text-sm"},n.createElement("span",{className:"font-pay font-bold"},r,"..",n.createElement("span",{className:"blink font-sans font-normal"},"|")))},p=function(e){var t=e.profileImage;return n.createElement("header",{className:"py-20 md:py-10",style:{backgroundImage:"linear-gradient(60deg, #29323c 0%, #485563 100%)"}},n.createElement("div",{className:"flex justify-between container mx-auto lg:px-[10%]"},n.createElement("div",null,n.createElement(s,{profileImage:t}),n.createElement("div",{className:"mt-10 text-white md:text-sm"},n.createElement("div",null,"Nice to Meet You,"),n.createElement("div",{className:"text-2xl  md:text-xl"},"I'm Junior Frontend Developer"," "),n.createElement(f,null))),n.createElement("ul",{className:"md:text-xs"},[{img:"bi bi-github",name:"GITHUB",herf:"https://github.com/moogieon"},{img:"bi bi-book",name:"VELOG",herf:"https://velog.io/@moogieon",className:"text-[#20c997]"}].map((function(e,t){return n.createElement("div",{className:"px-2 py-1 hover:animate-bounce flex gap-2"},n.createElement("i",{className:"text-lg   md:text-base "+e.className+" "+e.img}),n.createElement("a",{key:t,href:e.herf,className:"font-semibold text-lg md:text-base "+e.className},e.name))})))))},m=function(e){var t=e.title,r=e.date,a=e.categories,i=e.summary,c=e.thumbnail.childImageSharp.gatsbyImageData,l=e.link;return n.createElement(o.rU,{className:"parent flex flex-col rounded-[10px] cursor-pointer transition-shadow shadow-lg hover:shadow-2xl",to:l},n.createElement("div",{className:"h-[200px] w-full rounded-t-[10px] overflow-hidden relative"},n.createElement("div",{className:"child1 w-full h-full absolute inset-0 z-10 transition duration-700 transform opacity-0"}),n.createElement(u.G,{className:"w-full h-full transition duration-700 child2",image:c,alt:"Post Item Image"})),n.createElement("div",{className:"flex-1 flex flex-col p-[15px]"},n.createElement("h1",{className:"line-clamp-2 mb-[3px] whitespace-normal font-700 text-xl"},t),n.createElement("p",{className:"text-sm font-400 opacity-50"},r),n.createElement("div",{className:"flex flex-wrap mx-[-5px] my-[10px]"},a.map((function(e,t){return n.createElement("p",{key:t,className:"my-[2.5px] mx-[5px] py-[3px] px-[5px] rounded-[3px] border bg-black text-sm font-700 text-white "},e)}))),n.createElement("p",{className:"line-clamp-2  opacity-80"},i)))},d=function(e,t){var r=(0,n.useRef)(null),a=(0,n.useRef)(null),o=(0,n.useState)(1),i=o[0],c=o[1],l=(0,n.useMemo)((function(){return t.filter((function(t){var r=t.node.frontmatter.categories;return"All"===e||r.includes(e)}))}),[e]);return(0,n.useEffect)((function(){a.current=new IntersectionObserver((function(e,t){e[0].isIntersecting&&(c((function(e){return e+1})),t.unobserve(e[0].target))}))}),[]),(0,n.useEffect)((function(){return c(1)}),[e]),(0,n.useEffect)((function(){10*i>=l.length||null===r.current||0===r.current.children.length||null===a.current||a.current.observe(r.current.children[r.current.children.length-1])}),[i,e]),{containerRef:r,postList:l.slice(0,10*i)}},y=function(e){var t=e.selectedCategory,r=e.posts,a=d(t,r),o=a.containerRef,i=a.postList;return n.createElement("div",{className:"mx-auto container"},n.createElement("div",{className:"grid grid-cols-[1fr,1fr] gap-[20px] pt-[50px] pb-[100px] md:grid-cols-1 md:pt-[0px] lg:px-[10%]",ref:o},i.map((function(e){var t=e.node,r=t.id,a=t.fields.slug,o=t.frontmatter;return n.createElement(m,Object.assign({},o,{link:a,key:r}))}))))},g=r(2355),x=function(e){var t=e.location.search,r=e.data,o=r.site.siteMetadata,i=o.title,c=o.description,u=o.siteUrl,s=r.allMarkdownRemark.edges,f=r.file,m=f.childImageSharp.gatsbyImageData,d=f.publicURL,x=a.parse(t),v="string"==typeof x.category&&x.category?x.category:"All",b=(0,n.useMemo)((function(){return s.reduce((function(e,t){return t.node.frontmatter.categories.forEach((function(t){void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})}),[]);return n.createElement(g.Z,{title:i,description:c,url:u,image:d},n.createElement(p,{profileImage:m}),n.createElement(l,{selectedCategory:v,categoryList:b}),n.createElement(y,{posts:s,selectedCategory:v}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e61c74b5df97b1455d62.js.map