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
          <div class="group-style">群组</div>
        </el-col>
      </el-row>
    </div>

    <div class="deptstyle">
      <el-tree
        :data="products"
        :props="defaultProps"
        :highlight-current="highlight"
        accordion
        @node-click="handleNodeClick">
      </el-tree>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        highlight: true,
        defaultProps: {
          children: 'nodes',
          label: 'text'
        }
      }
    },
    computed: {
      ...mapGetters({
        products: 'schoolTreeData'
      })
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
    height: 500px;
    overflow-y: auto;
  }
  .group-style{
    text-align: center;border-bottom-right-radius: 4px;border-top-right-radius: 4px;background: rgba(255, 255, 255, 0.5);min-height: 35px; line-height: 35px;; font-size: 13px;
  }

  .group-style:active{
    background: #38adff;
    color: white;
  }

</style>
