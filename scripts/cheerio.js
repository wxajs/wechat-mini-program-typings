const html = `
<!DOCTYPE HTML>
<html lang="">
    <head>
        <title>API · 小程序</title>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
        <meta name="description" content="微信小程序文档">
        <meta name="HandheldFriendly" content="true"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://developers.weixin.qq.com/miniprogram/assets/images/apple-touch-icon-precomposed-152.png?t=18122715">
        <link rel="shortcut icon" href="https://developers.weixin.qq.com/miniprogram/assets/images/favicon.ico?t=18122715" type="image/x-icon">

        <link rel="stylesheet" href="https://developers.weixin.qq.com/miniprogram/assets/style.css?t=18122715">
        <link rel="next" href="../devtools/devtools.html" />
        <link rel="prev" href="../component/" />
    </head>
    <body>
        <div class="book with-summary">
    <div class="head">
        <div class="head_box">
            <h1 class="logo"><a href="javascript:;" title="_('微信公众平台 小程序')"></a></h1>
            <div class="header_ctrls">
                <ul class="top_nav">
    <li class="top_nav_item dropdown" id="js_selected_introduction">
        <a class="top_nav_item_title" href="javascript:;" id="js_selected_title_introduction">介绍</a>
        <ul class="dropdown_menu">
            <li class="dropdown_menu_item">
                <a class="top_nav_link" href="https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18122715">小程序介绍</a>
            </li>
            <li class="dropdown_menu_item">
                <a class="top_nav_link" href="https://developers.weixin.qq.com/minigame/introduction/index.html?t=18122715">小游戏介绍</a>
            </li>
        </ul>
    </li>
    <li class="top_nav_item" id="js_selected_design">
        <a class="top_nav_item_title top_nav_link" href="https://developers.weixin.qq.com/miniprogram/design/index.html?t=18122715">设计</a>
    </li>
    <li class="top_nav_item dropdown" id="js_selected_dev">
        <a class="top_nav_item_title" href="javascript:;" id="js_selected_title_dev">小程序开发</a>
        <ul class="dropdown_menu">
            <li class="dropdown_menu_item">
                <a class="top_nav_link" href="https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18122715">小程序开发</a>
            </li>
            <li class="dropdown_menu_item">
                <a class="top_nav_link" href="https://developers.weixin.qq.com/minigame/dev/index.html?t=18122715">小游戏开发</a>
            </li>
        </ul>
    </li>
    <li class="top_nav_item" id="js_selected_product">
        <a class="top_nav_item_title top_nav_link" href="https://developers.weixin.qq.com/miniprogram/product/index.html?t=18122715">运营</a>
    </li>
    <li class="top_nav_item dropdown" id="js_selected_analysis">
        <a class="top_nav_item_title" href="javascript:;" id="js_selected_title_analysis">数据</a>
        <ul class="dropdown_menu">
            <li class="dropdown_menu_item">
                <a class="top_nav_link" href="https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18122715">小程序数据</a>
            </li>
            <li class="dropdown_menu_item">
                <a class="top_nav_link" href="https://developers.weixin.qq.com/minigame/analysis/index.html?t=18122715">小游戏数据</a>
            </li>
        </ul>
    </li>
    <li class="top_nav_item" id="js_selected_bbs">
        <a class="top_nav_item_title" href="https://developers.weixin.qq.com/">社区</a>
    </li>
</ul>
                <ul class="lang-tabs">
    <li class="lang-tab lang-zh lang-tab_current">
        <a href="https://developers.weixin.qq.com/miniprogram/dev/api/index.html?t=18122715" class="lang-tab__nav">中文</a><span class="split-line">/</span>
    </li>
    <li class="lang-tab lang-en "> <!-- 禁用态加class: lang-tab_disabled -->
        <a href="https://developers.weixin.qq.com/miniprogram/en/dev/api/index.html?t=18122715" class="lang-tab__nav">EN</a>
    </li>
</ul>
            </div>
        </div>
    </div>
    <div class="sub_nav_box">
        <div class="sub_nav_inner">
            <div class="book-summary-opr" id="js-book-summary-opr">
                <a class="book-summary-btn"></a>
            </div>
            <div class="top_sub_nav">
    <div class="top_title_wap">
        <span class="icon_title icon_dev"></span>
        <p class="s_title_1">微信小程序开发文档</p>
    </div>

    <ul class="top_sub_list">
        <li class="sub_nav_item " data-level="1.1" data-path="../">
                <a href="../">简易教程</a>
                </li>
<li class="sub_nav_item " data-level="1.2" data-path="../framework/MINA.html">
                <a href="../framework/MINA.html">框架</a>
                </li>
<li class="sub_nav_item " data-level="1.3" data-path="../component/">
                <a href="../component/">组件</a>
                </li>
<li class="sub_nav_item selected" data-level="1.4" data-path=".">
                <a href=".">API</a>
                </li>
<li class="sub_nav_item " data-level="1.5" data-path="../devtools/devtools.html">
                <a href="../devtools/devtools.html">工具</a>
                </li>
<li class="sub_nav_item " data-level="1.6" data-path="../wxcloud/basis/getting-started.html">
                <a href="../wxcloud/basis/getting-started.html">小程序·云开发</a>
                </li>
<li class="sub_nav_item " data-level="1.7" >
                <a target="_blank" href="https://developers.weixin.qq.com/ebook?action=get_post_info&docid=0008aeea9a8978ab0086a685851c0a">开发指南</a>
                </li>
    </ul>
</div>

            <div id="book-search-input" role="search">
                <form>
                    <label for="search-input" class="search-icon" id="js-search-icon"></label>
                    <input type="text" id="search-input" name="search-input" placeholder="搜索" />
                    <button type="reset" class="clear-input-btn"></button>
                </form>
            </div>
            <ul class="lang-tabs">
    <li class="lang-tab lang-zh lang-tab_current">
        <a href="https://developers.weixin.qq.com/miniprogram/dev/api/index.html?t=18122715" class="lang-tab__nav">中文</a><span class="split-line">/</span>
    </li>
    <li class="lang-tab lang-en "> <!-- 禁用态加class: lang-tab_disabled -->
        <a href="https://developers.weixin.qq.com/miniprogram/en/dev/api/index.html?t=18122715" class="lang-tab__nav">EN</a>
    </li>
</ul>
        </div>
    </div>

    <div class="book-summary">
        <div class="book-summary-home" id="js-summary-home">
            <a>
                <span class="icon_home_s icon_dev"></span>
                <span class="s_title_2">开发文档首页</span>
            </a>
        </div>
        <nav role="navigation">
            
<ul class="summary">
    
        


<li class="chapter open" data-level="1.4.1" data-path=./wx.canIUse.html data-name="基础">
                <a href="./wx.canIUse.html">基础</a>
                <ul class="articles"><li class="chapter" data-level="1.4.1.1" data-path=./wx.canIUse.html data-name="wx.canIUse">
                <a href="./wx.canIUse.html">wx.canIUse</a>
                
            </li>
<li class="chapter" data-level="1.4.1.2" data-path=./wx.getSystemInfoSync.html data-name="系统">
                <a href="./wx.getSystemInfoSync.html">系统</a>
                <ul class="articles"><li class="chapter" data-level="1.4.1.2.1" data-path=./wx.getSystemInfoSync.html data-name="信息">
                <a href="./wx.getSystemInfoSync.html">信息</a>
                <ul class="articles"><li class="chapter" data-level="1.4.1.2.1.1" data-path=./wx.getSystemInfoSync.html data-name="wx.getSystemInfoSync">
                <a href="./wx.getSystemInfoSync.html">wx.getSystemInfoSync</a>
                
            </li>
<li class="chapter" data-level="1.4.1.2.1.2" data-path=./wx.getSystemInfo.html data-name="wx.getSystemInfo">
                <a href="./wx.getSystemInfo.html">wx.getSystemInfo</a>
                
            </li></ul>
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.1.3" data-path=./wx.getUpdateManager.html data-name="更新">
                <a href="./wx.getUpdateManager.html">更新</a>
                <ul class="articles"><li class="chapter" data-level="1.4.1.3.1" data-path=./wx.getUpdateManager.html data-name="wx.getUpdateManager">
                <a href="./wx.getUpdateManager.html">wx.getUpdateManager</a>
                
            </li>
<li class="chapter" data-level="1.4.1.3.2" data-path=./UpdateManager.html data-name="UpdateManager">
                <a href="./UpdateManager.html">UpdateManager</a>
                <ul class="articles"><li class="chapter" data-level="1.4.1.3.2.1" data-path=./UpdateManager.onCheckForUpdate.html data-name=".onCheckForUpdate">
                <a href="./UpdateManager.onCheckForUpdate.html">.onCheckForUpdate</a>
                
            </li>
<li class="chapter" data-level="1.4.1.3.2.2" data-path=./UpdateManager.onUpdateReady.html data-name=".onUpdateReady">
                <a href="./UpdateManager.onUpdateReady.html">.onUpdateReady</a>
                
            </li>
<li class="chapter" data-level="1.4.1.3.2.3" data-path=./UpdateManager.onUpdateFailed.html data-name=".onUpdateFailed">
                <a href="./UpdateManager.onUpdateFailed.html">.onUpdateFailed</a>
                
            </li>
<li class="chapter" data-level="1.4.1.3.2.4" data-path=./UpdateManager.applyUpdate.html data-name=".applyUpdate">
                <a href="./UpdateManager.applyUpdate.html">.applyUpdate</a>
                
            </li></ul>
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.1.4" data-path=./wx.getLaunchOptionsSync.html data-name="小程序">
                <a href="./wx.getLaunchOptionsSync.html">小程序</a>
                <ul class="articles"><li class="chapter" data-level="1.4.1.4.1" data-path=./wx.getLaunchOptionsSync.html data-name="生命周期">
                <a href="./wx.getLaunchOptionsSync.html">生命周期</a>
                <ul class="articles"><li class="chapter" data-level="1.4.1.4.1.1" data-path=./wx.getLaunchOptionsSync.html data-name="wx.getLaunchOptionsSync">
                <a href="./wx.getLaunchOptionsSync.html">wx.getLaunchOptionsSync</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.1.4.2" data-path=./wx.offPageNotFound.html data-name="应用级事件">
                <a href="./wx.offPageNotFound.html">应用级事件</a>
                <ul class="articles"><li class="chapter" data-level="1.4.1.4.2.1" data-path=./wx.offPageNotFound.html data-name="wx.offPageNotFound">
                <a href="./wx.offPageNotFound.html">wx.offPageNotFound</a>
                
            </li>
<li class="chapter" data-level="1.4.1.4.2.2" data-path=./wx.onPageNotFound.html data-name="wx.onPageNotFound">
                <a href="./wx.onPageNotFound.html">wx.onPageNotFound</a>
                
            </li>
<li class="chapter" data-level="1.4.1.4.2.3" data-path=./wx.offError.html data-name="wx.offError">
                <a href="./wx.offError.html">wx.offError</a>
                
            </li>
<li class="chapter" data-level="1.4.1.4.2.4" data-path=./wx.onError.html data-name="wx.onError">
                <a href="./wx.onError.html">wx.onError</a>
                
            </li>
<li class="chapter" data-level="1.4.1.4.2.5" data-path=./wx.offAppShow.html data-name="wx.offAppShow">
                <a href="./wx.offAppShow.html">wx.offAppShow</a>
                
            </li>
<li class="chapter" data-level="1.4.1.4.2.6" data-path=./wx.onAppShow.html data-name="wx.onAppShow">
                <a href="./wx.onAppShow.html">wx.onAppShow</a>
                
            </li>
<li class="chapter" data-level="1.4.1.4.2.7" data-path=./wx.offAppHide.html data-name="wx.offAppHide">
                <a href="./wx.offAppHide.html">wx.offAppHide</a>
                
            </li>
<li class="chapter" data-level="1.4.1.4.2.8" data-path=./wx.onAppHide.html data-name="wx.onAppHide">
                <a href="./wx.onAppHide.html">wx.onAppHide</a>
                
            </li></ul>
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.1.5" data-path=./setTimeout.html data-name="定时器">
                <a href="./setTimeout.html">定时器</a>
                <ul class="articles"><li class="chapter" data-level="1.4.1.5.1" data-path=./setTimeout.html data-name="setTimeout">
                <a href="./setTimeout.html">setTimeout</a>
                
            </li>
<li class="chapter" data-level="1.4.1.5.2" data-path=./clearTimeout.html data-name="clearTimeout">
                <a href="./clearTimeout.html">clearTimeout</a>
                
            </li>
<li class="chapter" data-level="1.4.1.5.3" data-path=./setInterval.html data-name="setInterval">
                <a href="./setInterval.html">setInterval</a>
                
            </li>
<li class="chapter" data-level="1.4.1.5.4" data-path=./clearInterval.html data-name="clearInterval">
                <a href="./clearInterval.html">clearInterval</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.1.6" data-path=./wx.setEnableDebug.html data-name="调试">
                <a href="./wx.setEnableDebug.html">调试</a>
                <ul class="articles"><li class="chapter" data-level="1.4.1.6.1" data-path=./wx.setEnableDebug.html data-name="wx.setEnableDebug">
                <a href="./wx.setEnableDebug.html">wx.setEnableDebug</a>
                
            </li>
<li class="chapter" data-level="1.4.1.6.2" data-path=./wx.getLogManager.html data-name="wx.getLogManager">
                <a href="./wx.getLogManager.html">wx.getLogManager</a>
                
            </li>
<li class="chapter" data-level="1.4.1.6.3" data-path=./LogManager.html data-name="LogManager">
                <a href="./LogManager.html">LogManager</a>
                <ul class="articles"><li class="chapter" data-level="1.4.1.6.3.1" data-path=./LogManager.debug.html data-name=".debug">
                <a href="./LogManager.debug.html">.debug</a>
                
            </li>
<li class="chapter" data-level="1.4.1.6.3.2" data-path=./LogManager.info.html data-name=".info">
                <a href="./LogManager.info.html">.info</a>
                
            </li>
<li class="chapter" data-level="1.4.1.6.3.3" data-path=./LogManager.log.html data-name=".log">
                <a href="./LogManager.log.html">.log</a>
                
            </li>
<li class="chapter" data-level="1.4.1.6.3.4" data-path=./LogManager.warn.html data-name=".warn">
                <a href="./LogManager.warn.html">.warn</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.1.6.4" data-path=./console.html data-name="console">
                <a href="./console.html">console</a>
                <ul class="articles"><li class="chapter" data-level="1.4.1.6.4.1" data-path=./console.debug.html data-name=".debug">
                <a href="./console.debug.html">.debug</a>
                
            </li>
<li class="chapter" data-level="1.4.1.6.4.2" data-path=./console.log.html data-name=".log">
                <a href="./console.log.html">.log</a>
                
            </li>
<li class="chapter" data-level="1.4.1.6.4.3" data-path=./console.info.html data-name=".info">
                <a href="./console.info.html">.info</a>
                
            </li>
<li class="chapter" data-level="1.4.1.6.4.4" data-path=./console.warn.html data-name=".warn">
                <a href="./console.warn.html">.warn</a>
                
            </li>
<li class="chapter" data-level="1.4.1.6.4.5" data-path=./console.error.html data-name=".error">
                <a href="./console.error.html">.error</a>
                
            </li>
<li class="chapter" data-level="1.4.1.6.4.6" data-path=./console.group.html data-name=".group">
                <a href="./console.group.html">.group</a>
                
            </li>
<li class="chapter" data-level="1.4.1.6.4.7" data-path=./console.groupEnd.html data-name=".groupEnd">
                <a href="./console.groupEnd.html">.groupEnd</a>
                
            </li></ul>
            </li></ul>
            </li></ul>
            </li>
<li class="chapter open" data-level="1.4.2" data-path=./wx.navigateBack.html data-name="路由">
                <a href="./wx.navigateBack.html">路由</a>
                <ul class="articles"><li class="chapter" data-level="1.4.2.1" data-path=./wx.navigateBack.html data-name="wx.navigateBack">
                <a href="./wx.navigateBack.html">wx.navigateBack</a>
                
            </li>
<li class="chapter" data-level="1.4.2.2" data-path=./wx.switchTab.html data-name="wx.switchTab">
                <a href="./wx.switchTab.html">wx.switchTab</a>
                
            </li>
<li class="chapter" data-level="1.4.2.3" data-path=./wx.navigateTo.html data-name="wx.navigateTo">
                <a href="./wx.navigateTo.html">wx.navigateTo</a>
                
            </li>
<li class="chapter" data-level="1.4.2.4" data-path=./wx.reLaunch.html data-name="wx.reLaunch">
                <a href="./wx.reLaunch.html">wx.reLaunch</a>
                
            </li>
<li class="chapter" data-level="1.4.2.5" data-path=./wx.redirectTo.html data-name="wx.redirectTo">
                <a href="./wx.redirectTo.html">wx.redirectTo</a>
                
            </li></ul>
            </li>
<li class="chapter open" data-level="1.4.3" data-path=./wx.showActionSheet.html data-name="界面">
                <a href="./wx.showActionSheet.html">界面</a>
                <ul class="articles"><li class="chapter" data-level="1.4.3.1" data-path=./wx.showActionSheet.html data-name="交互">
                <a href="./wx.showActionSheet.html">交互</a>
                <ul class="articles"><li class="chapter" data-level="1.4.3.1.1" data-path=./wx.showActionSheet.html data-name="wx.showActionSheet">
                <a href="./wx.showActionSheet.html">wx.showActionSheet</a>
                
            </li>
<li class="chapter" data-level="1.4.3.1.2" data-path=./wx.hideLoading.html data-name="wx.hideLoading">
                <a href="./wx.hideLoading.html">wx.hideLoading</a>
                
            </li>
<li class="chapter" data-level="1.4.3.1.3" data-path=./wx.showLoading.html data-name="wx.showLoading">
                <a href="./wx.showLoading.html">wx.showLoading</a>
                
            </li>
<li class="chapter" data-level="1.4.3.1.4" data-path=./wx.hideToast.html data-name="wx.hideToast">
                <a href="./wx.hideToast.html">wx.hideToast</a>
                
            </li>
<li class="chapter" data-level="1.4.3.1.5" data-path=./wx.showToast.html data-name="wx.showToast">
                <a href="./wx.showToast.html">wx.showToast</a>
                
            </li>
<li class="chapter" data-level="1.4.3.1.6" data-path=./wx.showModal.html data-name="wx.showModal">
                <a href="./wx.showModal.html">wx.showModal</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.3.2" data-path=./wx.setNavigationBarColor.html data-name="导航栏">
                <a href="./wx.setNavigationBarColor.html">导航栏</a>
                <ul class="articles"><li class="chapter" data-level="1.4.3.2.1" data-path=./wx.setNavigationBarColor.html data-name="wx.setNavigationBarColor">
                <a href="./wx.setNavigationBarColor.html">wx.setNavigationBarColor</a>
                
            </li>
<li class="chapter" data-level="1.4.3.2.2" data-path=./wx.hideNavigationBarLoading.html data-name="wx.hideNavigationBarLoading">
                <a href="./wx.hideNavigationBarLoading.html">wx.hideNavigationBarLoading</a>
                
            </li>
<li class="chapter" data-level="1.4.3.2.3" data-path=./wx.showNavigationBarLoading.html data-name="wx.showNavigationBarLoading">
                <a href="./wx.showNavigationBarLoading.html">wx.showNavigationBarLoading</a>
                
            </li>
<li class="chapter" data-level="1.4.3.2.4" data-path=./wx.setNavigationBarTitle.html data-name="wx.setNavigationBarTitle">
                <a href="./wx.setNavigationBarTitle.html">wx.setNavigationBarTitle</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.3.3" data-path=./wx.setBackgroundTextStyle.html data-name="背景">
                <a href="./wx.setBackgroundTextStyle.html">背景</a>
                <ul class="articles"><li class="chapter" data-level="1.4.3.3.1" data-path=./wx.setBackgroundTextStyle.html data-name="wx.setBackgroundTextStyle">
                <a href="./wx.setBackgroundTextStyle.html">wx.setBackgroundTextStyle</a>
                
            </li>
<li class="chapter" data-level="1.4.3.3.2" data-path=./wx.setBackgroundColor.html data-name="wx.setBackgroundColor">
                <a href="./wx.setBackgroundColor.html">wx.setBackgroundColor</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.3.4" data-path=./wx.setTabBarItem.html data-name="Tab Bar">
                <a href="./wx.setTabBarItem.html">Tab Bar</a>
                <ul class="articles"><li class="chapter" data-level="1.4.3.4.1" data-path=./wx.setTabBarItem.html data-name="wx.setTabBarItem">
                <a href="./wx.setTabBarItem.html">wx.setTabBarItem</a>
                
            </li>
<li class="chapter" data-level="1.4.3.4.2" data-path=./wx.setTabBarStyle.html data-name="wx.setTabBarStyle">
                <a href="./wx.setTabBarStyle.html">wx.setTabBarStyle</a>
                
            </li>
<li class="chapter" data-level="1.4.3.4.3" data-path=./wx.hideTabBar.html data-name="wx.hideTabBar">
                <a href="./wx.hideTabBar.html">wx.hideTabBar</a>
                
            </li>
<li class="chapter" data-level="1.4.3.4.4" data-path=./wx.showTabBar.html data-name="wx.showTabBar">
                <a href="./wx.showTabBar.html">wx.showTabBar</a>
                
            </li>
<li class="chapter" data-level="1.4.3.4.5" data-path=./wx.hideTabBarRedDot.html data-name="wx.hideTabBarRedDot">
                <a href="./wx.hideTabBarRedDot.html">wx.hideTabBarRedDot</a>
                
            </li>
<li class="chapter" data-level="1.4.3.4.6" data-path=./wx.showTabBarRedDot.html data-name="wx.showTabBarRedDot">
                <a href="./wx.showTabBarRedDot.html">wx.showTabBarRedDot</a>
                
            </li>
<li class="chapter" data-level="1.4.3.4.7" data-path=./wx.removeTabBarBadge.html data-name="wx.removeTabBarBadge">
                <a href="./wx.removeTabBarBadge.html">wx.removeTabBarBadge</a>
                
            </li>
<li class="chapter" data-level="1.4.3.4.8" data-path=./wx.setTabBarBadge.html data-name="wx.setTabBarBadge">
                <a href="./wx.setTabBarBadge.html">wx.setTabBarBadge</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.3.5" data-path=./wx.loadFontFace.html data-name="字体">
                <a href="./wx.loadFontFace.html">字体</a>
                <ul class="articles"><li class="chapter" data-level="1.4.3.5.1" data-path=./wx.loadFontFace.html data-name="wx.loadFontFace">
                <a href="./wx.loadFontFace.html">wx.loadFontFace</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.3.6" data-path=./wx.stopPullDownRefresh.html data-name="下拉刷新">
                <a href="./wx.stopPullDownRefresh.html">下拉刷新</a>
                <ul class="articles"><li class="chapter" data-level="1.4.3.6.1" data-path=./wx.stopPullDownRefresh.html data-name="wx.stopPullDownRefresh">
                <a href="./wx.stopPullDownRefresh.html">wx.stopPullDownRefresh</a>
                
            </li>
<li class="chapter" data-level="1.4.3.6.2" data-path=./wx.startPullDownRefresh.html data-name="wx.startPullDownRefresh">
                <a href="./wx.startPullDownRefresh.html">wx.startPullDownRefresh</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.3.7" data-path=./wx.pageScrollTo.html data-name="滚动">
                <a href="./wx.pageScrollTo.html">滚动</a>
                <ul class="articles"><li class="chapter" data-level="1.4.3.7.1" data-path=./wx.pageScrollTo.html data-name="wx.pageScrollTo">
                <a href="./wx.pageScrollTo.html">wx.pageScrollTo</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.3.8" data-path=./wx.createAnimation.html data-name="动画">
                <a href="./wx.createAnimation.html">动画</a>
                <ul class="articles"><li class="chapter" data-level="1.4.3.8.1" data-path=./wx.createAnimation.html data-name="wx.createAnimation">
                <a href="./wx.createAnimation.html">wx.createAnimation</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2" data-path=./Animation.html data-name="Animation">
                <a href="./Animation.html">Animation</a>
                <ul class="articles"><li class="chapter" data-level="1.4.3.8.2.1" data-path=./Animation.export.html data-name=".export">
                <a href="./Animation.export.html">.export</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.2" data-path=./Animation.step.html data-name=".step">
                <a href="./Animation.step.html">.step</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.3" data-path=./Animation.matrix.html data-name=".matrix">
                <a href="./Animation.matrix.html">.matrix</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.4" data-path=./Animation.matrix3d.html data-name=".matrix3d">
                <a href="./Animation.matrix3d.html">.matrix3d</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.5" data-path=./Animation.rotate.html data-name=".rotate">
                <a href="./Animation.rotate.html">.rotate</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.6" data-path=./Animation.rotate3d.html data-name=".rotate3d">
                <a href="./Animation.rotate3d.html">.rotate3d</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.7" data-path=./Animation.rotateX.html data-name=".rotateX">
                <a href="./Animation.rotateX.html">.rotateX</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.8" data-path=./Animation.rotateY.html data-name=".rotateY">
                <a href="./Animation.rotateY.html">.rotateY</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.9" data-path=./Animation.rotateZ.html data-name=".rotateZ">
                <a href="./Animation.rotateZ.html">.rotateZ</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.10" data-path=./Animation.scale.html data-name=".scale">
                <a href="./Animation.scale.html">.scale</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.11" data-path=./Animation.scale3d.html data-name=".scale3d">
                <a href="./Animation.scale3d.html">.scale3d</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.12" data-path=./Animation.scaleX.html data-name=".scaleX">
                <a href="./Animation.scaleX.html">.scaleX</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.13" data-path=./Animation.scaleY.html data-name=".scaleY">
                <a href="./Animation.scaleY.html">.scaleY</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.14" data-path=./Animation.scaleZ.html data-name=".scaleZ">
                <a href="./Animation.scaleZ.html">.scaleZ</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.15" data-path=./Animation.skew.html data-name=".skew">
                <a href="./Animation.skew.html">.skew</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.16" data-path=./Animation.skewX.html data-name=".skewX">
                <a href="./Animation.skewX.html">.skewX</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.17" data-path=./Animation.skewY.html data-name=".skewY">
                <a href="./Animation.skewY.html">.skewY</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.18" data-path=./Animation.translate.html data-name=".translate">
                <a href="./Animation.translate.html">.translate</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.19" data-path=./Animation.translate3d.html data-name=".translate3d">
                <a href="./Animation.translate3d.html">.translate3d</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.20" data-path=./Animation.translateX.html data-name=".translateX">
                <a href="./Animation.translateX.html">.translateX</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.21" data-path=./Animation.translateY.html data-name=".translateY">
                <a href="./Animation.translateY.html">.translateY</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.22" data-path=./Animation.translateZ.html data-name=".translateZ">
                <a href="./Animation.translateZ.html">.translateZ</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.23" data-path=./Animation.opacity.html data-name=".opacity">
                <a href="./Animation.opacity.html">.opacity</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.24" data-path=./Animation.backgroundColor.html data-name=".backgroundColor">
                <a href="./Animation.backgroundColor.html">.backgroundColor</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.25" data-path=./Animation.width.html data-name=".width">
                <a href="./Animation.width.html">.width</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.26" data-path=./Animation.height.html data-name=".height">
                <a href="./Animation.height.html">.height</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.27" data-path=./Animation.left.html data-name=".left">
                <a href="./Animation.left.html">.left</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.28" data-path=./Animation.right.html data-name=".right">
                <a href="./Animation.right.html">.right</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.29" data-path=./Animation.top.html data-name=".top">
                <a href="./Animation.top.html">.top</a>
                
            </li>
<li class="chapter" data-level="1.4.3.8.2.30" data-path=./Animation.bottom.html data-name=".bottom">
                <a href="./Animation.bottom.html">.bottom</a>
                
            </li></ul>
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.3.9" data-path=./wx.setTopBarText.html data-name="置顶">
                <a href="./wx.setTopBarText.html">置顶</a>
                <ul class="articles"><li class="chapter" data-level="1.4.3.9.1" data-path=./wx.setTopBarText.html data-name="wx.setTopBarText">
                <a href="./wx.setTopBarText.html">wx.setTopBarText</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.3.10" data-path=./wx.nextTick.html data-name="自定义组件">
                <a href="./wx.nextTick.html">自定义组件</a>
                <ul class="articles"><li class="chapter" data-level="1.4.3.10.1" data-path=./wx.nextTick.html data-name="wx.nextTick">
                <a href="./wx.nextTick.html">wx.nextTick</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.3.11" data-path=./wx.getMenuButtonBoundingClientRect.html data-name="菜单">
                <a href="./wx.getMenuButtonBoundingClientRect.html">菜单</a>
                <ul class="articles"><li class="chapter" data-level="1.4.3.11.1" data-path=./wx.getMenuButtonBoundingClientRect.html data-name="wx.getMenuButtonBoundingClientRect">
                <a href="./wx.getMenuButtonBoundingClientRect.html">wx.getMenuButtonBoundingClientRect</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.3.12" data-path=./wx.offWindowResize.html data-name="窗口">
                <a href="./wx.offWindowResize.html">窗口</a>
                <ul class="articles"><li class="chapter" data-level="1.4.3.12.1" data-path=./wx.offWindowResize.html data-name="wx.offWindowResize">
                <a href="./wx.offWindowResize.html">wx.offWindowResize</a>
                
            </li>
<li class="chapter" data-level="1.4.3.12.2" data-path=./wx.onWindowResize.html data-name="wx.onWindowResize">
                <a href="./wx.onWindowResize.html">wx.onWindowResize</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.3.13" data-path=./wx.getMenuButtonBoundingClientRect.html data-name="菜单">
                <a href="./wx.getMenuButtonBoundingClientRect.html">菜单</a>
                <ul class="articles"><li class="chapter" data-level="1.4.3.13.1" data-path=./wx.getMenuButtonBoundingClientRect.html data-name="wx.getMenuButtonBoundingClientRect">
                <a href="./wx.getMenuButtonBoundingClientRect.html">wx.getMenuButtonBoundingClientRect</a>
                
            </li></ul>
            </li></ul>
            </li>
<li class="chapter open" data-level="1.4.4" data-path=./wx.request.html data-name="网络">
                <a href="./wx.request.html">网络</a>
                <ul class="articles"><li class="chapter" data-level="1.4.4.1" data-path=./wx.request.html data-name="发起请求">
                <a href="./wx.request.html">发起请求</a>
                <ul class="articles"><li class="chapter" data-level="1.4.4.1.1" data-path=./wx.request.html data-name="wx.request">
                <a href="./wx.request.html">wx.request</a>
                
            </li>
<li class="chapter" data-level="1.4.4.1.2" data-path=./RequestTask.html data-name="RequestTask">
                <a href="./RequestTask.html">RequestTask</a>
                <ul class="articles"><li class="chapter" data-level="1.4.4.1.2.1" data-path=./RequestTask.abort.html data-name=".abort">
                <a href="./RequestTask.abort.html">.abort</a>
                
            </li>
<li class="chapter" data-level="1.4.4.1.2.2" data-path=./RequestTask.onHeadersReceived.html data-name=".onHeadersReceived">
                <a href="./RequestTask.onHeadersReceived.html">.onHeadersReceived</a>
                
            </li>
<li class="chapter" data-level="1.4.4.1.2.3" data-path=./RequestTask.offHeadersReceived.html data-name=".offHeadersReceived">
                <a href="./RequestTask.offHeadersReceived.html">.offHeadersReceived</a>
                
            </li></ul>
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.4.2" data-path=./wx.downloadFile.html data-name="下载">
                <a href="./wx.downloadFile.html">下载</a>
                <ul class="articles"><li class="chapter" data-level="1.4.4.2.1" data-path=./wx.downloadFile.html data-name="wx.downloadFile">
                <a href="./wx.downloadFile.html">wx.downloadFile</a>
                
            </li>
<li class="chapter" data-level="1.4.4.2.2" data-path=./DownloadTask.html data-name="DownloadTask">
                <a href="./DownloadTask.html">DownloadTask</a>
                <ul class="articles"><li class="chapter" data-level="1.4.4.2.2.1" data-path=./DownloadTask.onProgressUpdate.html data-name=".onProgressUpdate">
                <a href="./DownloadTask.onProgressUpdate.html">.onProgressUpdate</a>
                
            </li>
<li class="chapter" data-level="1.4.4.2.2.2" data-path=./DownloadTask.offProgressUpdate.html data-name=".offProgressUpdate">
                <a href="./DownloadTask.offProgressUpdate.html">.offProgressUpdate</a>
                
            </li>
<li class="chapter" data-level="1.4.4.2.2.3" data-path=./DownloadTask.abort.html data-name=".abort">
                <a href="./DownloadTask.abort.html">.abort</a>
                
            </li>
<li class="chapter" data-level="1.4.4.2.2.4" data-path=./DownloadTask.onHeadersReceived.html data-name=".onHeadersReceived">
                <a href="./DownloadTask.onHeadersReceived.html">.onHeadersReceived</a>
                
            </li>
<li class="chapter" data-level="1.4.4.2.2.5" data-path=./DownloadTask.offHeadersReceived.html data-name=".offHeadersReceived">
                <a href="./DownloadTask.offHeadersReceived.html">.offHeadersReceived</a>
                
            </li></ul>
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.4.3" data-path=./wx.uploadFile.html data-name="上传">
                <a href="./wx.uploadFile.html">上传</a>
                <ul class="articles"><li class="chapter" data-level="1.4.4.3.1" data-path=./wx.uploadFile.html data-name="wx.uploadFile">
                <a href="./wx.uploadFile.html">wx.uploadFile</a>
                
            </li>
<li class="chapter" data-level="1.4.4.3.2" data-path=./UploadTask.html data-name="UploadTask">
                <a href="./UploadTask.html">UploadTask</a>
                <ul class="articles"><li class="chapter" data-level="1.4.4.3.2.1" data-path=./UploadTask.onProgressUpdate.html data-name=".onProgressUpdate">
                <a href="./UploadTask.onProgressUpdate.html">.onProgressUpdate</a>
                
            </li>
<li class="chapter" data-level="1.4.4.3.2.2" data-path=./UploadTask.offProgressUpdate.html data-name=".offProgressUpdate">
                <a href="./UploadTask.offProgressUpdate.html">.offProgressUpdate</a>
                
            </li>
<li class="chapter" data-level="1.4.4.3.2.3" data-path=./UploadTask.abort.html data-name=".abort">
                <a href="./UploadTask.abort.html">.abort</a>
                
            </li>
<li class="chapter" data-level="1.4.4.3.2.4" data-path=./UploadTask.onHeadersReceived.html data-name=".onHeadersReceived">
                <a href="./UploadTask.onHeadersReceived.html">.onHeadersReceived</a>
                
            </li>
<li class="chapter" data-level="1.4.4.3.2.5" data-path=./UploadTask.offHeadersReceived.html data-name=".offHeadersReceived">
                <a href="./UploadTask.offHeadersReceived.html">.offHeadersReceived</a>
                
            </li></ul>
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.4.4" data-path=./wx.onSocketError.html data-name="WebSocket">
                <a href="./wx.onSocketError.html">WebSocket</a>
                <ul class="articles"><li class="chapter" data-level="1.4.4.4.1" data-path=./wx.onSocketError.html data-name="wx.onSocketError">
                <a href="./wx.onSocketError.html">wx.onSocketError</a>
                
            </li>
<li class="chapter" data-level="1.4.4.4.2" data-path=./wx.onSocketMessage.html data-name="wx.onSocketMessage">
                <a href="./wx.onSocketMessage.html">wx.onSocketMessage</a>
                
            </li>
<li class="chapter" data-level="1.4.4.4.3" data-path=./wx.onSocketClose.html data-name="wx.onSocketClose">
                <a href="./wx.onSocketClose.html">wx.onSocketClose</a>
                
            </li>
<li class="chapter" data-level="1.4.4.4.4" data-path=./wx.onSocketOpen.html data-name="wx.onSocketOpen">
                <a href="./wx.onSocketOpen.html">wx.onSocketOpen</a>
                
            </li>
<li class="chapter" data-level="1.4.4.4.5" data-path=./wx.sendSocketMessage.html data-name="wx.sendSocketMessage">
                <a href="./wx.sendSocketMessage.html">wx.sendSocketMessage</a>
                
            </li>
<li class="chapter" data-level="1.4.4.4.6" data-path=./wx.closeSocket.html data-name="wx.closeSocket">
                <a href="./wx.closeSocket.html">wx.closeSocket</a>
                
            </li>
<li class="chapter" data-level="1.4.4.4.7" data-path=./wx.connectSocket.html data-name="wx.connectSocket">
                <a href="./wx.connectSocket.html">wx.connectSocket</a>
                
            </li>
<li class="chapter" data-level="1.4.4.4.8" data-path=./SocketTask.html data-name="SocketTask">
                <a href="./SocketTask.html">SocketTask</a>
                <ul class="articles"><li class="chapter" data-level="1.4.4.4.8.1" data-path=./SocketTask.send.html data-name=".send">
                <a href="./SocketTask.send.html">.send</a>
                
            </li>
<li class="chapter" data-level="1.4.4.4.8.2" data-path=./SocketTask.close.html data-name=".close">
                <a href="./SocketTask.close.html">.close</a>
                
            </li>
<li class="chapter" data-level="1.4.4.4.8.3" data-path=./SocketTask.onOpen.html data-name=".onOpen">
                <a href="./SocketTask.onOpen.html">.onOpen</a>
                
            </li>
<li class="chapter" data-level="1.4.4.4.8.4" data-path=./SocketTask.onClose.html data-name=".onClose">
                <a href="./SocketTask.onClose.html">.onClose</a>
                
            </li>
<li class="chapter" data-level="1.4.4.4.8.5" data-path=./SocketTask.onError.html data-name=".onError">
                <a href="./SocketTask.onError.html">.onError</a>
                
            </li>
<li class="chapter" data-level="1.4.4.4.8.6" data-path=./SocketTask.onMessage.html data-name=".onMessage">
                <a href="./SocketTask.onMessage.html">.onMessage</a>
                
            </li></ul>
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.4.5" data-path=./wx.offLocalServiceResolveFail.html data-name="mDNS">
                <a href="./wx.offLocalServiceResolveFail.html">mDNS</a>
                <ul class="articles"><li class="chapter" data-level="1.4.4.5.1" data-path=./wx.offLocalServiceResolveFail.html data-name="wx.offLocalServiceResolveFail">
                <a href="./wx.offLocalServiceResolveFail.html">wx.offLocalServiceResolveFail</a>
                
            </li>
<li class="chapter" data-level="1.4.4.5.2" data-path=./wx.onLocalServiceResolveFail.html data-name="wx.onLocalServiceResolveFail">
                <a href="./wx.onLocalServiceResolveFail.html">wx.onLocalServiceResolveFail</a>
                
            </li>
<li class="chapter" data-level="1.4.4.5.3" data-path=./wx.offLocalServiceDiscoveryStop.html data-name="wx.offLocalServiceDiscoveryStop">
                <a href="./wx.offLocalServiceDiscoveryStop.html">wx.offLocalServiceDiscoveryStop</a>
                
            </li>
<li class="chapter" data-level="1.4.4.5.4" data-path=./wx.onLocalServiceDiscoveryStop.html data-name="wx.onLocalServiceDiscoveryStop">
                <a href="./wx.onLocalServiceDiscoveryStop.html">wx.onLocalServiceDiscoveryStop</a>
                
            </li>
<li class="chapter" data-level="1.4.4.5.5" data-path=./wx.offLocalServiceLost.html data-name="wx.offLocalServiceLost">
                <a href="./wx.offLocalServiceLost.html">wx.offLocalServiceLost</a>
                
            </li>
<li class="chapter" data-level="1.4.4.5.6" data-path=./wx.onLocalServiceLost.html data-name="wx.onLocalServiceLost">
                <a href="./wx.onLocalServiceLost.html">wx.onLocalServiceLost</a>
                
            </li>
<li class="chapter" data-level="1.4.4.5.7" data-path=./wx.offLocalServiceFound.html data-name="wx.offLocalServiceFound">
                <a href="./wx.offLocalServiceFound.html">wx.offLocalServiceFound</a>
                
            </li>
<li class="chapter" data-level="1.4.4.5.8" data-path=./wx.onLocalServiceFound.html data-name="wx.onLocalServiceFound">
                <a href="./wx.onLocalServiceFound.html">wx.onLocalServiceFound</a>
                
            </li>
<li class="chapter" data-level="1.4.4.5.9" data-path=./wx.stopLocalServiceDiscovery.html data-name="wx.stopLocalServiceDiscovery">
                <a href="./wx.stopLocalServiceDiscovery.html">wx.stopLocalServiceDiscovery</a>
                
            </li>
<li class="chapter" data-level="1.4.4.5.10" data-path=./wx.startLocalServiceDiscovery.html data-name="wx.startLocalServiceDiscovery">
                <a href="./wx.startLocalServiceDiscovery.html">wx.startLocalServiceDiscovery</a>
                
            </li></ul>
            </li></ul>
            </li>
<li class="chapter open" data-level="1.4.5" data-path=./wx.getStorageInfoSync.html data-name="数据缓存">
                <a href="./wx.getStorageInfoSync.html">数据缓存</a>
                <ul class="articles"><li class="chapter" data-level="1.4.5.1" data-path=./wx.getStorageInfoSync.html data-name="wx.getStorageInfoSync">
                <a href="./wx.getStorageInfoSync.html">wx.getStorageInfoSync</a>
                
            </li>
<li class="chapter" data-level="1.4.5.2" data-path=./wx.getStorageInfo.html data-name="wx.getStorageInfo">
                <a href="./wx.getStorageInfo.html">wx.getStorageInfo</a>
                
            </li>
<li class="chapter" data-level="1.4.5.3" data-path=./wx.clearStorageSync.html data-name="wx.clearStorageSync">
                <a href="./wx.clearStorageSync.html">wx.clearStorageSync</a>
                
            </li>
<li class="chapter" data-level="1.4.5.4" data-path=./wx.clearStorage.html data-name="wx.clearStorage">
                <a href="./wx.clearStorage.html">wx.clearStorage</a>
                
            </li>
<li class="chapter" data-level="1.4.5.5" data-path=./wx.removeStorageSync.html data-name="wx.removeStorageSync">
                <a href="./wx.removeStorageSync.html">wx.removeStorageSync</a>
                
            </li>
<li class="chapter" data-level="1.4.5.6" data-path=./wx.removeStorage.html data-name="wx.removeStorage">
                <a href="./wx.removeStorage.html">wx.removeStorage</a>
                
            </li>
<li class="chapter" data-level="1.4.5.7" data-path=./wx.setStorageSync.html data-name="wx.setStorageSync">
                <a href="./wx.setStorageSync.html">wx.setStorageSync</a>
                
            </li>
<li class="chapter" data-level="1.4.5.8" data-path=./wx.setStorage.html data-name="wx.setStorage">
                <a href="./wx.setStorage.html">wx.setStorage</a>
                
            </li>
<li class="chapter" data-level="1.4.5.9" data-path=./wx.getStorageSync.html data-name="wx.getStorageSync">
                <a href="./wx.getStorageSync.html">wx.getStorageSync</a>
                
            </li>
<li class="chapter" data-level="1.4.5.10" data-path=./wx.getStorage.html data-name="wx.getStorage">
                <a href="./wx.getStorage.html">wx.getStorage</a>
                
            </li></ul>
            </li>
<li class="chapter open" data-level="1.4.6" data-path=./wx.createMapContext.html data-name="媒体">
                <a href="./wx.createMapContext.html">媒体</a>
                <ul class="articles"><li class="chapter" data-level="1.4.6.1" data-path=./wx.createMapContext.html data-name="地图">
                <a href="./wx.createMapContext.html">地图</a>
                <ul class="articles"><li class="chapter" data-level="1.4.6.1.1" data-path=./wx.createMapContext.html data-name="wx.createMapContext">
                <a href="./wx.createMapContext.html">wx.createMapContext</a>
                
            </li>
<li class="chapter" data-level="1.4.6.1.2" data-path=./MapContext.html data-name="MapContext">
                <a href="./MapContext.html">MapContext</a>
                <ul class="articles"><li class="chapter" data-level="1.4.6.1.2.1" data-path=./MapContext.getCenterLocation.html data-name=".getCenterLocation">
                <a href="./MapContext.getCenterLocation.html">.getCenterLocation</a>
                
            </li>
<li class="chapter" data-level="1.4.6.1.2.2" data-path=./MapContext.moveToLocation.html data-name=".moveToLocation">
                <a href="./MapContext.moveToLocation.html">.moveToLocation</a>
                
            </li>
<li class="chapter" data-level="1.4.6.1.2.3" data-path=./MapContext.translateMarker.html data-name=".translateMarker">
                <a href="./MapContext.translateMarker.html">.translateMarker</a>
                
            </li>
<li class="chapter" data-level="1.4.6.1.2.4" data-path=./MapContext.includePoints.html data-name=".includePoints">
                <a href="./MapContext.includePoints.html">.includePoints</a>
                
            </li>
<li class="chapter" data-level="1.4.6.1.2.5" data-path=./MapContext.getRegion.html data-name=".getRegion">
                <a href="./MapContext.getRegion.html">.getRegion</a>
                
            </li>
<li class="chapter" data-level="1.4.6.1.2.6" data-path=./MapContext.getScale.html data-name=".getScale">
                <a href="./MapContext.getScale.html">.getScale</a>
                
            </li></ul>
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.6.2" data-path=./wx.compressImage.html data-name="图片">
                <a href="./wx.compressImage.html">图片</a>
                <ul class="articles"><li class="chapter" data-level="1.4.6.2.1" data-path=./wx.compressImage.html data-name="wx.compressImage">
                <a href="./wx.compressImage.html">wx.compressImage</a>
                
            </li>
<li class="chapter" data-level="1.4.6.2.2" data-path=./wx.saveImageToPhotosAlbum.html data-name="wx.saveImageToPhotosAlbum">
                <a href="./wx.saveImageToPhotosAlbum.html">wx.saveImageToPhotosAlbum</a>
                
            </li>
<li class="chapter" data-level="1.4.6.2.3" data-path=./wx.getImageInfo.html data-name="wx.getImageInfo">
                <a href="./wx.getImageInfo.html">wx.getImageInfo</a>
                
            </li>
<li class="chapter" data-level="1.4.6.2.4" data-path=./wx.previewImage.html data-name="wx.previewImage">
                <a href="./wx.previewImage.html">wx.previewImage</a>
                
            </li>
<li class="chapter" data-level="1.4.6.2.5" data-path=./wx.chooseImage.html data-name="wx.chooseImage">
                <a href="./wx.chooseImage.html">wx.chooseImage</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.6.3" data-path=./wx.saveVideoToPhotosAlbum.html data-name="视频">
                <a href="./wx.saveVideoToPhotosAlbum.html">视频</a>
                <ul class="articles"><li class="chapter" data-level="1.4.6.3.1" data-path=./wx.saveVideoToPhotosAlbum.html data-name="wx.saveVideoToPhotosAlbum">
                <a href="./wx.saveVideoToPhotosAlbum.html">wx.saveVideoToPhotosAlbum</a>
                
            </li>
<li class="chapter" data-level="1.4.6.3.2" data-path=./wx.chooseVideo.html data-name="wx.chooseVideo">
                <a href="./wx.chooseVideo.html">wx.chooseVideo</a>
                
            </li>
<li class="chapter" data-level="1.4.6.3.3" data-path=./wx.createVideoContext.html data-name="wx.createVideoContext">
                <a href="./wx.createVideoContext.html">wx.createVideoContext</a>
                
            </li>
<li class="chapter" data-level="1.4.6.3.4" data-path=./VideoContext.html data-name="VideoContext">
                <a href="./VideoContext.html">VideoContext</a>
                <ul class="articles"><li class="chapter" data-level="1.4.6.3.4.1" data-path=./VideoContext.play.html data-name=".play">
                <a href="./VideoContext.play.html">.play</a>
                
            </li>
<li class="chapter" data-level="1.4.6.3.4.2" data-path=./VideoContext.pause.html data-name=".pause">
                <a href="./VideoContext.pause.html">.pause</a>
                
            </li>
<li class="chapter" data-level="1.4.6.3.4.3" data-path=./VideoContext.stop.html data-name=".stop">
                <a href="./VideoContext.stop.html">.stop</a>
                
            </li>
<li class="chapter" data-level="1.4.6.3.4.4" data-path=./VideoContext.seek.html data-name=".seek">
                <a href="./VideoContext.seek.html">.seek</a>
                
            </li>
<li class="chapter" data-level="1.4.6.3.4.5" data-path=./VideoContext.sendDanmu.html data-name=".sendDanmu">
                <a href="./VideoContext.sendDanmu.html">.sendDanmu</a>
                
            </li>
<li class="chapter" data-level="1.4.6.3.4.6" data-path=./VideoContext.playbackRate.html data-name=".playbackRate">
                <a href="./VideoContext.playbackRate.html">.playbackRate</a>
                
            </li>
<li class="chapter" data-level="1.4.6.3.4.7" data-path=./VideoContext.requestFullScreen.html data-name=".requestFullScreen">
                <a href="./VideoContext.requestFullScreen.html">.requestFullScreen</a>
                
            </li>
<li class="chapter" data-level="1.4.6.3.4.8" data-path=./VideoContext.exitFullScreen.html data-name=".exitFullScreen">
                <a href="./VideoContext.exitFullScreen.html">.exitFullScreen</a>
                
            </li>
<li class="chapter" data-level="1.4.6.3.4.9" data-path=./VideoContext.showStatusBar.html data-name=".showStatusBar">
                <a href="./VideoContext.showStatusBar.html">.showStatusBar</a>
                
            </li>
<li class="chapter" data-level="1.4.6.3.4.10" data-path=./VideoContext.hideStatusBar.html data-name=".hideStatusBar">
                <a href="./VideoContext.hideStatusBar.html">.hideStatusBar</a>
                
            </li></ul>
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.6.4" data-path=./wx.stopVoice.html data-name="音频">
                <a href="./wx.stopVoice.html">音频</a>
                <ul class="articles"><li class="chapter" data-level="1.4.6.4.1" data-path=./wx.stopVoice.html data-name="wx.stopVoice">
                <a href="./wx.stopVoice.html">wx.stopVoice</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.2" data-path=./wx.pauseVoice.html data-name="wx.pauseVoice">
                <a href="./wx.pauseVoice.html">wx.pauseVoice</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.3" data-path=./wx.playVoice.html data-name="wx.playVoice">
                <a href="./wx.playVoice.html">wx.playVoice</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.4" data-path=./wx.setInnerAudioOption.html data-name="wx.setInnerAudioOption">
                <a href="./wx.setInnerAudioOption.html">wx.setInnerAudioOption</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.5" data-path=./wx.getAvailableAudioSources.html data-name="wx.getAvailableAudioSources">
                <a href="./wx.getAvailableAudioSources.html">wx.getAvailableAudioSources</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.6" data-path=./wx.createInnerAudioContext.html data-name="wx.createInnerAudioContext">
                <a href="./wx.createInnerAudioContext.html">wx.createInnerAudioContext</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.7" data-path=./wx.createAudioContext.html data-name="wx.createAudioContext">
                <a href="./wx.createAudioContext.html">wx.createAudioContext</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8" data-path=./InnerAudioContext.html data-name="InnerAudioContext">
                <a href="./InnerAudioContext.html">InnerAudioContext</a>
                <ul class="articles"><li class="chapter" data-level="1.4.6.4.8.1" data-path=./InnerAudioContext.onCanplay.html data-name=".onCanplay">
                <a href="./InnerAudioContext.onCanplay.html">.onCanplay</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.2" data-path=./InnerAudioContext.offCanplay.html data-name=".offCanplay">
                <a href="./InnerAudioContext.offCanplay.html">.offCanplay</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.3" data-path=./InnerAudioContext.onPlay.html data-name=".onPlay">
                <a href="./InnerAudioContext.onPlay.html">.onPlay</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.4" data-path=./InnerAudioContext.offPlay.html data-name=".offPlay">
                <a href="./InnerAudioContext.offPlay.html">.offPlay</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.5" data-path=./InnerAudioContext.onPause.html data-name=".onPause">
                <a href="./InnerAudioContext.onPause.html">.onPause</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.6" data-path=./InnerAudioContext.offPause.html data-name=".offPause">
                <a href="./InnerAudioContext.offPause.html">.offPause</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.7" data-path=./InnerAudioContext.onStop.html data-name=".onStop">
                <a href="./InnerAudioContext.onStop.html">.onStop</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.8" data-path=./InnerAudioContext.offStop.html data-name=".offStop">
                <a href="./InnerAudioContext.offStop.html">.offStop</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.9" data-path=./InnerAudioContext.onEnded.html data-name=".onEnded">
                <a href="./InnerAudioContext.onEnded.html">.onEnded</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.10" data-path=./InnerAudioContext.offEnded.html data-name=".offEnded">
                <a href="./InnerAudioContext.offEnded.html">.offEnded</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.11" data-path=./InnerAudioContext.onTimeUpdate.html data-name=".onTimeUpdate">
                <a href="./InnerAudioContext.onTimeUpdate.html">.onTimeUpdate</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.12" data-path=./InnerAudioContext.offTimeUpdate.html data-name=".offTimeUpdate">
                <a href="./InnerAudioContext.offTimeUpdate.html">.offTimeUpdate</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.13" data-path=./InnerAudioContext.onError.html data-name=".onError">
                <a href="./InnerAudioContext.onError.html">.onError</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.14" data-path=./InnerAudioContext.offError.html data-name=".offError">
                <a href="./InnerAudioContext.offError.html">.offError</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.15" data-path=./InnerAudioContext.onWaiting.html data-name=".onWaiting">
                <a href="./InnerAudioContext.onWaiting.html">.onWaiting</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.16" data-path=./InnerAudioContext.offWaiting.html data-name=".offWaiting">
                <a href="./InnerAudioContext.offWaiting.html">.offWaiting</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.17" data-path=./InnerAudioContext.onSeeking.html data-name=".onSeeking">
                <a href="./InnerAudioContext.onSeeking.html">.onSeeking</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.18" data-path=./InnerAudioContext.offSeeking.html data-name=".offSeeking">
                <a href="./InnerAudioContext.offSeeking.html">.offSeeking</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.19" data-path=./InnerAudioContext.onSeeked.html data-name=".onSeeked">
                <a href="./InnerAudioContext.onSeeked.html">.onSeeked</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.20" data-path=./InnerAudioContext.offSeeked.html data-name=".offSeeked">
                <a href="./InnerAudioContext.offSeeked.html">.offSeeked</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.21" data-path=./InnerAudioContext.play.html data-name=".play">
                <a href="./InnerAudioContext.play.html">.play</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.22" data-path=./InnerAudioContext.pause.html data-name=".pause">
                <a href="./InnerAudioContext.pause.html">.pause</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.23" data-path=./InnerAudioContext.stop.html data-name=".stop">
                <a href="./InnerAudioContext.stop.html">.stop</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.24" data-path=./InnerAudioContext.seek.html data-name=".seek">
                <a href="./InnerAudioContext.seek.html">.seek</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.8.25" data-path=./InnerAudioContext.destroy.html data-name=".destroy">
                <a href="./InnerAudioContext.destroy.html">.destroy</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.6.4.9" data-path=./AudioContext.html data-name="AudioContext">
                <a href="./AudioContext.html">AudioContext</a>
                <ul class="articles"><li class="chapter" data-level="1.4.6.4.9.1" data-path=./AudioContext.setSrc.html data-name=".setSrc">
                <a href="./AudioContext.setSrc.html">.setSrc</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.9.2" data-path=./AudioContext.play.html data-name=".play">
                <a href="./AudioContext.play.html">.play</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.9.3" data-path=./AudioContext.pause.html data-name=".pause">
                <a href="./AudioContext.pause.html">.pause</a>
                
            </li>
<li class="chapter" data-level="1.4.6.4.9.4" data-path=./AudioContext.seek.html data-name=".seek">
                <a href="./AudioContext.seek.html">.seek</a>
                
            </li></ul>
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.6.5" data-path=./wx.onBackgroundAudioStop.html data-name="背景音频">
                <a href="./wx.onBackgroundAudioStop.html">背景音频</a>
                <ul class="articles"><li class="chapter" data-level="1.4.6.5.1" data-path=./wx.onBackgroundAudioStop.html data-name="wx.onBackgroundAudioStop">
                <a href="./wx.onBackgroundAudioStop.html">wx.onBackgroundAudioStop</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.2" data-path=./wx.onBackgroundAudioPause.html data-name="wx.onBackgroundAudioPause">
                <a href="./wx.onBackgroundAudioPause.html">wx.onBackgroundAudioPause</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.3" data-path=./wx.onBackgroundAudioPlay.html data-name="wx.onBackgroundAudioPlay">
                <a href="./wx.onBackgroundAudioPlay.html">wx.onBackgroundAudioPlay</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.4" data-path=./wx.stopBackgroundAudio.html data-name="wx.stopBackgroundAudio">
                <a href="./wx.stopBackgroundAudio.html">wx.stopBackgroundAudio</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.5" data-path=./wx.seekBackgroundAudio.html data-name="wx.seekBackgroundAudio">
                <a href="./wx.seekBackgroundAudio.html">wx.seekBackgroundAudio</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.6" data-path=./wx.pauseBackgroundAudio.html data-name="wx.pauseBackgroundAudio">
                <a href="./wx.pauseBackgroundAudio.html">wx.pauseBackgroundAudio</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.7" data-path=./wx.playBackgroundAudio.html data-name="wx.playBackgroundAudio">
                <a href="./wx.playBackgroundAudio.html">wx.playBackgroundAudio</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.8" data-path=./wx.getBackgroundAudioPlayerState.html data-name="wx.getBackgroundAudioPlayerState">
                <a href="./wx.getBackgroundAudioPlayerState.html">wx.getBackgroundAudioPlayerState</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.9" data-path=./wx.getBackgroundAudioManager.html data-name="wx.getBackgroundAudioManager">
                <a href="./wx.getBackgroundAudioManager.html">wx.getBackgroundAudioManager</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.10" data-path=./BackgroundAudioManager.html data-name="BackgroundAudioManager">
                <a href="./BackgroundAudioManager.html">BackgroundAudioManager</a>
                <ul class="articles"><li class="chapter" data-level="1.4.6.5.10.1" data-path=./BackgroundAudioManager.play.html data-name=".play">
                <a href="./BackgroundAudioManager.play.html">.play</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.10.2" data-path=./BackgroundAudioManager.pause.html data-name=".pause">
                <a href="./BackgroundAudioManager.pause.html">.pause</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.10.3" data-path=./BackgroundAudioManager.seek.html data-name=".seek">
                <a href="./BackgroundAudioManager.seek.html">.seek</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.10.4" data-path=./BackgroundAudioManager.stop.html data-name=".stop">
                <a href="./BackgroundAudioManager.stop.html">.stop</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.10.5" data-path=./BackgroundAudioManager.onCanplay.html data-name=".onCanplay">
                <a href="./BackgroundAudioManager.onCanplay.html">.onCanplay</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.10.6" data-path=./BackgroundAudioManager.onWaiting.html data-name=".onWaiting">
                <a href="./BackgroundAudioManager.onWaiting.html">.onWaiting</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.10.7" data-path=./BackgroundAudioManager.onError.html data-name=".onError">
                <a href="./BackgroundAudioManager.onError.html">.onError</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.10.8" data-path=./BackgroundAudioManager.onPlay.html data-name=".onPlay">
                <a href="./BackgroundAudioManager.onPlay.html">.onPlay</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.10.9" data-path=./BackgroundAudioManager.onPause.html data-name=".onPause">
                <a href="./BackgroundAudioManager.onPause.html">.onPause</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.10.10" data-path=./BackgroundAudioManager.onSeeking.html data-name=".onSeeking">
                <a href="./BackgroundAudioManager.onSeeking.html">.onSeeking</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.10.11" data-path=./BackgroundAudioManager.onSeeked.html data-name=".onSeeked">
                <a href="./BackgroundAudioManager.onSeeked.html">.onSeeked</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.10.12" data-path=./BackgroundAudioManager.onEnded.html data-name=".onEnded">
                <a href="./BackgroundAudioManager.onEnded.html">.onEnded</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.10.13" data-path=./BackgroundAudioManager.onStop.html data-name=".onStop">
                <a href="./BackgroundAudioManager.onStop.html">.onStop</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.10.14" data-path=./BackgroundAudioManager.onTimeUpdate.html data-name=".onTimeUpdate">
                <a href="./BackgroundAudioManager.onTimeUpdate.html">.onTimeUpdate</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.10.15" data-path=./BackgroundAudioManager.onNext.html data-name=".onNext">
                <a href="./BackgroundAudioManager.onNext.html">.onNext</a>
                
            </li>
<li class="chapter" data-level="1.4.6.5.10.16" data-path=./BackgroundAudioManager.onPrev.html data-name=".onPrev">
                <a href="./BackgroundAudioManager.onPrev.html">.onPrev</a>
                
            </li></ul>
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.6.6" data-path=./wx.createLivePusherContext.html data-name="实时音视频">
                <a href="./wx.createLivePusherContext.html">实时音视频</a>
                <ul class="articles"><li class="chapter" data-level="1.4.6.6.1" data-path=./wx.createLivePusherContext.html data-name="wx.createLivePusherContext">
                <a href="./wx.createLivePusherContext.html">wx.createLivePusherContext</a>
                
            </li>
<li class="chapter" data-level="1.4.6.6.2" data-path=./wx.createLivePlayerContext.html data-name="wx.createLivePlayerContext">
                <a href="./wx.createLivePlayerContext.html">wx.createLivePlayerContext</a>
                
            </li>
<li class="chapter" data-level="1.4.6.6.3" data-path=./LivePlayerContext.html data-name="LivePlayerContext">
                <a href="./LivePlayerContext.html">LivePlayerContext</a>
                <ul class="articles"><li class="chapter" data-level="1.4.6.6.3.1" data-path=./LivePlayerContext.play.html data-name=".play">
                <a href="./LivePlayerContext.play.html">.play</a>
                
            </li>
<li class="chapter" data-level="1.4.6.6.3.2" data-path=./LivePlayerContext.stop.html data-name=".stop">
                <a href="./LivePlayerContext.stop.html">.stop</a>
                
            </li>
<li class="chapter" data-level="1.4.6.6.3.3" data-path=./LivePlayerContext.mute.html data-name=".mute">
                <a href="./LivePlayerContext.mute.html">.mute</a>
                
            </li>
<li class="chapter" data-level="1.4.6.6.3.4" data-path=./LivePlayerContext.pause.html data-name=".pause">
                <a href="./LivePlayerContext.pause.html">.pause</a>
                
            </li>
<li class="chapter" data-level="1.4.6.6.3.5" data-path=./LivePlayerContext.resume.html data-name=".resume">
                <a href="./LivePlayerContext.resume.html">.resume</a>
                
            </li>
<li class="chapter" data-level="1.4.6.6.3.6" data-path=./LivePlayerContext.requestFullScreen.html data-name=".requestFullScreen">
                <a href="./LivePlayerContext.requestFullScreen.html">.requestFullScreen</a>
                
            </li>
<li class="chapter" data-level="1.4.6.6.3.7" data-path=./LivePlayerContext.exitFullScreen.html data-name=".exitFullScreen">
                <a href="./LivePlayerContext.exitFullScreen.html">.exitFullScreen</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.6.6.4" data-path=./LivePusherContext.html data-name="LivePusherContext">
                <a href="./LivePusherContext.html">LivePusherContext</a>
                <ul class="articles"><li class="chapter" data-level="1.4.6.6.4.1" data-path=./LivePusherContext.start.html data-name=".start">
                <a href="./LivePusherContext.start.html">.start</a>
                
            </li>
<li class="chapter" data-level="1.4.6.6.4.2" data-path=./LivePusherContext.stop.html data-name=".stop">
                <a href="./LivePusherContext.stop.html">.stop</a>
                
            </li>
<li class="chapter" data-level="1.4.6.6.4.3" data-path=./LivePusherContext.pause.html data-name=".pause">
                <a href="./LivePusherContext.pause.html">.pause</a>
                
            </li>
<li class="chapter" data-level="1.4.6.6.4.4" data-path=./LivePusherContext.resume.html data-name=".resume">
                <a href="./LivePusherContext.resume.html">.resume</a>
                
            </li>
<li class="chapter" data-level="1.4.6.6.4.5" data-path=./LivePusherContext.switchCamera.html data-name=".switchCamera">
                <a href="./LivePusherContext.switchCamera.html">.switchCamera</a>
                
            </li>
<li class="chapter" data-level="1.4.6.6.4.6" data-path=./LivePusherContext.snapshot.html data-name=".snapshot">
                <a href="./LivePusherContext.snapshot.html">.snapshot</a>
                
            </li>
<li class="chapter" data-level="1.4.6.6.4.7" data-path=./LivePusherContext.toggleTorch.html data-name=".toggleTorch">
                <a href="./LivePusherContext.toggleTorch.html">.toggleTorch</a>
                
            </li>
<li class="chapter" data-level="1.4.6.6.4.8" data-path=./LivePusherContext.playBGM.html data-name=".playBGM">
                <a href="./LivePusherContext.playBGM.html">.playBGM</a>
                
            </li>
<li class="chapter" data-level="1.4.6.6.4.9" data-path=./LivePusherContext.stopBGM.html data-name=".stopBGM">
                <a href="./LivePusherContext.stopBGM.html">.stopBGM</a>
                
            </li>
<li class="chapter" data-level="1.4.6.6.4.10" data-path=./LivePusherContext.pauseBGM.html data-name=".pauseBGM">
                <a href="./LivePusherContext.pauseBGM.html">.pauseBGM</a>
                
            </li>
<li class="chapter" data-level="1.4.6.6.4.11" data-path=./LivePusherContext.resumeBGM.html data-name=".resumeBGM">
                <a href="./LivePusherContext.resumeBGM.html">.resumeBGM</a>
                
            </li>
<li class="chapter" data-level="1.4.6.6.4.12" data-path=./LivePusherContext.setBGMVolume.html data-name=".setBGMVolume">
                <a href="./LivePusherContext.setBGMVolume.html">.setBGMVolume</a>
                
            </li></ul>
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.6.7" data-path=./wx.stopRecord.html data-name="录音">
                <a href="./wx.stopRecord.html">录音</a>
                <ul class="articles"><li class="chapter" data-level="1.4.6.7.1" data-path=./wx.stopRecord.html data-name="wx.stopRecord">
                <a href="./wx.stopRecord.html">wx.stopRecord</a>
                
            </li>
<li class="chapter" data-level="1.4.6.7.2" data-path=./wx.startRecord.html data-name="wx.startRecord">
                <a href="./wx.startRecord.html">wx.startRecord</a>
                
            </li>
<li class="chapter" data-level="1.4.6.7.3" data-path=./wx.getRecorderManager.html data-name="wx.getRecorderManager">
                <a href="./wx.getRecorderManager.html">wx.getRecorderManager</a>
                
            </li>
<li class="chapter" data-level="1.4.6.7.4" data-path=./RecorderManager.html data-name="RecorderManager">
                <a href="./RecorderManager.html">RecorderManager</a>
                <ul class="articles"><li class="chapter" data-level="1.4.6.7.4.1" data-path=./RecorderManager.start.html data-name=".start">
                <a href="./RecorderManager.start.html">.start</a>
                
            </li>
<li class="chapter" data-level="1.4.6.7.4.2" data-path=./RecorderManager.pause.html data-name=".pause">
                <a href="./RecorderManager.pause.html">.pause</a>
                
            </li>
<li class="chapter" data-level="1.4.6.7.4.3" data-path=./RecorderManager.resume.html data-name=".resume">
                <a href="./RecorderManager.resume.html">.resume</a>
                
            </li>
<li class="chapter" data-level="1.4.6.7.4.4" data-path=./RecorderManager.stop.html data-name=".stop">
                <a href="./RecorderManager.stop.html">.stop</a>
                
            </li>
<li class="chapter" data-level="1.4.6.7.4.5" data-path=./RecorderManager.onStart.html data-name=".onStart">
                <a href="./RecorderManager.onStart.html">.onStart</a>
                
            </li>
<li class="chapter" data-level="1.4.6.7.4.6" data-path=./RecorderManager.onResume.html data-name=".onResume">
                <a href="./RecorderManager.onResume.html">.onResume</a>
                
            </li>
<li class="chapter" data-level="1.4.6.7.4.7" data-path=./RecorderManager.onPause.html data-name=".onPause">
                <a href="./RecorderManager.onPause.html">.onPause</a>
                
            </li>
<li class="chapter" data-level="1.4.6.7.4.8" data-path=./RecorderManager.onStop.html data-name=".onStop">
                <a href="./RecorderManager.onStop.html">.onStop</a>
                
            </li>
<li class="chapter" data-level="1.4.6.7.4.9" data-path=./RecorderManager.onFrameRecorded.html data-name=".onFrameRecorded">
                <a href="./RecorderManager.onFrameRecorded.html">.onFrameRecorded</a>
                
            </li>
<li class="chapter" data-level="1.4.6.7.4.10" data-path=./RecorderManager.onError.html data-name=".onError">
                <a href="./RecorderManager.onError.html">.onError</a>
                
            </li>
<li class="chapter" data-level="1.4.6.7.4.11" data-path=./RecorderManager.onInterruptionBegin.html data-name=".onInterruptionBegin">
                <a href="./RecorderManager.onInterruptionBegin.html">.onInterruptionBegin</a>
                
            </li>
<li class="chapter" data-level="1.4.6.7.4.12" data-path=./RecorderManager.onInterruptionEnd.html data-name=".onInterruptionEnd">
                <a href="./RecorderManager.onInterruptionEnd.html">.onInterruptionEnd</a>
                
            </li></ul>
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.6.8" data-path=./wx.createCameraContext.html data-name="相机">
                <a href="./wx.createCameraContext.html">相机</a>
                <ul class="articles"><li class="chapter" data-level="1.4.6.8.1" data-path=./wx.createCameraContext.html data-name="wx.createCameraContext">
                <a href="./wx.createCameraContext.html">wx.createCameraContext</a>
                
            </li>
<li class="chapter" data-level="1.4.6.8.2" data-path=./CameraContext.html data-name="CameraContext">
                <a href="./CameraContext.html">CameraContext</a>
                <ul class="articles"><li class="chapter" data-level="1.4.6.8.2.1" data-path=./CameraContext.takePhoto.html data-name=".takePhoto">
                <a href="./CameraContext.takePhoto.html">.takePhoto</a>
                
            </li>
<li class="chapter" data-level="1.4.6.8.2.2" data-path=./CameraContext.startRecord.html data-name=".startRecord">
                <a href="./CameraContext.startRecord.html">.startRecord</a>
                
            </li>
<li class="chapter" data-level="1.4.6.8.2.3" data-path=./CameraContext.stopRecord.html data-name=".stopRecord">
                <a href="./CameraContext.stopRecord.html">.stopRecord</a>
                
            </li></ul>
            </li></ul>
            </li></ul>
            </li>
<li class="chapter open" data-level="1.4.7" data-path=./wx.openLocation.html data-name="位置">
                <a href="./wx.openLocation.html">位置</a>
                <ul class="articles"><li class="chapter" data-level="1.4.7.1" data-path=./wx.openLocation.html data-name="wx.openLocation">
                <a href="./wx.openLocation.html">wx.openLocation</a>
                
            </li>
<li class="chapter" data-level="1.4.7.2" data-path=./wx.getLocation.html data-name="wx.getLocation">
                <a href="./wx.getLocation.html">wx.getLocation</a>
                
            </li>
<li class="chapter" data-level="1.4.7.3" data-path=./wx.chooseLocation.html data-name="wx.chooseLocation">
                <a href="./wx.chooseLocation.html">wx.chooseLocation</a>
                
            </li></ul>
            </li>
<li class="chapter open" data-level="1.4.8" data-path=./wx.updateShareMenu.html data-name="转发">
                <a href="./wx.updateShareMenu.html">转发</a>
                <ul class="articles"><li class="chapter" data-level="1.4.8.1" data-path=./wx.updateShareMenu.html data-name="wx.updateShareMenu">
                <a href="./wx.updateShareMenu.html">wx.updateShareMenu</a>
                
            </li>
<li class="chapter" data-level="1.4.8.2" data-path=./wx.showShareMenu.html data-name="wx.showShareMenu">
                <a href="./wx.showShareMenu.html">wx.showShareMenu</a>
                
            </li>
<li class="chapter" data-level="1.4.8.3" data-path=./wx.hideShareMenu.html data-name="wx.hideShareMenu">
                <a href="./wx.hideShareMenu.html">wx.hideShareMenu</a>
                
            </li>
<li class="chapter" data-level="1.4.8.4" data-path=./wx.getShareInfo.html data-name="wx.getShareInfo">
                <a href="./wx.getShareInfo.html">wx.getShareInfo</a>
                
            </li></ul>
            </li>
<li class="chapter open" data-level="1.4.9" data-path=./wx.createCanvasContext.html data-name="画布">
                <a href="./wx.createCanvasContext.html">画布</a>
                <ul class="articles"><li class="chapter" data-level="1.4.9.1" data-path=./wx.createCanvasContext.html data-name="wx.createCanvasContext">
                <a href="./wx.createCanvasContext.html">wx.createCanvasContext</a>
                
            </li>
<li class="chapter" data-level="1.4.9.2" data-path=./wx.canvasToTempFilePath.html data-name="wx.canvasToTempFilePath">
                <a href="./wx.canvasToTempFilePath.html">wx.canvasToTempFilePath</a>
                
            </li>
<li class="chapter" data-level="1.4.9.3" data-path=./wx.canvasPutImageData.html data-name="wx.canvasPutImageData">
                <a href="./wx.canvasPutImageData.html">wx.canvasPutImageData</a>
                
            </li>
<li class="chapter" data-level="1.4.9.4" data-path=./wx.canvasGetImageData.html data-name="wx.canvasGetImageData">
                <a href="./wx.canvasGetImageData.html">wx.canvasGetImageData</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5" data-path=./CanvasContext.html data-name="CanvasContext">
                <a href="./CanvasContext.html">CanvasContext</a>
                <ul class="articles"><li class="chapter" data-level="1.4.9.5.1" data-path=./CanvasContext.draw.html data-name=".draw">
                <a href="./CanvasContext.draw.html">.draw</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.2" data-path=./CanvasContext.createLinearGradient.html data-name=".createLinearGradient">
                <a href="./CanvasContext.createLinearGradient.html">.createLinearGradient</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.3" data-path=./CanvasContext.createCircularGradient.html data-name=".createCircularGradient">
                <a href="./CanvasContext.createCircularGradient.html">.createCircularGradient</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.4" data-path=./CanvasContext.createPattern.html data-name=".createPattern">
                <a href="./CanvasContext.createPattern.html">.createPattern</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.5" data-path=./CanvasContext.measureText.html data-name=".measureText">
                <a href="./CanvasContext.measureText.html">.measureText</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.6" data-path=./CanvasContext.save.html data-name=".save">
                <a href="./CanvasContext.save.html">.save</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.7" data-path=./CanvasContext.restore.html data-name=".restore">
                <a href="./CanvasContext.restore.html">.restore</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.8" data-path=./CanvasContext.beginPath.html data-name=".beginPath">
                <a href="./CanvasContext.beginPath.html">.beginPath</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.9" data-path=./CanvasContext.moveTo.html data-name=".moveTo">
                <a href="./CanvasContext.moveTo.html">.moveTo</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.10" data-path=./CanvasContext.lineTo.html data-name=".lineTo">
                <a href="./CanvasContext.lineTo.html">.lineTo</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.11" data-path=./CanvasContext.quadraticCurveTo.html data-name=".quadraticCurveTo">
                <a href="./CanvasContext.quadraticCurveTo.html">.quadraticCurveTo</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.12" data-path=./CanvasContext.bezierCurveTo.html data-name=".bezierCurveTo">
                <a href="./CanvasContext.bezierCurveTo.html">.bezierCurveTo</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.13" data-path=./CanvasContext.arc.html data-name=".arc">
                <a href="./CanvasContext.arc.html">.arc</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.14" data-path=./CanvasContext.rect.html data-name=".rect">
                <a href="./CanvasContext.rect.html">.rect</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.15" data-path=./CanvasContext.arcTo.html data-name=".arcTo">
                <a href="./CanvasContext.arcTo.html">.arcTo</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.16" data-path=./CanvasContext.clip.html data-name=".clip">
                <a href="./CanvasContext.clip.html">.clip</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.17" data-path=./CanvasContext.fillRect.html data-name=".fillRect">
                <a href="./CanvasContext.fillRect.html">.fillRect</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.18" data-path=./CanvasContext.strokeRect.html data-name=".strokeRect">
                <a href="./CanvasContext.strokeRect.html">.strokeRect</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.19" data-path=./CanvasContext.clearRect.html data-name=".clearRect">
                <a href="./CanvasContext.clearRect.html">.clearRect</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.20" data-path=./CanvasContext.fill.html data-name=".fill">
                <a href="./CanvasContext.fill.html">.fill</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.21" data-path=./CanvasContext.stroke.html data-name=".stroke">
                <a href="./CanvasContext.stroke.html">.stroke</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.22" data-path=./CanvasContext.closePath.html data-name=".closePath">
                <a href="./CanvasContext.closePath.html">.closePath</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.23" data-path=./CanvasContext.scale.html data-name=".scale">
                <a href="./CanvasContext.scale.html">.scale</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.24" data-path=./CanvasContext.rotate.html data-name=".rotate">
                <a href="./CanvasContext.rotate.html">.rotate</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.25" data-path=./CanvasContext.translate.html data-name=".translate">
                <a href="./CanvasContext.translate.html">.translate</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.26" data-path=./CanvasContext.drawImage.html data-name=".drawImage">
                <a href="./CanvasContext.drawImage.html">.drawImage</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.27" data-path=./CanvasContext.strokeText.html data-name=".strokeText">
                <a href="./CanvasContext.strokeText.html">.strokeText</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.28" data-path=./CanvasContext.transform.html data-name=".transform">
                <a href="./CanvasContext.transform.html">.transform</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.29" data-path=./CanvasContext.setTransform.html data-name=".setTransform">
                <a href="./CanvasContext.setTransform.html">.setTransform</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.30" data-path=./CanvasContext.setFillStyle.html data-name=".setFillStyle">
                <a href="./CanvasContext.setFillStyle.html">.setFillStyle</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.31" data-path=./CanvasContext.setStrokeStyle.html data-name=".setStrokeStyle">
                <a href="./CanvasContext.setStrokeStyle.html">.setStrokeStyle</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.32" data-path=./CanvasContext.setShadow.html data-name=".setShadow">
                <a href="./CanvasContext.setShadow.html">.setShadow</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.33" data-path=./CanvasContext.setGlobalAlpha.html data-name=".setGlobalAlpha">
                <a href="./CanvasContext.setGlobalAlpha.html">.setGlobalAlpha</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.34" data-path=./CanvasContext.setLineWidth.html data-name=".setLineWidth">
                <a href="./CanvasContext.setLineWidth.html">.setLineWidth</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.35" data-path=./CanvasContext.setLineJoin.html data-name=".setLineJoin">
                <a href="./CanvasContext.setLineJoin.html">.setLineJoin</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.36" data-path=./CanvasContext.setLineCap.html data-name=".setLineCap">
                <a href="./CanvasContext.setLineCap.html">.setLineCap</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.37" data-path=./CanvasContext.setLineDash.html data-name=".setLineDash">
                <a href="./CanvasContext.setLineDash.html">.setLineDash</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.38" data-path=./CanvasContext.setMiterLimit.html data-name=".setMiterLimit">
                <a href="./CanvasContext.setMiterLimit.html">.setMiterLimit</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.39" data-path=./CanvasContext.fillText.html data-name=".fillText">
                <a href="./CanvasContext.fillText.html">.fillText</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.40" data-path=./CanvasContext.setFontSize.html data-name=".setFontSize">
                <a href="./CanvasContext.setFontSize.html">.setFontSize</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.41" data-path=./CanvasContext.setTextAlign.html data-name=".setTextAlign">
                <a href="./CanvasContext.setTextAlign.html">.setTextAlign</a>
                
            </li>
<li class="chapter" data-level="1.4.9.5.42" data-path=./CanvasContext.setTextBaseline.html data-name=".setTextBaseline">
                <a href="./CanvasContext.setTextBaseline.html">.setTextBaseline</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.9.6" data-path=./CanvasGradient.html data-name="CanvasGradient">
                <a href="./CanvasGradient.html">CanvasGradient</a>
                <ul class="articles"><li class="chapter" data-level="1.4.9.6.1" data-path=./CanvasGradient.addColorStop.html data-name=".addColorStop">
                <a href="./CanvasGradient.addColorStop.html">.addColorStop</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.9.7" data-path=./Color.html data-name="Color">
                <a href="./Color.html">Color</a>
                
            </li></ul>
            </li>
<li class="chapter open" data-level="1.4.10" data-path=./wx.getFileSystemManager.html data-name="文件">
                <a href="./wx.getFileSystemManager.html">文件</a>
                <ul class="articles"><li class="chapter" data-level="1.4.10.1" data-path=./wx.getFileSystemManager.html data-name="wx.getFileSystemManager">
                <a href="./wx.getFileSystemManager.html">wx.getFileSystemManager</a>
                
            </li>
<li class="chapter" data-level="1.4.10.2" data-path=./wx.getFileInfo.html data-name="wx.getFileInfo">
                <a href="./wx.getFileInfo.html">wx.getFileInfo</a>
                
            </li>
<li class="chapter" data-level="1.4.10.3" data-path=./wx.removeSavedFile.html data-name="wx.removeSavedFile">
                <a href="./wx.removeSavedFile.html">wx.removeSavedFile</a>
                
            </li>
<li class="chapter" data-level="1.4.10.4" data-path=./wx.getSavedFileInfo.html data-name="wx.getSavedFileInfo">
                <a href="./wx.getSavedFileInfo.html">wx.getSavedFileInfo</a>
                
            </li>
<li class="chapter" data-level="1.4.10.5" data-path=./wx.getSavedFileList.html data-name="wx.getSavedFileList">
                <a href="./wx.getSavedFileList.html">wx.getSavedFileList</a>
                
            </li>
<li class="chapter" data-level="1.4.10.6" data-path=./wx.openDocument.html data-name="wx.openDocument">
                <a href="./wx.openDocument.html">wx.openDocument</a>
                
            </li>
<li class="chapter" data-level="1.4.10.7" data-path=./wx.saveFile.html data-name="wx.saveFile">
                <a href="./wx.saveFile.html">wx.saveFile</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8" data-path=./FileSystemManager.html data-name="FileSystemManager">
                <a href="./FileSystemManager.html">FileSystemManager</a>
                <ul class="articles"><li class="chapter" data-level="1.4.10.8.1" data-path=./FileSystemManager.access.html data-name=".access">
                <a href="./FileSystemManager.access.html">.access</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.2" data-path=./FileSystemManager.accessSync.html data-name=".accessSync">
                <a href="./FileSystemManager.accessSync.html">.accessSync</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.3" data-path=./FileSystemManager.appendFile.html data-name=".appendFile">
                <a href="./FileSystemManager.appendFile.html">.appendFile</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.4" data-path=./FileSystemManager.appendFileSync.html data-name=".appendFileSync">
                <a href="./FileSystemManager.appendFileSync.html">.appendFileSync</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.5" data-path=./FileSystemManager.saveFile.html data-name=".saveFile">
                <a href="./FileSystemManager.saveFile.html">.saveFile</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.6" data-path=./FileSystemManager.saveFileSync.html data-name=".saveFileSync">
                <a href="./FileSystemManager.saveFileSync.html">.saveFileSync</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.7" data-path=./FileSystemManager.getSavedFileList.html data-name=".getSavedFileList">
                <a href="./FileSystemManager.getSavedFileList.html">.getSavedFileList</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.8" data-path=./FileSystemManager.removeSavedFile.html data-name=".removeSavedFile">
                <a href="./FileSystemManager.removeSavedFile.html">.removeSavedFile</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.9" data-path=./FileSystemManager.copyFile.html data-name=".copyFile">
                <a href="./FileSystemManager.copyFile.html">.copyFile</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.10" data-path=./FileSystemManager.copyFileSync.html data-name=".copyFileSync">
                <a href="./FileSystemManager.copyFileSync.html">.copyFileSync</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.11" data-path=./FileSystemManager.getFileInfo.html data-name=".getFileInfo">
                <a href="./FileSystemManager.getFileInfo.html">.getFileInfo</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.12" data-path=./FileSystemManager.mkdir.html data-name=".mkdir">
                <a href="./FileSystemManager.mkdir.html">.mkdir</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.13" data-path=./FileSystemManager.mkdirSync.html data-name=".mkdirSync">
                <a href="./FileSystemManager.mkdirSync.html">.mkdirSync</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.14" data-path=./FileSystemManager.readFile.html data-name=".readFile">
                <a href="./FileSystemManager.readFile.html">.readFile</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.15" data-path=./FileSystemManager.readFileSync.html data-name=".readFileSync">
                <a href="./FileSystemManager.readFileSync.html">.readFileSync</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.16" data-path=./FileSystemManager.readdir.html data-name=".readdir">
                <a href="./FileSystemManager.readdir.html">.readdir</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.17" data-path=./FileSystemManager.readdirSync.html data-name=".readdirSync">
                <a href="./FileSystemManager.readdirSync.html">.readdirSync</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.18" data-path=./FileSystemManager.rename.html data-name=".rename">
                <a href="./FileSystemManager.rename.html">.rename</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.19" data-path=./FileSystemManager.renameSync.html data-name=".renameSync">
                <a href="./FileSystemManager.renameSync.html">.renameSync</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.20" data-path=./FileSystemManager.rmdir.html data-name=".rmdir">
                <a href="./FileSystemManager.rmdir.html">.rmdir</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.21" data-path=./FileSystemManager.rmdirSync.html data-name=".rmdirSync">
                <a href="./FileSystemManager.rmdirSync.html">.rmdirSync</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.22" data-path=./FileSystemManager.stat.html data-name=".stat">
                <a href="./FileSystemManager.stat.html">.stat</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.23" data-path=./FileSystemManager.statSync.html data-name=".statSync">
                <a href="./FileSystemManager.statSync.html">.statSync</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.24" data-path=./FileSystemManager.unlink.html data-name=".unlink">
                <a href="./FileSystemManager.unlink.html">.unlink</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.25" data-path=./FileSystemManager.unlinkSync.html data-name=".unlinkSync">
                <a href="./FileSystemManager.unlinkSync.html">.unlinkSync</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.26" data-path=./FileSystemManager.unzip.html data-name=".unzip">
                <a href="./FileSystemManager.unzip.html">.unzip</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.27" data-path=./FileSystemManager.writeFile.html data-name=".writeFile">
                <a href="./FileSystemManager.writeFile.html">.writeFile</a>
                
            </li>
<li class="chapter" data-level="1.4.10.8.28" data-path=./FileSystemManager.writeFileSync.html data-name=".writeFileSync">
                <a href="./FileSystemManager.writeFileSync.html">.writeFileSync</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.10.9" data-path=./Stats.html data-name="Stats">
                <a href="./Stats.html">Stats</a>
                <ul class="articles"><li class="chapter" data-level="1.4.10.9.1" data-path=./Stats.isDirectory.html data-name=".isDirectory">
                <a href="./Stats.isDirectory.html">.isDirectory</a>
                
            </li>
<li class="chapter" data-level="1.4.10.9.2" data-path=./Stats.isFile.html data-name=".isFile">
                <a href="./Stats.isFile.html">.isFile</a>
                
            </li></ul>
            </li></ul>
            </li>
<li class="chapter open" data-level="1.4.11" data-path=./wx.checkSession.html data-name="开放接口">
                <a href="./wx.checkSession.html">开放接口</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.1" data-path=./wx.checkSession.html data-name="登录">
                <a href="./wx.checkSession.html">登录</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.1.1" data-path=./wx.checkSession.html data-name="wx.checkSession">
                <a href="./wx.checkSession.html">wx.checkSession</a>
                
            </li>
<li class="chapter" data-level="1.4.11.1.2" data-path=./wx.login.html data-name="wx.login">
                <a href="./wx.login.html">wx.login</a>
                
            </li>
<li class="chapter" data-level="1.4.11.1.3" data-path=./code2Session.html data-name="code2Session">
                <a href="./code2Session.html">code2Session</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.2" data-path=./wx.navigateToMiniProgram.html data-name="小程序跳转">
                <a href="./wx.navigateToMiniProgram.html">小程序跳转</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.2.1" data-path=./wx.navigateToMiniProgram.html data-name="wx.navigateToMiniProgram">
                <a href="./wx.navigateToMiniProgram.html">wx.navigateToMiniProgram</a>
                
            </li>
<li class="chapter" data-level="1.4.11.2.2" data-path=./wx.navigateBackMiniProgram.html data-name="wx.navigateBackMiniProgram">
                <a href="./wx.navigateBackMiniProgram.html">wx.navigateBackMiniProgram</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.3" data-path=./wx.getAccountInfoSync.html data-name="帐号信息">
                <a href="./wx.getAccountInfoSync.html">帐号信息</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.3.1" data-path=./wx.getAccountInfoSync.html data-name="wx.getAccountInfoSync">
                <a href="./wx.getAccountInfoSync.html">wx.getAccountInfoSync</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.4" data-path=./wx.getUserInfo.html data-name="用户信息">
                <a href="./wx.getUserInfo.html">用户信息</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.4.1" data-path=./wx.getUserInfo.html data-name="wx.getUserInfo">
                <a href="./wx.getUserInfo.html">wx.getUserInfo</a>
                
            </li>
<li class="chapter" data-level="1.4.11.4.2" data-path=./getPaidUnionId.html data-name="getPaidUnionId">
                <a href="./getPaidUnionId.html">getPaidUnionId</a>
                
            </li>
<li class="chapter" data-level="1.4.11.4.3" data-path=./UserInfo.html data-name="UserInfo">
                <a href="./UserInfo.html">UserInfo</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.5" data-path=./getAccessToken.html data-name="接口调用凭证">
                <a href="./getAccessToken.html">接口调用凭证</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.5.1" data-path=./getAccessToken.html data-name="getAccessToken">
                <a href="./getAccessToken.html">getAccessToken</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.6" data-path=./wx.reportMonitor.html data-name="数据上报">
                <a href="./wx.reportMonitor.html">数据上报</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.6.1" data-path=./wx.reportMonitor.html data-name="wx.reportMonitor">
                <a href="./wx.reportMonitor.html">wx.reportMonitor</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.7" data-path=./wx.reportAnalytics.html data-name="数据分析">
                <a href="./wx.reportAnalytics.html">数据分析</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.7.1" data-path=./wx.reportAnalytics.html data-name="wx.reportAnalytics">
                <a href="./wx.reportAnalytics.html">wx.reportAnalytics</a>
                
            </li>
<li class="chapter" data-level="1.4.11.7.2" data-path=./getAnalysisDailyRetain.html data-name="访问留存">
                <a href="./getAnalysisDailyRetain.html">访问留存</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.7.2.1" data-path=./getAnalysisDailyRetain.html data-name="getAnalysisDailyRetain">
                <a href="./getAnalysisDailyRetain.html">getAnalysisDailyRetain</a>
                
            </li>
<li class="chapter" data-level="1.4.11.7.2.2" data-path=./getAnalysisMonthlyRetain.html data-name="getAnalysisMonthlyRetain">
                <a href="./getAnalysisMonthlyRetain.html">getAnalysisMonthlyRetain</a>
                
            </li>
<li class="chapter" data-level="1.4.11.7.2.3" data-path=./getAnalysisWeeklyRetain.html data-name="getAnalysisWeeklyRetain">
                <a href="./getAnalysisWeeklyRetain.html">getAnalysisWeeklyRetain</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.7.3" data-path=./getAnalysisDailySummary.html data-name="getAnalysisDailySummary">
                <a href="./getAnalysisDailySummary.html">getAnalysisDailySummary</a>
                
            </li>
<li class="chapter" data-level="1.4.11.7.4" data-path=./getAnalysisDailyVisitTrend.html data-name="访问趋势">
                <a href="./getAnalysisDailyVisitTrend.html">访问趋势</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.7.4.1" data-path=./getAnalysisDailyVisitTrend.html data-name="getAnalysisDailyVisitTrend">
                <a href="./getAnalysisDailyVisitTrend.html">getAnalysisDailyVisitTrend</a>
                
            </li>
<li class="chapter" data-level="1.4.11.7.4.2" data-path=./getAnalysisMonthlyVisitTrend.html data-name="getAnalysisMonthlyVisitTrend">
                <a href="./getAnalysisMonthlyVisitTrend.html">getAnalysisMonthlyVisitTrend</a>
                
            </li>
<li class="chapter" data-level="1.4.11.7.4.3" data-path=./getAnalysisWeeklyVisitTrend.html data-name="getAnalysisWeeklyVisitTrend">
                <a href="./getAnalysisWeeklyVisitTrend.html">getAnalysisWeeklyVisitTrend</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.7.5" data-path=./getAnalysisUserPortrait.html data-name="getAnalysisUserPortrait">
                <a href="./getAnalysisUserPortrait.html">getAnalysisUserPortrait</a>
                
            </li>
<li class="chapter" data-level="1.4.11.7.6" data-path=./getAnalysisVisitDistribution.html data-name="getAnalysisVisitDistribution">
                <a href="./getAnalysisVisitDistribution.html">getAnalysisVisitDistribution</a>
                
            </li>
<li class="chapter" data-level="1.4.11.7.7" data-path=./getAnalysisVisitPage.html data-name="getAnalysisVisitPage">
                <a href="./getAnalysisVisitPage.html">getAnalysisVisitPage</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.8" data-path=./wx.requestPayment.html data-name="支付">
                <a href="./wx.requestPayment.html">支付</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.8.1" data-path=./wx.requestPayment.html data-name="wx.requestPayment">
                <a href="./wx.requestPayment.html">wx.requestPayment</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.9" data-path=./wx.authorize.html data-name="授权">
                <a href="./wx.authorize.html">授权</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.9.1" data-path=./wx.authorize.html data-name="wx.authorize">
                <a href="./wx.authorize.html">wx.authorize</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.10" data-path=./wx.openSetting.html data-name="设置">
                <a href="./wx.openSetting.html">设置</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.10.1" data-path=./wx.openSetting.html data-name="wx.openSetting">
                <a href="./wx.openSetting.html">wx.openSetting</a>
                
            </li>
<li class="chapter" data-level="1.4.11.10.2" data-path=./wx.getSetting.html data-name="wx.getSetting">
                <a href="./wx.getSetting.html">wx.getSetting</a>
                
            </li>
<li class="chapter" data-level="1.4.11.10.3" data-path=./AuthSetting.html data-name="AuthSetting">
                <a href="./AuthSetting.html">AuthSetting</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.11" data-path=./customerTyping.html data-name="客服消息">
                <a href="./customerTyping.html">客服消息</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.11.1" data-path=./customerTyping.html data-name="customerTyping">
                <a href="./customerTyping.html">customerTyping</a>
                
            </li>
<li class="chapter" data-level="1.4.11.11.2" data-path=./getTempMedia.html data-name="getTempMedia">
                <a href="./getTempMedia.html">getTempMedia</a>
                
            </li>
<li class="chapter" data-level="1.4.11.11.3" data-path=./sendCustomerMessage.html data-name="sendCustomerMessage">
                <a href="./sendCustomerMessage.html">sendCustomerMessage</a>
                
            </li>
<li class="chapter" data-level="1.4.11.11.4" data-path=./uploadTempMedia.html data-name="uploadTempMedia">
                <a href="./uploadTempMedia.html">uploadTempMedia</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.12" data-path=./addTemplate.html data-name="模板消息">
                <a href="./addTemplate.html">模板消息</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.12.1" data-path=./addTemplate.html data-name="addTemplate">
                <a href="./addTemplate.html">addTemplate</a>
                
            </li>
<li class="chapter" data-level="1.4.11.12.2" data-path=./deleteTemplate.html data-name="deleteTemplate">
                <a href="./deleteTemplate.html">deleteTemplate</a>
                
            </li>
<li class="chapter" data-level="1.4.11.12.3" data-path=./getTemplateLibraryById.html data-name="getTemplateLibraryById">
                <a href="./getTemplateLibraryById.html">getTemplateLibraryById</a>
                
            </li>
<li class="chapter" data-level="1.4.11.12.4" data-path=./getTemplateLibraryList.html data-name="getTemplateLibraryList">
                <a href="./getTemplateLibraryList.html">getTemplateLibraryList</a>
                
            </li>
<li class="chapter" data-level="1.4.11.12.5" data-path=./getTemplateList.html data-name="getTemplateList">
                <a href="./getTemplateList.html">getTemplateList</a>
                
            </li>
<li class="chapter" data-level="1.4.11.12.6" data-path=./sendTemplateMessage.html data-name="sendTemplateMessage">
                <a href="./sendTemplateMessage.html">sendTemplateMessage</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.13" data-path=./sendUniformMessage.html data-name="统一服务消息">
                <a href="./sendUniformMessage.html">统一服务消息</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.13.1" data-path=./sendUniformMessage.html data-name="sendUniformMessage">
                <a href="./sendUniformMessage.html">sendUniformMessage</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.14" data-path=./createActivityId.html data-name="动态消息">
                <a href="./createActivityId.html">动态消息</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.14.1" data-path=./createActivityId.html data-name="createActivityId">
                <a href="./createActivityId.html">createActivityId</a>
                
            </li>
<li class="chapter" data-level="1.4.11.14.2" data-path=./setUpdatableMsg.html data-name="setUpdatableMsg">
                <a href="./setUpdatableMsg.html">setUpdatableMsg</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.15" data-path=./applyPlugin.html data-name="插件管理">
                <a href="./applyPlugin.html">插件管理</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.15.1" data-path=./applyPlugin.html data-name="applyPlugin">
                <a href="./applyPlugin.html">applyPlugin</a>
                
            </li>
<li class="chapter" data-level="1.4.11.15.2" data-path=./getPluginDevApplyList.html data-name="getPluginDevApplyList">
                <a href="./getPluginDevApplyList.html">getPluginDevApplyList</a>
                
            </li>
<li class="chapter" data-level="1.4.11.15.3" data-path=./getPluginList.html data-name="getPluginList">
                <a href="./getPluginList.html">getPluginList</a>
                
            </li>
<li class="chapter" data-level="1.4.11.15.4" data-path=./setDevPluginApplyStatus.html data-name="setDevPluginApplyStatus">
                <a href="./setDevPluginApplyStatus.html">setDevPluginApplyStatus</a>
                
            </li>
<li class="chapter" data-level="1.4.11.15.5" data-path=./unbindPlugin.html data-name="unbindPlugin">
                <a href="./unbindPlugin.html">unbindPlugin</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.16" data-path=./wx.chooseAddress.html data-name="收货地址">
                <a href="./wx.chooseAddress.html">收货地址</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.16.1" data-path=./wx.chooseAddress.html data-name="wx.chooseAddress">
                <a href="./wx.chooseAddress.html">wx.chooseAddress</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.17" data-path=./wx.openCard.html data-name="卡券">
                <a href="./wx.openCard.html">卡券</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.17.1" data-path=./wx.openCard.html data-name="wx.openCard">
                <a href="./wx.openCard.html">wx.openCard</a>
                
            </li>
<li class="chapter" data-level="1.4.11.17.2" data-path=./wx.addCard.html data-name="wx.addCard">
                <a href="./wx.addCard.html">wx.addCard</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.18" data-path=./wx.chooseInvoiceTitle.html data-name="发票">
                <a href="./wx.chooseInvoiceTitle.html">发票</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.18.1" data-path=./wx.chooseInvoiceTitle.html data-name="wx.chooseInvoiceTitle">
                <a href="./wx.chooseInvoiceTitle.html">wx.chooseInvoiceTitle</a>
                
            </li>
<li class="chapter" data-level="1.4.11.18.2" data-path=./wx.chooseInvoice.html data-name="wx.chooseInvoice">
                <a href="./wx.chooseInvoice.html">wx.chooseInvoice</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.19" data-path=./addNearbyPoi.html data-name="附近的小程序">
                <a href="./addNearbyPoi.html">附近的小程序</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.19.1" data-path=./addNearbyPoi.html data-name="addNearbyPoi">
                <a href="./addNearbyPoi.html">addNearbyPoi</a>
                
            </li>
<li class="chapter" data-level="1.4.11.19.2" data-path=./deleteNearbyPoi.html data-name="deleteNearbyPoi">
                <a href="./deleteNearbyPoi.html">deleteNearbyPoi</a>
                
            </li>
<li class="chapter" data-level="1.4.11.19.3" data-path=./getNearbyPoiList.html data-name="getNearbyPoiList">
                <a href="./getNearbyPoiList.html">getNearbyPoiList</a>
                
            </li>
<li class="chapter" data-level="1.4.11.19.4" data-path=./setNearbyPoiShowStatus.html data-name="setNearbyPoiShowStatus">
                <a href="./setNearbyPoiShowStatus.html">setNearbyPoiShowStatus</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.20" data-path=./createWXAQRCode.html data-name="二维码">
                <a href="./createWXAQRCode.html">二维码</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.20.1" data-path=./createWXAQRCode.html data-name="createWXAQRCode">
                <a href="./createWXAQRCode.html">createWXAQRCode</a>
                
            </li>
<li class="chapter" data-level="1.4.11.20.2" data-path=./getWXACode.html data-name="getWXACode">
                <a href="./getWXACode.html">getWXACode</a>
                
            </li>
<li class="chapter" data-level="1.4.11.20.3" data-path=./getWXACodeUnlimit.html data-name="getWXACodeUnlimit">
                <a href="./getWXACodeUnlimit.html">getWXACodeUnlimit</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.21" data-path=./imgSecCheck.html data-name="内容安全">
                <a href="./imgSecCheck.html">内容安全</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.21.1" data-path=./imgSecCheck.html data-name="imgSecCheck">
                <a href="./imgSecCheck.html">imgSecCheck</a>
                
            </li>
<li class="chapter" data-level="1.4.11.21.2" data-path=./msgSecCheck.html data-name="msgSecCheck">
                <a href="./msgSecCheck.html">msgSecCheck</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.22" data-path=./wx.startSoterAuthentication.html data-name="生物认证">
                <a href="./wx.startSoterAuthentication.html">生物认证</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.22.1" data-path=./wx.startSoterAuthentication.html data-name="wx.startSoterAuthentication">
                <a href="./wx.startSoterAuthentication.html">wx.startSoterAuthentication</a>
                
            </li>
<li class="chapter" data-level="1.4.11.22.2" data-path=./wx.checkIsSupportSoterAuthentication.html data-name="wx.checkIsSupportSoterAuthentication">
                <a href="./wx.checkIsSupportSoterAuthentication.html">wx.checkIsSupportSoterAuthentication</a>
                
            </li>
<li class="chapter" data-level="1.4.11.22.3" data-path=./wx.checkIsSoterEnrolledInDevice.html data-name="wx.checkIsSoterEnrolledInDevice">
                <a href="./wx.checkIsSoterEnrolledInDevice.html">wx.checkIsSoterEnrolledInDevice</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.11.23" data-path=./wx.getWeRunData.html data-name="微信运动">
                <a href="./wx.getWeRunData.html">微信运动</a>
                <ul class="articles"><li class="chapter" data-level="1.4.11.23.1" data-path=./wx.getWeRunData.html data-name="wx.getWeRunData">
                <a href="./wx.getWeRunData.html">wx.getWeRunData</a>
                
            </li></ul>
            </li></ul>
            </li>
<li class="chapter open" data-level="1.4.12" data-path=./wx.onBeaconServiceChange.html data-name="设备">
                <a href="./wx.onBeaconServiceChange.html">设备</a>
                <ul class="articles"><li class="chapter" data-level="1.4.12.1" data-path=./wx.onBeaconServiceChange.html data-name="iBeacon">
                <a href="./wx.onBeaconServiceChange.html">iBeacon</a>
                <ul class="articles"><li class="chapter" data-level="1.4.12.1.1" data-path=./wx.onBeaconServiceChange.html data-name="wx.onBeaconServiceChange">
                <a href="./wx.onBeaconServiceChange.html">wx.onBeaconServiceChange</a>
                
            </li>
<li class="chapter" data-level="1.4.12.1.2" data-path=./wx.onBeaconUpdate.html data-name="wx.onBeaconUpdate">
                <a href="./wx.onBeaconUpdate.html">wx.onBeaconUpdate</a>
                
            </li>
<li class="chapter" data-level="1.4.12.1.3" data-path=./wx.getBeacons.html data-name="wx.getBeacons">
                <a href="./wx.getBeacons.html">wx.getBeacons</a>
                
            </li>
<li class="chapter" data-level="1.4.12.1.4" data-path=./wx.stopBeaconDiscovery.html data-name="wx.stopBeaconDiscovery">
                <a href="./wx.stopBeaconDiscovery.html">wx.stopBeaconDiscovery</a>
                
            </li>
<li class="chapter" data-level="1.4.12.1.5" data-path=./wx.startBeaconDiscovery.html data-name="wx.startBeaconDiscovery">
                <a href="./wx.startBeaconDiscovery.html">wx.startBeaconDiscovery</a>
                
            </li>
<li class="chapter" data-level="1.4.12.1.6" data-path=./IBeaconInfo.html data-name="IBeaconInfo">
                <a href="./IBeaconInfo.html">IBeaconInfo</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.12.2" data-path=./wx.stopWifi.html data-name="Wi-Fi">
                <a href="./wx.stopWifi.html">Wi-Fi</a>
                <ul class="articles"><li class="chapter" data-level="1.4.12.2.1" data-path=./wx.stopWifi.html data-name="wx.stopWifi">
                <a href="./wx.stopWifi.html">wx.stopWifi</a>
                
            </li>
<li class="chapter" data-level="1.4.12.2.2" data-path=./wx.startWifi.html data-name="wx.startWifi">
                <a href="./wx.startWifi.html">wx.startWifi</a>
                
            </li>
<li class="chapter" data-level="1.4.12.2.3" data-path=./wx.setWifiList.html data-name="wx.setWifiList">
                <a href="./wx.setWifiList.html">wx.setWifiList</a>
                
            </li>
<li class="chapter" data-level="1.4.12.2.4" data-path=./wx.onWifiConnected.html data-name="wx.onWifiConnected">
                <a href="./wx.onWifiConnected.html">wx.onWifiConnected</a>
                
            </li>
<li class="chapter" data-level="1.4.12.2.5" data-path=./wx.onGetWifiList.html data-name="wx.onGetWifiList">
                <a href="./wx.onGetWifiList.html">wx.onGetWifiList</a>
                
            </li>
<li class="chapter" data-level="1.4.12.2.6" data-path=./wx.getWifiList.html data-name="wx.getWifiList">
                <a href="./wx.getWifiList.html">wx.getWifiList</a>
                
            </li>
<li class="chapter" data-level="1.4.12.2.7" data-path=./wx.getConnectedWifi.html data-name="wx.getConnectedWifi">
                <a href="./wx.getConnectedWifi.html">wx.getConnectedWifi</a>
                
            </li>
<li class="chapter" data-level="1.4.12.2.8" data-path=./wx.connectWifi.html data-name="wx.connectWifi">
                <a href="./wx.connectWifi.html">wx.connectWifi</a>
                
            </li>
<li class="chapter" data-level="1.4.12.2.9" data-path=./WifiInfo.html data-name="WifiInfo">
                <a href="./WifiInfo.html">WifiInfo</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.12.3" data-path=./wx.onAccelerometerChange.html data-name="加速计">
                <a href="./wx.onAccelerometerChange.html">加速计</a>
                <ul class="articles"><li class="chapter" data-level="1.4.12.3.1" data-path=./wx.onAccelerometerChange.html data-name="wx.onAccelerometerChange">
                <a href="./wx.onAccelerometerChange.html">wx.onAccelerometerChange</a>
                
            </li>
<li class="chapter" data-level="1.4.12.3.2" data-path=./wx.stopAccelerometer.html data-name="wx.stopAccelerometer">
                <a href="./wx.stopAccelerometer.html">wx.stopAccelerometer</a>
                
            </li>
<li class="chapter" data-level="1.4.12.3.3" data-path=./wx.startAccelerometer.html data-name="wx.startAccelerometer">
                <a href="./wx.startAccelerometer.html">wx.startAccelerometer</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.12.4" data-path=./wx.getBatteryInfoSync.html data-name="电量">
                <a href="./wx.getBatteryInfoSync.html">电量</a>
                <ul class="articles"><li class="chapter" data-level="1.4.12.4.1" data-path=./wx.getBatteryInfoSync.html data-name="wx.getBatteryInfoSync">
                <a href="./wx.getBatteryInfoSync.html">wx.getBatteryInfoSync</a>
                
            </li>
<li class="chapter" data-level="1.4.12.4.2" data-path=./wx.getBatteryInfo.html data-name="wx.getBatteryInfo">
                <a href="./wx.getBatteryInfo.html">wx.getBatteryInfo</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.12.5" data-path=./wx.setClipboardData.html data-name="剪贴板">
                <a href="./wx.setClipboardData.html">剪贴板</a>
                <ul class="articles"><li class="chapter" data-level="1.4.12.5.1" data-path=./wx.setClipboardData.html data-name="wx.setClipboardData">
                <a href="./wx.setClipboardData.html">wx.setClipboardData</a>
                
            </li>
<li class="chapter" data-level="1.4.12.5.2" data-path=./wx.getClipboardData.html data-name="wx.getClipboardData">
                <a href="./wx.getClipboardData.html">wx.getClipboardData</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.12.6" data-path=./wx.onCompassChange.html data-name="罗盘">
                <a href="./wx.onCompassChange.html">罗盘</a>
                <ul class="articles"><li class="chapter" data-level="1.4.12.6.1" data-path=./wx.onCompassChange.html data-name="wx.onCompassChange">
                <a href="./wx.onCompassChange.html">wx.onCompassChange</a>
                
            </li>
<li class="chapter" data-level="1.4.12.6.2" data-path=./wx.stopCompass.html data-name="wx.stopCompass">
                <a href="./wx.stopCompass.html">wx.stopCompass</a>
                
            </li>
<li class="chapter" data-level="1.4.12.6.3" data-path=./wx.startCompass.html data-name="wx.startCompass">
                <a href="./wx.startCompass.html">wx.startCompass</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.12.7" data-path=./wx.addPhoneContact.html data-name="联系人">
                <a href="./wx.addPhoneContact.html">联系人</a>
                <ul class="articles"><li class="chapter" data-level="1.4.12.7.1" data-path=./wx.addPhoneContact.html data-name="wx.addPhoneContact">
                <a href="./wx.addPhoneContact.html">wx.addPhoneContact</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.12.8" data-path=./wx.onGyroscopeChange.html data-name="陀螺仪">
                <a href="./wx.onGyroscopeChange.html">陀螺仪</a>
                <ul class="articles"><li class="chapter" data-level="1.4.12.8.1" data-path=./wx.onGyroscopeChange.html data-name="wx.onGyroscopeChange">
                <a href="./wx.onGyroscopeChange.html">wx.onGyroscopeChange</a>
                
            </li>
<li class="chapter" data-level="1.4.12.8.2" data-path=./wx.stopGyroscope.html data-name="wx.stopGyroscope">
                <a href="./wx.stopGyroscope.html">wx.stopGyroscope</a>
                
            </li>
<li class="chapter" data-level="1.4.12.8.3" data-path=./wx.startGyroscope.html data-name="wx.startGyroscope">
                <a href="./wx.startGyroscope.html">wx.startGyroscope</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.12.9" data-path=./wx.onDeviceMotionChange.html data-name="方向">
                <a href="./wx.onDeviceMotionChange.html">方向</a>
                <ul class="articles"><li class="chapter" data-level="1.4.12.9.1" data-path=./wx.onDeviceMotionChange.html data-name="wx.onDeviceMotionChange">
                <a href="./wx.onDeviceMotionChange.html">wx.onDeviceMotionChange</a>
                
            </li>
<li class="chapter" data-level="1.4.12.9.2" data-path=./wx.stopDeviceMotionListening.html data-name="wx.stopDeviceMotionListening">
                <a href="./wx.stopDeviceMotionListening.html">wx.stopDeviceMotionListening</a>
                
            </li>
<li class="chapter" data-level="1.4.12.9.3" data-path=./wx.startDeviceMotionListening.html data-name="wx.startDeviceMotionListening">
                <a href="./wx.startDeviceMotionListening.html">wx.startDeviceMotionListening</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.12.10" data-path=./wx.onNetworkStatusChange.html data-name="网络">
                <a href="./wx.onNetworkStatusChange.html">网络</a>
                <ul class="articles"><li class="chapter" data-level="1.4.12.10.1" data-path=./wx.onNetworkStatusChange.html data-name="wx.onNetworkStatusChange">
                <a href="./wx.onNetworkStatusChange.html">wx.onNetworkStatusChange</a>
                
            </li>
<li class="chapter" data-level="1.4.12.10.2" data-path=./wx.getNetworkType.html data-name="wx.getNetworkType">
                <a href="./wx.getNetworkType.html">wx.getNetworkType</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.12.11" data-path=./wx.makePhoneCall.html data-name="电话">
                <a href="./wx.makePhoneCall.html">电话</a>
                <ul class="articles"><li class="chapter" data-level="1.4.12.11.1" data-path=./wx.makePhoneCall.html data-name="wx.makePhoneCall">
                <a href="./wx.makePhoneCall.html">wx.makePhoneCall</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.12.12" data-path=./wx.scanCode.html data-name="扫码">
                <a href="./wx.scanCode.html">扫码</a>
                <ul class="articles"><li class="chapter" data-level="1.4.12.12.1" data-path=./wx.scanCode.html data-name="wx.scanCode">
                <a href="./wx.scanCode.html">wx.scanCode</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.12.13" data-path=./wx.vibrateLong.html data-name="振动">
                <a href="./wx.vibrateLong.html">振动</a>
                <ul class="articles"><li class="chapter" data-level="1.4.12.13.1" data-path=./wx.vibrateLong.html data-name="wx.vibrateLong">
                <a href="./wx.vibrateLong.html">wx.vibrateLong</a>
                
            </li>
<li class="chapter" data-level="1.4.12.13.2" data-path=./wx.vibrateShort.html data-name="wx.vibrateShort">
                <a href="./wx.vibrateShort.html">wx.vibrateShort</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.12.14" data-path=./wx.onMemoryWarning.html data-name="性能">
                <a href="./wx.onMemoryWarning.html">性能</a>
                <ul class="articles"><li class="chapter" data-level="1.4.12.14.1" data-path=./wx.onMemoryWarning.html data-name="wx.onMemoryWarning">
                <a href="./wx.onMemoryWarning.html">wx.onMemoryWarning</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.12.15" data-path=./wx.writeBLECharacteristicValue.html data-name="低功耗蓝牙">
                <a href="./wx.writeBLECharacteristicValue.html">低功耗蓝牙</a>
                <ul class="articles"><li class="chapter" data-level="1.4.12.15.1" data-path=./wx.writeBLECharacteristicValue.html data-name="wx.writeBLECharacteristicValue">
                <a href="./wx.writeBLECharacteristicValue.html">wx.writeBLECharacteristicValue</a>
                
            </li>
<li class="chapter" data-level="1.4.12.15.2" data-path=./wx.readBLECharacteristicValue.html data-name="wx.readBLECharacteristicValue">
                <a href="./wx.readBLECharacteristicValue.html">wx.readBLECharacteristicValue</a>
                
            </li>
<li class="chapter" data-level="1.4.12.15.3" data-path=./wx.onBLEConnectionStateChange.html data-name="wx.onBLEConnectionStateChange">
                <a href="./wx.onBLEConnectionStateChange.html">wx.onBLEConnectionStateChange</a>
                
            </li>
<li class="chapter" data-level="1.4.12.15.4" data-path=./wx.onBLECharacteristicValueChange.html data-name="wx.onBLECharacteristicValueChange">
                <a href="./wx.onBLECharacteristicValueChange.html">wx.onBLECharacteristicValueChange</a>
                
            </li>
<li class="chapter" data-level="1.4.12.15.5" data-path=./wx.notifyBLECharacteristicValueChange.html data-name="wx.notifyBLECharacteristicValueChange">
                <a href="./wx.notifyBLECharacteristicValueChange.html">wx.notifyBLECharacteristicValueChange</a>
                
            </li>
<li class="chapter" data-level="1.4.12.15.6" data-path=./wx.getBLEDeviceServices.html data-name="wx.getBLEDeviceServices">
                <a href="./wx.getBLEDeviceServices.html">wx.getBLEDeviceServices</a>
                
            </li>
<li class="chapter" data-level="1.4.12.15.7" data-path=./wx.getBLEDeviceCharacteristics.html data-name="wx.getBLEDeviceCharacteristics">
                <a href="./wx.getBLEDeviceCharacteristics.html">wx.getBLEDeviceCharacteristics</a>
                
            </li>
<li class="chapter" data-level="1.4.12.15.8" data-path=./wx.createBLEConnection.html data-name="wx.createBLEConnection">
                <a href="./wx.createBLEConnection.html">wx.createBLEConnection</a>
                
            </li>
<li class="chapter" data-level="1.4.12.15.9" data-path=./wx.closeBLEConnection.html data-name="wx.closeBLEConnection">
                <a href="./wx.closeBLEConnection.html">wx.closeBLEConnection</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.12.16" data-path=./wx.stopBluetoothDevicesDiscovery.html data-name="蓝牙">
                <a href="./wx.stopBluetoothDevicesDiscovery.html">蓝牙</a>
                <ul class="articles"><li class="chapter" data-level="1.4.12.16.1" data-path=./wx.stopBluetoothDevicesDiscovery.html data-name="wx.stopBluetoothDevicesDiscovery">
                <a href="./wx.stopBluetoothDevicesDiscovery.html">wx.stopBluetoothDevicesDiscovery</a>
                
            </li>
<li class="chapter" data-level="1.4.12.16.2" data-path=./wx.startBluetoothDevicesDiscovery.html data-name="wx.startBluetoothDevicesDiscovery">
                <a href="./wx.startBluetoothDevicesDiscovery.html">wx.startBluetoothDevicesDiscovery</a>
                
            </li>
<li class="chapter" data-level="1.4.12.16.3" data-path=./wx.openBluetoothAdapter.html data-name="wx.openBluetoothAdapter">
                <a href="./wx.openBluetoothAdapter.html">wx.openBluetoothAdapter</a>
                
            </li>
<li class="chapter" data-level="1.4.12.16.4" data-path=./wx.onBluetoothDeviceFound.html data-name="wx.onBluetoothDeviceFound">
                <a href="./wx.onBluetoothDeviceFound.html">wx.onBluetoothDeviceFound</a>
                
            </li>
<li class="chapter" data-level="1.4.12.16.5" data-path=./wx.onBluetoothAdapterStateChange.html data-name="wx.onBluetoothAdapterStateChange">
                <a href="./wx.onBluetoothAdapterStateChange.html">wx.onBluetoothAdapterStateChange</a>
                
            </li>
<li class="chapter" data-level="1.4.12.16.6" data-path=./wx.getConnectedBluetoothDevices.html data-name="wx.getConnectedBluetoothDevices">
                <a href="./wx.getConnectedBluetoothDevices.html">wx.getConnectedBluetoothDevices</a>
                
            </li>
<li class="chapter" data-level="1.4.12.16.7" data-path=./wx.getBluetoothDevices.html data-name="wx.getBluetoothDevices">
                <a href="./wx.getBluetoothDevices.html">wx.getBluetoothDevices</a>
                
            </li>
<li class="chapter" data-level="1.4.12.16.8" data-path=./wx.getBluetoothAdapterState.html data-name="wx.getBluetoothAdapterState">
                <a href="./wx.getBluetoothAdapterState.html">wx.getBluetoothAdapterState</a>
                
            </li>
<li class="chapter" data-level="1.4.12.16.9" data-path=./wx.closeBluetoothAdapter.html data-name="wx.closeBluetoothAdapter">
                <a href="./wx.closeBluetoothAdapter.html">wx.closeBluetoothAdapter</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.12.17" data-path=./wx.stopHCE.html data-name="NFC">
                <a href="./wx.stopHCE.html">NFC</a>
                <ul class="articles"><li class="chapter" data-level="1.4.12.17.1" data-path=./wx.stopHCE.html data-name="wx.stopHCE">
                <a href="./wx.stopHCE.html">wx.stopHCE</a>
                
            </li>
<li class="chapter" data-level="1.4.12.17.2" data-path=./wx.startHCE.html data-name="wx.startHCE">
                <a href="./wx.startHCE.html">wx.startHCE</a>
                
            </li>
<li class="chapter" data-level="1.4.12.17.3" data-path=./wx.sendHCEMessage.html data-name="wx.sendHCEMessage">
                <a href="./wx.sendHCEMessage.html">wx.sendHCEMessage</a>
                
            </li>
<li class="chapter" data-level="1.4.12.17.4" data-path=./wx.onHCEMessage.html data-name="wx.onHCEMessage">
                <a href="./wx.onHCEMessage.html">wx.onHCEMessage</a>
                
            </li>
<li class="chapter" data-level="1.4.12.17.5" data-path=./wx.getHCEState.html data-name="wx.getHCEState">
                <a href="./wx.getHCEState.html">wx.getHCEState</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.12.18" data-path=./wx.setScreenBrightness.html data-name="屏幕">
                <a href="./wx.setScreenBrightness.html">屏幕</a>
                <ul class="articles"><li class="chapter" data-level="1.4.12.18.1" data-path=./wx.setScreenBrightness.html data-name="wx.setScreenBrightness">
                <a href="./wx.setScreenBrightness.html">wx.setScreenBrightness</a>
                
            </li>
<li class="chapter" data-level="1.4.12.18.2" data-path=./wx.setKeepScreenOn.html data-name="wx.setKeepScreenOn">
                <a href="./wx.setKeepScreenOn.html">wx.setKeepScreenOn</a>
                
            </li>
<li class="chapter" data-level="1.4.12.18.3" data-path=./wx.onUserCaptureScreen.html data-name="wx.onUserCaptureScreen">
                <a href="./wx.onUserCaptureScreen.html">wx.onUserCaptureScreen</a>
                
            </li>
<li class="chapter" data-level="1.4.12.18.4" data-path=./wx.getScreenBrightness.html data-name="wx.getScreenBrightness">
                <a href="./wx.getScreenBrightness.html">wx.getScreenBrightness</a>
                
            </li></ul>
            </li></ul>
            </li>
<li class="chapter open" data-level="1.4.13" data-path=./wx.createWorker.html data-name="Worker">
                <a href="./wx.createWorker.html">Worker</a>
                <ul class="articles"><li class="chapter" data-level="1.4.13.1" data-path=./wx.createWorker.html data-name="wx.createWorker">
                <a href="./wx.createWorker.html">wx.createWorker</a>
                
            </li>
<li class="chapter" data-level="1.4.13.2" data-path=./Worker.html data-name="">
                <a href="./Worker.html"></a>
                <ul class="articles"><li class="chapter" data-level="1.4.13.2.1" data-path=./Worker.postMessage.html data-name=".postMessage">
                <a href="./Worker.postMessage.html">.postMessage</a>
                
            </li>
<li class="chapter" data-level="1.4.13.2.2" data-path=./Worker.onMessage.html data-name=".onMessage">
                <a href="./Worker.onMessage.html">.onMessage</a>
                
            </li>
<li class="chapter" data-level="1.4.13.2.3" data-path=./Worker.terminate.html data-name=".terminate">
                <a href="./Worker.terminate.html">.terminate</a>
                
            </li></ul>
            </li></ul>
            </li>
<li class="chapter open" data-level="1.4.14" data-path=./wx.getExtConfigSync.html data-name="第三方平台">
                <a href="./wx.getExtConfigSync.html">第三方平台</a>
                <ul class="articles"><li class="chapter" data-level="1.4.14.1" data-path=./wx.getExtConfigSync.html data-name="wx.getExtConfigSync">
                <a href="./wx.getExtConfigSync.html">wx.getExtConfigSync</a>
                
            </li>
<li class="chapter" data-level="1.4.14.2" data-path=./wx.getExtConfig.html data-name="wx.getExtConfig">
                <a href="./wx.getExtConfig.html">wx.getExtConfig</a>
                
            </li></ul>
            </li>
<li class="chapter open" data-level="1.4.15" data-path=./wx.createSelectorQuery.html data-name="WXML">
                <a href="./wx.createSelectorQuery.html">WXML</a>
                <ul class="articles"><li class="chapter" data-level="1.4.15.1" data-path=./wx.createSelectorQuery.html data-name="wx.createSelectorQuery">
                <a href="./wx.createSelectorQuery.html">wx.createSelectorQuery</a>
                
            </li>
<li class="chapter" data-level="1.4.15.2" data-path=./wx.createIntersectionObserver.html data-name="wx.createIntersectionObserver">
                <a href="./wx.createIntersectionObserver.html">wx.createIntersectionObserver</a>
                
            </li>
<li class="chapter" data-level="1.4.15.3" data-path=./IntersectionObserver.html data-name="IntersectionObserver">
                <a href="./IntersectionObserver.html">IntersectionObserver</a>
                <ul class="articles"><li class="chapter" data-level="1.4.15.3.1" data-path=./IntersectionObserver.relativeTo.html data-name=".relativeTo">
                <a href="./IntersectionObserver.relativeTo.html">.relativeTo</a>
                
            </li>
<li class="chapter" data-level="1.4.15.3.2" data-path=./IntersectionObserver.relativeToViewport.html data-name=".relativeToViewport">
                <a href="./IntersectionObserver.relativeToViewport.html">.relativeToViewport</a>
                
            </li>
<li class="chapter" data-level="1.4.15.3.3" data-path=./IntersectionObserver.observe.html data-name=".observe">
                <a href="./IntersectionObserver.observe.html">.observe</a>
                
            </li>
<li class="chapter" data-level="1.4.15.3.4" data-path=./IntersectionObserver.disconnect.html data-name=".disconnect">
                <a href="./IntersectionObserver.disconnect.html">.disconnect</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.15.4" data-path=./NodesRef.html data-name="NodesRef">
                <a href="./NodesRef.html">NodesRef</a>
                <ul class="articles"><li class="chapter" data-level="1.4.15.4.1" data-path=./NodesRef.fields.html data-name=".fields">
                <a href="./NodesRef.fields.html">.fields</a>
                
            </li>
<li class="chapter" data-level="1.4.15.4.2" data-path=./NodesRef.boundingClientRect.html data-name=".boundingClientRect">
                <a href="./NodesRef.boundingClientRect.html">.boundingClientRect</a>
                
            </li>
<li class="chapter" data-level="1.4.15.4.3" data-path=./NodesRef.scrollOffset.html data-name=".scrollOffset">
                <a href="./NodesRef.scrollOffset.html">.scrollOffset</a>
                
            </li>
<li class="chapter" data-level="1.4.15.4.4" data-path=./NodesRef.context.html data-name=".context">
                <a href="./NodesRef.context.html">.context</a>
                
            </li></ul>
            </li>
<li class="chapter" data-level="1.4.15.5" data-path=./SelectorQuery.html data-name="SelectorQuery">
                <a href="./SelectorQuery.html">SelectorQuery</a>
                <ul class="articles"><li class="chapter" data-level="1.4.15.5.1" data-path=./SelectorQuery.in.html data-name=".in">
                <a href="./SelectorQuery.in.html">.in</a>
                
            </li>
<li class="chapter" data-level="1.4.15.5.2" data-path=./SelectorQuery.select.html data-name=".select">
                <a href="./SelectorQuery.select.html">.select</a>
                
            </li>
<li class="chapter" data-level="1.4.15.5.3" data-path=./SelectorQuery.selectAll.html data-name=".selectAll">
                <a href="./SelectorQuery.selectAll.html">.selectAll</a>
                
            </li>
<li class="chapter" data-level="1.4.15.5.4" data-path=./SelectorQuery.selectViewport.html data-name=".selectViewport">
                <a href="./SelectorQuery.selectViewport.html">.selectViewport</a>
                
            </li>
<li class="chapter" data-level="1.4.15.5.5" data-path=./SelectorQuery.exec.html data-name=".exec">
                <a href="./SelectorQuery.exec.html">.exec</a>
                
            </li></ul>
            </li></ul>
            </li>



    <li class="divider"></li>
</ul>


        </nav>
    </div>

    <div class="book-body">
        <div class="body-inner">
            <div class="page-wrapper" tabindex="-1" role="main">
                <div class="page-inner">
                    <div id="book-search-results">
                        <div class="search-noresults">
                            <section class="normal markdown-section">
                              <h1 id="api">API</h1>
<h2 id="基础">基础</h2>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.canIUse.html">wx.canIUse</a></td>
<td>判断小程序的API，回调，参数，组件等是否在当前版本可用</td>
</tr>
</tbody>
</table>
<h3 id="系统">系统</h3>
<h4 id="系统信息">系统信息</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.getSystemInfoSync.html">wx.getSystemInfoSync</a></td>
<td><a href="wx.getSystemInfo.html">wx.getSystemInfo</a> 的同步版本</td>
</tr>
<tr>
<td><a href="wx.getSystemInfo.html">wx.getSystemInfo</a></td>
<td>获取系统信息</td>
</tr>
</tbody>
</table>
<h3 id="更新">更新</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.getUpdateManager.html">wx.getUpdateManager</a></td>
<td>获取<strong>全局唯一</strong>的版本更新管理器，用于管理小程序更新</td>
</tr>
</tbody>
</table>
<h4 id="updatemanager">UpdateManager</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="UpdateManager.onCheckForUpdate.html">UpdateManager.onCheckForUpdate</a></td>
<td>监听向微信后台请求检查更新结果事件</td>
</tr>
<tr>
<td><a href="UpdateManager.onUpdateReady.html">UpdateManager.onUpdateReady</a></td>
<td>监听小程序有版本更新事件</td>
</tr>
<tr>
<td><a href="UpdateManager.onUpdateFailed.html">UpdateManager.onUpdateFailed</a></td>
<td>监听小程序更新失败事件</td>
</tr>
<tr>
<td><a href="UpdateManager.applyUpdate.html">UpdateManager.applyUpdate</a></td>
<td>强制小程序重启并使用新版本</td>
</tr>
</tbody>
</table>
<h3 id="小程序">小程序</h3>
<h4 id="生命周期">生命周期</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.getLaunchOptionsSync.html">wx.getLaunchOptionsSync</a></td>
<td>获取小程序启动时的参数</td>
</tr>
</tbody>
</table>
<h4 id="应用级事件">应用级事件</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.offPageNotFound.html">wx.offPageNotFound</a></td>
<td>取消监听小程序要打开的页面不存在事件</td>
</tr>
<tr>
<td><a href="wx.onPageNotFound.html">wx.onPageNotFound</a></td>
<td>监听小程序要打开的页面不存在事件</td>
</tr>
<tr>
<td><a href="wx.offError.html">wx.offError</a></td>
<td>取消监听小程序错误事件</td>
</tr>
<tr>
<td><a href="wx.onError.html">wx.onError</a></td>
<td>监听小程序错误事件</td>
</tr>
<tr>
<td><a href="wx.offAppShow.html">wx.offAppShow</a></td>
<td>取消监听小程序切前台事件</td>
</tr>
<tr>
<td><a href="wx.onAppShow.html">wx.onAppShow</a></td>
<td>监听小程序切前台事件</td>
</tr>
<tr>
<td><a href="wx.offAppHide.html">wx.offAppHide</a></td>
<td>取消监听小程序切后台事件</td>
</tr>
<tr>
<td><a href="wx.onAppHide.html">wx.onAppHide</a></td>
<td>监听小程序切后台事件</td>
</tr>
</tbody>
</table>
<h3 id="定时器">定时器</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="setTimeout.html">setTimeout</a></td>
<td>设定一个定时器</td>
</tr>
<tr>
<td><a href="clearTimeout.html">clearTimeout</a></td>
<td>取消由 setTimeout 设置的定时器</td>
</tr>
<tr>
<td><a href="setInterval.html">setInterval</a></td>
<td>设定一个定时器</td>
</tr>
<tr>
<td><a href="clearInterval.html">clearInterval</a></td>
<td>取消由 setInterval 设置的定时器</td>
</tr>
</tbody>
</table>
<h3 id="调试">调试</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.setEnableDebug.html">wx.setEnableDebug</a></td>
<td>设置是否打开调试开关</td>
</tr>
<tr>
<td><a href="wx.getLogManager.html">wx.getLogManager</a></td>
<td>获取日志管理器对象</td>
</tr>
</tbody>
</table>
<h4 id="logmanager">LogManager</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="LogManager.debug.html">LogManager.debug</a></td>
<td>写 debug 日志</td>
</tr>
<tr>
<td><a href="LogManager.info.html">LogManager.info</a></td>
<td>写 info 日志</td>
</tr>
<tr>
<td><a href="LogManager.log.html">LogManager.log</a></td>
<td>写 log 日志</td>
</tr>
<tr>
<td><a href="LogManager.warn.html">LogManager.warn</a></td>
<td>写 warn 日志</td>
</tr>
</tbody>
</table>
<h4 id="console">console</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="console.debug.html">console.debug</a></td>
<td>向调试面板中打印 debug 日志</td>
</tr>
<tr>
<td><a href="console.log.html">console.log</a></td>
<td>向调试面板中打印 log 日志</td>
</tr>
<tr>
<td><a href="console.info.html">console.info</a></td>
<td>向调试面板中打印 info 日志</td>
</tr>
<tr>
<td><a href="console.warn.html">console.warn</a></td>
<td>向调试面板中打印 warn 日志</td>
</tr>
<tr>
<td><a href="console.error.html">console.error</a></td>
<td>向调试面板中打印 error 日志</td>
</tr>
<tr>
<td><a href="console.group.html">console.group</a></td>
<td>在调试面板中创建一个新的分组</td>
</tr>
<tr>
<td><a href="console.groupEnd.html">console.groupEnd</a></td>
<td>结束由 <a href="console.group.html">console.group</a> 创建的分组</td>
</tr>
</tbody>
</table>
<h2 id="路由">路由</h2>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.navigateBack.html">wx.navigateBack</a></td>
<td>关闭当前页面，返回上一页面或多级页面</td>
</tr>
<tr>
<td><a href="wx.switchTab.html">wx.switchTab</a></td>
<td>跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面</td>
</tr>
<tr>
<td><a href="wx.navigateTo.html">wx.navigateTo</a></td>
<td>保留当前页面，跳转到应用内的某个页面</td>
</tr>
<tr>
<td><a href="wx.reLaunch.html">wx.reLaunch</a></td>
<td>关闭所有页面，打开到应用内的某个页面</td>
</tr>
<tr>
<td><a href="wx.redirectTo.html">wx.redirectTo</a></td>
<td>关闭当前页面，跳转到应用内的某个页面</td>
</tr>
</tbody>
</table>
<h2 id="界面">界面</h2>
<h3 id="交互">交互</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.showActionSheet.html">wx.showActionSheet</a></td>
<td>显示操作菜单</td>
</tr>
<tr>
<td><a href="wx.hideLoading.html">wx.hideLoading</a></td>
<td>隐藏 loading 提示框</td>
</tr>
<tr>
<td><a href="wx.showLoading.html">wx.showLoading</a></td>
<td>显示 loading 提示框</td>
</tr>
<tr>
<td><a href="wx.hideToast.html">wx.hideToast</a></td>
<td>隐藏消息提示框</td>
</tr>
<tr>
<td><a href="wx.showToast.html">wx.showToast</a></td>
<td>显示消息提示框</td>
</tr>
<tr>
<td><a href="wx.showModal.html">wx.showModal</a></td>
<td>显示模态对话框</td>
</tr>
</tbody>
</table>
<h3 id="导航栏">导航栏</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.setNavigationBarColor.html">wx.setNavigationBarColor</a></td>
<td>设置页面导航条颜色</td>
</tr>
<tr>
<td><a href="wx.hideNavigationBarLoading.html">wx.hideNavigationBarLoading</a></td>
<td>在当前页面隐藏导航条加载动画</td>
</tr>
<tr>
<td><a href="wx.showNavigationBarLoading.html">wx.showNavigationBarLoading</a></td>
<td>在当前页面显示导航条加载动画</td>
</tr>
<tr>
<td><a href="wx.setNavigationBarTitle.html">wx.setNavigationBarTitle</a></td>
<td>动态设置当前页面的标题</td>
</tr>
</tbody>
</table>
<h3 id="背景">背景</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.setBackgroundTextStyle.html">wx.setBackgroundTextStyle</a></td>
<td>动态设置下拉背景字体、loading 图的样式</td>
</tr>
<tr>
<td><a href="wx.setBackgroundColor.html">wx.setBackgroundColor</a></td>
<td>动态设置窗口的背景色</td>
</tr>
</tbody>
</table>
<h3 id="tab-bar">Tab Bar</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.setTabBarItem.html">wx.setTabBarItem</a></td>
<td>动态设置 tabBar 某一项的内容</td>
</tr>
<tr>
<td><a href="wx.setTabBarStyle.html">wx.setTabBarStyle</a></td>
<td>动态设置 tabBar 的整体样式</td>
</tr>
<tr>
<td><a href="wx.hideTabBar.html">wx.hideTabBar</a></td>
<td>隐藏 tabBar</td>
</tr>
<tr>
<td><a href="wx.showTabBar.html">wx.showTabBar</a></td>
<td>显示 tabBar</td>
</tr>
<tr>
<td><a href="wx.hideTabBarRedDot.html">wx.hideTabBarRedDot</a></td>
<td>隐藏 tabBar 某一项的右上角的红点</td>
</tr>
<tr>
<td><a href="wx.showTabBarRedDot.html">wx.showTabBarRedDot</a></td>
<td>显示 tabBar 某一项的右上角的红点</td>
</tr>
<tr>
<td><a href="wx.removeTabBarBadge.html">wx.removeTabBarBadge</a></td>
<td>移除 tabBar 某一项右上角的文本</td>
</tr>
<tr>
<td><a href="wx.setTabBarBadge.html">wx.setTabBarBadge</a></td>
<td>为 tabBar 某一项的右上角添加文本</td>
</tr>
</tbody>
</table>
<h3 id="字体">字体</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.loadFontFace.html">wx.loadFontFace</a></td>
<td>动态加载网络字体</td>
</tr>
</tbody>
</table>
<h3 id="下拉刷新">下拉刷新</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.stopPullDownRefresh.html">wx.stopPullDownRefresh</a></td>
<td>停止当前页面下拉刷新</td>
</tr>
<tr>
<td><a href="wx.startPullDownRefresh.html">wx.startPullDownRefresh</a></td>
<td>开始下拉刷新</td>
</tr>
</tbody>
</table>
<h3 id="滚动">滚动</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.pageScrollTo.html">wx.pageScrollTo</a></td>
<td>将页面滚动到目标位置</td>
</tr>
</tbody>
</table>
<h3 id="动画">动画</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.createAnimation.html">wx.createAnimation</a></td>
<td>创建一个动画实例 <a href="Animation.html">animation</a></td>
</tr>
</tbody>
</table>
<h4 id="animation">Animation</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="Animation.export.html">Animation.export</a></td>
<td>导出动画队列</td>
</tr>
<tr>
<td><a href="Animation.step.html">Animation.step</a></td>
<td>表示一组动画完成</td>
</tr>
<tr>
<td><a href="Animation.matrix.html">Animation.matrix</a></td>
<td>同 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix" target="_blank">transform-function matrix</a></td>
</tr>
<tr>
<td><a href="Animation.matrix3d.html">Animation.matrix3d</a></td>
<td>同 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d" target="_blank">transform-function matrix3d</a></td>
</tr>
<tr>
<td><a href="Animation.rotate.html">Animation.rotate</a></td>
<td>从原点顺时针旋转一个角度</td>
</tr>
<tr>
<td><a href="Animation.rotate3d.html">Animation.rotate3d</a></td>
<td>从 X 轴顺时针旋转一个角度</td>
</tr>
<tr>
<td><a href="Animation.rotateX.html">Animation.rotateX</a></td>
<td>从 X 轴顺时针旋转一个角度</td>
</tr>
<tr>
<td><a href="Animation.rotateY.html">Animation.rotateY</a></td>
<td>从 Y 轴顺时针旋转一个角度</td>
</tr>
<tr>
<td><a href="Animation.rotateZ.html">Animation.rotateZ</a></td>
<td>从 Z 轴顺时针旋转一个角度</td>
</tr>
<tr>
<td><a href="Animation.scale.html">Animation.scale</a></td>
<td>缩放</td>
</tr>
<tr>
<td><a href="Animation.scale3d.html">Animation.scale3d</a></td>
<td>缩放</td>
</tr>
<tr>
<td><a href="Animation.scaleX.html">Animation.scaleX</a></td>
<td>缩放 X 轴</td>
</tr>
<tr>
<td><a href="Animation.scaleY.html">Animation.scaleY</a></td>
<td>缩放 Y 轴</td>
</tr>
<tr>
<td><a href="Animation.scaleZ.html">Animation.scaleZ</a></td>
<td>缩放 Z 轴</td>
</tr>
<tr>
<td><a href="Animation.skew.html">Animation.skew</a></td>
<td>对 X、Y 轴坐标进行倾斜</td>
</tr>
<tr>
<td><a href="Animation.skewX.html">Animation.skewX</a></td>
<td>对 X 轴坐标进行倾斜</td>
</tr>
<tr>
<td><a href="Animation.skewY.html">Animation.skewY</a></td>
<td>对 Y 轴坐标进行倾斜</td>
</tr>
<tr>
<td><a href="Animation.translate.html">Animation.translate</a></td>
<td>平移变换</td>
</tr>
<tr>
<td><a href="Animation.translate3d.html">Animation.translate3d</a></td>
<td>对 xyz 坐标进行平移变换</td>
</tr>
<tr>
<td><a href="Animation.translateX.html">Animation.translateX</a></td>
<td>对 X 轴平移</td>
</tr>
<tr>
<td><a href="Animation.translateY.html">Animation.translateY</a></td>
<td>对 Y 轴平移</td>
</tr>
<tr>
<td><a href="Animation.translateZ.html">Animation.translateZ</a></td>
<td>对 Z 轴平移</td>
</tr>
<tr>
<td><a href="Animation.opacity.html">Animation.opacity</a></td>
<td>设置透明度</td>
</tr>
<tr>
<td><a href="Animation.backgroundColor.html">Animation.backgroundColor</a></td>
<td>设置背景色</td>
</tr>
<tr>
<td><a href="Animation.width.html">Animation.width</a></td>
<td>设置宽度</td>
</tr>
<tr>
<td><a href="Animation.height.html">Animation.height</a></td>
<td>设置高度</td>
</tr>
<tr>
<td><a href="Animation.left.html">Animation.left</a></td>
<td>设置 left 值</td>
</tr>
<tr>
<td><a href="Animation.right.html">Animation.right</a></td>
<td>设置 right 值</td>
</tr>
<tr>
<td><a href="Animation.top.html">Animation.top</a></td>
<td>设置 top 值</td>
</tr>
<tr>
<td><a href="Animation.bottom.html">Animation.bottom</a></td>
<td>设置 bottom 值</td>
</tr>
</tbody>
</table>
<h3 id="置顶">置顶</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.setTopBarText.html">wx.setTopBarText</a></td>
<td>动态设置置顶栏文字内容</td>
</tr>
</tbody>
</table>
<h3 id="自定义组件">自定义组件</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.nextTick.html">wx.nextTick</a></td>
<td>延迟一部分操作到下一个时间片再执行</td>
</tr>
</tbody>
</table>
<h3 id="菜单">菜单</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.getMenuButtonBoundingClientRect.html">wx.getMenuButtonBoundingClientRect</a></td>
<td>获取菜单按钮（右上角胶囊按钮）的布局位置信息</td>
</tr>
</tbody>
</table>
<h3 id="窗口">窗口</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.offWindowResize.html">wx.offWindowResize</a></td>
<td>取消监听窗口尺寸变化事件</td>
</tr>
<tr>
<td><a href="wx.onWindowResize.html">wx.onWindowResize</a></td>
<td>监听窗口尺寸变化事件</td>
</tr>
</tbody>
</table>
<h3 id="菜单-2">菜单</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.getMenuButtonBoundingClientRect.html">wx.getMenuButtonBoundingClientRect</a></td>
<td>获取菜单按钮（右上角胶囊按钮）的布局位置信息</td>
</tr>
</tbody>
</table>
<h2 id="网络">网络</h2>
<h3 id="发起请求">发起请求</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.request.html">wx.request</a></td>
<td>发起 HTTPS 网络请求</td>
</tr>
</tbody>
</table>
<h4 id="requesttask">RequestTask</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="RequestTask.abort.html">RequestTask.abort</a></td>
<td>中断请求任务</td>
</tr>
<tr>
<td><a href="RequestTask.onHeadersReceived.html">RequestTask.onHeadersReceived</a></td>
<td>监听 HTTP Response Header 事件</td>
</tr>
<tr>
<td><a href="RequestTask.offHeadersReceived.html">RequestTask.offHeadersReceived</a></td>
<td>取消监听 HTTP Response Header 事件</td>
</tr>
</tbody>
</table>
<h3 id="下载">下载</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.downloadFile.html">wx.downloadFile</a></td>
<td>下载文件资源到本地</td>
</tr>
</tbody>
</table>
<h4 id="downloadtask">DownloadTask</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="DownloadTask.onProgressUpdate.html">DownloadTask.onProgressUpdate</a></td>
<td>监听下载进度变化事件</td>
</tr>
<tr>
<td><a href="DownloadTask.offProgressUpdate.html">DownloadTask.offProgressUpdate</a></td>
<td>取消监听下载进度变化事件</td>
</tr>
<tr>
<td><a href="DownloadTask.abort.html">DownloadTask.abort</a></td>
<td>中断下载任务</td>
</tr>
<tr>
<td><a href="DownloadTask.onHeadersReceived.html">DownloadTask.onHeadersReceived</a></td>
<td>监听 HTTP Response Header 事件</td>
</tr>
<tr>
<td><a href="DownloadTask.offHeadersReceived.html">DownloadTask.offHeadersReceived</a></td>
<td>取消监听 HTTP Response Header 事件</td>
</tr>
</tbody>
</table>
<h3 id="上传">上传</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.uploadFile.html">wx.uploadFile</a></td>
<td>将本地资源上传到服务器</td>
</tr>
</tbody>
</table>
<h4 id="uploadtask">UploadTask</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="UploadTask.onProgressUpdate.html">UploadTask.onProgressUpdate</a></td>
<td>监听上传进度变化事件</td>
</tr>
<tr>
<td><a href="UploadTask.offProgressUpdate.html">UploadTask.offProgressUpdate</a></td>
<td>取消监听上传进度变化事件</td>
</tr>
<tr>
<td><a href="UploadTask.abort.html">UploadTask.abort</a></td>
<td>中断上传任务</td>
</tr>
<tr>
<td><a href="UploadTask.onHeadersReceived.html">UploadTask.onHeadersReceived</a></td>
<td>监听 HTTP Response Header 事件</td>
</tr>
<tr>
<td><a href="UploadTask.offHeadersReceived.html">UploadTask.offHeadersReceived</a></td>
<td>取消监听 HTTP Response Header 事件</td>
</tr>
</tbody>
</table>
<h3 id="websocket">WebSocket</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.onSocketError.html">wx.onSocketError</a></td>
<td>监听 WebSocket 错误事件</td>
</tr>
<tr>
<td><a href="wx.onSocketMessage.html">wx.onSocketMessage</a></td>
<td>监听 WebSocket 接受到服务器的消息事件</td>
</tr>
<tr>
<td><a href="wx.onSocketClose.html">wx.onSocketClose</a></td>
<td>监听 WebSocket 连接关闭事件</td>
</tr>
<tr>
<td><a href="wx.onSocketOpen.html">wx.onSocketOpen</a></td>
<td>监听 WebSocket 连接打开事件</td>
</tr>
<tr>
<td><a href="wx.sendSocketMessage.html">wx.sendSocketMessage</a></td>
<td>通过 WebSocket 连接发送数据</td>
</tr>
<tr>
<td><a href="wx.closeSocket.html">wx.closeSocket</a></td>
<td>关闭 WebSocket 连接</td>
</tr>
<tr>
<td><a href="wx.connectSocket.html">wx.connectSocket</a></td>
<td>创建一个 WebSocket 连接</td>
</tr>
</tbody>
</table>
<h4 id="sockettask">SocketTask</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="SocketTask.send.html">SocketTask.send</a></td>
<td>通过 WebSocket 连接发送数据</td>
</tr>
<tr>
<td><a href="SocketTask.close.html">SocketTask.close</a></td>
<td>关闭 WebSocket 连接</td>
</tr>
<tr>
<td><a href="SocketTask.onOpen.html">SocketTask.onOpen</a></td>
<td>监听 WebSocket 连接打开事件</td>
</tr>
<tr>
<td><a href="SocketTask.onClose.html">SocketTask.onClose</a></td>
<td>监听 WebSocket 连接关闭事件</td>
</tr>
<tr>
<td><a href="SocketTask.onError.html">SocketTask.onError</a></td>
<td>监听 WebSocket 错误事件</td>
</tr>
<tr>
<td><a href="SocketTask.onMessage.html">SocketTask.onMessage</a></td>
<td>监听 WebSocket 接受到服务器的消息事件</td>
</tr>
</tbody>
</table>
<h3 id="mdns">mDNS</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.offLocalServiceResolveFail.html">wx.offLocalServiceResolveFail</a></td>
<td>取消监听 mDNS 服务解析失败的事件</td>
</tr>
<tr>
<td><a href="wx.onLocalServiceResolveFail.html">wx.onLocalServiceResolveFail</a></td>
<td>监听 mDNS 服务解析失败的事件</td>
</tr>
<tr>
<td><a href="wx.offLocalServiceDiscoveryStop.html">wx.offLocalServiceDiscoveryStop</a></td>
<td>取消监听 mDNS 服务停止搜索的事件</td>
</tr>
<tr>
<td><a href="wx.onLocalServiceDiscoveryStop.html">wx.onLocalServiceDiscoveryStop</a></td>
<td>监听 mDNS 服务停止搜索的事件</td>
</tr>
<tr>
<td><a href="wx.offLocalServiceLost.html">wx.offLocalServiceLost</a></td>
<td>取消监听 mDNS 服务离开的事件</td>
</tr>
<tr>
<td><a href="wx.onLocalServiceLost.html">wx.onLocalServiceLost</a></td>
<td>监听 mDNS 服务离开的事件</td>
</tr>
<tr>
<td><a href="wx.offLocalServiceFound.html">wx.offLocalServiceFound</a></td>
<td>取消监听 mDNS 服务发现的事件</td>
</tr>
<tr>
<td><a href="wx.onLocalServiceFound.html">wx.onLocalServiceFound</a></td>
<td>监听 mDNS 服务发现的事件</td>
</tr>
<tr>
<td><a href="wx.stopLocalServiceDiscovery.html">wx.stopLocalServiceDiscovery</a></td>
<td>停止搜索 mDNS 服务</td>
</tr>
<tr>
<td><a href="wx.startLocalServiceDiscovery.html">wx.startLocalServiceDiscovery</a></td>
<td>开始搜索局域网下的 mDNS 服务</td>
</tr>
</tbody>
</table>
<h2 id="数据缓存">数据缓存</h2>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.getStorageInfoSync.html">wx.getStorageInfoSync</a></td>
<td><a href="wx.getStorageInfo.html">wx.getStorageInfo</a> 的同步版本</td>
</tr>
<tr>
<td><a href="wx.getStorageInfo.html">wx.getStorageInfo</a></td>
<td>异步获取当前storage的相关信息</td>
</tr>
<tr>
<td><a href="wx.clearStorageSync.html">wx.clearStorageSync</a></td>
<td><a href="wx.clearStorage.html">wx.clearStorage</a> 的同步版本</td>
</tr>
<tr>
<td><a href="wx.clearStorage.html">wx.clearStorage</a></td>
<td>清理本地数据缓存</td>
</tr>
<tr>
<td><a href="wx.removeStorageSync.html">wx.removeStorageSync</a></td>
<td><a href="wx.removeStorage.html">wx.removeStorage</a> 的同步版本</td>
</tr>
<tr>
<td><a href="wx.removeStorage.html">wx.removeStorage</a></td>
<td>从本地缓存中移除指定 key</td>
</tr>
<tr>
<td><a href="wx.setStorageSync.html">wx.setStorageSync</a></td>
<td><a href="wx.setStorage.html">wx.setStorage</a> 的同步版本</td>
</tr>
<tr>
<td><a href="wx.setStorage.html">wx.setStorage</a></td>
<td>将数据存储在本地缓存中指定的 key 中</td>
</tr>
<tr>
<td><a href="wx.getStorageSync.html">wx.getStorageSync</a></td>
<td><a href="wx.getStorage.html">wx.getStorage</a> 的同步版本</td>
</tr>
<tr>
<td><a href="wx.getStorage.html">wx.getStorage</a></td>
<td>从本地缓存中异步获取指定 key 的内容</td>
</tr>
</tbody>
</table>
<h2 id="媒体">媒体</h2>
<h3 id="地图">地图</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.createMapContext.html">wx.createMapContext</a></td>
<td>创建 <code>map</code> 上下文 <a href="MapContext.html"><code>MapContext</code></a> 对象</td>
</tr>
</tbody>
</table>
<h4 id="mapcontext">MapContext</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="MapContext.getCenterLocation.html">MapContext.getCenterLocation</a></td>
<td>获取当前地图中心的经纬度</td>
</tr>
<tr>
<td><a href="MapContext.moveToLocation.html">MapContext.moveToLocation</a></td>
<td>将地图中心移动到当前定位点</td>
</tr>
<tr>
<td><a href="MapContext.translateMarker.html">MapContext.translateMarker</a></td>
<td>平移marker，带动画</td>
</tr>
<tr>
<td><a href="MapContext.includePoints.html">MapContext.includePoints</a></td>
<td>缩放视野展示所有经纬度</td>
</tr>
<tr>
<td><a href="MapContext.getRegion.html">MapContext.getRegion</a></td>
<td>获取当前地图的视野范围</td>
</tr>
<tr>
<td><a href="MapContext.getScale.html">MapContext.getScale</a></td>
<td>获取当前地图的缩放级别</td>
</tr>
</tbody>
</table>
<h3 id="图片">图片</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.compressImage.html">wx.compressImage</a></td>
<td>压缩图片接口，可选压缩质量</td>
</tr>
<tr>
<td><a href="wx.saveImageToPhotosAlbum.html">wx.saveImageToPhotosAlbum</a></td>
<td>保存图片到系统相册</td>
</tr>
<tr>
<td><a href="wx.getImageInfo.html">wx.getImageInfo</a></td>
<td>获取图片信息</td>
</tr>
<tr>
<td><a href="wx.previewImage.html">wx.previewImage</a></td>
<td>在新页面中全屏预览图片</td>
</tr>
<tr>
<td><a href="wx.chooseImage.html">wx.chooseImage</a></td>
<td>从本地相册选择图片或使用相机拍照</td>
</tr>
</tbody>
</table>
<h3 id="视频">视频</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.saveVideoToPhotosAlbum.html">wx.saveVideoToPhotosAlbum</a></td>
<td>保存视频到系统相册</td>
</tr>
<tr>
<td><a href="wx.chooseVideo.html">wx.chooseVideo</a></td>
<td>拍摄视频或从手机相册中选视频</td>
</tr>
<tr>
<td><a href="wx.createVideoContext.html">wx.createVideoContext</a></td>
<td>创建 <code>video</code> 上下文 <a href="VideoContext.html"><code>VideoContext</code></a> 对象</td>
</tr>
</tbody>
</table>
<h4 id="videocontext">VideoContext</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="VideoContext.play.html">VideoContext.play</a></td>
<td>播放视频</td>
</tr>
<tr>
<td><a href="VideoContext.pause.html">VideoContext.pause</a></td>
<td>暂停视频</td>
</tr>
<tr>
<td><a href="VideoContext.stop.html">VideoContext.stop</a></td>
<td>停止视频</td>
</tr>
<tr>
<td><a href="VideoContext.seek.html">VideoContext.seek</a></td>
<td>跳转到指定位置</td>
</tr>
<tr>
<td><a href="VideoContext.sendDanmu.html">VideoContext.sendDanmu</a></td>
<td>发送弹幕</td>
</tr>
<tr>
<td><a href="VideoContext.playbackRate.html">VideoContext.playbackRate</a></td>
<td>设置倍速播放</td>
</tr>
<tr>
<td><a href="VideoContext.requestFullScreen.html">VideoContext.requestFullScreen</a></td>
<td>进入全屏</td>
</tr>
<tr>
<td><a href="VideoContext.exitFullScreen.html">VideoContext.exitFullScreen</a></td>
<td>退出全屏</td>
</tr>
<tr>
<td><a href="VideoContext.showStatusBar.html">VideoContext.showStatusBar</a></td>
<td>显示状态栏，仅在iOS全屏下有效</td>
</tr>
<tr>
<td><a href="VideoContext.hideStatusBar.html">VideoContext.hideStatusBar</a></td>
<td>隐藏状态栏，仅在iOS全屏下有效</td>
</tr>
</tbody>
</table>
<h3 id="音频">音频</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.stopVoice.html">wx.stopVoice</a></td>
<td>结束播放语音</td>
</tr>
<tr>
<td><a href="wx.pauseVoice.html">wx.pauseVoice</a></td>
<td>暂停正在播放的语音</td>
</tr>
<tr>
<td><a href="wx.playVoice.html">wx.playVoice</a></td>
<td>开始播放语音</td>
</tr>
<tr>
<td><a href="wx.setInnerAudioOption.html">wx.setInnerAudioOption</a></td>
<td>设置 <a href="InnerAudioContext.html">InnerAudioContext</a> 的播放选项</td>
</tr>
<tr>
<td><a href="wx.getAvailableAudioSources.html">wx.getAvailableAudioSources</a></td>
<td>获取当前支持的音频输入源</td>
</tr>
<tr>
<td><a href="wx.createInnerAudioContext.html">wx.createInnerAudioContext</a></td>
<td>创建内部 <code>audio</code> 上下文 <a href="InnerAudioContext.html"><code>InnerAudioContext</code></a> 对象</td>
</tr>
<tr>
<td><a href="wx.createAudioContext.html">wx.createAudioContext</a></td>
<td>创建 <code>audio</code> 上下文 <a href="AudioContext.html"><code>AudioContext</code></a> 对象</td>
</tr>
</tbody>
</table>
<h4 id="inneraudiocontext">InnerAudioContext</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="InnerAudioContext.onCanplay.html">InnerAudioContext.onCanplay</a></td>
<td>监听音频进入可以播放状态的事件</td>
</tr>
<tr>
<td><a href="InnerAudioContext.offCanplay.html">InnerAudioContext.offCanplay</a></td>
<td>取消监听音频进入可以播放状态的事件</td>
</tr>
<tr>
<td><a href="InnerAudioContext.onPlay.html">InnerAudioContext.onPlay</a></td>
<td>监听音频播放事件</td>
</tr>
<tr>
<td><a href="InnerAudioContext.offPlay.html">InnerAudioContext.offPlay</a></td>
<td>取消监听音频播放事件</td>
</tr>
<tr>
<td><a href="InnerAudioContext.onPause.html">InnerAudioContext.onPause</a></td>
<td>监听音频暂停事件</td>
</tr>
<tr>
<td><a href="InnerAudioContext.offPause.html">InnerAudioContext.offPause</a></td>
<td>取消监听音频暂停事件</td>
</tr>
<tr>
<td><a href="InnerAudioContext.onStop.html">InnerAudioContext.onStop</a></td>
<td>监听音频停止事件</td>
</tr>
<tr>
<td><a href="InnerAudioContext.offStop.html">InnerAudioContext.offStop</a></td>
<td>取消监听音频停止事件</td>
</tr>
<tr>
<td><a href="InnerAudioContext.onEnded.html">InnerAudioContext.onEnded</a></td>
<td>监听音频自然播放至结束的事件</td>
</tr>
<tr>
<td><a href="InnerAudioContext.offEnded.html">InnerAudioContext.offEnded</a></td>
<td>取消监听音频自然播放至结束的事件</td>
</tr>
<tr>
<td><a href="InnerAudioContext.onTimeUpdate.html">InnerAudioContext.onTimeUpdate</a></td>
<td>监听音频播放进度更新事件</td>
</tr>
<tr>
<td><a href="InnerAudioContext.offTimeUpdate.html">InnerAudioContext.offTimeUpdate</a></td>
<td>取消监听音频播放进度更新事件</td>
</tr>
<tr>
<td><a href="InnerAudioContext.onError.html">InnerAudioContext.onError</a></td>
<td>监听音频播放错误事件</td>
</tr>
<tr>
<td><a href="InnerAudioContext.offError.html">InnerAudioContext.offError</a></td>
<td>取消监听音频播放错误事件</td>
</tr>
<tr>
<td><a href="InnerAudioContext.onWaiting.html">InnerAudioContext.onWaiting</a></td>
<td>监听音频加载中事件</td>
</tr>
<tr>
<td><a href="InnerAudioContext.offWaiting.html">InnerAudioContext.offWaiting</a></td>
<td>取消监听音频加载中事件</td>
</tr>
<tr>
<td><a href="InnerAudioContext.onSeeking.html">InnerAudioContext.onSeeking</a></td>
<td>监听音频进行跳转操作的事件</td>
</tr>
<tr>
<td><a href="InnerAudioContext.offSeeking.html">InnerAudioContext.offSeeking</a></td>
<td>取消监听音频进行跳转操作的事件</td>
</tr>
<tr>
<td><a href="InnerAudioContext.onSeeked.html">InnerAudioContext.onSeeked</a></td>
<td>监听音频完成跳转操作的事件</td>
</tr>
<tr>
<td><a href="InnerAudioContext.offSeeked.html">InnerAudioContext.offSeeked</a></td>
<td>取消监听音频完成跳转操作的事件</td>
</tr>
<tr>
<td><a href="InnerAudioContext.play.html">InnerAudioContext.play</a></td>
<td>播放</td>
</tr>
<tr>
<td><a href="InnerAudioContext.pause.html">InnerAudioContext.pause</a></td>
<td>暂停</td>
</tr>
<tr>
<td><a href="InnerAudioContext.stop.html">InnerAudioContext.stop</a></td>
<td>停止</td>
</tr>
<tr>
<td><a href="InnerAudioContext.seek.html">InnerAudioContext.seek</a></td>
<td>跳转到指定位置</td>
</tr>
<tr>
<td><a href="InnerAudioContext.destroy.html">InnerAudioContext.destroy</a></td>
<td>销毁当前实例</td>
</tr>
</tbody>
</table>
<h4 id="audiocontext">AudioContext</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="AudioContext.setSrc.html">AudioContext.setSrc</a></td>
<td>设置音频地址</td>
</tr>
<tr>
<td><a href="AudioContext.play.html">AudioContext.play</a></td>
<td>播放音频</td>
</tr>
<tr>
<td><a href="AudioContext.pause.html">AudioContext.pause</a></td>
<td>暂停音频</td>
</tr>
<tr>
<td><a href="AudioContext.seek.html">AudioContext.seek</a></td>
<td>跳转到指定位置</td>
</tr>
</tbody>
</table>
<h3 id="背景音频">背景音频</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.onBackgroundAudioStop.html">wx.onBackgroundAudioStop</a></td>
<td>监听音乐停止事件</td>
</tr>
<tr>
<td><a href="wx.onBackgroundAudioPause.html">wx.onBackgroundAudioPause</a></td>
<td>监听音乐暂停事件</td>
</tr>
<tr>
<td><a href="wx.onBackgroundAudioPlay.html">wx.onBackgroundAudioPlay</a></td>
<td>监听音乐播放事件</td>
</tr>
<tr>
<td><a href="wx.stopBackgroundAudio.html">wx.stopBackgroundAudio</a></td>
<td>停止播放音乐</td>
</tr>
<tr>
<td><a href="wx.seekBackgroundAudio.html">wx.seekBackgroundAudio</a></td>
<td>控制音乐播放进度</td>
</tr>
<tr>
<td><a href="wx.pauseBackgroundAudio.html">wx.pauseBackgroundAudio</a></td>
<td>暂停播放音乐</td>
</tr>
<tr>
<td><a href="wx.playBackgroundAudio.html">wx.playBackgroundAudio</a></td>
<td>使用后台播放器播放音乐</td>
</tr>
<tr>
<td><a href="wx.getBackgroundAudioPlayerState.html">wx.getBackgroundAudioPlayerState</a></td>
<td>获取后台音乐播放状态</td>
</tr>
<tr>
<td><a href="wx.getBackgroundAudioManager.html">wx.getBackgroundAudioManager</a></td>
<td>获取<strong>全局唯一</strong>的背景音频管理器</td>
</tr>
</tbody>
</table>
<h4 id="backgroundaudiomanager">BackgroundAudioManager</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="BackgroundAudioManager.play.html">BackgroundAudioManager.play</a></td>
<td>播放音乐</td>
</tr>
<tr>
<td><a href="BackgroundAudioManager.pause.html">BackgroundAudioManager.pause</a></td>
<td>暂停音乐</td>
</tr>
<tr>
<td><a href="BackgroundAudioManager.seek.html">BackgroundAudioManager.seek</a></td>
<td>跳转到指定位置</td>
</tr>
<tr>
<td><a href="BackgroundAudioManager.stop.html">BackgroundAudioManager.stop</a></td>
<td>停止音乐</td>
</tr>
<tr>
<td><a href="BackgroundAudioManager.onCanplay.html">BackgroundAudioManager.onCanplay</a></td>
<td>监听背景音频进入可播放状态事件</td>
</tr>
<tr>
<td><a href="BackgroundAudioManager.onWaiting.html">BackgroundAudioManager.onWaiting</a></td>
<td>监听音频加载中事件</td>
</tr>
<tr>
<td><a href="BackgroundAudioManager.onError.html">BackgroundAudioManager.onError</a></td>
<td>监听背景音频播放错误事件</td>
</tr>
<tr>
<td><a href="BackgroundAudioManager.onPlay.html">BackgroundAudioManager.onPlay</a></td>
<td>监听背景音频播放事件</td>
</tr>
<tr>
<td><a href="BackgroundAudioManager.onPause.html">BackgroundAudioManager.onPause</a></td>
<td>监听背景音频暂停事件</td>
</tr>
<tr>
<td><a href="BackgroundAudioManager.onSeeking.html">BackgroundAudioManager.onSeeking</a></td>
<td>监听背景音频开始跳转操作事件</td>
</tr>
<tr>
<td><a href="BackgroundAudioManager.onSeeked.html">BackgroundAudioManager.onSeeked</a></td>
<td>监听背景音频完成跳转操作事件</td>
</tr>
<tr>
<td><a href="BackgroundAudioManager.onEnded.html">BackgroundAudioManager.onEnded</a></td>
<td>监听背景音频自然播放结束事件</td>
</tr>
<tr>
<td><a href="BackgroundAudioManager.onStop.html">BackgroundAudioManager.onStop</a></td>
<td>监听背景音频停止事件</td>
</tr>
<tr>
<td><a href="BackgroundAudioManager.onTimeUpdate.html">BackgroundAudioManager.onTimeUpdate</a></td>
<td>监听背景音频播放进度更新事件</td>
</tr>
<tr>
<td><a href="BackgroundAudioManager.onNext.html">BackgroundAudioManager.onNext</a></td>
<td>监听用户在系统音乐播放面板点击下一曲事件（仅iOS）</td>
</tr>
<tr>
<td><a href="BackgroundAudioManager.onPrev.html">BackgroundAudioManager.onPrev</a></td>
<td>监听用户在系统音乐播放面板点击上一曲事件（仅iOS）</td>
</tr>
</tbody>
</table>
<h3 id="实时音视频">实时音视频</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.createLivePusherContext.html">wx.createLivePusherContext</a></td>
<td>创建 <code>live-pusher</code> 上下文 <a href="LivePusherContext.html"><code>LivePusherContext</code></a> 对象</td>
</tr>
<tr>
<td><a href="wx.createLivePlayerContext.html">wx.createLivePlayerContext</a></td>
<td>创建 <code>live-player</code> 上下文 <a href="LivePlayerContext.html"><code>LivePlayerContext</code></a> 对象</td>
</tr>
</tbody>
</table>
<h4 id="liveplayercontext">LivePlayerContext</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="LivePlayerContext.play.html">LivePlayerContext.play</a></td>
<td>播放</td>
</tr>
<tr>
<td><a href="LivePlayerContext.stop.html">LivePlayerContext.stop</a></td>
<td>停止</td>
</tr>
<tr>
<td><a href="LivePlayerContext.mute.html">LivePlayerContext.mute</a></td>
<td>静音</td>
</tr>
<tr>
<td><a href="LivePlayerContext.pause.html">LivePlayerContext.pause</a></td>
<td>暂停</td>
</tr>
<tr>
<td><a href="LivePlayerContext.resume.html">LivePlayerContext.resume</a></td>
<td>恢复</td>
</tr>
<tr>
<td><a href="LivePlayerContext.requestFullScreen.html">LivePlayerContext.requestFullScreen</a></td>
<td>进入全屏</td>
</tr>
<tr>
<td><a href="LivePlayerContext.exitFullScreen.html">LivePlayerContext.exitFullScreen</a></td>
<td>退出全屏</td>
</tr>
</tbody>
</table>
<h4 id="livepushercontext">LivePusherContext</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="LivePusherContext.start.html">LivePusherContext.start</a></td>
<td>播放推流</td>
</tr>
<tr>
<td><a href="LivePusherContext.stop.html">LivePusherContext.stop</a></td>
<td>停止推流</td>
</tr>
<tr>
<td><a href="LivePusherContext.pause.html">LivePusherContext.pause</a></td>
<td>暂停推流</td>
</tr>
<tr>
<td><a href="LivePusherContext.resume.html">LivePusherContext.resume</a></td>
<td>恢复推流</td>
</tr>
<tr>
<td><a href="LivePusherContext.switchCamera.html">LivePusherContext.switchCamera</a></td>
<td>切换前后摄像头</td>
</tr>
<tr>
<td><a href="LivePusherContext.snapshot.html">LivePusherContext.snapshot</a></td>
<td>快照</td>
</tr>
<tr>
<td><a href="LivePusherContext.toggleTorch.html">LivePusherContext.toggleTorch</a></td>
<td>切换</td>
</tr>
<tr>
<td><a href="LivePusherContext.playBGM.html">LivePusherContext.playBGM</a></td>
<td>播放背景音</td>
</tr>
<tr>
<td><a href="LivePusherContext.stopBGM.html">LivePusherContext.stopBGM</a></td>
<td>停止背景音</td>
</tr>
<tr>
<td><a href="LivePusherContext.pauseBGM.html">LivePusherContext.pauseBGM</a></td>
<td>暂停背景音</td>
</tr>
<tr>
<td><a href="LivePusherContext.resumeBGM.html">LivePusherContext.resumeBGM</a></td>
<td>恢复背景音</td>
</tr>
<tr>
<td><a href="LivePusherContext.setBGMVolume.html">LivePusherContext.setBGMVolume</a></td>
<td>设置背景音音量</td>
</tr>
</tbody>
</table>
<h3 id="录音">录音</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.stopRecord.html">wx.stopRecord</a></td>
<td>停止录音</td>
</tr>
<tr>
<td><a href="wx.startRecord.html">wx.startRecord</a></td>
<td>开始录音</td>
</tr>
<tr>
<td><a href="wx.getRecorderManager.html">wx.getRecorderManager</a></td>
<td>获取<strong>全局唯一</strong>的录音管理器 RecorderManager</td>
</tr>
</tbody>
</table>
<h4 id="recordermanager">RecorderManager</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="RecorderManager.start.html">RecorderManager.start</a></td>
<td>开始录音</td>
</tr>
<tr>
<td><a href="RecorderManager.pause.html">RecorderManager.pause</a></td>
<td>暂停录音</td>
</tr>
<tr>
<td><a href="RecorderManager.resume.html">RecorderManager.resume</a></td>
<td>继续录音</td>
</tr>
<tr>
<td><a href="RecorderManager.stop.html">RecorderManager.stop</a></td>
<td>停止录音</td>
</tr>
<tr>
<td><a href="RecorderManager.onStart.html">RecorderManager.onStart</a></td>
<td>监听录音开始事件</td>
</tr>
<tr>
<td><a href="RecorderManager.onResume.html">RecorderManager.onResume</a></td>
<td>监听录音继续事件</td>
</tr>
<tr>
<td><a href="RecorderManager.onPause.html">RecorderManager.onPause</a></td>
<td>监听录音暂停事件</td>
</tr>
<tr>
<td><a href="RecorderManager.onStop.html">RecorderManager.onStop</a></td>
<td>监听录音结束事件</td>
</tr>
<tr>
<td><a href="RecorderManager.onFrameRecorded.html">RecorderManager.onFrameRecorded</a></td>
<td>监听已录制完指定帧大小的文件事件</td>
</tr>
<tr>
<td><a href="RecorderManager.onError.html">RecorderManager.onError</a></td>
<td>监听录音错误事件</td>
</tr>
<tr>
<td><a href="RecorderManager.onInterruptionBegin.html">RecorderManager.onInterruptionBegin</a></td>
<td>监听录音因为受到系统占用而被中断开始事件</td>
</tr>
<tr>
<td><a href="RecorderManager.onInterruptionEnd.html">RecorderManager.onInterruptionEnd</a></td>
<td>监听录音中断结束事件</td>
</tr>
</tbody>
</table>
<h3 id="相机">相机</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.createCameraContext.html">wx.createCameraContext</a></td>
<td>创建 <code>camera</code> 上下文 <a href="CameraContext.html"><code>CameraContext</code></a> 对象</td>
</tr>
</tbody>
</table>
<h4 id="cameracontext">CameraContext</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="CameraContext.takePhoto.html">CameraContext.takePhoto</a></td>
<td>拍摄照片</td>
</tr>
<tr>
<td><a href="CameraContext.startRecord.html">CameraContext.startRecord</a></td>
<td>开始录像</td>
</tr>
<tr>
<td><a href="CameraContext.stopRecord.html">CameraContext.stopRecord</a></td>
<td>结束录像</td>
</tr>
</tbody>
</table>
<h2 id="位置">位置</h2>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.openLocation.html">wx.openLocation</a></td>
<td>使用微信内置地图查看位置</td>
</tr>
<tr>
<td><a href="wx.getLocation.html">wx.getLocation</a></td>
<td>获取当前的地理位置、速度</td>
</tr>
<tr>
<td><a href="wx.chooseLocation.html">wx.chooseLocation</a></td>
<td>打开地图选择位置</td>
</tr>
</tbody>
</table>
<h2 id="转发">转发</h2>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.updateShareMenu.html">wx.updateShareMenu</a></td>
<td>更新转发属性</td>
</tr>
<tr>
<td><a href="wx.showShareMenu.html">wx.showShareMenu</a></td>
<td>显示当前页面的转发按钮</td>
</tr>
<tr>
<td><a href="wx.hideShareMenu.html">wx.hideShareMenu</a></td>
<td>隐藏转发按钮</td>
</tr>
<tr>
<td><a href="wx.getShareInfo.html">wx.getShareInfo</a></td>
<td>获取转发详细信息</td>
</tr>
</tbody>
</table>
<h2 id="画布">画布</h2>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.createCanvasContext.html">wx.createCanvasContext</a></td>
<td>创建 canvas 的绘图上下文 <a href="CanvasContext.html"><code>CanvasContext</code></a> 对象</td>
</tr>
<tr>
<td><a href="wx.canvasToTempFilePath.html">wx.canvasToTempFilePath</a></td>
<td>把当前画布指定区域的内容导出生成指定大小的图片</td>
</tr>
<tr>
<td><a href="wx.canvasPutImageData.html">wx.canvasPutImageData</a></td>
<td>将像素数据绘制到画布</td>
</tr>
<tr>
<td><a href="wx.canvasGetImageData.html">wx.canvasGetImageData</a></td>
<td>获取 canvas 区域隐含的像素数据</td>
</tr>
</tbody>
</table>
<h3 id="canvascontext">CanvasContext</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="CanvasContext.draw.html">CanvasContext.draw</a></td>
<td>将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中</td>
</tr>
<tr>
<td><a href="CanvasContext.createLinearGradient.html">CanvasContext.createLinearGradient</a></td>
<td>创建一个线性的渐变颜色</td>
</tr>
<tr>
<td><a href="CanvasContext.createCircularGradient.html">CanvasContext.createCircularGradient</a></td>
<td>创建一个圆形的渐变颜色</td>
</tr>
<tr>
<td><a href="CanvasContext.createPattern.html">CanvasContext.createPattern</a></td>
<td>对指定的图像创建模式的方法，可在指定的方向上重复元图像</td>
</tr>
<tr>
<td><a href="CanvasContext.measureText.html">CanvasContext.measureText</a></td>
<td>测量文本尺寸信息</td>
</tr>
<tr>
<td><a href="CanvasContext.save.html">CanvasContext.save</a></td>
<td>保存绘图上下文</td>
</tr>
<tr>
<td><a href="CanvasContext.restore.html">CanvasContext.restore</a></td>
<td>恢复之前保存的绘图上下文</td>
</tr>
<tr>
<td><a href="CanvasContext.beginPath.html">CanvasContext.beginPath</a></td>
<td>开始创建一个路径</td>
</tr>
<tr>
<td><a href="CanvasContext.moveTo.html">CanvasContext.moveTo</a></td>
<td>把路径移动到画布中的指定点，不创建线条</td>
</tr>
<tr>
<td><a href="CanvasContext.lineTo.html">CanvasContext.lineTo</a></td>
<td>增加一个新点，然后创建一条从上次指定点到目标点的线</td>
</tr>
<tr>
<td><a href="CanvasContext.quadraticCurveTo.html">CanvasContext.quadraticCurveTo</a></td>
<td>创建二次贝塞尔曲线路径</td>
</tr>
<tr>
<td><a href="CanvasContext.bezierCurveTo.html">CanvasContext.bezierCurveTo</a></td>
<td>创建三次方贝塞尔曲线路径</td>
</tr>
<tr>
<td><a href="CanvasContext.arc.html">CanvasContext.arc</a></td>
<td>创建一条弧线</td>
</tr>
<tr>
<td><a href="CanvasContext.rect.html">CanvasContext.rect</a></td>
<td>创建一个矩形路径</td>
</tr>
<tr>
<td><a href="CanvasContext.arcTo.html">CanvasContext.arcTo</a></td>
<td>根据控制点和半径绘制圆弧路径</td>
</tr>
<tr>
<td><a href="CanvasContext.clip.html">CanvasContext.clip</a></td>
<td>从原始画布中剪切任意形状和尺寸</td>
</tr>
<tr>
<td><a href="CanvasContext.fillRect.html">CanvasContext.fillRect</a></td>
<td>填充一个矩形</td>
</tr>
<tr>
<td><a href="CanvasContext.strokeRect.html">CanvasContext.strokeRect</a></td>
<td>画一个矩形(非填充)</td>
</tr>
<tr>
<td><a href="CanvasContext.clearRect.html">CanvasContext.clearRect</a></td>
<td>清除画布上在该矩形区域内的内容</td>
</tr>
<tr>
<td><a href="CanvasContext.fill.html">CanvasContext.fill</a></td>
<td>对当前路径中的内容进行填充</td>
</tr>
<tr>
<td><a href="CanvasContext.stroke.html">CanvasContext.stroke</a></td>
<td>画出当前路径的边框</td>
</tr>
<tr>
<td><a href="CanvasContext.closePath.html">CanvasContext.closePath</a></td>
<td>关闭一个路径</td>
</tr>
<tr>
<td><a href="CanvasContext.scale.html">CanvasContext.scale</a></td>
<td>在调用后，之后创建的路径其横纵坐标会被缩放</td>
</tr>
<tr>
<td><a href="CanvasContext.rotate.html">CanvasContext.rotate</a></td>
<td>以原点为中心顺时针旋转当前坐标轴</td>
</tr>
<tr>
<td><a href="CanvasContext.translate.html">CanvasContext.translate</a></td>
<td>对当前坐标系的原点 (0, 0) 进行变换</td>
</tr>
<tr>
<td><a href="CanvasContext.drawImage.html">CanvasContext.drawImage</a></td>
<td>绘制图像到画布</td>
</tr>
<tr>
<td><a href="CanvasContext.strokeText.html">CanvasContext.strokeText</a></td>
<td>给定的 (x, y) 位置绘制文本描边的方法</td>
</tr>
<tr>
<td><a href="CanvasContext.transform.html">CanvasContext.transform</a></td>
<td>使用矩阵多次叠加当前变换的方法</td>
</tr>
<tr>
<td><a href="CanvasContext.setTransform.html">CanvasContext.setTransform</a></td>
<td>使用矩阵重新设置（覆盖）当前变换的方法</td>
</tr>
<tr>
<td><a href="CanvasContext.setFillStyle.html">CanvasContext.setFillStyle</a></td>
<td>设置填充色</td>
</tr>
<tr>
<td><a href="CanvasContext.setStrokeStyle.html">CanvasContext.setStrokeStyle</a></td>
<td>设置描边颜色</td>
</tr>
<tr>
<td><a href="CanvasContext.setShadow.html">CanvasContext.setShadow</a></td>
<td>设定阴影样式</td>
</tr>
<tr>
<td><a href="CanvasContext.setGlobalAlpha.html">CanvasContext.setGlobalAlpha</a></td>
<td>设置全局画笔透明度</td>
</tr>
<tr>
<td><a href="CanvasContext.setLineWidth.html">CanvasContext.setLineWidth</a></td>
<td>设置线条的宽度</td>
</tr>
<tr>
<td><a href="CanvasContext.setLineJoin.html">CanvasContext.setLineJoin</a></td>
<td>设置线条的交点样式</td>
</tr>
<tr>
<td><a href="CanvasContext.setLineCap.html">CanvasContext.setLineCap</a></td>
<td>设置线条的端点样式</td>
</tr>
<tr>
<td><a href="CanvasContext.setLineDash.html">CanvasContext.setLineDash</a></td>
<td>设置虚线样式</td>
</tr>
<tr>
<td><a href="CanvasContext.setMiterLimit.html">CanvasContext.setMiterLimit</a></td>
<td>设置最大斜接长度</td>
</tr>
<tr>
<td><a href="CanvasContext.fillText.html">CanvasContext.fillText</a></td>
<td>在画布上绘制被填充的文本</td>
</tr>
<tr>
<td><a href="CanvasContext.setFontSize.html">CanvasContext.setFontSize</a></td>
<td>设置字体的字号</td>
</tr>
<tr>
<td><a href="CanvasContext.setTextAlign.html">CanvasContext.setTextAlign</a></td>
<td>设置文字的对齐</td>
</tr>
<tr>
<td><a href="CanvasContext.setTextBaseline.html">CanvasContext.setTextBaseline</a></td>
<td>设置文字的竖直对齐</td>
</tr>
</tbody>
</table>
<h3 id="canvasgradient">CanvasGradient</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="CanvasGradient.addColorStop.html">CanvasGradient.addColorStop</a></td>
<td>添加颜色的渐变点</td>
</tr>
<tr>
<td><a href="Color.html">Color</a></td>
<td>颜色</td>
</tr>
</tbody>
</table>
<h2 id="文件">文件</h2>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.getFileSystemManager.html">wx.getFileSystemManager</a></td>
<td>获取全局唯一的文件管理器</td>
</tr>
<tr>
<td><a href="wx.getFileInfo.html">wx.getFileInfo</a></td>
<td>获取文件信息</td>
</tr>
<tr>
<td><a href="wx.removeSavedFile.html">wx.removeSavedFile</a></td>
<td>删除本地缓存文件</td>
</tr>
<tr>
<td><a href="wx.getSavedFileInfo.html">wx.getSavedFileInfo</a></td>
<td>获取本地文件的文件信息</td>
</tr>
<tr>
<td><a href="wx.getSavedFileList.html">wx.getSavedFileList</a></td>
<td>获取该小程序下已保存的本地缓存文件列表</td>
</tr>
<tr>
<td><a href="wx.openDocument.html">wx.openDocument</a></td>
<td>新开页面打开文档</td>
</tr>
<tr>
<td><a href="wx.saveFile.html">wx.saveFile</a></td>
<td>保存文件到本地</td>
</tr>
</tbody>
</table>
<h3 id="filesystemmanager">FileSystemManager</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="FileSystemManager.access.html">FileSystemManager.access</a></td>
<td>判断文件/目录是否存在</td>
</tr>
<tr>
<td><a href="FileSystemManager.accessSync.html">FileSystemManager.accessSync</a></td>
<td><a href="FileSystemManager.access.html">FileSystemManager.access</a> 的同步版本</td>
</tr>
<tr>
<td><a href="FileSystemManager.appendFile.html">FileSystemManager.appendFile</a></td>
<td>在文件结尾追加内容</td>
</tr>
<tr>
<td><a href="FileSystemManager.appendFileSync.html">FileSystemManager.appendFileSync</a></td>
<td><a href="FileSystemManager.appendFile.html">FileSystemManager.appendFile</a> 的同步版本</td>
</tr>
<tr>
<td><a href="FileSystemManager.saveFile.html">FileSystemManager.saveFile</a></td>
<td>保存临时文件到本地</td>
</tr>
<tr>
<td><a href="FileSystemManager.saveFileSync.html">FileSystemManager.saveFileSync</a></td>
<td><a href="FileSystemManager.saveFile.html">FileSystemManager.saveFile</a> 的同步版本</td>
</tr>
<tr>
<td><a href="FileSystemManager.getSavedFileList.html">FileSystemManager.getSavedFileList</a></td>
<td>获取该小程序下已保存的本地缓存文件列表</td>
</tr>
<tr>
<td><a href="FileSystemManager.removeSavedFile.html">FileSystemManager.removeSavedFile</a></td>
<td>删除该小程序下已保存的本地缓存文件</td>
</tr>
<tr>
<td><a href="FileSystemManager.copyFile.html">FileSystemManager.copyFile</a></td>
<td>复制文件</td>
</tr>
<tr>
<td><a href="FileSystemManager.copyFileSync.html">FileSystemManager.copyFileSync</a></td>
<td><a href="FileSystemManager.copyFile.html">FileSystemManager.copyFile</a> 的同步版本</td>
</tr>
<tr>
<td><a href="FileSystemManager.getFileInfo.html">FileSystemManager.getFileInfo</a></td>
<td>获取该小程序下的 本地临时文件 或 本地缓存文件 信息</td>
</tr>
<tr>
<td><a href="FileSystemManager.mkdir.html">FileSystemManager.mkdir</a></td>
<td>创建目录</td>
</tr>
<tr>
<td><a href="FileSystemManager.mkdirSync.html">FileSystemManager.mkdirSync</a></td>
<td><a href="FileSystemManager.mkdir.html">FileSystemManager.mkdir</a> 的同步版本</td>
</tr>
<tr>
<td><a href="FileSystemManager.readFile.html">FileSystemManager.readFile</a></td>
<td>读取本地文件内容</td>
</tr>
<tr>
<td><a href="FileSystemManager.readFileSync.html">FileSystemManager.readFileSync</a></td>
<td><a href="FileSystemManager.readFile.html">FileSystemManager.readFile</a> 的同步版本</td>
</tr>
<tr>
<td><a href="FileSystemManager.readdir.html">FileSystemManager.readdir</a></td>
<td>读取目录内文件列表</td>
</tr>
<tr>
<td><a href="FileSystemManager.readdirSync.html">FileSystemManager.readdirSync</a></td>
<td><a href="FileSystemManager.readdir.html">FileSystemManager.readdir</a> 的同步版本</td>
</tr>
<tr>
<td><a href="FileSystemManager.rename.html">FileSystemManager.rename</a></td>
<td>重命名文件</td>
</tr>
<tr>
<td><a href="FileSystemManager.renameSync.html">FileSystemManager.renameSync</a></td>
<td><a href="FileSystemManager.rename.html">FileSystemManager.rename</a> 的同步版本</td>
</tr>
<tr>
<td><a href="FileSystemManager.rmdir.html">FileSystemManager.rmdir</a></td>
<td>删除目录</td>
</tr>
<tr>
<td><a href="FileSystemManager.rmdirSync.html">FileSystemManager.rmdirSync</a></td>
<td><a href="FileSystemManager.rmdir.html">FileSystemManager.rmdir</a> 的同步版本</td>
</tr>
<tr>
<td><a href="FileSystemManager.stat.html">FileSystemManager.stat</a></td>
<td>获取文件 Stats 对象</td>
</tr>
<tr>
<td><a href="FileSystemManager.statSync.html">FileSystemManager.statSync</a></td>
<td><a href="FileSystemManager.stat.html">FileSystemManager.stat</a> 的同步版本</td>
</tr>
<tr>
<td><a href="FileSystemManager.unlink.html">FileSystemManager.unlink</a></td>
<td>删除文件</td>
</tr>
<tr>
<td><a href="FileSystemManager.unlinkSync.html">FileSystemManager.unlinkSync</a></td>
<td><a href="FileSystemManager.unlink.html">FileSystemManager.unlink</a> 的同步版本</td>
</tr>
<tr>
<td><a href="FileSystemManager.unzip.html">FileSystemManager.unzip</a></td>
<td>解压文件</td>
</tr>
<tr>
<td><a href="FileSystemManager.writeFile.html">FileSystemManager.writeFile</a></td>
<td>写文件</td>
</tr>
<tr>
<td><a href="FileSystemManager.writeFileSync.html">FileSystemManager.writeFileSync</a></td>
<td><a href="FileSystemManager.writeFile.html">FileSystemManager.writeFile</a> 的同步版本</td>
</tr>
</tbody>
</table>
<h3 id="stats">Stats</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="Stats.isDirectory.html">Stats.isDirectory</a></td>
<td>判断当前文件是否一个目录</td>
</tr>
<tr>
<td><a href="Stats.isFile.html">Stats.isFile</a></td>
<td>判断当前文件是否一个普通文件</td>
</tr>
</tbody>
</table>
<h2 id="开放接口">开放接口</h2>
<h3 id="登录">登录</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.checkSession.html">wx.checkSession</a></td>
<td>检查登录态是否过期</td>
</tr>
<tr>
<td><a href="wx.login.html">wx.login</a></td>
<td>调用接口获取登录凭证（code）</td>
</tr>
<tr>
<td><a href="code2Session.html">code2Session</a></td>
<td>登录凭证校验</td>
</tr>
</tbody>
</table>
<h3 id="小程序跳转">小程序跳转</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.navigateToMiniProgram.html">wx.navigateToMiniProgram</a></td>
<td>打开另一个小程序</td>
</tr>
<tr>
<td><a href="wx.navigateBackMiniProgram.html">wx.navigateBackMiniProgram</a></td>
<td>返回到上一个小程序</td>
</tr>
</tbody>
</table>
<h3 id="帐号信息">帐号信息</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.getAccountInfoSync.html">wx.getAccountInfoSync</a></td>
<td>获取当前帐号信息</td>
</tr>
</tbody>
</table>
<h3 id="用户信息">用户信息</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.getUserInfo.html">wx.getUserInfo</a></td>
<td>获取用户信息</td>
</tr>
<tr>
<td><a href="getPaidUnionId.html">getPaidUnionId</a></td>
<td>用户支付完成后，获取该用户的 <a href="../framework/open-ability/union-id.html">UnionId</a>，无需用户授权</td>
</tr>
<tr>
<td><a href="UserInfo.html">UserInfo</a></td>
<td>用户信息</td>
</tr>
</tbody>
</table>
<h3 id="接口调用凭证">接口调用凭证</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="getAccessToken.html">getAccessToken</a></td>
<td>获取小程序全局唯一后台接口调用凭据（<code>access_token</code>）</td>
</tr>
</tbody>
</table>
<h3 id="数据上报">数据上报</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.reportMonitor.html">wx.reportMonitor</a></td>
<td>自定义业务数据监控上报接口</td>
</tr>
</tbody>
</table>
<h3 id="数据分析">数据分析</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.reportAnalytics.html">wx.reportAnalytics</a></td>
<td>自定义分析数据上报接口</td>
</tr>
</tbody>
</table>
<h4 id="访问留存">访问留存</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="getAnalysisDailyRetain.html">getAnalysisDailyRetain</a></td>
<td>获取用户访问小程序日留存</td>
</tr>
<tr>
<td><a href="getAnalysisMonthlyRetain.html">getAnalysisMonthlyRetain</a></td>
<td>获取用户访问小程序月留存</td>
</tr>
<tr>
<td><a href="getAnalysisWeeklyRetain.html">getAnalysisWeeklyRetain</a></td>
<td>获取用户访问小程序周留存</td>
</tr>
<tr>
<td><a href="getAnalysisDailySummary.html">getAnalysisDailySummary</a></td>
<td>获取用户访问小程序数据概况</td>
</tr>
</tbody>
</table>
<h4 id="访问趋势">访问趋势</h4>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="getAnalysisDailyVisitTrend.html">getAnalysisDailyVisitTrend</a></td>
<td>获取用户访问小程序数据日趋势</td>
</tr>
<tr>
<td><a href="getAnalysisMonthlyVisitTrend.html">getAnalysisMonthlyVisitTrend</a></td>
<td>获取用户访问小程序数据月趋势</td>
</tr>
<tr>
<td><a href="getAnalysisWeeklyVisitTrend.html">getAnalysisWeeklyVisitTrend</a></td>
<td>获取用户访问小程序数据周趋势</td>
</tr>
<tr>
<td><a href="getAnalysisUserPortrait.html">getAnalysisUserPortrait</a></td>
<td>获取小程序新增或活跃用户的画像分布数据</td>
</tr>
<tr>
<td><a href="getAnalysisVisitDistribution.html">getAnalysisVisitDistribution</a></td>
<td>获取用户小程序访问分布数据</td>
</tr>
<tr>
<td><a href="getAnalysisVisitPage.html">getAnalysisVisitPage</a></td>
<td>访问页面</td>
</tr>
</tbody>
</table>
<h3 id="支付">支付</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.requestPayment.html">wx.requestPayment</a></td>
<td>发起微信支付</td>
</tr>
</tbody>
</table>
<h3 id="授权">授权</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.authorize.html">wx.authorize</a></td>
<td>提前向用户发起授权请求</td>
</tr>
</tbody>
</table>
<h3 id="设置">设置</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.openSetting.html">wx.openSetting</a></td>
<td>调起客户端小程序设置界面，返回用户设置的操作结果</td>
</tr>
<tr>
<td><a href="wx.getSetting.html">wx.getSetting</a></td>
<td>获取用户的当前设置</td>
</tr>
<tr>
<td><a href="AuthSetting.html">AuthSetting</a></td>
<td>用户授权设置信息，详情参考<a href="../framework/open-ability/authorize.html">权限</a></td>
</tr>
</tbody>
</table>
<h3 id="客服消息">客服消息</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="customerTyping.html">customerTyping</a></td>
<td>下发客服当前输入状态给用户</td>
</tr>
<tr>
<td><a href="getTempMedia.html">getTempMedia</a></td>
<td>获取客服消息内的临时素材</td>
</tr>
<tr>
<td><a href="sendCustomerMessage.html">sendCustomerMessage</a></td>
<td>发送客服消息给用户</td>
</tr>
<tr>
<td><a href="uploadTempMedia.html">uploadTempMedia</a></td>
<td>把媒体文件上传到微信服务器</td>
</tr>
</tbody>
</table>
<h3 id="模板消息">模板消息</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="addTemplate.html">addTemplate</a></td>
<td>组合模板并添加至帐号下的个人模板库</td>
</tr>
<tr>
<td><a href="deleteTemplate.html">deleteTemplate</a></td>
<td>删除帐号下的某个模板</td>
</tr>
<tr>
<td><a href="getTemplateLibraryById.html">getTemplateLibraryById</a></td>
<td>获取模板库某个模板标题下关键词库</td>
</tr>
<tr>
<td><a href="getTemplateLibraryList.html">getTemplateLibraryList</a></td>
<td>获取小程序模板库标题列表</td>
</tr>
<tr>
<td><a href="getTemplateList.html">getTemplateList</a></td>
<td>获取帐号下已存在的模板列表</td>
</tr>
<tr>
<td><a href="sendTemplateMessage.html">sendTemplateMessage</a></td>
<td>发送模板消息</td>
</tr>
</tbody>
</table>
<h3 id="统一服务消息">统一服务消息</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="sendUniformMessage.html">sendUniformMessage</a></td>
<td>下发小程序和公众号统一的服务消息</td>
</tr>
</tbody>
</table>
<h3 id="动态消息">动态消息</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="createActivityId.html">createActivityId</a></td>
<td>创建被分享动态消息的 activity_id</td>
</tr>
<tr>
<td><a href="setUpdatableMsg.html">setUpdatableMsg</a></td>
<td>修改被分享的动态消息</td>
</tr>
</tbody>
</table>
<h3 id="插件管理">插件管理</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="applyPlugin.html">applyPlugin</a></td>
<td>向插件开发者发起使用插件的申请</td>
</tr>
<tr>
<td><a href="getPluginDevApplyList.html">getPluginDevApplyList</a></td>
<td>获取当前所有插件使用方（供插件开发者调用）</td>
</tr>
<tr>
<td><a href="getPluginList.html">getPluginList</a></td>
<td>查询已添加的插件</td>
</tr>
<tr>
<td><a href="setDevPluginApplyStatus.html">setDevPluginApplyStatus</a></td>
<td>修改插件使用申请的状态（供插件开发者调用）</td>
</tr>
<tr>
<td><a href="unbindPlugin.html">unbindPlugin</a></td>
<td>删除已添加的插件</td>
</tr>
</tbody>
</table>
<h3 id="收货地址">收货地址</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.chooseAddress.html">wx.chooseAddress</a></td>
<td>获取用户收货地址</td>
</tr>
</tbody>
</table>
<h3 id="卡券">卡券</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.openCard.html">wx.openCard</a></td>
<td>查看微信卡包中的卡券</td>
</tr>
<tr>
<td><a href="wx.addCard.html">wx.addCard</a></td>
<td>批量添加卡券</td>
</tr>
</tbody>
</table>
<h3 id="发票">发票</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.chooseInvoiceTitle.html">wx.chooseInvoiceTitle</a></td>
<td>选择用户的发票抬头</td>
</tr>
<tr>
<td><a href="wx.chooseInvoice.html">wx.chooseInvoice</a></td>
<td>选择用户已有的发票</td>
</tr>
</tbody>
</table>
<h3 id="附近的小程序">附近的小程序</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="addNearbyPoi.html">addNearbyPoi</a></td>
<td>添加地点</td>
</tr>
<tr>
<td><a href="deleteNearbyPoi.html">deleteNearbyPoi</a></td>
<td>删除地点</td>
</tr>
<tr>
<td><a href="getNearbyPoiList.html">getNearbyPoiList</a></td>
<td>查看地点列表</td>
</tr>
<tr>
<td><a href="setNearbyPoiShowStatus.html">setNearbyPoiShowStatus</a></td>
<td>展示/取消展示附近小程序</td>
</tr>
</tbody>
</table>
<h3 id="二维码">二维码</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="createWXAQRCode.html">createWXAQRCode</a></td>
<td>获取小程序二维码，适用于需要的码数量较少的业务场景</td>
</tr>
<tr>
<td><a href="getWXACode.html">getWXACode</a></td>
<td>获取小程序码，适用于需要的码数量较少的业务场景</td>
</tr>
<tr>
<td><a href="getWXACodeUnlimit.html">getWXACodeUnlimit</a></td>
<td>获取小程序码，适用于需要的码数量极多的业务场景</td>
</tr>
</tbody>
</table>
<h3 id="内容安全">内容安全</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="imgSecCheck.html">imgSecCheck</a></td>
<td>校验一张图片是否含有违法违规内容</td>
</tr>
<tr>
<td><a href="msgSecCheck.html">msgSecCheck</a></td>
<td>检查一段文本是否含有违法违规内容</td>
</tr>
</tbody>
</table>
<h3 id="生物认证">生物认证</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.startSoterAuthentication.html">wx.startSoterAuthentication</a></td>
<td>开始 SOTER 生物认证</td>
</tr>
<tr>
<td><a href="wx.checkIsSupportSoterAuthentication.html">wx.checkIsSupportSoterAuthentication</a></td>
<td>获取本机支持的 SOTER 生物认证方式</td>
</tr>
<tr>
<td><a href="wx.checkIsSoterEnrolledInDevice.html">wx.checkIsSoterEnrolledInDevice</a></td>
<td>获取设备内是否录入如指纹等生物信息的接口</td>
</tr>
</tbody>
</table>
<h3 id="微信运动">微信运动</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.getWeRunData.html">wx.getWeRunData</a></td>
<td>获取用户过去三十天微信运动步数</td>
</tr>
</tbody>
</table>
<h2 id="设备">设备</h2>
<h3 id="ibeacon">iBeacon</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.onBeaconServiceChange.html">wx.onBeaconServiceChange</a></td>
<td>监听 iBeacon 服务状态变化事件</td>
</tr>
<tr>
<td><a href="wx.onBeaconUpdate.html">wx.onBeaconUpdate</a></td>
<td>监听 iBeacon 设备更新事件</td>
</tr>
<tr>
<td><a href="wx.getBeacons.html">wx.getBeacons</a></td>
<td>获取所有已搜索到的 iBeacon 设备</td>
</tr>
<tr>
<td><a href="wx.stopBeaconDiscovery.html">wx.stopBeaconDiscovery</a></td>
<td>停止搜索附近的 iBeacon 设备</td>
</tr>
<tr>
<td><a href="wx.startBeaconDiscovery.html">wx.startBeaconDiscovery</a></td>
<td>开始搜索附近的 iBeacon 设备</td>
</tr>
<tr>
<td><a href="IBeaconInfo.html">IBeaconInfo</a></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="wi-fi">Wi-Fi</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.stopWifi.html">wx.stopWifi</a></td>
<td>关闭 Wi-Fi 模块</td>
</tr>
<tr>
<td><a href="wx.startWifi.html">wx.startWifi</a></td>
<td>初始化 Wi-Fi 模块</td>
</tr>
<tr>
<td><a href="wx.setWifiList.html">wx.setWifiList</a></td>
<td>设置 <code>wifiList</code> 中 AP 的相关信息</td>
</tr>
<tr>
<td><a href="wx.onWifiConnected.html">wx.onWifiConnected</a></td>
<td>监听连接上 Wi-Fi 的事件</td>
</tr>
<tr>
<td><a href="wx.onGetWifiList.html">wx.onGetWifiList</a></td>
<td>监听获取到 Wi-Fi 列表数据事件</td>
</tr>
<tr>
<td><a href="wx.getWifiList.html">wx.getWifiList</a></td>
<td>请求获取 Wi-Fi 列表</td>
</tr>
<tr>
<td><a href="wx.getConnectedWifi.html">wx.getConnectedWifi</a></td>
<td>获取已连接中的 Wi-Fi 信息</td>
</tr>
<tr>
<td><a href="wx.connectWifi.html">wx.connectWifi</a></td>
<td>连接 Wi-Fi</td>
</tr>
<tr>
<td><a href="WifiInfo.html">WifiInfo</a></td>
<td>Wifi 信息</td>
</tr>
</tbody>
</table>
<h3 id="加速计">加速计</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.onAccelerometerChange.html">wx.onAccelerometerChange</a></td>
<td>监听加速度数据事件</td>
</tr>
<tr>
<td><a href="wx.stopAccelerometer.html">wx.stopAccelerometer</a></td>
<td>停止监听加速度数据</td>
</tr>
<tr>
<td><a href="wx.startAccelerometer.html">wx.startAccelerometer</a></td>
<td>开始监听加速度数据</td>
</tr>
</tbody>
</table>
<h3 id="电量">电量</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.getBatteryInfoSync.html">wx.getBatteryInfoSync</a></td>
<td><a href="wx.getBatteryInfo.html">wx.getBatteryInfo</a> 的同步版本</td>
</tr>
<tr>
<td><a href="wx.getBatteryInfo.html">wx.getBatteryInfo</a></td>
<td>获取设备电量</td>
</tr>
</tbody>
</table>
<h3 id="剪贴板">剪贴板</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.setClipboardData.html">wx.setClipboardData</a></td>
<td>设置系统剪贴板的内容</td>
</tr>
<tr>
<td><a href="wx.getClipboardData.html">wx.getClipboardData</a></td>
<td>获取系统剪贴板的内容</td>
</tr>
</tbody>
</table>
<h3 id="罗盘">罗盘</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.onCompassChange.html">wx.onCompassChange</a></td>
<td>监听罗盘数据变化事件</td>
</tr>
<tr>
<td><a href="wx.stopCompass.html">wx.stopCompass</a></td>
<td>停止监听罗盘数据</td>
</tr>
<tr>
<td><a href="wx.startCompass.html">wx.startCompass</a></td>
<td>开始监听罗盘数据</td>
</tr>
</tbody>
</table>
<h3 id="联系人">联系人</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.addPhoneContact.html">wx.addPhoneContact</a></td>
<td>添加手机通讯录联系人</td>
</tr>
</tbody>
</table>
<h3 id="陀螺仪">陀螺仪</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.onGyroscopeChange.html">wx.onGyroscopeChange</a></td>
<td>监听陀螺仪数据变化事件</td>
</tr>
<tr>
<td><a href="wx.stopGyroscope.html">wx.stopGyroscope</a></td>
<td>停止监听陀螺仪数据</td>
</tr>
<tr>
<td><a href="wx.startGyroscope.html">wx.startGyroscope</a></td>
<td>开始监听陀螺仪数据</td>
</tr>
</tbody>
</table>
<h3 id="设备方向">设备方向</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.onDeviceMotionChange.html">wx.onDeviceMotionChange</a></td>
<td>监听设备方向变化事件</td>
</tr>
<tr>
<td><a href="wx.stopDeviceMotionListening.html">wx.stopDeviceMotionListening</a></td>
<td>停止监听设备方向的变化</td>
</tr>
<tr>
<td><a href="wx.startDeviceMotionListening.html">wx.startDeviceMotionListening</a></td>
<td>开始监听设备方向的变化</td>
</tr>
</tbody>
</table>
<h3 id="网络-2">网络</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.onNetworkStatusChange.html">wx.onNetworkStatusChange</a></td>
<td>监听网络状态变化事件</td>
</tr>
<tr>
<td><a href="wx.getNetworkType.html">wx.getNetworkType</a></td>
<td>获取网络类型</td>
</tr>
</tbody>
</table>
<h3 id="电话">电话</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.makePhoneCall.html">wx.makePhoneCall</a></td>
<td>拨打电话</td>
</tr>
</tbody>
</table>
<h3 id="扫码">扫码</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.scanCode.html">wx.scanCode</a></td>
<td>调起客户端扫码界面进行扫码</td>
</tr>
</tbody>
</table>
<h3 id="振动">振动</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.vibrateLong.html">wx.vibrateLong</a></td>
<td>使手机发生较长时间的振动（400 ms)</td>
</tr>
<tr>
<td><a href="wx.vibrateShort.html">wx.vibrateShort</a></td>
<td>使手机发生较短时间的振动（15 ms）</td>
</tr>
</tbody>
</table>
<h3 id="性能">性能</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.onMemoryWarning.html">wx.onMemoryWarning</a></td>
<td>监听内存不足告警事件</td>
</tr>
</tbody>
</table>
<h3 id="低功耗蓝牙">低功耗蓝牙</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.writeBLECharacteristicValue.html">wx.writeBLECharacteristicValue</a></td>
<td>向低功耗蓝牙设备特征值中写入二进制数据</td>
</tr>
<tr>
<td><a href="wx.readBLECharacteristicValue.html">wx.readBLECharacteristicValue</a></td>
<td>读取低功耗蓝牙设备的特征值的二进制数据值</td>
</tr>
<tr>
<td><a href="wx.onBLEConnectionStateChange.html">wx.onBLEConnectionStateChange</a></td>
<td>监听低功耗蓝牙连接状态的改变事件</td>
</tr>
<tr>
<td><a href="wx.onBLECharacteristicValueChange.html">wx.onBLECharacteristicValueChange</a></td>
<td>监听低功耗蓝牙设备的特征值变化事件</td>
</tr>
<tr>
<td><a href="wx.notifyBLECharacteristicValueChange.html">wx.notifyBLECharacteristicValueChange</a></td>
<td>启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值</td>
</tr>
<tr>
<td><a href="wx.getBLEDeviceServices.html">wx.getBLEDeviceServices</a></td>
<td>获取蓝牙设备所有服务(service)</td>
</tr>
<tr>
<td><a href="wx.getBLEDeviceCharacteristics.html">wx.getBLEDeviceCharacteristics</a></td>
<td>获取蓝牙设备某个服务中所有特征值(characteristic)</td>
</tr>
<tr>
<td><a href="wx.createBLEConnection.html">wx.createBLEConnection</a></td>
<td>连接低功耗蓝牙设备</td>
</tr>
<tr>
<td><a href="wx.closeBLEConnection.html">wx.closeBLEConnection</a></td>
<td>断开与低功耗蓝牙设备的连接</td>
</tr>
</tbody>
</table>
<h3 id="蓝牙">蓝牙</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.stopBluetoothDevicesDiscovery.html">wx.stopBluetoothDevicesDiscovery</a></td>
<td>停止搜寻附近的蓝牙外围设备</td>
</tr>
<tr>
<td><a href="wx.startBluetoothDevicesDiscovery.html">wx.startBluetoothDevicesDiscovery</a></td>
<td>开始搜寻附近的蓝牙外围设备</td>
</tr>
<tr>
<td><a href="wx.openBluetoothAdapter.html">wx.openBluetoothAdapter</a></td>
<td>初始化蓝牙模块</td>
</tr>
<tr>
<td><a href="wx.onBluetoothDeviceFound.html">wx.onBluetoothDeviceFound</a></td>
<td>监听寻找到新设备的事件</td>
</tr>
<tr>
<td><a href="wx.onBluetoothAdapterStateChange.html">wx.onBluetoothAdapterStateChange</a></td>
<td>监听蓝牙适配器状态变化事件</td>
</tr>
<tr>
<td><a href="wx.getConnectedBluetoothDevices.html">wx.getConnectedBluetoothDevices</a></td>
<td>根据 uuid 获取处于已连接状态的设备</td>
</tr>
<tr>
<td><a href="wx.getBluetoothDevices.html">wx.getBluetoothDevices</a></td>
<td>获取在蓝牙模块生效期间所有已发现的蓝牙设备</td>
</tr>
<tr>
<td><a href="wx.getBluetoothAdapterState.html">wx.getBluetoothAdapterState</a></td>
<td>获取本机蓝牙适配器状态</td>
</tr>
<tr>
<td><a href="wx.closeBluetoothAdapter.html">wx.closeBluetoothAdapter</a></td>
<td>关闭蓝牙模块</td>
</tr>
</tbody>
</table>
<h3 id="nfc">NFC</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.stopHCE.html">wx.stopHCE</a></td>
<td>关闭 NFC 模块</td>
</tr>
<tr>
<td><a href="wx.startHCE.html">wx.startHCE</a></td>
<td>初始化 NFC 模块</td>
</tr>
<tr>
<td><a href="wx.sendHCEMessage.html">wx.sendHCEMessage</a></td>
<td>发送 NFC 消息</td>
</tr>
<tr>
<td><a href="wx.onHCEMessage.html">wx.onHCEMessage</a></td>
<td>监听接收 NFC 设备消息事件</td>
</tr>
<tr>
<td><a href="wx.getHCEState.html">wx.getHCEState</a></td>
<td>判断当前设备是否支持 HCE 能力</td>
</tr>
</tbody>
</table>
<h3 id="屏幕">屏幕</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.setScreenBrightness.html">wx.setScreenBrightness</a></td>
<td>设置屏幕亮度</td>
</tr>
<tr>
<td><a href="wx.setKeepScreenOn.html">wx.setKeepScreenOn</a></td>
<td>设置是否保持常亮状态</td>
</tr>
<tr>
<td><a href="wx.onUserCaptureScreen.html">wx.onUserCaptureScreen</a></td>
<td>监听用户主动截屏事件</td>
</tr>
<tr>
<td><a href="wx.getScreenBrightness.html">wx.getScreenBrightness</a></td>
<td>获取屏幕亮度</td>
</tr>
</tbody>
</table>
<h2 id="worker">Worker</h2>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.createWorker.html">wx.createWorker</a></td>
<td>创建一个 <a href="../framework/workers.html">Worker 线程</a></td>
</tr>
</tbody>
</table>
<h3 id="worker-2">Worker</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="Worker.postMessage.html">Worker.postMessage</a></td>
<td>向主线程/Worker 线程发送的消息</td>
</tr>
<tr>
<td><a href="Worker.onMessage.html">Worker.onMessage</a></td>
<td>监听主线程/Worker 线程向当前线程发送的消息的事件</td>
</tr>
<tr>
<td><a href="Worker.terminate.html">Worker.terminate</a></td>
<td>结束当前 Worker 线程</td>
</tr>
</tbody>
</table>
<h2 id="第三方平台">第三方平台</h2>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.getExtConfigSync.html">wx.getExtConfigSync</a></td>
<td><a href="wx.getExtConfig.html">wx.getExtConfig</a> 的同步版本</td>
</tr>
<tr>
<td><a href="wx.getExtConfig.html">wx.getExtConfig</a></td>
<td>获取<a href="../devtools/ext.html">第三方平台</a>自定义的数据字段</td>
</tr>
</tbody>
</table>
<h2 id="wxml">WXML</h2>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="wx.createSelectorQuery.html">wx.createSelectorQuery</a></td>
<td>返回一个 SelectorQuery 对象实例</td>
</tr>
<tr>
<td><a href="wx.createIntersectionObserver.html">wx.createIntersectionObserver</a></td>
<td>创建并返回一个 IntersectionObserver 对象实例</td>
</tr>
</tbody>
</table>
<h3 id="intersectionobserver">IntersectionObserver</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="IntersectionObserver.relativeTo.html">IntersectionObserver.relativeTo</a></td>
<td>使用选择器指定一个节点，作为参照区域之一</td>
</tr>
<tr>
<td><a href="IntersectionObserver.relativeToViewport.html">IntersectionObserver.relativeToViewport</a></td>
<td>指定页面显示区域作为参照区域之一</td>
</tr>
<tr>
<td><a href="IntersectionObserver.observe.html">IntersectionObserver.observe</a></td>
<td>指定目标节点并开始监听相交状态变化情况</td>
</tr>
<tr>
<td><a href="IntersectionObserver.disconnect.html">IntersectionObserver.disconnect</a></td>
<td>停止监听</td>
</tr>
</tbody>
</table>
<h3 id="nodesref">NodesRef</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="NodesRef.fields.html">NodesRef.fields</a></td>
<td>获取节点的相关信息</td>
</tr>
<tr>
<td><a href="NodesRef.boundingClientRect.html">NodesRef.boundingClientRect</a></td>
<td>添加节点的布局位置的查询请求</td>
</tr>
<tr>
<td><a href="NodesRef.scrollOffset.html">NodesRef.scrollOffset</a></td>
<td>添加节点的滚动位置查询请求</td>
</tr>
<tr>
<td><a href="NodesRef.context.html">NodesRef.context</a></td>
<td>添加节点的 Context 对象查询请求</td>
</tr>
</tbody>
</table>
<h3 id="selectorquery">SelectorQuery</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="SelectorQuery.in.html">SelectorQuery.in</a></td>
<td>将选择器的选取范围更改为自定义组件 <code>component</code> 内</td>
</tr>
<tr>
<td><a href="SelectorQuery.select.html">SelectorQuery.select</a></td>
<td>在当前页面下选择第一个匹配选择器 <code>selector</code> 的节点</td>
</tr>
<tr>
<td><a href="SelectorQuery.selectAll.html">SelectorQuery.selectAll</a></td>
<td>在当前页面下选择匹配选择器 selector 的所有节点</td>
</tr>
<tr>
<td><a href="SelectorQuery.selectViewport.html">SelectorQuery.selectViewport</a></td>
<td>选择显示区域</td>
</tr>
<tr>
<td><a href="SelectorQuery.exec.html">SelectorQuery.exec</a></td>
<td>执行所有的请求</td>
</tr>
</tbody>
</table>

                            </section>
                        </div>
                        <div class="search-results">
                            <div class="has-results">
                                <h1 class="search-results-title">
                                    <span class="search-results-count"></span> 个结果 "<span class="search-query"></span>"
                                </h1>
                                <ul class="search-results-list"></ul>
                            </div>
                            <div class="no-results">
                                <h1 class="search-results-title">
                                    没有找到相关内容 "<span class="search-query"></span>"
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="foot" id="footer">
                <ul class="links ft">
                    <li class="links_item"><a href="https://www.tencent.com/" target="_blank">关于腾讯</a></li>
                    <li class="links_item"><a href="https://developers.weixin.qq.com/miniprogram/introduction/index.html" target="_blank">文档中心</a></li>
                    <li class="links_item"><a href="https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo" target="_blank">辟谣中心</a></li>
                    <li class="links_item"><a href="https://kf.qq.com/product/wx_xcx.html" target="_blank">客服中心</a></li>
                    <li class="links_item"><a href="mailto:weixinmp@qq.com" target="_blank">联系邮箱</a></li>
                    <li class="links_item">
                        <p class="copyright">Copyright &copy; 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.</p>
                    </li>
                </ul>
            </div>
        </div>

        <a href="../component/" class="navigation navigation-prev " aria-label="上一页: 组件">
            <i class="fa fa-angle-left"></i>
        </a>
        <a href="../devtools/devtools.html" class="navigation navigation-next " aria-label="下一页: 工具">
            <i class="fa fa-angle-right"></i>
        </a>

    </div>
    
    <script>
        var dom = document.getElementById('js_selected_dev')
        if (dom) dom.classList.add('selected')
    </script>
    
</div>

        <script src="https://developers.weixin.qq.com/miniprogram/assets/js/gitbook.js?t=18122715"></script>
        <script src="https://developers.weixin.qq.com/miniprogram/assets/js/theme.js?t=18122715"></script>
        <script src="https://developers.weixin.qq.com/miniprogram/assets/js/search.js?t=18122715"></script>
        <script>
            window.__wxDocContext = {"dir":"miniprogram/cn/dev","type":"dev","name":"开发文档","iconClass":"icon_dev","lang":"cn","description":"微信小程序文档","title":"小程序","longTitle":"微信小程序","isApp":true,"isGame":false,"prefix":"","urlPrefix":"https://developers.weixin.qq.com/miniprogram","_key":"app-cn-dev"}
            var gitbook = gitbook || [];
            gitbook.push(function() {
                gitbook.page.hasChanged();
            });
        </script>
    </body>
</html>

`

let dom = require('cheerio').load(html);

console.log('loaded')