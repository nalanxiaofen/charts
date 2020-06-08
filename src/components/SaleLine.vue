<template>
  <Echarts
    class="myEcharts"
    title="销售情况  (单位：万发)"
    classify="line"
    :dataArray="dataArr"
    :colors='colors'
  ></Echarts>
</template>

<script>
import Echarts from "../echarts/Echarts";
export default {
  name: "SaleLine",
  components: {
    Echarts
  },
  data() {
    return {
      colors:['#f8d330','#519aff']
    };
  },
  computed:{
    dataArr(){
      return this.$store.state.saleData;
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