<!--  -->
<template>
    <div class='good-detail'>
        <!-- 头部 -->
        <KBHeader titname="商品详情" :bol="true"></KBHeader>

        <!-- 内容 -->
        
        <div class="detail-img">
            <img :src="item.goods_big_logo" alt="">
            <div>
                <div>
                    <span>￥{{item.goods_price}}</span>
                    <van-icon name="share-o" />
                    <van-icon name="star-o" />
                </div>
                <p>{{this.item.goods_name}}</p>
            </div>
        </div>
        
        
        <!-- 底部图片 -->
        <div v-html="this.item.goods_introduce"></div>
        

        <!-- 底部 -->
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
            <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
            <van-goods-action-button
                type="danger"
                text="加入购物车"
                @click="onClickButton"
            />
            <van-goods-action-button
                type="danger"
                text="立即购买"
            />
        </van-goods-action>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { KBHeader } from '@/components/'
import { GoodsAction, GoodsActionIcon, GoodsActionButton,Icon  } from 'vant';
import { fetchDetail,fetchUpDateCarts } from '@/utils/api'
import { mapMutations,mapState } from 'vuex'
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
        KBHeader,
        [GoodsAction.name]:GoodsAction,
        [GoodsActionIcon.name]:GoodsActionIcon,
        [GoodsActionButton.name]:GoodsActionButton,
        [Icon.name]:Icon
    },
    data() {
    //这里存放数据
    return {
        // 商品详情
        item:{}
    };
    },
    //监听属性 类似于data概念
    computed: {
        ...mapState('good',['shop_car'])
    },
    //监控data中的数据变化
    watch: {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        //调取商品详情信息
        fetchDetail({
            goods_id:this.$route.params.id
        }).then(res=>{
            this.item=res.message
            console.log(this.item)
        })
    },
    //方法集合
    methods: {
        ...mapMutations('good',['AddShopCar']),
        onClickIcon() {
            console.log('点击图标')
        },
        //添加购物车
        onClickButton() {
            //这次点击的商品要添加的数据
            let goods={
                goods_small_logo:this.item.goods_small_logo,
                goods_name:this.item.goods_name,
                goods_num:1,
                goods_price:this.item.goods_price,
            }
            // 添加商品到购物车
            this.AddShopCar(goods)
            console.log('我的购物车',this.shop_car)
            //添加商品的接口：报错500
            fetchUpDateCarts({
                action:'add',
                productNumber:1,
                pid:this.item.goods_id,
                oauth_token:localStorage.getItem('token')
            }).then(res=>{
                console.log(res)
            })
        },
    },
}
</script>
<style lang="scss" scoped>
    .detail-img{
        width: 8rem;
        margin:auto;
        margin-top: 1.2rem;
        &>img{
            width: 100%;
            height: 100%;
        }
        &>div{
            width: 100%;
            height: 2.666667rem;
            font-size: 0.426667rem;
            &>div{
                position: relative;
                &>span{
                    color: red;
                    text-align: left;
                    
                }
                &>.van-icon-share-o{
                    position: absolute;
                    right: 0.533333rem;
                }
                &>.van-icon-star-o{
                    position: absolute;
                    right: 0;
                }
            }
            &>p{
                //二行
                font-size: 0.373333rem;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
    }
</style>