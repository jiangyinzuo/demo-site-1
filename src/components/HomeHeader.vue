<style scoped>
  .header {
    position: relative;
    overflow: hidden;
  }
  .logo {
    color: #ffffff;
    font-size: 2rem;
    background: red;
    display:inline-block;
    position: absolute;
    height: 100%;
  }
  .login-button {
    color: #ffffff;
    background: green;
    padding: 0 .2rem 0 .2rem;
    margin: 0;
    right: 4.5rem;
    position: absolute;
    font-size: 1.5rem;
    height: 100%;
    overflow: hidden;
  }
  .sign-up-button {
    color: #ffffff;
    background: red;
    padding: 0 .2rem 0 .2rem;
    margin: 0;
    right: .8rem;
    position: absolute;
    font-size: 1.5rem;
    height: 100%;
  }
  .business-login {
    color: #ffffff;
    background: red;
    padding: 0 .2rem 0 .2rem;
    margin: 0;
    right: 14rem;
    position: absolute;
    font-size: 1.5rem;
    border: .2rem solid #fff;
    height: 100%;
    bottom: 0;
    display: inline;
  }
</style>
<template>
  <div class="layout">
    <Layout>
      <Header class="header">
        <router-link to="/">
          <div class="logo">就业信息网</div>
        </router-link>
        <div v-show="login">
          <router-link to="/business">
            <div class="business-login">企业版</div>
          </router-link>
          <router-link to="/login">
            <div class="login-button">登录</div>
          </router-link>
          <router-link to="/signup">
            <div class="sign-up-button">注册</div>
          </router-link>
        </div>
      </Header>
    </Layout>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      login: true
    }
  }
}
</script>
