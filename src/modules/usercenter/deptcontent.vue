<template>
  <div>
    <el-row>
      <el-col :span="5" :push="1">
        <div style="margin-top: 18px;">
          <grouptree></grouptree>
        </div>
      </el-col>
      <el-col :span="19" :push="1">
        <div style="margin-top: 18px;background: white; margin-left: 10px;">
          <el-row style="padding-bottom: 10px;">
            <el-col :span="5">
              <div style="margin-left: 15px; margin-top: 10px;">
                <i class="el-icon-share"></i>
                <span>群组</span>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <div style="background: #eceff4; min-height: 42px; line-height: 42px; margin-left: 15px; margin-right: 15px;">
              <div style="float: left; margin-left: 10px;">
                <el-button size="small">添加群组</el-button>
              </div>
            </div>
            <div class="deptrightstyle">
              <div style="float: left; margin-left: 10px; font-size: 13px;">
                教师组(12人)
              </div>
              <div style="float: right;font-size: 11px;">
                <i class="el-icon-arrow-right" ></i>
              </div>
            </div>
          </el-row>
          <el-row>
            <div style="margin-left: 15px; margin-top: 40px;">
              <i class="el-icon-share"></i>
              <span>群组成员</span>
            </div>
            <div style="margin-top: 10px; margin-left: 15px;">
              <teacher></teacher>
            </div>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import grouptree from './group/group.vue'
  import student from './student/student'
  import adddeptmodal from './dept/modal'
  import teacher from './teacher/teacher'
  import * as actiontypes from '../../store/action-types'

  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    created () {
      this.$store.dispatch(actiontypes.GROUP_DATA_ACTION)
    },
    methods: {
      handleSelect (key, keyPath) {
      }
    },
    components: { grouptree, student, adddeptmodal, teacher }
  }
</script>
<style scoped>
  .deptrightstyle{
    border-bottom: 1px solid #ebebeb; min-height: 42px; line-height: 42px; margin-left: 15px; margin-right: 15px;
  }
  .deptrightstyle:hover{
    background: #f9fafc;
  }
</style>
