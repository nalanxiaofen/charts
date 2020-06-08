<template>
  <Echarts
    class="myBar"
    title="市场趋势  (单位：万发)"
    classify="bar"
    :dataArray="dataArr"
    :isBorder="false"
    :isLegend="true"
  ></Echarts>
</template>

<script>
import Echarts from "../echarts/Echarts";
export default {
  name: "MarketBar",
  components: {
    Echarts
  },
  data() {
    return {
      colors: ["#519aff", "#aa4cba"]
    };
  },
  computed: {
    dataArr() {
      return this.$store.state.marketData;
    }
  }
};
</script>
<style lang="less" scoped>
.myBar {
  flex: 1;
  background-color: rgba(41, 52, 65, 0.2);
  border-radius: 5px;
}
</style>