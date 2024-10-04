const item=document.querySelector(".text");
const todobox=document.querySelector(".to-do-box");

item.addEventListener("keyup",(e)=>{
    if(e.key=="Enter"){
        addtodo(item.value);
        item.value="";
    }
})

function addtodo(item){
    let list=document.createElement("li");
    list.innerHTML=`${item} <i class="fa-solid fa-xmark"></i>`;
    list.addEventListener("click", () => {
        list.classList.toggle("done");
    });
    list.querySelector("i").addEventListener("click",()=>{
        list.remove();
    });
    todobox.appendChild(list)
}