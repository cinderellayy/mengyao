<template>
  <div class="guide-background">
    <div class="guide-content"> 
      <div class="guide-content-desc">
        <p class="vertical-guide-meng">ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠣᠨᠴᠠᠯᠢᠭ ᠲᠠᠶ ᠮᠣᠩᠭᠣᠯ ᠬᠢᠲᠠᠳ ᠡᠮ ᠳᠦ ᠣᠷᠣᠬᠤ ᠤᠷᠭᠤᠮᠠᠯ 3 D ᠲᠣᠭᠠᠴᠢᠯᠠᠭᠰᠠᠨ ᠵᠢᠷᠤᠭ ᠤᠨ ᠬᠥᠮᠥᠷᠭᠡ </p>
        <p class="vertical-guide-ch">内蒙古特色蒙中药用植物3D数字化图库</p>
      </div>
      <div class="guide-content-tab">
         <p class="vertical-guide-meng" @click="toIndex('meng')"><span>ᠮᠣᠩᠭᠣᠯ ᠬᠡᠯᠡᠨ ᠦ</span></p>
         <p class="vertical-guide-ch" @click="toIndex('')">中文版</p>
      </div>
    </div>
    <div class="guide-bottom">
      <p>版权所有内蒙古自治区中医药研究所</p>
      <p>最新修订日期2018年12月7日</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'guide',
  data() {
    return {
      
    }
  },
  methods: {
    toIndex(param) {
        $.cookie('isMeng',param);
        this.$router.push({
          path: '/index',
         
        })
     

    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/style.css";

</style>
