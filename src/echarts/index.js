import echarts from 'echarts';
const chinaJson = require("../assets/china.json");//中国地图绘制数据
echarts.registerMap("china", chinaJson);//echarts注入地图数据
const provinceGeoCoord = {
    '北京市': [116.40706125, 39.90546228869453],
    '天津市': [117.19447355468752, 39.08083749329552],
    '河北省': [114.53952, 38.03647],
    '山西省': [112.48699, 37.94036],
    '内蒙古自治区': [111.62299, 40.80772],
    '辽宁省': [123.46987, 41.80515],
    '吉林省': [125.28845, 43.83327],
    '黑龙江省': [126.95717, 45.54774],
    '上海市': [121.48941, 31.40527],
    '江苏省': [118.8921, 31.32751],
    '浙江省': [120.21201, 30.2084],
    '安徽省': [117.30794, 31.79322],
    '福建省': [119.27345, 26.04769],
    '江西省': [115.94422, 28.54538],
    '山东省': [116.75199, 36.55358],
    '河南省': [113.6401, 34.72468],
    '湖北省': [114.02919, 30.58203],
    '湖南省': [112.98626, 28.25591],
    '广东省': [113.27324, 23.15792],
    '广西壮族自治区': [108.27331, 22.78121],
    '海南省': [110.32941, 20.02971],
    '重庆市': [106.54041, 29.40268],
    '四川省': [104.10194, 30.65984],
    '贵州省': [106.62298, 26.67865],
    '云南省': [102.82147, 24.88554],
    '西藏自治区': [91.13775, 29.65262],
    '陕西省': [108.93425, 34.23053],
    '甘肃省': [103.71878, 36.10396],
    '青海省': [101.76628, 36.6502],
    '宁夏回族自治区': [106.24284, 38.47314],
    '新疆维吾尔自治区': [88.31104, 43.36378],
    '台湾省': [121.520076, 25.030724],
    '香港特别行政区': [114.16546, 22.27534],
    '澳门特别行政区': [113.54913, 22.19875]
}
const colorList = ['#4CDA99', '#6481F1', '#F0CA00', '#FF7362', '#A689EC', '#12BCE4'];
const fontColor = 'rgba(255,255,255,.7)';//文本颜色
const lineColor = 'rgba(255,255,255,.7)';//线颜色
const titleObj = {//图表标题
    left: 15,
    top: 5,
    textStyle: {
        color: 'rgba(249, 249, 249, 0.8)',
        fontSize: 14
    }
};
const legend = {//图例设置
    bottom: 10,
    left: 'center',
    padding: 0,
    itemGap: 11,
    itemWidth: 12,
    itemHeight: 8,
    selectedMode: false,
    textStyle: {
        fontSize: 9,
        color: fontColor,
        padding: [1, -3, 0, -3]
    }
};
const axisLine = {//轴线设置
    lineStyle: {
        color: lineColor,
    }
};
const splitLine = {//数值轴辅助线样式
    lineStyle: {
        color: ['#aaa', '#ddd'],
        opacity: 0.2,
        width: 0.5
    }
};
const grid = {//直角坐标系设置
    top: 40,
    left: 20,
    right: 20,
    bottom: 30,
    containLabel: true
};
const allOptions = {
    /**
     * @dataArray <Array> 要渲染的数据参数(必须传)
     * @title <String> 图表的标题
     * @isHorizontal <Boolean> 是否横向显示
     * @xName <String> x轴名称
     * @yName <String> y轴名称
     * @isBorder <Boolean> 是否显示柱子边框
     * @return <Object> 返回柱状图option配置项
     **/
    barOptions: function ({ dataArray, title = null,isLegend=false, isHorizontal = false, isBorder = false, xName = null, yName = null, colors=[] }) {
        let categoryData = dataArray[0].data.map(item => item.title);//类目，轴的类目
        let seriesArr = dataArray.map(item => {//图表系列配置
            let obj = {
                name: item.name,//柱子名称
                type: 'bar',
                barWidth: '30%',//柱子粗细
                barGap: '50%',//不同类柱子间隔
                label: {//柱子标签样式
                    show: true,
                    position: isHorizontal ? 'right' : 'top',
                    fontSize: 7
                },
                itemStyle: {
                    barBorderRadius: isBorder ? 500 : 2
                },
                showBackground: isBorder,
                backgroundStyle: {
                    color: 'rgba(223,223,223, 0)',
                    borderColor: 'rgba(223,223,223,1)',
                    borderWidth: 0.5,
                    barBorderRadius: 500,
                },
                data: item.data.map(item => item.value)
            };
            return obj;
        });
        return {
            color: [...colors,...colorList],
            title: { text: title, ...titleObj },
            tooltip: {//图表提示框
                trigger: 'axis',
                axisPointer: {// 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'// 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: isLegend?legend:null,//显示图例
            grid: grid,
            xAxis: {//x轴
                nameLocation: 'end',
                name: xName,
                axisLine: axisLine,
                splitLine: splitLine,
                type: isHorizontal ? 'value' : 'category',
                data: isHorizontal ? null : categoryData,
                axisLabel: {
                    fontSize:6
                }
            },
            yAxis: {//y轴
                nameLocation: 'end',
                name: yName,
                axisLine: axisLine,
                splitLine: splitLine,
                type: isHorizontal ? 'category' : 'value',
                data: isHorizontal ? categoryData : null,
                axisLabel: {
                    fontSize:6,
                    rotate:45
                }
            },
            series: [...seriesArr]
        };
    },

    /**
     * @dataArray <Array> 要渲染的数据参数(必须传)
     * @title <String> 图表的标题
     * @isRing <Boolean> 是否是环图
     * @isLegend <Boolean> 是否显示图例
     * @roseType <String> 传值玫瑰图area，丁格尔-玫瑰图radius,不传就默认
     * @isPercentage <Boolean> 是否显示为百分比
     * @return <Object> 返回柱状图option配置项
     **/
    pieOptions: function ({ dataArray, isRing = true,isPercentage=false, isLegend = true, isLable = false, title = null, roseType = null,left='50%', top = '50%', inner = '50%', outside = '70%' }) {
        let seriesArr = dataArray.map(item => {
            return {
                name: item.name,
                type: 'pie',
                top: 30,
                left: 20,
                right: 15,
                bottom: 10,
                radius: [isRing ? inner : 0, outside],//内环以及外环
                center: [left, top],//饼图位置
                roseType: roseType,//控制是玫瑰图area，丁格尔-玫瑰图radius，环图null
                minAngle: 5,//小于5度显示5度扇形区域
                label: {
                    show: isLable,
                    formatter: isPercentage?'{b}: {d}%':'{b}: {c}',
                    position: isLable ? null : 'center',
                    fontSize:8
                },
                startAngle:100,
                labelLine:{
                    length:15,
                    length2:15,
                },
                emphasis: {
                    label: {
                        show: true,
                        fontWeight: 'bold',
                        color:'#fff',
                        fontSize:10
                    }
                },
                data: item.data.map(i => {
                    return {
                        name: i.title,
                        value: i.value
                    }
                })
            }
        });
        return {
            color: colorList,
            title: { text: title, ...titleObj },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                show: isLegend,
                ...legend
            },
            series: [...seriesArr]
        }
    },

    /**
     * @dataArray <Array> 要渲染的数据参数(必须传)
     * @title <String> 图表的标题
     * @return <Object> 返回柱状图option配置项
     **/
    lineOptions: function ({ title = null, dataArray, xName = null, yName = null, colors=[] }) {
        let categoryData = dataArray[0].data.map(item => item.title);//类目，轴的类目
        let seriesArr = dataArray.map(item => {
            return {
                name: item.name,
                type: 'line',
                smooth: true,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        fontSize: 7
                    }
                },
                data: item.data.map(i => i.value)
            }
        });
        return {
            color: [...colors,...colorList],
            title: { text: title, ...titleObj },
            tooltip: {
                trigger: 'axis'
            },
            grid: grid,
            legend: {
                ...legend
            },
            xAxis: {
                nameLocation: 'end',
                name: xName,
                axisLine: axisLine,
                splitLine: splitLine,
                type: 'category',
                boundaryGap: false,
                data: categoryData,
                axisLabel: {
                    fontSize:6,
                }
            },
            yAxis: {
                nameLocation: 'end',
                name: yName,
                axisLine: axisLine,
                splitLine: splitLine,
                type: 'value',
                axisLabel: {
                    fontSize:6,
                    rotate:30
                }
            },
            series: [...seriesArr]
        }
    },

    /**
     * @dataArray <Array> 要渲染的数据参数(必须传)
     * @return <Object> 返回柱状图option配置项
     **/
    mapOptions: function ({ dataArray }) {
        //飞线图数据解析
        let linesData = dataArray.map(item => {
            let fromName = item.name;
            let arr = item.data.map(i => {
                let fromCoord = provinceGeoCoord[fromName];
                let toCoord = provinceGeoCoord[i.title];
                return {
                    fromName,
                    toName: i.title,
                    coords: [fromCoord, toCoord]
                }
            });
            return arr;
        })[0];
        //气泡图数据解析
        let effectScatterData = dataArray.map(item => {
            let arr = item.data.map(i => {
                let toCoord = provinceGeoCoord[i.title];
                return [...toCoord, i.value];
            });
            return arr;
        })[0];
        //热力图数据解析
        let hotMapData = dataArray.map(item => {
            let arr = item.data.map(i => {
                return {
                    name:i.title,
                    value:i.value
                };
            });
            return arr;
        })[0];
        let linesSeries = {
            type: "lines",
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                symbol: 'circle',
                trailLength: 0.5,
                color: "#ffec63",
                symbolSize: 1.5
            },
            lineStyle: {
                normal: {
                    width: 0,
                    curveness: 0.2
                }
            },
            data: linesData
        };
        let twoLineS = {
            type: 'lines',
            zlevel: 2,
            lineStyle: {
                color: '#74ff63',
                width: 0.5,
                opacity: 0.6,
                curveness: 0.2
            },
            data: linesData
        }
        let effectScatterSeries = {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            symbolSize: function (val) {
                let num = val[2] / 5000;
                if(num<5){
                    num = 5;
                }else if(num>15){
                    num = 15
                }
                return num;
            },
            itemStyle: {
                color: '#ff930e',
                opacity: 0.3
            },
            data: effectScatterData
        };
        let hotMapSeries = {
            name: '各省雷管用量',
            type: 'map',
            geoIndex: 0,
            data:hotMapData
        };
        return {
            tooltip: {
                trigger: "item"
            },
            geo: {
                map: "china",
                label: {
                    show: true,
                    color: "rgba(255,255,255,.8)",
                    fontSize: 8
                },
                roam: false,
                itemStyle: {
                    areaColor: "rgba(168, 212, 255, 0.2)",
                    borderColor: "#dedede"
                },
                aspectScale: 0.9,
                zoom: 1.4,
                top: "33%",
                left: "14.5%",
                right: "14.5%",
                emphasis: {
                    label: {
                        show: true,
                        color: "#0888e3",
                        fontWeight: "bold"
                    },
                    itemStyle: {
                        areaColor: "#7ffdfd"
                    }
                }
            },
            visualMap: {
                min: 10000,
                max: 1000000,
                left: 'left',
                top: 'bottom',
                text: ['高','低'],
                seriesIndex:0,
                inRange: {
                    color: ['#429eed', '#006edd']
                },
                show:false
            },
            series: [hotMapSeries, twoLineS, linesSeries, effectScatterSeries]
        };
    }
}
let init = (el, classify, arg = {}) => {
    const instance = echarts.init(el);
    instance.setOption(allOptions[`${classify}Options`](arg));
    return instance;
};
export default {
    init,
    allOptions
};