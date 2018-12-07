<template>
    <div class="swiper-container" id="menu">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(pagelist,index) in page" :key="index">
                <!--v-for="(item,index) in menu" v-bind:key="index"-->
                <div class="icon"  v-for="(item,index) in pagelist" :key="index">
                    <img :src="item.imgUrl" />
                    <p>{{item.desc}}</p>
                </div>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div> 
</template>
<script>
import Swiper from 'swiper'
import '../../../../node_modules/swiper/dist/css/swiper.css'
import {mapState,mapActions} from 'vuex'

export default {

    computed:{
        ...mapState(["menu"]),
        page(){
            const page = [];
            this.menu.forEach((item,index)=>{
                const pagenum = (Math.floor(index / 8))
                if(!page[pagenum]){
                    page[pagenum] = []
                }
                page[pagenum].push(item)
            })
            return page
        }
    },
    created() {
        this.gethomeData()
    },
    methods:{
        ...mapActions(["gethomeData"])
    }, 
    watch:{
        menu(){
            this.$nextTick(()=>{
                var mySwiper = new Swiper ('#menu', {
                    // 如果需要分页器
                    pagination: {
                    el: '.swiper-pagination',
                    }
                })     
            })   
        }
    }
}
</script>
<style lang="scss" scoped>

    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets
    {
        bottom:0px;
    }
    #menu{
        margin-top: 0.1rem;
        .swiper-slide{
            width: 100%;
            .icon{
                float: left;
                width: 25%;
                text-align: center;
                margin: 0 auto;
                padding-bottom: 0.1rem;
                img{
                    width:60%;
                }
            }
        }
    }
</style>