<template>
  <div class="wrap">
    <ul class="title">
      <li>省份</li>
      <li>雷管使用量</li>
    </ul>
    <ul class="list">
      <li class="list-item" :class="{ 'hover': isAnimation }" v-for="item in showData" :key="item.title">
        <div>{{item.title}}</div>
        <div>{{item.value}}发</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LoopList",
  data() {
    return {
      isAnimation: false,
      timeout: null,
      timeoutA: null,
      pageIndex: 1,
      showData: []
    };
  },
  computed:{
    dataArr(){
      return this.$store.state.mapData
    }
  },
  mounted() {
    this.goLoop();
  },
  beforeDestroy(){
    clearInterval(this.timeout);
    clearTimeout(this.timeoutA);
  },
  methods: {
    //启用滚屏
    goLoop(){
      this.showData = this.dataArr[0].data.slice(0, 3);
      this.timeout = setInterval(() => {
        this.animationFn();
        clearTimeout(this.timeoutA);
        this.timeoutA = setTimeout(()=>{
          this.paging();
        },1200);
      }, 5000);
    },
    //滚屏分页
    paging() {
      this.pageIndex++;
      let arr = this.dataArr[0].data;
      let endNum = this.pageIndex * 3;
      let startNum = (this.pageIndex-1)*3
      this.showData = arr.slice(startNum, endNum);
      if (this.showData.length < 3) {
        this.pageIndex = 0;
      }
      
    },
    //启用动画
    animationFn() {
      if (this.isAnimation) {
        this.isAnimation = false;
      } else {
        this.isAnimation = true;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.wrap {
  flex: 1;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  border-bottom: 1px solid #9cefff;
  border-top: 1px solid #ffd792;
  box-shadow: 0 0 1px 0 #f5f5f5;
  .title {
    width: 100%;
    color: rgba(255, 255, 255, 0.8);
    text-shadow: 1px 1px 0 #e4393c;
    display: flex;
    flex-direction: row;
    padding: 5px 0;
    border-bottom: 1px solid #aaaaaa;
    li {
      flex: 1;
      text-align: center;
      font-size: 12px;
      font-weight: bold;
    }
  }
  .list {
    flex: 1;
    display: flex;
    flex-direction: column;
    .list-item {
      width: 100%;
      margin-top: 5px;
      display: flex;
      flex-direction: row;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      padding: 2px 0;
      font-size: 12px;
      color: #ffffff;
      text-shadow: 1px 1px 1px #11bcff;
      transform: rotateX(0deg);
      transition: transform 2s;
      div {
        flex: 1;
        text-align: center;
      }
    }
    .hover {
      transform: rotateX(360deg);
    }
  }
}
</style>