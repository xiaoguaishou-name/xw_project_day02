<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-if="!$route.meta.isHide"></Footer>
  </div>
</template>

<script>
// import{reqCategoryList} from '@/api'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  //本来我们请求三级分类列表功能是在TypeNav里去做，但是从home切换到search这个会触发俩次，而数据又是一样的，所以我们需要做出优化
  mounted() {
    this.getCategoryList();
  },
  methods: {
    getCategoryList() {
      this.$store.dispatch("getCategoryList");
    },
  // 测试接口函数是否可用
  // mounted(){
  //   reqCategoryList()
  // } 
  }
}
</script>

<style lang="less" scoped>

</style>