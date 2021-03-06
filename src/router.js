import Vue from 'vue'
import Router from 'vue-router'
import display from './views/Diplay.vue'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: "/", redirect: '/login' },
    { path: "/login", component: () => import('./views/Login.vue') },
    {
      path: "/display", component: display, name: "home", meta: { title: '#' }, redirect: "/home", children: [
        // 二级路由
        { path: "/home", meta: { title: '首页' }, component: Home },
        { path: "/personal", meta: { title: '个人中心' }, component: () => import('./components/Personal.vue') },
        { path: "/driver", meta: { title: '引导' }, component: () => import('./components/driver/Driver.vue') },
        //permission
        { path: "/user", meta: { title: '用户权限界面' }, component: () => import('./components/Permission/User.vue') },
        { path: "/setting", meta: { title: '权限设置' }, component: () => import('./components/Permission/Setting.vue') },
        { path: "/administrators", meta: { title: '管理员权限界面' }, component: () => import('./components/Permission/Administrators.vue') },

        // Table
        { path: "/simpletable", meta: { title: '简单表格' }, component: () => import('./components/table/Simple-table.vue') },
        { path: "/complextable", meta: { title: '复杂表格' }, component: () => import('./components/table/Complex-table.vue') },
        //partcomponents
        { path: "/slide", meta: { title: '引导' }, component: () => import('./components/partcomponents/Slide.vue') },
        { path: "/uploadpic", meta: { title: '引导' }, component: () => import('./components/partcomponents/Uploadpic.vue') },
        { path: "/carousel", meta: { title: '引导' }, component: () => import('./components/partcomponents/Carousel.vue') },
        // Echarts
        { path: "/map", name: "map", meta: { title: 'map' }, component: () => import('./components/Echarts/Map.vue') },
        { path: "/slideecharts", meta: { title: 'slideecharts' }, name: "slideecharts", component: () => import('./components/Echarts/Slide-echarts.vue') },
        { path: "/switchecharts", meta: { title: 'switchecharts' }, name: "switchecharts", component: () => import('./components/Echarts/Switch-echarts.vue') },
        // Excel
        { path: "/importexcel", meta: { title: 'Excel导入' }, component: () => import('./components/Excel/Importexcel.vue') },
        { path: "/exportexcel", meta: { title: 'Excel导出' }, component: () => import('./components/Excel/Exportexcel.vue') },
        // nav
        { path: "/nav1", meta: { title: '导航1' }, component: () => import('./components/nav/Nva1.vue') },
        { path: "/nav2", meta: { title: '导航2' }, component: () => import('./components/nav/Nav2.vue') },
        //202003 new change
        //project
        { path: "/newproject", meta: { title: '申请立项' }, component: () => import('./components/project/newproject.vue') },
        { path: "/myproject", meta: { title: '我的项目' }, component: () => import('./components/project/myproject.vue') },
        { path: "/projectdetail", meta: { title: '项目详情' }, component: () => import('./components/project/projectdetail.vue')},
        { path: "/worktime", meta: { title: '工时信息' }, component: () => import('./components/project/worktime.vue') },
        { path: "/device", meta: { title: '设备管理' }, component: () => import('./components/project/device.vue') },
        { path: "/worktimeapprove", meta: { title: '工时信息审批' }, component: () => import('./components/project/worktimeapprove.vue') },
        { path: "/newprojectapprove", meta: { title: '立项审批' }, component: () => import('./components/project/newprojectapprove.vue') },
      ]
    },
    { path: "/header", component: () => import('./components/Header.vue') },
    { path: "/error", component: () => import('./views/Error.vue') },
    { path: "/sidebar", component: () => import('./components/Sidebar.vue') },

    { path: "/info", component: () => import('./components/project/projectdetail/info.vue') },
    { path: "/risk", component: () => import('./components/project/projectdetail/risk.vue') },
    { path: "/authority", component: () => import('./components/project/projectdetail/authority.vue') },
    { path: "/func", component: () => import('./components/project/projectdetail/func.vue') },
    { path: "/person", component: () => import('./components/project/projectdetail/person.vue') },

    { path: "*", redirect: "/error", hidden: true }
  ]
})
// 判断进入其他页面有没有先登录
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.loginToken ? true : false;
  if (to.path == "/login") {
    next();
  } else {
    isLogin ? next() : next('/login')
  }
})

export default router
