function startCountdown() 
{
    const secondenInvoer = parseInt(document.getElementById("secondenInvoer").value);
    let seconden = secondenInvoer;
    const afteltijdElement = document.getElementById("afteltijdElement");

    const interval = setInterval(function() {
        if (seconden > 0) {
            seconden--;
            afteltijdElement.innerText = "Aftellen: " + seconden + " seconden";
        } else {
            clearInterval(interval);
            afteltijdElement.innerText = "BOEM!";

            const mijnPlaatjeElement = document.createElement("img");
            mijnPlaatjeElement.src = "BOEM.jpg";
            mijnPlaatjeElement.width = "200";
            afteltijdElement.appendChild(mijnPlaatjeElement);
        }
    }, 1000);
}