<template>
  <div id="app" class="container">
    <div id="nav" class="bg-dark">
      <router-link to="/">Countries</router-link> 
      <router-link to="/details/BD">Country Details</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
#nav a{
  text-decoration: none;
  padding: 12px 14px;
  display: inline-block;
  font-size: 20px;
}
</style>
