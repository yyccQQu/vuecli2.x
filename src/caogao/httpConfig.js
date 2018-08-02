
'use strict'

import axios from 'axios'
import qs from 'qs'
var APP_CONFIG = require('api/app.config.pro.js')

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://localhost:8000/';


export function fetch(method,url,params) {
    return new Promise((resolve, reject) => {
        axios[method](url, params)
            .then(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

