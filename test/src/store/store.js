import { defineStore } from "pinia";

const useStore = defineStore('votareglobal', {
    state:() => ({
            loggedIn: false,
            modalOpen: false,
            modal2Open: false,
            modal3Open: false,
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
        open2Modal(){
            this.modal2Open = true;
        },
        close2Modal(){
            this.modal2Open = false;
        },
        open3Modal(){
            this.modal3Open = true;
        },
        close3Modal(){
            this.modal3Open = false;
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
