//------------------------------------------------------------------------------
//  此代码版权（除特别声明或在RRQMCore.XREF命名空间的代码）归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
using RRQMCore.ByteManager;
using RRQMCore.Exceptions;
using RRQMCore.Log;
using System;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace RRQMSocket
{
    /// <summary>
    /// 需要验证的TCP服务器
    /// </summary>
    public abstract class TokenService<TClient> : TcpService<TClient> where TClient : SocketClient, new()
    {
        private string verifyToken;

        /// <summary>
        /// 连接令箭
        /// </summary>
        public string VerifyToken
        {
            get { return verifyToken; }
        }

        private int verifyTimeout;

        /// <summary>
        /// 验证超时时间,默认为3000ms
        /// </summary>
        public int VerifyTimeout
        {
            get { return verifyTimeout; }
        }

        /// <summary>
        /// 载入配置
        /// </summary>
        /// <param name="ServiceConfig"></param>
        protected override void LoadConfig(ServiceConfig ServiceConfig)
        {
            base.LoadConfig(ServiceConfig);
            this.verifyTimeout = (int)ServiceConfig.GetValue(TokenServiceConfig.VerifyTimeoutProperty);
            this.verifyToken = (string)ServiceConfig.GetValue(TokenServiceConfig.VerifyTokenProperty);
            if (string.IsNullOrEmpty(this.verifyToken))
            {
                this.verifyToken = "rrqm";
            }
        }

        /// <summary>
        /// 创建对象
        /// </summary>
        /// <param name="socket"></param>
        /// <param name="queueGroup"></param>
        protected override void PreviewCreateSocketClient(Socket socket, BufferQueueGroup queueGroup)
        {
            Task.Run(async () =>
            {
                ByteBlock byteBlock = this.BytePool.GetByteBlock(this.BufferLength);
                int waitCount = 0;
                while (waitCount < this.verifyTimeout / 10)
                {
                    if (socket.Available > 0)
                    {
                        try
                        {
                            int r = socket.Receive(byteBlock.Buffer);

                            VerifyOption verifyOption = new VerifyOption();
                            verifyOption.Token = Encoding.UTF8.GetString(byteBlock.Buffer, 0, r);
                            this.OnVerifyToken(verifyOption);

                            if (verifyOption.Accept)
                            {
                                if (this.SocketClients.Count > this.MaxCount)
                                {
                                    byteBlock.Write((byte)3);
                                    this.Logger.Debug(LogType.Error, this, "连接客户端数量已达到设定最大值");
                                    socket.Send(byteBlock.Buffer, 0, 1, SocketFlags.None);
                                    socket.Dispose();
                                    return;
                                }
                                else
                                {
                                    TClient client = (TClient)Activator.CreateInstance(typeof(TClient));
                                    client.Flag = verifyOption.Flag;

                                    client.queueGroup = queueGroup;
                                    client.service = this;
                                    client.Logger = this.Logger;
                                    client.ClearType = this.clearType;
                                    client.separateThreadReceive = this.separateThreadReceive;

                                    client.MainSocket = socket;
                                    client.ReadIpPort();
                                    client.BufferLength = this.BufferLength;

                                    CreateOption creatOption = new CreateOption();

                                    creatOption.ID = this.SocketClients.GetDefaultID();

                                    this.OnCreateSocketClient(client, creatOption);
                                    client.id = creatOption.ID;

                                    

                                    byteBlock.Write((byte)1);
                                    byteBlock.Write(Encoding.UTF8.GetBytes(client.ID));
                                    socket.Send(byteBlock.Buffer, 0, byteBlock.Len, SocketFlags.None);
                                    this.OnClientConnected(client, new MesEventArgs("新客户端连接"));
                                    client.BeginReceive();

                                    if (!this.SocketClients.TryAdd(client))
                                    {
                                        throw new RRQMException("ID重复");
                                    }
                                    return;
                                }
                            }
                            else
                            {
                                byteBlock.Write((byte)2);
                                if (verifyOption.ErrorMessage != null)
                                {
                                    byteBlock.Write(Encoding.UTF8.GetBytes(verifyOption.ErrorMessage));
                                }
                                socket.Send(byteBlock.Buffer, 0, byteBlock.Len, SocketFlags.None);
                                socket.Dispose();
                                return;
                            }
                        }
                        catch (Exception ex)
                        {
                            Logger.Debug(LogType.Error, this, $"在验证客户端连接时发生错误，信息：{ex.Message}");
                        }
                        finally
                        {
                            byteBlock.Dispose();
                        }
                    }
                    waitCount++;
                    await Task.Delay(10);
                }

                socket.Dispose();
            });
        }

        /// <summary>
        /// 当验证Token时
        /// </summary>
        /// <param name="verifyOption"></param>
        protected virtual void OnVerifyToken(VerifyOption verifyOption)
        {
            if (verifyOption.Token == this.verifyToken)
            {
                verifyOption.Accept = true;
            }
            else
            {
                verifyOption.ErrorMessage = "Token不受理";
            }
        }
    }
}