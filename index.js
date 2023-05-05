//Dropdown
let url = 'http://localhost:3001'
let checkbox_dropdown = document.querySelectorAll('.checkbox-dropdown')
let more = document.querySelector('.time')
let dad = document.querySelector('.daddy')

function getData(param) {
    axios.get(url + '/users')
        .then(res => {
            if (res.status == 200 || res.status == 201) {
                param(res.data)
            }
        })
        .catch(err => console.log(err))
}

checkbox_dropdown.forEach((item) => {
    let door = item.querySelector('.dropdown_door')
    door.onclick = () => {
        item.classList.toggle('is-active')
        let icon_down = item.querySelector('#dropdown_icon')
        icon_down.classList.toggle('active_icon')

    }
    let ul = item.querySelector('ul')
    ul.onclick = ((e) => {
        e.stopPropagation();
    });
})


function reload(arr) {
    for (let item of arr) {

        dad.innerHTML += `
        <div class="item">
        <div class="id"> 
        <span>${item.id}</span>
        </div>
        <img src="${item.img}" >
        <div class="user_name">
            <span>${item.nic_name}</span>
            <span class="grey">Floor price:${item.floor_price}</span>
        </div>
        <div class="user_namee">
            <span class="pourcent">${item.pourcent}</span>
            <span class="grey">${item.amount}</span>
        </div>
     </div>
        `
    }

    let item = document.querySelectorAll('.item')

    item.forEach(itemm => {
        itemm.onmouseenter = () => {
            item.forEach(itemi => itemi.classList.remove('font'))
            itemm.classList.add('font')

        }
        itemm.onmouseleave = () => {
            itemm.classList.remove('font')
        }
    })


}

getData(reload)


let hour = document.querySelectorAll('.hour')


hour.forEach(item => {

    // hour.forEach(ite => ite.classList.remove('grie'))

    item.onmouseenter = () => {
        item.classList.add('grie')
    }

    item.onmouseleave = () => {
        item.classList.remove('grie')
    }
    item.onclick = () => {
        window.location.href = './pages/rankings.html'
    }
})

let other = document.querySelector('.other')
let hours = document.querySelector('.hours')

other.onclick = () => {
    hours.style.display = 'flex'
}