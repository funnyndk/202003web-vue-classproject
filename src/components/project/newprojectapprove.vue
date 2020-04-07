<!-->
使用卡片进入需要审批的项目后弹出窗口（需要优化窗口中的项目信息显示）
随后进行通过或者驳回。
<-->
<template>
  <div class="projectpanel">
    <el-row :gutter="24">
      <el-col :span="8" v-for="project in projects" :key="project.id" :offset="1">
        <el-card class="projectcard" :body-style="{ padding: '0px' }" shadow="always">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px;">
            <span>{{project.name}}</span>
            <div class="bottom clearfix">
              <div class="time">负责人:{{project.manager}}</div>
              <div class="time">{{project.status}}</div>
              <div class="button">
                <el-button type="text" @click="dialogVisible = true">申请信息</el-button>
                <el-dialog title="申请信息" :visible.sync="dialogVisible" width="30%">
                  <div class="text">
                    项目名称:{{project.name}}
                    <br />
                    <br />
                    项目客户:{{project.client}}
                    <br />
                    <br />
                    项目预约时间:{{project.date1}}
                    <br />
                    <br />
                    项目交付时间:{{project.date2}}
                    <br />
                    <br />
                    项目经理:{{project.manager}}
                    <br />
                    <br />
                    项目上级:{{project.boss}}
                    <br />
                    <br />
                    项目采用技术:{{project.tech}}
                    <br />
                    <br />
                    项目里程碑:{{project.majormilestone}}
                  </div>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="handleReject">申请驳回</el-button>
                    <el-button type="primary" @click="sendform()">申请通过</el-button>
                  </div>
                </el-dialog>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.projectcard {
  margin: 15px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  width: 200px;
}
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
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}
</style>

<script>
export default {
  name: "projectlist",
  data() {
    return {
      projects: [
        {
          ID: "2020J001D01",
          name: "这里的山路十八弯",
          client: "江先生  xx科技有限公司",
          clientID: "J001",
          date1: "2020-03-31",
          date2: "2020-04-20",
          manager: "陈晨光",
          boss: "陈晨光",
          bossID: "worker052",
          majormilestone: "第一步-把冰箱门打开",
          tech: []
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