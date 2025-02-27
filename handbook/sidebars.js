// /**
//  * Creating a sidebar enables you to:
//  - create an ordered group of docs
//  - render a sidebar for each doc of that group
//  - provide next/previous navigation

//  The sidebars can be generated from the filesystem, or explicitly defined here.

//  Create as many sidebars as you want.
//  */

// // @ts-check

// /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
// const sidebars = {
//   // By default, Docusaurus generates a sidebar from the docs folder structure
//   tutorialSidebar: [{ type: "autogenerated",dirName: "." }],

//   // But you can create a sidebar manually
//   /*
//   tutorialSidebar: [
//     'intro',
//     'hello',
//     {
//       type: 'category',
//       label: 'Tutorial',
//       items: ['tutorial-basics/create-a-document'],
//     },
//   ],
//    */
// };

// module.exports = sidebars;


module.exports = {
  docs: [
    {
      type: "doc",
      id: "description",
      label: "01、说明（使用前必要阅读）"
    },
    {
      type: "doc",
      id: "upgrade",
      label: "02、历史更新"
    },
    {
      type: "category",
      label: "03、支持作者及商业运营",
      items: [
        {
          type: "doc",
          id: "donate",
          label: "3.1 支持作者"
        },
        {
          type: "doc",
          id: "enterprise",
          label: "3.2 企业版相关"
        },
        {
          type: "category",
          label: "3.3 商业项目",
          items: [
            {
              type: "doc",
              id: "cooperation",
              label: "a.商业合作"
            },
            {
              type: "doc",
              id: "wpfuifiletransfer",
              label: "b.WPF界面、文件传输项目"
            },
            {
              type: "doc",
              id: "remotemonitoring",
              label: "c.远程监测、控制项目"
            },
            {
              type: "doc",
              id: "filesynchronization",
              label: "d.文件同步系统"
            },
            {
              type: "doc",
              id: "dataforwarding",
              label: "e.数据转发项目"
            },
            {
              type: "doc",
              id: "webdataforwarding",
              label: "f.Web数据转发Winform项目"
            },
          ],
        },
        {
          type: "category",
          label: "3.4 使用者项目",
          items: [
            {
              type: "doc",
              id: "fpsgame",
              label: "a.FPS实时游戏"
            },
            {
              type: "doc",
              id: "engineertoolbox",
              label: "b.工程师软件工具箱"
            }
          ],
        }
      ],
    },
    {
      type: "doc",
      id:"startguide",
      label: "04、入门指南",
    },
    {
      type: "category",
      label: "05、Core",
      items:
        [
          {
            type: "doc",
            id: "bytepool",
            label: "5.1 内存池"
          },
          {
            type: "doc",
            id: "consoleaction",
            label: "5.2 控制台行为"
          },
          {
            type: "doc",
            id: "touchsocketbitconverter",
            label: "5.3 大小端转换器"
          },
          {
            type: "doc",
            id: "datasecurity",
            label: "5.4 数据加密"
          },
          {
            type: "doc",
            id: "ilog",
            label: "5.5 日志记录器"
          },
          {
            type: "doc",
            id: "appmessenger",
            label: "5.6 应用信使"
          },
          {
            type: "doc",
            id: "fastbinaryformatter",
            label: "5.7 高性能二进制序列化"
          },
          {
            type: "doc",
            id: "jsonserialize",
            label: "5.8 Json序列化"
          },
          {
            type: "doc",
            id: "ioc",
            label: "5.9 依赖注入容器"
          },
          {
            type: "doc",
            id: "dependencyproperty",
            label: "5.10 依赖属性"
          },
          {
            type: "doc",
            id: "filepool",
            label: "5.11 文件流池"
          },
          {
            type: "doc",
            id: "pluginsmanager",
            label: "5.12 插件系统"
          },
          {
            type: "doc",
            id: "ipackage",
            label: "5.13 包序列化模式"
          },
          {
            type: "doc",
            id: "othercore",
            label: "5.14 其他相关功能类"
          },
        ]
    },
    {
      type: "category",
      label: "06、Tcp组件",
      items:
        [
          {
            type: "doc",
            id: "tcpintroduction",
            label: "6.1 Tcp入门基础"
          },
          {
            type: "doc",
            id: "createtcpservice",
            label: "6.2 创建TcpService"
          },
          {
            type: "doc",
            id: "createtcpclient",
            label: "6.3 创建TcpClient"
          },
          {
            type: "doc",
            id: "waitingclient",
            label: "6.4 同步请求"
          },
          {
            type: "doc",
            id: "natservice",
            label: "6.5 Tcp端口转发"
          },
          {
            type: "doc",
            id: "resetid",
            label: "6.6 服务器重置ID"
          },
          {
            type: "doc",
            id: "reconnection",
            label: "6.7 断线重连"
          },
          {
            type: "doc",
            id: "tcpcommandlineplugin",
            label: "6.8 命令行执行插件"
          },
          {
            type: "doc",
            id: "heartbeat",
            label: "6.9 心跳设计"
          },
          {
            type: "doc",
            id: "tcpother",
            label: "6.10 其他场景应用"
          },
        ]
    },
    {
      type: "category",
      label: "07、Udp组件",
      items:
        [
          {
            type: "doc",
            id: "createudpsession",
            label: "7.1 创建UdpSession"
          },
          {
            type: "doc",
            id: "udptransmitbigdata",
            label: "7.2 传输大于64K的数据"
          },
          {
            type: "doc",
            id: "udpbroadcast",
            label: "7.3 组播、广播"
          },
        ]
    },
    {
      type: "category",
      label: "08、数据处理适配器",
      items:
        [
          {
            type: "doc",
            id: "adapterdescription",
            label: "8.1 介绍及使用"
          },
          {
            type: "category",
            label: "8.2 Tcp适配器",
            items:
              [
                {
                  type: "doc",
                  id: "normaldatahandlingadapter",
                  label: "a.正常数据处理适配器"
                },
                {
                  type: "doc",
                  id: "fixedheaderpackageadapter",
                  label: "b.固定包头数据处理适配器"
                },
                {
                  type: "doc",
                  id: "fixedsizepackageadapter",
                  label: "c.固定长度数据处理适配器"
                },
                {
                  type: "doc",
                  id: "terminatorpackageadapter",
                  label: "d.终止因子数据处理适配器"
                },
                {
                  type: "doc",
                  id: "datahandleadapter",
                  label: "e.原始自定义适配器"
                },
                {
                  type: "doc",
                  id: "customdatahandlingadapter",
                  label: "f.用户自定义适配器"
                },
                {
                  type: "doc",
                  id: "customfixedheaderdatahandlingadapter",
                  label: "g.模板解析固定包头适配器"
                },
                {
                  type: "doc",
                  id: "customunfixedheaderdatahandlingadapter",
                  label: "h.模板解析非固定包头适配器"
                },
                {
                  type: "doc",
                  id: "bigfixedheadercustomdatahandlingadapter",
                  label: "i.模板解析大数据固定包头适配器"
                },
                {
                  type: "doc",
                  id: "custombetweenanddatahandlingadapter",
                  label: "j.模板解析区间数据适配器"
                },
                {
                  type: "doc",
                  id: "pipelinedatahandlingadapter",
                  label: "k.Pipeline数据适配器"
                },
                {
                  type: "doc",
                  id: "tlvdatahandlingadapter",
                  label: "l.三元组编码TLV适配器"
                },
              ]
          },
          {
            type: "category",
            label: "8.3 Udp适配器",
            items:
              [
                {
                  type: "doc",
                  id: "udpdatahandlingadapter",
                  label: "a.原始自定义适配器"
                },
              ]
          },
          {
            type: "category",
            label: "8.4 适配器案例赏析",
            items:
              [
                {
                  type: "doc",
                  id: "adapterdemodescription",
                  label: "a.说明"
                },
                {
                  type: "doc",
                  id: "stategridtransmission",
                  label: "b.国网输电i1标准版"
                },
              ]
          },
          {
            type: "doc",
            id: "independentusedatahandlingadapter",
            label: "8.5 独立使用适配器"
          },
          {
            type: "doc",
            id: "dataadaptertester",
            label: "8.6 适配器完整性、性能测试"
          },
        ]
    },
    {
      type: "category",
      label: "09、Http组件",
      items:
        [
          {
            type: "doc",
            id: "createhttpservice",
            label: "9.1 创建HttpService"
          },
          {
            type: "doc",
            id: "createhttpclient",
            label: "9.2 创建HttpClient"
          },
          {
            type: "doc",
            id: "httpstaticpageplugin",
            label: "9.3 静态页面插件"
          },
          {
            type: "doc",
            id: "httpfiletransfer",
            label: "9.4 文件传输"
          },
        ]
    },
    {
      type: "category",
      label: "10、WebSocket组件",
      items:
        [
          {
            type: "doc",
            id: "websocketdescription",
            label: "10.1 产品及架构介绍"
          },
          {
            type: "doc",
            id: "createwebsocketservice",
            label: "10.2 创建WebSocket服务器"
          },
          {
            type: "doc",
            id: "createwebsocketclient",
            label: "10.3 创建WebSocket客户端"
          },
          {
            type: "doc",
            id: "wscommandlineplugin",
            label: "10.4 WSCommandLinePlugin"
          },
          {
            type: "doc",
            id: "wsjsonrpc",
            label: "10.5 基于WS的JsonRpc"
          },
        ]
    },
    {
      type: "category",
      label: "11、Rpc代理生成",
      items:
        [
          {
            type: "doc",
            id: "generateproxydescription",
            label: "11.1 为什么要生成代理"
          },
          {
            type: "doc",
            id: "generateproxyfromserver",
            label: "11.2 从服务端生成代理"
          },
          {
            type: "doc",
            id: "generateproxyfromsourcegenerator",
            label: "11.3 从SourceGenerator获取代理"
          },
          {
            type: "doc",
            id: "generateproxysourcegeneratordemo",
            label: "11.4 SG代理推荐写法"
          }
        ]
    },
    {
      type: "category",
      label: "12、TouchRpc组件",
      items:
        [
          {
            type: "doc",
            id: "touchrpcdescription",
            label: "12.1 产品及架构介绍"
          },
          {
            type: "doc",
            id: "createtouchrpcservice",
            label: "12.2 创建TouchRpc服务器"
          },
          {
            type: "doc",
            id: "createtouchrpcclient",
            label: "12.3 创建TouchRpc客户端"
          },
          {
            type: "doc",
            id: "touchrpcbase",
            label: "12.4 基础功能"
          },
          {
            type: "category",
            label: "12.5 Rpc功能",
            items:
              [
                {
                  type: "doc",
                  id: "createandcallrpc",
                  label: "a.创建、调用rpc服务"
                },
                {
                  type: "doc",
                  id: "rpcstream",
                  label: "b.Rpc大数据流式传输"
                },
                {
                  type: "doc",
                  id: "rpcoption",
                  label: "c.调用配置"
                },
                {
                  type: "doc",
                  id: "serializationselector",
                  label: "d.序列化选择器"
                },
                {
                  type: "doc",
                  id: "rpcallcontext",
                  label: "e.调用上下文"
                },
                {
                  type: "doc",
                  id: "rpcactionfilter",
                  label: "f.Rpc服务AOP"
                }
              ]
          },
          {
            type: "category",
            label: "12.6 文件传输",
            items:
              [
                {
                  type: "doc",
                  id: "transferfile",
                  label: "a.传输文件"
                },
                {
                  type: "doc",
                  id: "smallfiletransfer",
                  label: "c.小文件传输"
                },
                {
                  type: "doc",
                  id: "multithreadingfiletransfer",
                  label: "c.多线程文件传输"
                }
              ]
          },
          {
            type: "doc",
            id: "remotefilecontrol",
            label: "12.7 远程文件操作"
          },
          {
            type: "doc",
            id: "streamtransfer",
            label: "12.8 Stream传输"
          },
          {
            type: "doc",
            id: "remotestreamaccess",
            label: "12.9 远程流访问"
          },
          {
            type: "doc",
            id: "eventbus",
            label: "12.10 EventBus"
          }
        ]
    },
    {
      type: "category",
      label: "13、WebApi组件",
      items:
        [
          {
            type: "doc",
            id: "webapidescription",
            label: "13.1 产品及架构介绍"
          },
          {
            type: "doc",
            id: "webapiservice",
            label: "13.2 定义、发布、启动服务"
          },
          {
            type: "doc",
            id: "callwebapi",
            label: "13.3 发现、调用服务"
          },
        ]
    },
    {
      type: "category",
      label: "14、JsonRpc组件",
      items:
        [
          {
            type: "doc",
            id: "jsonrpcdescription",
            label: "14.1 产品及架构介绍"
          },
          {
            type: "doc",
            id: "jsonrpcservice",
            label: "14.2 定义、发布、启动服务"
          },
          {
            type: "doc",
            id: "calljsonrpc",
            label: "14.3 发现、调用服务"
          },
        ]
    },
    {
      type: "category",
      label: "15、XmlRpc组件件",
      items:
        [
          {
            type: "doc",
            id: "xmlrpcdescription",
            label: "15.1 产品及架构介绍"
          },
          {
            type: "doc",
            id: "xmlrpcservice",
            label: "15.2 定义、发布、启动服务"
          },
          {
            type: "doc",
            id: "callxmlrpc",
            label: "15.3 发现、调用服务"
          },
        ]
    }
  ]
};

