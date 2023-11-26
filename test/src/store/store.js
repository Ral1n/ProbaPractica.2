import { defineStore } from "pinia";

const useStore = defineStore('votareglobal', {
    state:() => ({
            loggedIn: false,
            modalOpen: false
    }),
    actions: {
        openModal(){
            console.log('ceva');
            this.modalOpen = true;
        },
        closeModal(){
            console.log('altceva');
            this.modalOpen = false;
        },
        logIn(){
            this.loggedIn = true;
        },
        logOut(){
            this.loggedIn = false;
        }
    }
})

export default useStore;
