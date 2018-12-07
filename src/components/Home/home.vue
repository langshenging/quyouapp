<template>
    <div>
        <homeheader></homeheader>
        <homebanner></homebanner>
        <homemenu></homemenu>
        <homefooter></homefooter>
    </div>
</template>
<script>
import homeheader from './common/header'
import homefooter from '../Allcommon/footer'
import homebanner from './common/banner'
import homemenu from './common/menu'



export default {
  components:{
      homeheader,
      homefooter,
      homebanner,
      homemenu
  }
}
</script>
<style lang="scss" scoped>

</style>
