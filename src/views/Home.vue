<template>
  <div class="home" >
    <h2 class="m-3 text-center">Country list</h2>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Native Language</th>
      <th scope="col">Language</th>
      <th scope="col">Continent</th>
    </tr>
  </thead>
  <tbody>
    <tr 
      v-for="(country, key) in getCountry" 
        :key="key"
    >
      <th scope="row">{{key+1}}</th>
      <td @click.prevent="postDetils(country.code)" class="name">{{country.name}}</td>
      <td>{{country.native}}</td>
      <td>{{country.languages}}</td>
      <td>{{country.continent}}</td>
    </tr> 
  </tbody>
</table>

  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
 
  mounted() {
    this.$store.dispatch('loadCountries')
  },
  methods: {
    postDetils(code) {
      this.$router.push('/details/'+code);
    }
  },

  computed: {
    ...mapGetters(['getCountry'])
  }

}
</script>

<style lang="postcss" scoped>
.name{
  color: blue;
  margin-left: 30px; 
  cursor: pointer;
  text-decoration: underline;
}
</style>