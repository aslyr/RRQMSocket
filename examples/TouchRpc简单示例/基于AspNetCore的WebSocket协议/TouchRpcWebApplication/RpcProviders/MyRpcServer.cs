//------------------------------------------------------------------------------
//  此代码版权（除特别声明或在RRQMCore.XREF命名空间的代码）归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  API首页：https://www.yuque.com/eo2w71/rrqm
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
using Microsoft.Extensions.Logging;
using System.ComponentModel;
using TouchSocket.Rpc;
using TouchSocket.Rpc.TouchRpc;
using TouchSocket.Rpc.TouchRpc.AspNetCore;

namespace TouchRpcWebApplication.RpcProviders
{
    public class MyRpcServer : RpcServer
    {
        private readonly ILogger<MyRpcServer> m_logger;

        /// <summary>
        /// 支持注入
        /// </summary>
        /// <param name="service"></param>
        /// <param name="logger"></param>
        public MyRpcServer(IWSTouchRpcService service, ILogger<MyRpcServer> logger)
        {
            this.m_logger = logger;
        }

        [Description("登录")]
        [TouchRpc]
        public bool Login(string account, string password)
        {
            if (account == "123" && password == "abc")
            {
                m_logger.LogInformation("True");
                return true;
            }
            m_logger.LogInformation("False");
            return false;
        }

        [Description("性能测试")]
        [TouchRpc]
        public int Performance(int a)
        {
            return a;
        }
    }
}