
在修改此应用程序前，请务必阅读此文档

1.版本信息
  Angular CLI：7.1.4
  Ionic：4.4.0
  Node：11.1.0

2.配置文件
  ./proxy.config.json：配置代理服务器的文件，在本地调试的时候解决跨域问题的，若需取消，请修改 package.json 文件中的 scripts.start，scripts.build，去掉后面的后缀即可

3.应用层级
  模块层（src/app/modules）:tabs.module, pages.module；
  页面层（src/app/page）: 所有的页面组件都在此文件夹，component都由index.ts文件导出；
  服务层（src/app/services）：auth（登录验证，在路由中添加此服务，可验证是否登录），main（主服务，包含所有页面的公用方法），reuse（路由复用策略，跟某些功能，此服务已停用，用其他方法替代）；
  静态资源层（src/app/sources）：index.ts文件中包含了本地图片，本地图标和网络图片的路径，以及数据接口地址和省市区三联数据

4.样式文件
  src/page/*/*.scss：定义所在组件的样式，应用于当前组件，对其他组件无效，优先级高于全局样式
  src/global.scss：定义所有的全局样式，优先级最低
  src/theme/variables.scss：定义ionic组件的主题样式以及自定义ICON的本地路径

5.微信JS-SDK
  order-list.component和order-detail.component两个组件内包含微信支付JSAPI接口函数


