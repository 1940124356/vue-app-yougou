
const Home = ()=>import('@/views/Home.vue')
const Good = ()=>import('@/views/Good.vue')
const Cart = ()=>import('@/views/Cart.vue')
const User = ()=>import('@/views/User.vue')
const GoodList = ()=>import('@/views/GoodList')

export default [
    {id:1,path:'/home',comm:Home,title:'Home'},
    {id:2,path:'/good',comm:Good,title:'Good'},
    {id:3,path:'/cart',comm:Cart,title:'Cart'},
    {id:4,path:'/user',comm:User,title:'User'},
    {id:5,path:'/goodlist/:id/:name',comm:GoodList,title:'GoodList'}
]