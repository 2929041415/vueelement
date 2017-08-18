<template>
  <div id="app">
    <Layout></Layout>
    <div class="mainstyle" style="background-color: #e7e8eb">
      <div class="contentstyle">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Layout from './components/layout/Layout'

  export default {
    name: 'app',
    components: {Layout}

  }
</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
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
