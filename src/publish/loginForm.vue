<template>
  <div class="login-form">
    <div class="g-form">
      <!-- 用户名 -->
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text"
                 placeholder="请输入用户名"
                 v-model="usernameModel">
        </div>
        <!-- vue-valate -->
        <span class="g-form-error">
          {{userErrors.errorText}}
        </span>
      </div>
      <!-- 密码 -->
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password"
                 placeholder="请输入密码"
                 v-model="passwordModel">
        </div>
        <!-- 错误验证需要使用计算属性 -->
        <span class="g-form-error">
          {{passwordErrors.errorText}}
        </span>
      </div>
      <!-- 登陆 -->
      <div class="g-form-line">
        <span class="g-form-btn">
          <a class="button"
             @click="onLogin">登陆</a>
        </span>

      </div>
      {{errorText}}
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      usernameModel: '',
      passwordModel: '',
      errorText: ''

    }
  },
  computed: {
    userErrors () {
      let errorText, status
      // 使用正则验证用户输入的值
      if (!/@/g.test(this.usernameModel)) {
        status = false
        errorText = '不包含@'
      }
      else {
        status = true
        errorText = ''
      }
      if (!this.userFlag) {
        errorText = ''
        this.userFlag = true
      }
      return {
        status,
        errorText
      }
    },
    // 密码
    passwordErrors () {
      let errorText, status
      // 使用正则验证用户输入的密码为数
      if (!/^\w{1,6}$/g.test(this.passwordModel)) {
        status = false
        errorText = '密码不是1-6位'
      }
      else {
        status = true
        errorText = ''
      }
      if (!this.passwordFlag) {
        errorText = ''
        this.passwordFlag = true
      }
      return {
        status,
        errorText
      }

    }
  },
  methods: {
    onLogin () {
      // 如果用户和密码正确验证
      if (!this.userErrors.status || !this.passwordErrors.status) {
        this.errorText = '部分选项未通过'
      } else {
        this.errorText = ''
        //登陆交互
        this.$http.get('http://localhost:3000/api/login').then((res) => {

          this.$emit('has-log', res.data)

        }, (error) => {

        })

      }

    }
  }
}
</script>
<style>
</style>