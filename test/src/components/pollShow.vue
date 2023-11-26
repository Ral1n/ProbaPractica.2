<script setup>
import pollData from '../scripts/data';

const props = defineProps(['intrebare']);
</script>

<template>
    <div class="bg-white w-[571px] min-h-[592px] casuta relative">

        <div class="intrebare px-[32px] pt-[37px]">
            {{intrebare.nume}}
        </div>

        <div class="px-[32px] pt-[15px] pb-[24px]">
            Make a choice:
        </div>

        <div class="pb-[88px]">
            <div class="px-[32px] pb-[37px]" v-for="raspuns in intrebare.raspunsuri" :key="raspuns.id">
            <input name={{intrebare.id}} id={{raspuns.id}} type="radio" class="h-[33px] w-[33px] align-middle">
            <label for={{raspuns.id}} class="optiune pl-[19px] align-middle">
                {{raspuns.nume}}
            </label>
        </div>
        </div>

        <div class="flex justify-between px-[32px] absolute bottom-[47px] w-full">
            <button class="votare">
                <span class="textVotare">
                    Delete
                </span>
            </button>

            <button class="votare">
                <span class="textVotare">
                    Vote
                </span>
            </button>
        </div>

    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;300;500&display=swap');
    .casuta{
        border-radius: 26px;
        background: #FFF;
        box-shadow: 4px 4px 6px 0px #021B2C;
    }

    .intrebare{
        color: #000;
        font-family: Inter;
        font-size: 26px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    .choice{
        color: #000;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }

    .optiune{
        color: #000;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .votare{
        width: 121px;
        height: 41px;
        flex-shrink: 0;
        border-radius: 5px;
        background: #04395E;
    }

    .textVotare{
        color: #FFF;
        font-family: Inter;
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
</style>
