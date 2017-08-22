<template>
  <div>
    <div>
      <el-input
        placeholder="搜索"
        icon="search"
        v-model="filterText"
      >
      </el-input>
    </div>
    <div style="margin-top: 10px;">
      <el-row>
        <el-col :span="12">
          <div  class="group_style" @click="chooseorg('/')">部门</div>
        </el-col>
        <el-col :span="12">
          <div  class="dept_style" @click="chooseorg('/usergroup')">群组</div>
        </el-col>
      </el-row>
    </div>


    <div class="deptstyle">
      <el-tree class="treestyle"
               :data="groupdatas"
               :props="defaultProps"
               :highlight-current="highlight"
               accordion
               @node-click="handleNodeClick"
               :filter-node-method="filterNode"
               ref="tree2">
      </el-tree>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        highlight: true,
        defaultProps: {
          children: 'nodes',
          label: 'text'
        },
        filterText: ''
      }
    },
    computed: {
      groupdatas () {
        return this.$store.state.group.grouptree
      }
    },
    methods: {
      handleNodeClick (data) {
      },
      filterNode (value, data) {
        if (!value) return true
        return data.text.indexOf(value) !== -1
      },
      chooseorg (val) {
        this.$router.push(val)
      }
    },
    watch: {
      filterText (val) {
        this.$refs.tree2.filter(val)
      }
    }
  }
</script>
<style scoped>
  .deptstyle{
    margin-top: 10px;
    text-align: left;
  }
  .group_style{
    text-align: center;border-bottom-right-radius: 4px;border-top-right-radius: 4px;background: rgba(255, 255, 255, 0.5);min-height: 35px; line-height: 35px;; font-size: 13px;
  }

  .dept_style{
    text-align: center;border-bottom-left-radius: 4px;border-top-left-radius: 4px;background: #38adff;min-height: 35px; line-height: 35px; font-size: 13px; color: white
  }

  .treestyle{
    height: 500px; overflow-y: auto;
  }
</style>
