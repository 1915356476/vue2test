<template>
  <div class="border">
    <p>boo: {{ $attrs.boo }}</p>
    <button @click="log()">anniu</button>
    <p>child3:{{this.for}}</p>
  </div>
</template>

<script>
import Child3 from "@/components/child3";
export default {
name: "child2",
  components: {Child3},
  // props: {
  //   boo: String
  // },
  inject:['for'],
  methods: {
    log() {
      this.$emit('run')
    }
  },
  mounted() {
    console.log(this.$attrs,2)
  },
  inheritAttrs: false,
}
</script>

<style scoped>

</style>