<template>
  <div>
    <div style="margin-bottom: 10px; background: #eceff4;min-height: 42px; line-height: 42px; margin-right: 15px;">
      <el-button size="small" style="margin-left: 10px;"  type="primary">添加成员</el-button>
      <el-button size="small">批量导入/导出</el-button>
      <el-button size="small">调整部门</el-button>
      <el-button size="small">调整顺序</el-button>
    </div>

    <div style="margin-right: 15px;">
      <div>
        <el-row  style="background: #eef1f6 ">
          <el-col :span="4"><div class="tablehead-style" ><el-checkbox></el-checkbox></div></el-col>
          <el-col :span="6"><div class="tablehead-style" >日期</div></el-col>
          <el-col :span="6"><div class="tablehead-style" >姓名</div></el-col>
          <el-col :span="8"><div class="tablehead-style" >地址</div></el-col>
        </el-row>

        <draggable  :move="getdata" @update="datadragEnd">
          <transition-group>
            <el-row class="colum-style"  v-for="item in tableData3" :key="item.date">
              <el-col :span="4"><div class="tablecolum-style" ><el-checkbox></el-checkbox></div></el-col>
              <el-col :span="6"><div class="tablecolum-style" v-text="item.date"></div></el-col>
              <el-col :span="6"><div class="tablecolum-style" v-text="item.name"></div></el-col>
              <el-col :span="8"><div class="tablecolum-style" v-text="item.address"></div></el-col>
            </el-row>
          </transition-group>
        </draggable>

      </div>

      <el-pagination class="pagestyle"
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="currentPage4"
                     :page-sizes="[100, 200, 300, 400]"
                     :page-size="100"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
    data () {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: [],
        currentPage4: 4,
        smallpage: true
      }
    },
    components: { draggable },
    methods: {
      toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
      },
      getdata (evt) {
        console.log(evt.draggedContext.element.id)
      },
      datadragEnd (evt) {
        console.log('拖动前的索引 :' + evt.oldIndex)
        console.log('拖动后的索引 :' + evt.newIndex)
        console.log(this.tags)
      }
    }
  }
</script>
<style scoped>
  .pagestyle{
    float: right;
  }
  .tablehead-style{
    text-align: center;
    line-height: 38px;
    height: 38px;
    font-size: 13px;
    border-bottom: 1px solid #ebebeb;
  }
  .tablecolum-style{
    text-align: center;
    line-height: 38px;
    height: 38px;
    font-size: 13px;
    border-bottom: 1px solid #ebebeb;
  }

  .colum-style:hover{
    background: rgb(236, 239, 244);
  }

  .colum-style{
  }
</style>
