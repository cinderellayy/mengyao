<template>
  <div id="list">
    <ul class="list_user" ref="listuser" @touchmove="bMove=true">
      <li v-for="item in userData">
        <p>{{item.zimu}}</p>
        <!-- <div class="list-meng"> -->
        <ul  :class="{'list-meng':isMeng=='meng'}" >
           <li v-for="user in item.group_zimu" :class="{'genus-choose-li':isMeng==''}" @click="toChoose(user.id)"  v-text="isMeng=='meng'?user.name_meng:user.name">
            <img src="../../static/img/arrow.png" class="list_arrow" v-show="!nochoose && isMeng==''">
          </li>
        </ul>
        <!-- </div> -->     
      </li>
    </ul>
        <ul class="list_index"  >
             <li @touchstart="setScroll" v-for="item in userIndex">{{item}}</li>
          </ul>
  </div>
</template>
<script>
export default {
  name: 'searchResult',
  props: {
    'user-data': {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data: function() {
    return {
      bMove: false,
      isMeng: $.cookie('isMeng'),
      busVm: '',
      nochoose:this.$route.query.param
    }
  },
  computed: {
    userIndex: function() {
      // console.log(this.userData)
      // console.log(this.filterIndex(this.userData))
      return this.filterIndex(this.userData);
    }
  },
  mounted: function() {

    // this.setlistIndexPos();
  },
  methods: {
    filterIndex: function(data) {
      var result = [];
      for (var i = 0; i < data.length; i++) {
        if (data[i].zimu) {
          result.push(data[i].zimu);
        }
      }
      return result;
    },
    // setlistIndexPos: function() {
    //   //     1、ref 加在普通的元素上，用this.ref.name 获取到的是dom元素
    //   // 　　2、ref 加在子组件上，用this.ref.name 获取到的是组件实例，可以使用组件的所有方法。
    //   // 　　3、如何利用 v-for 和 ref 获取一组数组或者dom 节点
    //   var iH = this.$refs.listIndex.offsetHeight;
    //   this.$refs.listIndex.style.marginTop = -iH / 2 + 'px';
    // },
    showtel: function(ev) {

      if (!this.bMove) {
        this.busVm.$emit("changeEvents", ev)
      } else {
        this.bMove = false;
      }
    },
    setScroll: function(ev) {
      var ap = this.$refs.listuser.getElementsByTagName('p');

      for (var i = 0; i < ap.length; i++) {
       // console.log(ap[i].innerHTML == ev.target.innerHTML,ap[i].innerHTML,ev.target.innerHTML)
        if (ap[i].innerHTML == ev.target.innerHTML) {
          document.body.scrollTop = ap[i].offsetTop;
          document.documentElement.scrollTop = ap[i].offsetTop;
          window.scrollTop = ap[i].offsetTop;
          // console.log(ap[i].offsetTop);
        }
      }
    },
    toChoose: function(param) {
      var data = {
        id: param
      }
      var path = '';
      if(this.nochoose==true) {
       path='/plantDetail';
      }else {
        path='/genusChoose';
      }
      this.$router.push({
        path: path,
        query: data
      })
    }

  },
  
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list_index {
  position: fixed;
  list-style: none;
  padding-right: 10px;
  /* font-size: 20px; */
  /* font-weight: 700; */
  top: 66px;
  padding-top: 19px;
  margin-top: 30px;
  right: 0;
  bottom: 0;
  background-color: #fff;
  padding-left: 8px;
  padding-right: 8px;
  box-shadow: -2px 0 10px #cfe6ec;
}

.list_index li {
  margin-bottom: 8px;
}

#list .list_user p {
  background: #CFE6EC;
  padding-left: 10px;
  height: 30px;
  line-height: 30px;
}
#list .list_user ul {
  margin-right: 30px;
}
#list .list_user ul li {
  padding-left: 18px;
  border-bottom: 1px solid #ECECEC;
  line-height: 38px;
}

#list {
  width: 100%;
  text-align: left;
  float: left;
  position: relative;
  top: 36px;
  overflow: hidden;
  color: #018DAD;
}

.list_arrow {
  float: right;
  margin-right: 40px;
  margin-top: 11px;
  width: 16px;
}

/*选择科属下一级*/
.choose-genus #list {
  top: 79px;
}
.part-compoent #list {
  top: 88px;
}
.choose-genus .list_index {
  top: 106px;
}
.part-compoent .list_index {
  top: 116px;
}
.choose-genus .genus-choose-li,.all-list-component .genus-choose-li,.part-compoent  .genus-choose-li{
     border: 1px solid transparent;
    padding: 4px 10px !important;
    display: inline-block;
    min-width: 40px;
    text-align: center;
    line-height: 20px !important;
    border-radius: 6px;
    -webkit-box-shadow: 0 3px 10px rgba(1, 141, 173, .69);
    box-shadow: 0 3px 10px rgba(1, 141, 173, .69);
    margin-right: 0.36rem;
    overflow: hidden;
    margin-bottom: 14px;
}
.choose-genus .list_user ul,.all-list-component .list_user ul,.part-compoent .list_user ul{
  margin: 16px 0 0 14px;
}
/*部位列表*/

/*蒙古语*/

 .list-meng {
    overflow-x: auto;
    height: 120px;
    white-space: nowrap;  
    margin: 0 !important;  
    margin-right:30px !important;
     }
.list-meng   li {    
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
    border-bottom: 0 !important;
    /* float: left; */
    height: 96px;
    word-wrap: break-word;
    white-space: initial;
    padding: 0 12px;
    margin: 10px 0px;
        line-height: inherit !important;
        padding-left: 12px !important;
    box-sizing: border-box;
}
.list-meng   li:last-child {
  /*border-right:0;*/
}
</style>
