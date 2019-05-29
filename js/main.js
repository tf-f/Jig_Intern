//import Vue from 'vue';
//import axios from 'axios';
//require('es6-promise').polyfill();
/* Json Reader 参考サイトなど link
https://jp.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
https://qiita.com/knaito-531/items/50935571e908a6425514
https://ginpen.com/2016/12/11/how-to-get-values-from-form-with-vue/
https://jp.vuejs.org/v2/guide/syntax.html
*/

const URL = ('https://raw.githubusercontent.com/jigjp/intern_exam/master/fukui_event.json');
const URL_ = ('json/test.json');

var Top = new Vue({
  el:'#top'
});

var JsonReader = new Vue({
  el: '#app',
  data:{
    datalists: [], //json 読み込み
    select_value:[
      {text: '全て表示', value: 1000},
      {text: '10件表示', value: 10},
      {text: '20件表示', value: 20},
      {text: '30件表示', value: 30}
    ],
    selected_genre: 'All',    
    // more button の動作について
    // 初期行数
    selected_size: 1000,
    count: 5, //moreが押されたとき追加される行数
    step: 0 // more が押された回数
  },
  computed: {
    // debug
    ee:function(){
      return this.selected_size;
    },
    //表示件数を返す
    end:function(){
      return this.selected_size + this.count * this.step;
    }
  },
  mounted() {
    //json 読み込み
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
    //データを指定件数まで表示したか:w
    isEnd: function(){
      return this.end > this.datalists;
    },
    //追加で表示
    seemore: function(){
      this.step++;
    }
    
    
  },
});

//Debug
Vue.config.devtools = true
