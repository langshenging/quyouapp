<template>
    <header>
        <router-link to="/home"><div class="header_left"><i class="iconfont">&#xe600;</i></div></router-link>
        <div class="header_right">
            城市选择
        </div>        
    </header>
</template>
<script>
export default {    
    
}
</script>
<style lang="scss" scoped>

header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    font-size: 16px;
    height: .44rem;
    background: #0af;
    padding: 0 .1rem;
    line-height: .44rem;
    i{
        font-size: 18px;
        color: #fff;
    }
    .header_left{
        float: left;
        width: 10%;
    }
    .header_right{
        float: left;
        width: 80%;
        text-align: center;
        margin: 0 auto;
        color: #fff;
    }
}

</style>
