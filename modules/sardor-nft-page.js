let offer_btn = document.querySelector('.offer-btn')
let offer_popup = document.querySelector('.offer-popup')
let popup_fade = document.querySelector('.popup-fade')

offer_btn.onclick = () => {
    offer_popup.innerHTML += `
    
    `
    offer_popup.style.display = 'flex'
    popup_fade.style.display = 'flex'
}