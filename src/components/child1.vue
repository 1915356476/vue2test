<template>
  <div>
    <p @click="change()"> {{xpz}}</p>
    <p >foo: {{foo }}</p>
    <child2 v-bind="$attrs" v-on="$listeners" ref="child2"></child2>
  </div>
</template>

<script>
import Child2 from "@/components/child2";
export default {
  name: "child1",
  components: {Child2},
  props: {
    foo: String // foo作为props属性绑定
  },
  data(){
    return{
      xpz:'xpz'
    }
  },
  methods:{
    change() {
      this.$parent.title = this.xpz
    }
  },
  inheritAttrs: false,
  mounted() {
    console.log(this.$listeners,1)
  },
  inject:['for']
}
</script>

<style scoped>

</style>