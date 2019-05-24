//import Vue from 'vue';
//import axios from 'axios';
//require('es6-promise').polyfill();
/* Json Reader
  参考  https://jp.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
        https://bee00break.hatenablog.com/entry/2018/10/05/001041
*/

const URL = ('https://raw.githubusercontent.com/jigjp/intern_exam/master/fukui_event.json');
const URL_ = ('json/test.json');

var JsonReader = new Vue({
  el: '#JsonReader',
  data:{
    datalists: []
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
});
