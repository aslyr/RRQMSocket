//------------------------------------------------------------------------------
//  此代码版权（除特别声明或在XREF结尾的命名空间的代码）归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  API首页：https://www.yuque.com/rrqm/touchsocket/index
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
using System.Windows;
using System.Windows.Controls;

namespace FileClientGUI.Win
{
    /// <summary>
    /// PullWindow.xaml 的交互逻辑
    /// </summary>
    public partial class PullWindow : Window
    {
        public PullWindow()
        {
            InitializeComponent();
        }



        private void tb1_TextChanged(object sender, TextChangedEventArgs e)
        {
            this.tb2.Text = System.IO.Path.GetFileName(this.tb1.Text);
        }

        public bool SelectRequest(out string path, out string savePath, out string targetId)
        {
            this.ShowDialog();
            path = this.path;
            savePath = this.savePath;
            targetId = this.targetId;
            return this.go;
        }

        private string savePath;
        private string path;
        private string targetId;

        //private FileRequest fileRequest;
        private bool go;

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            this.targetId = this.tb3.Text;
            this.path = this.tb1.Text;
            this.savePath = this.tb2.Text;
            this.go = true;
            this.Close();
        }
    }
}