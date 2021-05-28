import Vue from "vue";
import moment from "moment";

Vue.filter("numberFormatter", function(num) {
  if (!num){
    return "0";
  }
  return Math.abs(num) > 999999 ? Math.sign(num) * ((Math.abs(num)/1000000).toFixed(1)) + 'm' : 
    Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num)/1000).toFixed(1)) + 'k' : 
    Math.sign(num) * Math.abs(num)
});