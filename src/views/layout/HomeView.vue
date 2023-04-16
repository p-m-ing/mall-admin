<template>
  <div class="home">
    <LeftMenu :collapsed="collapsed"/>
    <div :class="{'main-app':true,'menu-unfold':collapsed}">
      <Header :collapsed="collapsed" @headerClick='updateCollapsed'/>
    </div>
  </div>
</template>

<script>
import LeftMenu from './components/Menu.vue'
import Header from './components/Header.vue'
export default {
  data () {
    return {
      collapsed: false,
    };
  },
  components: {
    LeftMenu,
    Header
  },
  methods: {
    updateCollapsed(val){
      console.log('hand',val)
      this.collapsed=!val
    }
  },
};
</script>
<style lang='less' >
@import url("~@/assets/css/home.less");
</style>
