<p></p>
<p></p>
<p align="center">
<img src="/RRQMSocket/RRQM.png" width = "100" height = "100" alt="图片名称" align=center />
</p>

 <div align="center">

[![NuGet version (RRQMSocket)](https://img.shields.io/nuget/v/RRQMSocket.svg?style=flat-square)](https://www.nuget.org/packages?q=rrqm)
[![License](https://img.shields.io/badge/license-Apache%202-4EB1BA.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)
[![Download](https://img.shields.io/nuget/dt/RRQMSocket)](https://img.shields.io/nuget/dt/RRQMSocket)
[![star](https://gitee.com/dotnetchina/RRQMSocket/badge/star.svg?theme=gvp)](https://gitee.com/dotnetchina/RRQMSocket/stargazers) 
[![fork](https://gitee.com/dotnetchina/RRQMSocket/badge/fork.svg?theme=gvp)](https://gitee.com/dotnetchina/RRQMSocket/members)

</div>

<div align="center">

日月之行，若出其中；星汉灿烂，若出其里。

</div>

## 一、程序集描述
&emsp;&emsp;RRQMSocket是一个整合性的、超轻量级的网络通信框架。它具有高并发、事件订阅、插件式扩展、自动活性检测、多线程处理等特点，让使用者能够更加简单的、快速的搭建网络框架。

&emsp;&emsp;目前RRQMSocket支持的传输层协议有TCP和UDP两款，基于这两大协议的支持，使得RRQMSocket能够解析绝大部分应用层协议，比如耳熟能详的HTTP、FTP、Telnet、POP3、SMTP、DNS等，不仅如此，RRQMSocket还内置了多种分包算法，使跨语言解析变得更加简单快捷。

&emsp;&emsp;RRQMSocket内部设计大量引用了内存池、对象池、等待池、线程池等众多“池”化设计，使得整个框架在接收和发送数据时基本上避免了“创建-销毁”的性能消耗。而且在接收数据时设计了完美的IOCP模型，不仅避免了接收数据的再复制行为，还让数据接收与数据处理分线程操作，大大减轻了内核的负担，让内核专注于接收，性能由此提升不少。这些优化行为的最终结果就是让RRQMSocket拥有超强的数据接收处理能力，这也就意味着它的适用场景也更加广泛，您可以用它开发分布式服务器、游戏服务器、文件管理服务器、即时通信服务器等。我相信，它的表现一定令您满意。

&emsp;&emsp;除了基本的框架外，程序集内还开发出了一些成熟框架，目前有`文件传输框架`、`RPC框架`两种，后续还会不断更新添加其他框架，希望大家多多支持和关注。

### 联系作者

 - [CSDN博客主页](https://blog.csdn.net/qq_40374647)
 - [哔哩哔哩视频](https://space.bilibili.com/94253567)
 - [源代码仓库主页](https://gitee.com/RRQM_Home) 
 - 交流QQ群：234762506

### API文档
[RRQMSocket API文档](https://www.showdoc.com.cn/RRQM)

（文档目前还在积极完善当中）


## 二、程序集架构概述

**常用类继承图**
![输入图片说明](https://images.gitee.com/uploads/images/2021/0403/125335_fca6616f_8553710.png "屏幕截图.png")

![输入图片说明](https://images.gitee.com/uploads/images/2021/0403/125356_77874ccf_8553710.png "屏幕截图.png")

 **粘包、分包处理架构** 
![输入图片说明](https://images.gitee.com/uploads/images/2021/0405/220548_8d5dd2f3_8553710.png "DataHandlingAdopter.png")

## 三、TCP框架
#### 3.1 创建TCP框架
几行代码就可以搭建出完整的TCP高性能框架，具体创建步骤详见[RRQMSocket创建高并发、高性能TCP框架](https://blog.csdn.net/qq_40374647/article/details/110679663?spm=1001.2014.3001.5501)。

#### 3.2 特点
- 简单易用。
- 多线程处理。
- IOCP完美设计模型，避免收到数据再复制。
- 简单、稳定管理客户端连接，自动检验客户端活性。
- 超简单的解决粘包、分包问题，详见[RRQMSocket解决TCP粘包、分包问题](https://blog.csdn.net/qq_40374647/article/details/110680179?spm=1001.2014.3001.5501)。
- 内存池设计，避免内存重复申请、释放。
- 对象池设计，避免数据对象的申请、释放。

#### 3.3 性能
 **固定包头解析** 

不难看出，在固定包头分包策略中，吞吐量大概在20w左右，而且基本没有GC。

<img src="https://images.gitee.com/uploads/images/2021/0405/235811_d5f762fb_8553710.png" width = "400" height = "400" alt="图片名称" align=center />


## 七、致谢

谢谢大家对我的支持，如果还有其他问题，请加群讨论。谢谢！

## 七、赞助
您的支持就是我不懈努力的动力。打赏时请一定留下您的称呼。

 **赞助总金额:266.6￥** 

**赞助名单：** 

（以下排名只按照打赏时间顺序）

> 1.Bobo Joker

> 2.UnitySir

<img src="https://images.gitee.com/uploads/images/2021/0330/234046_7662fb8c_8553710.png" width = "600" height = "400" alt="图片名称" align=center />

