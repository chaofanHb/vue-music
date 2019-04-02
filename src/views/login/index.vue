// 登陆相关
<template>
  <div class="vm-login">
    <div class="login-content">
      <router-link class="btn-login" to="/login/phone"> 手机号登陆</router-link>
      <router-link class="btn-login" to="/login/email"> 邮箱登陆</router-link>
    </div>
    <router-view></router-view>
  </div>  
</template>
<script>
export default {
}
</script>

<style lang="scss" scoped>
.vm-login{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vm-login .login-content{
    width: 80%;
    height: auto;
}
.vm-login .login-content .btn-login{
      display: block;
      line-height: p2r(0.7rem);
      border: 1px solid $primary_color;
      color: $primary_color;
      font-size: $f_auto_l;
      border-radius: p2r(0.35rem);
      margin: p2r(0.3rem) 0;
}
</style>
