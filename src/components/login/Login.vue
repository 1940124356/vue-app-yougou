<template>
    <div class="login">
        <h1>登录</h1>
        <button @click="cunToken">存token</button>
    </div>
</template>

<script>
export default {
    components:{
        
    },
    data(){
        return {

        }
    },
    methods:{
        cunToken(){
            localStorage.setItem('token','123456')
            this.$router.push('/home')
        }
    }
}
</script>
<style lang="scss" scoped>

</style>