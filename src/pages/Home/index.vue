<template>
  <div>
    <TypeNav></TypeNav>
    <Container></Container>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import Container from '@/pages/Home/Container'
import Recommend from '@/pages/Home/Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
  export default {
    name:'Home',
    components:{
      Container,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand
    }
  }
</script>

<style lang="less" scoped>

</style>