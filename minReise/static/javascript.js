
let data = [
    {sted: "Poland", pris: 3000, dato: new Date("2020-05-15"), url: "https://gfx.nrk.no/2WPJvxq7jhP4mVU6cFp8sg-qM2GSJgABGqZP_46dOKGw"},
    {sted: "Tyskland", pris: 2700, dato: new Date("2020-07-27"), url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Logo_TVE-2.svg"},
    {sted: "England", pris: 3450, dato: new Date ("2019-08-12"), url: "https://upload.wikimedia.org/wikipedia/commons/d/dd/France_3_2018.svg"},
    {sted: "Frankrike", pris: 5200, dato: new Date("2019-09-04"), url: "https://www.infobilder.com/bilde-nummer-5-dl20176.jpg"},
    {sted: "USA", pris: 7400, dato: new Date ("2016-04-18"), url: "https://img.pixers.pics/pho_wat(s3:700/FO/57/91/04/80/700_FO57910480_30ce9f91636f63e81087a8ca165fda36.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/klistremerker-brann-alfabet-nummer-4-fire.jpg.jpg"},
    {sted: "Singapore", pris: 6800, dato: new Date ("2016-05-05"), url: "https://www.infobilder.com/bilde-nummer-5-dl20176.jpg"}
]

let navbar = [
    {name:"Inbex", href: "./index.html"},
    {name:"Feriebilder", href: "./jaja.html"},
    {name:"Transportmidler", href: "./bildesortering.html"},
    {name:"side4", href: "./brukerInput.html"}
]


let knapper = [
    {
        bilMerke: [
            {Modell1: "Expedition", src:"https://th.bing.com/th/id/R.524ae5107a8affa4ff62a90c84c0cf53?rik=E1ZtCL3KB%2bM31w&pid=ImgRaw&r=0"},
            {Modell2: "Mustang", src:"https://th.bing.com/th/id/OIP.RMkDIgkDjyNLm1P46kVoLwHaD1?pid=ImgDet&rs=1"},
            {Modell3: "Edge", src:"https://www.motortrend.com/uploads/sites/10/2015/11/2014-ford-edge-se-suv-angular-front.png"}
        ]
    },
    {
        bilMerke: [
            {Modell1: "Camry", src:"https://groupeparkavenue.com/sites/default/files/assets/trim/primary_image/2018/Toyota/Camry/cc_2018TOC020013_01_1280_0040_0.png"},
            {Modell2: "Corolla", src:"https://th.bing.com/th/id/OIP.gyoE82EQwmfASrlNPo7JIQHaEL?pid=ImgDet&rs=1"},
            {Modell3: "Venza", src:"https://cacsw.org/wp-content/uploads/2017/12/2019-Toyota-Venza-white-color-on-white-background-front-exterior-view-hd-wallpaper-1024x768.jpg"}
        ]
    },
    {
        bilMerke: [
            {Modell1: "Rio", src:"https://toddsofcampsie.com/wp-content/uploads/2020/02/kia-rio_2017-1-blaze-red_featuredimage.png"},
            {Modell2: "Soul", src:"https://www.motortrend.com/uploads/sites/10/2017/02/2017-kia-soul-exclaim-hatchback-angular-front.png"},
            {Modell3: "Sorento", src:"https://leblogauto.b-cdn.net/wp-content/uploads/2020/03/2020_Kia-Sorento_07.jpg"}
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


