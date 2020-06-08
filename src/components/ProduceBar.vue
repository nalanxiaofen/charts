<template>
  <Echarts
    class="myBar"
    title="生产监控  (单位：万发)" 
    classify="bar" 
    :dataArray="dataArr" 
    :isBorder=false
    :isHorizontal=true
    :colors='colors'
    :isLegend=true
  ></Echarts>
</template>

<script>
import Echarts from "../echarts/Echarts";
export default {
  name: "ProduceBar",
  components: {
    Echarts
  },
  data() {
    return {
      colors:['#65f5f3','#faad14']
    };
  },
  computed:{
    dataArr(){
      return this.$store.state.produceDaata;
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