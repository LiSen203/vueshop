<!-- 根节点布局 -->
<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">

        <router-link :to="{path:'/'}">
          <img src="../assets/logo.png"
               alt="商城logo">
        </router-link>
        <div class="head-nav">
          <ul class="nav-list">
            <li>{{username}}</li>
            <li class="nav-pile"
                v-if="username!==''">|</li>
            <li @click="quit"
                v-if="username!==''">退出</li>
            <li @click="loginClick"
                v-if="username===''">登陆</li>
            <li class="pile">|</li>
            <li @click="regClick"
                v-if="username===''">注册</li>
            <li class="pile"
                v-if="username===''">|</li>
            <li @click="aboutClick">关于我们</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 中间内容用router做 -->
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-foot">
      <p>©2018 QTS.online All Rights Reserved.技术支持：高准软件科技，网站备案号：粤ICP备17008046号-2</p>
    </div>
    <!-- 关于我们弹窗 -->
    <my-dialog :is-show="isShowLoginDialog"
               @on-close="closeDialog('isShowLoginDialog')">
      <!-- 登陆组件 -->
      <log-form @has-log="onSuccessLogin"></log-form>
    </my-dialog>
    <my-dialog :is-show="isShowRegDialog"
               @on-close="closeDialog('isShowRegDialog')">

      <!-- 注册组件 -->
      <reg-form></reg-form>
    </my-dialog>
    <my-dialog :is-show="isShowAboutDialog"
               @on-close="closeDialog('isShowAboutDialog')">
      <p>旨在为湖北省十堰市政府的专车市场进行全面的调研，为政府及国企事业单位和社会各界提供决策依据。
        同时对专车市场的发展态势和面临的问题进行全面的反馈及建议。帮你勇闯高峰，到达事业的顶峰.旨在为湖北省十堰市政府的专车市场进行全面的调研，为政府及国企事业单位和社会各界提供决策依据。
        同时对专车市场的发展态势和面临的问题进行全面的反馈及建议。旨在为湖北省十堰市政府的专车市场进行全面的调研，为政府及国企事业单位和社会各界提供决策依据。
        同时对专车市场的发展态势和面临的问题进行全面的反馈及建议。旨在为湖北省十堰市政府的专车市场进行全面的调研，为政府及国企事业单位和社会各界提供决策依据。
        同时对专车市场的发展态势和面临的问题进行全面的反馈及建议。旨在为湖北省十堰市政府的专车市场进行全面的调研，为政府及国企事业单位和社会各界提供决策依据。
        同时对专车市场的发展态势和面临的问题进行全面的反馈及建议。旨在为湖北省十堰市政府的专车市场进行全面的调研，为政府及国企事业单位和社会各界提供决策依据。
        同时对专车市场的发展态势和面临的问题进行全面的反馈及建议。 </p>
    </my-dialog>
  </div>
</template>
<script>
import Dialog from './base/dialog'
import LogForm from '../publish/loginForm'
import RegForm from '../publish/RegForm'
export default {
  components: {
    MyDialog: Dialog,
    LogForm,
    RegForm
  },
  data () {
    return {
      isShowDialog: false,
      isShowAboutDialog: false,
      isShowLoginDialog: false,
      isShowRegDialog: false,
      username: "",
    }
  },
  methods: {
    aboutClick () {
      this.isShowAboutDialog = true
    },
    loginClick () {
      this.isShowLoginDialog = true
    },
    regClick () {
      this.isShowRegDialog = true
    },
    ////关闭
    closeDialog (attr) {
      this[attr] = false
    },
    // login
    onSuccessLogin (data) {
      // 登陆后弹窗隐藏 调用关闭函数
      this.closeDialog('isShowLoginDialog')
      this.username = data.username
    },
    // 退出(简单版)
    quit () {
      this.username = ''
    }
  }
}
</script>
  <style>
/*  
    css reset
   */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* index css */
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB",
    "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans - serif;
  font-size: 14px;
  color: #444;
}
.app-head {
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #666;
  color: #fff;
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 50px;
  margin-top: 20px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  padding: 0 5px;
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
/* foot css */
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}

.container {
  width: 1200px;
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline - block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}

.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
</style >

