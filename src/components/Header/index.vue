<template>
  <div>
    <!-- 头部 -->
    <header class="header">
      <!-- 头部的第一行 -->
      <div class="top">
        <div class="container">
          <div class="loginList">
            <p>尚品汇欢迎您！</p>
            <p v-if="userInfo.name">
              <!-- <span>请</span> -->
              <a href="javascript:;">{{userInfo.name}}</a>
              <a href="javascript:;" class="register" @click="logout">退出</a>
              <!-- <router-link to="/login">登录</router-link> -->
              <!-- <router-link to="/register" class="register">免费注册</router-link> -->
            </p>

            <p v-else>
              <span>请</span>
              <!-- <a href="###">登录</a> -->
              <!-- <a href="###" class="register">免费注册</a> -->
              <router-link to="/login">登录</router-link>
              <router-link to="/register" class="register">免费注册</router-link>
            </p>
          </div>
          <div class="typeList">
            <a href="###">我的订单</a>
            <!-- <a href="###">我的购物车</a> -->
            <router-link to="/shopcart">我的购物车</router-link>
            <a href="###">我的尚品汇</a>
            <a href="###">尚品汇会员</a>
            <a href="###">企业采购</a>
            <a href="###">关注尚品汇</a>
            <a href="###">合作招商</a>
            <a href="###">商家后台</a>
          </div>
        </div>
      </div>
      <!--头部第二行 搜索区域-->
      <div class="bottom">
        <h1 class="logoArea">
          <!-- <a class="logo" title="尚品汇" href="###" target="_blank"> -->
          <router-link to="/home" class="logo" title="尚品汇">
            <img src="./images/logo.png" alt />
          </router-link>
          <!-- </a> -->
        </h1>
        <div class="searchArea">
          <form action="###" class="searchForm">
            <input
              type="text"
              id="autocomplete"
              class="input-error input-xxlarge"
              v-model="keyword"
            />
            <button class="sui-btn btn-xlarge btn-danger" type="button" @click="toSearch">搜索</button>
          </form>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Header",
  data() {
    return {
      keyword: ""
    };
  },
  mounted() {
    this.$bus.$on("clearKeyword", this.clearKeyword);
  },
  methods: {
    toSearch() {
      // this.$router.push({
      //   name:'search',
      //   query:{
      //     keyword1:this.keyword.toUpperCase()
      //   },
      //   params:{
      //     keyword:this.keyword || undefined
      //   }
      // })
      let location = {
        name: "search",
        params: {
          keyword: this.keyword || undefined
        }
      };
      // 点击三级分类的时候，也要关注是否有params参数
      let { query } = this.$route;
      if (query) {
        location.query = query;
      }
      //看是否从首页去到search页
      if (this.$route.path !== "/home") {
        this.$router.replace(location);
      } else {
        this.$router.push(location);
      }
    },
    clearKeyword() {
      this.keyword = "";
    },
    async logout(){
      try {
        await this.$store.dispatch('userLogout')
        alert('退出成功，自动跳转首页')
        this.$router.push('/home')
      } catch (error) {
        alert(error.message)
      }
    }
  },
  computed:{
    ...mapState({
      userInfo:state => state.user.userInfo
    })
  }
};
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>