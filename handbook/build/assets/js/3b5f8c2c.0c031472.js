"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[9171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||c;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,l=new Array(c);l[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<c;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const c={id:"rpcallcontext",title:"\u8c03\u7528\u4e0a\u4e0b\u6587"},l=void 0,a={unversionedId:"rpcallcontext",id:"rpcallcontext",title:"\u8c03\u7528\u4e0a\u4e0b\u6587",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/rpcallcontext.mdx",sourceDirName:".",slug:"/rpcallcontext",permalink:"/touchsocket/docs/rpcallcontext",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/rpcallcontext.mdx",tags:[],version:"current",frontMatter:{id:"rpcallcontext",title:"\u8c03\u7528\u4e0a\u4e0b\u6587"},sidebar:"docs",previous:{title:"\u5e8f\u5217\u5316\u9009\u62e9\u5668",permalink:"/touchsocket/docs/serializationselector"},next:{title:"Rpc\u670d\u52a1AOP",permalink:"/touchsocket/docs/rpcactionfilter"}},i={},p=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u901a\u8fc7\u6807\u7b7e\u53c2\u6570\u83b7\u53d6",id:"\u4e8c\u901a\u8fc7\u6807\u7b7e\u53c2\u6570\u83b7\u53d6",level:2},{value:"\u4e09\u3001\u901a\u8fc7\u77ac\u65f6\u751f\u547d\u5468\u671f\u83b7\u53d6",id:"\u4e09\u901a\u8fc7\u77ac\u65f6\u751f\u547d\u5468\u671f\u83b7\u53d6",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"RPC\u670d\u52a1\u662f\u65e0\u72b6\u6001\u7684\uff0c\u5373\u53ea\u77e5\u9053\u5f53\u524d\u670d\u52a1\u88ab\u8c03\u7528\uff0c\u4f46\u65e0\u6cd5\u5f97\u77e5\u662f\u88ab\u8c01\u8c03\u7528\uff0c\u8fd9\u4e2a\u95ee\u9898\u7ed9\u65e5\u5fd7\u8bb0\u5f55\u3001RPC\u56de\u8c03\u7b49\u5e26\u6765\u4e86\u5f88\u591a\u9ebb\u70e6\u4e8b\u3002\u4f46\u662f\uff0cTouch\u7684Rpc\u652f\u6301\u8c03\u7528\u4e0a\u4e0b\u6587\u83b7\u53d6\u3002\u5728\u4e0a\u4e0b\u6587\u4e2d\u53ef\u4ee5\u83b7\u5f97\u8c03\u7528\u8005\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"ICaller"),"\uff09\u4fe1\u606f\u7b49\u3002")),(0,o.kt)("h2",{id:"\u4e8c\u901a\u8fc7\u6807\u7b7e\u53c2\u6570\u83b7\u53d6"},"\u4e8c\u3001\u901a\u8fc7\u6807\u7b7e\u53c2\u6570\u83b7\u53d6"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6b65\u9aa4\uff1a")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Rpc\u6807\u7b7e\u9700\u8981\u4f20\u5165",(0,o.kt)("inlineCode",{parentName:"li"},"MethodFlags.IncludeCallContext"),"\u53c2\u6570\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u7684\u670d\u52a1\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u5fc5\u987b\u662f",(0,o.kt)("inlineCode",{parentName:"li"},"ICallContext"),"\u6216\u5176\u6d3e\u751f\u7c7b\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6700\u540e\u83b7\u5f97\u5176Caller\u5c5e\u6027\u5373\u53ef\u5f97\u5230\u8c03\u7528\u8005\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public class MyRpcServer : RpcServer\n{\n    [Description("\u767b\u5f55")]\n    [TouchRpc(MethodFlags = MethodFlags.IncludeCallContext)]//\u4f7f\u7528\u8c03\u7528\u4e0a\u624d\u6587\n    public bool Login(ICallContext callContext,string account,string password)\n    {\n        if (callContext.Caller is TcpTouchRpcSocketClient)\n        {\n            Console.WriteLine("TcpTouchRpc\u8bf7\u6c42");\n        }\n        if (account=="123"&&password=="abc")\n        {\n            return true;\n        }\n\n        return false;\n    }\n}\n')),(0,o.kt)("h2",{id:"\u4e09\u901a\u8fc7\u77ac\u65f6\u751f\u547d\u5468\u671f\u83b7\u53d6"},"\u4e09\u3001\u901a\u8fc7\u77ac\u65f6\u751f\u547d\u5468\u671f\u83b7\u53d6"),(0,o.kt)("p",null,"\u6b65\u9aa4\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7ee7\u627fTransientRpcServer\u6216\u8005\u5b9e\u73b0ITransientRpcServer\u63a5\u53e3\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public class MyRpcServer : TransientRpcServer\n{\n    [Description("\u767b\u5f55")]\n    [TouchRpc]\n    public bool Login(string account,string password)\n    {\n        if ( this.CallContext.Caller is TcpTouchRpcSocketClient)\n        {\n            Console.WriteLine("TcpTouchRpc\u8bf7\u6c42");\n        }\n        if (account=="123"&&password=="abc")\n        {\n            return true;\n        }\n\n        return false;\n    }\n}\n')))}u.isMDXComponent=!0}}]);