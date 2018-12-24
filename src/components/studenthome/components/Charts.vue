<template>
  <div>
    <div class="title">2017届本科毕业生毕业半年后就业满意度&nbsp;（单位%）</div>
    <ve-bar :data="chartData"></ve-bar>
  </div>
</template>

<script>
export default {
  name: 'Charts',
  data () {
    return {
      chartData: {
        columns: ['城市', '满意度'],
        rows: [
          { '城市': '北京', '满意度': 75.9 },
          { '城市': '上海', '满意度': 73.9 },
          { '城市': '广州', '满意度': 71 },
          { '城市': '深圳', '满意度': 70.2 },
          { '城市': '杭州', '满意度': 75.3 },
          { '城市': '宁波', '满意度': 72 }
        ]
      }
    }
  }
}
</script>

<style scoped>
  .title {
    text-align: center;
    font-size: 25px;
  }
</style>
