
import { fetchcategories,fetchSearch } from '@/utils/api'

export default {
    namespaced: true,
    state:{
        Cate_gor:[],    //所有数据
        Cate_list:[],    //根据id改变的小数据
        good_list:[]
    },
    mutations: {
        Cate(state,payload){
            state.Cate_gor=payload
            state.Cate_list=state.Cate_gor[0]
        },
        //改右边商品
        changeCate(state,id){
            console.log('123')
            state.Cate_gor.map(ele=>{
                if(ele.cat_id==id){
                    state.Cate_list=ele
                }
                return null
            })
        },
        GoodList(state,payload){
            state.good_list=payload
        }
    },
    actions:{
        //获取分类数据
        getCate(store,params){
            fetchcategories(params).then(res=>{
                store.commit('Cate',res.message)
            })
        },
        //传入id调商品列表
        getGoodList(store,params){
            fetchSearch(params).then(res=>{
                console.log(res)
                store.commit('GoodList',res.message)
            })
        }
    },
    modules:{
    }
}