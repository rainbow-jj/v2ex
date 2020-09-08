<template>
  <el-container>
    <el-header style="height:false">
      <el-row >
        <el-col :span="3"><div id="logo"><a src="https://www.v2ex.com"></a></div></el-col>
        <el-col :span="6">
          <el-input class="search">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input></el-col>
        <el-col class="login-botton" :span="15">
          <el-button type="text">首页</el-button>
          <el-button type="text">注册</el-button>
          <el-button type="text">登录</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main >
      <div class="warrp">
        <div class="box">
          <el-tabs >
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
  }
}
</script>

<style scoped>
.el-container{
  height: 100%;
}
.el-main{
  background-color: #e2e2e2;
}
.warrp{
  min-width: 600px;
  max-width: 1100px;
  height: 100%;
  display: flex;
  margin: auto;
  background-color: #fff;
}
.el-header{
  height: 42px;
}
.el-row {
  min-width: 600px;
  max-width: 1100px;
  display: flex;
  margin: auto;

}
#logo{
  /* text-align: center; */
  margin-top: 5px;
  width: 94px;
  height: 30px;
  background-image: url(../assets/v2ex@2x.png);
  background-size: 94px 30px;
}
#logo a{
  width: 100%;
}
.login-botton{
  display: flex;
  justify-content: flex-end;
}
.el-button{
  color: #556;
  font-size: 16px;
}
.box{
  width: 770px;
}


</style>
