import Vue from 'vue'
import Vuex from 'vuex'
import { getMarketData } from '../api/api';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //市场趋势数据
    marketData: [{
      name: '公司销量',
      data: [{
        title: '2017年',
        value: 438
      }, {
        title: '2018年',
        value: 1127
      }, {
        title: '2019年',
        value: 3431
      }, {
        title: '2020年(1季度)',
        value: 649.8
      }]
    }, {
      name: '全国销量',
      data: [{
        title: '2017年',
        value: 800
      }, {
        title: '2018年',
        value: 2600
      }, {
        title: '2019年',
        value: 6000
      }, {
        title: '2020年(1季度)',
        value: 1300
      }]
    }],
    //雷管使用数据
    useData: [{
      name: '各省雷管使用量',
      data: [{
        title: '贵州',
        value: 424
      }, {
        title: '广西',
        value: 256
      }, {
        title: '福建',
        value: 109
      }, {
        title: '河南',
        value: 76
      }, {
        title: '广东',
        value: 75
      }, {
        title: '其他',
        value: 238
      }]
    }],
    //客户销售数据
    customerData: [{
      name: '2020客户销售数据',
      data: [{
        title: '西安庆华',
        value: 90
      }, {
        title: '山东圣世达',
        value: 10
      }, {
        title: '埔安科贸',
        value: 141
      }, {
        title: '重庆顺安',
        value: 12
      }, {
        title: '贵州久联',
        value: 252
      }, {
        title: '湖南向红',
        value: 354
      }, {
        title: '广西金建华',
        value: 273
      }, {
        title: '长春吉阳',
        value: 0
      }, {
        title: '南京理工',
        value: 0
      }, {
        title: '河南前进',
        value: 220
      }, {
        title: '湖南湘器',
        value: 90
      }]
    }],
    //生产监控数据
    produceDaata: [{
      name: '计划生产量',
      data: [{
        title: '2020/01',
        value: 300
      }, {
        title: '2020/02',
        value: 300
      }, {
        title: '2020/03',
        value: 400
      }, {
        title: '2020/04',
        value: 500
      }, {
        title: '2020/05',
        value: 700
      }]
    }, {
      name: '实际生产量',
      data: [{
        title: '2020/01',
        value: 280
      }, {
        title: '2020/02',
        value: 0
      }, {
        title: '2020/03',
        value: 410
      }, {
        title: '2020/04',
        value: 480
      }, {
        title: '2020/05',
        value: 630
      }]
    }],
    //2020销售情况数据
    saleData: [{
      name: '计划销售量',
      data: [{
        title: '2020/01',
        value: 175
      }, {
        title: '2020/02',
        value: 135
      }, {
        title: '2020/03',
        value: 295
      }, {
        title: '2020/04',
        value: 375
      }, {
        title: '2020/05',
        value: 520
      }]
    }, {
      name: '实际销售量',
      data: [{
        title: '2020/01',
        value: 261.5
      }, {
        title: '2020/02',
        value: 0
      }, {
        title: '2020/03',
        value: 303.1
      }, {
        title: '2020/04',
        value: 388.3
      }, {
        title: '2020/05',
        value: 399.2
      }]
    }],
    //整体概览
    overviewData: [{
      name: '整体概览',
      data: [{
        title: '爆破企业',
        value: 936
      }, {
        title: '爆破员',
        value: 10947
      }, {
        title: '起爆器',
        value: 10414
      }, {
        title: '作业点',
        value: 37923
      }, {
        title: 'APP装机量',
        value: 11489
      }]
    }],
    //地图展示数据
    mapData: [{
      name: '贵州省',
      data: [{
        title: '辽宁省',
        value: 2372
      }, {
        title: '吉林省',
        value: 43292
      }, {
        title: '江苏省',
        value: 3599
      }, {
        title: '浙江省',
        value: 128450
      }, {
        title: '山西省',
        value: 10261
      }, {
        title: '福建省',
        value: 1184043
      }, {
        title: '河南省',
        value: 852690
      }, {
        title: '湖北省',
        value: 49171
      }, {
        title: '湖南省',
        value: 91202
      }, {
        title: '宁夏回族自治区',
        value: 651
      }, {
        title: '内蒙古自治区',
        value: 137906
      }, {
        title: '山东省',
        value: 486026
      }, {
        title: '广东省',
        value: 813216
      }, {
        title: '四川省',
        value: 40589
      }, {
        title: '贵州省',
        value: 4679797
      }, {
        title: '云南省',
        value: 76551
      }, {
        title: '北京市',
        value: 54973
      }, {
        title: '河北省',
        value: 22997
      }, {
        title: '安徽省',
        value: 456
      }, {
        title: '江西省',
        value: 19619
      }, {
        title: '广西壮族自治区',
        value: 2803668
      }, {
        title: '陕西省',
        value: 331438
      }, {
        title: '甘肃省',
        value: 21699
      }]
    }],
    //总体数据
    totalData: [{
      name: '大屏总览数据',
      produceTotal: 65770000,//生产总量
      useTotal: 61403314,//使用总量
      modalSale: 6003,//模块销售额
      detonatorSale: 130,//起爆器销售额
      equipmentSale: 136,//生产仪器设备销售额
      materialSale: 535//辅材销售额
    }]
  },
  mutations: {
    changeMarketData(state, marketData) {
      state.marketData = marketData;
    },
    changeUseData(state, useData) {
      state.useData = useData;
    },
    changeCustomerData(state, customerData) {
      state.customerData = customerData;
    },
    changeProduceDaata(state, produceDaata) {
      state.produceDaata = produceDaata;
    },
    changeSaleData(state, saleData) {
      state.saleData = saleData;
    },
    changeOverviewData(state, overviewData) {
      state.overviewData = overviewData;
    },
    changeMapData(state, mapData) {
      state.mapData = mapData;
    },
    changeTotalData(state, totalData) {
      state.totalData = totalData;
    }
  },
  actions: {
    //异步设置市场趋势数据
    actionMarketData(context) {
      //到时marketData通过ajax获取
      getMarketData().then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
        let arr = context.state.marketData;
        context.commit('changeMarketData', arr);
      });
    },

    //异步设置雷管使用量排行数据
    actionUseData(context) {
      //到时marketData通过ajax获取
      let arr = context.state.useData;
      context.commit('changeUseData', arr);
    },

    //异步设置客户销售数据
    actionCustomerData(context) {
      //到时marketData通过ajax获取
      let arr = context.state.customerData;
      context.commit('changeCustomerData', arr);
    },

    //异步设置生产监控数据
    actionProduceDaata(context) {
      //到时marketData通过ajax获取
      let arr = context.state.produceDaata;
      context.commit('changeProduceDaata', arr);
    },

    //异步设置销售数据
    actionSaleData(context) {
      //到时marketData通过ajax获取
      let arr = context.state.saleData;
      context.commit('changeSaleData', arr);
    },

    //异步设置整体概览数据
    actionOverviewData(context) {
      //到时marketData通过ajax获取
      let arr = context.state.overviewData;
      context.commit('changeOverviewData', arr);
    },

    //异步设置地图展示数据
    actionMapData(context) {
      //到时marketData通过ajax获取
      let arr = context.state.mapData;
      context.commit('changeMapData', arr);
    },

    //异步设置总览数据
    actionTotalData(context) {
      //到时marketData通过ajax获取
      let arr = context.state.totalData;
      context.commit('changeTotalData', arr);
    }
  }
})
