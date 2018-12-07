<template>
    <footer id="footimg">
        <ul>
            <li>
                <router-link to="/home">
                    <span class="iconfont">&#xe61b;</span>
                    首页
                </router-link>
            </li>
            <li>
                <router-link to="/find">
                    <span class="iconfont">&#xe632;</span>
                    发现
                </router-link>
            </li>
            <li> 
                <router-link to="/buycar">
                    <span class="iconfont">&#xe622;</span>
                    订单
                </router-link>
            </li>
            <li>
                <router-link to="/mine">
                    <span class="iconfont">&#xe602;</span>
                    我的
                </router-link>
            </li>                
        </ul>
    </footer>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
    footer{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: .49rem;
        background: #fff;
        ul{
            height: .49rem;              
            display: flex;
            justify-content: space-around;
            align-items: center;
            li{
                height: .49rem;   
                cursor: pointer;
                font-size: 16px;
                a{
                    color: black;
                }
                span{
                    font-size: 20px;
                    text-align: center;
                    display: block;
                    color: #000;
                }
            }
            .router-link-active{
                color:#0af !important;
                span{
                    color:#0af !important;
                }
            }
        }
    }

</style>

