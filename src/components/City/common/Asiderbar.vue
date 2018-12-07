<template>
  <div class="asider">
        <ul>
            <li v-for="(item,key) of cities" :key="key" @click="href()">
                <a href="#">
                    {{key}}
                </a>
            </li>
        </ul>
  </div>
</template>
<script>
export default {
    props:["cities"],
    methods:{
        href(){
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .asider{
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        right: 0;
        top: 1.58rem;
        width: .2rem;
        li{
            text-align: center;
            a{
                color: #0af;
            }
        }
    }
</style>
