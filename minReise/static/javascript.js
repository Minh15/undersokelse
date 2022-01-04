
    // liste for sortering av bilder (bildesortering.html)
let data = [
    {sted: "Poland", pris: 3000, dato: new Date("2020-05-15"), url: "https://th.bing.com/th/id/R.60fa847aed87bf925c730cdd8c0a926c?rik=Xb4JYSJPkhLwVA&pid=ImgRaw&r=0"},
    {sted: "Tyskland", pris: 2700, dato: new Date("2020-07-27"), url: "https://th.bing.com/th/id/R.5183ce72894996d58d2ebb710d49f231?rik=%2bf0N29BYZBAkIw&riu=http%3a%2f%2fwww.nejvetsimesta.cz%2fwp-content%2fgallery%2fberlin%2fnocni_berlin.jpg&ehk=C1x9oRXgnUOpRDA2YWz2StTCsPbikoNGsomBW1sYaGk%3d&risl=&pid=ImgRaw&r=0"},
    {sted: "England", pris: 3450, dato: new Date ("2019-08-12"), url: "https://wallup.net/wp-content/uploads/2019/09/599328-united-kingdom-houses-roads-sky-london-big-ben-night-cities-3.jpg"},
    {sted: "Frankrike", pris: 5200, dato: new Date("2019-09-04"), url: "https://wallup.net/wp-content/uploads/2019/09/538617-architecture-cities-france-light-towers-monuments-night-panorama-panoramic-paris-urban-temples-2.jpg"},
    {sted: "USA", pris: 7400, dato: new Date ("2016-04-18"), url: "https://th.bing.com/th/id/OIP.ImrhzNoxYN-gIE0qDNuIYwHaE8?pid=ImgDet&rs=1"},
    {sted: "Singapore", pris: 6800, dato: new Date ("2016-05-05"), url: "https://th.bing.com/th/id/R.a7e42cccb8d0b7269258bec36d792d2e?rik=x72UOWj%2b%2fHia0w&pid=ImgRaw&r=0"}
]
    // Liste for navbar
let navbar = [
    {name:"Hovedside", href: "./index.html"},
    {name:"Feriebilder", href: "./bildesortering.html"},
    {name:"Transportmidler", href: "./transportmidler.html"},
    {name:"Brukerinput", href: "./brukerInput.html"}
]

    // Liste for radioknappesiden (transportmidler.html)
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


