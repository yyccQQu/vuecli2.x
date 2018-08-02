import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
// var APP_CONFIG = require('api/app.config.pro.js')

import APP_CONFIG from 'api/app.config.pro.js'


// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';





export function fetchMethod( $http) {
    // var $http = Vue.prototype.$http;
    // let user = localStorage.getItem(APP_CONFIG.tokenKey);
    // let userObj = {};
    // if (user != null) {
    //     userObj = JSON.parse(user);
    // }
    let httpObj = {
        defaultParams: {},
        initParams(params) {

            if (Array.isArray(params)) {
                this.defaultParams = params;
            } else {
                this.defaultParams = $.extend({}, params);//配置jq或者自己写继承
            }
            console.log(this.defaultParams)
            return this.defaultParams;
        },
        BeArray(params) {
            
            return new Promise((resolve, reject) => {
                resolve(this.initParams(params))
            })
        },
        getHttpPromise(method, url, params, timeout, responseType) {
            var token = "";
            // if (userObj && userObj.sessionId) {
            //     token = userObj.sessionId;
            // }
            let config = $.extend(
                {},
                {
                    method: method,
                    url: APP_CONFIG.apiUrls.HOST + url,
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json;charset=utf-8;",
                        Lanugage: "zh",
                        Authorization: "Bearer " + token
                    },
                    timeout: timeout || 100000,
                    responseType: responseType || "json"
                }
            );

            if (method.toUpperCase() === "GET") {
                config = $.extend(config, {
                    params: params
                });
            } else if (method.toUpperCase() === "POST") {
                config = $.extend(config, {
                    data: params
                });
            } else if (method.toUpperCase() === "PUT") {
                config = $.extend(config, {
                    data: params
                });
            } else if (method.toUpperCase() === "DELETE") {
                config = $.extend(config, {
                    params: params
                });
            }

            return $http(config);

        }


    }

    let factory = {

        post(url, params, timeout) {
            return new Promise((resolve, reject) => {
                httpObj.BeArray(params).then(function (initParams) {
                    httpObj.getHttpPromise("POST", url, initParams, timeout).then(
                        function (data) {
                            resolve(data);
                            console.log(url, data);
                        },
                        function (data) {
                            reject(data);
                        }
                    );
                });
            })
        },
        get(url, params, timeout) {
            return new Promise((resolve, reject) => {
                httpObj.BeArray(params).then(function (initParams) {
                    httpObj.getHttpPromise("GET", url, initParams, timeout).then(
                        function (data) {
                            resolve(data);
                            console.log(url, data);
                        },
                        function (data) {
                            reject(data);
                        }
                    );
                });
            })
        },
        put(url, params, timeout) {
            return new Promise((resolve, reject) => {
                httpObj.BeArray(params).then(function (initParams) {
                    httpObj.getHttpPromise("PUT", url, initParams, timeout).then(
                        function (data) {
                            resolve(data);
                            console.log(url, data);
                        },
                        function (data) {
                            reject(data);
                        }
                    );
                });
            })
        },
        del(url, params, timeout) {
            return new Promise((resolve, reject) => {
                httpObj.BeArray(params).then(function (initParams) {
                    httpObj.getHttpPromise("DEL", url, initParams, timeout).then(
                        function (data) {
                            resolve(data);
                            console.log(url, data);
                        },
                        function (data) {
                            reject(data);
                        }
                    );
                });
            })
        },
        file(url, params, timeout) {
            return new Promise((resolve, reject) => {
                httpObj.BeArray(params).then(function (initParams) {
                    httpObj.getHttpPromise("POST", url, initParams, timeout, "arraybuffer").then(
                        function (data) {
                            resolve(data);
                            console.log(url, data);
                        },
                        function (data) {
                            reject(data);
                        }
                    );
                });
            })
        },
        form(url, params, timeout) {
            return new Promise((resolve, reject) => {
                $http({
                    method: "POST",
                    url: APP_CONFIG.apiUrls.HOST + url,
                    headers: {
                        Accept: "*/*",
                        "Content-Type": undefined,
                        lanugage: "zh",
                        timeout: timeout || 100000,
                        Authorization: "Bearer " + userObj.token
                    },
                    transformRequest: angular.identity,
                    data: params
                })
                    .success(function (data, status, header, config) {
                        resolve({
                            data: data,
                            status: status
                        });
                    })
                    .error(function (data, status, header, config) {
                        reject({
                            data: data,
                            status: status
                        });
                    });


            })
        },
        forms (url, params, timeout) {
            $http({
                method: "PUT",
                url: APP_CONFIG.apiUrls.HOST + url,
                headers: {
                    Accept: "*/*",
                    "Content-Type": undefined,
                    lanugage: "zh",
                    timeout: timeout || 100000,
                    Authorization: "Bearer " + userObj.token
                },
                transformRequest: angular.identity,
                data: params
            })
                .success(function (data, status, header, config) {
                    resolve(data);
                })
                .error(function (data, status, header, config) {
                    reject(data);
                });
        },
        //TODO:调取本地json
        getJson (url) {
            $http.get(APP_CONFIG.apiUrls.APP_HOST + url).success(function (data) {
                resolve(data);
            });
        }
    }
    return factory;

}


export function httpFun(url, method, data) {
    return fetchMethod(axios)[method](url, data)
        .then(
            function (resp) {
                return resp
            })
        .catch(
            function (error) {
                console.log('XHR Failed for getAvengers.' + error)
                if (error.status === 400) {
                    return error
                }
            })
}

export default httpFun;



