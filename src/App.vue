<template>
  <div id="app">
    <Layout></Layout>
    <div class="mainstyle" style="background-color: #e7e8eb">
      <div class="contentstyle" v-loading="commonloading"  element-loading-text="拼命加载中">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Layout from './components/layout/Layout'

  export default {
    name: 'app',
    computed: {
      commonloading () {
        return this.$store.state.loadmodule.loadingstatus
      }
    },
    components: {Layout}
  }
</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
  .contentstyle{
    width: 1080px;
    margin: 0 auto;
  }


  .mainstyle{
    height: 100%;

  }
</style>
