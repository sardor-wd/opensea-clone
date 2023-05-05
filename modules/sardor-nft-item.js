let urlF = 'http://localhost:3001'

let wrapper = document.querySelector('.user_content_list')

axios.get(urlF + '/colectibles') 
    .then(res => {
        if(res.status === 200 || res.status === 201) {
            reload(res.data)
        }
    })

function reload(arr) {
    for (let item of arr) {
        wrapper.innerHTML += `
        <div class="nft-item">
            <div class="nft-gif">
                <img src="${item.mainImg}" class="nft-image">
            </div>
            <div class="nft-description">
                <p>${item.name}</p>
                <p>Price</p>
                <div class="price-div">
                    <img src="../assets/img/eht.svg" width="16px" height="16px"><span>0,144</span>
                </div>
            </div>
            <button class="buy-btn">Buy now</button>
        </div>
        `
    }
}

// let nft_item = document.querySelectorAll('.nft-item')

// nft_item.forEach = ((item)=>{
//     let btn = item.querySelectorAll('.buy-btn')
//     item.onmouseenter = () =>{
//         btn.style.bottom = '195px'
//         btn.style.transition = '300ms ease'
//     }
// }) 