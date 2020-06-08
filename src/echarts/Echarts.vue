<!--/echarts/index.vue-->
<template>
  <div :class="`echart-box echart-${classify}`"></div>
</template>

<script>
import chartObj from "./index.js";

export default {
  props: {
    classify: String, // 应用那个类型的图标
    dataArray: Array, // 渲染数据
    title: String, //图表标题
    isHorizontal: Boolean, //是否横向显示,针对柱图
    isBorder: Boolean, //是否显示柱子边框
    xName: String, //x轴名字
    yNmae: String, //y轴名字
    isLegend: Boolean, //是否显示图例
    isRing: Boolean, //是否是环图
    roseType: String, //传值玫瑰图area，丁格尔-玫瑰图radius,不传就默认
    isLable: Boolean,//饼图是否显示标签（false，轮播）
    inner: String,//内半径
    outside: String,//外半径
    top: String,//饼图距离上部位置
    left:String,//饼图距离左边位置
    colors: Array,//调色盘
    isPercentage: Boolean,//是否显示为百分比
  },
  data() {
    return {
      myChart: null
    };
  },
  watch: {
    dataArray: {
      handler(newValue, oldValue) {
        if (JSON.stringify(newValue) != JSON.stringify(oldValue)) {
          this.$props.dataArray = newValue;
          this.myChart.setOption(chartObj.allOptions[`${this.$props.classify}Options`](this.$props), {
            notMerge: true
          });
        }
      },
      deep: true
    }
  },
  mounted() {
    // 调用utils来绘制图形Object.values(this.$props)
    this.myChart = chartObj.init(this.$el, this.$props.classify, this.$props);
    //let chart = this.myChart;
    window.addEventListener("resize", () => {
      // 自动渲染echarts
      //chart.resize();
      window.location.reload([false])
    });
    this.activeEcharts();
  },
  beforeDestroy() {
    // 销毁图表实例，避免内存溢出
    this.myChart.dispose && this.myChart.dispose();
  },
  methods: {
    //轮播饼图扇形区域
    activeEcharts() {
      let str = this.classify;
      let chart = this.myChart;
      if (str === "pie") {
        let arrLength = chart.getOption().series[0].data.length;
        let num = 0;
        this.timeOut = setInterval(() => {
          let oldN = num - 1;
          if (oldN < 0) {
            oldN = arrLength - 1;
          }
          chart.dispatchAction({
            type: "downplay",
            seriesIndex: 0,
            dataIndex: oldN
          });
          chart.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: num
          });
          num++;
          if (num >= arrLength) {
            num = 0;
          }
        }, 3000);
      }
    }
  }
};
</script>

<style scoped>
.echart-box {
  flex: 1;
  width: 100%;
  height: 100%;
}
</style>
