let title = document.querySelector('#title')
let author = document.querySelector('#author')
let button = document.querySelector('#button')
let form =document.querySelector('#form')
let songlist = document.querySelector('#songlist')


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let titlevalue = title.value;
    let authorvalue =author.value;


    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.innerHTML=title.value;
    tr.appendChild(td)
    songlist.appendChild(tr)

    let tdd = document.createElement('td')
    tdd.innerHTML=author.value;
    tr.appendChild(tdd)
    songlist.appendChild(tr)



})