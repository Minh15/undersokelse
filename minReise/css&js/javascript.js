
const data = [
    {sted: "Poland", pris: 3000, dato: "15-05-2020", url: "https://gfx.nrk.no/2WPJvxq7jhP4mVU6cFp8sg-qM2GSJgABGqZP_46dOKGw"},
    {sted: "Poland", pris: 2700, dato: "27-07-2020", url: "https://www.infobilder.com/bilde-nummer-5-dl20176.jpg"},
    {sted: "Tyskland", pris: 2700, dato: "12-08-2019", url: "https://upload.wikimedia.org/wikipedia/commons/d/dd/France_3_2018.svg"},
    {sted: "Tyskland", pris: 5200, dato: "04-09-2019", url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Logo_TVE-2.svg"},
    {sted: "Singapore", pris: 7400, dato: "18-04-2016", url: "https://img.pixers.pics/pho_wat(s3:700/FO/57/91/04/80/700_FO57910480_30ce9f91636f63e81087a8ca165fda36.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/klistremerker-brann-alfabet-nummer-4-fire.jpg.jpg"},
    {sted: "Singapore", pris: 6800, dato: "05-05-2016", url: "https://www.infobilder.com/bilde-nummer-5-dl20176.jpg"}
]

    for (let pris = 0; pris < data.length; pris++) {

    }


function tilSortering(data){
    let prisListe = [];
        for (let posisjon = 0; posisjon < data.length; posisjon++) {
            prisListe = data[posisjon].pris
        }
    return prisListe.sort()
}










// Get the elements with class="column"
    var elements = document.getElementsByClassName("column");

    // Declare a "loop" variable
    var i;

    // Full-width images
    function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
    }
}

    // Two images side by side
    function two() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
    }
}

    // Four images side by side
    function three() {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.flex = "25%";
        }
    }
