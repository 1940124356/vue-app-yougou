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

export default {
    fetchSwiperData,
    fetchCatItems,
    fetchFloorData,
    fetchcategories,
    fetchSearch
}



