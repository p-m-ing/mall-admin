<template>
  <div class="home">
    <LeftMenu />
    <div :class="{'main-app':true,'menu-unfold':$store.state.collapsed}">
      <Header/>
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
    headerClick(val){
      console.log('hand',val)
      this.collapsed=!val
    }
  },
};
</script>
<style lang='less' >
@import url("~@/assets/css/home.less");
</style>
