class carProperties {
    läbivus: number
    kaal: number
    keretüüp: string
    istmetearv: number
    autovärv: string
    hoiuruumimaht: number
    vedrustussüsteemitüüp: string
    piduritüüp: string
    tootmisaasta: number
    
    constructor
    (
        läbivus: number,
        keretüüp: string,
        istmetearv: number,
        autovärv: string,
        hoiuruumimaht: number,
        vedrustussüsteemitüüp: string,
        piduritüüp: string,
        tootmisaasta: number,
        kaal: number
    )
    {
        this.läbivus = läbivus
        this.kaal = kaal
        this.keretüüp = keretüüp
        this.istmetearv = istmetearv
        this.autovärv = autovärv
        this.hoiuruumimaht = hoiuruumimaht
        this.vedrustussüsteemitüüp = vedrustussüsteemitüüp
        this.piduritüüp = piduritüüp
        this.tootmisaasta = tootmisaasta
    }
    car_info_inter():void{
        console.log
        (
            this.läbivus+"km on auto läbivus "+
            this.kaal+" on auto kaal "+
            this.keretüüp+" on auto keretüüp "+
            this.istmetearv+" on istmete arv "+ 
            this.autovärv+" on auto värv "+
            this.hoiuruumimaht+"L on auto hoiuruumimaht"+
            this.vedrustussüsteemitüüp+" on vedrustus süsteemi tüüp"+
            this.piduritüüp+" on piduritüüp "+
            this.tootmisaasta+" on tootmis aasta "
        )
    }
    set_speed(newläbivus:number):void{
        this.läbivus = newläbivus
    }
}
function car_cost_info(thisCar: carProperties):void{
    console.log
    (
        thisCar.läbivus+"km on auto läbivus "+
        thisCar.piduritüüp+" on piduritüüp "+
        thisCar.tootmisaasta+" on tootmis aasta "+
        thisCar.vedrustussüsteemitüüp+" on vedrustus süsteemi tüüp"
    )
}
function car_com_info(thisCar: carProperties):void{
    console.log
    (
        thisCar.autovärv+" on auto värv "+
        thisCar.hoiuruumimaht+"L on auto hoiuruumimaht"+
        thisCar.tootmisaasta+" on tootmis aasta "+
        thisCar.keretüüp+" on auto keretüüp "+
        thisCar.istmetearv+" on istmete arv "
    )
}

let car1 = new carProperties(2000,"carbon",5,"red", 34,"piston","hyper",2004,200)
let car2 = new carProperties(4000,"carbon",2,"black", 60,"leht","delux",2008,320)

car1.car_info_inter()
car2.car_info_inter()
car_cost_info(car1)
car_com_info(car2)