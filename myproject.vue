<!-->
项目使用elememnt-ui的卡片组件
20200320现在已经能正常显示多个项目卡片
?还需要添加一个底下的分页栏
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
              <el-button type="text" class="button">基本信息</el-button>
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
  width:200px;
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
      projects:[
        {
          id:"20200320",
          name:"老八蜜汁小汉堡",
          manager:"ndk",
          status:"已吃完"
        },
        {
          id:"20200321",
          name:"老八蜜汁小汉堡",
          manager:"ccg",
          status:"吃剩一半"
        }]
    }
  }
};
</script>