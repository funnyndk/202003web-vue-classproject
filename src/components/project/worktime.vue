<!-->
项目使用elememnt-ui的表单组件
需要工时信息填写的有
1.所属项目
2.选择功能
3.选择活动
4.填写时间
<-->
<template>
  <div class="worktimepanel">
    <el-form ref="form" :model="work_time" label-width="90px">
      <el-form-item label="工作项目">
        <el-select v-model="work_time.proj" placeholder="请选择汇报的工作所属项目">
          <!-- 导入目前所在的项目组 -->
          <el-option label="项目一  这就是你分手的借口" value="20200320"></el-option>
          <el-option label="项目二  我和你荡秋千" value="20200321"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工作功能">
        <el-select v-model="work_time.func" placeholder="请选择汇报的工作所属功能">
          <!-- 导入该项目的功能列表 -->
          <el-option label="打开爱河" value="function01"></el-option>
          <el-option label="创造分身" value="function02"></el-option>
          <el-option label="开始跳舞" value="function"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工作活动">
        <el-cascader :options="workoptions" clearable></el-cascader>
      </el-form-item>
      <el-form-item label="开始时间">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="work_time.date1"
          style="width: 50%;"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间">
        <el-date-picker placeholder="选择时间" v-model="work_time.date2" style="width: 50%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="work_time.comment" placeholder="请填写"></el-input> 
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
        <el-button type="primary" @click="onSubmit">提交工时汇报</el-button>
        <el-button @click="onClear">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.worktimepanel {
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
  data(){
    return {
      workoptions:
      [   {
          value:'gongchenghuodong',
          label:'工程活动',
          children: [{
            value:'xuqiukaifa',
            label:'需求开发',
          },{
            value:'sheji',
            label:'设计',
          },{
            value:'bianma',
            label:'编码',
          },{
            value:'danticeshi',
            label:'单体测试',
          },{
            value:'jichengceshi',
            label:'集成测试',
          },{
            value:'xitongceshi',
            label:'系统测试',
          },{
            value:'jiaofu',
            label:'交付',
          },{
            value:'weihu',
            label:'维护',
          }]
        },{
          value:'guanlihuodong',
          label:'管理活动',
          children:[{
            value:'fanweiguanli',
            label:'范围管理',
          },{
            value:'jihuayutiaozheng',
            label:'计划与调整',
          },{
            value:'jiankongyufenxi',
            label:'监控与分析',
          },{
            value:'lianluoyugoutong',
            label:'联络与沟通',
          }]
        },{
          value:'waibaohuodong',
          label:'外包活动',
          children:[{
            value:'waibaoguanli',
            label:'外包管理',
          },{
            value:'waibaoyanshou',
            label:'外包验收',
          },{
            value:'waibaozhichi',
            label:'外包支持',
          }]
        },{
          value:'zhichihuodong',
          label:'支持活动',
          children:[{
            value:'peizhiguanli',
            label:'配置管理',
          },{
            value:'QAshenji',
            label:'QA审计',
          },{
            value:'huiyibaogaozongjie',
            label:'会议报告总结',
          },{
            value:'peixun',
            label:'培训',
          },{
            value:'qita',
            label:'其他',
          }]
        }],
      work_time: {
        proj: "",
        func: "",
        date1: "",
        date2: "",
        comment:""
      }
    }
  }
};
</script>
