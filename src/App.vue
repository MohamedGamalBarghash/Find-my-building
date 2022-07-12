<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view @thePath='recieve' :moveToMaps='moveToMaps' :showTheNo='showTheNo' v-model='buildingNo' />
</template>

<script>
import { db } from './firebase'
import { doc, getDoc } from 'firebase/firestore'

export default {
  data () {
    return {
      firebaseData: null,
      buildingNo: '',
      city: '',
      district: '',
      thePath: 'hello'
    }
  },

  methods: {
    async getDaData () {
      const data = await getDoc(doc(db, this.thePath))
      if (data.exists() && data.data()[this.buildingNo] != undefined) {
        this.firebaseData = data.data()[this.buildingNo]
        this.moveToMaps()
      } else {
        alert('No data exists!')
      }
    },
    showTheNo () {
      this.getDaData()
    },
    moveToMaps () {
      const url = 'https://www.google.com/maps/search/?api=1&query=' + this.firebaseData.lat + '%2C' + this.firebaseData.lon
      window.location.href = url
    },
    recieve (value1, value2) {
      this.thePath = value1
      this.buildingNo = value2
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 2.5rem;
}

nav {
  padding: 30px;
  padding-bottom: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
  color: rgb(230,255,226);
  text-decoration-line: underline;
  text-underline-offset: 3px;
}
</style>
