let plusIcon = Array.from(document.querySelectorAll(".fa-plus"))
let allImgs = Array.from(document.querySelectorAll("#image"));

let popupDiv = document.createElement('div');
popupDiv.className = 'popup';

let closeIcon = document.createElement("i");
closeIcon.className = 'fa-solid fa-xmark';
popupDiv.appendChild(closeIcon)
let index = 0;

let popupImg = document.createElement("img");
popupImg.src = allImgs[index].src;

let innerDiv = document.createElement("div");
innerDiv.appendChild(popupImg)
popupDiv.appendChild(innerDiv)

let controls = document.createElement("div");
    controls.className = 'controls';
    controls.appendChild(closeIcon)
    innerDiv.appendChild(controls);
    
    let nextImg = document.createElement("i");
    nextImg.className = 'fa-solid fa-angle-right';
    nextImg.id = 'next';
    controls.appendChild(nextImg)

    let prevImg = document.createElement("i");
    prevImg.className = 'fa-solid fa-angle-left';
    controls.appendChild(prevImg)



plusIcon.forEach(icon => {
    icon.addEventListener("click",()=>{
        window.scrollTo(0,0)
        index = plusIcon.indexOf(icon);
        console.log(index);
        popupImg.src = allImgs[index].src;
    
        checker();
        document.body.append(popupDiv);
        closeIcon.addEventListener("click",()=>{
            popupDiv.remove();
        })
        
        nextImg.addEventListener("click",()=>{
            index++;
            checker()
            // index = plusIcon.indexOf(icon);
            console.log(index);
            popupImg.src = allImgs[index].src;
        })
        
        prevImg.addEventListener("click",()=>{
            index--;
            checker()
            popupImg.src = allImgs[index].src;
        })
    })
})


function checker(){
    if(index == allImgs.length -1){
        nextImg.style.pointerEvents = 'none'
    }else{
        nextImg.style.pointerEvents = 'all'
    }
    if(index == 0){
        prevImg.style.pointerEvents = 'none'
    }else{
        prevImg.style.pointerEvents = 'all'
    }
}
checker();
