//import Vue from 'vue';
//import axios from 'axios';
//require('es6-promise').polyfill();
/* Json Reader 参考サイトなど link
https://jp.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
https://qiita.com/knaito-531/items/50935571e908a6425514
https://ginpen.com/2016/12/11/how-to-get-values-from-form-with-vue/
*/

const URL = ('https://raw.githubusercontent.com/jigjp/intern_exam/master/fukui_event.json');
const URL_ = ('json/test.json');

var JsonReader = new Vue({
  el: '#app',
  data:{
    datalists: [], //json 読み込み
    select_value:[
      {text: '全て表示' ,value: 1000},
      {text: '10件表示', value: 10},
      {text: '20件表示', value: 20},
      {text: '30件表示', value: 30},
      {text: '40件表示', value: 40}
    ],
    selected_genre: 'All',    
    // more button の動作について
    // 初期行数
    selected_size:10,
    count: 5, //moreが押されたとき追加される行数
    step:0 // more が押された回数
  },
  computed: {

    ee:function(){
      return this.selected_size;
    },
    end:function(){
      return this.selected_size + this.count * this.step;
    }
  },
  mounted() {

    axios.get(URL)
    //axios.get("https://raw.githubusercontent.com/jigjp/intern_exam/master/fukui_event.json")
    .then(response => {
      this.datalists = response.data;
    })
    .catch(error => {
       
      console.log(error);
    });

  },

  methods: {
    
    isEnd: function(){
      return this.end > this.datalists;
    },
    
    seemore: function(){
      this.step++;
    }
    
    
  },
});

//Debug
Vue.config.devtools = true
