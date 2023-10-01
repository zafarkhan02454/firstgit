
let isopen= false;
const settingCogEl=document.getElementById("settingIcon")
const settingContentEl=document.getElementById("setting-content")

console.log(settingCogEl);
const toggleIcon = (()=>{
    if(isopen){
        settingCogEl.classList.add("hide");
    } else{
        settingCogEl.classList.remove("hide")
      
    }
    isopen = !isopen;
    
})
settingCogEl.addEventListener("click", toggleIcon)

