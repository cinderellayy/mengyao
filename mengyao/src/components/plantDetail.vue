<template>
  <div class="genus-background">
    <div class="plant-detail-fixed-head ">
      <div class="search-head">
        <p> <img src="../../static/img/back.png" class="icon-back" @click="$router.back(-1)">
          <span v-show="isMeng==''">药用植物详情</span>
          <span v-show="isMeng=='meng'" class="meng-language">ᠡᠮᠲᠦ ᠤᠷᠭᠤᠮᠠᠯ ᠨᠠᠷᠢᠨ ᠪᠠᠶᠢᠳᠠᠯ</span>
        </p>
      </div>
    </div>
    <div class="plant-detail-content">
      <p class="plant-detail-content-title" v-text="isMeng=='meng'?infoData.yaocaiming_meng:infoData.yaocaiming"></p>
      <div class="plant-detail-content-list">
        <p class="plant-detail-listTitle">3D预览</p>
        <div>
          <!-- <img src="../../static/img/demo.jpg" class="plant-detail-img"> -->
          <iframe class="plant-detail-img" :src="infoData.sucai"></iframe>
        </div>
        <div class="plant-detail-content-list bg-light-blue">
          <p class="plant-detail-listTitle">药用植物资料</p>
          <div class="plant-detail-list-introdance">
            <p>学名：<span v-text="isMeng=='meng'?infoData.xueming_meng:infoData.xueming"></span></p>
          </div>
        </div>
        <!-- 药植物介绍 -->
        <div class="plant-detail-content-list bg-light-blue">
          <p class="plant-detail-listTitle" v-text="isMeng=='meng'?infoData.yaoyongzhiwujieshaobiaoti_meng:infoData.yaoyongzhiwujieshaobiaoti"></p>
          <div class="plant-detail-list-introdance">
            <p v-text="isMeng=='meng'?infoData.yaoyongzhiwujieshaoneirong_meng:infoData.yaoyongzhiwujieshaoneirong"></p>
            <img :src="infoData.yaoyongzhiwujieshaoxiangqingtupian_images" class="plant-detail-img">
          </div>
        </div>
        <!-- 药材介绍 -->
        <div class="plant-detail-content-list bg-light-blue">
          <p class="plant-detail-listTitle" v-text="isMeng=='meng'?infoData.yaocaijieshaobiaoti_meng:infoData.yaocaijieshaobiaoti"></p>
          <div class="plant-detail-list-introdance">
            <p v-text="isMeng=='meng'?infoData.yaocaijieshaoneirong_meng:infoData.yaocaijieshaoneirong"></p>
            <img :src="infoData.yaocaijieshaoxiangqingtupian_images" class="plant-detail-img">
          </div>
        </div>
        <!-- 生长环境 -->
        <div class="plant-detail-content-list bg-light-blue">
          <p class="plant-detail-listTitle" v-text="isMeng=='meng'?infoData.shengzhanghuanjingbiaoti_meng:infoData.shengzhanghuanjingbiaoti"></p>
          <div class="plant-detail-list-introdance">
            <p v-text="isMeng=='meng'?infoData.shengzhanghuanjingneirong_meng:infoData.shengzhanghuanjingneirong"></p>
            <img :src="infoData.shengzhanghuanjingxiangqingtupian_images" class="plant-detail-img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'plantDetail',
  data() {
    return {
      // isMeng: 'meng',
      isMeng: '',
      infoData: '',
      postId: this.$route.query.id
    }
  },

  mounted() {
    this.getInit();
  },
  methods: {
    getInit: function(argument) {
      var self = this;
      axios.post('/ziyuan.yaocai/detail' + '?id=' + this.postId)
        .then(function(response) {
          if (response.data.msg == '返回成功') {
            self.infoData = response.data.data;
          } else {
            alert(response.data.msg);
          }

        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/style.css";

</style>
