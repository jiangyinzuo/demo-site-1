<template>
  <div class="layout">
    <Layout>
      <Header class="header">
        <div class="logo">就业信息网</div>
        <Avatar icon="ios-person" size="large" class="avatar"/>
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
<style scoped>
  .header {
    overflow: hidden;
  }
  .logo {
    color: #ffffff;
    font-size: 2rem;
    display:inline-block;
    position: absolute;
    height: 100%;
    cursor: default;
  }
  .avatar {
    position: absolute;
    right: 20px;
    margin-top: 10px;
    display: inline-block;
  }
</style>
