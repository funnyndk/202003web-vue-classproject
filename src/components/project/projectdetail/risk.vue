<!-->
一个表格内含
风险ID，风险类型，风险描述，风险级别，风险影响度，风险应对策略,
风险状态，风险责任人，风险跟踪频度，风险相关者 

导入风险——下拉框
  从系统中其他类似项目中导入 
  从组织标准风险库中导入 

（按照风险等级会有不同的背景底色）
<-->
<template>
  <div id="setting">
    <div class="button">
      <el-button type="primary" @click="dialogFormVisible = true">导入风险</el-button>
      <el-dialog title="导入风险" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="选择导入来源" :label-width="formLabelWidth">
            <el-select v-model="form.new_risk" placeholder="请选择导入来源" style="width: 70%">
              <!-- 导入已有可选的上级 -->
              <el-option label="从系统中其他类似项目中导入" value="001"></el-option>
              <el-option label="从组织标准风险库中导入" value="002"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="sendform(form)">确 定</el-button>
        </div>
      </el-dialog>
    </div>

    <!-- 展示数据 -->
    <div class="wrap">
      <el-table 
        :data="settingdata" 
        style="width: 100%"
        height="250" 
        :row-class-name="tableRowClassName">
        <el-table-column prop="riskID" label="风险ID"></el-table-column>
        <el-table-column prop="riskType" label="风险类型"></el-table-column>
        <el-table-column prop="riskDescription" label="风险描述"></el-table-column>
        <el-table-column prop="riskLevel" label="风险级别"></el-table-column>
        <el-table-column prop="riskImpact" label="风险影响度"></el-table-column>
        <el-table-column prop="riskResponse" label="风险应对策略"></el-table-column>
        <el-table-column prop="riskStatus" label="风险状态"></el-table-column>
        <el-table-column prop="riskOwner" label="风险责任人"></el-table-column>
        <el-table-column prop="riskTrackingFrequency" label="风险跟踪频度"></el-table-column>
        <el-table-column prop="riskStakeholders" label="风险相关者"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "risk",
  data() {
    return {
      settingdata: [
        {
          riskID: "123", //风险ID
          riskType: "money", //风险类型
          riskDescription: "钱不够呗，还能咋底", //风险描述
          riskLevel: 1, //风险级别
          riskImpact: "不明", //风险影响度
          riskResponse: "没办法等着公司倒闭吧", //风险应对策略
          riskStatus: "无药可救中", //风险状态
          riskOwner: "ndk", //风险责任人
          riskTrackingFrequency: "一周一次", //风险跟踪频度
          riskStakeholders: "全体员工" //风险相关者
        },
        {
          riskID: "124", //风险ID
          riskType: "money", //风险类型
          riskDescription: "钱不够呗，还能咋底", //风险描述
          riskLevel: 2, //风险级别
          riskImpact: "低", //风险影响度
          riskResponse: "没办法等着公司倒闭吧", //风险应对策略
          riskStatus: "无药可救中", //风险状态
          riskOwner: "ndk", //风险责任人
          riskTrackingFrequency: "一周一次", //风险跟踪频度
          riskStakeholders: "全体员工" //风险相关者
        },
        {
          riskID: "125", //风险ID
          riskType: "money", //风险类型
          riskDescription: "钱不够呗，还能咋底", //风险描述
          riskLevel: 3, //风险级别
          riskImpact: "中", //风险影响度
          riskResponse: "没办法等着公司倒闭吧", //风险应对策略
          riskStatus: "无药可救中", //风险状态
          riskOwner: "ndk", //风险责任人
          riskTrackingFrequency: "一周一次", //风险跟踪频度
          riskStakeholders: "全体员工" //风险相关者
        },
        {
          riskID: "126", //风险ID
          riskType: "money", //风险类型
          riskDescription: "钱不够呗，还能咋底", //风险描述
          riskLevel: 4, //风险级别
          riskImpact: "高", //风险影响度
          riskResponse: "没办法等着公司倒闭吧", //风险应对策略
          riskStatus: "无药可救中", //风险状态
          riskOwner: "ndk", //风险责任人
          riskTrackingFrequency: "一周一次", //风险跟踪频度
          riskStakeholders: "全体员工" //风险相关者
        }
      ],
      dialogFormVisible: false,
      form: {
        newrisk:"",
        deviceName: "",
        deviceNow: "",
        status: "",
        deviceLastCheck: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    //根据风险等级染色
    tableRowClassName(row) {
        if (row.row.riskLevel === 2) {
          return 'warning-2-row';
        } else if (row.row.riskLevel === 3) {
          return 'warning-3-row';
        }else if (row.row.riskLevel === 4) {
          return 'warning-4-row';
        }
        return '';
      },
    // 删除
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该设备, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 渲染数据
    getsetting() {
      /*
      this.axios
        .get("/setting")
        .then(res => {
          //this.settingdata = res.data.data.setting;
        })
        .catch(err => {});*/
    },
    // 发送数据
    sendform() {
      if (this.form.status == "" || this.form.show == "") {
        this.$message({
          type: "error",
          message: "请输入相关信息"
        });
      } else {
        let newform = {
          status: this.form.status,
          show: this.form.show
        };
        this.settingdata.push(newform);
        this.dialogFormVisible = false;
      }
    },
    revise() {
      this.$message({
        type: "error",
        message: "该功能没有实现!"
      });
      this.dialogFormVisible1 = false;
    }
  },
  mounted() {
    this.getsetting();
  }
};
</script>
<style scoped>
button {
  margin: 1rem;
}
.button {
  margin: 2rem;
}
.wrap {
  margin-left: 1rem;
}
</style>
<!-- vue组件中使用elementUI样式(row-class-name)无效问题 -->
<style>
.el-table .warning-4-row {
    background: rgb(253, 231, 230);
  }
.el-table .warning-3-row {
    background: oldlace;
  }
.el-table .warning-2-row {
    background: #f0f9eb;
}
</style>