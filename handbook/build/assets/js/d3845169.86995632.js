"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[4960],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},349:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={id:"httpdescription",title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd"},i=void 0,l={unversionedId:"httpdescription",id:"httpdescription",title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",description:"\u4ea7\u54c1\u4ecb\u7ecd",source:"@site/docs/httpdescription.mdx",sourceDirName:".",slug:"/httpdescription",permalink:"/touchsocket/docs/httpdescription",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/httpdescription.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675238151,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{id:"httpdescription",title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd"},sidebar:"docs",previous:{title:"8.5 \u9002\u914d\u5668\u5b8c\u6574\u6027\u3001\u6027\u80fd\u6d4b\u8bd5",permalink:"/touchsocket/docs/dataadaptertester"},next:{title:"\u521b\u5efaHttpService",permalink:"/touchsocket/docs/createhttpservice"}},c={},p=[{value:"\u4ea7\u54c1\u4ecb\u7ecd",id:"\u4ea7\u54c1\u4ecb\u7ecd",level:2},{value:"\u4ea7\u54c1\u7279\u70b9",id:"\u4ea7\u54c1\u7279\u70b9",level:2},{value:"\u4ea7\u54c1\u5e94\u7528\u573a\u666f",id:"\u4ea7\u54c1\u5e94\u7528\u573a\u666f",level:2},{value:"\u670d\u52a1\u5668\u67b6\u6784",id:"\u670d\u52a1\u5668\u67b6\u6784",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4ea7\u54c1\u4ecb\u7ecd"},"\u4ea7\u54c1\u4ecb\u7ecd"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Http\u7ec4\u4ef6\u662f\u80fd\u591f\u5904\u7406HTTP\u76f8\u5173\u4e1a\u52a1\u7684\u7ec4\u4ef6\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8be5\u7ec4\u4ef6\u4ec5\u4ec5\u652f\u6301\u7b80\u5355\u7684web\u670d\u52a1\uff0c\u5982\u679c\u662f\u548cTouchSocket\u7684\u5176\u4ed6\u7ec4\u4ef6\u914d\u5408\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\uff0c\u5982\u679c\u60f3\u5355\u72ec\u4f5c\u4e3aweb\u670d\u52a1\u5668\uff0c\u5219",(0,o.kt)("strong",{parentName:"li"},"\u6700\u597d\u4e0d\u8981"),"\u4f7f\u7528\u3002\u56e0\u4e3a\u5176\u517c\u5bb9\u6027\u6bd4\u8f83\u8584\u5f31\u3002 ",(0,o.kt)("a",{name:"Sdw1r"}))),(0,o.kt)("h2",{id:"\u4ea7\u54c1\u7279\u70b9"},"\u4ea7\u54c1\u7279\u70b9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301HTTPS\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u591a\u79cd\u6570\u636e\u63a5\u6536\u6a21\u5f0f")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u591a\u5730\u5740\u76d1\u542c"),"\uff08\u53ef\u4ee5\u4e00\u6b21\u6027\u76d1\u542c\u591a\u4e2aIP\u53ca\u7aef\u53e3\uff09 ",(0,o.kt)("a",{name:"h6l2a"}))),(0,o.kt)("h2",{id:"\u4ea7\u54c1\u5e94\u7528\u573a\u666f"},"\u4ea7\u54c1\u5e94\u7528\u573a\u666f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HTTP\u57fa\u7840\u4f7f\u7528\u573a\u666f\uff1a\u53ef\u8de8\u5e73\u53f0\u3001\u8de8\u8bed\u8a00\u4f7f\u7528\u3002")),(0,o.kt)("a",{name:"h50Dz"}),(0,o.kt)("h2",{id:"\u670d\u52a1\u5668\u67b6\u6784"},"\u670d\u52a1\u5668\u67b6\u6784"),(0,o.kt)("p",null,"\u670d\u52a1\u5668\u5728\u6536\u5230\u65b0\u5ba2\u6237\u7aef\u8fde\u63a5\u65f6\uff0c\u4f1a\u521b\u5efa\u4e00\u4e2aHttpSocketClient\u7684\u6d3e\u751f\u7c7b\u5b9e\u4f8b\uff0c\u4e0e\u8fdc\u7a0bHttpClient\u5bf9\u5e94\uff0c\u540e\u7eed\u7684\u6570\u636e\u901a\u4fe1\u5747\u7531\u6b64\u5b9e\u4f8b\u8d1f\u8d23\u3002"))}s.isMDXComponent=!0}}]);