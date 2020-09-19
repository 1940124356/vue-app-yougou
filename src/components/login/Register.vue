<template>
    <div class="register">
        <!-- 头部 -->
        <KBHeader titname="我的" :bol="true"></KBHeader>
        <div class="register-user">
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
                <van-field
                    v-model="verification"
                    name="验证码"
                    label="验证码"
                    placeholder="验证码"
                    :rules="[{ required: true, message: '请填写验证码' }]"
                >
                <template #button>
                    <van-button size="small" @click="fetchyzm" type="primary">发送验证码</van-button>
                </template>
                </van-field>

                <div style="margin: 16px;">
                    <van-button style="marg" round block type="info" native-type="submit">
                    注册
                    </van-button>
                </div>
                    
            </van-form>
            <div style="margin: 16px;">
                <van-button  @click="jump" round block type="info">
                    去登录页面
                </van-button>
            </div>
        </div>
        <!-- 底部 -->
        <KBTabbar></KBTabbar>
    </div>
</template>

<script>
import { KBTabbar,KBHeader, } from '@/components/'
import { Form,Button,Field } from 'vant';
import { fetchCreateUser,fetchGetMobileCode } from '@/utils/api'
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
            verification:'' //验证码
        }
    },
    methods:{
        //注册
        onSubmit() {
            fetchCreateUser({
                mobile:this.username,
                username:this.username,
                password:this.password,
                code:this.verification
            }).then(res=>{
                console.log(res,this.password)
            })
        },
        jump(){
            this.$router.push('/login')
        },
        //获取验证码
        fetchyzm(){
            fetchGetMobileCode({mobile:this.username}).then(res=>{
                console.log(res)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .register{
        height: 100%;
        width: 100%;
        .register-user{
            margin-top: 1.2rem;
            width: 100%;
            position: relative;
            
        }
    }
</style>