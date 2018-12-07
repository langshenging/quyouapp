<template>
  <div class="city">
    <cityheader></cityheader>
    <citysearch></citysearch>
    <citylist :cities="cities" :hotcitys="hotcitys"></citylist>
    <cityAsiderbar :cities="cities"></cityAsiderbar>
  </div>
</template>
<script>
import cityheader from './common/header'
import citysearch from './common/Search'
import citylist from './common/list'
import cityAsiderbar from './common/Asiderbar'



export default {
    components:{
        cityheader,
        citysearch,
        citylist,
        cityAsiderbar
    },
    data(){
        return {
            cities:{},
            hotcitys:[]
        }
    },
    created(){
        this.getCity()
    },
    methods:{
        getCity(){
            this.$http.get("http://localhost:3030/data").then((res)=>{
                console.log(res)
                this.cities = res.data.cities
                this.hotcitys = res.data.hotCities
            })
        }
    }


}
</script>
<style lang="scss" scoped>

</style>
