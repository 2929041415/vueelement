<template>
  <div>
    <el-dialog
      style="height: 100%; overflow-y: hidden"
      custom-class="styledialog"
      title="群组"
      top="0"
      lock-scroll
      :visible.sync="modaldialogstatus"
      :modal="modalshowstatus"
      :before-close="handleClose">
        <el-form ref="form" label-position="right"  label-width="80px">
          <el-form-item label="群组名称">
            <el-input size="small" style="width: 80%; margin-left: 20px;"></el-input>
          </el-form-item>
        </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button size="small" @click="canclemodal">取 消</el-button>
    <el-button size="small" type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import * as actiontypes from '../../../store/action-types'

  export default {
    computed: {
      modaldialogstatus: {
        get () {
          return this.$store.state.group.modalstatus
        },
        set (value) {
        }
      },
      modalshowstatus () {
        return this.$store.state.group.modalshowstatus
      }
    },
    methods: {
      handleClose (done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done()
          })
          .catch(_ => {})
      },
      canclemodal () {
        this.$store.dispatch(actiontypes.CHANGE_GROUP_MODAL, false)
      }
    }
  }
</script>
<style>
  .styledialog{
    width: 30%;
    left: 85%;
    margin-bottom: 0px;
    height: 100%;
  }
  .styledialog .el-dialog__footer{
    position: fixed;
    bottom: 0;
    left: 30%;
  }
  .styledialog .el-dialog__body{
    height: 75%;
    overflow-y: auto;
  }

  .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content{
    background-color: #38adff;
    color: white;
  }
</style>
