<!-->
一个表格
1.登记设备的资产 ID
2.资产管理者
3.资产使用期限 

新增设备——表单
更新设备（更新设备状态，归还日期）——表单
<-->
<template>
  <div id="setting">
    <div class="button">
      <el-button type="primary" @click="dialogFormVisible = true">添加设备</el-button>
      <el-dialog title="添加设备" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="设备名" :label-width="formLabelWidth">
            <el-input v-model="form.deviceName" autocomplete="off" placeholder="请输入设备名称"></el-input>
          </el-form-item>
          <el-form-item label="设备现持有人" :label-width="formLabelWidth">
            <el-input v-model="form.deviceNow" autocomplete="off" placeholder="请输入设备现持有人"></el-input>
          </el-form-item>
          <el-form-item label="设备状态" :label-width="formLabelWidth">
            <el-input v-model="form.status" autocomplete="off" placeholder="请输入设备状态"></el-input>
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
      <el-table :data="settingdata" border style="width: 100%">
        <el-table-column prop="deviceID" label="设备ID"></el-table-column>
        <el-table-column prop="deviceName" label="设备名"></el-table-column>
        <el-table-column prop="deviceNow" label="设备现持有人"></el-table-column>
        <el-table-column prop="status" label="设备状况"></el-table-column>
        <el-table-column prop="deviceLastCheck" label="最后更新于"></el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" @click="dialogFormVisible1 = true;">更新</el-button>
            <el-dialog title="更新设备信息" :visible.sync="dialogFormVisible1">
              <el-form :model="form1">
                <el-form-item label="设备现持有人" :label-width="formLabelWidth">
                  <el-input v-model="form1.deviceNow" autocomplete="off" placeholder="请输入设备现持有人"></el-input>
                </el-form-item>
                <el-form-item label="设备状态" :label-width="formLabelWidth">
                  <el-input v-model="form1.status" autocomplete="off" placeholder="请输入设备状态"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="revise()">确 定</el-button>
              </div>
            </el-dialog>
            <el-button type="warning" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
      settingdata: [
        {
        deviceID: "123",//设备id
        deviceName: "iponeX",//设备名
        deviceNow:"5楼会议室",//设备现持有人
        status:"正常",//设备状况
        deviceLastCheck:"2020-03-30"//最后更新于
        }
      ],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      form: {
        deviceName: "",
        deviceNow:"",
        status:"",
        deviceLastCheck:""
      },
      form1: {
        deviceID: "",
        deviceName: "",
        deviceNow:"",
        status:"",
        deviceLastCheck:""
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
        .catch(err => {
           ;
        });
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