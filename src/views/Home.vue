<!--  -->
<template>
  <div class='home'>
      <!-- 头 -->
      <KBHeader titname="优购商场"></KBHeader>
      <!-- 搜索 -->
      <KBSearch></KBSearch>
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in swiper_data" :key="index">
          <img v-lazy="item.image_src" />
        </van-swipe-item>
      </van-swipe>
      
      <!-- 分类 -->
      <van-row>
        <van-col v-for="(item,index) in cat_items" :key="index" span="6">
          <img style="width:100%" :src="item.image_src" alt="">
        </van-col>
      </van-row>

      <!-- 商品 -->
      <div class="good_list">
        <div class="division" v-for="(item,index) in floor_data" :key="index">
          <header><img :src="item.floor_title.image_src" alt=""></header>

          <van-row>
            <van-col span="7"><img :src="item.product_list[0].image_src" alt=""></van-col>

            <van-col style='height:100%' span="16">
              
              <van-col span="11" v-for="i in item.product_list.length-1" :key="i">
                <img :src="item.product_list[i].image_src" alt="">
              </van-col>
              
            </van-col>
          </van-row>

        </div>
      </div>

      <!-- 底部 -->
      <KBTabbar></KBTabbar>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { KBTabbar,KBHeader,KBSearch } from '@/components/'
import { Lazyload,Swipe,SwipeItem,Col,Row } from 'vant';

import Vue from 'vue';

Vue.use(Lazyload);

//状态管理
import { mapState,mapActions } from 'vuex'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
  KBTabbar,
  KBHeader,
  KBSearch,
  [Swipe.name]:Swipe,
  [SwipeItem.name]:SwipeItem,
  [Col.name]:Col,
  [Row.name]:Row
  // [Lazyload.name]:Lazyload
},
data() {
//这里存放数据
return {
  name:'优购商场'
};
},
//监听属性 类似于data概念
computed: {
  ...mapState('home',['swiper_data','cat_items','floor_data'])
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  ...mapActions('home',['getSwiper','getCat','getFloor'])
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

  this.getSwiper({})  //dispatch派发获取轮播图请求的action
  this.getCat({})     //dispatch派发获取分类请求的action
  this.getFloor({})   //dispatch派发获取专区请求的action
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

<style lang='scss' scoped>
  .home{
    height: 100%;
    .kb-search{
      margin-top: 1.2rem;
    }
    .van-swipe{
      width: 100%;
      height: 4.533333rem;
      .van-swipe-item{
        &>img{
          width: 100%;
        }
      }
    }
    .good_list{
      margin-bottom: 1.333333rem;
      .division{
        padding: 0.133333rem;
        &>header{
          width: 100%;
          height: 0.853333rem;
          &>img{
            width: 100%;
            
          }
        }
        &>div{
          width: 100%;
          height: 5.333333rem;
          &>div>img{
            width: 100%;
            height: 100%;
          }
          &>div:nth-child(1){
            box-sizing: border-box;
            margin: 0.133333rem;
            height: 5.066667rem;
          }
          &>div:nth-child(2){
            margin-left: 0.133333rem;
            &>div{
              margin-top: 0.133333rem;
              height: 2.48rem;
              &>img{
                width: 100%;
                height: 100%;
              }
            }
            &>div:nth-child(odd){
              margin-right: 0.133333rem;
            }
            &>div:nth-child(2n){
              margin-left: 0.133333rem;
            }
          }
        }
      }
    }
  }
</style>
