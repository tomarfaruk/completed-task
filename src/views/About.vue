<template>
  <div class="about m-3 text-center">
    <h1>Single Country Details</h1>
    <br>
    <p>Country Name "{{ post.name }}" </p>
    <p>Country phone "{{ post.code }}" </p>
    <p>Country native languages "{{ post.native }}" </p>
    <p>Country emoji "{{ post.emoji }}" </p>
    <p>Country emojiU "{{ post.emojiU }}" </p>
    <p>Country other lang {{ post.languages }} </p>
    <p>Country currency "{{ post.currency }}" </p>
    <p>Country capital "{{ post.capital }}" </p>
    <p>Country location "{{ post.continent }}" </p>
    <p>Country Code "{{ post.phone }}" </p>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'about',
  props: ['code'],

  mounted() {
    this.$store.dispatch('loadCountries')
  },
  computed: {
    post() {
      return this.$store.getters.getSingleCountry(this.code)
    }
  }

}
</script>
