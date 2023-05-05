let nft_dropdown_box = document.querySelectorAll('.nft-dropdown-box')
nft_dropdown_box.forEach((item) => {
    let door = item.querySelector('.dropdown_door')
    let nft_dropdown_list = item.querySelector('.nft-dropdown-list')
    door.onclick = () => {
        nft_dropdown_list.classList.toggle('is-active')
        let icon_down = item.querySelector('#dropdown_icon')
        icon_down.classList.toggle('active_icon')

    }
})