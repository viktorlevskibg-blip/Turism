function AddText(){
    const TextAdd = document.getElementById('TextAdd');
    const Add = document.getElementById('Add').value;
    Add.addEventListener('click',(event)=>{
    console.log(TextAdd.value)
    const li = document.getElementById('li');
    list.appendChild(li);
    })
    
}