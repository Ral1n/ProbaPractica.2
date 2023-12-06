<script setup>
import theNavbar from '@/components/theNavbar.vue';
import theFooter from '@/components/theFooter.vue';
import pollShow from '@/components/pollShow.vue';
import popupLogin from '@/components/popupLogin.vue';
import popupRegister from '@/components/popupRegister.vue';
import createPoll from '@/components/createPoll.vue';
import { ref } from 'vue';
import axios from 'axios';

const pollData = ref([]);

async function getPolls() {
    axios.get('http://localhost/api/polls').then((raspuns) => {
        pollData.value = raspuns.data;
    })
}

getPolls();

</script>

<template>
    <theNavbar />
    <div class="flex flex-row">
        <div class="basis-1/2">
            <p class="font-inter text-[10px] md:text-[36px] font-medium text-white px-[103px] py-[96px] md:py-[102px]">
                Opiniile sunt mai importante ca niciodată. Platformele de sondaje
                permit organizatorilor să culeagă feedback direct de la audiența lor și să înțeleagă mai bine nevoile și
                dorințele acesteia.</p>
        </div>
        <div class="basis-1/2">
            <img class="w-[152px] md:w-full py-[92px]" src="/testoasa.png">
        </div>

    </div>

    <div class="flex flex-row justify-evenly flex-wrap gap-y-[94px] pb-[250px] ">
        <div class="w-11/12 md:w-5/12" v-for="intrebare in pollData" :key="intrebare.id">
            <pollShow :intrebare=intrebare />
        </div>
    </div>

    <popupLogin />

    <popupRegister />

    <createPoll />

    <theFooter />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');

.scrisTestoasa {
    font-family: Inter;
    font-weight: 600;
    font-size: 36px;
    letter-spacing: -0.5%;
    color: white;
}
</style>