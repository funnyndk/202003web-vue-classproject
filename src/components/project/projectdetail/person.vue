<!-->
按钮-添加人员（级联选择器，多选）
一个表格，左边有更改职位/删除
人员-员工ID-职位-操作
<-->
<template>
  <div id="setting">
    <div class="button">
      <el-button type="primary" @click="dialogFormVisible = true">添加人员</el-button>
      <el-dialog title="添加人员" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-cascader :options="options" :props="props" collapse-tags clearable></el-cascader>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="sendform(form)">确 定</el-button>
        </div>
      </el-dialog>
    </div>

    <!-- 展示数据 -->
    <div class="wrap">
      <el-table :data="settingdata" style="width: 100%">
        <el-table-column prop="personName" label="员工名"></el-table-column>
        <el-table-column prop="personID" label="员工ID"></el-table-column>
        <el-table-column prop="personPosition" label="员工职位"></el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="dialogFormVisible1 = true;">设定职位</el-button>
            <el-dialog title="设定职位" :visible.sync="dialogFormVisible1">
              <el-form :model="form1">
                <el-select v-model="form1.personPosition" placeholder="请选择职位" style="width: 70%">
                  <!-- 导入可选的职位 -->
                  <el-option label="项目经理" value="项目经理"></el-option>
                  <el-option label="EPG Leader" value="EPG Leader"></el-option>
                  <el-option label="QA 经理" value="QA 经理"></el-option>
                  <el-option label="组织配置管理员" value="组织配置管理员"></el-option>
                  <el-option label="普通成员" value="普通成员"></el-option>
                </el-select>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="revise()">确 定</el-button>
              </div>
            </el-dialog>
            <el-button type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "setting",
  data() {
    return {
      props: { multiple: true },
      options: [
        {
          value: 1,
          label: "技术保障部门",
          children: [
            { value: 2, label: "李阿姨" },
            { value: 3, label: "王叔叔" }
          ]
        },
        {
          value: 4,
          label: "产品研发部门",
          children: [
            { value: 5, label: "大头儿子" },
            { value: 6, label: "小头爸爸" }
          ]
        }
      ],
      settingdata: [
        {
          personName: "ndk", //员工名
          personID: "123", //员工ID
          personPosition: "项目经理" //员工职位
        }
      ],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      form: {
        deviceName: "",
        deviceNow: "",
        status: "",
        deviceLastCheck: ""
      },
      form1: {
        deviceID: "",
        deviceName: "",
        deviceNow: "",
        status: "",
        deviceLastCheck: "",
        personPosition: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
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
      this.axios
        .get("/setting")
        .then(res => {
          //this.settingdata = res.data.data.setting;
        })
        .catch(err => {});
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