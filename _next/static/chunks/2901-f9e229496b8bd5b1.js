(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2901,6493,1364],{26130:function(e,t,n){let r=n(86006),o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"}))});e.exports=o},27895:function(e,t,n){let r=n(86006),o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"}))});e.exports=o},87743:function(e,t,n){let r=n(86006),o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"}))});e.exports=o},59344:function(e,t,n){let r=n(86006),o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z",clipRule:"evenodd"}))});e.exports=o},68277:function(e,t,n){"use strict";n.d(t,{R:function(){return o}});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},21888:function(e,t,n){"use strict";n.d(t,{O:function(){return M}});var r,o,u,a=n(86006),i=n(42810),l=n(53858),s=n(59325),c=n(68277),f=n(32243),d=n(60961),p=n(68496),b=n(51795),m=n(1485),h=n(45106);function v({onFocus:e}){let[t,n]=(0,a.useState)(!0);return t?a.createElement(h._,{as:"button",type:"button",features:h.A.Focusable,onFocus:t=>{t.preventDefault();let r,o=50;r=requestAnimationFrame(function t(){if(o--<=0){r&&cancelAnimationFrame(r);return}if(e()){n(!1),cancelAnimationFrame(r);return}r=requestAnimationFrame(t)})}}):null}var g=n(3562),E=n(10670),x=n(53432);let w=a.createContext(null);function y({children:e}){let t=a.useRef({groups:new Map,get(e,t){var n;let r=this.groups.get(e);r||(r=new Map,this.groups.set(e,r));let o=null!=(n=r.get(t))?n:0;return r.set(t,o+1),[Array.from(r.keys()).indexOf(t),function(){let e=r.get(t);e>1?r.set(t,e-1):r.delete(t)}]}});return a.createElement(w.Provider,{value:t},e)}function T(e){let t=a.useContext(w);if(!t)throw Error("You must wrap your component in a <StableCollection>");let n=function(){var e,t,n;let r=null!=(n=null==(t=null==(e=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:e.ReactCurrentOwner)?void 0:t.current)?n:null;if(!r)return Symbol();let o=[],u=r;for(;u;)o.push(u.index),u=u.return;return"$."+o.join(".")}(),[r,o]=t.current.get(e,n);return a.useEffect(()=>o,[]),r}var O=((r=O||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r),A=((o=A||{})[o.Less=-1]="Less",o[o.Equal=0]="Equal",o[o.Greater=1]="Greater",o),P=((u=P||{})[u.SetSelectedIndex=0]="SetSelectedIndex",u[u.RegisterTab=1]="RegisterTab",u[u.UnregisterTab=2]="UnregisterTab",u[u.RegisterPanel=3]="RegisterPanel",u[u.UnregisterPanel=4]="UnregisterPanel",u);let S={0(e,t){var n;let r=(0,f.z2)(e.tabs,e=>e.current),o=(0,f.z2)(e.panels,e=>e.current),u=r.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}),a={...e,tabs:r,panels:o};if(t.index<0||t.index>r.length-1){let n=(0,s.E)(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>(0,s.E)(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});return 0===u.length?a:{...a,selectedIndex:(0,s.E)(n,{0:()=>r.indexOf(u[0]),1:()=>r.indexOf(u[u.length-1])})}}let i=r.slice(0,t.index),l=[...r.slice(t.index),...i].find(e=>u.includes(e));if(!l)return a;let c=null!=(n=r.indexOf(l))?n:e.selectedIndex;return -1===c&&(c=e.selectedIndex),{...a,selectedIndex:c}},1(e,t){var n;if(e.tabs.includes(t.tab))return e;let r=e.tabs[e.selectedIndex],o=(0,f.z2)([...e.tabs,t.tab],e=>e.current),u=null!=(n=o.indexOf(r))?n:e.selectedIndex;return -1===u&&(u=e.selectedIndex),{...e,tabs:o,selectedIndex:u}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,f.z2)([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},I=(0,a.createContext)(null);function N(e){let t=(0,a.useContext)(I);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,N),t}return t}I.displayName="TabsDataContext";let k=(0,a.createContext)(null);function R(e){let t=(0,a.useContext)(k);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,R),t}return t}function j(e,t){return(0,s.E)(t.type,S,e,t)}k.displayName="TabsActionsContext";let F=a.Fragment,L=i.AN.RenderStrategy|i.AN.Static,M=Object.assign((0,i.yV)(function(e,t){var n,r;let o=(0,l.M)(),{id:u=`headlessui-tabs-tab-${o}`,...m}=e,{orientation:h,activation:v,selectedIndex:w,tabs:y,panels:O}=N("Tab"),A=R("Tab"),P=N("Tab"),S=(0,a.useRef)(null),I=(0,p.T)(S,t);(0,d.e)(()=>A.registerTab(S),[A,S]);let k=T("tabs"),j=y.indexOf(S);-1===j&&(j=k);let F=j===w,L=(0,g.z)(e=>{var t;let n=e();if(n===f.fE.Success&&"auto"===v){let e=null==(t=(0,x.r)(S))?void 0:t.activeElement,n=P.tabs.findIndex(t=>t.current===e);-1!==n&&A.change(n)}return n}),M=(0,g.z)(e=>{let t=y.map(e=>e.current).filter(Boolean);if(e.key===c.R.Space||e.key===c.R.Enter){e.preventDefault(),e.stopPropagation(),A.change(j);return}switch(e.key){case c.R.Home:case c.R.PageUp:return e.preventDefault(),e.stopPropagation(),L(()=>(0,f.jA)(t,f.TO.First));case c.R.End:case c.R.PageDown:return e.preventDefault(),e.stopPropagation(),L(()=>(0,f.jA)(t,f.TO.Last))}if(L(()=>(0,s.E)(h,{vertical:()=>e.key===c.R.ArrowUp?(0,f.jA)(t,f.TO.Previous|f.TO.WrapAround):e.key===c.R.ArrowDown?(0,f.jA)(t,f.TO.Next|f.TO.WrapAround):f.fE.Error,horizontal:()=>e.key===c.R.ArrowLeft?(0,f.jA)(t,f.TO.Previous|f.TO.WrapAround):e.key===c.R.ArrowRight?(0,f.jA)(t,f.TO.Next|f.TO.WrapAround):f.fE.Error}))===f.fE.Success)return e.preventDefault()}),C=(0,a.useRef)(!1),D=(0,g.z)(()=>{var e;C.current||(C.current=!0,null==(e=S.current)||e.focus(),A.change(j),(0,E.Y)(()=>{C.current=!1}))}),_=(0,g.z)(e=>{e.preventDefault()}),z=(0,a.useMemo)(()=>({selected:F}),[F]),U={ref:I,onKeyDown:M,onMouseDown:_,onClick:D,id:u,role:"tab",type:(0,b.f)(e,S),"aria-controls":null==(r=null==(n=O[j])?void 0:n.current)?void 0:r.id,"aria-selected":F,tabIndex:F?0:-1};return(0,i.sY)({ourProps:U,theirProps:m,slot:z,defaultTag:"button",name:"Tabs.Tab"})}),{Group:(0,i.yV)(function(e,t){let{defaultIndex:n=0,vertical:r=!1,manual:o=!1,onChange:u,selectedIndex:l=null,...s}=e,c=r?"vertical":"horizontal",b=o?"manual":"auto",h=null!==l,E=(0,p.T)(t),[x,w]=(0,a.useReducer)(j,{selectedIndex:null!=l?l:n,tabs:[],panels:[]}),T=(0,a.useMemo)(()=>({selectedIndex:x.selectedIndex}),[x.selectedIndex]),O=(0,m.E)(u||(()=>{})),A=(0,m.E)(x.tabs),P=(0,a.useMemo)(()=>({orientation:c,activation:b,...x}),[c,b,x]),S=(0,g.z)(e=>(w({type:1,tab:e}),()=>w({type:2,tab:e}))),N=(0,g.z)(e=>(w({type:3,panel:e}),()=>w({type:4,panel:e}))),R=(0,g.z)(e=>{L.current!==e&&O.current(e),h||w({type:0,index:e})}),L=(0,m.E)(h?e.selectedIndex:x.selectedIndex),M=(0,a.useMemo)(()=>({registerTab:S,registerPanel:N,change:R}),[]);return(0,d.e)(()=>{w({type:0,index:null!=l?l:n})},[l]),(0,d.e)(()=>{if(void 0===L.current||x.tabs.length<=0)return;let e=(0,f.z2)(x.tabs,e=>e.current);e.some((e,t)=>x.tabs[t]!==e)&&R(e.indexOf(x.tabs[L.current]))}),a.createElement(y,null,a.createElement(k.Provider,{value:M},a.createElement(I.Provider,{value:P},P.tabs.length<=0&&a.createElement(v,{onFocus:()=>{var e,t;for(let n of A.current)if((null==(e=n.current)?void 0:e.tabIndex)===0)return null==(t=n.current)||t.focus(),!0;return!1}}),(0,i.sY)({ourProps:{ref:E},theirProps:s,slot:T,defaultTag:F,name:"Tabs"}))))}),List:(0,i.yV)(function(e,t){let{orientation:n,selectedIndex:r}=N("Tab.List"),o=(0,p.T)(t);return(0,i.sY)({ourProps:{ref:o,role:"tablist","aria-orientation":n},theirProps:e,slot:{selectedIndex:r},defaultTag:"div",name:"Tabs.List"})}),Panels:(0,i.yV)(function(e,t){let{selectedIndex:n}=N("Tab.Panels"),r=(0,p.T)(t),o=(0,a.useMemo)(()=>({selectedIndex:n}),[n]);return(0,i.sY)({ourProps:{ref:r},theirProps:e,slot:o,defaultTag:"div",name:"Tabs.Panels"})}),Panel:(0,i.yV)(function(e,t){var n,r,o,u;let s=(0,l.M)(),{id:c=`headlessui-tabs-panel-${s}`,tabIndex:f=0,...b}=e,{selectedIndex:m,tabs:v,panels:g}=N("Tab.Panel"),E=R("Tab.Panel"),x=(0,a.useRef)(null),w=(0,p.T)(x,t);(0,d.e)(()=>E.registerPanel(x),[E,x]);let y=T("panels"),O=g.indexOf(x);-1===O&&(O=y);let A=O===m,P=(0,a.useMemo)(()=>({selected:A}),[A]),S={ref:w,id:c,role:"tabpanel","aria-labelledby":null==(r=null==(n=v[O])?void 0:n.current)?void 0:r.id,tabIndex:A?f:-1};return A||null!=(o=b.unmount)&&!o||null!=(u=b.static)&&u?(0,i.sY)({ourProps:S,theirProps:b,slot:P,defaultTag:"div",features:L,visible:A,name:"Tabs.Panel"}):a.createElement(h._,{as:"span",...S})})})},3562:function(e,t,n){"use strict";n.d(t,{z:function(){return u}});var r=n(86006),o=n(1485);let u=function(e){let t=(0,o.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},53858:function(e,t,n){"use strict";n.d(t,{M:function(){return l}});var r,o=n(86006),u=n(60961),a=n(11405),i=n(30028);let l=null!=(r=o.useId)?r:function(){let e=(0,a.H)(),[t,n]=o.useState(e?()=>i.O.nextId():null);return(0,u.e)(()=>{null===t&&n(i.O.nextId())},[t]),null!=t?""+t:void 0}},60961:function(e,t,n){"use strict";n.d(t,{e:function(){return u}});var r=n(86006),o=n(30028);let u=(e,t)=>{o.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},1485:function(e,t,n){"use strict";n.d(t,{E:function(){return u}});var r=n(86006),o=n(60961);function u(e){let t=(0,r.useRef)(e);return(0,o.e)(()=>{t.current=e},[e]),t}},51795:function(e,t,n){"use strict";n.d(t,{f:function(){return a}});var r=n(86006),o=n(60961);function u(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function a(e,t){let[n,a]=(0,r.useState)(()=>u(e));return(0,o.e)(()=>{a(u(e))},[e.type,e.as]),(0,o.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&a("button")},[n,t]),n}},11405:function(e,t,n){"use strict";n.d(t,{H:function(){return u}});var r=n(86006),o=n(30028);function u(){let[e,t]=(0,r.useState)(o.O.isHandoffComplete);return e&&!1===o.O.isHandoffComplete&&t(!1),(0,r.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,r.useEffect)(()=>o.O.handoff(),[]),e}},68496:function(e,t,n){"use strict";n.d(t,{T:function(){return i},h:function(){return a}});var r=n(86006),o=n(3562);let u=Symbol();function a(e,t=!0){return Object.assign(e,{[u]:t})}function i(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,o.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[u]))?void 0:n}},45106:function(e,t,n){"use strict";n.d(t,{A:function(){return u},_:function(){return a}});var r,o=n(42810),u=((r=u||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let a=(0,o.yV)(function(e,t){let{features:n=1,...r}=e,u={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,o.sY)({ourProps:u,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})})},34339:function(e,t,n){"use strict";function r(...e){return e.filter(Boolean).join(" ")}n.d(t,{A:function(){return r}})},30028:function(e,t,n){"use strict";n.d(t,{O:function(){return a}});var r=Object.defineProperty,o=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t,n)=>(o(e,"symbol"!=typeof t?t+"":t,n),n);let a=new class{constructor(){u(this,"current",this.detect()),u(this,"handoffState","pending"),u(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},32243:function(e,t,n){"use strict";n.d(t,{C5:function(){return h},GO:function(){return p},TO:function(){return c},fE:function(){return f},jA:function(){return g},sP:function(){return m},tJ:function(){return b},z2:function(){return v}});var r,o,u,a,i=n(59325),l=n(53432);let s=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var c=((r=c||{})[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r),f=((o=f||{})[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o),d=((u=d||{})[u.Previous=-1]="Previous",u[u.Next=1]="Next",u);function p(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(s)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var b=((a=b||{})[a.Strict=0]="Strict",a[a.Loose=1]="Loose",a);function m(e,t=0){var n;return e!==(null==(n=(0,l.r)(e))?void 0:n.body)&&(0,i.E)(t,{0:()=>e.matches(s),1(){let t=e;for(;null!==t;){if(t.matches(s))return!0;t=t.parentElement}return!1}})}function h(e){null==e||e.focus({preventScroll:!0})}function v(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let u=r.compareDocumentPosition(o);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function g(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var u,a,i;let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?v(e):e:p(e);o.length>0&&s.length>1&&(s=s.filter(e=>!o.includes(e))),r=null!=r?r:l.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=32&t?{preventScroll:!0}:{},b=0,m=s.length,h;do{if(b>=m||b+m<=0)return 0;let e=f+b;if(16&t)e=(e+m)%m;else{if(e<0)return 3;if(e>=m)return 1}null==(h=s[e])||h.focus(d),b+=c}while(h!==l.activeElement);return 6&t&&null!=(i=null==(a=null==(u=h)?void 0:u.matches)?void 0:a.call(u,"textarea,input"))&&i&&h.select(),h.hasAttribute("tabindex")||h.setAttribute("tabindex","0"),2}},59325:function(e,t,n){"use strict";function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,r),o}n.d(t,{E:function(){return r}})},10670:function(e,t,n){"use strict";function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}n.d(t,{Y:function(){return r}})},53432:function(e,t,n){"use strict";n.d(t,{r:function(){return o}});var r=n(30028);function o(e){return r.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},42810:function(e,t,n){"use strict";n.d(t,{AN:function(){return l},l4:function(){return s},oA:function(){return b},sY:function(){return c},yV:function(){return p}});var r,o,u=n(86006),a=n(34339),i=n(59325),l=((r=l||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),s=((o=s||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:u=!0,name:a}){let l=d(t,e);if(u)return f(l,n,r,a);let s=null!=o?o:0;if(2&s){let{static:e=!1,...t}=l;if(e)return f(t,n,r,a)}if(1&s){let{unmount:e=!0,...t}=l;return(0,i.E)(e?0:1,{0:()=>null,1:()=>f({...t,hidden:!0,style:{display:"none"}},n,r,a)})}return f(l,n,r,a)}function f(e,t={},n,r){var o;let{as:i=n,children:l,refName:s="ref",...c}=m(e,["unmount","static"]),f=void 0!==e.ref?{[s]:e.ref}:{},p="function"==typeof l?l(t):l;"className"in c&&c.className&&"function"==typeof c.className&&(c.className=c.className(t));let h={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(h["data-headlessui-state"]=n.join(" "))}if(i===u.Fragment&&Object.keys(b(c)).length>0){if(!(0,u.isValidElement)(p)||Array.isArray(p)&&p.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(c).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=(0,a.A)(null==(o=p.props)?void 0:o.className,c.className);return(0,u.cloneElement)(p,Object.assign({},d(p.props,b(m(c,["ref"]))),h,f,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(p.ref,f.ref),e?{className:e}:{}))}return(0,u.createElement)(i,Object.assign({},m(c,["ref"]),i!==u.Fragment&&f,i!==u.Fragment&&h),p)}function d(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let o of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;o(t,...r)}}});return t}function p(e){var t;return Object.assign((0,u.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function b(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function m(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}}}]);