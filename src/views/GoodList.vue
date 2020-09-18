<!-- 列表页 -->
<template>
    <div class='good-list'>
        <KBHeader titname="商品类表" :bol='true'></KBHeader>
        
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

        <!-- 列表 -->
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <div v-for="i in list.length" :key="i">{{i}}</div>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { KBHeader } from '@/components/'
import { mapState,mapActions } from 'vuex'
import { Search,List } from 'vant';

import Vue from 'vue';


Vue.use(List);
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    KBHeader,
    [Search.name]:Search,
    [List.name]:List
},
data() {
//这里存放数据
return {
    obj:{},
    value:'',
    list: [],
    loading: false,
    finished: false,
    refreshing: false,
};
},
//监听属性 类似于data概念
computed: {
    ...mapState('good',['good_list'])
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    ...mapActions('good',['getGoodList']),
    onSearch(){
        console.log('搜索')
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    this.obj=this.$route.params
    this.getGoodList({
            query:this.obj.name,
            cid:this.obj.id,
            pagenum:5,
            pagesize:5
        
    })
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