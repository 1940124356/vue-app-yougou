<!--  -->
<template>
<div class='good'>
    <!-- 头 -->
    <KBHeader titname="商品列表"></KBHeader>
    <!-- 搜索 -->
    <KBSearch></KBSearch>
    <!-- 内容 -->
    <div class="good-content">
        <ul class="good-sort">
            <li v-for="(item,index) in Cate_gor" :key="index" @click="changeCate(item.cat_id)">{{item.cat_name}}</li>
        </ul>

        <div class="good-sort2">
            <div v-for="item in newCate_cdr" :key="item.cat_id">
                <p>{{item.cat_name}}</p>
                <div>
                    <div v-for="item2 in item.children" :key='item2.cat_id' @click="jump(item2.cat_id,item2.cat_name)">
                        <img :src="item2.cat_icon" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <KBTabbar></KBTabbar>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { KBTabbar,KBHeader,KBSearch } from '@/components/'
import { mapState,mapActions,mapMutations } from 'vuex'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    KBTabbar,
    KBHeader,
    KBSearch
},
    data() {
    //这里存放数据
    return {
        
    };
    },
    //监听属性 类似于data概念
    computed: {
        ...mapState('good',['Cate_gor','Cate_list']),
        newCate_cdr:function(){
            if(this.Cate_list.children){
                return this.Cate_list.children.filter(ele=>{
                    return ele.children!=null
                })
            }else{
                return null
            }
        }
    },
    //方法集合
    methods: {
        ...mapMutations('good',['changeCate','clearGoodList']),
        ...mapActions('good',['getCate','getGoodList']),
        jump(id){
            this.clearGoodList()
            this.getGoodList({
                cid:id,
                pagenum:1,
                pagesize:8
            })
            this.$router.push(`/goodlist/${id}`)
        }
    },

    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.getCate({})
    }
}
</script>
<style lang="scss" scoped>
    .good{
        height: 100%;
        .kb-search{
            margin-top: 1.2rem;
        }
        .good-content{
            padding-bottom: 1.333333rem;
            height: 100%;
            display: flex;
            .good-sort{
                width: 100px;
                height: 100%;
                overflow: auto;
                background: rgb(243,243,243);
                &>li{
                    height: 1.066667rem;
                    font-size: 0.373333rem;
                    text-align: center;
                    line-height: 1.066667rem;
                }
            }
            .good-sort2{
                flex: 1;
                height: 100%;
                overflow: auto;
                &>div{
                    overflow: hidden;
                    width: 100%;
                    &>p{
                        font-size: 0.32rem;
                        height: 0.533333rem;
                        width: 100%;
                    }
                    &>div{
                        &>div{
                            width: 1.333333rem;
                            height: 1.333333rem;
                            float:left;
                            &>img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
</style>