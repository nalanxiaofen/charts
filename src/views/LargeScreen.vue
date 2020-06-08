<template>
  <div id="screenPage">
    <header>
      <h4 class="title" @click="getMarketData">全安密灵数据监控中心</h4>
      <div class="time-box">
        <img src="../assets/icon_time.png" alt />
        <span class="time">{{timeString}}</span>
      </div>
    </header>
    <div class="content">
      <!-- 左侧数据展示 -->
      <div class="wrap-left">
        <div class="echarts-wrap">
          <MarketBar></MarketBar>
        </div>
        <div class="echarts-wrap">
          <div class="box-left">
            <UseBar></UseBar>
          </div>
          <div class="box-right">
            <UsePie></UsePie>
          </div>
        </div>
        <div class="echarts-wrap">
          <CustomerPie></CustomerPie>
        </div>
      </div>
      <!-- 中部数据展示 -->
      <div class="wrap-center">
        <div class="map-wrap">
          <!-- 顶部翻牌器 -->
          <div class="top-info">
            <p class="info">
              累计生产总量:
              <span>{{this.$store.state.totalData[0].produceTotal}}</span>发
            </p>
            <p class="info">
              累计使用总量:
              <span>{{this.$store.state.totalData[0].useTotal}}</span>发
            </p>
          </div>
          <!-- 滚屏数据展示 -->
          <div class="list-wrap">
            <LoopList></LoopList>
          </div>
          <!-- 使用区域地图展示 -->
          <Maps></Maps>
        </div>
        <div class="bottom-wrap">
          <div class="item-info">
            <div class="info-wrap">
              <p class="info-title">模块销售</p>
              <p class="info-text">￥{{this.$store.state.totalData[0].modalSale}}万</p>
            </div>
          </div>
          <div class="item-info">
            <div class="info-wrap">
              <p class="info-title">起爆器销售</p>
              <p class="info-text">￥{{this.$store.state.totalData[0].detonatorSale}}万</p>
            </div>
          </div>
          <div class="item-info">
            <div class="info-wrap">
              <p class="info-title">生产仪器设备销售</p>
              <p class="info-text">￥{{this.$store.state.totalData[0].equipmentSale}}万</p>
            </div>
          </div>
          <div class="item-info">
            <div class="info-wrap">
              <p class="info-title">辅材销售</p>
              <p class="info-text">￥{{this.$store.state.totalData[0].materialSale}}万</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧数据展示 -->
      <div class="wrap-right">
        <div class="echarts-wrap">
          <ProduceBar></ProduceBar>
        </div>
        <div class="echarts-wrap">
          <SaleLine></SaleLine>
        </div>
        <div class="echarts-wrap">
          <Overview></Overview>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Maps from "../components/Map";
import MarketBar from "../components/MarketBar";
import SaleLine from "../components/SaleLine";
import ProduceBar from "../components/ProduceBar";
import CustomerPie from "../components/CustomerPie";
import UseBar from "../components/UseBar";
import UsePie from "../components/UsePie";
import Overview from "../components/Overview";
import LoopList from "../components/LoopList";
import {mapActions} from 'vuex';
export default {
  name: "LargeScreen",
  components: {
    LoopList,
    Maps,
    MarketBar,
    SaleLine,
    ProduceBar,
    CustomerPie,
    UseBar,
    UsePie,
    Overview
  },
  data() {
    return {
      timeString: null,
      myTime: null
    };
  },
  mounted() {
    this.goTime();
  },
  beforeDestroy() {
    clearInterval(this.myTime);
    this.myTime = null;
  },
  methods: {
    //启动计时器
    goTime(){
      this.myTime = setInterval(()=>{
        this.getTime();
      }, 1000);
    },
    //获取当前实际并格式化
    getTime() {
      let time = new Date();
      let y = time.getFullYear();
      let m = time.getMonth() + 1;
      m = m > 9 ? m : "0" + m;
      let d = time.getDate();
      d = d > 9 ? d : "0" + d;
      let hh = time.getHours();
      hh = hh > 9 ? hh : "0" + hh;
      let mm = time.getMinutes();
      mm = mm > 9 ? mm : "0" + mm;
      let ss = time.getSeconds();
      ss = ss > 9 ? ss : "0" + ss;
      let str = `${y}年${m}月${d}日 ${hh}:${mm}:${ss}`;
      this.timeString = str;
    },
    ...mapActions({
      getMarketData: 'actionMarketData',//请求获取市场趋势数据
      getUseData: 'actionUseData',//请求获取雷管使用排行数据
      getCustomerData: 'actionCustomerData',//请求获取客户销售数据
      getProduceDaata: 'actionProduceDaata',//请求获取生产监控数据
      getSaleData: 'actionSaleData',//请求获取销售数据
      getOverviewData: 'actionOverviewData',//请求获取整体概览数据
      getMapData: 'actionMapData',//请求获取地图展示数据
      getTotalData: 'actionTotalData'//请求获取总览数据
    })
  }
};
</script>
<style lang="less" scoped>
@keyframes guangyun {
  0% {
    box-shadow: 1px 1px 4px 0 #16b3d2;
    background-color: rgba(0, 0, 0, 0.1);
  }
  20% {
    box-shadow: 1px 1px 6px 0 #16b3d2;
  }
  40% {
    box-shadow: 1px 1px 8px 0 #16b3d2;
  }
  50% {
    box-shadow: 1px 1px 10px 0 #16b3d2;
    background-color: rgba(186, 199, 216, 0.1);
  }
  60% {
    box-shadow: 1px 1px 8px 0 #16b3d2;
  }
  80% {
    box-shadow: 1px 1px 6px 0 #16b3d2;
  }
  100% {
    box-shadow: 1px 1px 4px 0 #16b3d2;
    background-color: rgba(0, 0, 0, 0.1);
  }
}
@keyframes loop {
  0%{
    transform: rotateX(0deg);
  }
  2%{
    transform: rotateX(270deg);
  }
  4%{
    transform: rotateX(-90deg);
  }
  12%{
    transform: rotateX(0deg);
  }
  100%{
    transform: rotateX(0deg);
  }
}
@keyframes bgAnimation {
  0% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 0%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 0%
    );
  }
  2% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 2%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 12%
    );
  }
  4% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 4%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 14%
    );
  }
  6% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 6%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 16%
    );
  }
  8% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 8%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 18%
    );
  }
  10% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 10%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 20%
    );
  }
  12% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 12%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 22%
    );
  }
  14% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 14%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 24%
    );
  }
  16% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 16%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 26%
    );
  }
  18% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 18%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 28%
    );
  }
  20% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 20%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 30%
    );
  }
  22% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 22%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 32%
    );
  }
  24% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 24%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 34%
    );
  }
  26% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 26%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 36%
    );
  }
  28% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 28%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 38%
    );
  }
  30% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 30%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 40%
    );
  }
  32% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 32%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 42%
    );
  }
  34% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 34%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 44%
    );
  }
  36% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 36%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 46%
    );
  }
  38% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 38%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 48%
    );
  }
  40% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 40%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 50%
    );
  }
  42% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 42%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 52%
    );
  }
  44% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 44%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 54%
    );
  }
  46% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 46%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 56%
    );
  }
  48% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 48%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 58%
    );
  }
  50% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 50%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 60%
    );
  }
  52% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 52%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 62%
    );
  }
  54% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 54%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 64%
    );
  }
  56% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 56%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 66%
    );
  }
  58% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 58%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 68%
    );
  }
  60% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 60%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 70%
    );
  }
  62% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 62%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 72%
    );
  }
  64% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 64%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 74%
    );
  }
  66% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 66%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 76%
    );
  }
  68% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 68%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 78%
    );
  }
  70% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 70%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 80%
    );
  }
  72% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 72%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 82%
    );
  }
  74% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 74%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 84%
    );
  }
  76% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 76%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 86%
    );
  }
  78% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 78%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 88%
    );
  }
  80% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 80%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 90%
    );
  }
  82% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 82%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 92%
    );
  }
  84% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 84%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 94%
    );
  }
  86% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 86%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 96%
    );
  }
  88% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 88%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 98%
    );
  }
  90% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 90%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 100%
    );
  }
  92% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 92%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 102%
    );
  }
  94% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 94%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 104%
    );
  }
  96% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 96%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 106%
    );
  }
  98% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 98%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 108%
    );
  }
  100% {
    background-image: linear-gradient(
      to right,
      rgba(0, 159, 255, 0.3) 100%,
      rgb(248, 211, 48),
      rgba(0, 159, 255, 0.51) 100%
    );
  }
}
#screenPage {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  background: rgba(41, 52, 65, 1) url("../assets/bg.png") no-repeat center
    center;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    height: 80px;
    background: url("../assets/title.png") no-repeat center bottom;
    background-size: 100% 100%;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      flex: 1;
      padding: 10px 0 0 0;
      margin: 0;
      font-size: 32px;
      letter-spacing: 10px;
      color: #fffbe6;
    }
    .time-box {
      width: 100%;
      height: 20px;
      img {
        width: 20px;
        vertical-align: sub;
        margin-right: 5px;
      }
      .time {
        color: #ffffff;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: row;
    .wrap-left,
    .wrap-right {
      width: 23%;
      background-color: rgba(41, 52, 65, 0);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      margin: 0 0 15px 0;
      /*存放图表的盒子*/
      .echarts-wrap {
        flex: 1;
        padding: 5px 10px;
        position: relative;
        display: flex;
        flex-direction: row;
        &:after {
          content: "";
          display: block;
          width: 10px;
          height: 10px;
          position: absolute;
          left: 10px;
          top: -5px;
          z-index: 99;
          padding: 1px;
          background-color: #ff9c4e;
          background-clip: content-box;
          box-sizing: border-box;
          border-radius: 50%;
          border: 1.5px solid #36a3ec;
          box-shadow: 0 0 5px 0 #ffffff;
        }
        &:before {
          content: "";
          display: block;
          width: 90%;
          height: 0.5px;
          background-image: linear-gradient(
            to right,
            rgba(0, 159, 255, 0.3) 5%,
            rgb(248, 211, 48),
            rgba(0, 159, 255, 0.51) 100%
          );
          animation: bgAnimation 2.5s linear infinite;
          position: absolute;
          top: -0.5px;
          left: 16px;
          z-index: 99;
        }
        .box-left {
          width: 65%;
          height: 100%;
          position: relative;
          display: flex;
        }
        .box-right {
          flex: 1;
          position: relative;
          display: flex;
        }
      }
    }
    .wrap-center {
      flex: 1;
      display: flex;
      flex-direction: column;
      /*地图部分*/
      .map-wrap {
        flex: 1;
        position: relative;
        display: flex;
        padding-top: 5px;
        background-color: rgba(41, 52, 65, 0);
        .top-info {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          position: absolute;
          top: 0;
          z-index: 10;
          .info {
            color: #f9f9f9;
            padding: 20px 25px;
            font-size: 18px;
            font-weight: bold;
            span {
              font-size: 26px;
              color: #ffde82;
              padding: 0 5px;
            }
          }
        }
        .list-wrap {
          width: 250px;
          height: 110px;
          position: absolute;
          top: 85px;
          left: 0;
          right: 30px;
          margin: auto;
          z-index: 99;
          display: flex;
        }
      }
      /*底部信息*/
      .bottom-wrap {
        height: 120px;
        padding-bottom: 15px;
        display: flex;
        flex-direction: row;
        .item-info {
          flex: 1;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          .info-wrap {
            flex: 1;
            height: 80px;
            min-width: 138px;
            border: 1.5px solid #16b3d2;
            border-radius: 5px;
            box-shadow: 1px 1px 5px 0 #16b3d2;
            color: #f5f5f5;
            background-color: rgba(0, 0, 0, 0.1);
            position: relative;
            animation: guangyun 3s linear infinite;
            &:after {
              content: "";
              display: block;
              position: absolute;
              top: 2px;
              bottom: 0;
              left: 2px;
              right: 2px;
              margin: auto;
              border-top: 1px solid #9cefff;
              border-radius: 6px;
            }
            .info-title {
              width: 100%;
              text-align: center;
              padding: 12px 0 5px 0;
              font-size: 16px;
              font-weight: bold;
            }
            .info-text {
              width: 100%;
              text-align: center;
              font-size: 18px;
              font-weight: bold;
              color: #4cfcec;
              text-shadow: 1px 1px 1px #ffffff;
              transform: rotateX(0deg);
              animation: loop 20s linear infinite;
            }
          }
        }
      }
    }
  }
}
</style>