import mutations from "./mutations";
export default {
  addcart(context, payload) {
    return new Promise((resolve, reject) => {
      const found = context.state.cartlist.find(el => el.iid === payload.iid);
      if (found !== undefined) {
        context.commit("addcount", found)
        resolve('当前商品数量+1')
      } else {
        payload.count = 1;
        context.commit("addcart", payload)
        resolve('已添加到购物车')
      }
    })


  }
}