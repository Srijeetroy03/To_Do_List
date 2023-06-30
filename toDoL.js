let add=document.getElementById('add_b');
let r_all=document.getElementById('remove_all_b');

add.addEventListener('click',()=>{
    let show=document.getElementById('show')
    let text=document.getElementById('task_input');
    let list=document.createElement('li')
    list.innerHTML=text.value;
    // list.classList.add('toDo')
    list.setAttribute('class','toDo')
    show.appendChild(list)
    text.value=null
    let toDo=document.querySelectorAll('.toDo')
    for(let i of toDo){
        i.setAttribute('title','click to delete task')
    }
    for(let i of toDo){
        i.addEventListener('click',(e)=>{
            if(e.target.classList.contains('toDo')){
                i.remove(e)
                
            }
        })
    }
})

r_all.addEventListener('click',()=>{
    let show=document.getElementById('show')
    show.innerHTML=null
})
