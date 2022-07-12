<template>
  <div class='flex flex-col text-4xl justify-center w-full mb-24'>
    <div class='m-auto border-gray-200 border-2 p-10 bg-gray-50 shadow-2xl max-w-3xl'>
      <div class='flex flex-col m-auto text-center'>
        <div class='underline underline-offset-8 my-2.5 mb-10 justify-center text-center font-bold text-5xl'>
          <p class='font-mono'>Find my building</p>
        </div>
        <div class='my-2.5 text-3xl m-auto text-justify'>
          <p>
            is a web app to help people find buildings that are not numbered on Google Maps, so they don't have to ask randoes on the street for directions to where a building with a specific number is.<br>
            Anyone can add the locations of buildings in multiple cities to help others locate it through the web app on Google Maps.<br><br>
            You can contact me on: <strong class='text-blue-700'>Cinosmoh@gmail.com</strong><br>
            You can check out my personal website <a class='underline text-blue-700' href='https://mohamedbarghush.000webhostapp.com'>here</a>
          </p>
        </div>
        <small class='text-base mt-10'>This app was created by <strong>Mohamed Barghush</strong></small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  created() {
    document.body.classList.add('h-screen')
    document.body.classList.remove('h-full')
  },
}
</script>
