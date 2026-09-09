// enum elamu_tüüp{
    
// }
// enum katusematerjal{

// }

class Loc {
    lat: number
    lon: number
    address: number
    postiindeks: number
    maja_värv: string
    korruste_arv: number
    
    constructor(lat:number,lon:number,address:number,postiindeks:number,maja_värv:string,korruste_arv:number) {
        this.lat = lat
        this.lon = lon
        this.address = address
        this.postiindeks = postiindeks
        this.maja_värv = maja_värv
        this.korruste_arv = korruste_arv
    }
    loc_info_inter():void{
        console.log(this.lat+" is the latitude "+this.lon+" is the longitude "+this.address+" is the address "+this.postiindeks+" is the post index "+this.maja_värv+" is the house color "+this.korruste_arv+" is the floor number ")
    }
    get_lon(): number{
        return this.lon
    }
    set_majavärv(newMajavärv:string):void{
        this.maja_värv = newMajavärv
    }
}
function loc_info(thisLoc: Loc):void{
    console.log(thisLoc.lat+" is the latitude "+thisLoc.lon+" is the longitude "+thisLoc.address+" is the address "+thisLoc.postiindeks+" is the post index "+thisLoc.maja_värv+" is the house color "+thisLoc.korruste_arv+" is the floor number ")
}

let house1 = new Loc(12,5,2342,12341512,"brown",3)
let house2 = new Loc(65,62435,2342132,12341512,"gray",2)
let house3 = new Loc(1232,35,234532,121342341512,"orange",5)

house1.loc_info_inter()
loc_info(house2)
console.log(house3)
console.log(house3.get_lon)
console.log(house2.get_lon)
house2.set_majavärv("orange")
house2.loc_info_inter()