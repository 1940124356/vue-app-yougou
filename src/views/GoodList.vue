<!-- 列表页 -->
<template>
    <div class='good-list'>
        <KBHeader titname="商品列表" :bol='true'></KBHeader>
        
        <!-- 搜索框 -->
        <van-search
            v-model="value"
            show-action
            label="地址"
            placeholder="请输入搜索关键词"
            @search="onSearch"
        >
            <template #action>
                <div @click="onSearch">搜索</div>
            </template>
        </van-search>

        <!-- 标签页 -->
        <van-tabs v-model="activeName">
            <van-tab title="综合" name="a"></van-tab>
            <van-tab title="销量" name="b"></van-tab>
            <van-tab title="价格" name="c"></van-tab>
        </van-tabs>

        <!-- 列表 -->
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <van-card
                    v-for="item in good_list"
                    :price="item.goods_price"
                    :title="item.goods_name"
                    :thumb="item.goods_big_logo"
                    :key="item.goods_id"
                    @click="jump(item.goods_id)"
                />
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { KBHeader } from '@/components/'
import { mapActions, mapState } from 'vuex'
import { Search,List,PullRefresh,Tab,Tabs,Card } from 'vant';

import Vue from 'vue';


Vue.use(List);
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    KBHeader,
    [Search.name]:Search,
    [List.name]:List,
    [PullRefresh.name]:PullRefresh,
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [Card.name]:Card
},
data() {
//这里存放数据
return {
    obj:{},
    value:'',
    loading: false,
    finished: false,
    refreshing: false,
    activeName: 'a',
    num:2
};
},
//监听属性 类似于data概念
computed: {
    ...mapState('good',['good_list','bol'])
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    // ...mapMutations('good',['clearGoodList']),
    ...mapActions('good',['getGoodList']),
    onSearch(){
        console.log('搜索')
    },
    //到底部加载数据
    onLoad() {
      setTimeout(() => {    //间隔1s调接口加载数据
        this.fetchData(this.num)    //传入页码调接口
        this.num++                  //页码加1
        this.loading = false;       //节流，加载完上一次的才能再加载
        if (this.bol) {
          this.finished = true;     //判断状态管理里的Boolean值，没数据了就不调接口了
        }
      }, 1000);
    },
    // 下拉刷新
    onRefresh() {
        console.log('刷新')
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      setTimeout(()=>{
        console.log('刷新完成')
        this.refreshing=false
      },2000)
    },
    //调接口拿数据，传页数
    fetchData(num){
        this.getGoodList({
            cid:this.obj.id,
            pagenum:num,
            pagesize:8
        })
    },
    //跳转页面
    jump(id){
        
        this.$router.push('/gooddetail/'+id)
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    },
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    this.obj=this.$route.params
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="scss" scoped>
    .good-list{
        height: 100%;
        .van-search{
            margin-top: 1.2rem;
        }
    }
</style>