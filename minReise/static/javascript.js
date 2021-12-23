
let data = [
    {sted: "Poland", pris: 3000, dato: new Date("2020-05-15"), url: "https://gfx.nrk.no/2WPJvxq7jhP4mVU6cFp8sg-qM2GSJgABGqZP_46dOKGw"},
    {sted: "Poland", pris: 2700, dato: new Date("2020-07-27"), url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Logo_TVE-2.svg"},
    {sted: "Tyskland", pris: 2700, dato: new Date ("2019-08-12"), url: "https://upload.wikimedia.org/wikipedia/commons/d/dd/France_3_2018.svg"},
    {sted: "Tyskland", pris: 5200, dato: new Date("2019-09-04"), url: "https://www.infobilder.com/bilde-nummer-5-dl20176.jpg"},
    {sted: "USA", pris: 7400, dato: new Date ("2016-04-18"), url: "https://img.pixers.pics/pho_wat(s3:700/FO/57/91/04/80/700_FO57910480_30ce9f91636f63e81087a8ca165fda36.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/klistremerker-brann-alfabet-nummer-4-fire.jpg.jpg"},
    {sted: "USA", pris: 6800, dato: new Date ("2016-05-05"), url: "https://www.infobilder.com/bilde-nummer-5-dl20176.jpg"}
]

let navbar = [
    {name:"Inbex", href: "./index.html"},
    {name:"Feriebilder", href: "./jaja.html"},
    {name:"hjemme3", href: "./bildesortering.html"},
    {name:"side4", href: "./brukerInput.html"}
]


let knapper = [
    {
        bilMerke: [
            {Modell1: "", src:"https://www.cdn.tv2.no/images/13951498.jpg?imageId=13951498&x=0&y=0&cropw=99.90574929312&croph=100&width=1060&height=597"},
            {Modell2: "", src:""},
            {Modell3: "", src:""}
        ]
    },
    {
        bilMerke: [
            {Modell1: "", src:"https://bavaria.no/globalassets/biler/bmw/bmw-i4/i4-ikon.png"},
            {Modell2: "", src:""},
            {Modell3: "", src:""}
        ]
    },
    {
        bilMerke: [
            {Modell1: "", src:"https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/hp_cmstest/New_HomepagePush_1440x510px_New_QQ.jpg.ximg.l_full_m.smart.jpg"},
            {Modell2: "", src:""},
            {Modell3: "", src:""}
        ]
    },
]


    function prisSortering(data) {
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

    function stedSortering(data) {
        let sortert = data.sort((element1, element2) => element1.sted.localeCompare(element2.sted));
        let gridContainer = document.getElementById("bilder");
        for (let pos = 0; pos < sortert.length; pos++) {
            let bilde = document.getElementById(`${sortert[pos].sted} ${sortert[pos].dato}`);
            gridContainer.appendChild(bilde);
        }
    }


