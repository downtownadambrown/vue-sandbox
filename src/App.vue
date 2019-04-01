<template>
  <div id="app">
    <img
      alt="Shepard logo"
      src="./assets/shepard-logo.png"
    >
    <Shepard />
  </div>
</template>

<script>
import Shepard from './components/Shepard.vue';

export default {
  name: 'App',
  components: {
    Shepard,
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
