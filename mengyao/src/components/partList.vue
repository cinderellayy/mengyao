<template>
  <div class="genus-background">
    <div class="genus-fixed part-fixed">
      <div class="genus-fixed-head">
        <div class="choose-search-head">
          <p> <img src="../../static/img/back.png" class="icon-back" @click="$router.back(-1)">
            <span>药用部位</span></p>
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
import myList from './listComponent'
export default {
  name: 'partList',
  data() {
    return {
      userData: [{
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
        },{
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


      ],
      partTab:'1'
    }
  },
  components: {
    myList
  },
  methods: {
    choosePart:function(param) {
      this.partTab = param;
      console.log(param);
    },
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
