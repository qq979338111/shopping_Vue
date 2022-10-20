完成一级分类动态添加背景颜色

第一种解决方案：采用样式完成

路由跳转有两种：1：声明式导航
               2：编程式导航

 1：声明式导航  router - link 是一个组件 当服务器数据返回之后。循环很多的router - link 组件------需要创建组件实例---耗内存卡顿---导致 性能下降 变缓慢 -----

 2：编程式导航  $router.push()



 mockjs--
   1:npm install mockjs,
   2：在src 目录下创建 mock文件夹   mock文件下 创建 xxx.json文件-放入json数据,记得将数据格式化，别留空格
   3：把mock的数据需要的图片房子public 文件夹中，public打包会把资源 打包到dist文件夹中
   
  