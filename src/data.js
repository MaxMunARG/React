const data = [
    {
        id: 1,
        name: "Monitor Gamer Samsung 24",
        price: 134.650,
        description: "G50 Curvo 144Hz Full HD VA FreeSync",
        category: "Monitores"
    },
    {
        id: 2,
        name: "Monitor Smart Samsung 27",
        price: 142.250,
        description: "M5 Full HD VA 60Hz AirPlay2/ Netflix/ Youtube/ HBO",
        category: "Monitores"
    },
    {
        id: 3,
        name: "Monitor Samsung 24",
        price: 103.450,
        description: "Curvo F390 Full HD FreeSync",
        category: "Monitores"
    },
    {
        id: 4,
        name: "Monitor LG LED 19",
        price: 59.800,
        description: "9M38A-B VGA",
        category: "Monitores"
    },
    {
        id: 5,
        name: "Monitor Gamer LG 27",
        price: 205.700,
        description: "27GL650F 144hz IPS FHD GSync FreeSync",
        category: "Monitores"
    },
    {
        id: 6,
        name: "Monitor LG 32",
        price: 328.150,
        description: "UltraGear 32UN550 4K 60Hz VA Hdmi DP",
        category: "Monitores"
    },
    {
        id: 7,
        name: "Monitor LG 34",
        price: 635.950,
        description: "UltraWide 34WL85C-B Curvo IPS 2K QHD 21:9 ",
        category: "Monitores"
    },
    {
        id: 8,
        name: "Placa de Video ASUS Phoenix",
        price: 193.150,
        description: " Phoenix GeForce GTX 1630 4GB GDDR6",
        category: "Placas de Video"
    },
    {
        id: 9,
        name: "Placa de Video Zotac",
        price: 735.300,
        description: "GeForce RTX 4070 Ti 12GB GDDR6X Trinity OC White",
        category: "Placas de Video"
    },
    {
        id: 10,
        name: "Placa de Video MSI",
        price: 765.300,
        description: "RTX 3090 24GB GDDR6X VENTUS 3X OC",
        category: "Placas de Video"
    },
    {
        id: 11,
        name: "Placa de Video Asrock",
        price: 1.213700,
        description: "Radeon RX 7900 XTX 24GB GDDR6 Phantom Gaming OC",
        category: "Placas de Video"
    },
    {
        id: 12,
        name: "Placa de Video XFX",
        price: 1.214450,
        description: "Radeon RX 7900 XTX 24GB GDDR6 SPEEDSTER MERC 310",
        category: "Placas de Video"
    },
    {
        id: 13,
        name: "Notebook Gamer Dell",
        price: 1.228800,
        description: "Alienware 15.6 Core i7 11800H 16GB 512GB SSD NVMe RTX 3060 W10 144Hz",
        category: "Notebooks"
    },
    {
        id: 14,
        name: "Notebook Gamer Asus",
        price: 756.650,
        description: "TUF FA506 FHD 15.6 Ryzen 5 4600H 16GB 512GB SSD NVMe GTX 1650 Freedos 144Hz",
        category: "Notebooks"
    },
    {
        id: 15,
        name: "Notebook Lenovo ThinkPad",
        price: 1.006400,
        description: "E14 FHD 14 Core I7 1165G7 8GB 256GB SSD NVMe Freedos",
        category: "Notebooks"
    },
    {
        id: 16,
        name: "Notebook Lenovo Idea Pad",
        price: 343.370,
        description: " 14ADA7 14 Ryzen 3 3250U 8GB 256GB SSD NVMe Freedos",
        category: "Notebooks"
    },
    {
        id: 17,
        name: "Notebook Acer Aspire 5",
        price: 349.250,
        description: "5.6 Core I3 10110U 4GB 256GB SSD NVMe W11 Home",
        category: "Notebooks"
    },
    {
        id: 18,
        name: "Notebook Gamer ASUS",
        price: 725.100,
        description: "TUF FX506 FHD 15.6 Core i5 10300H 8GB 512GB SSD NVMe GTX 1650 Freedos 144Hz ",
        category: "Notebooks"
    },
    {
        id: 19,
        name: "PC PCBOX INTEL",
        price: 259.000,
        description: "CELERON DUAL CORE J4005 8GB 240SSD WIFI BLUETOOTH KIT FREE DOS",
        category: "Equipos Armados"
    },
    {
        id: 20,
        name: "Pc Lenovo",
        price: 235.000,
        description: "V530S Core I5-9400 4Gb 1Tb7200",
        category: "Equipos Armados"
    },
    {
        id: 21,
        name: "COMBO PC ACER",
        price: 540.000,
        description: "VERITON BUNDLE SFF INTEL CI5-1200T 8GB-256M2 SIN SO MONITOR 215",
        category: "Equipos Armados"
    },
    {
        id: 22,
        name: "V5 Intel Core i5",
        price: 353.969,
        description: "10400-8Gb-SSD 960GB-KIT",
        category: "Equipos Armados"
    },
    {
        id: 23,
        name: "G6200 Amd Ryzen 5",
        price: 699.689,
        description: "5600X-16Gb-GTX1650-480",
        category: "Equipos Armados"
    },
    {
        id: 24,
        name: "Silla Gamer Corsair",
        price: 250.650,
        description: "T3 Rush Fabric Carbon",
        category: "Accesorios"
    },
    {
        id: 25,
        name: "Auriculares HyperX",
        price: 97.000,
        description: "Gaming Cloud II Wireless",
        category: "Accesorios"
    },
    {
        id: 26,
        name: "Combo Logitech Teclado + Mouse",
        price: 39.400,
        description: "MK540 Wireless",
        category: "Accesorios"
    },
    {
        id: 27,
        name: "Chromecast Google Tv Hd",
        price: 48.779,
        description: "Hd 8gb 2gb RAM 60 Fps Wifi Bluetooth Hdmi 4ta Gen Blanco",
        category: "Accesorios"
    },
    {
        id: 28,
        name: "Trezor One",
        price: 107.799,
        description: "Selladas De Fábrica",
        category: "Accesorios"
    },
    {
        id: 29,
        name: "UPS con Estabilizador",
        price: 58.500,
        description: "Lyonn Ctb 1500ap 1500v",
        category: "Accesorios"
    },
    {
        id: 30,
        name: "Router WIFI Tp-Link",
        price: 29.600,
        description: "Archer C5 AC1200 White",
        category: "Accesorios"
    },

]

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(data)
        }, 1000)
    })
}