<template>
  <div class="genus-background">
    <div class="genus-fixed part-fixed">
      <div class="genus-fixed-head">
        <div class="choose-search-head">
          <p> <img src="../../static/img/back.png" class="icon-back" @click="$router.back(-1)">
            <span v-show="isMeng==''">药用部位</span>
            <span v-show="isMeng=='meng'" class="meng-language">ᠡᠮ ᠳᠦ ᠬᠡᠷᠡᠭᠯᠡᠬᠦ ᠬᠡᠰᠡᠭ  </span>
          </p>
        </div>
      </div>
      <div class="choosed-genus">
        <img src="../../static/img/a.png" class="choose-part-icon" :class="{'bg-blue':partTab=='1'}" @click="choosePart('1')">
        <img src="../../static/img/b.png" class="choose-part-icon" :class="{'bg-blue':partTab=='2'}" @click="choosePart('2')">
        <img src="../../static/img/c.png" class="choose-part-icon" :class="{'bg-blue':partTab=='3'}" @click="choosePart('3')">
        <img src="../../static/img/d.png" class="choose-part-icon" :class="{'bg-blue':partTab=='4'}" @click="choosePart('4')">
        <img src="../../static/img/e.png" class="choose-part-icon" :class="{'bg-blue':partTab=='5'}" @click="choosePart('5')">
        <img src="../../static/img/f.png" class="choose-part-icon" :class="{'bg-blue':partTab=='6'}" @click="choosePart('6')">
       </div>
      </div>
      <div class="part-compoent">
        <my-list :user-data="userData"></my-list> <!-- 传递数据 -->
      </div>
    </div>
</template>
<script>
import axios from 'axios'
import myList from './listComponent'
export default {
  name: 'partList',
  data() {
    return {
      // isMeng: 'meng',
      isMeng: '',
      userData: [],
      partTab: '1'
    }
  },
  components: {
    myList
  },
   mounted(){
    this.getInit();
  },
  methods: {
    choosePart: function(param) {
      this.partTab = param;
      console.log(param);
    },
    getInit:function (argument) {
    var self = this;
      axios.post('/ziyuan.keshu/groupByZimu')
      .then(function (response) {
        // debugger;
        console.log('response',response.data.data);
        self.userData = response.data.data;
      })
      .catch(function (error) {
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
