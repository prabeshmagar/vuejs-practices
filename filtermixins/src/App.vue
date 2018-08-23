<template>
  <div id="app">
    <!-- <p> {{ text | toUppercase |to-lowercase }}</p> -->
    <h1>{{ text | toUppercase }}</h1>
    <hr>
    <button @click="fruits.push('berries')">Add New Item</button>
    <input v-model="filterText">
    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit.id">{{ fruit }}</li>
    </ul>

    <hr>
    <app-list></app-list>
  </div>
</template>

<script>
import List from './components/List.vue';
import { fruitMixin } from './fruitMixin';

export default {
  name: 'app',
 mixins: [fruitMixin],
 data() {
   return {
     text: 'Hello there'
   }
 },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  components: {
    appList: List
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
