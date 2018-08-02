
import Vue from 'vue'

export function filterEnumService() {
    return {
        inout_type: [
            { key: 1, value: '人工存入' },
            { key: 2, value: '公司入款' },
            { key: 3, value: '线上入款' },
            { key: 4, value: '人工取出' },
            { key: 5, value: '线上取款' }
        ]
    }
}

 function filterEnum(filterEnumService) {
    var enumName = Object.keys(filterEnumService)
    console.log(enumName,'obj')
    return function (val, validName) {
        for (var i in enumName) {
            if (enumName[i] === validName) {
                for (var j in filterEnumService[enumName[i]]) {
                    if (filterEnumService[enumName[i]][j].key === val) {
                        return filterEnumService[enumName[i]][j].value
                    }
                }
                return val
            }
        }
        return val
    }
}

export default Vue.filter("filterEnum", () => { return filterEnum(filterEnumService())})//注册过滤器