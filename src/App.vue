<template>
  <div id="app">
      <router-view v-if='this.$route.path=="/login"' name="login"></router-view>
      <router-view v-if='this.$route.path=="/register"' name="register"></router-view>
      <router-view v-else/>
  </div>
</template>

<script>
export default {
  components:{
    
  },
  data(){
    return {
      token:''
    }
  } 
}
</script>

<style lang="scss">
  body,html,#app{
    height: 100%;
    width: 100%;
  }
</style>
