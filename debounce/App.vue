<template>
  <div>
    <button @click="debounce1('debounce1')">click1</button><br/>
    <!-- 共用一个 timerId 导致相互影响 -->
    <button @click="debounce2('debounce2')">click2</button><br/>
    <button @click="debounce3('debounce3')">click3</button><br/>
    <button @click="debounce31(debounceTest1, 1000)('debounce31')">click31</button><br/>

    <button @click="debounce41('debounceTest2, 1000')">click41</button><br/>
  </div>
</template>

<script>
/* eslint-disable */
import { debounce2, debounce3, debounce4 } from './util'
let timerId = null;
export default {
  methods: {
    debounce1(msg) {
      console.log('clicked1');
      const timeout = 1000;
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      timerId = setTimeout(() => {
        console.log(msg);
      }, timeout);
    },

    debounce2(msg) {
      console.log('clicked2');
      debounce2(function () {
        console.log(msg);
      });
    },

    debounce3(msg) {
      debounce3(function() {
        console.log(msg);
      })('msg');
    },

    debounce31: debounce3,
    debounceTest1(msg) {
      console.log(msg);
    },

    // debounce41: debounce4,
    debounceTest2(msg) {
      console.log(msg);
    },
    // debounce41: function() {
    //   debounce4(this.debounceTest2, 1000)('hello')
    // },
    // debounce41: debounce4(function() {
    //   console.log(this)
    // }, 1000),
    // debounce41: debounce4(() => console.log(this), 1000),
    // debounce41: debounce4(() => this.debounceTest2),
    // debounce41(fn, wait) {
    //   console.log(fn, wait)
    //   debounce4(fn, wait)('1212312')
    // },
  },
  created() {
    this.a = debounce4(() => console.log(this))
    // console.log(this.a)
  }
}
</script>
