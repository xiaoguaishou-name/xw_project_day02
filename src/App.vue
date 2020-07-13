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
  // 测试接口函数是否可用
  // mounted(){
  //   reqCategoryList()
  // } 
};
</script>

<style lang="less" scoped>
</style>
