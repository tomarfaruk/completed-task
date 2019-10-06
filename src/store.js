import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    countries: []
  },
  mutations: {
      SAVE_POST(state, countries){
        state.countries = countries
      }

  },
  actions: {
    loadCountries({ commit }){
      axios.get("https://countriesnode.herokuapp.com/v1/countries")
      .then((data) => {
        commit('SAVE_POST', data.data)
        console.log(data.data)
      })
      .catch(error =>console.log("omarfaruk", error))      
    }

  },
  getters: {
    getCountry(state){
      console.log("get post getter called")
      return state.countries
    },
    getSingleCountry(state){
      return (code) => {
        return state.countries.find((country) => {
          return country.code == code
        })
      }
    }

  }
})
