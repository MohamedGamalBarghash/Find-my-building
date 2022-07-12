<template>
  <div class='flex flex-col text-4xl justify-center w-full mb-24'>
    <form ref='form' @submit.prevent='sendEmail' class='m-auto border-gray-200 border-2 p-10 bg-gray-50 shadow-2xl'>
      <div class='flex flex-col m-auto text-left w-100 pl-10'>
        <div class='underline underline-offset-8 my-2.5 mb-10 justify-center text-center font-bold text-5xl'>
          <p class='font-mono'>Add New Location</p>
        </div>
        <div class='flex-row my-2.5'>
          <div class='w-56 inline-block'>City</div>
          <small>
          <select name='city_name' @change='updateDistricts' class='m-auto border-2 p-2 ml-5' v-model='selectedCity' required>
            <option disabled selected value><small> -- select an option -- </small></option>
            <option v-for='city in cities' :key="city">{{ city }}</option>
          </select>
          </small>
        </div>
        <div class='flex-row my-2.5'>
          <div class='w-56 inline-block'>District</div>
          <small><input name='district_name' placeholder='Enter name of district' class='m-auto border-2 p-2 ml-5' type='text' v-model='district' required/></small>
        </div>
        <div class='flex-row my-2.5'>
          <div class='w-56 inline-block'>Building no.</div>
          <small><input name='building_no' class='m-auto border-2 p-2 ml-5' type='number' min='0' v-model='buildingNo' required /></small>
        </div>
        <div class='flex-row my-2.5'>
          <div class='w-56 inline-block'>Location link</div>
          <small><input name='location_link' placeholder='Paste the link from Google Maps here' class='m-auto border-2 p-2 ml-5' type='text' v-model='location' required /></small>
        </div>
        <div class='underline underline-offset-8 font-mono font-bold my-10 text-center'>Contact info:</div>
        <div class='flex-row my-2.5'>
          <div class='w-56 inline-block'>Name</div>
          <small><input name='to_name' placeholder='Enter your name' class='m-auto border-2 p-2 ml-5' type='text' v-model='name' required /></small>
        </div>
        <div class='flex-row my-2.5'>
          <div class='w-56 inline-block'>Tel.</div>
          <small><input name='telephone' placeholder='Enter your phone number' class='m-auto border-2 p-2 ml-5' type='text' v-model='phone' required /></small>
        </div>
        <div class='flex-row my-2.5'>
          <div class='w-56 inline-block'>Email</div>
          <small><input name='reciever' placeholder='Enter your email' class='m-auto border-2 p-2 ml-5' type='email' v-model='email' required /></small>
        </div>
      </div>
      <button class='block m-auto mt-10 px-10 py-2.5 rounded-full text-green-900 font-mono to-green-200 from-green-400 bg-gradient-to-tr'>Send Request</button>
      <router-link class='text-sm underline text-gray-700' to='/'>Back To Finding</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewEntry',
  data () {
    return {
      buildingNo: 0,
      district: '',
      cities: ['ElShorouk', 'Obour'],
      selectedCity: '',
      name: '',
      phone: '',
      email: '',
      location: ''
    }
  },
  created() {
    document.body.classList.remove('h-screen')
    document.body.classList.add('h-full')
  },
  methods: {
    sendEmail () {
      emailjs.sendForm('service_un35xbg', 'template_0dyhuhk', this.$refs.form, '0KcaZXeDHArYLIR_d')
      .then((result) => {
        alert('Your submission was sent successfully 🥳, I will evaluate the data and add it to my database soon! 🙏')
      }, (error) => {
        alert('An error happened! 😕')
      })
      emailjs.sendForm('service_un35xbg', 'template_5xcw79r', this.$refs.form, '0KcaZXeDHArYLIR_d')
    }
  }
}
</script>