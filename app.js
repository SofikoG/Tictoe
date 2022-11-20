const blocks = document.querySelectorAll('.block')
const body = document.querySelector("body")
let isX = true
let game = true
blocks.forEach((item, index) => {

    item.addEventListener('click', blockClick)
})

function blockClick(event) {
    if (game) {
        if (isX) {
            event.target.innerHTML = 'X'
        } else {
            event.target.innerHTML = '0'
        }
        isX = !isX
        event.target.removeEventListener('click', blockClick)
        isWin()
    }
}

function winResult(index1, index2, index3) {
    blocks[index1].style.backgroundColor = 'red'
    blocks[index2].style.backgroundColor = 'red'
    blocks[index3].style.backgroundColor = 'red'
    game = false
    const modal = `<div class="modal">
        <div class="modalContent">
            <p class="winner">Выиграл: ${blocks[index1].innerHTML}</p>
            <button class="reload" onclick='document.location.reload()'>Перезапуск</button>
        </div>
    </div>`
    body.innerHTML += modal
}


function isWin() {
    if (blocks[0].innerHTML && blocks[0].innerHTML == blocks[1].innerHTML && blocks[1].innerHTML == blocks[2].innerHTML) {
        winResult(0, 1, 2)
    } else if (blocks[3].innerHTML && blocks[3].innerHTML == blocks[4].innerHTML && blocks[4].innerHTML == blocks[5].innerHTML) {
        winResult(3, 4, 5)
    } else if (blocks[6].innerHTML && blocks[6].innerHTML == blocks[7].innerHTML && blocks[7].innerHTML == blocks[8].innerHTML) {
        winResult(6, 7, 8)
    } else if (blocks[0].innerHTML && blocks[0].innerHTML == blocks[3].innerHTML && blocks[3].innerHTML == blocks[6].innerHTML) {
        winResult(0, 3, 6)
    } else if (blocks[1].innerHTML && blocks[1].innerHTML == blocks[4].innerHTML && blocks[4].innerHTML == blocks[7].innerHTML) {
        winResult(1, 4, 7)
    } else if (blocks[2].innerHTML && blocks[2].innerHTML == blocks[5].innerHTML && blocks[5].innerHTML == blocks[8].innerHTML) {
        winResult(2, 5, 8)
    } else if (blocks[0].innerHTML && blocks[0].innerHTML == blocks[4].innerHTML && blocks[4].innerHTML == blocks[8].innerHTML) {
        winResult(0, 4, 8)
    } else if (blocks[2].innerHTML && blocks[2].innerHTML == blocks[4].innerHTML && blocks[4].innerHTML == blocks[6].innerHTML) {
        winResult(2, 4, 6)
    } else if (blocks[0].innerHTML && blocks[1].innerHTML && blocks[2].innerHTML && blocks[3].innerHTML && blocks[4].innerHTML && blocks[5].innerHTML && blocks[6].innerHTML && blocks[7].innerHTML && blocks[8].innerHTML) {
        blocks.forEach((item) => {
            item.style.backgroundColor = 'yellow'
        })
    }
}