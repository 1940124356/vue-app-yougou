import { fetchSwiperData,fetchCatItems,fetchFloorData } from '@/utils/api'

export default {
    namespaced: true,
    state:{
        swiper_data:[], //轮播图
        cat_items:[],   //分类图
        floor_data:[]   //专区图
    },
    mutations: {
        Swiper(state,payload){
            state.swiper_data=payload
        },
        Cart(state,payload){
            state.cat_items=payload
        },
        Floor(state,payload){
            state.floor_data=payload
        }
    },
    actions:{
        //获取轮播图
        getSwiper(store,params){
            fetchSwiperData(params).then(res=>{
                store.commit('Swiper',res.message)
            })
        },
        //获取分类
        getCat(store,params){
            fetchCatItems(params).then(res=>{
                store.commit('Cart',res.message)
            })
        },
        //获取专区图
        getFloor(store,params){
            fetchFloorData(params).then(res=>{
                store.commit('Floor',res.message)
            })
        }
    },
    modules:{
        
    }
}