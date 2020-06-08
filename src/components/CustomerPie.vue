<template>
  <Echarts
    class="myEcharts"
    title="2020客户销售数据  (单位：万发)" 
    classify="pie"
    outside="75%"
    inner='30%'
    top="60%"
    :isLegend = false
    :isRing = true
    :isLable = true
    :dataArray="dataArr"
  ></Echarts>
</template>

<script>
import Echarts from "../echarts/Echarts";
export default {
  name: "CustomerPie",
  components: {
    Echarts
  },
  computed:{
    dataArr(){
      return this.$store.state.customerData;
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