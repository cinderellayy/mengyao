<template>
  <div class="genus-background">
    <div class="genus-list-fixed-head">
      <div class="search-head">
        <p> <img src="../../static/img/back.png" class="icon-back" @click="$router.back(-1)">
          <span v-show="isMeng==''">选择科属</span>
          <span v-show="isMeng=='meng'" class="meng-language">ᠰᠣᠩᠭᠣᠬᠤ ᠢᠵᠠᠭᠤᠷ ᠲᠦᠷᠦᠯ</span>
        </p>
      </div>
    </div>
    <div>
      <my-list :user-data="userData"></my-list> <!-- 传递数据 -->
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import myList from './listComponent'
export default {
  name: 'genusList',
  data() {
    return {
      isMeng: $.cookie('isMeng'),
      userData: []
    }
  },
  components: {
    myList
  },
  mounted() {
    this.getInit();
  },
  methods: {
    getInit: function(argument) {
      var self = this;
      axios.post('/ziyuan.keshu/groupByZimu')
        .then(function(response) {
          // debugger;
          console.log('response', response.data.data);
          self.userData = response.data.data;
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
