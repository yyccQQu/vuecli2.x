<template>
    <div id="bankCard" @click="gert()">
        bankCard
        {{msg}}
        {{1510933221242 | formatDater}}
        <p>{{(new Date()/1000) | fiterTime}}</p>
        <p>{{1|noticeTypese}}</p>

        <!-- <p>{{3 | filterEnum: 'inout_type'}}</p> -->

        <!-- <div class="fanyte">
            <mt-button @click="changeLangEvent()">{{$t('m.music')}}</mt-button>
		  <mt-button type="primary">{{$t('m.findMusic')}}</mt-button>
		  <mt-button type="success">{{$t('m.myMusic')}}</mt-button>
		  <mt-button type="info">{{$t('m.friend')}}</mt-button>
		  <mt-button type="warning">{{$t('m.musician')}}</mt-button>
		  <mt-button type="danger">{{$t('m.download')}}</mt-button>


        </div> -->
    </div>
</template>

<script>
import * as bankCardService from "services/services.bankCard.js";
// import {filterEnum} from '@/filter.pro'
// import func from './vue-temp/vue-editor-bridge';

export default {
  data() {
    return {
      msg: "niupi",
      lang:'zh-CN',
        flag:''
    };
  },
  mounted() {
    this._make();
    //   this.fetchData()
  },
  methods: {
    _make() {
      console.log($("#bankCard"));
    },
    gert() {
      var postData = {
        a: 1,
        b: 2
      };
      bankCardService.bankList(postData).then(function(res) {
        if (res.status === 200) {
          alert("请求成功");
        } else {
          alert("请求错误");
        }
      });
    },
    changeLangEvent() {
      this.changeL = "";
      this.Notice = "";
      this.Sure = "";
      this.Off = "";

      if (this.lang === "zh-CN") {
        this.changeL = "确定切换语言吗?";
        this.Notice = "提示";
        this.Sure = "确定";
        this.Off = "取消";
        this.tiShi = "取消成功";
      } else {
        this.changeL = "Change Language?";
        this.Notice = "Notice!";
        this.Sure = "Yes";
        this.Off = "Cancel";
        this.tiShi = "Cancel success";
      }
      this.$confirm(`${this.changeL}`, `${this.Notice}`, {
        confirmButtonText: `${this.Sure}`,
        cancelButtonText: `${this.Off}`,
        type: "warning"
      })
        .then(() => {
          if (this.lang === "zh-CN") {
            this.lang = "en-US";
            this.$i18n.locale = this.lang;
          } else {
            this.lang = "zh-CN";
            this.$i18n.locale = this.lang;
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: `${this.tiShi}`
          });
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~static/styles/less/bankCard.less";
</style>
