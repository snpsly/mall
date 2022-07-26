import vue from "vue";
import Vuex from 'vuex';
import mutations from '@/store/mutations'
import getters from '@/store/getters'
import actions from '@/store/actions'
vue.use(Vuex)
const state = {
  cartlist: []
}
const stroe = new Vuex.Store({
  state, actions,
  mutations, getters,
})


export default stroe