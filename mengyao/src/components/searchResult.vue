<template>
  <div class="search-background">
    <div class="search-head">
      <p> <img src="../../static/img/back.png" class="icon-back" @click="$router.back(-1)">
        <span>搜索结果</span></p>
    </div>
    <div class="search-content color-blue">
      <p>当前搜索“an”</p>
      <div class="scroll-height" v-show="searchEn">
        <div class="en-list">
          <span class="yaocai-tab">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span class="yaocai-tab">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span class="yaocai-tab">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span class="yaocai-tab">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span class="yaocai-tab">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span class="yaocai-tab">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span class="yaocai-tab">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span class="yaocai-tab">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span class="yaocai-tab">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span class="yaocai-tab">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span class="yaocai-tab">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span class="yaocai-tab">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span class="yaocai-tab">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span class="yaocai-tab">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span class="yaocai-tab">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span class="yaocai-tab">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span class="yaocai-tab">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span class="yaocai-tab">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span class="yaocai-tab">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
        <div class="en-list">
          <span class="yaocai-tab">白芷</span> <span class="bottom-line">学名：<span>htyuyiikighst</span></span>
        </div>
      </div>
      <div class="scroll-height" v-show="searchCh">
        <div class="search-list-ch">
          <p class="search-list-ch-title">药用植物名称</p>
          <div class="search-list-ch-content">
            <span class="yaocai-tab">白芷</span>
            <span class="yaocai-tab">白芷</span>
            <span class="yaocai-tab">白芷</span> <span class="yaocai-tab">白芷</span>
          </div>
        </div>
        <div class="search-list-ch">
          <p class="search-list-ch-title">药用植物名称</p>
          <div class="search-list-ch-content">
            <span class="yaocai-tab">白芷</span>
            <span class="yaocai-tab">白芷</span>
            <span class="yaocai-tab">白芷</span> <span class="yaocai-tab">白芷</span>
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
      searchEn: false
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

</style>
