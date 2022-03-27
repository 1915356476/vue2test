<template>
  <div class="model" v-if="flag">
    <div class="content" >
      <button @click="closemodel()">x</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    flag:{
      default:false,
      required:true
    }
  },
  methods:{
    closemodel(){
      this.$emit('closemodel')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.model{
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5  );
  position: fixed;
  left: 0;
  top: 0;
}
.content {
  width: 500px;
  height: 300px;
  position: absolute;
  background-color: white;
  left: 50%;
  top: 50%;
  margin-left: -250px;
  margin-top: -150px;
}
button{
  float: right;
}
</style>
