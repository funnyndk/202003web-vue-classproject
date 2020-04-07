<!--> 
3.项目详情-projectdetail.vue
3.1信息
3.2人员
3.3权限
3.4功能
3.5风险
<-->
<template>
  <div id="projectdetail">
    <info />
  </div>
</template>

<script>
import info from "./projectdetail/info";
import risk from "./projectdetail/risk";
import authority from "./projectdetail/authority";
import person from "./projectdetail/person";
import func from "./projectdetail/func";
export default {
    name: "projectdetail",
  components: {
    info,
    risk,
    authority,
    person,
    func
  }
};
</script>

<style scoped>

</style>