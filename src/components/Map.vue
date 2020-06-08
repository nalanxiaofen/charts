<template>
  <Echarts
    class="myBar" 
    classify="map" 
    :dataArray="dataArr"
  ></Echarts>
</template>

<script>
import Echarts from "../echarts/Echarts";
export default {
  name: "Map",
  components: {
    Echarts
  },
  computed:{
    dataArr(){
      return this.$store.state.mapData;
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