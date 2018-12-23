<template>
    <div>
      <h1>就业信息网</h1>
      <router-link to="/studentLogin">
        <Card class="enter-button" id="student">学生入口</Card>
      </router-link>
        <Card class="enter-button" id="business">企业入口</Card>
    </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
  h1 {
    top: 200px;
    position: relative;
    margin: 0 auto;
    width: 300px;
    font-size: 50px;
    cursor: default;
  }
  .enter-button {
    width: 320px;
    position: absolute;
    top: 400px;
    text-align: center;
    font-size: 40px;
    cursor: pointer;
  }
  #student {
    left: 300px;
  }
  #business {
    right: 350px;
  }
</style>
