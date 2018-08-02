function _patchValue(target, source) {
    for (var key in target) {
        target[key] = source[key];
    }

};

let a = {
    b: 1,
    c: 2,
    d: {
        e: 3,
        f: 4
    }
}

let b = {
    b: 333,
    c: 2333,
    n: 'fff'
}

// _patchValue(b, a)




extend(b, a)
// console.log(b, a)

function extend(target, source) {
    let object = {}

    object.inspect = function () {
        try {
            if (target == undefined) return 'undefined'; // 处理undefined情况
            if (target == null) return 'null';     // 处理null情况
            // 如果对象定义了inspect方法, 则调用该方法返回, 否则返回对象的toString()值
            return object.inspect ? object.inspect() : target.toString();
        } catch (e) {
            if (e instanceof RangeError) return '...继承错误'; // 处理异常情况
            throw e;
        }
    }
    object._keys = function () {     // 一个静态方法, 传入一个对象, 返回该对象中所有的属性, 构成数组返回
        let keys = [];
        for (let property in source)
            keys.push(property);     // 将每个属性压入到一个数组中
        return keys;
    },
        object._selfKeys = function () {
            let keys = [];
            for (let property in target)
                keys.push(property);     // 将每个属性压入到一个数组中
            return keys;
        }
    object._values = function () {   // 一个静态方法, 传入一个对象, 返回该对象中所有属性所对应的值, 构成数组返回
        let values = [];
        for (let property in source) values.push(source[property]); // 将每个属性的值压入到一个数组中
        return values;
    },
        object._clone = function () {    // 一个静态方法, 传入一个对象, 克隆一个新对象并返回
            return Object.extend({}, source);
        },

        // object[object._keys()]=object.values // 解构
        object.__keys = object._keys()
    object.__value = object._values()
    object.__selfKeys = object._selfKeys()

    // console.log(object.__keys, object.__value, 'object')

    object._forCopy = function () {
        let e = {}
        for (let i = 0; i < object.__keys.length; i++) {
            e[object.__keys[i]] = object.__value[i]
        }
        // console.log(e, 'eeeee')
        return e
    }
    object.__forCopy = object._forCopy()

    object._toPick = function () {
        var arr = []
       for(var i=0;i<object.__selfKeys.length;i++){
           for(var a=0;a<object.__keys.length;a++){
               if (object.__selfKeys[i]==object.__keys[a]){
                   console.log(i)
                   arr.push(object.__selfKeys[i])
               }
           }
       }
        console.log(arr, 'result', object.__selfKeys, object.__keys)
        // return result
    }


    // console.log(object,'abck')

    return object._toPick()

}



// Object.extend(Object, {
//     inspect: function (object) {   // 一个静态方法, 传入一个对象, 返回对象的字符串表示
//         try {
//             if (object == undefined) return 'undefined'; // 处理undefined情况
//             if (object == null) return 'null';     // 处理null情况
//             // 如果对象定义了inspect方法, 则调用该方法返回, 否则返回对象的toString()值
//             return object.inspect ? object.inspect() : object.toString();
//         } catch (e) {
//             if (e instanceof RangeError) return '...'; // 处理异常情况
//             throw e;
//         }
//     },
//     keys: function (object) {     // 一个静态方法, 传入一个对象, 返回该对象中所有的属性, 构成数组返回
//         var keys = [];
//         for (var property in object)
//             keys.push(property);     // 将每个属性压入到一个数组中
//         return keys;
//     },
//     values: function (object) {   // 一个静态方法, 传入一个对象, 返回该对象中所有属性所对应的值, 构成数组返回
//         var values = [];
//         for (var property in object) values.push(object[property]); // 将每个属性的值压入到一个数组中
//         return values;
//     },
//     clone: function (object) {    // 一个静态方法, 传入一个对象, 克隆一个新对象并返回
//         return Object.extend({}, object);
//     }
// })


