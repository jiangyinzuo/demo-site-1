<template>
  <div>
    <home-header></home-header>
    <div class="wrapper">
      <Row style="background: #eee; padding: 15px">
        <Col span="6">
          <Menu :theme="theme3" active-name="2" @on-select="handleMenu">
            <Button class="search" @click="showDrawer = true" type="primary">筛选</Button>
            <MenuItem name="2">
              参考信息
            </MenuItem>
            <MenuItem name="0">
              查看结果
            </MenuItem>
            <MenuItem name="1">
              职位收藏
            </MenuItem>
          </Menu>
          <Drawer
            v-model="showDrawer"
            title="条件筛选"
            width="300"
            :mask-closable="false"
            :styles="styles"
          >
            <Form>
              <FormItem label="选择城市">
                <Select v-model="selectItem.city" style="width:200px">
                  <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
              <FormItem label="选择行业">
                <Select v-model="selectItem.industry" style="width:200px">
                  <Option v-for="item in industryList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
              <FormItem label="选择专业">
                <Select v-model="selectItem.major" style="width:200px">
                  <Option v-for="item in majorList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
            </Form>
            <Button type="success" @click="handleInfo" long>确定</Button>
          </Drawer>
        </Col>
        <Col span="18">
          <div v-show="showJobs">
            <Card
              style="width:900px; margin:10px"
              v-for="item in infoList"
              v-show="showItem.IT"
            >
              <p style="text-align:center; font-size: 20px" slot="title">
                {{item.title}}<Icon :type="item.star" @click="handleStar(item)" class="star"/>
              </p>
              <p>{{item.content}}</p>
            </Card>
          </div>
          <charts v-show="showCharts"></charts>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import Charts from './components/Charts'

export default {
  name: 'StudentHome',
  components: {
    HomeHeader,
    Charts
  },
  data () {
    return {
      theme3: 'light',
      showDrawer: false,
      showCharts: true,
      showJobs: false,
      showFiles: false,
      showItem: {
        IT: false,
        eco: false
      },
      styles: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        paddingBottom: '53px',
        position: 'static'
      },
      selectItem: {
        city: '不限',
        industry: '不限',
        major: '不限'
      },
      cityList: [
        {
          value: '不限',
          label: '不限'
        },
        {
          value: '上海',
          label: '上海'
        },
        {
          value: '广州',
          label: '广州'
        },
        {
          value: '成都',
          label: '成都'
        },
        {
          value: '深圳',
          label: '深圳'
        },
        {
          value: '北京',
          label: '北京'
        }
      ],
      industryList: [
        {
          value: '不限',
          label: '不限'
        },
        {
          value: '互联网/IT',
          label: '互联网/IT'
        },
        {
          value: '金融',
          label: '金融'
        }
      ],
      majorList: [
        {
          value: '不限',
          label: '不限'
        },
        {
          value: '计算机/软件',
          label: '计算机/软件'
        },
        {
          value: '医学',
          label: '医学'
        },
        {
          value: '机械',
          label: '机械'
        }
      ],
      infoList: [{
        star: 'ios-star-outline',
        title: 'web前端工程师',
        content: 'web前端工程师是一种新兴的职业，他们既要和上游的UI设计师、交互设计师合作，又要和下游的后端工程师沟通。要想成为一名优秀的前端，需要有终身学习的能力。'
      }, {
        star: 'ios-star-outline',
        title: '后端工程师',
        content: '后端工程师的工作与后台数据库有关。'
      }, {
        star: 'ios-star-outline',
        title: '算法工程师',
        content: '人工智能时代竞争及其激烈的岗位，同时待遇、门槛较高。'
      }]
    }
  },
  methods: {
    handleInfo () {
      this.showDrawer = false
      if (this.selectItem.major === '计算机/软件') {
        this.showItem.IT = true
      } else {
        this.showItem.IT = false
      }
    },
    handleMenu (name) {
      if (name === '0') {
        this.showFiles = false
        this.showCharts = false
        this.showJobs = true
      } else if (name === '1') {
        this.showJobs = false
        this.showCharts = false
        this.showFiles = true
      } else if (name === '2') {
        this.showFiles = false
        this.showJobs = false
        this.showCharts = true
      }
    },
    handleStar (item) {
      if (item.star === 'ios-star-outline') {
        item.star = 'ios-star'
      } else {
        item.star = 'ios-star-outline'
      }
    }
  }
}
</script>

<style scoped>
  .search {
    margin: 20px 20px;
    position: inherit;
    left: 60px;
  }
  .star {
    position: absolute;
    right: 20px;
    top: 10px;
    font-size: 30px;
    cursor: pointer;
  }
</style>
