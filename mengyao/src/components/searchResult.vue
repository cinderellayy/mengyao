<template>
  <div class="search-background">
    <div class="search-head">
      <p> <img src="../../static/img/back.png" class="icon-back" @click="$router.back(-1)">
        <span></span>
                <span v-show="isMeng==''">搜索结果</span>
          <span v-show="isMeng=='meng'" class="meng-language">ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ</span>
      </p>
    </div>
    <div class="search-content color-blue">
      <p>当前搜索“an”</p>
      <div class="scroll-height" v-show="searchEn">
        <div class="en-list">
          <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
      </div>
      <div class="scroll-height" v-show="searchCh">
        <div class="search-list-ch">
          <p class="search-list-ch-title">药用植物名称</p>
          <div class="search-list-ch-content" :class="{'meng-search-list':isMeng==true}">
            <span  :class="{'yaocai-tab':isMeng==''}">白芷</span>
            <span  :class="{'yaocai-tab':isMeng==''}">白芷</span>
            <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span  :class="{'yaocai-tab':isMeng==''}">白芷</span>
          </div>
        </div>
        <div class="search-list-ch">
          <p class="search-list-ch-title">药用植物名称</p>
          <div class="search-list-ch-content" :class="{'meng-search-list':isMeng==true}" >
            <span :class="{'yaocai-tab':isMeng==''}">白芷</span>
            <span  :class="{'yaocai-tab':isMeng==''}">白芷</span>
            <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span  :class="{'yaocai-tab':isMeng==''}">白芷</span>

             <span  :class="{'yaocai-tab':isMeng==''}">白芷</span>
            <span  :class="{'yaocai-tab':isMeng==''}">白芷</span>
            <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span  :class="{'yaocai-tab':isMeng==''}">白芷</span>
             <span  :class="{'yaocai-tab':isMeng==''}">白芷</span>
            <span  :class="{'yaocai-tab':isMeng==''}">白芷</span>
            <span  :class="{'yaocai-tab':isMeng==''}">白芷</span> <span  :class="{'yaocai-tab':isMeng==''}">白芷</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'searchResult',
  data() {
    return {
      searchCh: false,
      searchEn: false,
       // isMeng: 'meng',
       isMeng: '',
    }
  },
  mounted() {
    this.getInfo();
  },
  methods: {
   getInfo(){
    if(this.$route.query.search=='a'){
      this.searchCh=false;
      this.searchEn=true;

    }else{
      this.searchEn=false;
       this.searchCh=true;
    }
   }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/style.css";
.meng-search-list {
  overflow-x: auto;
    height: 120px;
    white-space: nowrap;  
    margin: 0 !important;  
    margin-right:30px !important;
    margin-top: -10px !important;
}
.meng-search-list span {
    display: inline-block;
    -moz-writing-mode: vertical-lr;
    -webkit-writing-mode: vertical-lr;
    -o-writing-mode: vertical-lr;
    -ms-writing-mode: tb-lr;
    /* writing-mode: vertical-lr; */
    writing-mode: tb-lr;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -webkit-text-orientation: sideways-right;
    text-orientation: sideways-right;
    font-family: 'MongolianWhite';
    border-right: 1px solid #018DAD;
      height: 96px;
    word-wrap: break-word;
    white-space: initial;
    padding: 0 12px;
    margin: 10px 0px;
        line-height: inherit !important;
        padding-left: 12px !important;
    box-sizing: border-box;
}
</style>
