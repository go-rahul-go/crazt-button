const button=document.querySelector("button")
const positions=[0,45,10,21,9,35,74,4,67];
var counter=0;

button.addEventListener("mouseover",positionMouse);



function positionMouse()
{
    var position=Math.floor(Math.random() * positions.length);
    console.log(position);
    button.style.left=`${positions[position]}%`;
    button.style.top=`${positions[position]+10}%`;
}


button.addEventListener("click",()=>{
    positionMouse();
    counter++;
    document.querySelector("p").innerText=`${counter} times clicked`;
    // button.removeEventListener("mouseover",positionMouse);
})