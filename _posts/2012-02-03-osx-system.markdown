--- 
layout: post
title: 系统设置
date: 2012-02-03 22:09:38
categories:
    - Mac
---
##快捷键
###关闭显示器
`Ctrl + Shift + Eject`
##Archive Utility
路径为 `/System/Library/CoreServices`

如果想解压缩后立即显示解压的文件，则要勾选 `Reveal archive in Finder`

##截屏
###修改截屏图片自动存放路径
<pre class="prettyprint linenums">
defaults write com.apple.screencapture location /path/
</pre>
###禁用阴影
<pre class="prettyprint linenums">
defaults write com.apple.screencapture disable-shadow -bool true
</pre>
###改变格式
<pre class="prettyprint linenums">
defaults write com.apple.screencapture type jpg
</pre>
最后需要运行以下命令来使设置生效
<pre class="prettyprint linenums">
killall SystemUIServer
</pre>