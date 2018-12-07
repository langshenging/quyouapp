<template>
    <div class="swiper-container" id="banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in banner" v-bind:key="index">
                <img :src="item.imgUrl"/>
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
        ...mapState(["banner"])
    },
    created() {
        this.gethomeData()
    },
    methods:{
            ...mapActions(["gethomeData"])
    },
    watch:{
        banner(){
            this.$nextTick(()=>{
                var mySwiper = new Swiper ('#banner', {
                    loop: true, // 循环模式选项
                    // 如果需要分页器
                    pagination: {
                    el: '.swiper-pagination',
                     clickable: true,
                    },
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    }
                })     
            })   
        }
    }
}
</script>
<style lang="scss" scoped>

    #banner{
        
        .swiper-slide{
            img{
                width:100%;
                // height: 1.7rem;
            }
        }
    }
</style>