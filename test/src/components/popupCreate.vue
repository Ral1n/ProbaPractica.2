<template>
    <div>
      <!-- Button to trigger the popup -->
      <button @click="togglePopup">Open Popup</button>
  
      <!-- Popup content -->
      <div v-if="showPopup" class="popup">
        <div class="popup-content">
          <!-- Close button for the popup -->
          <span class="close-btn" @click="togglePopup">&times;</span>
  
          <!-- Content inside the popup -->
          <h2>Popup Content</h2>
          <p>This is a popup/modal.</p>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  /* Style the popup container */
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999; /* Ensure the popup is on top of other elements */
  }
  
  /* Style the popup content */
  .popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
  }
  
  /* Style the close button */
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        showPopup: false // Flag to control the visibility of the popup
      };
    },
    methods: {
      togglePopup() {
        this.showPopup = !this.showPopup; // Toggle the value of showPopup
      }
    }
  };
  </script>