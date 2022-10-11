# koa-server

## APIDoc 文档（接口文档swagger）

```
第一种方法是通过： `swagger-jsdoc` 和  `koa2-swagger-ui` 生成swagger 文档；

第二种方法是`koa-swagger-decorator` 套件是基于注解根据 API 自动生成可视化 swagger 文档；
```


## Router

router 使用的是 koa-router 和 koa-body 中间件，实现路由动态加载，目前有三种方法

1，使用 fs 核心库的 readdir 方法，动态循环 require 路由；

2，使用第三方库 `require-directory` 可以实现动态引入，

```
function whenLoadModule(obj: any) {
  if (obj instanceof KoaRouter) {
    router.use(obj.routes(), obj.allowedMethods());
  }
}

try {
  const ps = path.resolve(__dirname, './modules/');
  <!-- 这里的module是固定写法 -->
  const modules = requireDirectory(module, path.resolve(ps), { visit: whenLoadModule });
} catch (error) {
  console.log('error', error);
}
```

>| 注意：通过 fs 动态 require 路由方式或者第二种， 目前只支持 module.exports 这种路由暴露方法，es6 的 export 方法目前不支持
