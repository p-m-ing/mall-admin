<template>
  <div class="main-header">
    <a-button type="primary"
              style="margin-bottom: 16px"
              @click="toggleCollapsed">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item><a href=""> 统计</a></a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <ul class="user-info">
      <li>欢迎 hello123
        <a-icon type="down" />
      </li>
      <li>退出</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
	mounted(){
		console.log('header',this.collapsed)
	},
  methods: {
    toggleCollapsed () {
      //this.collapsed = !this.collapsed
			console.log('header 被点击')
			this.$emit('headerClick',this.collapsed)
    }
  }
}
</script>

<style>

</style>