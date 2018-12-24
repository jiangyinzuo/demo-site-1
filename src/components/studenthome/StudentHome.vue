<template>
  <div>
    <home-header @input="checkInput"></home-header>
    <div class="wrapper">
      <Row class-name="row">
        <Col span="6">
          <div style="margin: 0 auto">
          <Menu theme="light" :active-name="active" @on-select="handleMenu">
            <Button class="search" @click="showDrawer = true" type="primary">筛选</Button>
            <MenuItem name="4">
              校招日历
            </MenuItem>
            <MenuItem name="2">
              参考信息
            </MenuItem>
            <MenuItem name="0">
              查看结果
            </MenuItem>
            <MenuItem name="1">
              职位收藏
            </MenuItem>
            <MenuItem name="3">
              我的好友
            </MenuItem>
          </Menu>
          </div>
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
          <div v-if="showBoard === 'Jobs'">
            <Card
              style="width:900px; margin:10px"
              v-for="item in infoList"
              v-if="showItem === item.industry"
            >
              <p style="text-align:center; font-size: 20px" slot="title">
                {{item.title}}<Icon :type="item.star" @click="handleStar(item)" class="star"/>
              </p>
              <p>{{item.content}}</p>
            </Card>
          </div>
          <charts v-else-if="showBoard === 'Charts'"></charts>
          <div v-else-if="showBoard === 'Files'">
            <Card
              style="width:900px; margin:10px"
              v-for="item in infoList"
              v-show="item.showStar"
            >
              <p style="text-align:center; font-size: 20px" slot="title">
                {{item.title}}<Icon :type="item.star" @click="handleStar(item)" class="star"/>
              </p>
              <p>{{item.content}}</p>
            </Card>
          </div>
          <div v-else-if="showBoard === 'Calendar'">
            <calendar></calendar>
          </div>
          <div v-else-if="showBoard === 'Friends'">
            <Scroll class="chatting-box">
              <div v-for="item in msgContent">
                <div class="me-txt">
                  {{item}}
                  <Avatar size="large" class="avatar">佐</Avatar>
                </div>
                <div class="ai-txt">
                  <Avatar size="large" class="avatar">AI</Avatar>
                  {{item + '!'}}
                </div>
              </div>
            </Scroll>
            <Input
              type="textarea"
              v-model="message"
              placeholder="想要说什么？"
              class="message-box"
              rows="7"
              @keyup.enter.native="handleMessage"
            />
            <Button class="message-button" @click="handleMessage">发送</Button>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import Charts from './components/Charts'
import Calendar from './components/Calendar'

export default {
  name: 'StudentHome',
  components: {
    HomeHeader,
    Charts,
    Calendar
  },
  data () {
    return {
      msgContent: [],
      message: '',
      input: '',
      active: '4',
      showDrawer: false,
      showItem: '',
      showBoard: 'Calendar',
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
      cityList: [{
        value: '不限',
        label: '不限'
      }, {
        value: '上海',
        label: '上海'
      }, {
        value: '广州',
        label: '广州'
      }, {
        value: '成都',
        label: '成都'
      }, {
        value: '深圳',
        label: '深圳'
      }, {
        value: '北京',
        label: '北京'
      }],
      industryList: [{
        value: '不限',
        label: '不限'
      }, {
        value: '互联网/IT',
        label: '互联网/IT'
      }, {
        value: '金融',
        label: '金融'
      }, {
        value: '制造业',
        label: '制造业'
      }],
      majorList: [{
        value: '不限',
        label: '不限'
      }, {
        value: '计算机/软件',
        label: '计算机/软件'
      }, {
        value: '医学',
        label: '医学'
      }, {
        value: '机械',
        label: '机械'
      }, {
        value: '经管',
        label: '经管'
      }],
      infoList: [{
        industry: 'IT',
        showStar: false,
        star: 'ios-star-outline',
        title: 'web前端工程师',
        content: 'web前端工程师是一种新兴的职业，他们既要和上游的UI设计师、交互设计师合作，又要和下游的后端工程师沟通。要想成为一名优秀的前端，需要有终身学习的能力。'
      }, {
        industry: 'IT',
        showStar: false,
        star: 'ios-star-outline',
        title: '后端工程师(php)',
        content: 'php是世界上最好的语言。'
      }, {
        industry: 'IT',
        showStar: false,
        star: 'ios-star-outline',
        title: '后端工程师(Java)',
        content: 'Java开发国内市场需求大。'
      }, {
        industry: 'IT',
        showStar: false,
        star: 'ios-star-outline',
        title: '算法工程师（自然语言处理）',
        content: 'NLP是计算机科学领域与人工智能领域中的一个重要方向。'
      }, {
        industry: 'IT',
        showStar: false,
        star: 'ios-star-outline',
        title: '运维工程师',
        content: '运维负责维护并确保整个服务的高可用性，同时不断优化系统架构提升部署效率。无论做什么运维，运维工程师最基本的职责都是负责服务的稳定性，确保服务可以7*24H不间断地为用户提供服务。在此之上运维工程师的主要工作职责如下：\n' +
          '质量：保障并不断提升服务的可用性，确保用户数据安全，提升用户体验。\n' +
          '效率：用自动化的工具/平台提升软件在研发生命周期中的工程效率。\n' +
          '成本：通过技术手段优化服务架构、性能调优；通过资源优化组合降低成本、提升ROI。\n' +
          '从产品的生命周期来看：\n' +
          '1. 产品发布前：负责参与并审核架构设计的合理性和可运维性，以确保在产品发布之后能高效稳定的运行。\n' +
          '2. 产品发布阶段：负责用自动化的技术或者平台确保产品可以高效的发布上线，之后可以快速稳定迭代。\n' +
          '3. 产品运行维护阶段：负责保障产品7*24H稳定运行，在此期间对出现的各种问题可以快速定位并解决；在日常工作中不断优化系统架构和部署的合理性，以提升系统服务的稳定性。'
      }, {
        industry: 'eco',
        showStar: false,
        star: 'ios-star-outline',
        title: '财务管理',
        content: '负责销售收入的核算及分析。需要具备一定的数据统计、分析能力，专业判断能力，具有良好的沟通能力、应变能力。'
      }, {
        industry: 'eco',
        showStar: false,
        star: 'ios-star-outline',
        title: '产品经理',
        content: '产品经理（Product Manager）是企业中专门负责产品管理的职位，产品经理负责市场调查并根据用户的需求，确定开发何种产品，选择何种业务模式、商业模式等。并推动相应产品的开发组织，他还要根据产品的生命周期，协调研发、营销、运营等，确定和组织实施相应的产品策略，以及其他一系列相关的产品管理活动。'
      }, {
        industry: 'doctor',
        showStar: false,
        star: 'ios-star-outline',
        title: '外科医生',
        content: '外科医生，是一个职业。主要是诊断外科疾病，为患者提供手术治疗的医务工作者。通过分析病人的病史、药物过敏反应、身体条件和检查结果，确认做手术的必要性，并制定施行手术的方案，实施手术。'
      }]
    }
  },
  methods: {
    handleInfo () {
      this.showDrawer = false
      if (this.selectItem.major === '计算机/软件' || this.selectItem.industry === '互联网/IT') {
        this.showItem = 'IT'
      } else if (this.selectItem.major === '经管') {
        this.showItem = 'eco'
      } else if (this.selectItem.major === '医学') {
        this.showItem = 'doctor'
      } else {
        this.showItem = ''
      }
      this.active = '0'
      this.showBoard = 'Jobs'
    },
    handleMenu (name) {
      if (name === '0') {
        this.showBoard = 'Jobs'
      } else if (name === '1') {
        this.showBoard = 'Files'
      } else if (name === '2') {
        this.showBoard = 'Charts'
      } else if (name === '4') {
        this.showBoard = 'Calendar'
      } else if (name === '3') {
        this.showBoard = 'Friends'
      }
    },
    handleStar (item) {
      if (item.star === 'ios-star-outline') {
        item.star = 'ios-star'
        item.showStar = true
      } else {
        item.star = 'ios-star-outline'
        item.showStar = false
      }
    },
    checkInput (inputContent) {
      this.input = inputContent
      this.active = '0'
      this.showBoard = 'Jobs'
      if (this.input === '互联网' || this.input === 'IT' || this.input === '计算机') {
        this.showItem = 'IT'
      } else if (this.input === '经管' || this.input === '财务') {
        this.showItem = 'eco'
      } else if (this.input === '医生') {
        this.showItem = 'doctor'
      } else {
        this.showItem = ''
      }
    },
    handleMessage () {
      this.msgContent.push(this.message)
      this.message = ''
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
  .row {
    background: #eee;
    overflow: hidden;
  }
  .wrapper {
    min-height: 601px
  }
  .message-box {
    width: 600px;
    margin: 10px;
  }
  .message-button {
    bottom: 12px;
    position: fixed;
  }
  .chatting-box {
    width: 600px;
    height: 400px;
    background: #ffffff;
    margin: 10px;
    padding: 10px;
    border-radius: 15px;
  }
  .me-txt {
    font-size: 25px;
    text-align: right;
    margin: 15px;
    right: 20px;
    color: #000;
  }
  .ai-txt {
    font-size: 25px;
    text-align: left;
    margin: 15px;
    left: 20px;
    color: #000;
  }
  .avatar {
    margin: 10px;
    color: #f56a00;
    background-color: #fde3cf;
  }
</style>
