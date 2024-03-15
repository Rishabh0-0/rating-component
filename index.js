const mainCard = document.querySelector(".main-card")
const thankyouCard = document.querySelector(".thankyou-card")
const submitBtn = document.querySelector(".btn-submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn-circle");

submitBtn.addEventListener("click", () => {
    mainCard.classList.add("d-none")
    thankyouCard.classList.remove("d-none")
});

rates.forEach((rate) => {
    rate.addEventListener("click", () =>{
        rating.innerHTML = rate.innerHTML
    })
})