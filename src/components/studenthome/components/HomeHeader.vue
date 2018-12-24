<template>
  <div class="layout">
    <Layout>
      <Header class="header">
        <div class="logo">就业信息网</div>
        <Input placeholder="请输入关键字" class="search-box" v-model="input" @keyup.enter.native="handleInput">
          <Button slot="append" icon="ios-search" @click="handleInput" class="search-button"></Button>
        </Input>
        <Avatar size="large" class="avatar">佐</Avatar>
      </Header>
    </Layout>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      input: '',
      selectKeyword: ''
    }
  },
  methods: {
    handleInput () {
      this.$emit('input', this.input)
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
  .search-box {
    width: 300px;
    position: absolute;
    left: 270px;
    margin-top: 17px;
  }
  .avatar {
    position: absolute;
    right: 20px;
    margin-top: 10px;
    display: inline-block;
    color: #f56a00;
    background-color: #fde3cf;
    font-size: 20px;
  }
</style>
