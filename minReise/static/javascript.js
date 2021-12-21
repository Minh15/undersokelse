
let data = [
    {sted: "Poland", pris: 3000, dato: new Date("2020-05-15"), url: "https://gfx.nrk.no/2WPJvxq7jhP4mVU6cFp8sg-qM2GSJgABGqZP_46dOKGw"},
    {sted: "Poland", pris: 2700, dato: new Date("2020-07-27"), url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Logo_TVE-2.svg"},
    {sted: "Tyskland", pris: 2700, dato: new Date ("2019-08-12"), url: "https://upload.wikimedia.org/wikipedia/commons/d/dd/France_3_2018.svg"},
    {sted: "Tyskland", pris: 5200, dato: new Date("2019-09-04"), url: "https://www.infobilder.com/bilde-nummer-5-dl20176.jpg"},
    {sted: "Singapore", pris: 7400, dato: new Date ("2016-04-18"), url: "https://img.pixers.pics/pho_wat(s3:700/FO/57/91/04/80/700_FO57910480_30ce9f91636f63e81087a8ca165fda36.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/klistremerker-brann-alfabet-nummer-4-fire.jpg.jpg"},
    {sted: "Singapore", pris: 6800, dato: new Date ("2016-05-05"), url: "https://www.infobilder.com/bilde-nummer-5-dl20176.jpg"}
]

    function prisSortering(data){
        // let prisListe = [];
        //     for (let posisjon = 0; posisjon < data.length; posisjon++) {
        //         prisListe.push(data[posisjon].pris)
        //     }
        // console.log("PrisListe array", prisListe)
        let sortert = data.sort((element1, element2) => { return element1.pris - element2.pris });

        let gridContainer = document.getElementById("bilder");
        for(let pos = 0; pos < sortert.length; pos++) {
            let bilde = document.getElementById(`${sortert[pos].sted} ${sortert[pos].dato}`);
            gridContainer.appendChild(bilde);
        }
        return data;
    }

    function datoSortering(data) {
        let sortert = data.sort((element1, element2) => { return element1.dato - element2.dato});

        let gridContainer = document.getElementById("bilder");
        for (let pos = 0; pos < sortert.length; pos++) {
            let bilde = document.getElementById(`${sortert[pos].sted} ${sortert[pos].dato}`);
            gridContainer.appendChild(bilde);
        }
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
