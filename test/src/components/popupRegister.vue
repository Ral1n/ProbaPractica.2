<script setup>
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import useStore from '../store/store.js';
import { storeToRefs } from 'pinia';

const globalState = useStore();
const { modal2Open } = storeToRefs(globalState);
</script>

<template>
    <TransitionRoot appear :show="modal2Open" as="template">
    <Dialog as="div" @close="globalState.close2Modal()" class="relative z-9">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0" />   
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex h-[calc(100%-81px)] items-center justify-center p-4 text-center backdrop mt-[81px] z-9"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-[491px] h-[522px] transform overflow-hidden text-left align-middle transition-all panel relative"
            >
              
              <div class="grid grid-cols-1 justify-items-center pt-[43px] px-[64px]">
                <div class="titluPopup">
                  Register
                </div>

                <div>
                  <input type="text" placeholder="Email" class="inputText mt-[43px] pl-[24px] bg-transparent w-[362px] ring-[3px] rounded-[9px] ring-white h-[59px]">
                </div>

                <div>
                  <input type="password" placeholder="Password" class="inputText  mt-[39px] pl-[24px] bg-transparent w-[362px] ring-[3px] rounded-[9px] ring-white h-[59px]">
                </div>

                <div>
                  <input type="password" placeholder="Confirm password" class="inputText mt-[44px] pl-[24px] bg-transparent w-[362px] ring-[3px] rounded-[9px] ring-white h-[59px]">
                </div>
                
                <button @click="globalState.logIn();globalState.close2Modal()" class="flex w-[225px] h-[50px] mt-[48px] bg-white rounded-[5px] items-center justify-center">
                  <span class="loginText">
                    Create account
                  </span>
                </button>
              </div>

              <div class="absolute right-[11px] top-[11px] h-[42px] w-[42px] cursor-pointer" @click="globalState.close2Modal()">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <path d="M34.125 5.25H7.875C7.17881 5.25 6.51113 5.52656 6.01884 6.01884C5.52656 6.51113 5.25 7.17881 5.25 7.875V34.125C5.25 34.8212 5.52656 35.4889 6.01884 35.9812C6.51113 36.4734 7.17881 36.75 7.875 36.75H34.125C34.8212 36.75 35.4889 36.4734 35.9812 35.9812C36.4734 35.4889 36.75 34.8212 36.75 34.125V7.875C36.75 7.17881 36.4734 6.51113 35.9812 6.01884C35.4889 5.52656 34.8212 5.25 34.125 5.25ZM29.8036 27.9464C29.9255 28.0683 30.0223 28.2131 30.0883 28.3724C30.1543 28.5318 30.1882 28.7025 30.1882 28.875C30.1882 29.0475 30.1543 29.2182 30.0883 29.3776C30.0223 29.5369 29.9255 29.6817 29.8036 29.8036C29.6817 29.9255 29.5369 30.0223 29.3776 30.0883C29.2182 30.1543 29.0475 30.1882 28.875 30.1882C28.7025 30.1882 28.5318 30.1543 28.3724 30.0883C28.2131 30.0223 28.0683 29.9255 27.9464 29.8036L21 22.8555L14.0536 29.8036C13.8073 30.0499 13.4733 30.1882 13.125 30.1882C12.7767 30.1882 12.4427 30.0499 12.1964 29.8036C11.9501 29.5573 11.8118 29.2233 11.8118 28.875C11.8118 28.5267 11.9501 28.1927 12.1964 27.9464L19.1445 21L12.1964 14.0536C11.9501 13.8073 11.8118 13.4733 11.8118 13.125C11.8118 12.7767 11.9501 12.4427 12.1964 12.1964C12.4427 11.9501 12.7767 11.8118 13.125 11.8118C13.4733 11.8118 13.8073 11.9501 14.0536 12.1964L21 19.1445L27.9464 12.1964C28.1927 11.9501 28.5267 11.8118 28.875 11.8118C29.2233 11.8118 29.5573 11.9501 29.8036 12.1964C30.0499 12.4427 30.1882 12.7767 30.1882 13.125C30.1882 13.4733 30.0499 13.8073 29.8036 14.0536L22.8555 21L29.8036 27.9464Z" fill="#F8F8F8"/>
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');
    .panel{
      border-radius: 22px;
      background: #04395E;
      box-shadow: 1px 1px 9px 0px #434343;
    }

    .backdrop{
      background: rgba(217, 217, 217, 0.72);
    }

    .titluPopup{
      color: #FFF;
      font-family: Inter;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .loginText{
      color: #04395E;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    .inputText{
      color: #FFF;
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
</style>
