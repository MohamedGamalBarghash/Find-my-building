<template>
  <div class='flex flex-col text-4xl text-center w-full'>
    <form @submit.prevent='theEmits' class='m-auto border-gray-200 border-2 p-10 bg-gray-50 shadow-2xl'>
      <div class='flex flex-col m-auto text-left w-100 pl-10'>
        <div class='underline underline-offset-8 my-2.5 mb-10 justify-center text-center font-bold text-5xl'>
          <p class='font-mono'>Find my Building</p>
        </div>
        <div class='flex-row my-2.5'>
          <div class='w-56 inline-block'>City</div>
          <small>
            <select @change='updateDistricts' class='m-auto border-2 p-2 ml-5' v-model='selectedCity' required>
              <option disabled selected value> -- select an option -- </option>
              <option v-for='city in cities' :key="city">{{ city }}</option>
            </select>
          </small>
        </div>
        <div class='flex-row my-2.5'>
          <div class='w-56 inline-block'>District</div>
          <small>
            <select class='m-auto border-2 p-2 ml-5' v-model='selectedDistrict' required>
              <option disabled selected value> -- select an option -- </option>
              <option v-for='district in districts' :key="district">{{ district }}</option>
            </select>
          </small>
        </div>
        <div class='flex-row my-2.5'>
          <div class='w-56 inline-block'>Building no.</div>
          <small><input class='m-auto border-2 p-2 ml-5' type='number' min='0' v-model='buildingNo' required /></small>
        </div>
      </div>
      <button class='block m-auto mt-10 px-10 py-2.5 rounded-full text-green-900 font-mono to-green-200 from-green-400 bg-gradient-to-tr'>Show on Map</button>
      <router-link class='text-sm underline text-gray-700' to='/new-entry'>Add New Location</router-link>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default {
  name: 'HomeView',
  props: ['showTheNo', 'moveToMaps'],
  data () {
    return {
      buildingNo: 0,
      cities: ['ElShorouk', 'Obour'],
      districts: [],
      selectedCity: '',
      selectedDistrict: ''
    }
  },
  methods: {
    theEmits () {
      const thePath = this.selectedCity + '/' + this.selectedDistrict
      this.$emit('thePath', thePath, this.buildingNo.toString())
      this.showTheNo()
    },
    async updateDistricts () {
      const collections = await getDocs(collection(db, this.selectedCity))
      collections.forEach((doc) => {
          this.districts.push(doc.id)
      })
    }
  },
  created() {
    document.body.classList.add('h-screen')
    document.body.classList.remove('h-full')
  }
}
</script>
