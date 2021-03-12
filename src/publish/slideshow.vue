<template>
  <div class="slide-show"
       @mouseover="clearInv"
       @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <img v-bind:src="slides[nowIndex].src"
             alt="">
        <transition name="slide-trans">
          <img alt=""
               v-if="isShow"
               :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img alt=""
               v-if="!isShow"
               :src="slides[nowIndex].src">
        </transition>
      </a>
    </div>
    <h2>{{slides[nowIndex].title}}</h2>
    <ul class="slide-pages">
      <li @click="goto(prevIndex)">&lt;</li>
      <li v-for="(item,index) in slides"
          @click="goto(index)"
          :key="item.id">
        <a :class="{on:index===nowIndex}">{{index + 1}}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      nowIndex: 0,
      isShow: true
    }
  },
  // 计算属性
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    },
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
        this.$emit('onchange', index)
      }, 10);
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv);
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    // console.log(this.slides)
    this.runInv()
  }
}
</script>
<style scoped>
/* 过渡 */
.slide-trans-enter-active {
  transition: all 0.5;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all 0.5;
  transform: translateX(-900px);
}
.slide-show {
  position: relative;
  width: 900px;
  height: 350px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  color: #fff;
  opacity: 0.5;
  bottom: 0;
  height: 30px;
  text-align: left;
  line-height: 30px;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  position: absolute;
  top: 0;
  width: 100%;
  display: block;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
  clear: both;
}
.on {
  text-decoration: underline;
}
.slide-pages li {
  color: #fff;
  float: left;
  padding: 0 5px;
  border-radius: 50%;
  margin-left: 10px;
}
</style>