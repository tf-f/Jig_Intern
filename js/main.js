//import Vue from 'vue';
//import axios from 'axios';
//require('es6-promise').polyfill();
/* Json Reader 参考サイトなど link
https://jp.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
https://qiita.com/knaito-531/items/50935571e908a6425514
https://ginpen.com/2016/12/11/how-to-get-values-from-form-with-vue/
https://jp.vuejs.org/v2/guide/syntax.html
https://qiita.com/MariMurotani/items/10702fbcae2997fcae80
http://program.okitama.org/2017/09/2017-09-04_vue-searching-json/
*/

const URL = ('https://raw.githubusercontent.com/jigjp/intern_exam/master/fukui_event.json');
//const URL_ = ('json/test.json');

var Top = new Vue({
  el:'#top'
});

var mainApp = new Vue({
  el: '#app',
  data:{
    datalists: [], //json 読み込み
    select_value:[
      {text: '全て表示', value: 1000},
      {text: '10件表示', value: 10},
      {text: '20件表示', value: 20},
      {text: '30件表示', value: 30}
    ],

    genre_value:[
      {text: '全てのジャンル',value: 'All'},
      {text: '観光・祭り',   value: '観光・祭り'},
      {text: '食・健康',     value: '食・健康'},
      {text: 'スポーツ',     value: 'スポーツ'},
      {text: '文化・芸術',   value: '文化・芸術'},
      {text: '自然・環境',   value: '自然・環境'},
      {text: '講座・セミナー',value: '講座・セミナー'},
      {text: '音楽',         value: '音楽'},
      {text: '子供',         value: 'こども'},
      {text: 'その他',       value: 'その他'},
    ],


    
    selected_genre: 'All',    
    // more button の動作について
    // 初期行数
    selected_size: 1000,
    count: 5, //moreが押されたとき追加される行数
    step: 0, // more が押された回数

    //search
    keyword: ""
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

  /* computedで検索させるとバグる？ */
  /*
  computed: {
    //キーワード検索
    SearchData: function(){
      var eventDatalist = [];
      for(var i in this.datalists){
        var event = this.datalists[i];
        
        if(event.description.indexOf(this.keyword) !== -1 ||
           event.event_name.indexOf(this.keyword) !== -1 ||
           event.contact.indexOf(this.keyword) !== -1) {
             
             if(this.selected_genre === 'All'){
               eventDatalist.push(event);
              }else{
                if(event.category.indexOf(this.selected_genre)){
                  eventDatalist.push(event);
                }
              }
            }
          }
          
          return eventDatalist;
          
        }
      },
       */

  methods: {
    //データを指定件数まで表示したか:w
    isEnd: function(){
      return this.end > this.datalists.length;
    },
    //追加で表示
    seemore: function(){
      this.step++;
    },
    //表示件数が変わった際カウントのリセット
    reset_count: function(){
      this.step = 0;
    },
    //検索 絞り込み機能:w
    SearchData: function(){
      var eventDatalist = [];
      for(var i in this.datalists){
        var event = this.datalists[i];
        //キーワード検索
        if(event.description.indexOf(this.keyword) !== -1 ||
           event.event_name.indexOf(this.keyword) !== -1 ||
           event.contact.indexOf(this.keyword) !== -1) {
          //ジャンル 絞り込み
          if(this.selected_genre === 'All'){
              eventDatalist.push(event);
          }else{
            if(event.category.indexOf(this.selected_genre) !== -1){
              eventDatalist.push(event);
            }
          }
        }
      }
      return eventDatalist;
    }
    
  },
});

//Debug
Vue.config.devtools = true
