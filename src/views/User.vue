<!--  -->
<template>
<div class='user'>
    <!-- 头部 -->
    <KBHeader titname="我的"></KBHeader>
    <div v-if="bol" class="user-good">
        <p @click="jump">去登录</p>
    </div>
    <!-- 底部 -->
    <KBTabbar></KBTabbar>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { KBTabbar,KBHeader } from '@/components/'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    KBTabbar,
    KBHeader
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {
    bol:function(){
        if(localStorage.getItem('token')){
            return false
        }else{
            return true
        }
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    jump(){
        this.$router.push('/login')
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    
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
    .user{
        height: 100%;
        width: 100%;
        .user-good{
            margin-top: 1.2rem;
            width: 100%;
            height: 200px;
            position: relative;
            &>p{
                position: absolute;
                top: 0;left: 0;right: 0;bottom: 0;
                margin: auto;
                width: 150px;
                height: 40px;
                text-align: center;
                line-height: 1.066667rem;
                border: 1px solid red;
                border-radius: 10px;
                font-size: 14px;
                font-weight: bolder;
                color: red;
            }
        }
    }
</style>