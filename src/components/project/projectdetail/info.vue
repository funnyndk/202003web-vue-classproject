<!-->
项目 ID 由“四位年份-四位客户代码-研发类型 1 位（开发：D，维护：M， 服务：S，其他：O）-顺序号 2 位”构成，且从外部系统导入，是一个选择项，不可更改。 
项目名称
客户信息 从公司的客户管理系统中获取，包括客户 ID，接口人，公司名称， 客户等级，电子邮件，电话，地址； 
预定时间 项目预期开始时间 
交付日 项目预期结束时间 
项目上级 项目经理主管，负责项目立项审批 
主要里程碑  
采用技术 包括编程语言，开发平台（OS+DB），服务架构 Framework，使用 的工具等 
业务领域 项目涉及的业务领域 
主要功能 项目完成的主要业务功能 
<-->
<template>
  <div class="projectpanel">
    <el-form ref="form" :model="project" label-width="90px">
      <el-form-item label="项目ID">
        <div class=info-word >{{project.ID}}</div>
      </el-form-item>
      <el-form-item label="项目名称">
        <div class=info-word v-show="!changeVisible">{{project.name}}</div>
        <el-input v-model="project.name" placeholder="请填写项目名称" v-show="changeVisible"></el-input>
      </el-form-item>
      <el-form-item label="客户信息">
        <div class=info-word v-show="!changeVisible">{{project.client}}</div>
        <el-select v-model="project.clientID" placeholder="请选择客户信息" v-show="changeVisible">
          <!-- 导入已有可选的客户 -->
          <el-option label="江先生  xx科技有限公司" value="J001"></el-option>
          <el-option label="李先生  xx生物技术有限公司" value="L001"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="预定时间">
        <div class=info-word v-show="!changeVisible">{{project.date1}}</div>
        <el-date-picker type="date" placeholder="选择日期" v-model="project.date1" style="width: 50%;" format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd" v-show="changeVisible"></el-date-picker>
      </el-form-item>
      <el-form-item label="交付时间">
        <div class=info-word v-show="!changeVisible">{{project.date2}}</div>
        <el-date-picker placeholder="选择日期" v-model="project.date2" style="width: 50%;" format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd" v-show="changeVisible"></el-date-picker>
      </el-form-item>
      <el-form-item label="项目上级">
        <div class=info-word v-show="!changeVisible">{{project.boss}}</div>
        <el-select v-model="project.boss" placeholder="请选择上级信息" v-show="changeVisible">
          <!-- 导入已有可选的上级 -->
          <el-option label="陈晨光" value="worker052"></el-option>
          <el-option label="倪定凯" value="worker160"></el-option>
          <el-option label="宋铭辰" value="worker161"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="主要里程碑">
        <div class=info-word v-show="!changeVisible">{{project.majormilestone}}</div>
        <el-input type="textarea" v-model="project.majormilestone" placeholder="请填写项目主要里程碑" v-show="changeVisible"></el-input>
      </el-form-item>
      <el-form-item label="采用技术">
        <el-checkbox-group v-model="project.tech">
          <el-checkbox label="C/C++" name="type"></el-checkbox>
          <el-checkbox label="Java" name="type"></el-checkbox>
          <el-checkbox label="python" name="type"></el-checkbox>
          <el-checkbox label="其他" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="业务领域">
        <div class=info-word v-show="!changeVisible">{{project.businessarea}}</div>
        <el-input type="textarea" v-model="project.businessarea" placeholder="请填写项目业务领域" v-show="changeVisible"></el-input>
      </el-form-item>
      <el-form-item label="主要功能">
        <div class=info-word v-show="!changeVisible">{{project.func}}</div>
        <el-input type="textarea" v-model="project.func" placeholder="请填写项目主要功能" v-show="changeVisible"></el-input>
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
.el-form-item {
  width: 50%;
}
</style>

<script>
export default {
  name: "projectlist",
  data() {
    return {
      project: {
        ID: "2020J001D01",
        name: "这里的山路十八弯",
        client: "江先生  xx科技有限公司",
        clientID:"J001",
        date1: "2020-03-31",
        date2: "2020-04-20",
        manager:"ccg",
        boss: "陈晨光",
        bossID:"worker052",
        majormilestone:"第一步-把冰箱门打开",
        tech: [],
        businessarea: "",
        func: ""
      },
      changeVisible: false
    };
  },
  methods: {
    onSubmit() {
      this.changeVisible = true;
      console.log("submit!");
    },
    onClear() {
      this.changeVisible = false;
      console.log("clear!");
    }
  },
  mounted() {
    this.changeVisible = false;
  }
};
</script>