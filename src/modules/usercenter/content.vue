<template>
  <div>
    <el-row>
      <el-col :span="5" :push="1">
        <div style="margin-top: 30px;">
          <depttree></depttree>
        </div>
      </el-col>
      <el-col :span="19" :push="1">
        <el-row>
          <i class="el-icon-share"></i>
        </el-row>
        <el-row>
          <div style="margin-top: 30px; margin-left: 15px;">
            <student></student>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import depttree from './dept/dept'
  import student from './student/student'

  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
      }
    },
    components: { depttree, student }
  }
</script>
<style scoped>

</style>
