<script setup>
import theNavbar from './components/theNavbar.vue';
import theFooter from './components/theFooter.vue';
import pollShow from './components/pollShow.vue';
import pollData from './scripts/data.js';
</script>

<template>
    
<theNavbar />
 <div class="flex flex-row">
    <div class="basis-1/2">
        <p class="scrisTestoasa px-[103px] py-[96px]">Opiniile sunt mai importante ca niciodată. Platformele de sondaje permit organizatorilor să culeagă feedback direct de la audiența lor și să înțeleagă mai bine nevoile și dorințele acesteia.</p>
    </div>
    <div class="basis-1/2">
        <img class="w-full" src="testoasa.png" >
    </div>

 </div>

<div class="flex justify-evenly flex-wrap gap-y-[94px] pb-[250px]">
    <div v-for="intrebare in pollData" :key="intrebare.id">
        <pollShow :intrebare=intrebare />
    </div>
 </div>

<theFooter />

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');

.scrisTestoasa{
    font-family: Inter;
    font-weight: 600;
    font-size: 36px;
    letter-spacing: -0.5%;
    color: white;
}
</style>