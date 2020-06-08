<template>
  <Echarts
    class="myBar"
    title="雷管使用量  (单位：万发)" 
    classify="bar" 
    :dataArray="dataArr" 
    :isBorder=true
    :isHorizontal=true
    :colors='colors'
  ></Echarts>
</template>

<script>
import Echarts from "../echarts/Echarts";
export default {
  name: "UseBar",
  components: {
    Echarts
  },
  data() {
    return {
      colors:['#3de7c9']
    };
  },
  computed:{
    dataArr(){
      return this.$store.state.useData;
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