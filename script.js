let title = document.getElementById('exampleInputEmail1')
let author = document.getElementById('exampleInputPassword1')
let ISBN = document.getElementById('ISBN')
let tbody = document.getElementById('tbody')

let submit = document.getElementById('submit')

let valueOfTable = []
submit.addEventListener('click',(e)=>{
     e.preventDefault()
    addvalue(valueStrings)

})

const valueStrings = JSON.parse(localStorage.getItem('valueString'))

window.addEventListener('load',function(){
    valueStrings.forEach((valueString)=>{
    let tr = document.createElement('tr')
    let tdTitle = document.createElement('td')
    let tdAuthor = document.createElement('td')
    let tdISBN = document.createElement('td')
    let deleteButton = document.createElement('td')

    tdTitle.innerText = valueString.title
    tdAuthor.innerText = valueString.author
    tdISBN.innerText = valueString.tdISBN
    deleteButton.innerHTML = '<img src="cross.png" height="20px"></img> '

    deleteButton.addEventListener('click',function(){
        tr.remove()
        
    })

    tr.appendChild(tdTitle)
    tr.appendChild(tdAuthor)
    tr.appendChild(tdISBN)
    tr.appendChild(deleteButton)

    tbody.appendChild(tr)
     
    })
})


function addvalue(){

    let tr = document.createElement('tr')
    let tdTitle = document.createElement('td')
    let tdAuthor = document.createElement('td')
    let tdISBN = document.createElement('td')
    let deleteButton = document.createElement('td')

    tdTitle.innerText = title.value
    tdAuthor.innerText = author.value
    tdISBN.innerText = ISBN.value
    deleteButton.innerHTML = '<img src="cross.png" height="20px"></img> '

    deleteButton.addEventListener('click',function(){
        tr.remove()
    })

    tr.appendChild(tdTitle)
    tr.appendChild(tdAuthor)
    tr.appendChild(tdISBN)
    tr.appendChild(deleteButton)

    tbody.appendChild(tr)

    valueOfTable.push({
        title: tdTitle.innerText,
        author: tdAuthor.innerText,
        tdISBN: tdISBN.innerText
    })

    localStorage.setItem('valueString',JSON.stringify(valueOfTable))
    

    resetvalue()
}
function resetvalue(){
    title.value =""
    author.value =""
    ISBN.value =""

}

