/*! 
 Build based on gin-vue-admin 
 Time : 1691853746000 */
import{f as a}from"./sysDictionary-5b4c5894.js";import{cr as t,r as i}from"./index-0bfeb27f.js";const s=t("dictionary",(()=>{const t=i({}),s=a=>{t.value={...t.value,...a}};return{dictionaryMap:t,setDictionaryMap:s,getDictionary:async i=>{if(t.value[i]&&t.value[i].length)return t.value[i];{const r=await a({type:i});if(0===r.code){const a={},e=[];return r.data.resysDictionary.sysDictionaryDetails&&r.data.resysDictionary.sysDictionaryDetails.forEach((a=>{e.push({label:a.label,value:a.value})})),a[r.data.resysDictionary.type]=e,s(a),t.value[i]}}}}}));export{s as u};
