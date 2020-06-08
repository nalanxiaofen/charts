<template>
  <Echarts
    class="myEcharts" 
    classify="pie"
    outside="110%"
    inner='80%'
    top="40%"
    left="40%"
    :isLegend = true
    :isRing = true
    :dataArray="dataArr"
    :isPercentage = true
  ></Echarts>
</template>

<script>
import Echarts from "../echarts/Echarts";
export default {
  name: "UsePie",
  components: {
    Echarts
  },
  computed:{
    dataArr(){
      return this.$store.state.useData;
    }
  }
};
</script>
<style lang="less" scoped>
.myEcharts {
  flex: 1;
  background-color: rgba(41, 52, 65, 0.2);
  border-radius: 5px;
}
</style>