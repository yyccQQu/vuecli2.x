"use strict";
/**
 * 格式化时间
 * 
 * @param {String} str
 * @returns 格式化后的时间
 */
export const formatDater = (str) => {
    if (!str) return ''
    var date = new Date(str)
    var time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) {
        return ''
    } else if ((time / 1000 < 30)) {
        return '刚刚'
    } else if (time / 1000 < 60) {
        return parseInt((time / 1000)) + '秒前'
    } else if ((time / 60000) < 60) {
        return parseInt((time / 60000)) + '分钟前'
    } else if ((time / 3600000) < 24) {
        return parseInt(time / 3600000) + '小时前'
    } else if ((time / 86400000) < 31) {
        return parseInt(time / 86400000) + '天前'
    } else if ((time / 2592000000) < 12) {
        return parseInt(time / 2592000000) + '个月前'
    } else {
        return parseInt(time / 31536000000) + '年前'
    }
}

export const fiterTime = (nS) => {
    if ((nS === 0) | (nS === null) | !nS | (nS === "")) {
        return "";
    }

    function add0(m) {
        return m < 10 ? "0" + m : m;
    }

    var time = new Date(parseInt(nS) * 1000);
    var y = time.getFullYear();

    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return (
        y +
        "-" +
        add0(m) +
        "-" +
        add0(d) +
        " " +
        add0(h) +
        ":" +
        add0(mm) +
        ":" +
        add0(s)
    );
};

export const fiterDay = (nS) => {
    if ((nS === 0) | (nS === null) | !nS | (nS === "")) {
        return "";
    }

    function add0(m) {
        return m < 10 ? "0" + m : m;
    }

    var time = new Date(parseInt(nS) * 1000);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + "-" + add0(m) + "-" + add0(d);
};

export const outStatus = (value) => {
    var status = "";
    if (value === 1) {
        status = "已出款";
    } else if (value === 2) {
        status = "预备出款";
    } else if (value === 3) {
        status = "已取消";
    } else if (value === 4) {
        status = "已拒绝";
    } else if (value === 5) {
        //status="待审核";
        status = "未出款";
    }
    return status;
};


// export const outStatus = (value) => {
//     var status = "";
//     if (value === 1) {
//         status = "已出款";
//     } else if (value === 2) {
//         status = "预备出款";
//     } else if (value === 3) {
//         status = "已取消";
//     } else if (value === 4) {
//         status = "已拒绝";
//     } else if (value === 5) {
//         //status="待审核";
//         status = "未出款";
//     }
//     return status;
// };
// export const noticeType = (value) => {
//     var status = "";
//     if (value === 1) {
//         status = "类型一";
//     } else if (value === 2) {
//         status = "类型二";
//     } else if (value === 3) {
//         status = "类型三";
//     } else if (value === 4) {
//         status = "类型四";
//     }
//     return status;
// };
export const lineout = (value) => {
    var status = "";
    if (value === 1) {
        status = "待审核";
    } else if (value === 2) {
        status = "已出款";
    } else if (value === 3) {
        status = "预备出款";
    } else if (value === 4) {
        status = "取消出款";
    }
    else if (value === 5) {
        status = "拒绝出款";
    }
    else if (value === 6) {
        status = "满足自动出款";
    }
    return status;
};
export const lineThirdType = (value) => {
    var status = "";
    if (value === 1) {
        status = "未提交";
    } else if (value === 2) {
        status = "已下发";
    }
    return status;
};
export const IPLimit = (value) => {
    var ip = "";
    if (value.length == 0) {
        ip = "否";
    } else {
        ip = "是";
    }
    return ip;
};
export const fiterStatused = (value) => {

    var statused = "";
    if (value === 1) {
        statused = "启用";
    } else if (value === 2) {
        statused = "停用";
    }
    return statused;
};
export const buttonStatus = (value) => {
    var statused = "";
    if (value === 2) {
        statused = "启用";
    } else if (value === 1) {
        statused = "停用";
    }
    return statused;
};
export const fiterValid = (value) => {
    var statused = "";
    if (value === 1) {
        statused = "有效";
    } else if (value === 2) {
        statused = "无效";
    }
    return statused;
};
export const fiterStatused1 = (value) => {
    var statused = "";
    if (value === 2) {
        statused = "启用";
    } else if (value === 1) {
        statused = "停用";
    }
    return statused;
};
export const mailStatus = (value) => {
    var status = ["已发送", "未发送"];
    return status[value - 1];
};
export const DepositWithdrawal = (value) => {
    var statused = "";
    if (value === 1) {
        statused = "存款";
    } else if (value === 2) {
        statused = "取款";
    }
    return statused;
};
export const SuccessFailure = (value) => {
    var statused = "";
    if (value === 1) {
        statused = "成功";
    } else if (value === 2) {
        statused = "失败";
    }
    return statused;
};
export const fiterCX = (value) => {
    var status = "";
    if (value === 1) {
        status = "返佣冲销";
    } else if (value === 2) {
        status = "未冲销";
    }
    return status;
};
export const YorN = (value) => {
    var statused = "";
    if (value === 1) {
        statused = "是";
    } else if (value === 2) {
        statused = "否";
    }
    return statused;
};
export const YesNo = (value) => {
    var statused = "";
    if (value === 0) {
        statused = "否";
    } else if (value === 1) {
        statused = "是";
    }
    return statused;
};
export const isShow = (value) => {
    var str = "";
    if (value === 0) {
        str = "正常";
    } else {
        str = "隐藏";
    }
    return str;
};
export const currentstate = (value) => {
    var statused = "";
    if (value === 1) {
        statused = "启用";
    } else if (value === 2) {
        statused = "停用";
    }
    return statused;
};
export const siteState = (value) => {
    var statused = "";
    if (value === 1) {
        statused = "开启";
    } else if (value === 2) {
        statused = "关闭";
    } else if (value === 3) {
        statused = "暂停";
    } else {
        statused = "维护";
    }
    return statused;
};
export const fiterStatuseds = (value) => {
    var statuseds = "";
    if (value === 1) {
        statuseds = "在线";
    } else {
        statuseds = "离线";
    }
    return statuseds;
};
export const submit = (Submit) => {
    var Submit = "";
    if (Submit === 1) {
        Submit = "提交";
    } else {
        Submit = "未提交";
    }
    return Submit;
};
export const fiterApp = (value) => {
    var status = "";
    if (value === 1) {
        status = "已通过";
    } else {
        status = "未处理";
    }
    return status;
};
export const fiterStatusE = (value) => {
    var status = "";
    if (value === 1) {
        status = "已确认";
    } else if (value === 2) {
        status = "已取消";
    } else if (value === 0) {
        status = "未处理";
    }
    return status;
};
export const versionType = (value) => {
    var status = "";
    if (value === 1) {
        status = "PC";
    } else if (value === 2) {
        status = "WAP";
    } else {
        status = "PC + WAP";
    }
    return status;
};
export const loginDevice = (value) => {
    var status = "";
    if (value === 1) {
        status = "PC";
    } else if (value === 2) {
        status = "WAP";
    }
    return status;
};
export const maintenModule = (value) => {
    var arr = ["全部", "PC", "WAP", "APP"];
    return arr[value - 1];
};
export const handleType = (value) => {
    var status = "";
    if (value) {
        status = "修改";
    } else {
        status = "保存";
    }
    return status;
};
export const fiterType = (value) => {
    var status = "";
    if (value === 1) {
        status = "web";
    } else if (value === 2) {
        status = "wap";
    } else if (value === 3) {
        status = "android";
    } else if (value === 4) {
        status = "ios";
    }
    return status;
};
export const packetStatus = (value) => {
    var status = "";
    if (value === 1) {
        status = "未开始";
    } else if (value === 2) {
        status = "活动中";
    } else if (value === 3) {
        status = "已结束";
    } else if (value === 4) {
        status = "已终止";
    }
    return status;
};
export const fiterLog = (value) => {
    var status = "";
    if (value === 1) {
        status = "登录成功";
    } else if (value === 2) {
        status = "登录失败";
    }
    return status;
};
export const fiterDiaodanStatus = (value) => {
    var status = "";
    if (value === 1) {
        status = "待审核";
    } else if (value === 2) {
        status = "正常";
    } else if (value === 2) {
        status = "掉单";
    }
    return status;
};
export const formatDate = (value) => {
    var myDate = new Date(value * 1000);
    var year = myDate.getFullYear().toString();
    var month = myDate.getMonth() + 1;
    var day = myDate.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    return year + "-" + month + "-" + day;
};
export const favourable = (value) => {
    var statused = "";
    if (value === 0) {
        statused = "否";
    } else if (value === 1) {
        statused = "是";
    }
    return statused;
};
export const noticeTypese = (value) => {
    var statused = "";
    if (value === 1) {
        statused = "普通公告";
    } else if (value === 2) {
        statused = "游戏1";
    } else if (value === 3) {
        statused = "游戏2";
    } else if (value === 4) {
        statused = "游戏3";
    } else if (value === 5) {
        statused = "游戏4";
    } else if (value === 6) {
        statused = "游戏5";
    } else if (value === 7) {
        statused = "游戏6";
    }
    return statused;
};
export const fiterStatusBtn = (value) => {
    var statused = "";
    if (value === 1) {
        statused = "停用";
    } else if (value === 2) {
        statused = "启用";
    }
    return statused;
};
export const logoType = (value) => {
    var status = "";
    if (value === 1) {
        status = "类型一";
    } else if (value === 2) {
        status = "类型二";
    } else if (value === 3) {
        status = "类型三";
    } else if (value === 4) {
        status = "类型四";
    }
    return status;
};
export const logoForm = (value) => {
    var status = "";
    if (value === 1) {
        status = "PC端LOGO";
    } else if (value == 2) {
        status = "WAP端LOGO";
    }
    return status;
};
export const floatType = (value) => {
    var status = "";
    if (value === 1) {
        status = "左浮动";
    } else if (value === 2) {
        status = "右浮动";
    }
    return status;
};
export const imgStatus = (value) => {
    var status = "";
    if (value === 1) {
        status = "停用";
    } else if (value === 2) {
        status = "启用";
    }
    return status;
};
export const noticeWay = (value) => {
    var status = "";
    if (value === 1) {
        status = "方式一";
    } else if (value === 2) {
        status = "方式二";
    } else if (value === 3) {
        status = "方式三";
    } else if (value === 4) {
        status = "方式四";
    }
    return status;
};
export const noticeType = (value) => {
    var status = "";
    if (value === 1) {
        status = "中间弹框";
    } else if (value === 2) {
        status = "左下弹框";
    } else if (value === 3) {
        status = "右下弹框";
    }
    return status;
};
export const incomeWay = (value) => {
    //公司入款方式
    var status = "";
    if (value === 1) {
        status = "公司入款";
    } else if (value === 2) {
        status = "线上入款";
    } else if (value === 0) {
        status = "人工入款";
    }
    return status;
};
export const registerType = (value) => {
    //注册文案模板类型
    var status = "";
    if (value === 1) {
        status = "会员注册";
    } else if (value === 2) {
        status = "代理注册";
    } else if (value === 3) {
        status = "开户协议";
    }
    return status;
};
export const siteArr = (value) => {
    var status = "";
    if (value === "1") {
        status = "全站点";
    } else {
        status = value;
    }
    return status;
};
export const applicationStatus = (value) => {
    var status = "";
    if (value === 1) {
        status = "待审核";
    } else if (value === 2) {
        status = "审核通过";
    } else if (value === 3) {
        status = "审核不通过";
    }
    return status;
};
export const clientType = (value) => {
    var status = "";
    if (value === 1) {
        status = "PC";
    } else if (value === 2) {
        status = "WAP";
    } else if (value === 3) {
        status = "Andriod";
    } else if (value === 4) {
        status = "IOS";
    }
    return status;
};
export const sourceType = (value) => {
    var status = "";
    if (value === 0) {
        status = "人工存入";
    } else if (value === 1) {
        status = "公司入款";
    } else if (value === 2) {
        status = "线上入款";
    } else if (value === 3) {
        status = "人工取出";
    } else if (value === 4) {
        status = "线上取款";
    } else if (value === 5) {
        status = "出款";
    } else if (value === 6) {
        status = "注册优惠";
    } else if (value === 7) {
        status = "下单";
    } else if (value === 8) {
        status = "额度转换";
    } else if (value === 9) {
        status = "优惠返水";
    } else if (value === 10) {
        status = "自助返水";
    } else if (value === 11) {
        status = "会员返佣";
    }
    return status;
};
export const cashMemberType = (value) => {
    var status = "";
    if (value === 1) {
        status = "人工存入";
    } else if (value === 2) {
        status = "公司入款";
    } else if (value === 3) {
        status = "线上入款";
    } else if (value === 4) {
        status = "人工取出";
    } else if (value === 5) {
        status = "线上取款";
    } else if (value === 6) {
        status = "注册优惠";
    } else if (value === 7) {
        status = "额度转换";
    } else if (value === 8) {
        status = "优惠返水";
    } else if (value === 9) {
        status = "自助返水";
    } else if (value === 10) {
        status = "会员返佣";
    } else if (value === 11) {
        status = "红包";
    } else if (value === 12) {
        status = "活动领取";
    }
    else if (value === 13) {
        status = "自助申请";
    }
    return status;
};
export const operationTypes = (value) => {
    var status = "";
    if (value === 1) {
        status = "存入";
    } else if (value === 2) {
        status = "取出";
    }
    return status;
};
export const payType = (value) => {
    var status = "";
    if (value === 1) {
        status = "已支付";
    } else if (value === 2) {
        status = "未支付";
    }
    return status;
};
export const activityType = (value) => {
    var status = "";
    if (value === 1) {
        status = "类型一";
    } else if (value === 2) {
        status = "类型二";
    } else if (value === 3) {
        status = "类型三";
    } else if (value === 4) {
        status = "类型四";
    }
    return status;
};
export const typeArr = (val) => {
    var type_id = "";
    if (val == null) {
        return (val = "");
    } else {
        var arr = val.split(",");
        for (var i = 0; i < arr.length; i++) {
            if (i >= 1) {
                type_id += ",";
            }
            if (arr[i] === "1") {
                type_id += "客户后台";
            } else if (arr[i] === "2") {
                type_id += "代理后台";
            } else if (arr[i] === "3") {
                type_id += "前台";
            } else if (arr[i] === "4") {
                type_id += "wap端";
            }
        }
        var vab = type_id;
        type_id = "";
        return vab;
    }
};
export const isOpen = (value) => {
    var status = "";
    if (value === 1) {
        status = "开启";
    } else {
        status = "关闭";
    }
    return status;
};
export const siteStatusd = (value) => {
    var status = "";
    if (value === 1) {
        status = "开启";
    } else if (value === 2) {
        status = "关闭";
    } else if (value === 3) {
        status = "暂停";
    }
    return status;
};
export const configurationType = (value) => {
    var status = "";
    if (value === 1) {
        status = "中间";
    } else if (value === 2) {
        status = "左下";
    } else if (value === 3) {
        status = "右下";
    }
    return status;
};
export const CashType = (value) => {
    var status = "";
    if (value === 1) {
        status = "额度转换";
    } else if (value === 2) {
        status = "额度加款 ";
    } else if (value === 3) {
        status = "额度扣款";
    } else if (value === 4) {
        status = "预借";
    } else if (value === 5) {
        status = "业主充值";
    }
    return status;
};
export const operationType = (value) => {
    var status = "";
    if (value === 1) {
        status = "增加";
    } else if (value === 2) {
        status = "删除 ";
    } else if (value === 3) {
        status = "查看";
    } else if (value === 4) {
        status = "修改";
    }
    return status;
};
export const doType = (value) => {
    var status = "";
    if (value === 1) {
        status = "存入";
    } else if (value === 2) {
        status = "取出 ";
    }
    return status;
};
export const Recharge = (value) => {
    var status = "";
    if (value === 1) {
        status = "第三方入款";
    } else if (value === 2) {
        status = "公司入款";
    }
    return status;
};
export const dropType = (value) => {
    var status = "";
    if (value === 1) {
        status = "掉单审核中";
    } else if (value === 2) {
        status = "审核通过";
    } else if (value === 3) {
        status = "无效申请";
    }
    return status;
};
export const trustHtml = ($sce) => {
    return function (input) {
        return $sce.trustAsHtml(input);
        console.log(input);
    };
}
// .filter("trustHtml", function ($sce) {
//     return function (input) {
//         return $sce.trustAsHtml(input);
//         console.log(input);
//     };
export const cashType = (value) => {
    var status = "";
    if (value === 1) {
        status = "额度转换";
    } else if (value === 2) {
        status = "额度加款";
    } else if (value === 3) {
        status = "额度扣款";
    } else if (value === 4) {
        status = "预借";
    } else if (value === 5) {
        status = "业主充值";
    }
    return status;
};
export const thirdType = (value) => {
    var status = "";
    if (value === 1) {
        status = "第三方入款";
    } else if (value === 2) {
        status = "公司入款";
    }
    return status;
};
export const filterQuotaRecord = (value) => {
    var status = "";
    if (value === 1) {
        status = "开启";
    } else if (value === 2) {
        status = "掉单";
    }
    return status;
};
export const filterLoginType = (value) => {
    var status = "";
    if (value === 1) {
        status = "登录";
    } else if (value === 2) {
        status = "退出";
    }
    return status;
};
export const fifltermtype = (value) => {
    var status = "";
    if (value === 1) {
        status = "系统通知";
    } else if (value === 2) {
        status = "活动通知";
    } else if (value === 3) {
        status = "维护通知";
    } else if (value === 4) {
        status = "个人消息";
    } else if (value === 5) {
        status = "首页";
    } else if (value === 5) {
        status = "注册页";
    } else if (value === 5) {
        status = "游戏页";
    }
    return status;
};
export const filterUnixDate = (value) => {
    var result = moment.unix(value).format("YYYY-MM-DD HH:mm:ss");
    return result;
};
export const filterconstatus = (value) => {
    var status = "";
    if (value === 1) {
        status = "成功";
    } else if (value === 2) {
        status = "失败";
    } else if (value === 3) {
        status = "处理中";
    }
    return status;
};
export const filterdoType = (value) => {
    var status = "";
    if (value === 2) {
        status = "转入";
    } else if (value === 1) {
        status = "转出";
    }
    return status;
};
export const filterdostate = (value) => {
    var status = "";
    if (value === 1) {
        status = "未处理";
    } else if (value === 2) {
        status = "已确定";
    } else if (value === 3) {
        status = "已取消";
    }
    return status;
};
export const filterfromType = (value) => {
    var status = "";
    if (value === 1) {
        status = "PC";
    } else if (value === 2) {
        status = "WAP";
    } else if (value === 3) {
        status = "后台";
    }
    return status;
};
export const filterexStatus = (value) => {
    var status = "";
    if (value === 1) {
        status = "未处理";
    } else if (value === 2) {
        status = "已通过";
    } else if (value === 3) {
        status = "未通过";
    }
    return status;
};
export const filteractrecStatus = (value) => {
    var status = "";
    if (value === 1) {
        status = "未处理";
    } else if (value === 2) {
        status = "通过";
    } else if (value === 3) {
        status = "拒绝";
    }
    return status;
};
export const filterConvcashType = (value) => {
    var status = "";
    if (value === 1) {
        status = "额度转换";
    } else if (value === 2) {
        status = "人工充值";
    } else if (value === 3) {
        status = "扣款";
    } else if (value === 4) {
        status = "自助充值";
    } else if (value === 5) {
        status = "掉单";
    } else if (value === 6) {
        status = "订单";
    }
    return status;
};
export const filtermanual = (value) => {
    var status = "";
    if (value === 1) {
        status = "人工";
    } else if (value === 2) {
        status = "非人工";
    }
    return status;
};
export const filterfromTypee = (value) => {
    var status = "";
    if (value === 1) {
        status = "PC";
    } else if (value === 2) {
        status = "WAP";
    } else if (value === 3) {
        status = "Android";
    } else if (value === 4) {
        status = "IOS";
    }
    return status;
};
export const userorno = (value) => {
    var status = "";
    if (value === 1) {
        status = "正常";
    } else if (value === 2) {
        status = "禁用";
    }
    return status;
};
export const fiflterdType = (value) => {
    var status = "";
    if (value === 1) {
        status = "存入";
    } else if (value === 2) {
        status = "取出";
    }
    return status;
};
export const filterFileSize = (value) => {
    var result = "";
    if (value * 1 > 1024 * 1024) {
        result = ((value * 1) / 1024 / 1024).toFixed(2) + " MB";
    } else if (value * 1 > 1024) {
        result = ((value * 1) / 1024).toFixed(2) + " KB";
    } else {
        result = value + " byte";
    }
    return result;
};
export const redEnvelopeStatus = (value) => {
    var status = "";
    if (value === 4) {
        status = "未生成";
    } else if (value === 1) {
        status = "未开始";
    } else if (value === 2) {
        status = "进行中";
    } else if (value === 3) {
        status = "已结束";
    }
    return status;
};
export const writeoffMoney = (value) => {
    var status = "";
    if (value === 1) {
        status = "已返佣";
    } else if (value === 2) {
        status = "已冲销";
    }
    return status;
};
export const membercashDoType = (value) => {
    var status = "";
    if (value === 1) {
        status = "收入";
    } else if (value === 2) {
        status = "支出";
    }
    return status;
};
export const bankType = (value) => {
    var status = "";
    if (value === 1) {
        status = "出款";
    } else if (value === 2) {
        status = "入款";
    }
    return status;
};
export const filterYesOrNo = (value) => {
    var result = "";
    if (value === 1) {
        result = "是";
    } else if (value === 2) {
        result = "否";
    }
    return result;
};
export const accessType = (value) => {
    var result = "";
    if (value === 1) {
        result = "人工存入";
    } else if (value === 2) {
        result = "多账号存款";
    } else if (value === 3) {
        result = "会员分组存款";
    }
    return result;
};
export const filterIncomeStatus = (value) => {
    var result = "";
    if (value === 1) {
        result = "未处理";
    } else if (value === 2) {
        result = "已确认";
    } else if (value === 3) {
        result = "已取消";
    }
    return result;
};
export const filterFromType = (value) => {
    var result = "";
    if (value === 1) {
        result = "PC";
    } else if (value === 2) {
        result = "WAP";
    } else if (value === 3) {
        result = "Android";
    } else if (value === 4) {
        result = "IOS";
    }
    return result;
};
export const fiflterisSelf = (value) => {
    var result = "";
    if (value === 1) {
        result = "开启";
    } else if (value === 2) {
        result = "关闭";
    }
    return result;
};
export const filterOutStatus = (value) => {
    var result = ''
    if (value === 1) {
        result = "待审核";
    } else if (value === 2) {
        result = "已出款";
    } else if (value === 3) {
        result = "预备出款";
    } else if (value === 4) {
        result = "取消出款";
    } else if (value === 5) {
        result = "拒绝出款";
    } else if (value === 6) {
        result = "满足自动出款";
    }
    return result;
}
export const filterThirdStatus = (value) => {
    var result = ''
    if (value === 1) {
        result = "未提交";
    } else if (value === 2) {
        result = "已下发";
    }
    return result;
}
export const filterLock = (value) => {
    var result = ''
    if (value === 1) {
        result = "锁定";
    } else if (value === 2) {
        result = "未锁定";
    }
    return result;
}
export const filterOnlineincomeStatus = (value) => {
    var result = ''
    if (value === 1) {
        result = "未支付";
    } else if (value === 2) {
        result = "已支付";
    } else if (value === 3) {
        result = "已取消";
    }
    return result;
}
export const restuleStatus = (value) => {
    var result = ''
    if (value === 1) {
        result = "登录成功";
    } else if (value === 2) {
        result = "登录失败";
    } else if (value === 3) {
        result = "退出登录";
    }
    else if (value === 4) {
        result = "掉线";
    }
    else if (value === 5) {
        result = "踢线";
    }
    return result;
}
export const logTypeRole = (value) => {
    var result = ''
    if (value === 1) {
        result = "开户人";
    } else if (value === 2) {
        result = "股东";
    } else if (value === 3) {
        result = "总代";
    }
    else if (value === 4) {
        result = "代理";
    }
    else if (value === 5) {
        result = "子账号";
    }
    return result;
}
export const logTypeCtrl = (value) => {
    var result = ''
    if (value === 1) {
        result = "重要操作";
    } else if (value === 2) {
        result = "普通操作";
    }
    return result;
}

