<template>
  <div class="index-background">
    <div class="index-content">
      <p class="index-title" :class="{'meng-index-title':isMeng=='meng'}">
        <span v-show="isMeng==''">内蒙古特色蒙中药用植物</span>
        <span v-show="isMeng=='meng'">ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠣᠨᠴᠠᠯᠢᠭ ᠲᠠᠶ ᠮᠣᠩᠭᠣᠯ ᠬᠢᠲᠠᠳ ᠡᠮ ᠳᠦ ᠣᠷᠣᠬᠤ ᠤᠷᠭᠤᠮᠠᠯ </span>
      </p>
      <p class="index-title" :class="{'meng-index-title':isMeng=='meng'}">
        <span v-show="isMeng==''">3D数字化图库</span>
        <span v-show="isMeng=='meng'">3 D ᠲᠣᠭᠠᠴᠢᠯᠠᠭᠰᠠᠨ ᠵᠢᠷᠤᠭ ᠤᠨ ᠬᠥᠮᠥᠷᠭᠡ  </span>
      </p>
      <div class="input-position-relative">
        <input type="text" class="search-input" v-model="search" placeholder="药用植物名称/药材名称/花色" v-on:input="showHistory=true">
        <img src="../../static/img/tobig_icon.png" class="icon-big" @click="tosearch()">
      </div>
      </div>
      <div class="search-history" v-show="showHistory">
        <p class="bg-gray"></p>
        <p class="search-history-title">历史记录
          <img src="../../static/img/close.png" class="icon-close" @click="showHistory=false">
        </p>
          <div v-show="isMeng==''">
            <p v-for="data in searchHistory" v-text="data"></p>
          </div>
          <div class="meng-search-history" v-show="isMeng=='meng'">
            <p v-for="data in searchHistory" v-text="data"></p>
          </div>
      </div>
      <div class="index-bottom" v-show="isMeng==''">
        <p class="index-bottom-tab" @click="toGenus"><img src="../../static/img/keshu.png">科属分类</p>
          <p class="index-bottom-tab" @click="toPart"><img src="../../static/img/yaoyong.png">药用部位</p>
            <p class="index-bottom-tab" @click="toAll"><img src="../../static/img/toall.png">查看全部</p>
      </div>
      <div class="meng-index-bottom-parent" v-show="isMeng=='meng'">
        <p class="meng-index-bottom"><img src="../../static/img/keshu.png" @click="toGenus"><span>ᠢᠵᠠᠭᠤᠷ ᠲᠦᠷᠦᠯ ᠠᠩᠭᠢᠯᠠᠯ</span> </p>
        <p class="meng-index-bottom"><img src="../../static/img/yaoyong.png" @click="toPart"><span>ᠡᠮ ᠳᠦ ᠬᠡᠷᠡᠭᠯᠡᠬᠦ ᠬᠡᠰᠡᠭ</span></p>
        <p class="meng-index-bottom"><img src="../../static/img/toall.png" @click="toAll">
          <span>ᠪᠠᠶᠢᠴᠠᠭᠠᠨ ᠦᠵᠡᠵᠦ ᠂ ᠪᠦᠬᠦ</span> </p>
      </div>
      <div class="search-empty" v-show="empty">
        <img src="../../static/img/close_grey.png" class="dialog-close" @click="empty=false">
        <div class="search-empty-content" v-show="isMeng==''">
          <p>非常抱歉您搜索的内容没有结果，</p>
          <p>换个内容搜索一下吧</p>
        </div>
        <div class="search-empty-content meng-index-title" v-show="isMeng=='meng'">
          <p>非常抱歉您搜索的内容没有结果，</p>
          <p>换个内容搜索一下吧</p>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'index',
  data() {
    return {
      showHistory: false,
      empty: false,
      search: '',
      // isMeng: 'meng',
      isMeng: $.cookie('isMeng'),
      searchHistory: []

    }
  },
  mounted() {
    if (!!$.cookie('searchHistory')) {
      this.searchHistory = $.cookie('searchHistory');
      this.searchHistory = this.searchHistory.split(',');
    } else {
      this.searchHistory = [];
    }
  },
  methods: {
    tosearch() {
      if (this.search) {
        var data = {
          search: this.search
        }
        // this.searchHistory = this.searchHistory.split(',');
        this.searchHistory.unshift(this.search);
        this.searchHistory = this.searchHistory.slice(0, 10);
        $.cookie('searchHistory', this.searchHistory);
        console.log('this.searchHistory', this.searchHistory);
        this.$router.push({
          path: '/searchResult',
          query: data
        })
      } else {
        this.empty = true;
      }

    },
    toGenus() {
      this.$router.push({
        path: '/genusList'
      })
    },
    toAll() {
      var data = {
        param: true
      }
      this.$router.push({
        path: '/allList',
        query: data
      })
    },
    toPart() {
      // debugger;
      var data = {
        param: true
      }
      this.$router.push({
        path: '/partList',
        query: data
      })
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/style.css";

</style>
