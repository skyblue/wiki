--- 
layout: post
title: 如何写GIT的提交注释
date: 2012-04-17 14:28:39
categories:
    - Development
---

一般情况下，提交 GIT 时的注释可以分成几类，可以用几个动词开始：

* Added ( 新加入的需求 )
* Fixed ( 修复 bug )
* Changed ( 完成的任务 )
* Updated ( 完成的任务，或者由于第三方模块变化而做的变化 )

尽量将注释缩减为一句话，不要包含详细的内容。
假如有 Issues 系统，其中可以包含 Issue 的 ID。比如：Issue #123456
包含作者的信息。比如 by Skyblue

###完整例子：
<pre class="prettyprint linenums">
git commit -m 'Issue #[issue number] by [username]: [Short summary of the change].'
</pre>