export default {
  // 计数
  addcount(state, payload) {
    payload.count += 1
  },
  // 添加购物车
  addcart(state, payload) {
    payload.check = false
    state.cartlist.push(payload)
  },

}