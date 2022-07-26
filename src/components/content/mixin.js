
export const mixin = {
  data() {
    return {
      itemlisner: null,
    };
  },
  mounted() {
    console.log(123);
    const debounce1 = this.debounce(this.$refs.scroll.refresh, 200);
    this.itemlisner = () => {
      debounce1();
    };
    this.$bus.$on("imgload", this.itemlisner);
  },

}
export const backtopmixin = {

}