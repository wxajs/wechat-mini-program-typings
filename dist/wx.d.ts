
  declare interface wx {
    
      /**
* 
*  boolean wx.canIUse(string schema)
*  
* 基础库 1.1.1 开始支持，低版本需做兼容处理。
* 
*  判断小程序的API，回调，参数，组件等是否在当前版本可用。
*  
*/
      canIUse: ( schema: string )=>boolean;
    
      /**
* 
*  Object wx.getSystemInfoSync()
*  
*  wx.getSystemInfo 的同步版本
*  
*/
      getSystemInfoSync: ()=>reswxReturns;
    
      /**
* 
*  wx.getSystemInfo(Object object)
*  
*  获取系统信息
*  
*/
      getSystemInfo: ( object: wxGetSystemInfoObjectField )=>never;
    
      /**
* 
*  UpdateManager wx.getUpdateManager()
*  
* 基础库 1.9.90 开始支持，低版本需做兼容处理。
* 
*  获取全局唯一的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看运行机制文档。
*  
*/
      getUpdateManager: ()=>UpdateManager;
    
      /**
* 
*  Object wx.getLaunchOptionsSync()
*  
* 基础库 2.1.2 开始支持，低版本需做兼容处理。
* 
*  获取小程序启动时的参数。与 App.onLaunch 的回调参数一致。
*  
*/
      getLaunchOptionsSync: ()=>object;
    
      /**
* 
*  wx.offPageNotFound(function callback)
*  
* 基础库 2.1.2 开始支持，低版本需做兼容处理。
* 
*  取消监听小程序要打开的页面不存在事件
*  
*/
      offPageNotFound: ( callback: ()=>never )=>never;
    
      /**
* 
*  wx.onPageNotFound(function callback)
*  
* 基础库 2.1.2 开始支持，低版本需做兼容处理。
* 
*  监听小程序要打开的页面不存在事件。该事件与 App.onPageNotFound 的回调时机一致。
*  
*/
      onPageNotFound: ( callback: ()=>never )=>never;
    
      /**
* 
*  wx.offError(function callback)
*  
* 基础库 2.1.2 开始支持，低版本需做兼容处理。
* 
*  取消监听小程序错误事件。
*  
*/
      offError: ( callback: ()=>never )=>never;
    
      /**
* 
*  wx.onError(function callback)
*  
* 基础库 2.1.2 开始支持，低版本需做兼容处理。
* 
*  监听小程序错误事件。如脚本错误或 API 调用报错等。该事件与 App.onError 的回调时机与参数一致。
*  
*/
      onError: ( callback: ( error: string )=>never )=>never;
    
      /**
* 
*  wx.offAppShow(function callback)
*  
* 基础库 2.1.2 开始支持，低版本需做兼容处理。
* 
*  取消监听小程序切前台事件
*  
*/
      offAppShow: ( callback: ()=>never )=>never;
    
      /**
* 
*  wx.onAppShow(function callback)
*  
* 基础库 2.1.2 开始支持，低版本需做兼容处理。
* 
*  监听小程序切前台事件。该事件与 App.onShow 的回调参数一致。
*  
*/
      onAppShow: ( callback: ( res: wxOnAppShowCallbackResField )=>never )=>never;
    
      /**
* 
*  wx.offAppHide(function callback)
*  
* 基础库 2.1.2 开始支持，低版本需做兼容处理。
* 
*  取消监听小程序切后台事件
*  
*/
      offAppHide: ( callback: ()=>never )=>never;
    
      /**
* 
*  wx.onAppHide(function callback)
*  
* 基础库 2.1.2 开始支持，低版本需做兼容处理。
* 
*  监听小程序切后台事件。该事件与 App.onHide 的回调时机一致。
*  
*/
      onAppHide: ( callback: ()=>never )=>never;
    
      /**
* 
*  wx.setEnableDebug(Object object)
*  
* 基础库 1.4.0 开始支持，低版本需做兼容处理。
* 
*  设置是否打开调试开关。此开关对正式版也能生效。
*  
*/
      setEnableDebug: ( object: wxSetEnableDebugObjectField )=>never;
    
      /**
* 
*  LogManager wx.getLogManager(Object object)
*  
* 基础库 2.1.0 开始支持，低版本需做兼容处理。
* 
*  获取日志管理器对象。
*  
*/
      getLogManager: ( object: wxGetLogManagerObjectField )=>LogManager;
    
      /**
* 
*  wx.navigateBack(Object object)
*  
*  关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
*  
*/
      navigateBack: ( object: wxNavigateBackObjectField )=>never;
    
      /**
* 
*  wx.switchTab(Object object)
*  
*  跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
*  
*/
      switchTab: ( object: wxSwitchTabObjectField )=>never;
    
      /**
* 
*  wx.navigateTo(Object object)
*  
*  保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。
*  
*/
      navigateTo: ( object: wxNavigateToObjectField )=>never;
    
      /**
* 
*  wx.reLaunch(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  关闭所有页面，打开到应用内的某个页面
*  
*/
      reLaunch: ( object: wxReLaunchObjectField )=>never;
    
      /**
* 
*  wx.redirectTo(Object object)
*  
*  关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
*  
*/
      redirectTo: ( object: wxRedirectToObjectField )=>never;
    
      /**
* 
*  wx.showActionSheet(Object object)
*  
*  显示操作菜单
*  
*/
      showActionSheet: ( object: wxShowActionSheetObjectField )=>never;
    
      /**
* 
*  wx.hideLoading(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  隐藏 loading 提示框
*  
*/
      hideLoading: ( object: wxHideLoadingObjectField )=>never;
    
      /**
* 
*  wx.showLoading(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
*  
*/
      showLoading: ( object: wxShowLoadingObjectField )=>never;
    
      /**
* 
*  wx.hideToast(Object object)
*  
*  隐藏消息提示框
*  
*/
      hideToast: ( object: wxHideToastObjectField )=>never;
    
      /**
* 
*  wx.showToast(Object object)
*  
*  显示消息提示框
*  
*/
      showToast: ( object: wxShowToastObjectField )=>never;
    
      /**
* 
*  wx.showModal(Object object)
*  
*  显示模态对话框
*  
*/
      showModal: ( object: wxShowModalObjectField )=>never;
    
      /**
* 
*  wx.setNavigationBarColor(Object object)
*  
* 基础库 1.4.0 开始支持，低版本需做兼容处理。
* 
*  设置页面导航条颜色
*  
*/
      setNavigationBarColor: ( object: wxSetNavigationBarColorObjectField )=>never;
    
      /**
* 
*  wx.hideNavigationBarLoading(Object object)
*  
*  在当前页面隐藏导航条加载动画
*  
*/
      hideNavigationBarLoading: ( object: wxHideNavigationBarLoadingObjectField )=>never;
    
      /**
* 
*  wx.showNavigationBarLoading(Object object)
*  
*  在当前页面显示导航条加载动画
*  
*/
      showNavigationBarLoading: ( object: wxShowNavigationBarLoadingObjectField )=>never;
    
      /**
* 
*  wx.setNavigationBarTitle(Object object)
*  
*  动态设置当前页面的标题
*  
*/
      setNavigationBarTitle: ( object: wxSetNavigationBarTitleObjectField )=>never;
    
      /**
* 
*  wx.setBackgroundTextStyle(Object object)
*  
* 基础库 2.1.0 开始支持，低版本需做兼容处理。
* 
*  动态设置下拉背景字体、loading 图的样式
*  
*/
      setBackgroundTextStyle: ( object: wxSetBackgroundTextStyleObjectField )=>never;
    
      /**
* 
*  wx.setBackgroundColor(Object object)
*  
* 基础库 2.1.0 开始支持，低版本需做兼容处理。
* 
*  动态设置窗口的背景色
*  
*/
      setBackgroundColor: ( object: wxSetBackgroundColorObjectField )=>never;
    
      /**
* 
*  wx.setTabBarItem(Object object)
*  
* 基础库 1.9.0 开始支持，低版本需做兼容处理。
* 
*  动态设置 tabBar 某一项的内容
*  
*/
      setTabBarItem: ( object: wxSetTabBarItemObjectField )=>never;
    
      /**
* 
*  wx.setTabBarStyle(Object object)
*  
* 基础库 1.9.0 开始支持，低版本需做兼容处理。
* 
*  动态设置 tabBar 的整体样式
*  
*/
      setTabBarStyle: ( object: wxSetTabBarStyleObjectField )=>never;
    
      /**
* 
*  wx.hideTabBar(Object object)
*  
* 基础库 1.9.0 开始支持，低版本需做兼容处理。
* 
*  隐藏 tabBar
*  
*/
      hideTabBar: ( object: wxHideTabBarObjectField )=>never;
    
      /**
* 
*  wx.showTabBar(Object object)
*  
* 基础库 1.9.0 开始支持，低版本需做兼容处理。
* 
*  显示 tabBar
*  
*/
      showTabBar: ( object: wxShowTabBarObjectField )=>never;
    
      /**
* 
*  wx.hideTabBarRedDot(Object object)
*  
* 基础库 1.9.0 开始支持，低版本需做兼容处理。
* 
*  隐藏 tabBar 某一项的右上角的红点
*  
*/
      hideTabBarRedDot: ( object: wxHideTabBarRedDotObjectField )=>never;
    
      /**
* 
*  wx.showTabBarRedDot(Object object)
*  
* 基础库 1.9.0 开始支持，低版本需做兼容处理。
* 
*  显示 tabBar 某一项的右上角的红点
*  
*/
      showTabBarRedDot: ( object: wxShowTabBarRedDotObjectField )=>never;
    
      /**
* 
*  wx.removeTabBarBadge(Object object)
*  
* 基础库 1.9.0 开始支持，低版本需做兼容处理。
* 
*  移除 tabBar 某一项右上角的文本
*  
*/
      removeTabBarBadge: ( object: wxRemoveTabBarBadgeObjectField )=>never;
    
      /**
* 
*  wx.setTabBarBadge(Object object)
*  
* 基础库 1.9.0 开始支持，低版本需做兼容处理。
* 
*  为 tabBar 某一项的右上角添加文本
*  
*/
      setTabBarBadge: ( object: wxSetTabBarBadgeObjectField )=>never;
    
      /**
* 
*  wx.loadFontFace(Object object)
*  
* 基础库 2.1.0 开始支持，低版本需做兼容处理。
* 
*  动态加载网络字体。文件地址需为下载类型。iOS 仅支持 https 格式文件地址。
*  
*/
      loadFontFace: ( object: wxLoadFontFaceObjectField )=>never;
    
      /**
* 
*  wx.stopPullDownRefresh(Object object)
*  
* 基础库 1.5.0 开始支持，低版本需做兼容处理。
* 
*  停止当前页面下拉刷新。
*  
*/
      stopPullDownRefresh: ( object: wxStopPullDownRefreshObjectField )=>never;
    
      /**
* 
*  wx.startPullDownRefresh(Object object)
*  
* 基础库 1.5.0 开始支持，低版本需做兼容处理。
* 
*  开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
*  
*/
      startPullDownRefresh: ( object: wxStartPullDownRefreshObjectField )=>never;
    
      /**
* 
*  wx.pageScrollTo(Object object)
*  
* 基础库 1.4.0 开始支持，低版本需做兼容处理。
* 
*  将页面滚动到目标位置
*  
*/
      pageScrollTo: ( object: wxPageScrollToObjectField )=>never;
    
      /**
* 
*  Animation wx.createAnimation(Object object)
*  
*  创建一个动画实例 animation。调用实例的方法来描述动画。最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性。
*  
*/
      createAnimation: ( object: wxCreateAnimationObjectField )=>Animation;
    
      /**
* 
*  wx.setTopBarText(Object object)
*  
* 基础库 1.4.3 开始支持，低版本需做兼容处理。
* 
*  动态设置置顶栏文字内容。只有当前小程序被置顶时能生效，如果当前小程序没有被置顶，也能调用成功，但是不会立即生效，只有在用户将这个小程序置顶后才换上设置的文字内容.
*  
*/
      setTopBarText: ( object: wxSetTopBarTextObjectField )=>never;
    
      /**
* 
*  wx.nextTick(function callback)
*  
* 基础库 2.2.3 开始支持，低版本需做兼容处理。
* 
*  延迟一部分操作到下一个时间片再执行。（类似于 setTimeout）
*  
*/
      nextTick: ( callback: ()=>never )=>never;
    
      /**
* 
*  Object wx.getMenuButtonBoundingClientRect()
*  
* 基础库 2.1.0 开始支持，低版本需做兼容处理。
* 
*  获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
*  
*/
      getMenuButtonBoundingClientRect: ()=>object;
    
      /**
* 
*  wx.offWindowResize(function callback)
*  
* 基础库 2.3.0 开始支持，低版本需做兼容处理。
* 
*  取消监听窗口尺寸变化事件
*  
*/
      offWindowResize: ( callback: ()=>never )=>never;
    
      /**
* 
*  wx.onWindowResize(function callback)
*  
* 基础库 2.3.0 开始支持，低版本需做兼容处理。
* 
*  监听窗口尺寸变化事件
*  
*/
      onWindowResize: ( callback: ( res: wxOnWindowResizeCallbackResField )=>never )=>never;
    
      /**
* 
*  RequestTask wx.request(Object object)
*  
*  发起 HTTPS 网络请求。使用前请注意阅读相关说明。
*  
*/
      request: ( object: wxRequestObjectField )=>RequestTask;
    
      /**
* 
*  DownloadTask wx.downloadFile(Object object)
*  
*  下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径。使用前请注意阅读相关说明。
*  
*/
      downloadFile: ( object: wxDownloadFileObjectField )=>DownloadTask;
    
      /**
* 
*  UploadTask wx.uploadFile(Object object)
*  
*  将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data。使用前请注意阅读相关说明。
*  
*/
      uploadFile: ( object: wxUploadFileObjectField )=>UploadTask;
    
      /**
* 
*  wx.onSocketError(function callback)
*  
*  监听 WebSocket 错误事件
*  
*/
      onSocketError: ( callback: ()=>never )=>never;
    
      /**
* 
*  wx.onSocketMessage(function callback)
*  
*  监听 WebSocket 接受到服务器的消息事件
*  
*/
      onSocketMessage: ( callback: ( res: wxOnSocketMessageCallbackResField )=>never )=>never;
    
      /**
* 
*  wx.onSocketClose(function callback)
*  
*  监听 WebSocket 连接关闭事件
*  
*/
      onSocketClose: ( callback: ()=>never )=>never;
    
      /**
* 
*  wx.onSocketOpen(function callback)
*  
*  监听 WebSocket 连接打开事件
*  
*/
      onSocketOpen: ( callback: ( res: wxOnSocketOpenCallbackResField )=>never )=>never;
    
      /**
* 
*  wx.sendSocketMessage(Object object)
*  
*  通过 WebSocket 连接发送数据。需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。
*  
*/
      sendSocketMessage: ( object: wxSendSocketMessageObjectField )=>never;
    
      /**
* 
*  wx.closeSocket(Object object)
*  
*  关闭 WebSocket 连接
*  
*/
      closeSocket: ( object: wxCloseSocketObjectField )=>never;
    
      /**
* 
*  SocketTask wx.connectSocket(Object object)
*  
*  创建一个 WebSocket 连接。使用前请注意阅读相关说明。
*  
*/
      connectSocket: ( object: wxConnectSocketObjectField )=>SocketTask;
    
      /**
* 
*  wx.offLocalServiceResolveFail(function callback)
*  
* 基础库 2.4.0 开始支持，低版本需做兼容处理。
* 
*  取消监听 mDNS 服务解析失败的事件
*  
*/
      offLocalServiceResolveFail: ( callback: ()=>never )=>never;
    
      /**
* 
*  wx.onLocalServiceResolveFail(function callback)
*  
* 基础库 2.4.0 开始支持，低版本需做兼容处理。
* 
*  监听 mDNS 服务解析失败的事件
*  
*/
      onLocalServiceResolveFail: ( callback: ( res: wxOnLocalServiceResolveFailCallbackResField )=>never )=>never;
    
      /**
* 
*  wx.offLocalServiceDiscoveryStop(function callback)
*  
* 基础库 2.4.0 开始支持，低版本需做兼容处理。
* 
*  取消监听 mDNS 服务停止搜索的事件
*  
*/
      offLocalServiceDiscoveryStop: ( callback: ()=>never )=>never;
    
      /**
* 
*  wx.onLocalServiceDiscoveryStop(function callback)
*  
* 基础库 2.4.0 开始支持，低版本需做兼容处理。
* 
*  监听 mDNS 服务停止搜索的事件
*  
*/
      onLocalServiceDiscoveryStop: ( callback: ()=>never )=>never;
    
      /**
* 
*  wx.offLocalServiceLost(function callback)
*  
* 基础库 2.4.0 开始支持，低版本需做兼容处理。
* 
*  取消监听 mDNS 服务离开的事件
*  
*/
      offLocalServiceLost: ( callback: ()=>never )=>never;
    
      /**
* 
*  wx.onLocalServiceLost(function callback)
*  
* 基础库 2.4.0 开始支持，低版本需做兼容处理。
* 
*  监听 mDNS 服务离开的事件
*  
*/
      onLocalServiceLost: ( callback: ( res: wxOnLocalServiceLostCallbackResField )=>never )=>never;
    
      /**
* 
*  wx.offLocalServiceFound(function callback)
*  
* 基础库 2.4.0 开始支持，低版本需做兼容处理。
* 
*  取消监听 mDNS 服务发现的事件
*  
*/
      offLocalServiceFound: ( callback: ()=>never )=>never;
    
      /**
* 
*  wx.onLocalServiceFound(function callback)
*  
* 基础库 2.4.0 开始支持，低版本需做兼容处理。
* 
*  监听 mDNS 服务发现的事件
*  
*/
      onLocalServiceFound: ( callback: ( res: wxOnLocalServiceFoundCallbackResField )=>never )=>never;
    
      /**
* 
*  wx.stopLocalServiceDiscovery(Object object)
*  
* 基础库 2.4.0 开始支持，低版本需做兼容处理。
* 
*  停止搜索 mDNS 服务
*  
*/
      stopLocalServiceDiscovery: ( object: wxStopLocalServiceDiscoveryObjectField )=>never;
    
      /**
* 
*  wx.startLocalServiceDiscovery(Object object)
*  
* 基础库 2.4.0 开始支持，低版本需做兼容处理。
* 
*  开始搜索局域网下的 mDNS 服务。搜索的结果会通过 wx.onLocalService* 事件返回。
*  
*/
      startLocalServiceDiscovery: ( object: wxStartLocalServiceDiscoveryObjectField )=>never;
    
      /**
* 
*  Object wx.getStorageInfoSync()
*  
*  wx.getStorageInfo 的同步版本
*  
*/
      getStorageInfoSync: ()=>objectwxReturns;
    
      /**
* 
*  wx.getStorageInfo(Object object)
*  
*  异步获取当前storage的相关信息
*  
*/
      getStorageInfo: ( object: wxGetStorageInfoObjectField )=>never;
    
      /**
* 
*  wx.clearStorageSync()
*  
*  wx.clearStorage 的同步版本
*  
*/
      clearStorageSync: ()=>never;
    
      /**
* 
*  wx.clearStorage(Object object)
*  
*  清理本地数据缓存
*  
*/
      clearStorage: ( object: wxClearStorageObjectField )=>never;
    
      /**
* 
*  wx.removeStorageSync(string key)
*  
*  wx.removeStorage 的同步版本
*  
*/
      removeStorageSync: ( key: string )=>never;
    
      /**
* 
*  wx.removeStorage(Object object)
*  
*  从本地缓存中移除指定 key
*  
*/
      removeStorage: ( object: wxRemoveStorageObjectField )=>never;
    
      /**
* 
*  wx.setStorageSync(string key, any data)
*  
*  wx.setStorage 的同步版本
*  
*/
      setStorageSync: ( key: string , data: any )=>never;
    
      /**
* 
*  wx.setStorage(Object object)
*  
*  将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。数据存储生命周期跟小程序本身一致，即除用户主动删除或超过一定时间被自动清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
*  
*/
      setStorage: ( object: wxSetStorageObjectField )=>never;
    
      /**
* 
*  any wx.getStorageSync(string key)
*  
*  wx.getStorage 的同步版本
*  
*/
      getStorageSync: ( key: string )=>any;
    
      /**
* 
*  wx.getStorage(Object object)
*  
*  从本地缓存中异步获取指定 key 的内容
*  
*/
      getStorage: ( object: wxGetStorageObjectField )=>never;
    
      /**
* 
*  MapContext wx.createMapContext(string mapId, Object this)
*  
*  创建 map 上下文 MapContext 对象。
*  
*/
      createMapContext: ( mapId: string , this: object )=>MapContext;
    
      /**
* 
*  wx.compressImage(Object object)
*  
* 基础库 2.4.0 开始支持，低版本需做兼容处理。
* 
*  压缩图片接口，可选压缩质量
*  
*/
      compressImage: ( object: wxCompressImageObjectField )=>never;
    
      /**
* 
*  wx.saveImageToPhotosAlbum(Object object)
*  
* 基础库 1.2.0 开始支持，低版本需做兼容处理。
* 
*  保存图片到系统相册。
*  
*/
      saveImageToPhotosAlbum: ( object: wxSaveImageToPhotosAlbumObjectField )=>never;
    
      /**
* 
*  wx.getImageInfo(Object object)
*  
*  获取图片信息。网络图片需先配置download域名才能生效。
*  
*/
      getImageInfo: ( object: wxGetImageInfoObjectField )=>never;
    
      /**
* 
*  wx.previewImage(Object object)
*  
*  在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。
*  
*/
      previewImage: ( object: wxPreviewImageObjectField )=>never;
    
      /**
* 
*  wx.chooseImage(Object object)
*  
*  从本地相册选择图片或使用相机拍照。
*  
*/
      chooseImage: ( object: wxChooseImageObjectField )=>never;
    
      /**
* 
*  wx.saveVideoToPhotosAlbum(Object object)
*  
* 基础库 1.2.0 开始支持，低版本需做兼容处理。
* 
*  保存视频到系统相册
*  
*/
      saveVideoToPhotosAlbum: ( object: wxSaveVideoToPhotosAlbumObjectField )=>never;
    
      /**
* 
*  wx.chooseVideo(Object object)
*  
*  拍摄视频或从手机相册中选视频。
*  
*/
      chooseVideo: ( object: wxChooseVideoObjectField )=>never;
    
      /**
* 
*  VideoContext wx.createVideoContext(string id, Object this)
*  
*  创建 video 上下文 VideoContext 对象。
*  
*/
      createVideoContext: ( id: string , this: object )=>VideoContext;
    
      /**
* 
*  wx.stopVoice(Object object)
*  
* 从基础库 1.6.0 开始，本接口停止维护，请使用 wx.createInnerAudioContext 代替
* 
*  结束播放语音。
*  
*/
      stopVoice: ( object: wxStopVoiceObjectField )=>never;
    
      /**
* 
*  wx.pauseVoice(Object object)
*  
* 从基础库 1.6.0 开始，本接口停止维护，请使用 wx.createInnerAudioContext 代替
* 
*  暂停正在播放的语音。再次调用 wx.playVoice 播放同一个文件时，会从暂停处开始播放。如果想从头开始播放，需要先调用 wx.stopVoice。
*  
*/
      pauseVoice: ( object: wxPauseVoiceObjectField )=>never;
    
      /**
* 
*  wx.playVoice(Object object)
*  
* 从基础库 1.6.0 开始，本接口停止维护，请使用 wx.createInnerAudioContext 代替
* 
*  开始播放语音。同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放。
*  
*/
      playVoice: ( object: wxPlayVoiceObjectField )=>never;
    
      /**
* 
*  wx.setInnerAudioOption(Object object)
*  
* 基础库 2.3.0 开始支持，低版本需做兼容处理。
* 
*  设置 InnerAudioContext 的播放选项。设置之后对当前小程序全局生效。
*  
*/
      setInnerAudioOption: ( object: wxSetInnerAudioOptionObjectField )=>never;
    
      /**
* 
*  wx.getAvailableAudioSources(Object object)
*  
* 基础库 2.1.0 开始支持，低版本需做兼容处理。
* 
*  获取当前支持的音频输入源
*  
*/
      getAvailableAudioSources: ( object: wxGetAvailableAudioSourcesObjectField )=>never;
    
      /**
* 
*  InnerAudioContext wx.createInnerAudioContext()
*  
* 基础库 1.6.0 开始支持，低版本需做兼容处理。
* 
*  创建内部 audio 上下文 InnerAudioContext 对象。
*  
*/
      createInnerAudioContext: ()=>InnerAudioContext;
    
      /**
* 
*  AudioContext wx.createAudioContext(string id, Object this)
*  
* 从基础库 1.6.0 开始，本接口停止维护，请使用 wx.createInnerAudioContext 代替
* 
*  创建 audio 上下文 AudioContext 对象。
*  
*/
      createAudioContext: ( id: string , this: object )=>AudioContext;
    
      /**
* 
*  wx.onBackgroundAudioStop(function callback)
*  
* 从基础库 1.2.0 开始，本接口停止维护，请使用 wx.getBackgroundAudioManager 代替
* 
*  监听音乐停止事件。
*  
*/
      onBackgroundAudioStop: ( callback: ()=>never )=>never;
    
      /**
* 
*  wx.onBackgroundAudioPause(function callback)
*  
* 从基础库 1.2.0 开始，本接口停止维护，请使用 wx.getBackgroundAudioManager 代替
* 
*  监听音乐暂停事件。
*  
*/
      onBackgroundAudioPause: ( callback: ()=>never )=>never;
    
      /**
* 
*  wx.onBackgroundAudioPlay(function callback)
*  
* 从基础库 1.2.0 开始，本接口停止维护，请使用 wx.getBackgroundAudioManager 代替
* 
*  监听音乐播放事件。
*  
*/
      onBackgroundAudioPlay: ( callback: ()=>never )=>never;
    
      /**
* 
*  wx.stopBackgroundAudio(Object object)
*  
* 从基础库 1.2.0 开始，本接口停止维护，请使用 wx.getBackgroundAudioManager 代替
* 
*  停止播放音乐。
*  
*/
      stopBackgroundAudio: ( object: wxStopBackgroundAudioObjectField )=>never;
    
      /**
* 
*  wx.seekBackgroundAudio(Object object)
*  
* 从基础库 1.2.0 开始，本接口停止维护，请使用 wx.getBackgroundAudioManager 代替
* 
*  控制音乐播放进度。
*  
*/
      seekBackgroundAudio: ( object: wxSeekBackgroundAudioObjectField )=>never;
    
      /**
* 
*  wx.pauseBackgroundAudio(Object object)
*  
* 从基础库 1.2.0 开始，本接口停止维护，请使用 wx.getBackgroundAudioManager 代替
* 
*  暂停播放音乐。
*  
*/
      pauseBackgroundAudio: ( object: wxPauseBackgroundAudioObjectField )=>never;
    
      /**
* 
*  wx.playBackgroundAudio(Object object)
*  
* 从基础库 1.2.0 开始，本接口停止维护，请使用 wx.getBackgroundAudioManager 代替
* 
*  使用后台播放器播放音乐。对于微信客户端来说，只能同时有一个后台音乐在播放。当用户离开小程序后，音乐将暂停播放；当用户在其他小程序占用了音乐播放器，原有小程序内的音乐将停止播放。
*  
*/
      playBackgroundAudio: ( object: wxPlayBackgroundAudioObjectField )=>never;
    
      /**
* 
*  wx.getBackgroundAudioPlayerState(Object object)
*  
* 从基础库 1.2.0 开始，本接口停止维护，请使用 wx.getBackgroundAudioManager 代替
* 
*  获取后台音乐播放状态。
*  
*/
      getBackgroundAudioPlayerState: ( object: wxGetBackgroundAudioPlayerStateObjectField )=>never;
    
      /**
* 
*  BackgroundAudioManager wx.getBackgroundAudioManager()
*  
* 基础库 1.2.0 开始支持，低版本需做兼容处理。
* 
*  获取全局唯一的背景音频管理器。
* 小程序切入后台，如果音频处于播放状态，可以继续播放。但是后台状态不能通过调用API操纵音频的播放状态。
*  
*/
      getBackgroundAudioManager: ()=>BackgroundAudioManager;
    
      /**
* 
*  LivePusherContext wx.createLivePusherContext()
*  
* 基础库 1.7.0 开始支持，低版本需做兼容处理。
* 
*  创建 live-pusher 上下文 LivePusherContext 对象。
*  
*/
      createLivePusherContext: ()=>LivePusherContext;
    
      /**
* 
*  LivePlayerContext wx.createLivePlayerContext(string id, Object this)
*  
* 基础库 1.7.0 开始支持，低版本需做兼容处理。
* 
*  创建 live-player 上下文 LivePlayerContext 对象。
*  
*/
      createLivePlayerContext: ( id: string , this: object )=>LivePlayerContext;
    
      /**
* 
*  wx.stopRecord()
*  
* 从基础库 1.6.0 开始，本接口停止维护，请使用 wx.getRecorderManager 代替
* 
*  停止录音。
*  
*/
      stopRecord: ()=>never;
    
      /**
* 
*  wx.startRecord(Object object)
*  
* 调用前需要 用户授权 scope.record
* 
*  开始录音。当主动调用 wx.stopRecord，或者录音超过1分钟时自动结束录音。当用户离开小程序时，此接口无法调用。
*  
*/
      startRecord: ( object: wxStartRecordObjectField )=>never;
    
      /**
* 
*  RecorderManager wx.getRecorderManager()
*  
* 基础库 1.6.0 开始支持，低版本需做兼容处理。
* 
*  获取全局唯一的录音管理器 RecorderManager
*  
*/
      getRecorderManager: ()=>RecorderManager;
    
      /**
* 
*  CameraContext wx.createCameraContext()
*  
* 基础库 1.6.0 开始支持，低版本需做兼容处理。
* 
*  创建 camera 上下文 CameraContext 对象。
*  
*/
      createCameraContext: ()=>CameraContext;
    
      /**
* 
*  wx.openLocation(Object object)
*  
*  使用微信内置地图查看位置
*  
*/
      openLocation: ( object: wxOpenLocationObjectField )=>never;
    
      /**
* 
*  wx.getLocation(Object object)
*  
* 调用前需要 用户授权 scope.userLocation
* 
*  获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。
*  
*/
      getLocation: ( object: wxGetLocationObjectField )=>never;
    
      /**
* 
*  wx.chooseLocation(Object object)
*  
* 调用前需要 用户授权 scope.userLocation
* 
*  打开地图选择位置。
*  
*/
      chooseLocation: ( object: wxChooseLocationObjectField )=>never;
    
      /**
* 
*  wx.updateShareMenu(Object object)
*  
* 基础库 1.2.0 开始支持，低版本需做兼容处理。
* 
*  更新转发属性
*  
*/
      updateShareMenu: ( object: wxUpdateShareMenuObjectField )=>never;
    
      /**
* 
*  wx.showShareMenu(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  显示当前页面的转发按钮
*  
*/
      showShareMenu: ( object: wxShowShareMenuObjectField )=>never;
    
      /**
* 
*  wx.hideShareMenu(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  隐藏转发按钮
*  
*/
      hideShareMenu: ( object: wxHideShareMenuObjectField )=>never;
    
      /**
* 
*  wx.getShareInfo(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  获取转发详细信息
*  
*/
      getShareInfo: ( object: wxGetShareInfoObjectField )=>never;
    
      /**
* 
*  CanvasContext wx.createCanvasContext(string canvasId, Object this)
*  
*  创建 canvas 的绘图上下文 CanvasContext 对象
*  
*/
      createCanvasContext: ( canvasId: string , this: object )=>CanvasContext;
    
      /**
* 
*  wx.canvasToTempFilePath(Object object, Object this)
*  
*  把当前画布指定区域的内容导出生成指定大小的图片。在 draw() 回调里调用该方法才能保证图片导出成功。
*  
*/
      canvasToTempFilePath: ( object: wxCanvasToTempFilePathObjectField , this: object )=>never;
    
      /**
* 
*  wx.canvasPutImageData(Object object, Object this)
*  
* 基础库 1.9.0 开始支持，低版本需做兼容处理。
* 
*  将像素数据绘制到画布。在自定义组件下，第二个参数传入自定义组件实例 this，以操作组件内 <canvas> 组件
*  
*/
      canvasPutImageData: ( object: wxCanvasPutImageDataObjectField , this: object )=>never;
    
      /**
* 
*  wx.canvasGetImageData(Object object, Object this)
*  
* 基础库 1.9.0 开始支持，低版本需做兼容处理。
* 
*  获取 canvas 区域隐含的像素数据。
*  
*/
      canvasGetImageData: ( object: wxCanvasGetImageDataObjectField , this: object )=>never;
    
      /**
* 
*  FileSystemManager wx.getFileSystemManager()
*  
* 基础库 1.9.9 开始支持，低版本需做兼容处理。
* 
*  获取全局唯一的文件管理器
*  
*/
      getFileSystemManager: ()=>FileSystemManager;
    
      /**
* 
*  wx.getFileInfo(Object object)
*  
* 基础库 1.4.0 开始支持，低版本需做兼容处理。
* 
*  获取文件信息
*  
*/
      getFileInfo: ( object: wxGetFileInfoObjectField )=>never;
    
      /**
* 
*  wx.removeSavedFile(Object object)
*  
*  删除本地缓存文件
*  
*/
      removeSavedFile: ( object: wxRemoveSavedFileObjectField )=>never;
    
      /**
* 
*  wx.getSavedFileInfo(Object object)
*  
*  获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 wx.getFileInfo() 接口。
*  
*/
      getSavedFileInfo: ( object: wxGetSavedFileInfoObjectField )=>never;
    
      /**
* 
*  wx.getSavedFileList(Object object)
*  
*  获取该小程序下已保存的本地缓存文件列表
*  
*/
      getSavedFileList: ( object: wxGetSavedFileListObjectField )=>never;
    
      /**
* 
*  wx.openDocument(Object object)
*  
*  新开页面打开文档
*  
*/
      openDocument: ( object: wxOpenDocumentObjectField )=>never;
    
      /**
* 
*  wx.saveFile(Object object)
*  
*  保存文件到本地。注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用
*  
*/
      saveFile: ( object: wxSaveFileObjectField )=>never;
    
      /**
* 
*  wx.checkSession(Object object)
*  
*  检查登录态是否过期。
*  
*/
      checkSession: ( object: wxCheckSessionObjectField )=>never;
    
      /**
* 
*  wx.login(Object object)
*  
*  调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户的唯一标识（openid）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。更多使用方法详见 小程序登录。
*  
*/
      login: ( object: wxLoginObjectField )=>never;
    
      /**
* 
*  wx.navigateToMiniProgram(Object object)
*  
*  小程序 1.3.0，小游戏 2.2.0
*  
*/
      navigateToMiniProgram: ( object: wxNavigateToMiniProgramObjectField )=>never;
    
      /**
* 
*  wx.navigateBackMiniProgram(Object object)
*  
* 基础库 1.3.0 开始支持，低版本需做兼容处理。
* 
*  返回到上一个小程序。只有在当前小程序是被其他小程序打开时可以调用成功
*  
*/
      navigateBackMiniProgram: ( object: wxNavigateBackMiniProgramObjectField )=>never;
    
      /**
* 
*  Object wx.getAccountInfoSync()
*  
* 基础库 2.2.2 开始支持，低版本需做兼容处理。
* 
*  获取当前帐号信息
*  
*/
      getAccountInfoSync: ()=>object;
    
      /**
* 
*  wx.getUserInfo(Object object)
*  
* 调用前需要 用户授权 scope.userInfo。
* 
*  获取用户信息。
*  
*/
      getUserInfo: ( object: wxGetUserInfoObjectField )=>never;
    
      /**
* 
*  wx.reportMonitor(string name, number value)
*  
* 基础库 2.0.1 开始支持，低版本需做兼容处理。
* 
*  自定义业务数据监控上报接口。
*  
*/
      reportMonitor: ( name: string , value: number )=>never;
    
      /**
* 
*  wx.reportAnalytics(string eventName, Object data)
*  
*  自定义分析数据上报接口。使用前，需要在小程序管理后台自定义分析中新建事件，配置好事件名与字段。
*  
*/
      reportAnalytics: ( eventName: string , data: wxReportAnalyticsDataField )=>never;
    
      /**
* 
*  wx.requestPayment(Object object)
*  
*  发起微信支付。了解更多信息，请查看微信支付接口文档
*  
*/
      requestPayment: ( object: wxRequestPaymentObjectField )=>never;
    
      /**
* 
*  wx.authorize(Object object)
*  
* 基础库 1.2.0 开始支持，低版本需做兼容处理。
* 
*  提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。更多用法详见 用户授权。
*  
*/
      authorize: ( object: wxAuthorizeObjectField )=>never;
    
      /**
* 
*  wx.openSetting(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  调起客户端小程序设置界面，返回用户设置的操作结果。设置界面只会出现小程序已经向用户请求过的权限。
*  
*/
      openSetting: ( object: wxOpenSettingObjectField )=>never;
    
      /**
* 
*  wx.getSetting(Object object)
*  
* 基础库 1.2.0 开始支持，低版本需做兼容处理。
* 
*  获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限。
*  
*/
      getSetting: ( object: wxGetSettingObjectField )=>never;
    
      /**
* 
*  wx.chooseAddress(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  获取用户收货地址。调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。
*  
*/
      chooseAddress: ( object: wxChooseAddressObjectField )=>never;
    
      /**
* 
*  wx.openCard(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  查看微信卡包中的卡券。只有通过 认证 的小程序才能使用。更多文档请参考 微信卡券接口文档。
*  
*/
      openCard: ( object: wxOpenCardObjectField )=>never;
    
      /**
* 
*  wx.addCard(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  批量添加卡券。只有通过 认证 的小程序才能使用。更多文档请参考 微信卡券接口文档。
*  
*/
      addCard: ( object: wxAddCardObjectField )=>never;
    
      /**
* 
*  wx.chooseInvoiceTitle(Object object)
*  
* 基础库 1.5.0 开始支持，低版本需做兼容处理。
* 
*  选择用户的发票抬头。当前小程序必须关联一个公众号，且这个公众号是完成了微信认证的，才能调用 chooseInvoiceTitle。
*  
*/
      chooseInvoiceTitle: ( object: wxChooseInvoiceTitleObjectField )=>never;
    
      /**
* 
*  wx.chooseInvoice(Object object)
*  
* 基础库 2.3.0 开始支持，低版本需做兼容处理。
* 
*  选择用户已有的发票。
*  
*/
      chooseInvoice: ( object: wxChooseInvoiceObjectField )=>never;
    
      /**
* 
*  wx.startSoterAuthentication(Object object)
*  
* 基础库 1.5.0 开始支持，低版本需做兼容处理。
* 
*  开始 SOTER 生物认证。验证流程请参考说明。
*  
*/
      startSoterAuthentication: ( object: wxStartSoterAuthenticationObjectField )=>never;
    
      /**
* 
*  wx.checkIsSupportSoterAuthentication(Object object)
*  
* 基础库 1.5.0 开始支持，低版本需做兼容处理。
* 
*  获取本机支持的 SOTER 生物认证方式
*  
*/
      checkIsSupportSoterAuthentication: ( object: wxCheckIsSupportSoterAuthenticationObjectField )=>never;
    
      /**
* 
*  wx.checkIsSoterEnrolledInDevice(Object object)
*  
* 基础库 1.6.0 开始支持，低版本需做兼容处理。
* 
*  获取设备内是否录入如指纹等生物信息的接口
*  
*/
      checkIsSoterEnrolledInDevice: ( object: wxCheckIsSoterEnrolledInDeviceObjectField )=>never;
    
      /**
* 
*  wx.getWeRunData(Object object)
*  
* 基础库 1.2.0 开始支持，低版本需做兼容处理。
* 
*  获取用户过去三十天微信运动步数。需要先调用 wx.login 接口。步数信息会在用户主动进入小程序时更新。
*  
*/
      getWeRunData: ( object: wxGetWeRunDataObjectField )=>never;
    
      /**
* 
*  wx.onBeaconServiceChange(function callback)
*  
* 基础库 1.2.0 开始支持，低版本需做兼容处理。
* 
*  监听 iBeacon 服务状态变化事件
*  
*/
      onBeaconServiceChange: ( callback: ( res: wxOnBeaconServiceChangeCallbackResField )=>never )=>never;
    
      /**
* 
*  wx.onBeaconUpdate(function callback)
*  
* 基础库 1.2.0 开始支持，低版本需做兼容处理。
* 
*  监听 iBeacon 设备更新事件
*  
*/
      onBeaconUpdate: ( callback: ( res: wxOnBeaconUpdateCallbackResField )=>never )=>never;
    
      /**
* 
*  wx.getBeacons(Object object)
*  
* 基础库 1.2.0 开始支持，低版本需做兼容处理。
* 
*  获取所有已搜索到的 iBeacon 设备
*  
*/
      getBeacons: ( object: wxGetBeaconsObjectField )=>never;
    
      /**
* 
*  wx.stopBeaconDiscovery(Object object)
*  
* 基础库 1.2.0 开始支持，低版本需做兼容处理。
* 
*  停止搜索附近的 iBeacon 设备
*  
*/
      stopBeaconDiscovery: ( object: wxStopBeaconDiscoveryObjectField )=>never;
    
      /**
* 
*  wx.startBeaconDiscovery(Object object)
*  
* 基础库 1.2.0 开始支持，低版本需做兼容处理。
* 
*  开始搜索附近的 iBeacon 设备
*  
*/
      startBeaconDiscovery: ( object: wxStartBeaconDiscoveryObjectField )=>never;
    
      /**
* 
*  wx.stopWifi(Object object)
*  
* 基础库 1.6.0 开始支持，低版本需做兼容处理。
* 
*  关闭 Wi-Fi 模块。
*  
*/
      stopWifi: ( object: wxStopWifiObjectField )=>never;
    
      /**
* 
*  wx.startWifi(Object object)
*  
* 基础库 1.6.0 开始支持，低版本需做兼容处理。
* 
*  初始化 Wi-Fi 模块。
*  
*/
      startWifi: ( object: wxStartWifiObjectField )=>never;
    
      /**
* 
*  wx.setWifiList(Object object)
*  
* 基础库 1.6.0 开始支持，低版本需做兼容处理。
* 
*  设置 wifiList 中 AP 的相关信息。在 onGetWifiList 回调后调用，iOS特有接口。
*  
*/
      setWifiList: ( object: wxSetWifiListObjectField )=>never;
    
      /**
* 
*  wx.onWifiConnected(function callback)
*  
* 基础库 1.6.0 开始支持，低版本需做兼容处理。
* 
*  监听连接上 Wi-Fi 的事件
*  
*/
      onWifiConnected: ( callback: ( res: wxOnWifiConnectedCallbackResField )=>never )=>never;
    
      /**
* 
*  wx.onGetWifiList(function callback)
*  
* 基础库 1.6.0 开始支持，低版本需做兼容处理。
* 
*  监听获取到 Wi-Fi 列表数据事件
*  
*/
      onGetWifiList: ( callback: ( res: wxOnGetWifiListCallbackResField )=>never )=>never;
    
      /**
* 
*  wx.getWifiList(Object object)
*  
* 基础库 1.6.0 开始支持，低版本需做兼容处理。
* 
*  请求获取 Wi-Fi 列表。在 onGetWifiList 注册的回调中返回 wifiList 数据。
*  
*/
      getWifiList: ( object: wxGetWifiListObjectField )=>never;
    
      /**
* 
*  wx.getConnectedWifi(Object object)
*  
* 基础库 1.6.0 开始支持，低版本需做兼容处理。
* 
*  获取已连接中的 Wi-Fi 信息。
*  
*/
      getConnectedWifi: ( object: wxGetConnectedWifiObjectField )=>never;
    
      /**
* 
*  wx.connectWifi(Object object)
*  
* 基础库 1.6.0 开始支持，低版本需做兼容处理。
* 
*  连接 Wi-Fi。若已知 Wi-Fi 信息，可以直接利用该接口连接。仅 Android 与 iOS 11 以上版本支持。
*  
*/
      connectWifi: ( object: wxConnectWifiObjectField )=>never;
    
      /**
* 
*  wx.onAccelerometerChange(function callback)
*  
*  监听加速度数据事件。频率根据 wx.startAccelerometer() 的 interval 参数。可使用 wx.stopAccelerometer() 停止监听。
*  
*/
      onAccelerometerChange: ( callback: ( res: wxOnAccelerometerChangeCallbackResField )=>never )=>never;
    
      /**
* 
*  wx.stopAccelerometer(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  停止监听加速度数据。
*  
*/
      stopAccelerometer: ( object: wxStopAccelerometerObjectField )=>never;
    
      /**
* 
*  wx.startAccelerometer(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  开始监听加速度数据。
*  
*/
      startAccelerometer: ( object: wxStartAccelerometerObjectField )=>never;
    
      /**
* 
*  Object wx.getBatteryInfoSync()
*  
*  wx.getBatteryInfo 的同步版本
*  
*/
      getBatteryInfoSync: ()=>reswxReturns;
    
      /**
* 
*  wx.getBatteryInfo(Object object)
*  
*  获取设备电量。同步 API wx.getBatteryInfoSync 在 iOS 上不可用。
*  
*/
      getBatteryInfo: ( object: wxGetBatteryInfoObjectField )=>never;
    
      /**
* 
*  wx.setClipboardData(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  设置系统剪贴板的内容
*  
*/
      setClipboardData: ( object: wxSetClipboardDataObjectField )=>never;
    
      /**
* 
*  wx.getClipboardData(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  获取系统剪贴板的内容
*  
*/
      getClipboardData: ( object: wxGetClipboardDataObjectField )=>never;
    
      /**
* 
*  wx.onCompassChange(function callback)
*  
*  监听罗盘数据变化事件。频率：5 次/秒，接口调用后会自动开始监听，可使用 wx.stopCompass 停止监听。
*  
*/
      onCompassChange: ( callback: ( res: wxOnCompassChangeCallbackResField )=>never )=>never;
    
      /**
* 
*  wx.stopCompass(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  停止监听罗盘数据
*  
*/
      stopCompass: ( object: wxStopCompassObjectField )=>never;
    
      /**
* 
*  wx.startCompass(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  开始监听罗盘数据
*  
*/
      startCompass: ( object: wxStartCompassObjectField )=>never;
    
      /**
* 
*  wx.addPhoneContact(Object object)
*  
* 基础库 1.2.0 开始支持，低版本需做兼容处理。
* 
*  添加手机通讯录联系人。用户可以选择将该表单以「新增联系人」或「添加到已有联系人」的方式，写入手机系统通讯录。
*  
*/
      addPhoneContact: ( object: wxAddPhoneContactObjectField )=>never;
    
      /**
* 
*  wx.onGyroscopeChange(function callback)
*  
* 基础库 2.3.0 开始支持，低版本需做兼容处理。
* 
*  监听陀螺仪数据变化事件。频率根据 wx.startGyroscope() 的 interval 参数。可以使用 wx.stopGyroscope() 停止监听。
*  
*/
      onGyroscopeChange: ( callback: ( res: wxOnGyroscopeChangeCallbackResField )=>never )=>never;
    
      /**
* 
*  wx.stopGyroscope(Object object)
*  
* 基础库 2.3.0 开始支持，低版本需做兼容处理。
* 
*  停止监听陀螺仪数据。
*  
*/
      stopGyroscope: ( object: wxStopGyroscopeObjectField )=>never;
    
      /**
* 
*  wx.startGyroscope(Object object)
*  
* 基础库 2.3.0 开始支持，低版本需做兼容处理。
* 
*  开始监听陀螺仪数据。
*  
*/
      startGyroscope: ( object: wxStartGyroscopeObjectField )=>never;
    
      /**
* 
*  wx.onDeviceMotionChange(function callback)
*  
* 基础库 2.3.0 开始支持，低版本需做兼容处理。
* 
*  监听设备方向变化事件。频率根据 wx.startDeviceMotionListening() 的 interval 参数。可以使用 wx.stopDeviceMotionListening() 停止监听。
*  
*/
      onDeviceMotionChange: ( callback: ( res: wxOnDeviceMotionChangeCallbackResField )=>never )=>never;
    
      /**
* 
*  wx.stopDeviceMotionListening(Object object)
*  
* 基础库 2.3.0 开始支持，低版本需做兼容处理。
* 
*  停止监听设备方向的变化。
*  
*/
      stopDeviceMotionListening: ( object: wxStopDeviceMotionListeningObjectField )=>never;
    
      /**
* 
*  wx.startDeviceMotionListening(Object object)
*  
* 基础库 2.3.0 开始支持，低版本需做兼容处理。
* 
*  开始监听设备方向的变化。
*  
*/
      startDeviceMotionListening: ( object: wxStartDeviceMotionListeningObjectField )=>never;
    
      /**
* 
*  wx.onNetworkStatusChange(function callback)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  监听网络状态变化事件
*  
*/
      onNetworkStatusChange: ( callback: ( res: wxOnNetworkStatusChangeCallbackResField )=>never )=>never;
    
      /**
* 
*  wx.getNetworkType(Object object)
*  
*  获取网络类型
*  
*/
      getNetworkType: ( object: wxGetNetworkTypeObjectField )=>never;
    
      /**
* 
*  wx.makePhoneCall(Object object)
*  
*  拨打电话
*  
*/
      makePhoneCall: ( object: wxMakePhoneCallObjectField )=>never;
    
      /**
* 
*  wx.scanCode(Object object)
*  
*  调起客户端扫码界面进行扫码
*  
*/
      scanCode: ( object: wxScanCodeObjectField )=>never;
    
      /**
* 
*  wx.vibrateLong(Object object)
*  
* 基础库 1.2.0 开始支持，低版本需做兼容处理。
* 
*  使手机发生较长时间的振动（400 ms)
*  
*/
      vibrateLong: ( object: wxVibrateLongObjectField )=>never;
    
      /**
* 
*  wx.vibrateShort(Object object)
*  
* 基础库 1.2.0 开始支持，低版本需做兼容处理。
* 
*  使手机发生较短时间的振动（15 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效
*  
*/
      vibrateShort: ( object: wxVibrateShortObjectField )=>never;
    
      /**
* 
*  wx.onMemoryWarning(function callback)
*  
* 基础库 2.0.2 开始支持，低版本需做兼容处理。
* 
*  监听内存不足告警事件。
*  
*/
      onMemoryWarning: ( callback: ( res: wxOnMemoryWarningCallbackResField )=>never )=>never;
    
      /**
* 
*  wx.writeBLECharacteristicValue(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持 write 才可以成功调用。
*  
*/
      writeBLECharacteristicValue: ( object: wxWriteBLECharacteristicValueObjectField )=>never;
    
      /**
* 
*  wx.readBLECharacteristicValue(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用。
*  
*/
      readBLECharacteristicValue: ( object: wxReadBLECharacteristicValueObjectField )=>never;
    
      /**
* 
*  wx.onBLEConnectionStateChange(function callback)
*  
* 基础库 1.1.1 开始支持，低版本需做兼容处理。
* 
*  监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等
*  
*/
      onBLEConnectionStateChange: ( callback: ( res: wxOnBLEConnectionStateChangeCallbackResField )=>never )=>never;
    
      /**
* 
*  wx.onBLECharacteristicValueChange(function callback)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  监听低功耗蓝牙设备的特征值变化事件。必须先启用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification。
*  
*/
      onBLECharacteristicValueChange: ( callback: ( res: wxOnBLECharacteristicValueChangeCallbackResField )=>never )=>never;
    
      /**
* 
*  wx.notifyBLECharacteristicValueChange(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值。注意：必须设备的特征值支持 notify 或者 indicate 才可以成功调用。
*  
*/
      notifyBLECharacteristicValueChange: ( object: wxNotifyBLECharacteristicValueChangeObjectField )=>never;
    
      /**
* 
*  wx.getBLEDeviceServices(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  获取蓝牙设备所有服务(service)。
*  
*/
      getBLEDeviceServices: ( object: wxGetBLEDeviceServicesObjectField )=>never;
    
      /**
* 
*  wx.getBLEDeviceCharacteristics(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  获取蓝牙设备某个服务中所有特征值(characteristic)。
*  
*/
      getBLEDeviceCharacteristics: ( object: wxGetBLEDeviceCharacteristicsObjectField )=>never;
    
      /**
* 
*  wx.createBLEConnection(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  连接低功耗蓝牙设备。
*  
*/
      createBLEConnection: ( object: wxCreateBLEConnectionObjectField )=>never;
    
      /**
* 
*  wx.closeBLEConnection(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  断开与低功耗蓝牙设备的连接。
*  
*/
      closeBLEConnection: ( object: wxCloseBLEConnectionObjectField )=>never;
    
      /**
* 
*  wx.stopBluetoothDevicesDiscovery(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索。
*  
*/
      stopBluetoothDevicesDiscovery: ( object: wxStopBluetoothDevicesDiscoveryObjectField )=>never;
    
      /**
* 
*  wx.startBluetoothDevicesDiscovery(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  开始搜寻附近的蓝牙外围设备。此操作比较耗费系统资源，请在搜索并连接到设备后调用 wx.stopBluetoothDevicesDiscovery 方法停止搜索。
*  
*/
      startBluetoothDevicesDiscovery: ( object: wxStartBluetoothDevicesDiscoveryObjectField )=>never;
    
      /**
* 
*  wx.openBluetoothAdapter(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  初始化蓝牙模块
*  
*/
      openBluetoothAdapter: ( object: wxOpenBluetoothAdapterObjectField )=>never;
    
      /**
* 
*  wx.onBluetoothDeviceFound(function callback)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  监听寻找到新设备的事件
*  
*/
      onBluetoothDeviceFound: ( callback: ( res: wxOnBluetoothDeviceFoundCallbackResField )=>never )=>never;
    
      /**
* 
*  wx.onBluetoothAdapterStateChange(function callback)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  监听蓝牙适配器状态变化事件
*  
*/
      onBluetoothAdapterStateChange: ( callback: ( res: wxOnBluetoothAdapterStateChangeCallbackResField )=>never )=>never;
    
      /**
* 
*  wx.getConnectedBluetoothDevices(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  根据 uuid 获取处于已连接状态的设备。
*  
*/
      getConnectedBluetoothDevices: ( object: wxGetConnectedBluetoothDevicesObjectField )=>never;
    
      /**
* 
*  wx.getBluetoothDevices(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。
*  
*/
      getBluetoothDevices: ( object: wxGetBluetoothDevicesObjectField )=>never;
    
      /**
* 
*  wx.getBluetoothAdapterState(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  获取本机蓝牙适配器状态。
*  
*/
      getBluetoothAdapterState: ( object: wxGetBluetoothAdapterStateObjectField )=>never;
    
      /**
* 
*  wx.closeBluetoothAdapter(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源。建议在使用蓝牙流程后，与 wx.openBluetoothAdapter 成对调用。
*  
*/
      closeBluetoothAdapter: ( object: wxCloseBluetoothAdapterObjectField )=>never;
    
      /**
* 
*  wx.stopHCE(Object object)
*  
* 基础库 1.7.0 开始支持，低版本需做兼容处理。
* 
*  关闭 NFC 模块。仅在安卓系统下有效。
*  
*/
      stopHCE: ( object: wxStopHCEObjectField )=>never;
    
      /**
* 
*  wx.startHCE(Object object)
*  
* 基础库 1.7.0 开始支持，低版本需做兼容处理。
* 
*  初始化 NFC 模块。
*  
*/
      startHCE: ( object: wxStartHCEObjectField )=>never;
    
      /**
* 
*  wx.sendHCEMessage(Object object)
*  
* 基础库 1.7.0 开始支持，低版本需做兼容处理。
* 
*  发送 NFC 消息。仅在安卓系统下有效。
*  
*/
      sendHCEMessage: ( object: wxSendHCEMessageObjectField )=>never;
    
      /**
* 
*  wx.onHCEMessage(function callback)
*  
* 基础库 1.7.0 开始支持，低版本需做兼容处理。
* 
*  监听接收 NFC 设备消息事件
*  
*/
      onHCEMessage: ( callback: ( res: wxOnHCEMessageCallbackResField )=>never )=>never;
    
      /**
* 
*  wx.getHCEState(Object object)
*  
* 基础库 1.7.0 开始支持，低版本需做兼容处理。
* 
*  判断当前设备是否支持 HCE 能力。
*  
*/
      getHCEState: ( object: wxGetHCEStateObjectField )=>never;
    
      /**
* 
*  wx.setScreenBrightness(Object object)
*  
* 基础库 1.2.0 开始支持，低版本需做兼容处理。
* 
*  设置屏幕亮度
*  
*/
      setScreenBrightness: ( object: wxSetScreenBrightnessObjectField )=>never;
    
      /**
* 
*  wx.setKeepScreenOn(Object object)
*  
* 基础库 1.4.0 开始支持，低版本需做兼容处理。
* 
*  设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。
*  
*/
      setKeepScreenOn: ( object: wxSetKeepScreenOnObjectField )=>never;
    
      /**
* 
*  wx.onUserCaptureScreen(function callback)
*  
* 基础库 1.4.0 开始支持，低版本需做兼容处理。
* 
*  监听用户主动截屏事件。用户使用系统截屏按键截屏时触发
*  
*/
      onUserCaptureScreen: ( callback: ()=>never )=>never;
    
      /**
* 
*  wx.getScreenBrightness(Object object)
*  
* 基础库 1.2.0 开始支持，低版本需做兼容处理。
* 
*  获取屏幕亮度
*  
*/
      getScreenBrightness: ( object: wxGetScreenBrightnessObjectField )=>never;
    
      /**
* 
*  Worker wx.createWorker(string scriptPath)
*  
* 基础库 1.9.90 开始支持，低版本需做兼容处理。
* 
*  创建一个 Worker 线程。目前限制最多只能创建一个 Worker，创建下一个 Worker 前请先调用 Worker.terminate
*  
*/
      createWorker: ( scriptPath: string )=>Worker;
    
      /**
* 
*  Object wx.getExtConfigSync()
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  wx.getExtConfig 的同步版本。
*  
*/
      getExtConfigSync: ()=>object;
    
      /**
* 
*  wx.getExtConfig(Object object)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  获取第三方平台自定义的数据字段。
*  
*/
      getExtConfig: ( object: wxGetExtConfigObjectField )=>never;
    
      /**
* 
*  SelectorQuery wx.createSelectorQuery()
*  
* 基础库 1.4.0 开始支持，低版本需做兼容处理。
* 
*  返回一个 SelectorQuery 对象实例。在自定义组件或包含自定义组件的页面中，应使用 this.createSelectorQuery() 来代替。
*  
*/
      createSelectorQuery: ()=>SelectorQuery;
    
      /**
* 
*  IntersectionObserver wx.createIntersectionObserver(Object this, Object options)
*  
* 基础库 1.9.3 开始支持，低版本需做兼容处理。
* 
*  创建并返回一个 IntersectionObserver 对象实例。在自定义组件或包含自定义组件的页面中，应使用 this.createIntersectionObserver([options]) 来代替。
*  
*/
      createIntersectionObserver: ( this: object , options: wxCreateIntersectionObserverOptionsField )=>IntersectionObserver;
    
  }
  
  declare interface UpdateManager {
    
      /**
* 
*  UpdateManager.onCheckForUpdate(function callback)
*  
*  监听向微信后台请求检查更新结果事件。微信在小程序冷启动时自动检查更新，不需由开发者主动触发。
*  
*/
      onCheckForUpdate: ( callback: ( res: UpdateManagerOnCheckForUpdateCallbackResField )=>never )=>never;
    
      /**
* 
*  UpdateManager.onUpdateReady(function callback)
*  
*  监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调
*  
*/
      onUpdateReady: ( callback: ()=>never )=>never;
    
      /**
* 
*  UpdateManager.onUpdateFailed(function callback)
*  
*  监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调
*  
*/
      onUpdateFailed: ( callback: ()=>never )=>never;
    
      /**
* 
*  UpdateManager.applyUpdate()
*  
*  强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 onUpdateReady 回调）调用。
*  
*/
      applyUpdate: ()=>never;
    
  }
  
  declare interface LogManager {
    
      /**
* 
*  LogManager.debug()
*  
*  写 debug 日志
*  
*/
      debug: ( ...args: Array<any> )=>never;
    
      /**
* 
*  LogManager.info()
*  
*  写 info 日志
*  
*/
      info: ( ...args: Array<any> )=>never;
    
      /**
* 
*  LogManager.log()
*  
*  写 log 日志
*  
*/
      log: ( ...args: Array<any> )=>never;
    
      /**
* 
*  LogManager.warn()
*  
*  写 warn 日志
*  
*/
      warn: ( ...args: Array<any> )=>never;
    
  }
  
  declare interface console {
    
      /**
* 
*  console.debug()
*  
*  向调试面板中打印 debug 日志
*  
*/
      debug: ( ...args: any )=>never;
    
      /**
* 
*  console.log()
*  
*  向调试面板中打印 log 日志
*  
*/
      log: ( ...args: any )=>never;
    
      /**
* 
*  console.info()
*  
*  向调试面板中打印 info 日志
*  
*/
      info: ( ...args: any )=>never;
    
      /**
* 
*  console.warn()
*  
*  向调试面板中打印 warn 日志
*  
*/
      warn: ( ...args: any )=>never;
    
      /**
* 
*  console.error()
*  
*  向调试面板中打印 error 日志
*  
*/
      error: ( ...args: any )=>never;
    
      /**
* 
*  console.group(string label)
*  
*  在调试面板中创建一个新的分组。随后输出的内容都会被添加一个缩进，表示该内容属于当前分组。调用 console.groupEnd之后分组结束。
*  
*/
      group: ( label: string )=>never;
    
      /**
* 
*  console.groupEnd()
*  
*  结束由 console.group 创建的分组
*  
*/
      groupEnd: ()=>never;
    
  }
  
  declare interface Animation {
    
      /**
* 
*  Array.<Object> Animation.export()
*  
*  导出动画队列。export 方法每次调用后会清掉之前的动画操作。
*  
*/
      export: ()=>Array<Object>;
    
      /**
* 
*  Animation Animation.step(Object object)
*  
*  表示一组动画完成。可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。
*  
*/
      step: ( object: AnimationStepObjectField )=>Animation;
    
      /**
* 
*  Animation Animation.matrix()
*  
*  同 transform-function matrix
*  
*/
      matrix: ()=>Animation;
    
      /**
* 
*  Animation Animation.matrix3d()
*  
*  同 transform-function matrix3d
*  
*/
      matrix3d: ()=>Animation;
    
      /**
* 
*  Animation Animation.rotate(number angle)
*  
*  从原点顺时针旋转一个角度
*  
*/
      rotate: ( angle: number )=>Animation;
    
      /**
* 
*  Animation Animation.rotate3d(number x, number y, number z, number angle)
*  
*  从 X 轴顺时针旋转一个角度
*  
*/
      rotate3d: ( x: number , y: number , z: number , angle: number )=>Animation;
    
      /**
* 
*  Animation Animation.rotateX(number angle)
*  
*  从 X 轴顺时针旋转一个角度
*  
*/
      rotateX: ( angle: number )=>Animation;
    
      /**
* 
*  Animation Animation.rotateY(number angle)
*  
*  从 Y 轴顺时针旋转一个角度
*  
*/
      rotateY: ( angle: number )=>Animation;
    
      /**
* 
*  Animation Animation.rotateZ(number angle)
*  
*  从 Z 轴顺时针旋转一个角度
*  
*/
      rotateZ: ( angle: number )=>Animation;
    
      /**
* 
*  Animation Animation.scale(number sx, number sy)
*  
*  缩放
*  
*/
      scale: ( sx: number , sy: number )=>Animation;
    
      /**
* 
*  Animation Animation.scale3d(number sx, number sy, number sz)
*  
*  缩放
*  
*/
      scale3d: ( sx: number , sy: number , sz: number )=>Animation;
    
      /**
* 
*  Animation Animation.scaleX(number scale)
*  
*  缩放 X 轴
*  
*/
      scaleX: ( scale: number )=>Animation;
    
      /**
* 
*  Animation Animation.scaleY(number scale)
*  
*  缩放 Y 轴
*  
*/
      scaleY: ( scale: number )=>Animation;
    
      /**
* 
*  Animation Animation.scaleZ(number scale)
*  
*  缩放 Z 轴
*  
*/
      scaleZ: ( scale: number )=>Animation;
    
      /**
* 
*  Animation Animation.skew(number ax, number ay)
*  
*  对 X、Y 轴坐标进行倾斜
*  
*/
      skew: ( ax: number , ay: number )=>Animation;
    
      /**
* 
*  Animation Animation.skewX(number angle)
*  
*  对 X 轴坐标进行倾斜
*  
*/
      skewX: ( angle: number )=>Animation;
    
      /**
* 
*  Animation Animation.skewY(number angle)
*  
*  对 Y 轴坐标进行倾斜
*  
*/
      skewY: ( angle: number )=>Animation;
    
      /**
* 
*  Animation Animation.translate(number tx, number ty)
*  
*  平移变换
*  
*/
      translate: ( tx: number , ty: number )=>Animation;
    
      /**
* 
*  Animation Animation.translate3d(number tx, number ty, number tz)
*  
*  对 xyz 坐标进行平移变换
*  
*/
      translate3d: ( tx: number , ty: number , tz: number )=>Animation;
    
      /**
* 
*  Animation Animation.translateX(number translation)
*  
*  对 X 轴平移
*  
*/
      translateX: ( translation: number )=>Animation;
    
      /**
* 
*  Animation Animation.translateY(number translation)
*  
*  对 Y 轴平移
*  
*/
      translateY: ( translation: number )=>Animation;
    
      /**
* 
*  Animation Animation.translateZ(number translation)
*  
*  对 Z 轴平移
*  
*/
      translateZ: ( translation: number )=>Animation;
    
      /**
* 
*  Animation Animation.opacity(number value)
*  
*  设置透明度
*  
*/
      opacity: ( value: number )=>Animation;
    
      /**
* 
*  Animation Animation.backgroundColor(string value)
*  
*  设置背景色
*  
*/
      backgroundColor: ( value: string )=>Animation;
    
      /**
* 
*  Animation Animation.width(number|string value)
*  
*  设置宽度
*  
*/
      width: ( value: number|string )=>Animation;
    
      /**
* 
*  Animation Animation.height(number|string value)
*  
*  设置高度
*  
*/
      height: ( value: number|string )=>Animation;
    
      /**
* 
*  Animation Animation.left(number|string value)
*  
*  设置 left 值
*  
*/
      left: ( value: number|string )=>Animation;
    
      /**
* 
*  Animation Animation.right(number|string value)
*  
*  设置 right 值
*  
*/
      right: ( value: number|string )=>Animation;
    
      /**
* 
*  Animation Animation.top(number|string value)
*  
*  设置 top 值
*  
*/
      top: ( value: number|string )=>Animation;
    
      /**
* 
*  Animation Animation.bottom(number|string value)
*  
*  设置 bottom 值
*  
*/
      bottom: ( value: number|string )=>Animation;
    
  }
  
  declare interface RequestTask {
    
      /**
* 
*  RequestTask.abort()
*  
* 基础库 1.4.0 开始支持，低版本需做兼容处理。
* 
*  中断请求任务
*  
*/
      abort: ()=>never;
    
      /**
* 
*  RequestTask.onHeadersReceived(function callback)
*  
* 基础库 2.1.0 开始支持，低版本需做兼容处理。
* 
*  监听 HTTP Response Header 事件。会比请求完成事件更早
*  
*/
      onHeadersReceived: ( callback: ( res: RequestTaskOnHeadersReceivedCallbackResField )=>never )=>never;
    
      /**
* 
*  RequestTask.offHeadersReceived(function callback)
*  
* 基础库 2.1.0 开始支持，低版本需做兼容处理。
* 
*  取消监听 HTTP Response Header 事件
*  
*/
      offHeadersReceived: ( callback: ()=>never )=>never;
    
  }
  
  declare interface DownloadTask {
    
      /**
* 
*  DownloadTask.onProgressUpdate(function callback)
*  
* 基础库 1.4.0 开始支持，低版本需做兼容处理。
* 
*  监听下载进度变化事件
*  
*/
      onProgressUpdate: ( callback: ( res: DownloadTaskOnProgressUpdateCallbackResField )=>never )=>never;
    
      /**
* 
*  DownloadTask.offProgressUpdate(function callback)
*  
* 基础库 2.1.0 开始支持，低版本需做兼容处理。
* 
*  取消监听下载进度变化事件
*  
*/
      offProgressUpdate: ( callback: ()=>never )=>never;
    
      /**
* 
*  DownloadTask.abort()
*  
* 基础库 1.4.0 开始支持，低版本需做兼容处理。
* 
*  中断下载任务
*  
*/
      abort: ()=>never;
    
      /**
* 
*  DownloadTask.onHeadersReceived(function callback)
*  
* 基础库 2.1.0 开始支持，低版本需做兼容处理。
* 
*  监听 HTTP Response Header 事件。会比请求完成事件更早
*  
*/
      onHeadersReceived: ( callback: ( res: DownloadTaskOnHeadersReceivedCallbackResField )=>never )=>never;
    
      /**
* 
*  DownloadTask.offHeadersReceived(function callback)
*  
* 基础库 2.1.0 开始支持，低版本需做兼容处理。
* 
*  取消监听 HTTP Response Header 事件
*  
*/
      offHeadersReceived: ( callback: ()=>never )=>never;
    
  }
  
  declare interface UploadTask {
    
      /**
* 
*  UploadTask.onProgressUpdate(function callback)
*  
* 基础库 1.4.0 开始支持，低版本需做兼容处理。
* 
*  监听上传进度变化事件
*  
*/
      onProgressUpdate: ( callback: ( res: UploadTaskOnProgressUpdateCallbackResField )=>never )=>never;
    
      /**
* 
*  UploadTask.offProgressUpdate(function callback)
*  
* 基础库 2.1.0 开始支持，低版本需做兼容处理。
* 
*  取消监听上传进度变化事件
*  
*/
      offProgressUpdate: ( callback: ()=>never )=>never;
    
      /**
* 
*  UploadTask.abort()
*  
* 基础库 1.4.0 开始支持，低版本需做兼容处理。
* 
*  中断上传任务
*  
*/
      abort: ()=>never;
    
      /**
* 
*  UploadTask.onHeadersReceived(function callback)
*  
* 基础库 2.1.0 开始支持，低版本需做兼容处理。
* 
*  监听 HTTP Response Header 事件。会比请求完成事件更早
*  
*/
      onHeadersReceived: ( callback: ( res: UploadTaskOnHeadersReceivedCallbackResField )=>never )=>never;
    
      /**
* 
*  UploadTask.offHeadersReceived(function callback)
*  
* 基础库 2.1.0 开始支持，低版本需做兼容处理。
* 
*  取消监听 HTTP Response Header 事件
*  
*/
      offHeadersReceived: ( callback: ()=>never )=>never;
    
  }
  
  declare interface SocketTask {
    
      /**
* 
*  SocketTask.send(Object object)
*  
*  通过 WebSocket 连接发送数据
*  
*/
      send: ( object: SocketTaskSendObjectField )=>never;
    
      /**
* 
*  SocketTask.close(Object object)
*  
*  关闭 WebSocket 连接
*  
*/
      close: ( object: SocketTaskCloseObjectField )=>never;
    
      /**
* 
*  SocketTask.onOpen(function callback)
*  
*  监听 WebSocket 连接打开事件
*  
*/
      onOpen: ( callback: ( res: SocketTaskOnOpenCallbackResField )=>never )=>never;
    
      /**
* 
*  SocketTask.onClose(function callback)
*  
*  监听 WebSocket 连接关闭事件
*  
*/
      onClose: ( callback: ()=>never )=>never;
    
      /**
* 
*  SocketTask.onError(function callback)
*  
*  监听 WebSocket 错误事件
*  
*/
      onError: ( callback: ( res: SocketTaskOnErrorCallbackResField )=>never )=>never;
    
      /**
* 
*  SocketTask.onMessage(function callback)
*  
*  监听 WebSocket 接受到服务器的消息事件
*  
*/
      onMessage: ( callback: ( res: SocketTaskOnMessageCallbackResField )=>never )=>never;
    
  }
  
  declare interface MapContext {
    
      /**
* 
*  MapContext.getCenterLocation(Object object)
*  
*  获取当前地图中心的经纬度。返回的是 gcj02 坐标系，可以用于 wx.openLocation()
*  
*/
      getCenterLocation: ( object: MapContextGetCenterLocationObjectField )=>never;
    
      /**
* 
*  MapContext.moveToLocation()
*  
*  将地图中心移动到当前定位点。需要配合map组件的show-location使用
*  
*/
      moveToLocation: ()=>never;
    
      /**
* 
*  MapContext.translateMarker(Object object)
*  
* 基础库 1.2.0 开始支持，低版本需做兼容处理。
* 
*  平移marker，带动画
*  
*/
      translateMarker: ( object: MapContextTranslateMarkerObjectField )=>never;
    
      /**
* 
*  MapContext.includePoints(Object object)
*  
* 基础库 1.2.0 开始支持，低版本需做兼容处理。
* 
*  缩放视野展示所有经纬度
*  
*/
      includePoints: ( object: MapContextIncludePointsObjectField )=>never;
    
      /**
* 
*  MapContext.getRegion(Object object)
*  
* 基础库 1.4.0 开始支持，低版本需做兼容处理。
* 
*  获取当前地图的视野范围
*  
*/
      getRegion: ( object: MapContextGetRegionObjectField )=>never;
    
      /**
* 
*  MapContext.getScale(Object object)
*  
* 基础库 1.4.0 开始支持，低版本需做兼容处理。
* 
*  获取当前地图的缩放级别
*  
*/
      getScale: ( object: MapContextGetScaleObjectField )=>never;
    
  }
  
  declare interface VideoContext {
    
      /**
* 
*  VideoContext.play()
*  
*  播放视频
*  
*/
      play: ()=>never;
    
      /**
* 
*  VideoContext.pause()
*  
*  暂停视频
*  
*/
      pause: ()=>never;
    
      /**
* 
*  VideoContext.stop()
*  
* 基础库 1.7.0 开始支持，低版本需做兼容处理。
* 
*  停止视频
*  
*/
      stop: ()=>never;
    
      /**
* 
*  VideoContext.seek(number position)
*  
*  跳转到指定位置
*  
*/
      seek: ( position: number )=>never;
    
      /**
* 
*  VideoContext.sendDanmu(Object data)
*  
*  发送弹幕
*  
*/
      sendDanmu: ( data: VideoContextSendDanmuDataField )=>never;
    
      /**
* 
*  VideoContext.playbackRate(number rate)
*  
* 基础库 1.4.0 开始支持，低版本需做兼容处理。
* 
*  设置倍速播放
*  
*/
      playbackRate: ( rate: number )=>never;
    
      /**
* 
*  VideoContext.requestFullScreen(Object object)
*  
* 基础库 1.4.0 开始支持，低版本需做兼容处理。
* 
*  进入全屏
*  
*/
      requestFullScreen: ( object: VideoContextRequestFullScreenObjectField )=>never;
    
      /**
* 
*  VideoContext.exitFullScreen()
*  
* 基础库 1.4.0 开始支持，低版本需做兼容处理。
* 
*  退出全屏
*  
*/
      exitFullScreen: ()=>never;
    
      /**
* 
*  VideoContext.showStatusBar()
*  
* 基础库 2.1.0 开始支持，低版本需做兼容处理。
* 
*  显示状态栏，仅在iOS全屏下有效
*  
*/
      showStatusBar: ()=>never;
    
      /**
* 
*  VideoContext.hideStatusBar()
*  
* 基础库 2.1.0 开始支持，低版本需做兼容处理。
* 
*  隐藏状态栏，仅在iOS全屏下有效
*  
*/
      hideStatusBar: ()=>never;
    
  }
  
  declare interface InnerAudioContext {
    
      /**
* 
*  InnerAudioContext.onCanplay(function callback)
*  
*  监听音频进入可以播放状态的事件。但不保证后面可以流畅播放
*  
*/
      onCanplay: ( callback: ()=>never )=>never;
    
      /**
* 
*  InnerAudioContext.offCanplay(function callback)
*  
* 基础库 1.9.0 开始支持，低版本需做兼容处理。
* 
*  取消监听音频进入可以播放状态的事件
*  
*/
      offCanplay: ( callback: ()=>never )=>never;
    
      /**
* 
*  InnerAudioContext.onPlay(function callback)
*  
*  监听音频播放事件
*  
*/
      onPlay: ( callback: ()=>never )=>never;
    
      /**
* 
*  InnerAudioContext.offPlay(function callback)
*  
* 基础库 1.9.0 开始支持，低版本需做兼容处理。
* 
*  取消监听音频播放事件
*  
*/
      offPlay: ( callback: ()=>never )=>never;
    
      /**
* 
*  InnerAudioContext.onPause(function callback)
*  
*  监听音频暂停事件
*  
*/
      onPause: ( callback: ()=>never )=>never;
    
      /**
* 
*  InnerAudioContext.offPause(function callback)
*  
* 基础库 1.9.0 开始支持，低版本需做兼容处理。
* 
*  取消监听音频暂停事件
*  
*/
      offPause: ( callback: ()=>never )=>never;
    
      /**
* 
*  InnerAudioContext.onStop(function callback)
*  
*  监听音频停止事件
*  
*/
      onStop: ( callback: ()=>never )=>never;
    
      /**
* 
*  InnerAudioContext.offStop(function callback)
*  
* 基础库 1.9.0 开始支持，低版本需做兼容处理。
* 
*  取消监听音频停止事件
*  
*/
      offStop: ( callback: ()=>never )=>never;
    
      /**
* 
*  InnerAudioContext.onEnded(function callback)
*  
*  监听音频自然播放至结束的事件
*  
*/
      onEnded: ( callback: ()=>never )=>never;
    
      /**
* 
*  InnerAudioContext.offEnded(function callback)
*  
* 基础库 1.9.0 开始支持，低版本需做兼容处理。
* 
*  取消监听音频自然播放至结束的事件
*  
*/
      offEnded: ( callback: ()=>never )=>never;
    
      /**
* 
*  InnerAudioContext.onTimeUpdate(function callback)
*  
*  监听音频播放进度更新事件
*  
*/
      onTimeUpdate: ( callback: ()=>never )=>never;
    
      /**
* 
*  InnerAudioContext.offTimeUpdate(function callback)
*  
* 基础库 1.9.0 开始支持，低版本需做兼容处理。
* 
*  取消监听音频播放进度更新事件
*  
*/
      offTimeUpdate: ( callback: ()=>never )=>never;
    
      /**
* 
*  InnerAudioContext.onError(function callback)
*  
*  监听音频播放错误事件
*  
*/
      onError: ( callback: ( res: InnerAudioContextOnErrorCallbackResField )=>never )=>never;
    
      /**
* 
*  InnerAudioContext.offError(function callback)
*  
* 基础库 1.9.0 开始支持，低版本需做兼容处理。
* 
*  取消监听音频播放错误事件
*  
*/
      offError: ( callback: ()=>never )=>never;
    
      /**
* 
*  InnerAudioContext.onWaiting(function callback)
*  
*  监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发
*  
*/
      onWaiting: ( callback: ()=>never )=>never;
    
      /**
* 
*  InnerAudioContext.offWaiting(function callback)
*  
* 基础库 1.9.0 开始支持，低版本需做兼容处理。
* 
*  取消监听音频加载中事件
*  
*/
      offWaiting: ( callback: ()=>never )=>never;
    
      /**
* 
*  InnerAudioContext.onSeeking(function callback)
*  
*  监听音频进行跳转操作的事件
*  
*/
      onSeeking: ( callback: ()=>never )=>never;
    
      /**
* 
*  InnerAudioContext.offSeeking(function callback)
*  
* 基础库 1.9.0 开始支持，低版本需做兼容处理。
* 
*  取消监听音频进行跳转操作的事件
*  
*/
      offSeeking: ( callback: ()=>never )=>never;
    
      /**
* 
*  InnerAudioContext.onSeeked(function callback)
*  
*  监听音频完成跳转操作的事件
*  
*/
      onSeeked: ( callback: ()=>never )=>never;
    
      /**
* 
*  InnerAudioContext.offSeeked(function callback)
*  
* 基础库 1.9.0 开始支持，低版本需做兼容处理。
* 
*  取消监听音频完成跳转操作的事件
*  
*/
      offSeeked: ( callback: ()=>never )=>never;
    
      /**
* 
*  InnerAudioContext.play()
*  
*  播放
*  
*/
      play: ()=>never;
    
      /**
* 
*  InnerAudioContext.pause()
*  
*  暂停。暂停后的音频再播放会从暂停处开始播放
*  
*/
      pause: ()=>never;
    
      /**
* 
*  InnerAudioContext.stop()
*  
*  停止。停止后的音频再播放会从头开始播放。
*  
*/
      stop: ()=>never;
    
      /**
* 
*  InnerAudioContext.seek(number position)
*  
*  跳转到指定位置
*  
*/
      seek: ( position: number )=>never;
    
      /**
* 
*  InnerAudioContext.destroy()
*  
*  销毁当前实例
*  
*/
      destroy: ()=>never;
    
  }
  
  declare interface AudioContext {
    
      /**
* 
*  AudioContext.setSrc(string src)
*  
*  设置音频地址
*  
*/
      setSrc: ( src: string )=>never;
    
      /**
* 
*  AudioContext.play()
*  
*  播放音频。
*  
*/
      play: ()=>never;
    
      /**
* 
*  AudioContext.pause()
*  
*  暂停音频。
*  
*/
      pause: ()=>never;
    
      /**
* 
*  AudioContext.seek(number position)
*  
*  跳转到指定位置。
*  
*/
      seek: ( position: number )=>never;
    
  }
  
  declare interface BackgroundAudioManager {
    
      /**
* 
*  BackgroundAudioManager.play()
*  
*  播放音乐
*  
*/
      play: ()=>never;
    
      /**
* 
*  BackgroundAudioManager.pause()
*  
*  暂停音乐
*  
*/
      pause: ()=>never;
    
      /**
* 
*  BackgroundAudioManager.seek(number currentTime)
*  
*  跳转到指定位置
*  
*/
      seek: ( currentTime: number )=>never;
    
      /**
* 
*  BackgroundAudioManager.stop()
*  
*  停止音乐
*  
*/
      stop: ()=>never;
    
      /**
* 
*  BackgroundAudioManager.onCanplay(function callback)
*  
*  监听背景音频进入可播放状态事件。但不保证后面可以流畅播放
*  
*/
      onCanplay: ( callback: ()=>never )=>never;
    
      /**
* 
*  BackgroundAudioManager.onWaiting(function callback)
*  
*  监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发
*  
*/
      onWaiting: ( callback: ()=>never )=>never;
    
      /**
* 
*  BackgroundAudioManager.onError(function callback)
*  
*  监听背景音频播放错误事件
*  
*/
      onError: ( callback: ()=>never )=>never;
    
      /**
* 
*  BackgroundAudioManager.onPlay(function callback)
*  
*  监听背景音频播放事件
*  
*/
      onPlay: ( callback: ()=>never )=>never;
    
      /**
* 
*  BackgroundAudioManager.onPause(function callback)
*  
*  监听背景音频暂停事件
*  
*/
      onPause: ( callback: ()=>never )=>never;
    
      /**
* 
*  BackgroundAudioManager.onSeeking(function callback)
*  
*  监听背景音频开始跳转操作事件
*  
*/
      onSeeking: ( callback: ()=>never )=>never;
    
      /**
* 
*  BackgroundAudioManager.onSeeked(function callback)
*  
*  监听背景音频完成跳转操作事件
*  
*/
      onSeeked: ( callback: ()=>never )=>never;
    
      /**
* 
*  BackgroundAudioManager.onEnded(function callback)
*  
*  监听背景音频自然播放结束事件
*  
*/
      onEnded: ( callback: ()=>never )=>never;
    
      /**
* 
*  BackgroundAudioManager.onStop(function callback)
*  
*  监听背景音频停止事件
*  
*/
      onStop: ( callback: ()=>never )=>never;
    
      /**
* 
*  BackgroundAudioManager.onTimeUpdate(function callback)
*  
*  监听背景音频播放进度更新事件
*  
*/
      onTimeUpdate: ( callback: ()=>never )=>never;
    
      /**
* 
*  BackgroundAudioManager.onNext(function callback)
*  
*  监听用户在系统音乐播放面板点击下一曲事件（仅iOS）
*  
*/
      onNext: ( callback: ()=>never )=>never;
    
      /**
* 
*  BackgroundAudioManager.onPrev(function callback)
*  
*  监听用户在系统音乐播放面板点击上一曲事件（仅iOS）
*  
*/
      onPrev: ( callback: ()=>never )=>never;
    
  }
  
  declare interface LivePlayerContext {
    
      /**
* 
*  LivePlayerContext.play(Object object)
*  
*  播放
*  
*/
      play: ( object: LivePlayerContextPlayObjectField )=>never;
    
      /**
* 
*  LivePlayerContext.stop(Object object)
*  
*  停止
*  
*/
      stop: ( object: LivePlayerContextStopObjectField )=>never;
    
      /**
* 
*  LivePlayerContext.mute(Object object)
*  
*  静音
*  
*/
      mute: ( object: LivePlayerContextMuteObjectField )=>never;
    
      /**
* 
*  LivePlayerContext.pause(Object object)
*  
* 基础库 1.9.90 开始支持，低版本需做兼容处理。
* 
*  暂停
*  
*/
      pause: ( object: LivePlayerContextPauseObjectField )=>never;
    
      /**
* 
*  LivePlayerContext.resume(Object object)
*  
* 基础库 1.9.90 开始支持，低版本需做兼容处理。
* 
*  恢复
*  
*/
      resume: ( object: LivePlayerContextResumeObjectField )=>never;
    
      /**
* 
*  LivePlayerContext.requestFullScreen(Object object)
*  
*  进入全屏
*  
*/
      requestFullScreen: ( object: LivePlayerContextRequestFullScreenObjectField )=>never;
    
      /**
* 
*  LivePlayerContext.exitFullScreen(Object object)
*  
*  退出全屏
*  
*/
      exitFullScreen: ( object: LivePlayerContextExitFullScreenObjectField )=>never;
    
  }
  
  declare interface LivePusherContext {
    
      /**
* 
*  LivePusherContext.start(Object object)
*  
*  播放推流
*  
*/
      start: ( object: LivePusherContextStartObjectField )=>never;
    
      /**
* 
*  LivePusherContext.stop(Object object)
*  
*  停止推流
*  
*/
      stop: ( object: LivePusherContextStopObjectField )=>never;
    
      /**
* 
*  LivePusherContext.pause(Object object)
*  
*  暂停推流
*  
*/
      pause: ( object: LivePusherContextPauseObjectField )=>never;
    
      /**
* 
*  LivePusherContext.resume(Object object)
*  
*  恢复推流
*  
*/
      resume: ( object: LivePusherContextResumeObjectField )=>never;
    
      /**
* 
*  LivePusherContext.switchCamera(Object object)
*  
*  切换前后摄像头
*  
*/
      switchCamera: ( object: LivePusherContextSwitchCameraObjectField )=>never;
    
      /**
* 
*  LivePusherContext.snapshot(Object object)
*  
* 基础库 1.9.90 开始支持，低版本需做兼容处理。
* 
*  快照
*  
*/
      snapshot: ( object: LivePusherContextSnapshotObjectField )=>never;
    
      /**
* 
*  LivePusherContext.toggleTorch(Object object)
*  
* 基础库 2.1.0 开始支持，低版本需做兼容处理。
* 
*  切换
*  
*/
      toggleTorch: ( object: LivePusherContextToggleTorchObjectField )=>never;
    
      /**
* 
*  LivePusherContext.playBGM(Object object)
*  
* 基础库 2.4.0 开始支持，低版本需做兼容处理。
* 
*  播放背景音
*  
*/
      playBGM: ( object: LivePusherContextPlayBGMObjectField )=>never;
    
      /**
* 
*  LivePusherContext.stopBGM(Object object)
*  
* 基础库 2.4.0 开始支持，低版本需做兼容处理。
* 
*  停止背景音
*  
*/
      stopBGM: ( object: LivePusherContextStopBGMObjectField )=>never;
    
      /**
* 
*  LivePusherContext.pauseBGM(Object object)
*  
* 基础库 2.4.0 开始支持，低版本需做兼容处理。
* 
*  暂停背景音
*  
*/
      pauseBGM: ( object: LivePusherContextPauseBGMObjectField )=>never;
    
      /**
* 
*  LivePusherContext.resumeBGM(Object object)
*  
* 基础库 2.4.0 开始支持，低版本需做兼容处理。
* 
*  恢复背景音
*  
*/
      resumeBGM: ( object: LivePusherContextResumeBGMObjectField )=>never;
    
      /**
* 
*  LivePusherContext.setBGMVolume(Object object)
*  
* 基础库 2.4.0 开始支持，低版本需做兼容处理。
* 
*  设置背景音音量
*  
*/
      setBGMVolume: ( object: LivePusherContextSetBGMVolumeObjectField )=>never;
    
  }
  
  declare interface RecorderManager {
    
      /**
* 
*  RecorderManager.start(Object object)
*  
*  开始录音
*  
*/
      start: ( object: RecorderManagerStartObjectField )=>never;
    
      /**
* 
*  RecorderManager.pause()
*  
*  暂停录音
*  
*/
      pause: ()=>never;
    
      /**
* 
*  RecorderManager.resume()
*  
*  继续录音
*  
*/
      resume: ()=>never;
    
      /**
* 
*  RecorderManager.stop()
*  
*  停止录音
*  
*/
      stop: ()=>never;
    
      /**
* 
*  RecorderManager.onStart(function callback)
*  
*  监听录音开始事件
*  
*/
      onStart: ( callback: ()=>never )=>never;
    
      /**
* 
*  RecorderManager.onResume(function callback)
*  
*  监听录音继续事件
*  
*/
      onResume: ( callback: ()=>never )=>never;
    
      /**
* 
*  RecorderManager.onPause(function callback)
*  
*  监听录音暂停事件
*  
*/
      onPause: ( callback: ()=>never )=>never;
    
      /**
* 
*  RecorderManager.onStop(function callback)
*  
*  监听录音结束事件
*  
*/
      onStop: ( callback: ( res: RecorderManagerOnStopCallbackResField )=>never )=>never;
    
      /**
* 
*  RecorderManager.onFrameRecorded(function callback)
*  
*  监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。
*  
*/
      onFrameRecorded: ( callback: ( res: RecorderManagerOnFrameRecordedCallbackResField )=>never )=>never;
    
      /**
* 
*  RecorderManager.onError(function callback)
*  
*  监听录音错误事件
*  
*/
      onError: ( callback: ( res: RecorderManagerOnErrorCallbackResField )=>never )=>never;
    
      /**
* 
*  RecorderManager.onInterruptionBegin(function callback)
*  
* 基础库 2.3.0 开始支持，低版本需做兼容处理。
* 
*  监听录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：微信语音聊天、微信视频聊天。此事件触发后，录音会被暂停。pause 事件在此事件后触发
*  
*/
      onInterruptionBegin: ( callback: ()=>never )=>never;
    
      /**
* 
*  RecorderManager.onInterruptionEnd(function callback)
*  
* 基础库 2.3.0 开始支持，低版本需做兼容处理。
* 
*  监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功。
*  
*/
      onInterruptionEnd: ( callback: ()=>never )=>never;
    
  }
  
  declare interface CameraContext {
    
      /**
* 
*  CameraContext.takePhoto(Object object)
*  
*  拍摄照片
*  
*/
      takePhoto: ( object: CameraContextTakePhotoObjectField )=>never;
    
      /**
* 
*  CameraContext.startRecord(Object object)
*  
*  开始录像
*  
*/
      startRecord: ( object: CameraContextStartRecordObjectField )=>never;
    
      /**
* 
*  CameraContext.stopRecord(Object object)
*  
*  结束录像
*  
*/
      stopRecord: ( object: CameraContextStopRecordObjectField )=>never;
    
  }
  
  declare interface CanvasContext {
    
      /**
* 
*  CanvasContext.draw(boolean reserve, function callback)
*  
*  将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
*  
*/
      draw: ( reserve: boolean , callback: ()=>never )=>never;
    
      /**
* 
*  CanvasGradient CanvasContext.createLinearGradient(number x0, number y0, number x1, number y1)
*  
*  创建一个线性的渐变颜色。返回的CanvasGradient对象需要使用 CanvasGradient.addColorStop() 来指定渐变点，至少要两个。
*  
*/
      createLinearGradient: ( x0: number , y0: number , x1: number , y1: number )=>CanvasGradient;
    
      /**
* 
*  CanvasGradient CanvasContext.createCircularGradient(number x, number y, number r)
*  
*  创建一个圆形的渐变颜色。起点在圆心，终点在圆环。返回的CanvasGradient对象需要使用 CanvasGradient.addColorStop() 来指定渐变点，至少要两个。
*  
*/
      createCircularGradient: ( x: number , y: number , r: number )=>CanvasGradient;
    
      /**
* 
*  CanvasContext.createPattern(string image, string repetition)
*  
* 基础库 1.9.90 开始支持，低版本需做兼容处理。
* 
*  对指定的图像创建模式的方法，可在指定的方向上重复元图像
*  
*/
      createPattern: ( image: string , repetition: string )=>never;
    
      /**
* 
*  Object CanvasContext.measureText(string text)
*  
* 基础库 1.9.90 开始支持，低版本需做兼容处理。
* 
*  测量文本尺寸信息。目前仅返回文本宽度。同步接口。
*  
*/
      measureText: ( text: string )=>object;
    
      /**
* 
*  CanvasContext.save()
*  
*  保存绘图上下文。
*  
*/
      save: ()=>never;
    
      /**
* 
*  CanvasContext.restore()
*  
*  恢复之前保存的绘图上下文。
*  
*/
      restore: ()=>never;
    
      /**
* 
*  CanvasContext.beginPath()
*  
*  开始创建一个路径。需要调用 fill 或者 stroke 才会使用路径进行填充或描边
*  
*/
      beginPath: ()=>never;
    
      /**
* 
*  CanvasContext.moveTo(number x, number y)
*  
*  把路径移动到画布中的指定点，不创建线条。用 stroke 方法来画线条
*  
*/
      moveTo: ( x: number , y: number )=>never;
    
      /**
* 
*  CanvasContext.lineTo(number x, number y)
*  
*  增加一个新点，然后创建一条从上次指定点到目标点的线。用 stroke 方法来画线条
*  
*/
      lineTo: ( x: number , y: number )=>never;
    
      /**
* 
*  CanvasContext.quadraticCurveTo(number cpx, number cpy, number x, number y)
*  
*  创建二次贝塞尔曲线路径。曲线的起始点为路径中前一个点。
*  
*/
      quadraticCurveTo: ( cpx: number , cpy: number , x: number , y: number )=>never;
    
      /**
* 
*  CanvasContext.bezierCurveTo()
*  
*  创建三次方贝塞尔曲线路径。曲线的起始点为路径中前一个点。
*  
*/
      bezierCurveTo: ()=>never;
    
      /**
* 
*  CanvasContext.arc(number x, number y, number r, number sAngle, number eAngle, number counterclockwise)
*  
*  创建一条弧线。
*  
*/
      arc: ( x: number , y: number , r: number , sAngle: number , eAngle: number , counterclockwise: number )=>never;
    
      /**
* 
*  CanvasContext.rect(number x, number y, number width, number height)
*  
*  创建一个矩形路径。需要用 fill 或者 stroke 方法将矩形真正的画到 canvas 中
*  
*/
      rect: ( x: number , y: number , width: number , height: number )=>never;
    
      /**
* 
*  CanvasContext.arcTo(number x1, number y1, number x2, number y2, number radius)
*  
* 基础库 1.9.90 开始支持，低版本需做兼容处理。
* 
*  根据控制点和半径绘制圆弧路径。
*  
*/
      arcTo: ( x1: number , y1: number , x2: number , y2: number , radius: number )=>never;
    
      /**
* 
*  CanvasContext.clip()
*  
* 基础库 1.6.0 开始支持，低版本需做兼容处理。
* 
*  从原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。可以在使用 clip 方法前通过使用 save 方法对当前画布区域进行保存，并在以后的任意时间通过restore方法对其进行恢复。
*  
*/
      clip: ()=>never;
    
      /**
* 
*  CanvasContext.fillRect(number x, number y, number width, number height)
*  
*  填充一个矩形。用 setFillStyle 设置矩形的填充色，如果没设置默认是黑色。
*  
*/
      fillRect: ( x: number , y: number , width: number , height: number )=>never;
    
      /**
* 
*  CanvasContext.strokeRect(number x, number y, number width, number height)
*  
*  画一个矩形(非填充)。 用 setStrokeStyle 设置矩形线条的颜色，如果没设置默认是黑色。
*  
*/
      strokeRect: ( x: number , y: number , width: number , height: number )=>never;
    
      /**
* 
*  CanvasContext.clearRect(number x, number y, number width, number height)
*  
*  清除画布上在该矩形区域内的内容
*  
*/
      clearRect: ( x: number , y: number , width: number , height: number )=>never;
    
      /**
* 
*  CanvasContext.fill()
*  
*  对当前路径中的内容进行填充。默认的填充色为黑色。
*  
*/
      fill: ()=>never;
    
      /**
* 
*  CanvasContext.stroke()
*  
*  画出当前路径的边框。默认颜色色为黑色。
*  
*/
      stroke: ()=>never;
    
      /**
* 
*  CanvasContext.closePath()
*  
*  关闭一个路径。会连接起点和终点。如果关闭路径后没有调用 fill 或者 stroke 并开启了新的路径，那之前的路径将不会被渲染。
*  
*/
      closePath: ()=>never;
    
      /**
* 
*  CanvasContext.scale(number scaleWidth, number scaleHeight)
*  
*  在调用后，之后创建的路径其横纵坐标会被缩放。多次调用倍数会相乘。
*  
*/
      scale: ( scaleWidth: number , scaleHeight: number )=>never;
    
      /**
* 
*  CanvasContext.rotate(number rotate)
*  
*  以原点为中心顺时针旋转当前坐标轴。多次调用旋转的角度会叠加。原点可以用 translate 方法修改。
*  
*/
      rotate: ( rotate: number )=>never;
    
      /**
* 
*  CanvasContext.translate(number x, number y)
*  
*  对当前坐标系的原点 (0, 0) 进行变换。默认的坐标系原点为页面左上角。
*  
*/
      translate: ( x: number , y: number )=>never;
    
      /**
* 
*  CanvasContext.drawImage(string imageResource, number dx, number dy, number dWidth, number dHeight, number sx, number sy, number sWidth, number sHeight)
*  
*  绘制图像到画布
*  
*/
      drawImage: ( imageResource: string , dx: number , dy: number , dWidth: number , dHeight: number , sx: number , sy: number , sWidth: number , sHeight: number )=>never;
    
      /**
* 
*  CanvasContext.strokeText(string text, number x, number y, number maxWidth)
*  
* 基础库 1.9.90 开始支持，低版本需做兼容处理。
* 
*  给定的 (x, y) 位置绘制文本描边的方法
*  
*/
      strokeText: ( text: string , x: number , y: number , maxWidth: number )=>never;
    
      /**
* 
*  CanvasContext.transform(number scaleX, number scaleY, number skewX, number skewY, number translateX, number translateY)
*  
* 基础库 1.9.90 开始支持，低版本需做兼容处理。
* 
*  使用矩阵多次叠加当前变换的方法
*  
*/
      transform: ( scaleX: number , scaleY: number , skewX: number , skewY: number , translateX: number , translateY: number )=>never;
    
      /**
* 
*  CanvasContext.setTransform(number scaleX, number scaleY, number skewX, number skewY, number translateX, number translateY)
*  
* 基础库 1.9.90 开始支持，低版本需做兼容处理。
* 
*  使用矩阵重新设置（覆盖）当前变换的方法
*  
*/
      setTransform: ( scaleX: number , scaleY: number , skewX: number , skewY: number , translateX: number , translateY: number )=>never;
    
      /**
* 
*  CanvasContext.setFillStyle(Color color)
*  
* 从基础库 1.9.90 开始，本接口停止维护，请使用 CanvasContext.fillStyle 代替
* 
*  设置填充色。
*  
*/
      setFillStyle: ( color: Color )=>never;
    
      /**
* 
*  CanvasContext.setStrokeStyle(Color color)
*  
* 从基础库 1.9.90 开始，本接口停止维护，请使用 CanvasContext.strokeStyle 代替
* 
*  设置描边颜色。
*  
*/
      setStrokeStyle: ( color: Color )=>never;
    
      /**
* 
*  CanvasContext.setShadow(number offsetX, number offsetY, number blur, string color)
*  
* 从基础库 1.9.90 开始，本接口停止维护，请使用 CanvasContext.shadowOffsetX|CanvasContext.shadowOffsetY|CanvasContext.shadowColor|CanvasContext.shadowBlur 代替
* 
*  设定阴影样式。
*  
*/
      setShadow: ( offsetX: number , offsetY: number , blur: number , color: string )=>never;
    
      /**
* 
*  CanvasContext.setGlobalAlpha(number alpha)
*  
* 从基础库 1.9.90 开始，本接口停止维护，请使用 CanvasContext.globalAlpha 代替
* 
*  设置全局画笔透明度。
*  
*/
      setGlobalAlpha: ( alpha: number )=>never;
    
      /**
* 
*  CanvasContext.setLineWidth(number lineWidth)
*  
* 从基础库 1.9.90 开始，本接口停止维护，请使用 CanvasContext.lineWidth 代替
* 
*  设置线条的宽度
*  
*/
      setLineWidth: ( lineWidth: number )=>never;
    
      /**
* 
*  CanvasContext.setLineJoin(string lineJoin)
*  
* 从基础库 1.9.90 开始，本接口停止维护，请使用 CanvasContext.lineJoin 代替
* 
*  设置线条的交点样式
*  
*/
      setLineJoin: ( lineJoin: string )=>never;
    
      /**
* 
*  CanvasContext.setLineCap(string lineCap)
*  
* 从基础库 1.9.90 开始，本接口停止维护，请使用 CanvasContext.lineCap 代替
* 
*  设置线条的端点样式
*  
*/
      setLineCap: ( lineCap: string )=>never;
    
      /**
* 
*  CanvasContext.setLineDash(Array.<number> pattern, number offset)
*  
* 基础库 1.6.0 开始支持，低版本需做兼容处理。
* 
*  设置虚线样式。
*  
*/
      setLineDash: ( pattern: Array<number> , offset: number )=>never;
    
      /**
* 
*  CanvasContext.setMiterLimit(number miterLimit)
*  
* 从基础库 1.9.90 开始，本接口停止维护，请使用 CanvasContext.miterLimit 代替
* 
*  设置最大斜接长度。斜接长度指的是在两条线交汇处内角和外角之间的距离。当 CanvasContext.setLineJoin() 为 miter 时才有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示。
*  
*/
      setMiterLimit: ( miterLimit: number )=>never;
    
      /**
* 
*  CanvasContext.fillText(string text, number x, number y, number maxWidth)
*  
*  在画布上绘制被填充的文本
*  
*/
      fillText: ( text: string , x: number , y: number , maxWidth: number )=>never;
    
      /**
* 
*  CanvasContext.setFontSize(number fontSize)
*  
* 从基础库 1.9.90 开始，本接口停止维护，请使用 CanvasContext.font 代替
* 
*  设置字体的字号
*  
*/
      setFontSize: ( fontSize: number )=>never;
    
      /**
* 
*  CanvasContext.setTextAlign(string align)
*  
* 基础库 1.1.0 开始支持，低版本需做兼容处理。
* 
*  设置文字的对齐
*  
*/
      setTextAlign: ( align: string )=>never;
    
      /**
* 
*  CanvasContext.setTextBaseline(string textBaseline)
*  
* 基础库 1.4.0 开始支持，低版本需做兼容处理。
* 
*  设置文字的竖直对齐
*  
*/
      setTextBaseline: ( textBaseline: string )=>never;
    
  }
  
  declare interface CanvasGradient {
    
      /**
* 
*  CanvasGradient.addColorStop(number stop, Color color)
*  
*  添加颜色的渐变点。小于最小 stop 的部分会按最小 stop 的 color 来渲染，大于最大 stop 的部分会按最大 stop 的 color 来渲染
*  
*/
      addColorStop: ( stop: number , color: Color )=>never;
    
  }
  
  declare interface FileSystemManager {
    
      /**
* 
*  FileSystemManager.access(Object object)
*  
*  判断文件/目录是否存在
*  
*/
      access: ( object: FileSystemManagerAccessObjectField )=>never;
    
      /**
* 
*  FileSystemManager.accessSync(string path)
*  
*  FileSystemManager.access 的同步版本
*  
*/
      accessSync: ( path: string )=>never;
    
      /**
* 
*  FileSystemManager.appendFile(Object object)
*  
* 基础库 2.1.0 开始支持，低版本需做兼容处理。
* 
*  在文件结尾追加内容
*  
*/
      appendFile: ( object: FileSystemManagerAppendFileObjectField )=>never;
    
      /**
* 
*  FileSystemManager.appendFileSync(string filePath, string|ArrayBuffer data, string encoding)
*  
* 基础库 2.1.0 开始支持，低版本需做兼容处理。
* 
*  FileSystemManager.appendFile 的同步版本
*  
*/
      appendFileSync: ( filePath: string , data: string|ArrayBuffer , encoding: string )=>never;
    
      /**
* 
*  FileSystemManager.saveFile(Object object)
*  
*  保存临时文件到本地。此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用。
*  
*/
      saveFile: ( object: FileSystemManagerSaveFileObjectField )=>never;
    
      /**
* 
*  number FileSystemManager.saveFileSync(string tempFilePath, string filePath)
*  
*  FileSystemManager.saveFile 的同步版本
*  
*/
      saveFileSync: ( tempFilePath: string , filePath: string )=>number;
    
      /**
* 
*  FileSystemManager.getSavedFileList(Object object)
*  
*  获取该小程序下已保存的本地缓存文件列表
*  
*/
      getSavedFileList: ( object: FileSystemManagerGetSavedFileListObjectField )=>never;
    
      /**
* 
*  FileSystemManager.removeSavedFile(Object object)
*  
*  删除该小程序下已保存的本地缓存文件
*  
*/
      removeSavedFile: ( object: FileSystemManagerRemoveSavedFileObjectField )=>never;
    
      /**
* 
*  FileSystemManager.copyFile(Object object)
*  
*  复制文件
*  
*/
      copyFile: ( object: FileSystemManagerCopyFileObjectField )=>never;
    
      /**
* 
*  FileSystemManager.copyFileSync(string srcPath, string destPath)
*  
*  FileSystemManager.copyFile 的同步版本
*  
*/
      copyFileSync: ( srcPath: string , destPath: string )=>never;
    
      /**
* 
*  FileSystemManager.getFileInfo(Object object)
*  
*  获取该小程序下的 本地临时文件 或 本地缓存文件 信息
*  
*/
      getFileInfo: ( object: FileSystemManagerGetFileInfoObjectField )=>never;
    
      /**
* 
*  FileSystemManager.mkdir(Object object)
*  
*  创建目录
*  
*/
      mkdir: ( object: FileSystemManagerMkdirObjectField )=>never;
    
      /**
* 
*  FileSystemManager.mkdirSync(string dirPath, boolean recursive)
*  
*  FileSystemManager.mkdir 的同步版本
*  
*/
      mkdirSync: ( dirPath: string , recursive: boolean )=>never;
    
      /**
* 
*  FileSystemManager.readFile(Object object)
*  
*  读取本地文件内容
*  
*/
      readFile: ( object: FileSystemManagerReadFileObjectField )=>never;
    
      /**
* 
*  string|ArrayBuffer FileSystemManager.readFileSync(string filePath, string encoding)
*  
*  FileSystemManager.readFile 的同步版本
*  
*/
      readFileSync: ( filePath: string , encoding: string )=>string|ArrayBuffer;
    
      /**
* 
*  FileSystemManager.readdir(Object object)
*  
*  读取目录内文件列表
*  
*/
      readdir: ( object: FileSystemManagerReaddirObjectField )=>never;
    
      /**
* 
*  Array.<string> FileSystemManager.readdirSync(string dirPath)
*  
*  FileSystemManager.readdir 的同步版本
*  
*/
      readdirSync: ( dirPath: string )=>Array<string>;
    
      /**
* 
*  FileSystemManager.rename(Object object)
*  
*  重命名文件。可以把文件从 oldPath 移动到 newPath
*  
*/
      rename: ( object: FileSystemManagerRenameObjectField )=>never;
    
      /**
* 
*  FileSystemManager.renameSync(string oldPath, string newPath)
*  
*  FileSystemManager.rename 的同步版本
*  
*/
      renameSync: ( oldPath: string , newPath: string )=>never;
    
      /**
* 
*  FileSystemManager.rmdir(Object object)
*  
*  删除目录
*  
*/
      rmdir: ( object: FileSystemManagerRmdirObjectField )=>never;
    
      /**
* 
*  FileSystemManager.rmdirSync(string dirPath, boolean recursive)
*  
*  FileSystemManager.rmdir 的同步版本
*  
*/
      rmdirSync: ( dirPath: string , recursive: boolean )=>never;
    
      /**
* 
*  FileSystemManager.stat(Object object)
*  
*  获取文件 Stats 对象
*  
*/
      stat: ( object: FileSystemManagerStatObjectField )=>never;
    
      /**
* 
*  Stats|Object FileSystemManager.statSync(string path, boolean recursive)
*  
*  FileSystemManager.stat 的同步版本
*  
*/
      statSync: ( path: string , recursive: boolean )=>Stats|Object;
    
      /**
* 
*  FileSystemManager.unlink(Object object)
*  
*  删除文件
*  
*/
      unlink: ( object: FileSystemManagerUnlinkObjectField )=>never;
    
      /**
* 
*  FileSystemManager.unlinkSync(string filePath)
*  
*  FileSystemManager.unlink 的同步版本
*  
*/
      unlinkSync: ( filePath: string )=>never;
    
      /**
* 
*  FileSystemManager.unzip(Object object)
*  
*  解压文件
*  
*/
      unzip: ( object: FileSystemManagerUnzipObjectField )=>never;
    
      /**
* 
*  FileSystemManager.writeFile(Object object)
*  
*  写文件
*  
*/
      writeFile: ( object: FileSystemManagerWriteFileObjectField )=>never;
    
      /**
* 
*  FileSystemManager.writeFileSync(string filePath, string|ArrayBuffer data, string encoding)
*  
*  FileSystemManager.writeFile 的同步版本
*  
*/
      writeFileSync: ( filePath: string , data: string|ArrayBuffer , encoding: string )=>never;
    
  }
  
  declare interface Stats {
    
      /**
* 
*  boolean Stats.isDirectory()
*  
*  判断当前文件是否一个目录
*  
*/
      isDirectory: ()=>boolean;
    
      /**
* 
*  boolean Stats.isFile()
*  
*  判断当前文件是否一个普通文件
*  
*/
      isFile: ()=>boolean;
    
  }
  
  declare interface Worker {
    
      /**
* 
*  Worker.postMessage(Object message)
*  
*  向主线程/Worker 线程发送的消息。
*  
*/
      postMessage: ( message: object )=>never;
    
      /**
* 
*  Worker.onMessage(function callback)
*  
*  监听主线程/Worker 线程向当前线程发送的消息的事件。
*  
*/
      onMessage: ( callback: ( res: WorkerOnMessageCallbackResField )=>never )=>never;
    
      /**
* 
*  Worker.terminate()
*  
*  结束当前 Worker 线程。仅限在主线程 worker 对象上调用。
*  
*/
      terminate: ()=>never;
    
  }
  
  declare interface IntersectionObserver {
    
      /**
* 
*  IntersectionObserver.relativeTo(string selector, Object margins)
*  
*  使用选择器指定一个节点，作为参照区域之一。
*  
*/
      relativeTo: ( selector: string , margins: IntersectionObserverRelativeToMarginsField )=>never;
    
      /**
* 
*  IntersectionObserver.relativeToViewport(Object margins)
*  
*  指定页面显示区域作为参照区域之一
*  
*/
      relativeToViewport: ( margins: IntersectionObserverRelativeToViewportMarginsField )=>never;
    
      /**
* 
*  IntersectionObserver.observe(string targetSelector, function callback)
*  
*  指定目标节点并开始监听相交状态变化情况
*  
*/
      observe: ( targetSelector: string , callback: ( res: IntersectionObserverObserveCallbackResField )=>never )=>never;
    
      /**
* 
*  IntersectionObserver.disconnect()
*  
*  停止监听。回调函数将不再触发
*  
*/
      disconnect: ()=>never;
    
  }
  
  declare interface NodesRef {
    
      /**
* 
*  NodesRef.fields(Object fields)
*  
*  获取节点的相关信息。需要获取的字段在fields中指定。返回值是 nodesRef 对应的 selectorQuery
*  
*/
      fields: ( fields: NodesRefFieldsFieldsField )=>never;
    
      /**
* 
*  SelectorQuery NodesRef.boundingClientRect(function callback)
*  
*  添加节点的布局位置的查询请求。相对于显示区域，以像素为单位。其功能类似于 DOM 的 getBoundingClientRect。返回 NodesRef 对应的 SelectorQuery。
*  
*/
      boundingClientRect: ( callback: ( res: NodesRefBoundingClientRectCallbackResField )=>never )=>SelectorQuery;
    
      /**
* 
*  SelectorQuery NodesRef.scrollOffset(function callback)
*  
*  添加节点的滚动位置查询请求。以像素为单位。节点必须是 scroll-view 或者 viewport，返回 NodesRef 对应的 SelectorQuery。
*  
*/
      scrollOffset: ( callback: ( res: NodesRefScrollOffsetCallbackResField )=>never )=>SelectorQuery;
    
      /**
* 
*  SelectorQuery NodesRef.context(function callback)
*  
* 基础库 2.4.2 开始支持，低版本需做兼容处理。
* 
*  添加节点的 Context 对象查询请求。目前支持 VideoContext、CanvasContext、LivePlayerContext 和 MapContext 的获取。
*  
*/
      context: ( callback: ( res: NodesRefContextCallbackResField )=>never )=>SelectorQuery;
    
  }
  
  declare interface SelectorQuery {
    
      /**
* 
*  SelectorQuery SelectorQuery.in(Component component)
*  
* 基础库 1.6.0 开始支持，低版本需做兼容处理。
* 
*  将选择器的选取范围更改为自定义组件 component 内。（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点）。
*  
*/
      in: ( component: Component )=>SelectorQuery;
    
      /**
* 
*  NodesRef SelectorQuery.select(string selector)
*  
*  在当前页面下选择第一个匹配选择器 selector 的节点。返回一个 NodesRef 对象实例，可以用于获取节点信息。
*  
*/
      select: ( selector: string )=>NodesRef;
    
      /**
* 
*  NodesRef SelectorQuery.selectAll(string selector)
*  
*  在当前页面下选择匹配选择器 selector 的所有节点。
*  
*/
      selectAll: ( selector: string )=>NodesRef;
    
      /**
* 
*  NodesRef SelectorQuery.selectViewport()
*  
*  选择显示区域。可用于获取显示区域的尺寸、滚动位置等信息。
*  
*/
      selectViewport: ()=>NodesRef;
    
      /**
* 
*  NodesRef SelectorQuery.exec(function callback)
*  
*  执行所有的请求。请求结果按请求次序构成数组，在callback的第一个参数中返回。
*  
*/
      exec: ( callback: ()=>never )=>NodesRef;
    
  }
  
  declare interface reswxReturns {
    
    /**
* 手机品牌
*/
    brand: string;
    
    /**
* 手机型号
*/
    model: string;
    
    /**
* 设备像素比
*/
    pixelRatio: number;
    
    /**
* 屏幕宽度
*/
    screenWidth: number;
    
    /**
* 屏幕高度
*/
    screenHeight: number;
    
    /**
* 可使用窗口宽度
*/
    windowWidth: number;
    
    /**
* 可使用窗口高度
*/
    windowHeight: number;
    
    /**
* 状态栏的高度
*/
    statusBarHeight: number;
    
    /**
* 微信设置的语言
*/
    language: string;
    
    /**
* 微信版本号
*/
    version: string;
    
    /**
* 操作系统版本
*/
    system: string;
    
    /**
* 客户端平台
*/
    platform: string;
    
    /**
* 用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位 px。
*/
    fontSizeSetting: number;
    
    /**
* 客户端基础库版本
*/
    SDKVersion: string;
    
    /**
* (仅Android小游戏) 性能等级，-2 或 0：该设备无法运行小游戏，-1：性能未知，>=1 设备性能值，该值越高，设备性能越好 (目前设备最高不到50)
*/
    benchmarkLevel: number;
    
  }
  
  declare interface wxGetSystemInfoObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxOnAppShowCallbackResField {
    
      object: wxOnAppShowCallbackResFieldObjectField;
      
  }
  
  declare interface wxSetEnableDebugObjectField {
    
    /**
* 是否打开调试
*/
    enableDebug: boolean;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxGetLogManagerObjectField {
    
    /**
* 取值为0/1，取值为0表示是否会把 App、Page 的生命周期函数和 wx 命名空间下的函数调用写入日志，取值为1则不会。默认值是 0
*/
    level?: number;
    
  }
  
  declare interface wxNavigateBackObjectField {
    
    /**
* 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
*/
    delta: number;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxSwitchTabObjectField {
    
    /**
* 需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数。
*/
    url: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxNavigateToObjectField {
    
    /**
* 需要跳转的应用内非 tabBar 的页面的路径, 路径后可以带参数。参数与路径之间使用 ? 分隔，参数键与参数值用 = 相连，不同参数用 & 分隔；如 'path?key=value&key2=value2'
*/
    url: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxReLaunchObjectField {
    
    /**
* 需要跳转的应用内页面路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'，如果跳转的页面路径是 tabBar 页面则不能带参数
*/
    url: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxRedirectToObjectField {
    
    /**
* 需要跳转的应用内非 tabBar 的页面的路径, 路径后可以带参数。参数与路径之间使用 ? 分隔，参数键与参数值用 = 相连，不同参数用 & 分隔；如 'path?key=value&key2=value2'
*/
    url: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxShowActionSheetObjectField {
    
    /**
* 按钮的文字数组，数组长度最大为 6
*/
    itemList: Array<string>;
    
    /**
* 按钮的文字颜色
*/
    itemColor?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxHideLoadingObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxShowLoadingObjectField {
    
    /**
* 提示的内容
*/
    title: string;
    
    /**
* 是否显示透明蒙层，防止触摸穿透
*/
    mask?: boolean;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxHideToastObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxShowToastObjectField {
    
    /**
* 提示的内容
*/
    title: string;
    
    /**
* 图标
*/
    icon?: string;
    
    /**
* 自定义图标的本地路径，image 的优先级高于 icon
*/
    image?: string;
    
    /**
* 提示的延迟时间
*/
    duration?: number;
    
    /**
* 是否显示透明蒙层，防止触摸穿透
*/
    mask?: boolean;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxShowModalObjectField {
    
    /**
* 提示的标题
*/
    title: string;
    
    /**
* 提示的内容
*/
    content: string;
    
    /**
* 是否显示取消按钮
*/
    showCancel?: boolean;
    
    /**
* 取消按钮的文字，最多 4 个字符
*/
    cancelText?: string;
    
    /**
* 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串
*/
    cancelColor?: string;
    
    /**
* 确认按钮的文字，最多 4 个字符
*/
    confirmText?: string;
    
    /**
* 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
*/
    confirmColor?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxSetNavigationBarColorObjectField {
    
    /**
* 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000
*/
    frontColor: string;
    
    /**
* 背景颜色值，有效值为十六进制颜色
*/
    backgroundColor: string;
    
      animation: wxSetNavigationBarColorObjectFieldAnimationField;
      
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxHideNavigationBarLoadingObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxShowNavigationBarLoadingObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxSetNavigationBarTitleObjectField {
    
    /**
* 页面标题
*/
    title: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxSetBackgroundTextStyleObjectField {
    
    /**
* 下拉背景字体、loading 图的样式。
*/
    textStyle: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxSetBackgroundColorObjectField {
    
    /**
* 窗口的背景色，必须为十六进制颜色值
*/
    backgroundColor?: string;
    
    /**
* 顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持
*/
    backgroundColorTop?: string;
    
    /**
* 底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持
*/
    backgroundColorBottom?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxSetTabBarItemObjectField {
    
    /**
* tabBar 的哪一项，从左边算起
*/
    index: number;
    
    /**
* tab 上的按钮文字
*/
    text?: string;
    
    /**
* 图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，不支持网络图片
*/
    iconPath?: string;
    
    /**
* 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效
*/
    selectedIconPath?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxSetTabBarStyleObjectField {
    
    /**
* tab 上的文字默认颜色，HexColor
*/
    color: string;
    
    /**
* tab 上的文字选中时的颜色，HexColor
*/
    selectedColor: string;
    
    /**
* tab 的背景色，HexColor
*/
    backgroundColor: string;
    
    /**
* tabBar上边框的颜色， 仅支持 black/white
*/
    borderStyle: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxHideTabBarObjectField {
    
    /**
* 是否需要动画效果
*/
    animation?: boolean;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxShowTabBarObjectField {
    
    /**
* 是否需要动画效果
*/
    animation?: boolean;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxHideTabBarRedDotObjectField {
    
    /**
* tabBar 的哪一项，从左边算起
*/
    index: number;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxShowTabBarRedDotObjectField {
    
    /**
* tabBar 的哪一项，从左边算起
*/
    index: number;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxRemoveTabBarBadgeObjectField {
    
    /**
* tabBar 的哪一项，从左边算起
*/
    index: number;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxSetTabBarBadgeObjectField {
    
    /**
* tabBar 的哪一项，从左边算起
*/
    index: number;
    
    /**
* 显示的文本，超过 4 个字符则显示成 ...
*/
    text: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxLoadFontFaceObjectField {
    
    /**
* 定义的字体名称
*/
    family: string;
    
    /**
* 字体资源的地址。建议格式为 TTF 和 WOFF，WOFF2 在低版本的iOS上会不兼容。
*/
    source: string;
    
      desc: wxLoadFontFaceObjectFieldDescField;
      
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxStopPullDownRefreshObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxStartPullDownRefreshObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxPageScrollToObjectField {
    
    /**
* 滚动到页面的目标位置，单位 px
*/
    scrollTop: number;
    
    /**
* 滚动动画的时长，单位 ms
*/
    duration?: number;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxCreateAnimationObjectField {
    
    /**
* 动画持续时间，单位 ms
*/
    duration?: number;
    
    /**
* 动画的效果
*/
    timingFunction?: string;
    
    /**
* 动画延迟时间，单位 ms
*/
    delay?: number;
    
    
    transformOrigin?: string;
    
  }
  
  declare interface wxSetTopBarTextObjectField {
    
      text: object
      
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxOnWindowResizeCallbackResField {
    
      size: wxOnWindowResizeCallbackResFieldSizeField;
      
  }
  
  declare interface wxRequestObjectField {
    
    /**
* 开发者服务器接口地址
*/
    url: string;
    
    /**
* 请求的参数
*/
    data?: string|object|ArrayBuffer;
    
      header: object
      
    /**
* HTTP 请求方法
*/
    method?: string;
    
    /**
* 返回的数据格式
*/
    dataType?: string;
    
    /**
* 响应的数据类型
*/
    responseType?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxDownloadFileObjectField {
    
    /**
* 下载资源的 url
*/
    url: string;
    
      header: object
      
    /**
* 指定文件下载后存储的路径
*/
    filePath?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxUploadFileObjectField {
    
    /**
* 开发者服务器地址
*/
    url: string;
    
    /**
* 要上传文件资源的路径
*/
    filePath: string;
    
    /**
* 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容
*/
    name: string;
    
      header: object
      
      formData: object
      
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxOnSocketMessageCallbackResField {
    
    /**
* 服务器返回的消息
*/
    data: string|ArrayBuffer;
    
  }
  
  declare interface wxOnSocketOpenCallbackResField {
    
      header: object
      
  }
  
  declare interface wxSendSocketMessageObjectField {
    
    /**
* 需要发送的内容
*/
    data: string|ArrayBuffer;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxCloseSocketObjectField {
    
    /**
* 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。
*/
    code?: number;
    
    /**
* 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。
*/
    reason?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxConnectSocketObjectField {
    
    /**
* 开发者服务器 wss 接口地址
*/
    url: string;
    
      header: object
      
    /**
* 子协议数组
*/
    protocols?: Array<string>;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxOnLocalServiceResolveFailCallbackResField {
    
    /**
* 服务的类型
*/
    serviceType: string;
    
    /**
* 服务的名称
*/
    serviceName: string;
    
  }
  
  declare interface wxOnLocalServiceLostCallbackResField {
    
    /**
* 服务的类型
*/
    serviceType: string;
    
    /**
* 服务的名称
*/
    serviceName: string;
    
  }
  
  declare interface wxOnLocalServiceFoundCallbackResField {
    
    /**
* 服务的类型
*/
    serviceType: string;
    
    /**
* 服务的名称
*/
    serviceName: string;
    
    /**
* 服务的 ip 地址
*/
    ip: string;
    
    /**
* 服务的端口
*/
    port: number;
    
  }
  
  declare interface wxStopLocalServiceDiscoveryObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxStartLocalServiceDiscoveryObjectField {
    
    /**
* 要搜索的服务类型
*/
    serviceType: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface objectwxReturns {
    
    /**
* 当前 storage 中所有的 key
*/
    keys: Array<string>;
    
    /**
* 当前占用的空间大小, 单位 KB
*/
    currentSize: number;
    
    /**
* 限制的空间大小，单位 KB
*/
    limitSize: number;
    
  }
  
  declare interface wxGetStorageInfoObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxClearStorageObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxRemoveStorageObjectField {
    
    /**
* 本地缓存中指定的 key
*/
    key: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxSetStorageObjectField {
    
    /**
* 本地缓存中指定的 key
*/
    key: string;
    
    /**
* 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象。
*/
    data: any;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxGetStorageObjectField {
    
    /**
* 本地缓存中指定的 key
*/
    key: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxCompressImageObjectField {
    
    /**
* 图片路径，图片的路径，可以是相对路径、临时文件路径、存储文件路径
*/
    src: string;
    
    /**
* 压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效）。
*/
    quality?: number;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxSaveImageToPhotosAlbumObjectField {
    
    /**
* 图片文件路径，可以是临时文件路径或永久文件路径，不支持网络图片路径
*/
    filePath: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxGetImageInfoObjectField {
    
    /**
* 图片的路径，可以是相对路径、临时文件路径、存储文件路径、网络图片路径
*/
    src: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxPreviewImageObjectField {
    
    /**
* 需要预览的图片链接列表。2.2.3 起支持云文件ID。
*/
    urls: Array<string>;
    
    /**
* 当前显示图片的链接
*/
    current?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxChooseImageObjectField {
    
    /**
* 最多可以选择的图片张数
*/
    count?: number;
    
    /**
* 所选的图片的尺寸
*/
    sizeType?: Array<string>;
    
    /**
* 选择图片的来源
*/
    sourceType?: Array<string>;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxSaveVideoToPhotosAlbumObjectField {
    
    /**
* 视频文件路径，可以是临时文件路径也可以是永久文件路径
*/
    filePath: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxChooseVideoObjectField {
    
    /**
* 视频选择的来源
*/
    sourceType?: Array<string>;
    
    /**
* 是否压缩所选择的视频文件
*/
    compressed?: boolean;
    
    /**
* 拍摄视频最长拍摄时间，单位秒
*/
    maxDuration?: number;
    
    /**
* 默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效
*/
    camera?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxStopVoiceObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxPauseVoiceObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxPlayVoiceObjectField {
    
    /**
* 需要播放的语音文件的文件路径
*/
    filePath: string;
    
    /**
* 指定录音时长，到达指定的录音时长后会自动停止录音，单位：秒
*/
    duration?: number;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxSetInnerAudioOptionObjectField {
    
    /**
* 是否与其他音频混播，设置为 true 之后，不会终止其他应用或微信内的音乐
*/
    mixWithOther?: boolean;
    
    /**
* （仅在 iOS 生效）是否遵循静音开关，设置为 false 之后，即使是在静音模式下，也能播放声音
*/
    obeyMuteSwitch?: boolean;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxGetAvailableAudioSourcesObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxStopBackgroundAudioObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxSeekBackgroundAudioObjectField {
    
    /**
* 音乐位置，单位：秒
*/
    position: number;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxPauseBackgroundAudioObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxPlayBackgroundAudioObjectField {
    
    /**
* 音乐链接，目前支持的格式有 m4a, aac, mp3, wav
*/
    dataUrl: string;
    
    /**
* 音乐标题
*/
    title?: string;
    
    /**
* 封面URL
*/
    coverImgUrl?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxGetBackgroundAudioPlayerStateObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxStartRecordObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxOpenLocationObjectField {
    
    /**
* 纬度，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系
*/
    latitude: number;
    
    /**
* 经度，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系
*/
    longitude: number;
    
    /**
* 缩放比例，范围5~18
*/
    scale?: number;
    
    /**
* 位置名
*/
    name?: string;
    
    /**
* 地址的详细说明
*/
    address?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxGetLocationObjectField {
    
    /**
* wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
*/
    type?: string;
    
    /**
* 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度
*/
    altitude?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxChooseLocationObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxUpdateShareMenuObjectField {
    
    /**
* 是否使用带 shareTicket 的转发详情
*/
    withShareTicket?: boolean;
    
    /**
* 是否是动态消息，详见动态消息
*/
    isUpdatableMessage?: boolean;
    
    /**
* 动态消息的 activityId。通过 createActivityId 接口获取
*/
    activityId?: string;
    
      templateInfo: wxUpdateShareMenuObjectFieldTemplateInfoField;
      
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxShowShareMenuObjectField {
    
    /**
* 是否使用带 shareTicket 的转发详情
*/
    withShareTicket?: boolean;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxHideShareMenuObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxGetShareInfoObjectField {
    
    /**
* shareTicket
*/
    shareTicket: string;
    
    /**
* 超时时间，单位 ms
*/
    timeout?: number;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxCanvasToTempFilePathObjectField {
    
    /**
* 指定的画布区域的左上角横坐标
*/
    x?: number;
    
    /**
* 指定的画布区域的左上角纵坐标
*/
    y?: number;
    
    /**
* 指定的画布区域的宽度
*/
    width?: number;
    
    /**
* 指定的画布区域的高度
*/
    height?: number;
    
    /**
* 输出的图片的宽度
*/
    destWidth?: number;
    
    /**
* 输出的图片的高度
*/
    destHeight?: number;
    
    /**
* 画布标识，传入 <canvas> 组件的 canvas-id
*/
    canvasId: string;
    
    /**
* 目标文件的类型
*/
    fileType?: string;
    
    /**
* 图片的质量，目前仅对 jpg 有效。取值范围为 (0, 1]，不在范围内时当作 1.0 处理。
*/
    quality: number;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxCanvasPutImageDataObjectField {
    
    /**
* 画布标识，传入 <canvas> 组件的 canvas-id 属性。
*/
    canvasId: string;
    
    /**
* 图像像素点数据，一维数组，每四项表示一个像素点的 rgba
*/
    data: Uint8ClampedArray;
    
    /**
* 源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量）
*/
    x: number;
    
    /**
* 源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量）
*/
    y: number;
    
    /**
* 源图像数据矩形区域的宽度
*/
    width: number;
    
    /**
* 源图像数据矩形区域的高度
*/
    height: number;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxCanvasGetImageDataObjectField {
    
    /**
* 画布标识，传入 <canvas> 组件的 canvas-id 属性。
*/
    canvasId: string;
    
    /**
* 将要被提取的图像数据矩形区域的左上角横坐标
*/
    x: number;
    
    /**
* 将要被提取的图像数据矩形区域的左上角纵坐标
*/
    y: number;
    
    /**
* 将要被提取的图像数据矩形区域的宽度
*/
    width: number;
    
    /**
* 将要被提取的图像数据矩形区域的高度
*/
    height: number;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxGetFileInfoObjectField {
    
    /**
* 本地文件路径
*/
    filePath: string;
    
    /**
* 计算文件摘要的算法
*/
    digestAlgorithm?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxRemoveSavedFileObjectField {
    
    /**
* 需要删除的文件路径
*/
    filePath: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxGetSavedFileInfoObjectField {
    
    /**
* 文件路径
*/
    filePath: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxGetSavedFileListObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxOpenDocumentObjectField {
    
    /**
* 文件路径，可通过 downloadFile 获得
*/
    filePath: string;
    
    /**
* 文件类型，指定文件类型打开文件
*/
    fileType?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxSaveFileObjectField {
    
    /**
* 需要保存的文件的临时路径
*/
    tempFilePath: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxCheckSessionObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxLoginObjectField {
    
    /**
* 超时时间，单位ms
*/
    timeout?: number;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxNavigateToMiniProgramObjectField {
    
    /**
* 要打开的小程序 appId
*/
    appId: string;
    
    /**
* 打开的页面路径，如果为空则打开首页
*/
    path?: string;
    
      extraData: object
      
    /**
* 要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。
*/
    envVersion?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxNavigateBackMiniProgramObjectField {
    
      extraData: object
      
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxGetUserInfoObjectField {
    
    /**
* 是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。
*/
    withCredentials?: boolean;
    
    /**
* 显示用户信息的语言
*/
    lang?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxReportAnalyticsDataField {
    
    /**
* 配置中的字段名
*/
    key: string;
    
    /**
* 上报的数据
*/
    value: Any;
    
  }
  
  declare interface wxRequestPaymentObjectField {
    
    /**
* 时间戳，从 1970 年 1 月 1 日 00:00:00 至今的秒数，即当前的时间
*/
    timeStamp: string;
    
    /**
* 随机字符串，长度为32个字符以下
*/
    nonceStr: string;
    
    /**
* 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=***
*/
    package: string;
    
    /**
* 签名算法
*/
    signType?: string;
    
    /**
* 签名，具体签名方案参见 小程序支付接口文档
*/
    paySign: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxAuthorizeObjectField {
    
    /**
* 需要获取权限的 scope，详见 scope 列表
*/
    scope: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxOpenSettingObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxGetSettingObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxChooseAddressObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxOpenCardObjectField {
    
    /**
* 需要打开的卡券列表
*/
    cardList: Array<Object>;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxAddCardObjectField {
    
    /**
* 需要添加的卡券列表
*/
    cardList: Array<Object>;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxChooseInvoiceTitleObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxChooseInvoiceObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxStartSoterAuthenticationObjectField {
    
    /**
* 请求使用的可接受的生物认证方式
*/
    requestAuthModes: Array<string>;
    
    /**
* 挑战因子。挑战因子为调用者为此次生物鉴权准备的用于签名的字符串关键识别信息，将作为 resultJSON 的一部分，供调用者识别本次请求。例如：如果场景为请求用户对某订单进行授权确认，则可以将订单号填入此参数。
*/
    challenge: string;
    
    /**
* 验证描述，即识别过程中显示在界面上的对话框提示内容
*/
    authContent?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxCheckIsSupportSoterAuthenticationObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxCheckIsSoterEnrolledInDeviceObjectField {
    
    /**
* 认证方式
*/
    checkAuthMode: Array<string>;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxGetWeRunDataObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxOnBeaconServiceChangeCallbackResField {
    
    /**
* 服务目前是否可用
*/
    available: boolean;
    
    /**
* 目前是否处于搜索状态
*/
    discovering: boolean;
    
  }
  
  declare interface wxOnBeaconUpdateCallbackResField {
    
    /**
* 当前搜寻到的所有 iBeacon 设备列表
*/
    beacons: Array<IBeaconInfo>;
    
  }
  
  declare interface wxGetBeaconsObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxStopBeaconDiscoveryObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxStartBeaconDiscoveryObjectField {
    
    /**
* iBeacon 设备广播的 uuid 列表
*/
    uuids: Array<string>;
    
    /**
* 是否校验蓝牙开关，仅在 iOS 下有效
*/
    ignoreBluetoothAvailable?: boolean;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxStopWifiObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxStartWifiObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxSetWifiListObjectField {
    
    /**
* 提供预设的 Wi-Fi 信息列表
*/
    wifiList: Array<Object>;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxOnWifiConnectedCallbackResField {
    
    /**
* Wi-Fi 信息
*/
    wifi: WifiInfo;
    
  }
  
  declare interface wxOnGetWifiListCallbackResField {
    
    /**
* Wi-Fi 列表数据
*/
    wifiList: Array<WifiInfo>;
    
  }
  
  declare interface wxGetWifiListObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxGetConnectedWifiObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxConnectWifiObjectField {
    
    /**
* Wi-Fi 设备 SSID
*/
    SSID: string;
    
    /**
* Wi-Fi 设备 BSSID
*/
    BSSID?: string;
    
    /**
* Wi-Fi 设备密码
*/
    password: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxOnAccelerometerChangeCallbackResField {
    
    /**
* X 轴
*/
    x: number;
    
    /**
* Y 轴
*/
    y: number;
    
    /**
* Z 轴
*/
    z: number;
    
  }
  
  declare interface wxStopAccelerometerObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxStartAccelerometerObjectField {
    
    /**
* 监听加速度数据回调函数的执行频率
*/
    interval?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface reswxReturns {
    
    /**
* 设备电量，范围 1 - 100
*/
    level: string;
    
    /**
* 是否正在充电中
*/
    isCharging: boolean;
    
  }
  
  declare interface wxGetBatteryInfoObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxSetClipboardDataObjectField {
    
    /**
* 剪贴板的内容
*/
    data: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxGetClipboardDataObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxOnCompassChangeCallbackResField {
    
    /**
* 面对的方向度数
*/
    direction: number;
    
    /**
* 精度
*/
    accuracy: number|string;
    
  }
  
  declare interface wxStopCompassObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxStartCompassObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxAddPhoneContactObjectField {
    
    /**
* 名字
*/
    firstName: string;
    
    /**
* 头像本地文件路径
*/
    photoFilePath?: string;
    
    /**
* 昵称
*/
    nickName?: string;
    
    /**
* 姓氏
*/
    lastName?: string;
    
    /**
* 中间名
*/
    middleName?: string;
    
    /**
* 备注
*/
    remark?: string;
    
    /**
* 手机号
*/
    mobilePhoneNumber?: string;
    
    /**
* 微信号
*/
    weChatNumber?: string;
    
    /**
* 联系地址国家
*/
    addressCountry?: string;
    
    /**
* 联系地址省份
*/
    addressState?: string;
    
    /**
* 联系地址城市
*/
    addressCity?: string;
    
    /**
* 联系地址街道
*/
    addressStreet?: string;
    
    /**
* 联系地址邮政编码
*/
    addressPostalCode?: string;
    
    /**
* 公司
*/
    organization?: string;
    
    /**
* 职位
*/
    title?: string;
    
    /**
* 工作传真
*/
    workFaxNumber?: string;
    
    /**
* 工作电话
*/
    workPhoneNumber?: string;
    
    /**
* 公司电话
*/
    hostNumber?: string;
    
    /**
* 电子邮件
*/
    email?: string;
    
    /**
* 网站
*/
    url?: string;
    
    /**
* 工作地址国家
*/
    workAddressCountry?: string;
    
    /**
* 工作地址省份
*/
    workAddressState?: string;
    
    /**
* 工作地址城市
*/
    workAddressCity?: string;
    
    /**
* 工作地址街道
*/
    workAddressStreet?: string;
    
    /**
* 工作地址邮政编码
*/
    workAddressPostalCode?: string;
    
    /**
* 住宅传真
*/
    homeFaxNumber?: string;
    
    /**
* 住宅电话
*/
    homePhoneNumber?: string;
    
    /**
* 住宅地址国家
*/
    homeAddressCountry?: string;
    
    /**
* 住宅地址省份
*/
    homeAddressState?: string;
    
    /**
* 住宅地址城市
*/
    homeAddressCity?: string;
    
    /**
* 住宅地址街道
*/
    homeAddressStreet?: string;
    
    /**
* 住宅地址邮政编码
*/
    homeAddressPostalCode?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxOnGyroscopeChangeCallbackResField {
    
    /**
* x 轴的角速度
*/
    x: number;
    
    /**
* y 轴的角速度
*/
    y: number;
    
    /**
* z 轴的角速度
*/
    z: number;
    
  }
  
  declare interface wxStopGyroscopeObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxStartGyroscopeObjectField {
    
    /**
* 监听陀螺仪数据回调函数的执行频率
*/
    interval?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxOnDeviceMotionChangeCallbackResField {
    
    /**
* 当 手机坐标 X/Y 和 地球 X/Y 重合时，绕着 Z 轴转动的夹角为 alpha，范围值为 [0, 2*PI)。逆时针转动为正。
*/
    alpha: number;
    
    /**
* 当手机坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 beta。范围值为 [-1*PI, PI) 。顶部朝着地球表面转动为正。也有可能朝着用户为正。
*/
    beta: number;
    
    /**
* 当手机 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 gamma。范围值为 [-1*PI/2, PI/2)。右边朝着地球表面转动为正。
*/
    gamma: number;
    
  }
  
  declare interface wxStopDeviceMotionListeningObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxStartDeviceMotionListeningObjectField {
    
    /**
* 监听设备方向的变化回调函数的执行频率
*/
    interval?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxOnNetworkStatusChangeCallbackResField {
    
    /**
* 当前是否有网络链接
*/
    isConnected: boolean;
    
    /**
* 网络类型
*/
    networkType: string;
    
  }
  
  declare interface wxGetNetworkTypeObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxMakePhoneCallObjectField {
    
    /**
* 需要拨打的电话号码
*/
    phoneNumber: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxScanCodeObjectField {
    
    /**
* 是否只能从相机扫码，不允许从相册选择图片
*/
    onlyFromCamera?: boolean;
    
    /**
* 扫码类型
*/
    scanType?: Array<string>;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxVibrateLongObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxVibrateShortObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxOnMemoryWarningCallbackResField {
    
    /**
* 内存告警等级，只有 Android 才有，对应系统宏定义
*/
    level: number;
    
  }
  
  declare interface wxWriteBLECharacteristicValueObjectField {
    
    /**
* 蓝牙设备 id
*/
    deviceId: string;
    
    /**
* 蓝牙特征值对应服务的 uuid
*/
    serviceId: string;
    
    /**
* 蓝牙特征值的 uuid
*/
    characteristicId: string;
    
    /**
* 蓝牙设备特征值对应的二进制值
*/
    value: ArrayBuffer;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxReadBLECharacteristicValueObjectField {
    
    /**
* 蓝牙设备 id
*/
    deviceId: string;
    
    /**
* 蓝牙特征值对应服务的 uuid
*/
    serviceId: string;
    
    /**
* 蓝牙特征值的 uuid
*/
    characteristicId: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxOnBLEConnectionStateChangeCallbackResField {
    
    /**
* 蓝牙设备ID
*/
    deviceId: string;
    
    /**
* 是否处于已连接状态
*/
    connected: boolean;
    
  }
  
  declare interface wxOnBLECharacteristicValueChangeCallbackResField {
    
    /**
* 蓝牙设备 id
*/
    deviceId: string;
    
    /**
* 蓝牙特征值对应服务的 uuid
*/
    serviceId: string;
    
    /**
* 蓝牙特征值的 uuid
*/
    characteristicId: string;
    
    /**
* 特征值最新的值
*/
    value: ArrayBuffer;
    
  }
  
  declare interface wxNotifyBLECharacteristicValueChangeObjectField {
    
    /**
* 蓝牙设备 id
*/
    deviceId: string;
    
    /**
* 蓝牙特征值对应服务的 uuid
*/
    serviceId: string;
    
    /**
* 蓝牙特征值的 uuid
*/
    characteristicId: string;
    
    /**
* 是否启用 notify
*/
    state: boolean;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxGetBLEDeviceServicesObjectField {
    
    /**
* 蓝牙设备 id
*/
    deviceId: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxGetBLEDeviceCharacteristicsObjectField {
    
    /**
* 蓝牙设备 id
*/
    deviceId: string;
    
    /**
* 蓝牙服务 uuid，需要使用 getBLEDeviceServices 获取
*/
    serviceId: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxCreateBLEConnectionObjectField {
    
    /**
* 用于区分设备的 id
*/
    deviceId: string;
    
    /**
* 超时时间，单位ms，不填表示不会超时
*/
    timeout?: number;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxCloseBLEConnectionObjectField {
    
    /**
* 用于区分设备的 id
*/
    deviceId: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxStopBluetoothDevicesDiscoveryObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxStartBluetoothDevicesDiscoveryObjectField {
    
    /**
* 要搜索但蓝牙设备主 service 的 uuid 列表。某些蓝牙设备会广播自己的主 service 的 uuid。如果设置此参数，则只搜索广播包有对应 uuid 的主服务的蓝牙设备。建议主要通过该参数过滤掉周边不需要处理的其他蓝牙设备。
*/
    services?: Array<string>;
    
    /**
* 是否允许重复上报同一设备。如果允许重复上报，则 wx.onBlueToothDeviceFound 方法会多次上报同一设备，但是 RSSI 值会有不同。
*/
    allowDuplicatesKey?: boolean;
    
    /**
* 上报设备的间隔。0 表示找到新设备立即上报，其他数值根据传入的间隔上报。
*/
    interval?: number;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxOpenBluetoothAdapterObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxOnBluetoothDeviceFoundCallbackResField {
    
    /**
* 新搜索到的设备列表
*/
    devices: Array<Object>;
    
  }
  
  declare interface wxOnBluetoothAdapterStateChangeCallbackResField {
    
    /**
* 蓝牙适配器是否可用
*/
    available: boolean;
    
    /**
* 蓝牙适配器是否处于搜索状态
*/
    discovering: boolean;
    
  }
  
  declare interface wxGetConnectedBluetoothDevicesObjectField {
    
    /**
* 蓝牙设备主 service 的 uuid 列表
*/
    services: Array<string>;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxGetBluetoothDevicesObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxGetBluetoothAdapterStateObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxCloseBluetoothAdapterObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxStopHCEObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxStartHCEObjectField {
    
    /**
* 需要注册到系统的 AID 列表
*/
    aid_list: Array<string>;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxSendHCEMessageObjectField {
    
    /**
* 二进制数据
*/
    data: ArrayBuffer;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxOnHCEMessageCallbackResField {
    
    /**
* 消息类型
*/
    messageType: number;
    
    /**
* messageType=1 时 ,客户端接收到 NFC 设备的指令
*/
    data: ArrayBuffer;
    
    /**
* messageType=2 时，原因
*/
    reason: number;
    
  }
  
  declare interface wxGetHCEStateObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxSetScreenBrightnessObjectField {
    
    /**
* 屏幕亮度值，范围 0 ~ 1。0 最暗，1 最亮
*/
    value: number;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxSetKeepScreenOnObjectField {
    
    /**
* 是否保持屏幕常亮
*/
    keepScreenOn: boolean;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxGetScreenBrightnessObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxGetExtConfigObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface wxCreateIntersectionObserverOptionsField {
    
    /**
* 一个数值数组，包含所有阈值。
*/
    thresholds?: Array<number>;
    
    /**
* 初始的相交比例，如果调用时检测到的相交比例与这个值不相等且达到阈值，则会触发一次监听器的回调函数。
*/
    initialRatio?: number;
    
    /**
* 是否同时观测多个目标节点（而非一个），如果设为 true ，observe 的 targetSelector 将选中多个节点（注意：同时选中过多节点将影响渲染性能）
*/
    observeAll?: boolean;
    
  }
  
  declare interface UpdateManagerOnCheckForUpdateCallbackResField {
    
    /**
* 是否有新版本
*/
    hasUpdate: boolean;
    
  }
  
  declare interface AnimationStepObjectField {
    
    /**
* 动画持续时间，单位 ms
*/
    duration?: number;
    
    /**
* 动画的效果
*/
    timingFunction?: string;
    
    /**
* 动画延迟时间，单位 ms
*/
    delay?: number;
    
    
    transformOrigin?: string;
    
  }
  
  declare interface RequestTaskOnHeadersReceivedCallbackResField {
    
      header: object
      
  }
  
  declare interface DownloadTaskOnProgressUpdateCallbackResField {
    
    /**
* 下载进度百分比
*/
    progress: number;
    
    /**
* 已经下载的数据长度，单位 Bytes
*/
    totalBytesWritten: number;
    
    /**
* 预期需要下载的数据总长度，单位 Bytes
*/
    totalBytesExpectedToWrite: number;
    
  }
  
  declare interface DownloadTaskOnHeadersReceivedCallbackResField {
    
      header: object
      
  }
  
  declare interface UploadTaskOnProgressUpdateCallbackResField {
    
    /**
* 上传进度百分比
*/
    progress: number;
    
    /**
* 已经上传的数据长度，单位 Bytes
*/
    totalBytesSent: number;
    
    /**
* 预期需要上传的数据总长度，单位 Bytes
*/
    totalBytesExpectedToSend: number;
    
  }
  
  declare interface UploadTaskOnHeadersReceivedCallbackResField {
    
      header: object
      
  }
  
  declare interface SocketTaskSendObjectField {
    
    /**
* 需要发送的内容
*/
    data: string|ArrayBuffer;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface SocketTaskCloseObjectField {
    
    /**
* 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。
*/
    code?: number;
    
    /**
* 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。
*/
    reason?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface SocketTaskOnOpenCallbackResField {
    
      header: object
      
  }
  
  declare interface SocketTaskOnErrorCallbackResField {
    
    /**
* 错误信息
*/
    errMsg: string;
    
  }
  
  declare interface SocketTaskOnMessageCallbackResField {
    
    /**
* 服务器返回的消息
*/
    data: string|ArrayBuffer;
    
  }
  
  declare interface MapContextGetCenterLocationObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface MapContextTranslateMarkerObjectField {
    
    /**
* 指定 marker
*/
    markerId: number;
    
      destination: MapContextTranslateMarkerObjectFieldDestinationField;
      
    /**
* 移动过程中是否自动旋转 marker
*/
    autoRotate: boolean;
    
    /**
* marker 的旋转角度
*/
    rotate: number;
    
    /**
* 动画持续时长，平移与旋转分别计算
*/
    duration?: number;
    
      /**
* 动画结束回调函数
*/
      animationEnd: ()=>never;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface MapContextIncludePointsObjectField {
    
    /**
* 要显示在可视区域内的坐标点列表
*/
    points: Array<Object>;
    
    /**
* 坐标点形成的矩形边缘到地图边缘的距离，单位像素。格式为[上,右,下,左]，安卓上只能识别数组第一项，上下左右的padding一致。开发者工具暂不支持padding参数。
*/
    padding?: Array<number>;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface MapContextGetRegionObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface MapContextGetScaleObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface VideoContextSendDanmuDataField {
    
    /**
* 弹幕文字
*/
    text: string;
    
    /**
* 弹幕颜色
*/
    color?: string;
    
  }
  
  declare interface VideoContextRequestFullScreenObjectField {
    
    /**
* 设置全屏时视频的方向，不指定则根据宽高比自动判断。
*/
    direction?: number;
    
  }
  
  declare interface InnerAudioContextOnErrorCallbackResField {
    
    
    errCode: number;
    
  }
  
  declare interface LivePlayerContextPlayObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface LivePlayerContextStopObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface LivePlayerContextMuteObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface LivePlayerContextPauseObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface LivePlayerContextResumeObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface LivePlayerContextRequestFullScreenObjectField {
    
    /**
* 设置全屏时的方向
*/
    direction?: number;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface LivePlayerContextExitFullScreenObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface LivePusherContextStartObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface LivePusherContextStopObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface LivePusherContextPauseObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface LivePusherContextResumeObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface LivePusherContextSwitchCameraObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface LivePusherContextSnapshotObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface LivePusherContextToggleTorchObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface LivePusherContextPlayBGMObjectField {
    
    /**
* 加入背景混音的资源地址
*/
    url: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface LivePusherContextStopBGMObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface LivePusherContextPauseBGMObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface LivePusherContextResumeBGMObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface LivePusherContextSetBGMVolumeObjectField {
    
    /**
* 音量大小，范围是 0-1
*/
    volume: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface RecorderManagerStartObjectField {
    
    /**
* 录音的时长，单位 ms，最大值 600000（10 分钟）
*/
    duration?: number;
    
    /**
* 采样率
*/
    sampleRate?: number;
    
    /**
* 录音通道数
*/
    numberOfChannels?: number;
    
    /**
* 编码码率，有效值见下表格
*/
    encodeBitRate?: number;
    
    /**
* 音频格式
*/
    format?: string;
    
    /**
* 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。
*/
    frameSize?: number;
    
    /**
* 指定录音的音频输入源，可通过 wx.getAvailableAudioSources() 获取当前可用的音频源
*/
    audioSource?: string;
    
  }
  
  declare interface RecorderManagerOnStopCallbackResField {
    
    /**
* 录音文件的临时路径
*/
    tempFilePath: string;
    
  }
  
  declare interface RecorderManagerOnFrameRecordedCallbackResField {
    
    /**
* 录音分片数据
*/
    frameBuffer: ArrayBuffer;
    
    /**
* 当前帧是否正常录音结束前的最后一帧
*/
    isLastFrame: boolean;
    
  }
  
  declare interface RecorderManagerOnErrorCallbackResField {
    
    /**
* 错误信息
*/
    errMsg: string;
    
  }
  
  declare interface CameraContextTakePhotoObjectField {
    
    /**
* 成像质量
*/
    quality?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface CameraContextStartRecordObjectField {
    
      /**
* 超过30s或页面 onHide 时会结束录像
*/
      timeoutCallback: ()=>never;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface CameraContextStopRecordObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface FileSystemManagerAccessObjectField {
    
    /**
* 要判断是否存在的文件/目录路径
*/
    path: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface FileSystemManagerAppendFileObjectField {
    
    /**
* 要追加内容的文件路径
*/
    filePath: string;
    
    /**
* 要追加的文本或二进制数据
*/
    data: string|ArrayBuffer;
    
    /**
* 指定写入文件的字符编码
*/
    encoding?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface FileSystemManagerSaveFileObjectField {
    
    /**
* 临时存储文件路径
*/
    tempFilePath: string;
    
    /**
* 要存储的文件路径
*/
    filePath?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface FileSystemManagerGetSavedFileListObjectField {
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface FileSystemManagerRemoveSavedFileObjectField {
    
    /**
* 需要删除的文件路径
*/
    filePath: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface FileSystemManagerCopyFileObjectField {
    
    /**
* 源文件路径，只可以是普通文件
*/
    srcPath: string;
    
    /**
* 目标文件路径
*/
    destPath: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface FileSystemManagerGetFileInfoObjectField {
    
    /**
* 要读取的文件路径
*/
    filePath: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface FileSystemManagerMkdirObjectField {
    
    /**
* 创建的目录路径
*/
    dirPath: string;
    
    /**
* 是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。
*/
    recursive?: boolean;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface FileSystemManagerReadFileObjectField {
    
    /**
* 要读取的文件的路径
*/
    filePath: string;
    
    /**
* 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容
*/
    encoding?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface FileSystemManagerReaddirObjectField {
    
    /**
* 要读取的目录路径
*/
    dirPath: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface FileSystemManagerRenameObjectField {
    
    /**
* 源文件路径，可以是普通文件或目录
*/
    oldPath: string;
    
    /**
* 新文件路径
*/
    newPath: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface FileSystemManagerRmdirObjectField {
    
    /**
* 要删除的目录路径
*/
    dirPath: string;
    
    /**
* 是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。
*/
    recursive?: boolean;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface FileSystemManagerStatObjectField {
    
    /**
* 文件/目录路径
*/
    path: string;
    
    /**
* 是否递归获取目录下的每个文件的 Stats 信息
*/
    recursive?: boolean;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface FileSystemManagerUnlinkObjectField {
    
    /**
* 要删除的文件路径
*/
    filePath: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface FileSystemManagerUnzipObjectField {
    
    /**
* 源文件路径，只可以是 zip 压缩文件
*/
    zipFilePath: string;
    
    /**
* 目标目录路径
*/
    targetPath: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface FileSystemManagerWriteFileObjectField {
    
    /**
* 要写入的文件路径
*/
    filePath: string;
    
    /**
* 要写入的文本或二进制数据
*/
    data: string|ArrayBuffer;
    
    /**
* 指定写入文件的字符编码
*/
    encoding?: string;
    
      /**
* 接口调用成功的回调函数
*/
      success: ()=>never;
    
      /**
* 接口调用失败的回调函数
*/
      fail: ()=>never;
    
      /**
* 接口调用结束的回调函数（调用成功、失败都会执行）
*/
      complete: ()=>never;
    
  }
  
  declare interface WorkerOnMessageCallbackResField {
    
      message: object
      
  }
  
  declare interface IntersectionObserverRelativeToMarginsField {
    
    /**
* 节点布局区域的左边界
*/
    left?: number;
    
    /**
* 节点布局区域的右边界
*/
    right?: number;
    
    /**
* 节点布局区域的上边界
*/
    top?: number;
    
    /**
* 节点布局区域的下边界
*/
    bottom?: number;
    
  }
  
  declare interface IntersectionObserverRelativeToViewportMarginsField {
    
    /**
* 节点布局区域的左边界
*/
    left?: number;
    
    /**
* 节点布局区域的右边界
*/
    right?: number;
    
    /**
* 节点布局区域的上边界
*/
    top?: number;
    
    /**
* 节点布局区域的下边界
*/
    bottom?: number;
    
  }
  
  declare interface IntersectionObserverObserveCallbackResField {
    
    /**
* 相交比例
*/
    intersectionRatio: number;
    
      intersectionRect: IntersectionObserverObserveCallbackResFieldIntersectionRectField;
      
      boundingClientRect: IntersectionObserverObserveCallbackResFieldBoundingClientRectField;
      
      relativeRect: IntersectionObserverObserveCallbackResFieldRelativeRectField;
      
    /**
* 相交检测时的时间戳
*/
    time: number;
    
  }
  
  declare interface NodesRefFieldsFieldsField {
    
    /**
* 是否返回节点 id
*/
    id?: boolean;
    
    /**
* 是否返回节点 dataset
*/
    dataset?: boolean;
    
    /**
* 是否返回节点布局位置（left right top bottom）
*/
    rect?: boolean;
    
    /**
* 是否返回节点尺寸（width height）
*/
    size?: boolean;
    
    /**
* 否 是否返回节点的 scrollLeft scrollTop，节点必须是 scroll-view 或者 viewport
*/
    scrollOffset?: boolean;
    
    /**
* 指定属性名列表，返回节点对应属性名的当前属性值（只能获得组件文档中标注的常规属性值，id class style 和事件绑定的属性值不可获取）
*/
    properties?: Array<string>;
    
    /**
* 指定样式名列表，返回节点对应样式名的当前值
*/
    computedStyle?: Array<string>;
    
    /**
* 是否返回节点对应的 Context 对象
*/
    context?: boolean;
    
  }
  
  declare interface NodesRefBoundingClientRectCallbackResField {
    
    /**
* 节点的 ID
*/
    id: string;
    
      dataset: object
      
    /**
* 节点的左边界坐标
*/
    left: number;
    
    /**
* 节点的右边界坐标
*/
    right: number;
    
    /**
* 节点的上边界坐标
*/
    top: number;
    
    /**
* 节点的下边界坐标
*/
    bottom: number;
    
    /**
* 节点的宽度
*/
    width: number;
    
    /**
* 节点的高度
*/
    height: number;
    
  }
  
  declare interface NodesRefScrollOffsetCallbackResField {
    
    /**
* 节点的 ID
*/
    id: string;
    
      dataset: object
      
    /**
* 节点的水平滚动位置
*/
    scrollLeft: number;
    
    /**
* 节点的竖直滚动位置
*/
    scrollTop: number;
    
  }
  
  declare interface NodesRefContextCallbackResField {
    
      context: object
      
  }
  
  declare interface wxOnAppShowCallbackResFieldObjectField {
    
    /**
* 小程序切前台的路径
*/
    path: string;
    
    /**
* 小程序切前台的场景值
*/
    scene: number;
    
      query: object
      
    /**
* shareTicket，详见获取更多转发信息
*/
    shareTicket: string;
    
      referrerInfo: wxOnAppShowCallbackResFieldObjectFieldReferrerInfoField;
      
  }
  
  declare interface wxSetNavigationBarColorObjectFieldAnimationField {
    
    /**
* 动画变化时间，单位 ms
*/
    duration?: number;
    
    /**
* 动画变化方式
*/
    timingFunc?: string;
    
  }
  
  declare interface wxLoadFontFaceObjectFieldDescField {
    
    /**
* 字体样式，可选值为 normal / italic / oblique
*/
    style?: string;
    
    /**
* 字体粗细，可选值为 normal / bold / 100 / 200../ 900
*/
    weight?: string;
    
    /**
* 设置小型大写字母的字体显示文本，可选值为 normal / small-caps / inherit
*/
    variant?: string;
    
  }
  
  declare interface wxOnWindowResizeCallbackResFieldSizeField {
    
    /**
* 变化后的窗口宽度，单位 px
*/
    windowWidth: number;
    
    /**
* 变化后的窗口高度，单位 px
*/
    windowHeight: number;
    
  }
  
  declare interface wxUpdateShareMenuObjectFieldTemplateInfoField {
    
    /**
* 参数列表
*/
    parameterList: Array<Object>;
    
  }
  
  declare interface MapContextTranslateMarkerObjectFieldDestinationField {
    
    /**
* 经度
*/
    longitude: number;
    
    /**
* 纬度
*/
    latitude: number;
    
  }
  
  declare interface IntersectionObserverObserveCallbackResFieldIntersectionRectField {
    
    /**
* 左边界
*/
    left: number;
    
    /**
* 右边界
*/
    right: number;
    
    /**
* 上边界
*/
    top: number;
    
    /**
* 下边界
*/
    bottom: number;
    
  }
  
  declare interface IntersectionObserverObserveCallbackResFieldBoundingClientRectField {
    
    /**
* 左边界
*/
    left: number;
    
    /**
* 右边界
*/
    right: number;
    
    /**
* 上边界
*/
    top: number;
    
    /**
* 下边界
*/
    bottom: number;
    
  }
  
  declare interface IntersectionObserverObserveCallbackResFieldRelativeRectField {
    
    /**
* 左边界
*/
    left: number;
    
    /**
* 右边界
*/
    right: number;
    
    /**
* 上边界
*/
    top: number;
    
    /**
* 下边界
*/
    bottom: number;
    
  }
  
  declare interface wxOnAppShowCallbackResFieldObjectFieldReferrerInfoField {
    
    /**
* 来源小程序、公众号或 App 的 appId
*/
    appId: string;
    
      extraData: object
      
  }
  