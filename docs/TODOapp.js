let x=document.getElementById("i1");
x.onkeyup=function(e){
    if(e.keyCode===13 && x.value!="")
    {
        let item=document.createElement("li");
        item.innerText=x.value;
        let list=document.getElementById("li1");
        list.appendChild(item);
        item.onclick = function(e){
            e.target.remove();
        };
        x.value="";
    }
};
//let y=document.getElementsByTagName("li");
