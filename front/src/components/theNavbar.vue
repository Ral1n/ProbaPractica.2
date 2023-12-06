<template>
    <nav class="h-[34px] md:h-[81px] umbra flex items-center bg-white z-10">
        <div class="md:py-[19px] px-[25px]">
            <div class="">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-[36px] md:w-[94px]" viewBox="0 0 94 45" fill="none">
                    <path
                        d="M0 43.87V21.17H8.86C10.6036 21.1259 12.3372 21.4461 13.95 22.11C15.2814 22.6754 16.4133 23.6261 17.2 24.84C17.9404 26.1304 18.33 27.5922 18.33 29.08C18.33 30.5677 17.9404 32.0295 17.2 33.32C16.4078 34.529 15.2776 35.4784 13.95 36.05C12.3408 36.7272 10.6051 37.0512 8.86 37H1.79L3.25 35.48V43.88L0 43.87ZM3.25 35.79L1.79 34.17H8.79C10.4703 34.2909 12.14 33.8204 13.51 32.84C14.0182 32.3545 14.4228 31.7709 14.6991 31.1247C14.9755 30.4784 15.118 29.7829 15.118 29.08C15.118 28.3771 14.9755 27.6815 14.6991 27.0353C14.4228 26.389 14.0182 25.8055 13.51 25.32C12.1413 24.336 10.4715 23.862 8.79 23.98H1.79L3.25 22.36V35.79Z"
                        fill="#FF1F66" />
                    <path
                        d="M28.58 44.07C26.9769 44.0955 25.3949 43.7026 23.99 42.93C22.6639 42.1934 21.5616 41.1119 20.8 39.8C20.008 38.4234 19.6036 36.858 19.63 35.27C19.5994 33.6847 20.0041 32.1213 20.8 30.75C21.5674 29.4537 22.6646 28.384 23.98 27.65C25.3876 26.8761 26.9741 26.4864 28.58 26.52C30.1796 26.4929 31.7596 26.875 33.17 27.63C34.4981 28.3469 35.5995 29.4206 36.35 30.73C37.1045 32.1261 37.4995 33.6881 37.4995 35.275C37.4995 36.8619 37.1045 38.4239 36.35 39.82C35.5968 41.1298 34.4963 42.2061 33.17 42.93C31.7657 43.7039 30.1833 44.0969 28.58 44.07ZM28.58 41.34C29.6275 41.3595 30.6618 41.1043 31.58 40.6C32.4449 40.0967 33.1489 39.358 33.61 38.47C34.1267 37.4839 34.3848 36.3829 34.36 35.27C34.3884 34.1599 34.1301 33.0612 33.61 32.08C33.1365 31.2013 32.4218 30.4762 31.55 29.99C30.641 29.4981 29.6237 29.2405 28.59 29.2405C27.5564 29.2405 26.5391 29.4981 25.63 29.99C24.7621 30.4846 24.0463 31.2074 23.56 32.08C23.0208 33.055 22.7515 34.1562 22.78 35.27C22.755 36.3866 23.024 37.4901 23.56 38.47C24.0421 39.3561 24.7581 40.0928 25.63 40.6C26.5318 41.1002 27.5489 41.3554 28.58 41.34Z"
                        fill="#FF1F66" />
                    <path d="M40.46 43.87V19.8H43.57V43.87H40.46Z" fill="#FF1F66" />
                    <path d="M48.15 43.87V19.8H51.26V43.87H48.15Z" fill="#FF1F66" />
                    <path d="M24.55 35.17L27.19 38.17L32.84 32.42" stroke="#FF1F66" stroke-miterlimit="10" />
                    <path opacity="0.4"
                        d="M70.83 32.52C79.2579 32.52 86.09 25.6879 86.09 17.26C86.09 8.83213 79.2579 2 70.83 2C62.4021 2 55.57 8.83213 55.57 17.26C55.57 25.6879 62.4021 32.52 70.83 32.52Z"
                        stroke="#04395E" stroke-width="2" stroke-miterlimit="10" />
                    <path d="M55.88 20.76C54.21 12.5 59.31 4.01999 67.57 2.35999" stroke="#04395E" stroke-width="4"
                        stroke-miterlimit="10" stroke-linecap="round" />
                    <path d="M93.54 7.75998H63.39V13.96H93.54V7.75998Z" fill="#04395E" />
                    <path d="M70.55 18.66H63.39V44.06H70.55V18.66Z" fill="#04395E" />
                    <path d="M81.98 13.96H74.82V44.07H81.98V13.96Z" fill="#04395E" />
                </svg>
            </div>
        </div>
        <div class="flex flex-1 justify-end gap-[49px] mr-[33px]">
            <button class="hidden md:block font-inter text-primary text-[10px] md:text-xl font-medium"
                @click="but1.action">{{ but1.name
                }}</button>
            <button class="hidden md:block font-inter text-primary text-[10px] md:text-xl font-medium"
                @click="but2.action">{{ but2.name }}</button>
            <div>
                <button class="visible md:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="10"
                        viewBox="0 0 16 10" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0 0.75C0 0.551088 0.0790176 0.360322 0.21967 0.21967C0.360322 0.0790175 0.551088 0 0.75 0H15.25C15.4489 0 15.6397 0.0790175 15.7803 0.21967C15.921 0.360322 16 0.551088 16 0.75C16 0.948912 15.921 1.13968 15.7803 1.28033C15.6397 1.42098 15.4489 1.5 15.25 1.5H0.75C0.551088 1.5 0.360322 1.42098 0.21967 1.28033C0.0790176 1.13968 0 0.948912 0 0.75ZM0 5C0 4.80109 0.0790176 4.61032 0.21967 4.46967C0.360322 4.32902 0.551088 4.25 0.75 4.25H15.25C15.4489 4.25 15.6397 4.32902 15.7803 4.46967C15.921 4.61032 16 4.80109 16 5C16 5.19891 15.921 5.38968 15.7803 5.53033C15.6397 5.67098 15.4489 5.75 15.25 5.75H0.75C0.551088 5.75 0.360322 5.67098 0.21967 5.53033C0.0790176 5.38968 0 5.19891 0 5ZM0.75 8.5C0.551088 8.5 0.360322 8.57902 0.21967 8.71967C0.0790176 8.86032 0 9.05109 0 9.25C0 9.44891 0.0790176 9.63968 0.21967 9.78033C0.360322 9.92098 0.551088 10 0.75 10H15.25C15.4489 10 15.6397 9.92098 15.7803 9.78033C15.921 9.63968 16 9.44891 16 9.25C16 9.05109 15.921 8.86032 15.7803 8.71967C15.6397 8.57902 15.4489 8.5 15.25 8.5H0.75Z"
                            fill="#04395E" />
                    </svg></button>
                <div
                    class="visible md:hidden absolute right-0 z-10 mt-1 w-56 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1" role="none">
                        <button class="text-gray-700 block px-4 py-2 text-sm" @click="but1.action">{{ but1.name }}</button>
                        <button class="text-gray-700 block px-4 py-2 text-sm" @click="but2.action">{{ but2.name }}</button>
                    </div>
                </div>
            </div>

        </div>
    </nav>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useStore } from '@/store/store.js';
import { storeToRefs } from 'pinia';

const globalState = useStore();
const { loggedIn } = storeToRefs(globalState);

let but1 = ref({ name: 'Login', action: clickLogin });
let but2 = ref({ name: 'Register', action: clickRegister });
watch(loggedIn, () => {
    if (globalState.loggedIn) {
        but1.value.name = 'Create poll';
        but1.value.action = clikCreate;
        but2.value.name = 'Log out';
        but2.value.action = clickLogout;
    } else {
        but1.value.name = 'Login';
        but1.value.action = clickLogin;
        but2.value.name = 'Register';
        but2.value.action = clickRegister;
    }
});

function clickLogin() {
    globalState.openModal();
}
function clickRegister() {
    globalState.open2Modal();
}
function clikCreate() {
    globalState.open3Modal();
}
function clickLogout() {
    globalState.logOut();
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');

.umbra {
    box-shadow: 0px 1px 14px 0px #021B2C;
}

.buton {
    color: #04395E;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
</style>
