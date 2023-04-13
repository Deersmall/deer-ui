import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import request from "@/utils/request";

axios.defaults.withCredentials = true;// 允许跨域携带cookie


createApp(App).use(store).use(router).use(ElementPlus).mount('#app')

// 挂载路由导航守卫
// to 将要访问的路径
// from 代表从哪个路径跳转而来
// next 是个函数，表示放行 next() 放行  next('/login') 强制跳转

router.beforeEach((to, from, next) => {
    if (to.path.startsWith('/login')) {
        window.sessionStorage.removeItem('token')
        next()
    } else {
        let token = window.sessionStorage.getItem('token')
        //  判断是否存在Token
        if (token) {
            next()
        } else {
            //  token不存在，向后端确认
            request.post("/deerLogin/affirmToken").then(ref => {
                debugger
                if (ref.code === 200){
                    //  后端确认存在后，前端重新设置session,放行
                    window.sessionStorage.setItem("token",JSON.stringify(ref.data));
                    next()
                }else {
                    //  拦截，送回登录页
                    next({
                        path: '/login'
                    })
                }
            }).catch((err)=>{
                console.log(err)
            });


        }
    }
});
