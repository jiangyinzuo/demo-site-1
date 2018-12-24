<template>
  <div>
    <div class="title">2017届本科毕业生毕业半年后就业满意度&nbsp;单位：%</div>
    <ve-bar :data="chartData1"></ve-bar>
    <br/>
    <div class="title">本科毕业生薪酬最高（最低）的3个专业薪酬&nbsp;单位：元</div>
    <ve-histogram :data="chartData2"></ve-histogram>
    <div class="title">16～18年本科和硕士毕业生离职率</div>
    <ve-line :data="chartData3" :settings="chartSettings"></ve-line>
  </div>
</template>

<script>
export default {
  name: 'Charts',
  data () {
    this.chartSettings = {
      metrics: ['本科生', '硕士生'],
      dimension: ['年份']
    }
    return {
      chartData1: {
        columns: ['城市', '满意度'],
        rows: [
          { '城市': '北京', '满意度': 75.9 },
          { '城市': '上海', '满意度': 73.9 },
          { '城市': '广州', '满意度': 71 },
          { '城市': '深圳', '满意度': 70.2 },
          { '城市': '杭州', '满意度': 75.3 },
          { '城市': '宁波', '满意度': 72 }
        ]
      },
      chartData2: {
        columns: ['专业', '薪酬'],
        rows: [
          { '专业': '网络工程', '薪酬': 5475 },
          { '专业': '光电信息', '薪酬': 4601 },
          { '专业': '物联网', '薪酬': 5194 },
          { '专业': '学前教育', '薪酬': 3221 },
          { '专业': '临床医学', '薪酬': 3159 },
          { '专业': '口腔医学', '薪酬': 2914 }
        ]
      },
      chartData3: {
        columns: ['年份', '本科生', '硕士生'],
        rows: [
          { '年份': '2016', '本科生': 1393, '硕士生': 1093 },
          { '年份': '2017', '本科生': 3530, '硕士生': 3230 },
          { '年份': '2018', '本科生': 2923, '硕士生': 2623 }
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
    margin: 15px;
  }
</style>
