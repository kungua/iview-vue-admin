## 导航解析流程
1. 导航被触发
2. 在失活的组件(即将离开的页面)里调用离开守卫 beforeRouteLeave
3. 调用全局的前置守卫 beforeEach
4. 在重用的组件中调用 beforeRouteUpdate
5. 调用路由独享的守卫 beforeEnter
6. 解析异步路由组件 **
7. 在被激活的组件(即将进入的页面组件)中调用 beforeRouteEnter
8. 调用全局的解析守卫 beforeResolve
9. 导航被确认
10. 调用全局的后置守卫 afterEach
11. 触发 DOM 更新
12. 用创建好的实例调用 beforeRouterEnter 守卫里传给 next 的回调函数
