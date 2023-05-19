"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5632],{95632:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(35996).Z,a=n(78644).Z,r=n(29536).Z,o=n(60872).Z,l=r(n(86006)),d=a(n(4553)),s=n(69321),u=n(60375),c=n(63927);n(87989);var f=a(n(16778));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,n,a,r,o,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let d="decode"in e?e.decode():Promise.resolve();d.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&o(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,r=!1;a.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}})}function v(e){let[t,n]=l.version.split("."),i=parseInt(t,10),a=parseInt(n,10);return i>18||18===i&&a>=3?{fetchPriority:e}:{fetchpriority:e}}let y=l.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:a,widthInt:r,qualityInt:d,className:s,imgStyle:u,blurStyle:c,isLazy:f,fetchPriority:p,fill:g,placeholder:m,loading:y,srcString:b,config:w,unoptimized:_,loader:S,onLoadRef:C,onLoadingCompleteRef:E,setBlurComplete:x,setShowAltText:j,onLoad:O,onError:I}=e,M=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return y=f?"lazy":y,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},M,v(p),{loading:y,width:r,height:a,decoding:"async","data-nimg":g?"fill":"1",className:s,style:i({},u,c)},n,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(I&&(e.src=e.src),e.complete&&h(e,b,m,C,E,x,_))},[b,m,C,E,x,I,_,t]),onLoad:e=>{let t=e.currentTarget;h(t,b,m,C,E,x,_)},onError:e=>{j(!0),"blur"===m&&x(!0),I&&I(e)}})))}),b=l.forwardRef((e,t)=>{let n,a;var r,{src:h,sizes:b,unoptimized:w=!1,priority:_=!1,loading:S,className:C,quality:E,width:x,height:j,fill:O,style:I,onLoad:M,onLoadingComplete:P,placeholder:k="empty",blurDataURL:z,fetchPriority:A,layout:R,objectFit:D,objectPosition:L,lazyBoundary:U,lazyRoot:Z}=e,F=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let N=l.useContext(c.ImageConfigContext),T=l.useMemo(()=>{let e=p||N||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:n})},[N]),B=F,W=B.loader||f.default;delete B.loader;let V="__next_img_default"in W;if(V){if("custom"===T.loader)throw Error('Image with src "'.concat(h,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=W;W=t=>{let{config:n}=t,i=o(t,["config"]);return e(i)}}if(R){"fill"===R&&(O=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(I=i({},I,e));let t={responsive:"100vw",fill:"100vw"}[R];t&&!b&&(b=t)}let q="",G=m(x),H=m(j);if("object"==typeof(r=h)&&(g(r)||void 0!==r.src)){let e=g(h)?h.default:h;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,a=e.blurHeight,z=z||e.blurDataURL,q=e.src,!O){if(G||H){if(G&&!H){let t=G/e.width;H=Math.round(e.height*t)}else if(!G&&H){let t=H/e.height;G=Math.round(e.width*t)}}else G=e.width,H=e.height}}let $=!_&&("lazy"===S||void 0===S);(!(h="string"==typeof h?h:q)||h.startsWith("data:")||h.startsWith("blob:"))&&(w=!0,$=!1),T.unoptimized&&(w=!0),V&&h.endsWith(".svg")&&!T.dangerouslyAllowSVG&&(w=!0),_&&(A="high");let[J,Y]=l.useState(!1),[K,Q]=l.useState(!1),X=m(E),ee=Object.assign(O?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:D,objectPosition:L}:{},K?{}:{color:"transparent"},I),et="blur"===k&&z&&!J?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(s.getImageBlurSvg({widthInt:G,heightInt:H,blurWidth:n,blurHeight:a,blurDataURL:z,objectFit:ee.objectFit}),'")')}:{},en=function(e){let{config:t,src:n,unoptimized:i,width:a,quality:r,sizes:o,loader:l}=e;if(i)return{src:n,srcSet:void 0,sizes:void 0};let{widths:d,kind:s}=function(e,t,n){let{deviceSizes:i,allSizes:a}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(n);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let r=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:r,kind:"x"}}(t,a,o),u=d.length-1;return{sizes:o||"w"!==s?o:"100vw",srcSet:d.map((e,i)=>"".concat(l({config:t,src:n,quality:r,width:e})," ").concat("w"===s?e:i+1).concat(s)).join(", "),src:l({config:t,src:n,quality:r,width:d[u]})}}({config:T,src:h,unoptimized:w,width:G,quality:X,sizes:b,loader:W}),ei=h,ea=l.useRef(M);l.useEffect(()=>{ea.current=M},[M]);let er=l.useRef(P);l.useEffect(()=>{er.current=P},[P]);let eo=i({isLazy:$,imgAttributes:en,heightInt:H,widthInt:G,qualityInt:X,className:C,imgStyle:ee,blurStyle:et,loading:S,config:T,fetchPriority:A,fill:O,unoptimized:w,placeholder:k,loader:W,srcString:ei,onLoadRef:ea,onLoadingCompleteRef:er,setBlurComplete:Y,setShowAltText:Q},B);return l.default.createElement(l.default.Fragment,null,l.default.createElement(y,Object.assign({},eo,{ref:t})),_?l.default.createElement(d.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+en.src+en.srcSet+en.sizes,rel:"preload",as:"image",href:en.srcSet?void 0:en.src,imageSrcSet:en.srcSet,imageSizes:en.sizes,crossOrigin:B.crossOrigin},v(A)))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},34898:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var i=(0,n(78644).Z)(n(86006));let a=i.default.createContext({});t.AmpStateContext=a},42601:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){let{ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e||t&&n}},4553:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=u,t.default=void 0;var i=n(35996).Z,a=n(78644).Z,r=(0,n(29536).Z)(n(86006)),o=a(n(17627)),l=n(34898),d=n(1240),s=n(42601);function u(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(87989);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(c,[]).reverse().concat(u(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,i={};return a=>{let r=!0,o=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){o=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?r=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?r=!1:t.add(a.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?r=!1:n.add(t);else{let e=a.props[t],n=i[t]||new Set;("name"!==t||!o)&&n.has(e)?r=!1:(n.add(e),i[t]=n)}}}}return r}}()).reverse().map((e,t)=>{let a=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t=i({},e.props||{});return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,r.default.cloneElement(e,t)}return r.default.cloneElement(e,{key:a})})}t.default=function(e){let{children:t}=e,n=r.useContext(l.AmpStateContext),i=r.useContext(d.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:p,headManager:i,inAmpMode:s.isInAmpMode(n)},t)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},69321:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:i,blurHeight:a,blurDataURL:r,objectFit:o}=e,l=i||t,d=a||n,s=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&d?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(d,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&a?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E")}},63927:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.ImageConfigContext=void 0;var i=(0,n(78644).Z)(n(86006)),a=n(60375);let r=i.default.createContext(a.imageConfigDefault);t.ImageConfigContext=r},60375:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0,t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"],t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},16778:function(e,t){function n(e){let{config:t,src:n,width:i,quality:a}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},17627:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let a=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(a,e))}}if(a){var d;null==t||null==(d=t.mountedInstances)||d.add(e.children),l()}return r(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),r(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null};var i=(0,n(29536).Z)(n(86006));let a=!1,r=a?()=>{}:i.useLayoutEffect,o=a?()=>{}:i.useEffect},87989:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0;let n=e=>{};t.warnOnce=n}}]);