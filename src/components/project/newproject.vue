<!-->
项目使用elememnt-ui的表单组件
需要项目经理填写的信息有
1.项目名称
2.选择客户信息（下拉选项）
3.预定时间（日期）
4.交付时间（日期）
5.项目上级（下拉选项）
6.主要里程碑？
7.采用技术？
8.业务领域？
9.主要功能？
<-->
<template>
  <div class="projectpanel">
    <el-form ref="form" :model="new_project" label-width="90px">
      <el-form-item label="项目名称">
        <el-input v-model="new_project.name" placeholder="请填写项目名称"></el-input> 
      </el-form-item>
      <el-form-item label="客户信息">
        <el-select v-model="new_project.region" placeholder="请选择客户信息">
          <!-- 导入已有可选的客户 -->
          <el-option label="江先生  xx科技有限公司" value="J001"></el-option>
          <el-option label="李先生  xx生物技术有限公司" value="L001"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="预定时间">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="new_project.date1"
          style="width: 50%;"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="交付时间">
        <el-date-picker placeholder="选择时间" v-model="new_project.date2" style="width: 50%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="项目上级">
        <el-select v-model="new_project.region" placeholder="请选择客户信息">
          <!-- 导入已有可选的上级 -->
          <el-option label="陈晨光" value="worker052"></el-option>
          <el-option label="倪定凯" value="worker160"></el-option>
          <el-option label="宋铭辰" value="worker160"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="主要里程碑">
        <el-input type="textarea" v-model="new_project.desc" placeholder="请填写项目主要里程碑"></el-input>
      </el-form-item>
      <el-form-item label="采用技术">
        <el-checkbox-group v-model="new_project.type">
          <el-checkbox label="C/C++" name="type"></el-checkbox>
          <el-checkbox label="Java" name="type"></el-checkbox>
          <el-checkbox label="python" name="type"></el-checkbox>
          <el-checkbox label="其他" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="业务领域">
        <el-input type="textarea" v-model="new_project.desc" placeholder="请填写项目业务领域"></el-input>
      </el-form-item>
      <el-form-item label="主要功能">
        <el-input type="textarea" v-model="new_project.desc" placeholder="请填写项目主要功能"></el-input>
      </el-form-item>
      <!--
      <el-form-item label="即时配送">
        <el-switch v-model="new_project.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="new_project.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即申请</el-button>
        <el-button @click="onClear">取消</el-button>
      </el-form-item>
    </el-form>
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
  padding: 10px;
}
.el-form-item{
  width: 50%;
}
</style>

<script>
export default {
  name: "projectlist",
  data() {
    return {
      new_project: {
        name: "",
        client: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
     onClear() {
      console.log("clear!");
    }
  }
};
</script>