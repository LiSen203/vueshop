<template>
  <div>
    <div class="dialog-warp">
      <div class="dialog-cover"
           v-if="isShow"
           @click="closeMyself">
      </div>
      <transition name="drop">
        <div class="dialog-content"
             v-if="isShow">
          <p class="dialog-close"
             @click="closeMyself">X</p>
          <slot>empty</slot>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isShowDialog: false
    }
  },
  methods: {
    closeMyself () {
      this.$emit("on-close")
    }
  }
}
</script>
<style scoped>
/* 过渡效果 */
.drop-enter-active {
  transition: all 0.5s ease;
}
.drop-leave-active {
  transition: all 0.2s ease;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}
.dialog-warp {
  position: fixed;
  width: 100%;
  height: 100%;
}
.dialog-cover {
  background: #f8f8f8;
  opacity: 0.3;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-content {
  width: 50%;
  position: fixed;
  background: #f2f2f2;
  top: 30%;
  left: 50%;
  margin-left: -25%;
  z-index: 10;
  border: 1px solid #bfbcce;
  padding: 2%;
  line-height: 1.6;
}
.dialog-close {
  position: absolute;
  top: 0;
  right: 5px;
}
</style>