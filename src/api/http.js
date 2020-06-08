import axios from 'axios';
import { Promise } from 'core-js';

let http = axios.create();
http.defaults.baseURL = '';
http.defaults.timeout = 5000;

/**
 * 请求拦截处理 
 */
http.interceptors.request.use(config=>{
    console.log(config);
    return config;
},error=>{
    let err = {
        type:'请求出错',
        msg:error
    }
    return Promise.reject(err);
});
/**
 * 响应拦截处理
 */
http.interceptors.response.use(response=>{
    console.log(response);
    return response;
},error=>{
    let err = {
        type:'响应出错',
        msg:error
    }
    return Promise.reject(err);
})

/**
 * @method get 请求方式get请求
 * @param {String} url 请求api地址
 * @param {Object} params 请求参数
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        http({
            method: 'get',
            url,
            params
        }).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}

/**
 * @method post 请求方式post请求
 * @param {String} url 请求api地址
 * @param {Object} params 请求参数
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        http({
            method: 'post',
            url,
            data:params
        }).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}

/**
 * @param {String} type 可为post，get
 * @param {String} url 请求api地址
 * @param {Object} params 请求参数
 */
export function ajax(type, url, params) {
    return new Promise((resolve, reject) => {
        http({
            method: type,
            url,
            params:type==='get'?params:null,
            data:type!=='get'?params:null
        }).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}