// ******************** sleact modal and close btn and modalOverlay **********
const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");

// *************** addOverlay **************
modalBtn.addEventListener("click", ()=>{
    modalOverlay.classList.add("show")
})

// *************** removeOverlay **************

closeBtn.addEventListener("click", ()=>{
    modalOverlay.classList.remove("show")
})