// Target määrab ära domeenispetsiifilise liidese mida kliendi kood kasutab 
class Target {
    public request(): string {
        return "Target: tavaline target sai pihta";
    }
}

// Adapteeritav sisaldab mingit kasulikku funktsiooni või omadust, aga selle liides ei ole ühilduv eksisteeriva kliendi koodiga. Adapteeritav vajab adapteerimist enne kui kliendi kood saab seda kasutada
class Adapteeritav {
    public specificRequest(): string{
        return ".eetpadA eht fo roivaheb laicepS"
    }
}

//Adapter muudab adapteeritava liidese klientkoodile arusaadavaks
class Adapter extends Target {
    private adapteeritav: Adapteeritav;

    /**
     *
     */
    constructor(adapteeritav: Adapteeritav) {
        super();
        this.adapteeritav = adapteeritav;
    }

    public request(): string {
        const tulemus = this.adapteeritav
            .specificRequest()
            .split('')
            .reverse()
            .join('') ;
        return `Adapter: (Muundatud arusaadavaks: ${tulemus})`;
    }
}

//klientkood toetab kõiki klasse mis jälgivad targeti liidest
function klientKood5(target: Target) {
    console.log(target.request())
}

console.log("Klient: Saan töötada Target-tüüpi objektidega");
const target = new Target();
klientKood5(target);

console.log('')

const adapteeritav = new Adapteeritav();
console.log("Adapteeritaval on imelik liides, ei saa aru")
console.log(`Adapteeritava sõnum: ${adapteeritav.specificRequest()}`)

console.log('')

console.log("Klient: Adapteriga on Adapteeritavaga töö võimalik:")
const adapter = new Adapter(adapteeritav);
klientKood5(adapter)