<template>
  <div>
      <h4 @click="update">{{title}}</h4>
      <table >
        <tr >
          <th v-for="(i,index) in rows" :key="index" >
            {{i.name}}
          </th>
        </tr>
        <tr>
          <td v-for="(j,index) in columns" :key="index">
            {{j.name}}
          </td>
        </tr>
      </table>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
name: "son",
  props:{
    rows:{
      type:Array,
     default:[],
      required:false
    },
    columns:{
      type:Array,
      default:[],
      required:false
    }
  },
  data(){
    return{
      // title:this.$store.state.title,
      title:'xpz'
    }
  },
  methods:{
    update() {
      this.$emit('model','dlq')
    }
  }
}
</script>

<style scoped>
td{
  border: 1px solid black;
}
th{
  border: 1px solid black;
}
</style>