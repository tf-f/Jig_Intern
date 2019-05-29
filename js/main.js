//import Vue from 'vue';
//import axios from 'axios';
//require('es6-promise').polyfill();
/* Json Reader ??????? link
https://jp.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
https://qiita.com/knaito-531/items/50935571e908a6425514
https://ginpen.com/2016/12/11/how-to-get-values-from-form-with-vue/
*/

const URL = ('https://raw.githubusercontent.com/jigjp/intern_exam/master/fukui_event.json');
const URL_ = ('json/test.json');

var JsonReader = new Vue({
  el: '#app',
  data:{
    datalists: [], //json ????
    selected_size:1000,
    selected_genre: 'All',    
    // more button ???????
    first :1000, // ????
    count: 5, //more??????????????
    step:0 // more ???????
  },
  computed: {
    end:function(){
      return this.first + this.count * this.step;
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
      return this.end > this.datalists.length;
    },
    
    seemore: function(){
      this.step++;
    }
    
    
  },
});

//Debug
Vue.config.devtools = true
