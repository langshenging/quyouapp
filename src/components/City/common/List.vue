<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title">当前城市</div>
                <div class="detail_list">
                    <ul>
                        <li><a>北京</a></li>
                    </ul>
                </div>
            </div>
            <div class="area">
                <div class="title">热门城市</div>
                <div class="detail_list">
                    <ul>
                        <li v-for="(item,index) in hotcitys" :key="index">
                            <a>{{item.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="area" v-for="(citynum,key) of cities" :key="key">
                <div class="title">{{key}}</div>
                <div class="city_list">
                    <ul>
                        <li v-for="(item,index) in citynum" :key="index">
                            <a href="#">
                                {{item.name}}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    props:["cities","hotcitys"],
    created() {
        
    },
    mounted() {
        
        this.scroll = new BScroll(this.$refs.wrapper)
    },
}
</script>
<style lang="scss" scoped>
    .list{
        position: absolute;
        top: .77rem;
        left: 0;
        right: 0;
        bottom: 0;
        // overflow: scroll;
        .area{
            overflow: hidden;
            
            .title{
                padding: .1rem 0.1rem;
            }
            .detail_list{
                background: #fff;
                overflow: hidden;
                padding: 0 .2rem .1rem 0;
                li{
                    width: 30%;
                    height: .45rem;
                    line-height: .45rem;
                    font-size: .14rem;
                    text-align: center;
                    border: .01rem solid #ddd;             
                    float: left;
                    margin:.1rem 0 0 .1rem;
               }
            }
            .city_list{
                //  padding: 0 .2rem 0 0;
                 background: #fff;
                 overflow: hidden;
                li{
                    width: 100%;
                    line-height: .45rem;
                    padding: 0 0 0 .1rem;
                    border-bottom: 0.01rem solid #ccc;
                    a{
                        color: #212121;
                    }
                }
            }
        }
    }
</style>
