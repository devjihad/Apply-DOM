let start = document.createElement('h1')
start.innerText = 'This is the Document Object Model'
start.setAttribute('id','first')
let startt = document.createElement('h1')
startt.innerText = 'This is the list of Fruit! '
startt.setAttribute('id','secound')
let append = document.getElementById('that')
append.appendChild(start)
append.appendChild(startt)
let ol = document.createElement('div')
ol.innerHTML= `<ol>
<li>Mango</li>
<li>Lichi</li>
<li>Pineapple</li>
<li>Jack Fruit</li>
<li>Apple</li>
<li>Orange</li>
</ol>`
append.appendChild(ol)
ol.setAttribute('id','order')
let starttt = document.createElement('h1')
starttt.innerText = 'This is the list of Animal'
let app = document.getElementById('order')
append.appendChild(starttt)



let sem = document.createElement('div')
sem.innerHTML= `<ul>
<li>Lion</li>
<li>Tiger</li>
<li>Lapert</li>
<li>Aliphent</li>
<li>goat</li>
</ul>`
sem.setAttribute('id','row')
document.body.appendChild(sem);



