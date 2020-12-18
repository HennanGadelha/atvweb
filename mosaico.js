let ArrayFotos = JSON.parse(localStorage.getItem("favorites") || []);

var ElementFather = document.getElementById("center");

function PassandoImg() {
    
    for (var i = 0; i <= ArrayFotos.length-1; i++) {
        
        let elemtent = document.createElement('img');
        ElementFather.appendChild(elemtent);
        elemtent.src = ArrayFotos[i];
        elemtent.style.width = "200px";
        elemtent.style.height = "200px";
        elemtent.style.borderRadius = "50%"
        elemtent.style.backgroundColor = "blue"
    }
    
}
PassandoImg()

