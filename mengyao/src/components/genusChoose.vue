<template>
  <div class="genus-background">
    <div class="genus-fixed">
      <div class="genus-fixed-head">
        <div class="choose-search-head">
          <p> <img src="../../static/img/back.png" class="icon-back" @click="$router.back(-1)">
            <span>选择科属</span></p>
        </div>
      </div>
       <div class="choosed-genus"><span>当前选中：白芷</span><span class="choose-genus-change" @click="$router.back(-1)">更改</span></div>
    </div>
   
    <div class="choose-genus">
      <my-list :user-data="userData"></my-list> <!-- 传递数据 -->
    </div>
 </div>
</template>
<script>
import myList from './listComponent'
export default {
  name: 'genusChoose',
  data() {
    return {
      userData: [
        {
          "index": "B",
          "users": [
            { "name": "bce", "tel": "13333333331" },
            { "name": "b2", "tel": "13333333332" },
            { "name": "b3", "tel": "13333333333" },
              { "name": "bfgjojh1", "tel": "13333333331" },
            { "name": "b2", "tel": "13333333332" },
            { "name": "b3", "tel": "13333333333" },
          ]
        },
        {
          "index": "C",
          "users": [
            { "name": "c1", "tel": "13333333331" },
            { "name": "c2", "tel": "13333333332" },
            { "name": "c3", "tel": "13333333333" },
          ]
        },
        {
          "index": "D",
          "users": [
            { "name": "d1", "tel": "13333333331" },
            { "name": "d2", "tel": "13333333332" },
            { "name": "d3", "tel": "13333333333" },
          ]
        },
        {
          "index": "E",
          "users": [
            { "name": "e1", "tel": "13333333331" },
            { "name": "e2", "tel": "13333333332" },
            { "name": "e3", "tel": "13333333333" },
          ]
        },
        {
          "index": "F",
          "users": [
            { "name": "f1", "tel": "13333333331" },
            { "name": "f2", "tel": "13333333332" },
            { "name": "f3", "tel": "13333333333" },
          ]
        },
        {
          "index": "G",
          "users": [
            { "name": "G1", "tel": "13333333331" },
            { "name": "G2", "tel": "13333333332" },
            { "name": "G3", "tel": "13333333333" },
          ]
        },
        {
          "index": "H",
          "users": [
            { "name": "h1", "tel": "13333333331" },
            { "name": "h2", "tel": "13333333332" },
            { "name": "h3", "tel": "13333333333" },
          ]
        },
       

      ]
    }
  },
 components: {
    myList
  },
  methods: {
    backBtn: function() {
      alert("123")
    },
    homeBtn: function() {
      alert("123")
    },
    confirmBtn: function() {
      alert("a");
    },
    cancelBtn: function() {
      console.log(this);
      this.$children[2].$el.style.display = "none"; //此处需要从外级找到
    }
  },
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/style.css";



</style>
