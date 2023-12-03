import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("votareglobal", () => {
  const loggedIn = ref(false);
  const modalOpen = ref(false);
  const modal2Open = ref(false);
  const modal3Open = ref(false);

  function openModal() {
    modalOpen.value = true;
  }
  function closeModal() {
    modalOpen.value = false;
  }
  function open2Modal() {
    modal2Open.value = true;
  }
  function close2Modal() {
    modal2Open.value = false;
  }
  function open3Modal() {
    modal3Open.value = true;
  }
  function close3Modal() {
    modal3Open.value = false;
  }
  function logIn() {
    loggedIn.value = true;
  }
  function logOut() {
    loggedIn.value = false;
  }
  return {
    loggedIn,
    modalOpen,
    modal2Open,
    modal3Open,
    openModal,
    open2Modal,
    open3Modal,
    closeModal,
    close2Modal,
    close3Modal,
    logIn,
    logOut,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
