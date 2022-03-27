<template>
  <div class="border">
    <p>childCom3: {{ doo }}</p>
  </div>
</template>

<script>
export default {
name: "child3",
props: {
    doo: String,
    title: String
  },
  inheritAttrs: false,
  mounted() {
    console.log(this.$attrs,3)
  }
}
</script>

<style scoped>

</style>