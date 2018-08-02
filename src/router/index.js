import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
let routers = [
    
    {
        path: '/',
        name: 'login',
        component: resolve => require(['pages/auth/login/Login'], resolve),
        redirect: '/login'
    },
    {
        path: '/login',
        component: resolve => require(['pages/auth/login/Login'], resolve),
        
        children: [
            {
                path: 'register',
                name: 'register',
                component: resolve => require(['pages/auth/login/register'], resolve),
                meta: { keepAlive: true },
            },
        ]
    },
    {
        path: '/lock/:num',
        name: 'lock',
        component: resolve => require(['pages/auth/views/lock'], resolve),
    },

    // 管理
    {
        path: '/bankCard/bankCard',
        name: 'bankCard',
        component: resolve => require(['pages/system-management/bank-card/bankCard'], resolve),
    },
    {
        path: '/bankCard/thirdPartyPayment',
        name: 'thirdPartyPayment',
        component: resolve => require(['pages/system-management/bank-card/thirdPartyPayment'], resolve),
    }


]








export default new Router({
    routes: routers,// 每个单元配置一个以文件夹为单位的模块，用js将各个routers合并
    // mode: 'history', //切换路径模式，变成history模式
    scrollBehavior: () => ({ y: 0 }) // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
})
