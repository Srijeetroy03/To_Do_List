let add = document.getElementById('add_b');
let r_all = document.getElementById('remove_all_b');

add.addEventListener('click', () => {
    let show = document.getElementById('show')
    let text = document.getElementById('task_input');
    let list = document.createElement('li')
    let para = document.createElement('p')
    let tasks = document.createElement('p');
    para.innerHTML = text.value;
    tasks.innerHTML = "Click to delete task"
    tasks.style.fontWeight='700'
    tasks.style.display='none'
    if (para.innerHTML == "") {
        alert("Add a task!")
    }
    else {
        list.appendChild(para)
        list.appendChild(tasks)
        list.setAttribute('class', 'toDo')
        show.appendChild(list)
        text.value = null
    }
    let toDo = document.querySelectorAll('.toDo')
    for (let i=0;i<toDo.length;i++) {
        para.setAttribute('id', `para${i}`)
        tasks.setAttribute('id', `tasks${i}`)
        let p=document.getElementById(`para${i}`)
        let t=document.getElementById(`tasks${i}`)
        toDo[i].addEventListener('mouseover', () => {
            toDo[i].style.background='white'
            t.style.color='red'
            toDo[i].style.transition='0.2s ease-in-out'
            toDo[i].style.display='flex'
            toDo[i].style.justifyContent='center'
            p.style.display='none'
            t.style.display='block'
        })
        toDo[i].addEventListener('mouseout', () => {
            p.style.display='block'
            t.style.display='none'
            toDo[i].style.background='rgb(41,41,41)'
            toDo[i].style.color='rgb(151, 205, 228)'
            toDo[i].style.justifyContent='left'
        })
        toDo[i].addEventListener('click', (e) => {
            if (e.target.classList.contains('toDo')) {
                toDo[i].remove(e)
            }
        })
    }

})

r_all.addEventListener('click', () => {
    let show = document.getElementById('show')
    if (show.innerHTML == "") {
        alert("You have cleared all tasks")
    }
    else
        show.innerHTML = null
})
