<!-->
使用卡片进入需要审批的项目后弹出窗口（需要优化窗口中的项目信息显示）
随后进行通过或者驳回。
<-->
<template>
  <div class="projectpanel">
    <el-row :gutter="24">
      <el-col :span="8" v-for="worktime in worktimes" :key="worktime.id" :offset="1">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{worktime.name}} {{worktime.id}}</span>
          </div>
          <div v-for="o in worktime" :key="o" class="text item">{{ o }}</div>
          <el-button
            class="text item"
            type="primary"
            style="float: right"
            @click="sendform()"
          >汇报通过</el-button>
          <el-button
            class="text item"
            type="primary"
            style="float: left"
            @click="handleReject"
          >汇报驳回</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.projectpanel {
  width: 100%;
  background: rgb(240, 243, 244);
  box-shadow: none;
  font-size: 20px;
  color: #4d63bc;
  overflow: hidden;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
  width: 20%;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>

<script>
export default {
  name: "worktimelist",
  data() {
    return {
      worktimes: [
        {
          id: "20200320", //工时汇报id
          name: "陈晨光", //工时汇报者
          proj: "老八蜜汁小汉堡", //工时汇报项目
          func: "管饱", //所做功能
          date1: "2020-03-20", //工作开始日期
          date2: "2020-04-20", //工作结束日期
          comment: "奥利给"
        }
      ],
      dialogVisible: false
    };
  },
  methods: {
    handleReject(done) {
      this.$confirm("确认驳回？")
        .then(_ => {
          done();
        })
        .catch(_ => {
          this.dialogVisible = false;
        });
    },
    sendform() {
      this.$confirm("确认通过？")
        .then(_ => {
          done();
        })
        .catch(_ => {
          this.dialogVisible = false;
        });
    }
  }
};
</script>