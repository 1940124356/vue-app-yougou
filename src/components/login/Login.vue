<template>
    <div class="login">
        <!-- 头部 -->
        <KBHeader titname="我的" :bol="true"></KBHeader>
        <div class="login-user">
            <van-form @submit="onSubmit">
                <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">
                    登录
                    </van-button>
                    
                </div>
            </van-form>
            <van-button @click="jump" round block type="info">
                去注册页面
            </van-button>
        </div>
        <!-- 底部 -->
        <KBTabbar></KBTabbar>
    </div>
</template>

<script>
import { KBTabbar,KBHeader, } from '@/components/'
import { Form,Button,Field } from 'vant';
import { fetchLoginCheck } from '@/utils/api'
export default {
    components: {
        KBTabbar,
        KBHeader,
        [Form.name]:Form,
        [Button.name]:Button,
        [Field.name]:Field
    },
    data(){
        return {
            username: '',
            password: '',
        }
    },
    methods:{
        onSubmit() {
            fetchLoginCheck({
                username:this.username,
                password:this.password
            }).then(res=>{
                localStorage.setItem('token',JSON.parse(JSON.stringify(res.data.wdata.oauth_token)))
            })
        },
        jump(){
            this.$router.push('/register')
        },
    }
}
</script>
<style lang="scss" scoped>
    .login{
        height: 100%;
        width: 100%;
        .login-user{
            margin-top: 1.2rem;
            width: 100%;
            height: 200px;
            position: relative;
            
            
        }
    }
</style>