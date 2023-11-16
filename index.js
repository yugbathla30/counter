let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countstr = count + " - "
    count = 0
    saveEl.textContent += countstr
    countEl.textContent = 0
    console.log(count)
}