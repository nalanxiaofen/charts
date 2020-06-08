<template>
  <div class="myBar">
    <h3>整体概览</h3>
    <div class="wrap">
      <ul>
        <li v-for="item in dataArr" :key="item.title">
          <div class="info-box">
            <h5 class="title">{{item.title}}</h5>
            <div class="content">{{item.value}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overview",
  computed:{
    dataArr(){
      return this.$store.state.overviewData[0].data
    }
  }
};
</script>
<style lang="less" scoped>
.myBar {
  flex: 1;
  background-color: rgba(41, 52, 65, 0.2);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  h3 {
    padding: 10px 0 0 20px;
    margin: 0;
    box-sizing: border-box;
    text-align: left;
    font-size: 14px;
    color: rgba(249, 249, 249, 0.8);
  }
  .wrap {
    flex: 1;
    padding: 4px 14px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    ul {
      padding: 0;
      margin: 0;
      flex: 1;
      position: relative;
      li {
        display: inline-block;
        width: 33.334%;
        height: 50%;
        padding: 10px 6px;
        box-sizing: border-box;
        position: relative;
      }
    }
  }
}
.info-box {
  height: 100%;
  width: 100%;
  padding: 5px 5px 5px 8px;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: rgba(146, 193, 255, 0.1);
  border-top: 1px solid #9cefff;
  border-bottom: 1px solid #ffcc74;
  box-shadow: 0 0 2px 0 #ffffff;
  animation: borderAnimation 10s linear infinite;
  .title {
    padding: 8px 0 0 0;
    margin: 0;
    text-align: left;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0.5px 0.5px 0 rgb(17, 188, 255);
  }
  .content {
    font-size: 16px;
    font-weight: 600;
    color: rgb(17, 188, 255);
    text-shadow: 1px 1px 1px #ffffff;
    display: flex;
    flex: 1;
    justify-content: start;
    align-items: center;
  }
}
@keyframes borderAnimation {
  0% {
    border-top: 1px solid #9cefff;
    border-bottom: 1px solid #ff7f00;
  }
  50% {
    border-top: 1px solid #ff7f00;
    border-bottom: 1px solid #9cefff;
  }
  100% {
    border-top: 1px solid #9cefff;
    border-bottom: 1px solid #ff7f00;
  }
}
</style>