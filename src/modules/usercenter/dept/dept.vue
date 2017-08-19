<template>
  <div>
    <div>
      <el-input
        placeholder="搜索"
        icon="search"
        >
      </el-input>
    </div>
    <div style="margin-top: 10px;">
      <el-row>
        <el-col :span="12">
          <div style="text-align: center;border-bottom-left-radius: 4px;border-top-left-radius: 4px;background: #38adff;min-height: 35px; line-height: 35px; font-size: 13px; color: white">部门</div>
        </el-col>
        <el-col :span="12">
          <div style="text-align: center;;border-bottom-right-radius: 4px;border-top-right-radius: 4px;background: rgba(255, 255, 255, 0.5);min-height: 35px; line-height: 35px;; font-size: 13px;">群组</div>
        </el-col>
      </el-row>
    </div>
    <div class="deptstyle">
      <el-tree
        :data="data"
        :props="defaultProps"
        accordion
        @node-click="handleNodeClick">
      </el-tree>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        data: [{
          label: '教务处',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '审计处',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '德育处',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      handleNodeClick (data) {
      }
    }
  }
</script>
<style scoped>
  .deptstyle{
    margin-top: 10px;
    text-align: left;
  }
</style>
