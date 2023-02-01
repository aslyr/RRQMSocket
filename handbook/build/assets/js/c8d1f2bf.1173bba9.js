"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[8032],{3905:(e,n,o)=>{o.d(n,{Zo:()=>p,kt:()=>u});var t=o(7294);function g(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){g(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,t,g=function(e,n){if(null==e)return{};var o,t,g={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(g[o]=e[o]);return g}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(g[o]=e[o])}return g}var l=t.createContext({}),s=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):c(c({},n),e)),o},p=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},a={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var o=e.components,g=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=s(o),u=g,L=y["".concat(l,".").concat(u)]||y[u]||a[u]||r;return o?t.createElement(L,c(c({ref:n},p),{},{components:o})):t.createElement(L,c({ref:n},p))}));function u(e,n){var o=arguments,g=n&&n.mdxType;if("string"==typeof e||g){var r=o.length,c=new Array(r);c[0]=y;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:g,c[1]=i;for(var s=2;s<r;s++)c[s]=o[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,o)}y.displayName="MDXCreateElement"},4139:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var t=o(7462),g=(o(7294),o(3905));const r={id:"ioc",title:"\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668"},c=void 0,i={unversionedId:"ioc",id:"ioc",title:"\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/ioc.mdx",sourceDirName:".",slug:"/ioc",permalink:"/touchsocket/docs/ioc",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/ioc.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675229490,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{id:"ioc",title:"\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668"},sidebar:"docs",previous:{title:"Json\u5e8f\u5217\u5316",permalink:"/touchsocket/docs/jsonserialize"},next:{title:"\u4f9d\u8d56\u5c5e\u6027",permalink:"/touchsocket/docs/dependencyproperty"}},l={},s=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u7279\u70b9",id:"\u4e8c\u7279\u70b9",level:2},{value:"\u4e09\u3001\u6ce8\u5165\u65b9\u5f0f",id:"\u4e09\u6ce8\u5165\u65b9\u5f0f",level:2},{value:"3.1 \u6784\u9020\u51fd\u6570\u6ce8\u5165",id:"31-\u6784\u9020\u51fd\u6570\u6ce8\u5165",level:4},{value:"3.2 \u5c5e\u6027\u6ce8\u5165",id:"32-\u5c5e\u6027\u6ce8\u5165",level:4},{value:"3.2 \u65b9\u6cd5\u6ce8\u5165",id:"32-\u65b9\u6cd5\u6ce8\u5165",level:4},{value:"\u56db\u3001\u751f\u547d\u5468\u671f",id:"\u56db\u751f\u547d\u5468\u671f",level:2},{value:"\u6240\u6709\u6a21\u578b\u5b9a\u4e49",id:"\u6240\u6709\u6a21\u578b\u5b9a\u4e49",level:2}],p={toc:s};function a(e){let{components:n,...o}=e;return(0,g.kt)("wrapper",(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,g.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,g.kt)("p",null,"\u6240\u8c13\u4f9d\u8d56\u6ce8\u5165\uff0c\u662f\u6307\u7a0b\u5e8f\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u9700\u8981\u8c03\u7528\u53e6\u4e00\u4e2a\u5bf9\u8c61\u534f\u52a9\u65f6\uff0c\u65e0\u987b\u5728\u4ee3\u7801\u4e2d\u521b\u5efa\u88ab\u8c03\u7528\u8005\uff0c\u800c\u662f\u4f9d\u8d56\u4e8e\u5916\u90e8\u7684\u6ce8\u5165\u3002\u901a\u4fd7\u6765\u8bb2\uff0c\u5c31\u662f\u628a\u6709\u4f9d\u8d56\u5173\u7cfb\u7684\u7c7b\u653e\u5230\u5bb9\u5668\u4e2d\uff0c\u7136\u540e\u5728\u6211\u4eec\u9700\u8981\u8fd9\u4e9b\u7c7b\u65f6\uff0c\u5bb9\u5668\u81ea\u52a8\u89e3\u6790\u51fa\u8fd9\u4e9b\u7c7b\u7684\u5b9e\u4f8b\u3002\u4f9d\u8d56\u6ce8\u5165\u6700\u5927\u7684\u597d\u5904\u65f6\u5b9e\u73b0\u7c7b\u7684\u89e3\u8026\uff0c\u5229\u4e8e\u7a0b\u5e8f\u62d3\u5c55\u3001\u5355\u5143\u6d4b\u8bd5\u3001\u81ea\u52a8\u5316\u6a21\u62df\u6d4b\u8bd5\u7b49\u3002\u4f9d\u8d56\u6ce8\u5165\u7684\u82f1\u6587\u4e3a\uff1aDependency Injection\uff0c\u7b80\u79f0 DI\u3002\uff08\u8bf4\u660e\u6765\u81ea\u7f51\u7edc\uff09"),(0,g.kt)("p",null,"TouchSocket\u5185\u7f6e\u4e86",(0,g.kt)("strong",{parentName:"p"},(0,g.kt)("em",{parentName:"strong"},"Container")),"\u5bb9\u5668\u3002\u53ea\u9700\u8981\u5f15\u5165TouchSocket.Core\u5373\u53ef\u4f7f\u7528\u3002"),(0,g.kt)("h2",{id:"\u4e8c\u7279\u70b9"},"\u4e8c\u3001\u7279\u70b9"),(0,g.kt)("ul",null,(0,g.kt)("li",{parentName:"ul"},"\u652f\u6301\u6784\u9020\u51fd\u6570\u3001\u5c5e\u6027\u3001\u65b9\u6cd5\u4e09\u79cd\u6ce8\u5165\u65b9\u5f0f\uff0c\u53ef\u4ee5\u9009\u62e9\u5176\u4e2d\u90e8\u5206\u751f\u6548\u3002"),(0,g.kt)("li",{parentName:"ul"},"\u652f\u6301 Singleton\u3001Scoped\u3001Transient\u4e09\u79cd\u751f\u547d\u5468\u671f\u3002"),(0,g.kt)("li",{parentName:"ul"},"\u652f\u6301\u5355\u63a5\u53e3\uff0c\u591a\u5b9e\u73b0\u6ce8\u5165\u3002"),(0,g.kt)("li",{parentName:"ul"},"\u652f\u6301\u5f53\u83b7\u53d6\u7c7b\u578b\u662f\u53ef\u5b9e\u4f8b\u7c7b\u578b\u65f6\uff0c\u5373\u4f7f\u4e0d\u6ce8\u518c\uff0c\u4e5f\u80fd\u6210\u529f\u6784\u9020\u3002"),(0,g.kt)("li",{parentName:"ul"},"\u652f\u6301\u9ed8\u8ba4\u53c2\u6570\u6ce8\u5165\u3002"),(0,g.kt)("li",{parentName:"ul"},"\u652f\u6301\u6784\u5efa\u53c2\u6570\u6ce8\u5165\u3002"),(0,g.kt)("li",{parentName:"ul"},"\u652f\u6301\u6807\u7b7e\u53c2\u6570\u6ce8\u5165\u3002"),(0,g.kt)("li",{parentName:"ul"},"\u652f\u6301\u6cdb\u578b\u6ce8\u5165\u3002"),(0,g.kt)("li",{parentName:"ul"},"\u652f\u6301Object\u6ce8\u5165\u3002")),(0,g.kt)("h2",{id:"\u4e09\u6ce8\u5165\u65b9\u5f0f"},"\u4e09\u3001\u6ce8\u5165\u65b9\u5f0f"),(0,g.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a\u7c7b\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f1a\u652f\u6301\u6784\u9020\u51fd\u6570\u3001\u5c5e\u6027\u3001\u65b9\u6cd5\u4e09\u79cd\u6ce8\u5165\u65b9\u5f0f\u3002\u4f46\u662f\uff0c\u5f53\u660e\u786e\u77e5\u9053\u8be5\u7c7b\u578b\u4ec5\u4f1a\u4f7f\u7528\u5176\u4e2d\u90e8\u5206\u65b9\u5f0f\u6ce8\u5165\u65f6\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u6ce8\u5165\u7c7b\u578b\uff0c\u4ee5\u6b64\u8282\u7ea6\u6027\u80fd\u3002\n",(0,g.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/25438888/1655695330593-c974d0a6-8c8b-4279-b1e0-7e012bed7dfd.png#clientId=u0d2b3083-5d77-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=121&id=u6c4a0fc0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=121&originWidth=856&originalType=binary&ratio=1&rotation=0&showTitle=false&size=96952&status=done&style=none&taskId=u9f41967d-75c8-4d54-bed0-acaaa4a4715&title=&width=856",alt:"image.png"})),(0,g.kt)("h4",{id:"31-\u6784\u9020\u51fd\u6570\u6ce8\u5165"},"3.1 \u6784\u9020\u51fd\u6570\u6ce8\u5165"),(0,g.kt)("p",null,"\u5176\u4e2dMyLog1\uff0cMyLog2\u867d\u7136\u6ca1\u6709\u6ce8\u518c\uff0c\u4f46\u662f\u56e0\u4e3a\u662f\u5b9e\u4f8b\uff0c\u6240\u4ee5\u4f9d\u7136\u53ef\u4ee5\u6210\u529f\u6784\u9020\u3002"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-csharp"},"[Fact]\npublic void CtorShouldBeOk()\n{\n    Container container = new Container();\n    container.RegisterTransient<ILog, MyLog3>();\n\n    var log3 = container.Resolve<ILog>() as MyLog3;\n\n    Assert.NotNull(log3.MyLog1);\n    Assert.NotNull(log3.MyLog2);\n}\n")),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-csharp"},"public class MyLog3 : ILog\n{\n    public MyLog3(MyLog1 myLog1, MyLog2 myLog2)\n        {\n            this.MyLog1 = myLog1;\n            this.MyLog2 = myLog2;\n        }\n\n    public MyLog1 MyLog1 { get; }\n    public MyLog2 MyLog2 { get; }\n\n    public void Debug(LogType logType, object source, string message, Exception exception)\n        {\n\n        }\n\n    public void Debug(LogType logType, object source, string message)\n        {\n\n        }\n}\n")),(0,g.kt)("h4",{id:"32-\u5c5e\u6027\u6ce8\u5165"},"3.2 \u5c5e\u6027\u6ce8\u5165"),(0,g.kt)("p",null,"\u4f7f\u7528",(0,g.kt)("strong",{parentName:"p"},"DependencyParamterInject"),"\uff0c\u6216\u8005",(0,g.kt)("strong",{parentName:"p"},"DependencyInject"),"\u6807\u8bb0\u5c5e\u6027\uff0c\u5373\u53ef\u6ce8\u5165\u3002"),(0,g.kt)("p",null,"\u793a\u4f8b\u4e2d\u4f7f\u7528\u7684\u662f\u5355\u63a5\u53e3\u591a\u5b9e\u73b0\uff0c\u6240\u4ee5\u4f7f\u7528",(0,g.kt)("strong",{parentName:"p"},"DependencyParamterInject"),"\u6807\u8bb0\u3002"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-csharp"},'[Fact]\npublic void PropertyShouldBeOk()\n{\n    Container container = new Container();\n    container.RegisterTransient<ILog, MyLog1>("MyLog1");\n    container.RegisterTransient<ILog, MyLog2>("MyLog2");\n    container.RegisterTransient<ILog, MyLog3>("MyLog3");\n    container.RegisterTransient<ILog, MyLog5>();\n\n    var log5 = container.Resolve<ILog>() as MyLog5;\n\n    Assert.NotNull(log5.MyLog1);\n    Assert.NotNull(log5.MyLog2);\n    Assert.True(log5.MyLog1.GetType() == typeof(MyLog1));\n    Assert.True(log5.MyLog2.GetType() == typeof(MyLog2));\n}\n\n')),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-csharp"},'public class MyLog5 : ILog\n{\n    [DependencyParamterInject("MyLog1")]\n    public ILog MyLog1 { get; set; }\n\n    [DependencyParamterInject("MyLog2")]\n    public ILog MyLog2 { get; set; }\n\n    public void Debug(LogType logType, object source, string message, Exception exception)\n        {\n\n        }\n\n    public void Debug(LogType logType, object source, string message)\n        {\n\n        }\n}\n')),(0,g.kt)("h4",{id:"32-\u65b9\u6cd5\u6ce8\u5165"},"3.2 \u65b9\u6cd5\u6ce8\u5165"),(0,g.kt)("p",null,"\u4f7f\u7528",(0,g.kt)("strong",{parentName:"p"},"DependencyInject"),"\u6807\u8bb0\u5c5e\u6027\uff0c\u5373\u53ef\u5bf9\u65b9\u6cd5\u6ce8\u5165\u3002"),(0,g.kt)("p",null,'\u540c\u65f6\uff0c\u793a\u4f8b\u4e2d\u6f14\u793a\u4e86\u9ed8\u8ba4\u53c2\u6570\u8bbe\u5b9a\u3002\u5728\u521d\u59cb\u5316MyLog6\u540e\uff0cA=10\uff0cB="TouchSocket"\u3002'),(0,g.kt)("p",null,"\u540c\u65f6\uff0c\u8fd8\u80fd\u5d4c\u5957MyLog1\u548cMyLog4\u7684\u540c\u4e00\u63a5\u53e3\u7684\u4e0d\u540c\u5b9e\u73b0\uff0c\u548c\u5b9e\u73b0\u7684\u9ed8\u8ba4\u53c2\u6570\u6784\u9020\u3002"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-csharp"},'[Fact]\npublic void MethodShouldBeOk()\n{\n    Container container = new Container();\n    container.RegisterTransient<ILog, MyLog1>("MyLog1");\n    container.RegisterTransient<ILog, MyLog2>("MyLog2");\n    container.RegisterTransient<ILog, MyLog3>("MyLog3");\n    container.RegisterTransient<ILog, MyLog4>("MyLog4");\n    container.RegisterTransient<ILog, MyLog6>("MyLog5");\n    container.RegisterTransient<ILog, MyLog6>();\n\n    var log6 = container.Resolve<ILog>() as MyLog6;\n\n    Assert.NotNull(log6.MyLog1);\n    Assert.NotNull(log6.MyLog4);\n    Assert.True(log6.MyLog1.GetType() == typeof(MyLog1));\n    Assert.True(log6.MyLog4.GetType() == typeof(MyLog4));\n    Assert.True(((MyLog4)log6.MyLog4).A == 20);\n    Assert.True(((MyLog4)log6.MyLog4).B == "IOU");\n}\n')),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-csharp"},'public class MyLog6 : ILog\n{\n    [DependencyInject(10, "TouchSocket")]\n    public void DependencyMethod(int a, string b, [DependencyParamterInject("MyLog1")] ILog myLog1, [DependencyParamterInject("MyLog4", 20, "IOU")] ILog myLog4)\n    {\n        this.A = a;\n        this.B = b;\n        this.MyLog1 = myLog1;\n        this.MyLog4 = myLog4;\n    }\n\n    public int A { get; set; }\n    public string B { get; set; }\n    public ILog MyLog1 { get; set; }\n    public ILog MyLog4 { get; set; }\n\n    public void Debug(LogType logType, object source, string message, Exception exception)\n        {\n\n        }\n\n    public void Debug(LogType logType, object source, string message)\n        {\n\n        }\n}\n')),(0,g.kt)("p",null,"Object\u6ce8\u5165"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-csharp"},'[Fact]\npublic void ObjectSingletonShouldBeOk()\n{\n    Container container = new Container();\n    container.RegisterSingleton<ILog, MyLog1>();\n    container.RegisterSingleton<ILog, MyLog10>("10");\n\n    var log10 = container.Resolve<ILog>("10") as MyLog10;\n    Assert.NotNull(log10);\n    Assert.NotNull(log10.MyLog1);\n    Assert.True(log10.MyLog1.GetType() == typeof(MyLog1));\n}\n')),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-csharp"},"public class MyLog10 : ILog\n{\n    [DependencyParamterInject(typeof(ILog))]\n    public object MyLog1 { get; set; }\n\n\n    public void Debug(LogType logType, object source, string message, Exception exception)\n    {\n\n    }\n\n    public void Debug(LogType logType, object source, string message)\n    {\n\n    }\n}\n")),(0,g.kt)("h2",{id:"\u56db\u751f\u547d\u5468\u671f"},"\u56db\u3001\u751f\u547d\u5468\u671f"),(0,g.kt)("p",null,"\u751f\u547d\u5468\u671f\u662f\u5bf9\u6ce8\u5165\u6784\u9020\u7684\u5b9e\u4f8b\u7684\u6709\u6548\u6027\u800c\u8a00\u7684\u3002TouchSocket\u652f\u6301\u4e09\u79cd\u751f\u547d\u5468\u671f\u3002"),(0,g.kt)("ul",null,(0,g.kt)("li",{parentName:"ul"},"Singleton\uff1a\u5355\u4f8b\u6ce8\u5165\uff0c\u5f53\u6ce8\u5165\uff0c\u5e76\u4e14\u5b9e\u4f8b\u5316\u4ee5\u540e\uff0c\u5168\u5c40\u552f\u4e00\u5b9e\u4f8b\u3002"),(0,g.kt)("li",{parentName:"ul"},"Transient\uff1a\u77ac\u65f6\u6ce8\u5165\uff0c\u6bcf\u6b21\u83b7\u53d6\u7684\u5b9e\u4f8b\u90fd\u662f\u65b0\u5b9e\u4f8b\u3002"),(0,g.kt)("li",{parentName:"ul"},"Scoped\uff1a\u533a\u57df\u5355\u4f8b\u6ce8\u5165\uff0c\u5f53\u5728\u4e00\u4e2aIScopedContainer\u65f6\uff0c\u5b9e\u4f8b\u552f\u4e00\u3002")),(0,g.kt)("p",null,"\u5bf9\u4e8e\u524d\u4e24\u79cd\uff0c\u719f\u6089IOC\u7684\u540c\u5b66\uff0c\u76f8\u4fe1\u90fd\u77e5\u9053\u5230\u3002\u90a3\u63a5\u4e0b\u6765\u5c31\u6f14\u793a\u4e00\u4e0bScoped\u3002"),(0,g.kt)("p",null,"\u5b9e\u9645\u4e0a\u4f7f\u7528Scoped\u65f6\uff0c\u5f97\u5148\u660e\u786e\u533a\u57df\uff0c\u4e5f\u5c31\u662f\u521b\u5efa\u4e00\u4e2aIScopedContainer\u7684\u533a\u57df\u5bb9\u5668\uff08\u7c7b\u4f3cAps.net\u7684IServiceProvider\uff09\u3002\u7136\u540e\u540e\u7eed\u5b9e\u4f8b\u4eceIScopedContainer\u83b7\u5f97\u5373\u53ef\u3002"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-csharp"},"[Fact]\npublic void ScopedShouldBeOk()\n{\n    Container container = new Container();\n    container.RegisterScoped<ILog, MyLog1>();\n\n    var log1 = container.Resolve<ILog>();\n    var log2 = container.Resolve<ILog>();\n    Assert.NotNull(log1);\n    Assert.False(log1 == log2);\n\n    IScopedContainer scopedContainer = container.Resolve<IScopedContainer>();\n    log1 = scopedContainer.Resolve<ILog>();\n    log2 = scopedContainer.Resolve<ILog>();\n    Assert.NotNull(log1);\n    Assert.True(log1 == log2);\n}\n")),(0,g.kt)("h2",{id:"\u6240\u6709\u6a21\u578b\u5b9a\u4e49"},"\u6240\u6709\u6a21\u578b\u5b9a\u4e49"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-csharp"},'public interface IGeneric<T1, T2>\n{\n}\n\npublic class Generic<T1, T2> : IGeneric<T1, T2>\n{\n\n}\n\n\n\npublic class MyLog1 : ILog\n{\n    public void Debug(LogType logType, object source, string message, Exception exception)\n        {\n\n        }\n\n    public void Debug(LogType logType, object source, string message)\n        {\n\n        }\n}\npublic class MyLog2 : ILog\n{\n    public void Debug(LogType logType, object source, string message, Exception exception)\n        {\n\n        }\n\n    public void Debug(LogType logType, object source, string message)\n        {\n\n        }\n}\n\npublic class MyLog3 : ILog\n{\n    public MyLog3(MyLog1 myLog1, MyLog2 myLog2)\n        {\n            this.MyLog1 = myLog1;\n            this.MyLog2 = myLog2;\n        }\n\n    public MyLog1 MyLog1 { get; }\n    public MyLog2 MyLog2 { get; }\n\n    public void Debug(LogType logType, object source, string message, Exception exception)\n        {\n\n        }\n\n    public void Debug(LogType logType, object source, string message)\n        {\n\n        }\n}\n\npublic class MyLog4 : ILog\n{\n    [DependencyInject(10, "TouchSocket")]\n    public MyLog4(int a, string b, MyLog1 myLog1, MyLog2 myLog2)\n        {\n            this.A = a;\n            this.B = b;\n            this.MyLog1 = myLog1;\n            this.MyLog2 = myLog2;\n        }\n\n    public int A { get; }\n    public string B { get; }\n    public MyLog1 MyLog1 { get; }\n    public MyLog2 MyLog2 { get; }\n\n    public void Debug(LogType logType, object source, string message, Exception exception)\n        {\n\n        }\n\n    public void Debug(LogType logType, object source, string message)\n        {\n\n        }\n}\n\npublic class MyLog5 : ILog\n{\n    [DependencyParamterInject("MyLog1")]\n    public ILog MyLog1 { get; set; }\n\n    [DependencyParamterInject("MyLog2")]\n    public ILog MyLog2 { get; set; }\n\n    public void Debug(LogType logType, object source, string message, Exception exception)\n        {\n\n        }\n\n    public void Debug(LogType logType, object source, string message)\n        {\n\n        }\n}\n\npublic class MyLog6 : ILog\n{\n    [DependencyInject(10, "TouchSocket")]\n    public void DependencyMethod(int a, string b, [DependencyParamterInject("MyLog1")] ILog myLog1, [DependencyParamterInject("MyLog4", 20, "IOU")] ILog myLog4)\n        {\n            this.A = a;\n            this.B = b;\n            this.MyLog1 = myLog1;\n            this.MyLog4 = myLog4;\n        }\n\n    public int A { get; set; }\n    public string B { get; set; }\n    public ILog MyLog1 { get; set; }\n    public ILog MyLog4 { get; set; }\n\n    public void Debug(LogType logType, object source, string message, Exception exception)\n        {\n\n        }\n\n    public void Debug(LogType logType, object source, string message)\n        {\n\n        }\n}\n\npublic class MyLog7 : ILog\n{\n    public MyLog7(IGeneric<ILog, MyLog2> generic)\n    {\n        this.Generic = generic;\n    }\n\n    public IGeneric<ILog, MyLog2> Generic { get; }\n\n    public void Debug(LogType logType, object source, string message, Exception exception)\n    {\n\n    }\n\n    public void Debug(LogType logType, object source, string message)\n    {\n\n    }\n}\n\n[DependencyType(DependencyType.Constructor)]\npublic class MyLog8 : ILog\n{\n    [DependencyInject(10, "RRQM")]\n    public void DependencyMethod(int a, string b, [DependencyParamterInject("MyLog1")] ILog myLog1, [DependencyParamterInject("MyLog4", 20, "IOU")] ILog myLog4)\n    {\n        this.A = a;\n        this.B = b;\n        this.MyLog1 = myLog1;\n        this.MyLog4 = myLog4;\n    }\n\n    public int A { get; set; }\n    public string B { get; set; }\n    public ILog MyLog1 { get; set; }\n    public ILog MyLog4 { get; set; }\n\n    public void Debug(LogType logType, object source, string message, Exception exception)\n    {\n\n    }\n\n    public void Debug(LogType logType, object source, string message)\n    {\n\n    }\n}\n\n[DependencyType(DependencyType.Constructor | DependencyType.Method)]\npublic class MyLog9 : ILog\n{\n    [DependencyInject(10, "RRQM")]\n    public void DependencyMethod(int a, string b, [DependencyParamterInject("MyLog1")] ILog myLog1, [DependencyParamterInject("MyLog4", 20, "IOU")] ILog myLog4)\n    {\n        this.A = a;\n        this.B = b;\n        this.MyLog1 = myLog1;\n        this.MyLog4 = myLog4;\n    }\n\n    public int A { get; set; }\n    public string B { get; set; }\n    public ILog MyLog1 { get; set; }\n    public ILog MyLog4 { get; set; }\n\n    public void Debug(LogType logType, object source, string message, Exception exception)\n    {\n\n    }\n\n    public void Debug(LogType logType, object source, string message)\n    {\n\n    }\n}\n')))}a.isMDXComponent=!0}}]);