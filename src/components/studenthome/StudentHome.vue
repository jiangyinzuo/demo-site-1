<template>
  <div>
    <home-header></home-header>
    <Menu :theme="theme3" active-name="1">
      <Button class="search" @click="showDrawer = true" type="primary">筛选</Button>
      <MenuItem name="1">
        筛选
      </MenuItem>
    </Menu>
    <Drawer
      v-model="showDrawer"
      title="Create"
      width="720"
      :mask-closable="false"
      :styles="styles"
    >
      <Form>
        <FormItem label="选择城市">
          <Select v-model="formItem.select" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
      </Form>
    </Drawer>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'

export default {
  name: 'StudentHome',
  components: {
    HomeHeader
  },
  data () {
    return {
      theme3: 'light',
      showDrawer: false,
      styles: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        paddingBottom: '53px',
        position: 'static'
      },
      formItem: {
        select: ''
      },
      cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ]
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
</style>
