import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var vm = new Vue()

var store = new Vuex.Store({
    state:{
        banner:[],
        menu:[]
    },
    mutations:{
        getHome(state,p){
            state.banner = p.swiperList
            state.menu = p.iconList
        }
    },
    actions:{
        gethomeData(context){
            vm.$http.get("http://localhost:3000/data").then((res) => {
                console.log(res)
                context.commit("getHome",res.data)
            })
        }
    }
})

export default store