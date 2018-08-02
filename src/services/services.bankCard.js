import httpFun from 'services/httpFunc.js'

// httpFunc.fetchMethod()
import APP_CONFIG from 'api/app.config.pro.js'


export const bankList = (post) => {
    return httpFun(APP_CONFIG.apiUrls.BANKSET_LIST, 'post', post)
}