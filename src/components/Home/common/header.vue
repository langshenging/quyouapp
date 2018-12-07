<template>
    <header>
        <div class="header_left"><i class="iconfont">&#xe600;</i></div>
        <div class="header_middle">
            <router-link to="#">
                <i class="iconfont">&#xe60c;</i>
                <span>输入城市/景点/游玩主题</span>
            </router-link>
        </div>
        <router-link to="/city">
            <div class="header_right">
                <span>北京</span>
                <i class="iconfont">&#xe601;</i>    
            </div>        
        </router-link>
    </header>
</template>
<script>
export default {    
    
}
</script>
<style lang="scss" scoped>

header{
    font-size: 16px;
    height: .44rem;
    background: #0af;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .1rem;
    i{
        font-size: 18px;
        color: #fff;
    }
    .header_middle{
        width: 74%;
        a{
            display: inline-block;
            width: 100%;
            height: .3rem;
            background: #fff;
            line-height: .3rem;
            color: #ccc;
            border-radius: 0.05rem;
            padding-left: 0.2rem;
            i{
                 color: #ccc!important;
            }
        }
    }
    .header_right{
        span{
            color: #fff;
        }
    }
}

</style>
