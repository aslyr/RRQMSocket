"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[138],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(n),g=r,k=s["".concat(p,".").concat(g)]||s[g]||u[g]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={id:"adapterdescription",title:"\u4ecb\u7ecd\u53ca\u4f7f\u7528"},o=void 0,i={unversionedId:"adapterdescription",id:"adapterdescription",title:"\u4ecb\u7ecd\u53ca\u4f7f\u7528",description:"\u8bf4\u660e",source:"@site/docs/adapterdescription.mdx",sourceDirName:".",slug:"/adapterdescription",permalink:"/touchsocket/docs/adapterdescription",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/adapterdescription.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675229490,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{id:"adapterdescription",title:"\u4ecb\u7ecd\u53ca\u4f7f\u7528"},sidebar:"docs",previous:{title:"\u7ec4\u64ad\u3001\u5e7f\u64ad",permalink:"/touchsocket/docs/udpbroadcast"},next:{title:"a.\u6b63\u5e38\u6570\u636e\u5904\u7406\u9002\u914d\u5668",permalink:"/touchsocket/docs/normaldatahandlingadapter"}},p={},c=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u8bbe\u8ba1\u67b6\u6784",id:"\u8bbe\u8ba1\u67b6\u6784",level:2},{value:"\u5de5\u4f5c\u903b\u8f91",id:"\u5de5\u4f5c\u903b\u8f91",level:4},{value:"\u6570\u636e\u903b\u8f91",id:"\u6570\u636e\u903b\u8f91",level:4},{value:"\u8bbe\u8ba1\u89e3\u91ca",id:"\u8bbe\u8ba1\u89e3\u91ca",level:4},{value:"\u4e09\u3001TCP\u4f7f\u7528",id:"\u4e09tcp\u4f7f\u7528",level:2},{value:"3.1 \u5728Config\u914d\u7f6e\u4e2d\u4f7f\u7528",id:"31-\u5728config\u914d\u7f6e\u4e2d\u4f7f\u7528",level:4},{value:"3.2 \u8ba2\u9605Connecting\u76f8\u5173\u4e8b\u4ef6",id:"32-\u8ba2\u9605connecting\u76f8\u5173\u4e8b\u4ef6",level:4},{value:"3.3 \u4f7f\u7528\u63d2\u4ef6\uff0c\u4ee3\u66ffConnecting\u76f8\u5173\u4e8b\u4ef6\u5b9e\u73b0",id:"33-\u4f7f\u7528\u63d2\u4ef6\u4ee3\u66ffconnecting\u76f8\u5173\u4e8b\u4ef6\u5b9e\u73b0",level:4},{value:"3.4 \u4efb\u610f\u65f6\u523b\u8bbe\u7f6e",id:"34-\u4efb\u610f\u65f6\u523b\u8bbe\u7f6e",level:4},{value:"\u56db\u3001UDP\u4f7f\u7528\u63d2\u4ef6",id:"\u56dbudp\u4f7f\u7528\u63d2\u4ef6",level:2},{value:"\u4e94\u3001\u9650\u5236\u4f7f\u7528",id:"\u4e94\u9650\u5236\u4f7f\u7528",level:2},{value:"\u516d\u3001\u7f13\u5b58\u8d85\u65f6\uff08\u4ec5Tcp\u9002\u914d\u5668\uff09",id:"\u516d\u7f13\u5b58\u8d85\u65f6\u4ec5tcp\u9002\u914d\u5668",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.kt)("p",null,"\u5728TouchSocket\u4e2d\uff0c\u9002\u914d\u5668\u8d2f\u7a7f\u59cb\u7ec8\uff0c\u5176\u4f5c\u7528\u5b9e\u9645\u4e0a\u6709\u4e24\u4e2a\uff0c\u5206\u522b\u4e3a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u53d1\u9001\u548c\u63a5\u6536\u7684\u6570\u636e\u8fdb\u884c\u9884\u5148\u7684\u5c01\u88c5\u548c\u89e3\u5c01\uff0c\u4ee5\u8fbe\u5230\u89e3\u6790\u6570\u636e\u7684\u4f5c\u7528\uff08\u53ef\u4ee5\u7b80\u5355\u7406\u89e3\u4e3a\u5904\u7406\u9ecf\u3001\u5206\u5305\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u7279\u6b8a\u6570\u636e\u89e3\u6790\u4e3a\u53ef\u4ee5\u4f20\u9012\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4ee5\u8fbe\u5230\u89e3\u6790\u6570\u636e\u7684\u76ee\u7684\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5f88\u660e\u663e\uff0c\u5927\u5bb6\u770b\u5230\u4e86\uff0c\u6570\u636e\u5904\u7406\u9002\u914d\u5668\u7684\u4f5c\u7528\u7528\u4e00\u53e5\u8bdd\u8bf4\uff0c\u5c31\u662f\u89e3\u6790\u6570\u636e\u7528\u7684\u3002")),(0,r.kt)("h2",{id:"\u8bbe\u8ba1\u67b6\u6784"},"\u8bbe\u8ba1\u67b6\u6784"),(0,r.kt)("h4",{id:"\u5de5\u4f5c\u903b\u8f91"},"\u5de5\u4f5c\u903b\u8f91"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://images.gitee.com/uploads/images/2022/0125/192152_18f6c642_8553710.png#crop=0&crop=0&crop=1&crop=1&id=y6Ob5&originHeight=1487&originWidth=3450&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=",alt:null})),(0,r.kt)("h4",{id:"\u6570\u636e\u903b\u8f91"},"\u6570\u636e\u903b\u8f91"),(0,r.kt)("p",null,"TouchSocket\u7684\u9002\u914d\u5668\uff0c\u5728\u521d\u59cb\u9636\u6bb5\uff08\u539f\u59cbTCP\uff09\uff0c\u4f1a\u6536\u5230\u4e00\u4e2aByteBlock\u6570\u636e\uff0c\u7136\u540e\u7ecf\u8fc7\u9002\u914d\u5668\u5904\u7406\u4ee5\u540e\uff0c\u53ef\u9009\u62e9\u4e24\u4e2a\u53c2\u6570\uff08ByteBlock\u548cIRequestInfo\uff09\u7684",(0,r.kt)("strong",{parentName:"p"},"\u4efb\u610f\u7ec4\u5408"),"\u6295\u9012\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a",(0,r.kt)("strong",{parentName:"p"},"FixedHeaderPackageAdapter"),"\uff0c\u4ec5\u6295\u9012ByteBlock\u6570\u636e\uff0c\u5c4a\u65f6IRequestInfo\u5c06\u4e3anull\u3002\u800c\u5982\u679c\u662f\u7ee7\u627f\u7684",(0,r.kt)("strong",{parentName:"p"},"CustomDataHandlingAdapter"),"\uff0c\u5219\u4ec5\u6295\u9012IRequestInfo\uff0cByteBlock\u5c06\u4e3anull\u3002"),(0,r.kt)("h4",{id:"\u8bbe\u8ba1\u89e3\u91ca"},"\u8bbe\u8ba1\u89e3\u91ca"),(0,r.kt)("p",null,"\u5927\u5bb6\u6709\u65f6\u5019\u53ef\u80fd\u4f1a\u8ff7\u60d1\uff0c\u4e3a\u4ec0\u4e48TouchSocket\u8981\u8bbe\u8ba1\u4e24\u4e2a\u53c2\u6570\u6295\u9012\uff0c\u800c\u4e0d\u50cf\u5176\u4ed6\u7684\u90a3\u6837\u7684\uff0c\u5728\u4f1a\u8bdd\u91cc\u9762\uff0c\u628a\u9002\u914d\u5668\u76f4\u63a5\u6cdb\u578b\u89c4\u8303\u4e86\uff0c\u76f4\u63a5\u629b\u51fa\u5bf9\u5e94\u7684\u7c7b\u578b\u3002\u8fd9\u662f\u56e0\u4e3a\u6cdb\u578b\u7ea6\u675f\u592a\u5927\uff0c\u4e0d\u591f\u7075\u6d3b\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\uff0c\u4e0d\u80fd\u968f\u65f6\u5207\u6362\u9002\u914d\u5668\uff0c\u4f8b\u5982\u9002\u914dwebSocket\uff0c\u5728\u63e1\u624b\u9636\u6bb5\uff0c\u8981\u89e3\u6790http\u6570\u636e\uff0c\u6240\u4ee5\uff0c\u6b64\u65f6\u5e94\u8be5\u9009\u62e9http\u6570\u636e\u5904\u7406\u9002\u914d\uff0c\u800c\u5b8c\u6210\u63e1\u624b\u4ee5\u540e\uff0c\u5c31\u8981\u89e3\u6790ws\u6570\u636e\u683c\u5f0f\u4e86\uff0c\u6240\u4ee5\u6b64\u65f6\u5e94\u8be5\u5207\u6362\u9002\u914d\u5668\u4e3aws\u6570\u636e\u5904\u7406\u9002\u914d\u5668\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\uff0c\u4e24\u4e2a\u53c2\u6570\u80fd\u63d0\u9ad8\u6027\u80fd\u3002\u4f8b\u5982HTTP\u6570\u636e\u5904\u7406\u9002\u914d\u5668\uff0c\u5728\u9ad8\u6027\u80fd\u5de5\u4f5c\u6a21\u5f0f\u4e0b\uff0c\u7531IRequestInfo\u6295\u9012\u8bf7\u6c42\u5934\uff0c\u7531ByteBlock\u6295\u9012Body\uff0c\u8fd9\u6837Body\u662f\u4ece\u5185\u5b58\u6c60\u83b7\u5f97\uff0c\u5c31\u4e0d\u5b58\u5728\u5185\u5b58\u6d88\u8017\u4e86\u3002")),(0,r.kt)("h2",{id:"\u4e09tcp\u4f7f\u7528"},"\u4e09\u3001TCP\u4f7f\u7528"),(0,r.kt)("p",null,"\u5728TCP\u7cfb\u4e2d\u4f7f\u7528\u6570\u636e\u5904\u7406\u9002\u914d\u5668\u662f\u975e\u5e38\u7b80\u5355\u7684\u4e00\u4e2a\u8fc7\u7a0b\u3002\u800c\u4e14\u4e3a\u4e86\u4e0d\u540c\u573a\u666f\uff0cTouchSocket\u652f\u6301\u591a\u79cd\u65b9\u5f0f\u7684\u9002\u914d\u5668\u4f7f\u7528\u3002\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u4f7f\u7528\u4e00\u81f4"),(0,r.kt)("h4",{id:"31-\u5728config\u914d\u7f6e\u4e2d\u4f7f\u7528"},"3.1 \u5728Config\u914d\u7f6e\u4e2d\u4f7f\u7528"),(0,r.kt)("p",null,"\u5728Config\u914d\u7f6e\u4f7f\u7528\u65f6\uff0c\u76f8\u5f53\u4e8e\u521d\u59cb\u5316\u8d4b\u503c\u3002\u6bd4\u8f83\u5355\u4e00\uff0c\u4f46\u662f\u5f88\u53ef\u9760\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},".SetDataHandlingAdapter(()=> { return new MyCustomBetweenAndDataHandlingAdapter(); })\n")),(0,r.kt)("h4",{id:"32-\u8ba2\u9605connecting\u76f8\u5173\u4e8b\u4ef6"},"3.2 \u8ba2\u9605Connecting\u76f8\u5173\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u53ea\u9700\u8981\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"OnConnecting"),"\u65b9\u6cd5\uff08\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"Connecting"),"\u4e8b\u4ef6\uff09\u4e2d\u5bf9\u65b0\u8fde\u63a5\u7684Client\uff0c\u8c03\u7528SetDataHandlingAdapter\u8fdb\u884c\u8d4b\u503c\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class MyTcpService : TcpService<MySocketClient>\n{\n    protected override void OnConnecting(MySocketClient socketClient, ClientOperationEventArgs e)\n    {\n        socketClient.SetDataHandlingAdapter(new NormalDataHandlingAdapter());//\u76f4\u63a5\u5bf9\u6570\u636e\u5904\u7406\u5668\u8d4b\u503c\uff0c\u7acb\u5373\u751f\u6548\n        base.OnConnecting(socketClient, e);\n    }\n}\n")),(0,r.kt)("h4",{id:"33-\u4f7f\u7528\u63d2\u4ef6\u4ee3\u66ffconnecting\u76f8\u5173\u4e8b\u4ef6\u5b9e\u73b0"},"3.3 \u4f7f\u7528\u63d2\u4ef6\uff0c\u4ee3\u66ffConnecting\u76f8\u5173\u4e8b\u4ef6\u5b9e\u73b0"),(0,r.kt)("p",null,"\u4f7f\u7528\u63d2\u4ef6\u5b9e\u73b0\u8be5\u529f\u80fd\uff0c\u5b9e\u9645\u4e0a\u548c\u6b65\u9aa42\u4e00\u6837\uff0c\u4f46\u662f\u56e0\u4e3a\u662f\u57fa\u4e8e\u63d2\u4ef6\uff0c\u6240\u4ee5\u66f4\u597d\u4e8e\u7ba1\u7406\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"class MyPlugin : TcpPluginBase\n{\n    protected override void OnConnecting(ITcpClientBase client, ClientOperationEventArgs e)\n    {\n        client.SetDataHandlingAdapter(new NormalDataHandlingAdapter());\n        base.OnConnecting(client, e);\n    }\n}\n")),(0,r.kt)("h4",{id:"34-\u4efb\u610f\u65f6\u523b\u8bbe\u7f6e"},"3.4 \u4efb\u610f\u65f6\u523b\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u5927\u5bb6\u53ef\u4ee5\u4ece\u6b65\u9aa42\u30013\u4e2d\u770b\u51fa\u6765\uff0c\u9002\u914d\u5668\u662f\u53ef\u4ee5\u88ab\u968f\u610f\u8d4b\u503c\u7684\uff0c\u8fd9\u4e5f\u5c31\u8bf4\u660e\uff0c\u9002\u914d\u5668\u662f\u53ef\u4ee5\u968f\u65f6\u88ab\u66ff\u6362\u7684\u3002\u90a3\u4e48\u4e5f\u5c31\u53ef\u4ee5\u88ab\u968f\u65f6\u8d4b\u503c\u4e86\u3002"),(0,r.kt)("h2",{id:"\u56dbudp\u4f7f\u7528\u63d2\u4ef6"},"\u56db\u3001UDP\u4f7f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"Udp\u4f7f\u7528\u7684\u63d2\u4ef6\uff0c\u53ea\u80fd\u4eceConfig\u914d\u7f6e\u3002\n\u3010",(0,r.kt)("strong",{parentName:"p"},"UdpSession"),"\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"}," m_udpSession.Setup(new TouchSocketConfig()\n      .SetBindIPHost(new IPHost(this.textBox2.Text))\n      .SetUdpDataHandlingAdapter(()=> \n      {\n          return new NormalUdpDataHandlingAdapter();\n      })\n      .ConfigureContainer(a =>\n      {\n          a.SetSingletonLogger(new LoggerGroup(new EasyLogger(this.ShowMsg), new FileLogger()));\n      }))\n      .Start();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u6ce8\u610f\uff1a"),"\u540c\u4e00\u4e2a\u9002\u914d\u5668\u5b9e\u4f8b\uff0c\u53ea\u53ef\u88ab\u8d4b\u503c\u4e00\u6b21\uff0c\u4e0d\u7136\u4f1a\u5f02\u5e38\u3002",(0,r.kt)("em",{parentName:"strong"},"\u5982\u679c\u5728\u6784\u9020\u51fd\u6570\uff08\u6216\u5176\u4ed6\u4e00\u6b21\u6027\u51fd\u6570\uff09\u4e2d\u8bbe\u7f6e\u9002\u914d\u5668\u7684\u8bdd\uff0c\u5728\u91cd\u8fde\u65f6\uff0c\u6700\u597d\u91cd\u65b0\u8bbe\u7f6e\u9002\u914d\u5668\uff0c\u56e0\u4e3a\u6846\u67b6\u5728Disconnected\u65f6\u4f1a\u7f6e\u7a7a\u9002\u914d\u5668\uff0c\u540c\u65f6\u5728Connecting\u6267\u884c\u5b8c\u540e\u4f1a\u68c0\u6d4b\u9002\u914d\u5668\uff0c\u5982\u679c\u6ca1\u6709\u518d\u6b21\u8bbe\u7f6e\u9002\u914d\u5668\u7684\u8bdd\uff0c\u4f1a\u9009\u62e9\u9ed8\u8ba4\u9002\u914d\u5668\uff08TcpClient\u4f1a\u9009\u62e9\u666e\u901a\u9002\u914d\u5668\uff0cProtocol\u53ca\u6d3e\u751f\u4f1a\u9009\u62e9\u56fa\u5b9a\u5305\u5934\u9002\u914d\u5668\uff09\u3002"))),(0,r.kt)("h2",{id:"\u4e94\u9650\u5236\u4f7f\u7528"},"\u4e94\u3001\u9650\u5236\u4f7f\u7528"),(0,r.kt)("p",null,"\u9650\u5236\u4f7f\u7528\u7684\u573a\u666f\u5e94\u7528\u4e8e\u81ea\u5b9a\u4e49\u5c01\u88c5\u3002\u4f8b\u5982\uff1a\u81ea\u5df1\u5c01\u88c5\u4e00\u4e2a\u670d\u52a1\u5668\uff0c\u7136\u540e\u9002\u914d\u5668\u4ec5",(0,r.kt)("strong",{parentName:"p"},"\u7279\u5b9a\u4f7f\u7528"),"\uff0c\u4e0d\u5141\u8bb8\u5916\u90e8\u968f\u610f\u8d4b\u503c\uff0c\u90a3\u4e48\u53ef\u4ee5\u5982\u4e0b\u5b9e\u73b0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class MySocketClient : SocketClient\n{\n    /// <summary>\n    /// <inheritdoc/>\n    /// </summary>\n    public override sealed bool CanSetDataHandlingAdapter => false;//\u4e0d\u5141\u8bb8\u968f\u610f\u8d4b\u503c\n    \n    private void InternalSetAdapter(DataHandlingAdapter adapter)\n    {\n        this.SetAdapter(adapter);//\u4ec5\u7ee7\u627f\u5185\u90e8\u8d4b\u503c\n    }\n}\n")),(0,r.kt)("h2",{id:"\u516d\u7f13\u5b58\u8d85\u65f6\u4ec5tcp\u9002\u914d\u5668"},"\u516d\u3001\u7f13\u5b58\u8d85\u65f6\uff08\u4ec5Tcp\u9002\u914d\u5668\uff09"),(0,r.kt)("p",null,"\u5f53\u9002\u914d\u5668\u5728\u5de5\u4f5c\u65f6\uff0c\u5982\u679c\u4e00\u4e2a\u6570\u636e\u5305\u5728\u8bbe\u7f6e\u7684\u5468\u671f\u5185\uff08\u9ed8\u8ba41000ms\uff09\u6ca1\u6709\u5b8c\u6210\u63a5\u6536\uff0c\u5219\u4f1a\u6e05\u7a7a\u6240\u6709\u7f13\u5b58\u6570\u636e\uff0c\u7136\u540e\u91cd\u65b0\u63a5\u6536\u3002\n\u8fd9\u79cd\u8bbe\u8ba1\u662f\u4e3a\u4e86\u5e94\u5bf9\uff0c\u5f53\u63a5\u6536\u6570\u636e\u65f6\uff0c\u5982\u679c\u53d1\u9001\u65b9\u53d1\u9001\u4e86\u5f02\u5e38\u6570\u636e\uff08\u4e5f\u6709\u53ef\u80fd\u5728\u79fb\u52a8\u7f51\u65f6\uff0c\u7531\u8fd0\u8425\u5546\u53d1\u9001\u7684\u65e0\u6548\u5305\uff09\u800c\u5bfc\u81f4\u6574\u4e2a\u63a5\u6536\u961f\u5217\u6570\u636e\u65e0\u6548\u7684\u95ee\u9898\u3002\n\u73b0\u5728\u52a0\u5165\u7f13\u5b58\u8d85\u65f6\u8bbe\u7f6e\uff0c\u5219\u5982\u679c\u53d1\u9001\u4e0a\u8ff0\u60c5\u51b5\uff0c\u4e5f\u4f1a\u5728\u4e00\u4e2a\u5468\u671f\u540e\uff0c\u5feb\u901f\u6062\u590d\u63a5\u6536\u3002"),(0,r.kt)("p",null,"\u76f8\u5173\u5c5e\u6027\u8bbe\u7f6e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CacheTimeoutEnable\uff1a\u662f\u5426\u542f\u7528\u7f13\u5b58\u8d85\u65f6\u3002"),(0,r.kt)("li",{parentName:"ul"},"CacheTimeout\uff1a\u7f13\u5b58\u8d85\u65f6\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},"UpdateCacheTimeWhenRev\uff1a\u662f\u5426\u6bcf\u6b21\u63a5\u6536\u5c31\u66f4\u65b0\u7f13\u5b58\u65f6\u95f4\u3002\u9ed8\u8ba4true\uff0c\u610f\u5473\u7740\u53ea\u8981\u6709\u6570\u636e\u63a5\u6536\uff0c\u5219\u7f13\u5b58\u6c38\u8fdc\u4e0d\u4f1a\u8fc7\u671f\u3002\u5f53\u4e3afalse\u65f6\uff0c\u5219\u6bcf\u4e2a\u7f13\u5b58\u5305\uff0c\u5fc5\u987b\u5728\u8bbe\u7f6e\u7684\u5468\u671f\u5185\u5b8c\u6210\u63a5\u6536\u3002")))}u.isMDXComponent=!0}}]);