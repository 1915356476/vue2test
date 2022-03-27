<template>
  <div class="xpz">
    <h2>{{ title }}</h2>
    <child1
        :foo="foo"
        :boo="boo"
        @run="run()"></child1>
  </div>
</template>

<script scoped>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {HomeApi} from "@/request/api";
import son from "@/components/son";
import mapState from "@/store/index"
import Child1 from "@/components/child1";
export default {
  name: 'HomeView',
  components: {
    Child1,
    HelloWorld,son
  },
  provide:{
    for:"123123"
  },
  data() {
    return {
      foo: "Javascript",
      boo: "Html",

      title:'https://www.cnblogs.com/barryzhang/p/10566515.html'
    };
  },
  methods:{
    run() {
      console.log('xpz')
    }
  },
  mounted() {
    console.log(this.ref,'2')
  }
}
</script>
<style>
.xpz {
  background-color: red;
  width:100%;
  height:100vh;
}
/** {*/
/*  margin: 0;*/
/*  padding: 0;*/
/*}*/

* {
  margin: 0;
  padding: 0;
}

.all{
  width: 400px;
  height: 400px;
  display: flex;
  border: 1px solid black;
  align-content: space-evenly;
  flex-wrap: wrap;
}
.body{
  display: flex;
  width: 100%;
  background-color: pink;
  justify-content: space-evenly;
}
.item{
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
</style>