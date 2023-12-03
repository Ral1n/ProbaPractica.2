<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from '@headlessui/vue'
import { useStore } from '../store/store.js';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const newPoll = ref({ question: "", type: 1, options: ["", ""] });
const globalState = useStore();
const { modal3Open } = storeToRefs(globalState);

function addOption() {
  newPoll.value.options.push("");
}
</script>

<template>
  <div v-if="modal3Open" class="fixed inset-0 backdrop mt-[81px] z-8 h-[calc(100vh-81px)] w-full">

  </div>
  <TransitionRoot appear :show="modal3Open" as="template">
    <Dialog as="div" @close="globalState.close3Modal()" class="relative z-9">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex items-center justify-center p-4 text-center z-9">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-[1172px] min-h-[500px] transform overflow-hidden text-left align-middle transition-all panel relative">

              <div class="grid grid-cols-1 pt-[43px] px-[85px]">
                <div class="titluPopup text-center">
                  Create Poll
                </div>

                <div class="mt-[62px]">
                  <label class="label mb-[7px]">
                    Title
                    <input v-model="newPoll.question" type="text" placeholder="Type your question here"
                      class="placeholder-white inputText pl-[24px] bg-white/50 w-[1002px] outline-none rounded-[5px] h-[85px] border-0 border-pink-600 border-t-[9px]">
                  </label>
                </div>

                <div class="mt-[68px]">
                  <div class="label mb-[32px]">
                    Voting type
                  </div>
                  <div>
                    <input type="radio" @click="newPoll.type = 1" id="sc" name="vt" checked
                      class="cursor-pointer h-[21px] w-[21px] appearance-none rounded-full bg-transparent ring-[3px] ring-offset-[3px] ring-offset-[#04395E] ring-white checked:bg-white">
                    <label class="label ml-[15px] cursor-pointer" for="sc">Single choice</label>
                  </div>

                  <div class="mt-[22px]">
                    <input type="radio" @click="newPoll.type = 2" id="mc" name="vt"
                      class="cursor-pointer h-[21px] w-[21px] appearance-none rounded-full bg-transparent ring-[3px] ring-offset-[3px] ring-offset-[#04395E] ring-white checked:bg-white">
                    <label class="label ml-[15px] cursor-pointer" for="mc">Multiple choice</label>
                  </div>
                </div>

                <div class="mt-[68px]">
                  <div class="label mb-[7px]">
                    Answer Options
                  </div>
                  <div class="mb-[25px] relative" v-for="(option, index) in newPoll.options" :key="index">
                    <input v-model="newPoll.options[index]" type="text" :placeholder="'Option ' + (index + 1)"
                      class="placeholder-white inputText pl-[24px] bg-white/50 w-[1002px] outline-none rounded-[5px] h-[85px] border-0 border-pink-600 border-t-[9px]">
                    <div v-if="newPoll.options.length > 2" @click="newPoll.options.splice(index, 1)"
                      class="absolute top-[30px] right-[22px] w-[26px] h-[27px] cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                        <path
                          d="M0.632336 0.715033C1.03775 0.295443 1.5873 0.0597642 2.16028 0.0597642C2.73325 0.0597642 3.28281 0.295443 3.68822 0.715033L12.9712 10.3346L22.2541 0.715033C22.5184 0.420097 22.8546 0.204488 23.2272 0.0909229C23.5998 -0.0226426 23.995 -0.02996 24.3713 0.0697409C24.7476 0.169442 25.091 0.37247 25.3653 0.657435C25.6396 0.942399 25.8346 1.29875 25.9298 1.68894C26.0262 2.07844 26.0194 2.48763 25.9104 2.8735C25.8013 3.25937 25.5939 3.60766 25.31 3.88173L16.027 13.5013L25.31 23.1209C25.5946 23.3948 25.8027 23.7431 25.9123 24.1293C26.0219 24.5154 26.0289 24.925 25.9327 25.3149C25.8365 25.7049 25.6406 26.0607 25.3656 26.3449C25.0906 26.6291 24.7467 26.8312 24.3702 26.9299C23.9943 27.0298 23.5994 27.0228 23.2271 26.9098C22.8547 26.7967 22.5186 26.5818 22.2541 26.2876L12.9712 16.668L3.68822 26.2876C3.27809 26.6832 2.73595 26.8986 2.17576 26.8886C1.61556 26.8785 1.08093 26.6439 0.684228 26.2339C0.28857 25.8228 0.0621017 25.2688 0.0524246 24.6882C0.0427475 24.1077 0.250615 23.5459 0.632336 23.1209L9.91529 13.5013L0.632336 3.88173C0.227431 3.46162 0 2.89214 0 2.29838C0 1.70462 0.227431 1.13514 0.632336 0.715033Z"
                          fill="#04395E" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="mt-[3px]">
                  <button
                    class="w-[223px] h-[68px] rounded-[5px] bg-[#7f9aad] text-white flex flex-row place-items-center pl-[25px]"
                    @click="addOption">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                      <path
                        d="M19.5 12H12V19.5C12 19.8978 11.842 20.2794 11.5607 20.5607C11.2794 20.842 10.8978 21 10.5 21C10.1022 21 9.72064 20.842 9.43934 20.5607C9.15804 20.2794 9 19.8978 9 19.5V12H1.5C1.10218 12 0.720645 11.842 0.43934 11.5607C0.158036 11.2794 0 10.8978 0 10.5C0 10.1022 0.158036 9.72065 0.43934 9.43934C0.720645 9.15804 1.10218 9 1.5 9H9V1.5C9 1.10218 9.15804 0.720644 9.43934 0.439339C9.72064 0.158035 10.1022 0 10.5 0C10.8978 0 11.2794 0.158035 11.5607 0.439339C11.842 0.720644 12 1.10218 12 1.5V9H19.5C19.8978 9 20.2794 9.15804 20.5607 9.43934C20.842 9.72065 21 10.1022 21 10.5C21 10.8978 20.842 11.2794 20.5607 11.5607C20.2794 11.842 19.8978 12 19.5 12Z"
                        fill="#F8F8F8" />
                    </svg>
                    <span class="ml-[6px] addText">
                      Add option
                    </span>
                  </button>
                </div>

                <div class="mb-[43px] place-self-center">
                  <button class="flex w-[225px] h-[50px] mt-[48px] bg-white rounded-[5px] items-center justify-center"
                    @click="console.log(newPoll); newPoll = { question: '', type: 1, options: ['', ''] }">
                    <span class="loginText">
                      Create Poll
                    </span>
                  </button>
                </div>

              </div>

              <div class="absolute right-[11px] top-[11px] h-[42px] w-[42px] cursor-pointer"
                @click="globalState.close3Modal()">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                  <path
                    d="M34.125 5.25H7.875C7.17881 5.25 6.51113 5.52656 6.01884 6.01884C5.52656 6.51113 5.25 7.17881 5.25 7.875V34.125C5.25 34.8212 5.52656 35.4889 6.01884 35.9812C6.51113 36.4734 7.17881 36.75 7.875 36.75H34.125C34.8212 36.75 35.4889 36.4734 35.9812 35.9812C36.4734 35.4889 36.75 34.8212 36.75 34.125V7.875C36.75 7.17881 36.4734 6.51113 35.9812 6.01884C35.4889 5.52656 34.8212 5.25 34.125 5.25ZM29.8036 27.9464C29.9255 28.0683 30.0223 28.2131 30.0883 28.3724C30.1543 28.5318 30.1882 28.7025 30.1882 28.875C30.1882 29.0475 30.1543 29.2182 30.0883 29.3776C30.0223 29.5369 29.9255 29.6817 29.8036 29.8036C29.6817 29.9255 29.5369 30.0223 29.3776 30.0883C29.2182 30.1543 29.0475 30.1882 28.875 30.1882C28.7025 30.1882 28.5318 30.1543 28.3724 30.0883C28.2131 30.0223 28.0683 29.9255 27.9464 29.8036L21 22.8555L14.0536 29.8036C13.8073 30.0499 13.4733 30.1882 13.125 30.1882C12.7767 30.1882 12.4427 30.0499 12.1964 29.8036C11.9501 29.5573 11.8118 29.2233 11.8118 28.875C11.8118 28.5267 11.9501 28.1927 12.1964 27.9464L19.1445 21L12.1964 14.0536C11.9501 13.8073 11.8118 13.4733 11.8118 13.125C11.8118 12.7767 11.9501 12.4427 12.1964 12.1964C12.4427 11.9501 12.7767 11.8118 13.125 11.8118C13.4733 11.8118 13.8073 11.9501 14.0536 12.1964L21 19.1445L27.9464 12.1964C28.1927 11.9501 28.5267 11.8118 28.875 11.8118C29.2233 11.8118 29.5573 11.9501 29.8036 12.1964C30.0499 12.4427 30.1882 12.7767 30.1882 13.125C30.1882 13.4733 30.0499 13.8073 29.8036 14.0536L22.8555 21L29.8036 27.9464Z"
                    fill="#F8F8F8" />
                </svg>

              </div>

            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.panel {
  border-radius: 29px;
  background: #04395E;
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.69);
}

.backdrop {
  background: rgba(217, 217, 217, 0.72);
}

.titluPopup {
  color: #FFF;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.loginText {
  color: #04395E;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.inputText {
  color: #FFF;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.label {
  color: #FFF;
  font-family: Inter;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.addText {
  color: #FFF;
  font-family: Inter;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
