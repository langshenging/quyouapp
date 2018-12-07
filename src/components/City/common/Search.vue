<template>
  <div class="search">
  <input type="text" placeholder="添加城市或拼音">
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
    .search{
        position: fixed;
        top: .44rem;
        left: 0;
        width: 100%;
        z-index: 999;
        height: .33rem;
        background: #0af;
        padding:0 .05rem;
        input{
            width: 100%;
            height: .28rem;
            padding-left: 0.1rem;
            border-radius: 0.05rem;
            text-align: center;
        }
    }
</style>
