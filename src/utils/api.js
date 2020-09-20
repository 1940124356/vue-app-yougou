import axios from './fetch'

//轮播图
export function fetchSwiperData(params){
    return axios({
        url:'/home/swiperdata',
        methods:'GET',
        params
    })
}
//分类
export function fetchCatItems(params){
    return axios({
        url:'/home/catitems',
        methods:'GET',
        params
    })
}
//获取专区图片
export function fetchFloorData(params){
    return axios({
        url:'/home/floordata',
        methods:'GET',
        params
    })
}
//获取分类
export function fetchcategories(params){
    return axios({
        url:'/categories',
        methods:'GET',
        params
    })
}
//传入id调商品列表
export function fetchSearch(params){
    return axios({
        url:'/goods/search',
        methods:'GET',
        params
    })
}
//传id调商品详情的按钮
export function fetchDetail(params){
    return axios({
        url:'/goods/detail',
        methods:'GET',
        params
    })
}
// //注册接口
import fetch from 'axios'
export function fetchCreateUser(data){
    return fetch({
        url:'http://s.linweiqin.com/api/s/createUser',
        method:'POST',
        data
    })
}
//验证码
export function fetchGetMobileCode(params){
    return fetch({
        url:'http://s.linweiqin.com/api/s/getMobileCode',
        method:'GET',
        params
    })
}
//登录
export function fetchLoginCheck(data){
    return fetch({
        url:'http://s.linweiqin.com/api/s/loginCheck',
        method:'POST',
        data
    })
}
//购物车增删改查
export function fetchUpDateCarts(data){
    return axios({
        url:'http://s.linweiqin.com/api/s/updateCarts',
        method:'POST',
        data
    })
}
export default {
    fetchSwiperData,
    fetchCatItems,
    fetchFloorData,
    fetchcategories,
    fetchSearch,
    fetchDetail,
    fetchCreateUser,
    fetchGetMobileCode,
    fetchLoginCheck,
    fetchUpDateCarts
}



