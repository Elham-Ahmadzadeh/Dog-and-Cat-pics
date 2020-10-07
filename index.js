const catResult  = document.querySelector('#cat-result')
const dogResult  = document.querySelector('#dog-result')
const catbtn = document.querySelector('#catBtn')
const dogbtn = document.querySelector('#dogBtn')

dogbtn.addEventListener('click',getRandomDog)
catbtn.addEventListener('click', getRandomCat)



function getRandomCat() {
    fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
        catResult.innerHTML = `<img src ="${data.file}"/>`
    })
}
getRandomCat()
function getRandomDog() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            dogResult.innerHTML = `<img src ="${data.url}"/>`
    })
}
getRandomDog()