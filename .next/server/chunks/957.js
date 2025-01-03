exports.id=957,exports.ids=[957],exports.modules={6691:(e,t)=>{"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_FAST_REFRESH:function(){return u},ACTION_NAVIGATE:function(){return o},ACTION_PREFETCH:function(){return s},ACTION_REFRESH:function(){return l},ACTION_RESTORE:function(){return a},ACTION_SERVER_ACTION:function(){return c},ACTION_SERVER_PATCH:function(){return i},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r},isThenable:function(){return d}});let l="refresh",o="navigate",a="restore",i="server-patch",s="prefetch",u="fast-refresh",c="server-action";function d(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"})(r||(r={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4318:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8364),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9577:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let n=r(167),l=r(997),o=n._(r(6689)),a=r(1401),i=r(2045),s=r(7420),u=r(7201),c=r(1443),d=r(5469),f=r(7443),p=r(2905),v=r(4318),m=r(953),h=r(6691);function b(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let g=o.default.forwardRef(function(e,t){let r,n;let{href:s,as:g,children:x,prefetch:y=null,passHref:E,replace:C,shallow:T,scroll:j,locale:R,onClick:O,onMouseEnter:_,onTouchStart:F,legacyBehavior:M=!1,...P}=e;r=x,M&&("string"==typeof r||"number"==typeof r)&&(r=(0,l.jsx)("a",{children:r}));let N=o.default.useContext(d.RouterContext),S=o.default.useContext(f.AppRouterContext),A=null!=N?N:S,w=!N,I=!1!==y,L=null===y?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:k,as:H}=o.default.useMemo(()=>{if(!N){let e=b(s);return{href:e,as:g?b(g):e}}let[e,t]=(0,a.resolveHref)(N,s,!0);return{href:e,as:g?(0,a.resolveHref)(N,g):t||e}},[N,s,g]),z=o.default.useRef(k),U=o.default.useRef(H);M&&(n=o.default.Children.only(r));let V=M?n&&"object"==typeof n&&n.ref:t,[Z,B,D]=(0,p.useIntersection)({rootMargin:"200px"}),K=o.default.useCallback(e=>{(U.current!==H||z.current!==k)&&(D(),U.current=H,z.current=k),Z(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[H,V,k,D,Z]);o.default.useEffect(()=>{},[H,k,B,R,I,null==N?void 0:N.locale,A,w,L]);let G={ref:K,onClick(e){M||"function"!=typeof O||O(e),M&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,r,n,l,a,s,u,c){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,i.isLocalURL)(r)))return;e.preventDefault();let f=()=>{let e=null==s||s;"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:a,locale:u,scroll:e}):t[l?"replace":"push"](n||r,{scroll:e})};c?o.default.startTransition(f):f()}(e,A,k,H,C,T,j,R,w)},onMouseEnter(e){M||"function"!=typeof _||_(e),M&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e)},onTouchStart:function(e){M||"function"!=typeof F||F(e),M&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e)}};if((0,u.isAbsoluteUrl)(H))G.href=H;else if(!M||E||"a"===n.type&&!("href"in n.props)){let e=void 0!==R?R:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&(0,v.getDomainLocale)(H,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);G.href=t||(0,m.addBasePath)((0,c.addLocale)(H,e,null==N?void 0:N.defaultLocale))}return M?o.default.cloneElement(n,G):(0,l.jsx)("a",{...P,...G,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2905:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(6689),l=r(3815),o="function"==typeof IntersectionObserver,a=new Map,i=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,u=s||!o,[c,d]=(0,n.useState)(!1),f=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(o){if(u||c)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:l,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let l=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:l},i.push(r),a.set(r,t),t}(r);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),a.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,l.requestIdleCallback)(()=>d(!0));return()=>(0,l.cancelIdleCallback)(e)}},[u,r,t,c,f.current]),[p,c,(0,n.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6957:(e,t,r)=>{"use strict";let n;r.r(t),r.d(t,{default:()=>G,headerID:()=>V});var l=r(997),o=r(6689),a=r(8287),i=r(4358),s=r(8844),u=r(2308),c=r(1378),d=r(5508),f=r(2047),p=r(1813),v=r(3580);function m(e,...t){e&&t.length>0&&e.classList.add(...t)}function h(e,...t){e&&t.length>0&&e.classList.remove(...t)}var b=r(3285),g=r(3),x=r(5602);function y(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let E=(0,o.createContext)(null);E.displayName="TransitionContext";var C=((n=C||{}).Visible="visible",n.Hidden="hidden",n);let T=(0,o.createContext)(null);function j(e){return"children"in e?j(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function R(e,t){let r=(0,d.E)(e),n=(0,o.useRef)([]),l=(0,u.t)(),i=(0,b.G)(),c=(0,g.z)((e,t=a.l4.Hidden)=>{let o=n.current.findIndex(({el:t})=>t===e);-1!==o&&((0,s.E)(t,{[a.l4.Unmount](){n.current.splice(o,1)},[a.l4.Hidden](){n.current[o].state="hidden"}}),i.microTask(()=>{var e;!j(n)&&l.current&&(null==(e=r.current)||e.call(r))}))}),f=(0,g.z)(e=>{let t=n.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):n.current.push({el:e,state:"visible"}),()=>c(e,a.l4.Unmount)}),p=(0,o.useRef)([]),v=(0,o.useRef)(Promise.resolve()),m=(0,o.useRef)({enter:[],leave:[],idle:[]}),h=(0,g.z)((e,r,n)=>{p.current.splice(0),t&&(t.chains.current[r]=t.chains.current[r].filter(([t])=>t!==e)),null==t||t.chains.current[r].push([e,new Promise(e=>{p.current.push(e)})]),null==t||t.chains.current[r].push([e,new Promise(e=>{Promise.all(m.current[r].map(([e,t])=>t)).then(()=>e())})]),"enter"===r?v.current=v.current.then(()=>null==t?void 0:t.wait.current).then(()=>n(r)):n(r)}),x=(0,g.z)((e,t,r)=>{Promise.all(m.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=p.current.shift())||e()}).then(()=>r(t))});return(0,o.useMemo)(()=>({children:n,register:f,unregister:c,onStart:h,onStop:x,wait:v,chains:m}),[f,c,n,h,x,m,v])}function O(){}T.displayName="NestingContext";let _=["beforeEnter","afterEnter","beforeLeave","afterLeave"],F=a.AN.RenderStrategy,M=(0,a.yV)(function(e,t){let{show:r,appear:n=!1,unmount:l=!0,...s}=e,u=(0,o.useRef)(null),d=(0,p.T)(u,t);(0,f.H)();let v=(0,i.oJ)();if(void 0===r&&null!==v&&(r=(v&i.ZM.Open)===i.ZM.Open),![!0,!1].includes(r))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[m,h]=(0,o.useState)(r?"visible":"hidden"),b=R(()=>{h("hidden")}),[x,y]=(0,o.useState)(!0),C=(0,o.useRef)([r]);(0,c.e)(()=>{!1!==x&&C.current[C.current.length-1]!==r&&(C.current.push(r),y(!1))},[C,r]);let j=(0,o.useMemo)(()=>({show:r,appear:n,initial:x}),[r,n,x]),O={unmount:l},_=(0,g.z)(()=>{var t;x&&y(!1),null==(t=e.beforeEnter)||t.call(e)}),M=(0,g.z)(()=>{var t;x&&y(!1),null==(t=e.beforeLeave)||t.call(e)});return o.createElement(T.Provider,{value:b},o.createElement(E.Provider,{value:j},(0,a.sY)({ourProps:{...O,as:o.Fragment,children:o.createElement(P,{ref:d,...O,...s,beforeEnter:_,beforeLeave:M})},theirProps:{},defaultTag:o.Fragment,features:F,visible:"visible"===m,name:"Transition"})))}),P=(0,a.yV)(function(e,t){var r,n,l;let{beforeEnter:C,afterEnter:M,beforeLeave:P,afterLeave:N,enter:S,enterFrom:A,enterTo:w,entered:I,leave:L,leaveFrom:k,leaveTo:H,...z}=e,U=(0,o.useRef)(null),V=(0,p.T)(U,t),{show:Z,appear:B,initial:D}=(null==(r=z.unmount)||r?a.l4.Unmount:a.l4.Hidden,function(){let e=(0,o.useContext)(E);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}()),[K,G]=(0,o.useState)(Z?"visible":"hidden"),Y=function(){let e=(0,o.useContext)(T);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:q,unregister:J}=Y,$=(0,d.E)({base:y(z.className),enter:y(S),enterFrom:y(A),enterTo:y(w),entered:y(I),leave:y(L),leaveFrom:y(k),leaveTo:y(H)}),W=(l={beforeEnter:C,afterEnter:M,beforeLeave:P,afterLeave:N},(0,o.useRef)(function(e){var t;let r={};for(let n of _)r[n]=null!=(t=e[n])?t:O;return r}(l))),Q=(0,f.H)(),X=D&&!B,ee=B&&Z&&D,et=function(e=0){let[t,r]=(0,o.useState)(e),n=(0,u.t)(),l=(0,o.useCallback)(e=>{n.current&&r(t=>t|e)},[t,n]),a=(0,o.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:l,hasFlag:a,removeFlag:(0,o.useCallback)(e=>{n.current&&r(t=>t&~e)},[r,n]),toggleFlag:(0,o.useCallback)(e=>{n.current&&r(t=>t^e)},[r])}}(0),er=(0,g.z)(e=>(0,s.E)(e,{enter:()=>{et.addFlag(i.ZM.Opening),W.current.beforeEnter()},leave:()=>{et.addFlag(i.ZM.Closing),W.current.beforeLeave()},idle:()=>{}})),en=(0,g.z)(e=>(0,s.E)(e,{enter:()=>{et.removeFlag(i.ZM.Opening),W.current.afterEnter()},leave:()=>{et.removeFlag(i.ZM.Closing),W.current.afterLeave()},idle:()=>{}})),el=R(()=>{G("hidden"),J(U)},Y);!function({immediate:e,container:t,direction:r,classes:n,onStart:l,onStop:o}){let a=(0,u.t)(),i=(0,b.G)(),f=(0,d.E)(r);(0,c.e)(()=>{e&&(f.current="enter")},[e]),(0,c.e)(()=>{let e=(0,v.k)();i.add(e.dispose);let r=t.current;if(r&&"idle"!==f.current&&a.current){var u,c,d;let t,a,i,p,b,g,x;return e.dispose(),l.current(f.current),e.add((u=n.current,c="enter"===f.current,d=()=>{e.dispose(),o.current(f.current)},a=c?"enter":"leave",i=(0,v.k)(),p=void 0!==d?(t={called:!1},(...e)=>{if(!t.called)return t.called=!0,d(...e)}):()=>{},"enter"===a&&(r.removeAttribute("hidden"),r.style.display=""),b=(0,s.E)(a,{enter:()=>u.enter,leave:()=>u.leave}),g=(0,s.E)(a,{enter:()=>u.enterTo,leave:()=>u.leaveTo}),x=(0,s.E)(a,{enter:()=>u.enterFrom,leave:()=>u.leaveFrom}),h(r,...u.base,...u.enter,...u.enterTo,...u.enterFrom,...u.leave,...u.leaveFrom,...u.leaveTo,...u.entered),m(r,...u.base,...b,...x),i.nextFrame(()=>{h(r,...u.base,...b,...x),m(r,...u.base,...b,...g),function(e,t){let r=(0,v.k)();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:l}=getComputedStyle(e),[o,a]=[n,l].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),i=o+a;if(0!==i){r.group(r=>{r.setTimeout(()=>{t(),r.dispose()},i),r.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&r.dispose()})});let n=r.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),n())})}else t();r.add(()=>t()),r.dispose}(r,()=>(h(r,...u.base,...b),m(r,...u.base,...u.entered),p()))}),i.dispose)),e.dispose}},[r])}({immediate:ee,container:U,classes:$,direction:!Q||X?"idle":Z?"enter":"leave",onStart:(0,d.E)(e=>{el.onStart(U,e,er)}),onStop:(0,d.E)(e=>{el.onStop(U,e,en),"leave"!==e||j(el)||(G("hidden"),J(U))})});let eo=z;return ee?eo={...eo,className:(0,x.A)(z.className,...$.current.enter,...$.current.enterFrom)}:(eo.className=(0,x.A)(z.className,null==(n=U.current)?void 0:n.className),""===eo.className&&delete eo.className),o.createElement(T.Provider,{value:el},o.createElement(i.up,{value:(0,s.E)(K,{visible:i.ZM.Open,hidden:i.ZM.Closed})|et.flags},(0,a.sY)({ourProps:{ref:V},theirProps:eo,defaultTag:"div",features:F,visible:"visible"===K,name:"Transition.Child"})))}),N=(0,a.yV)(function(e,t){let r=null!==(0,o.useContext)(E),n=null!==(0,i.oJ)();return o.createElement(o.Fragment,null,!r&&n?o.createElement(M,{ref:t,...e}):o.createElement(P,{ref:t,...e}))}),S=Object.assign(M,{Child:N,Root:M});var A=r(2089);let w=o.forwardRef(function({title:e,titleId:t,...r},n){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?o.createElement("title",{id:t},e):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"}))});var I=r(9003),L=r.n(I),k=r(1664),H=r.n(k),z=r(9105);let U=(e,t)=>{(0,o.useEffect)(()=>{let r=document.querySelectorAll(e),n=Array.from(r),l=document.getElementById(V),o=new IntersectionObserver(e=>{e.forEach(e=>{let r=e.boundingClientRect.y,o=e.target.getAttribute("id");if(l){let a={id:o,currentIndex:n.findIndex(e=>e.getAttribute("id")===o),isIntersecting:e.isIntersecting,currentRatio:e.intersectionRatio,aboveToc:r<l.getBoundingClientRect().y,belowToc:!(r<l.getBoundingClientRect().y)};a.isIntersecting?t(a.id):!a.isIntersecting&&a.currentRatio<1&&a.currentRatio>0&&a.belowToc&&t(n[a.currentIndex-1]?.getAttribute("id"))}})},{root:null,threshold:.1,rootMargin:"0px 0px -70% 0px"});return r.forEach(e=>{o.observe(e)}),()=>{o.disconnect()}},[])},V="headerNav",Z=(0,o.memo)(()=>{let[e,t]=(0,o.useState)(null),r=(0,o.useMemo)(()=>[z._h.About,z._h.Resume,z._h.Portfolio,z._h.Contact],[]),n=(0,o.useCallback)(e=>{e&&t(e)},[]);return U(r.map(e=>`#${e}`).join(","),n),(0,l.jsxs)(l.Fragment,{children:[l.jsx(D,{currentSection:e,navSections:r}),l.jsx(B,{currentSection:e,navSections:r})]})}),B=(0,o.memo)(({navSections:e,currentSection:t})=>{let r="-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100",n=L()(r,"text-orange-500"),o=L()(r,"text-neutral-100");return l.jsx("header",{className:"fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block",id:V,children:l.jsx("nav",{className:"flex justify-center gap-x-8",children:e.map(e=>l.jsx(K,{activeClass:n,current:e===t,inactiveClass:o,section:e},e))})})}),D=(0,o.memo)(({navSections:e,currentSection:t})=>{let[r,n]=(0,o.useState)(!1),a=(0,o.useCallback)(()=>{n(!r)},[r]),i="p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",s=L()(i,"bg-neutral-900 text-white font-bold"),u=L()(i,"text-neutral-200 font-medium");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("button",{"aria-label":"Menu Button",className:"fixed right-2 top-2 z-40 rounded-md bg-orange-500 p-2 ring-offset-gray-800/60 hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden",onClick:a,children:[l.jsx(w,{className:"h-8 w-8 text-white"}),l.jsx("span",{className:"sr-only",children:"Open sidebar"})]}),l.jsx(S.Root,{as:o.Fragment,show:r,children:(0,l.jsxs)(A.V,{as:"div",className:"fixed inset-0 z-40 flex sm:hidden",onClose:a,children:[l.jsx(S.Child,{as:o.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:l.jsx(A.V.Overlay,{className:"fixed inset-0 bg-stone-900 bg-opacity-75"})}),l.jsx(S.Child,{as:o.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:l.jsx("div",{className:"relative w-4/5 bg-stone-800",children:l.jsx("nav",{className:"mt-5 flex flex-col gap-y-2 px-2",children:e.map(e=>l.jsx(K,{activeClass:s,current:e===t,inactiveClass:u,onClick:a,section:e},e))})})})]})})]})}),K=(0,o.memo)(({section:e,current:t,inactiveClass:r,activeClass:n,onClick:o})=>l.jsx(H(),{className:L()(t?n:r),href:`/#${e}`,onClick:o,children:e},e));Z.displayName="Header";let G=Z},7443:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AppRouterContext},1664:(e,t,r)=>{e.exports=r(9577)}};