//Vastuseahel on disainimuster, kus päring ei lähe otse ühele kindlale objektile vaid liigub mööda ahelat ojektist objekti. Iga ahela lüli otsustab kas ta suudab päringut lahendada või annab edasi tesiele lülile ahelas

//interface deklareerib ahela ehitamise meetodi
interface Käsitleja<P = string, T = string> {
    setNext(käsitleja: Käsitleja<P, T>): Käsitleja<P, T>;
    handle(p: P): T | null;
}

// ahela meetodi saab implementeerida baas käsitleja klassi

abstract class AbstraktneKäsitleja<P = string, T = string> implements Käsitleja<P, T> {
    private järgmineKäsitleja: Käsitleja<P, T> | null = null;

    public setNext(käsitleja: Käsitleja<P, T>): Käsitleja<P, T> {
        this.järgmineKäsitleja = käsitleja;
        //käsitleja tagamine siit laseb meil ühendada käsitlejad lihtsas viisis nagu: Hädaabikäsitleja.setNext(TelefoniKäsitleja).setNext(Välismaatelefonikasitleja);
        return käsitleja; 
    }

    public handle(p: P): T | null {
        if (this.järgmineKäsitleja) {
            return this.järgmineKäsitleja.handle(p);
        }
        return null;
    }
}

//kõik käsitlejad teevad kaks asja:  kas suudavad päringu lahendada või annavad edasi teise käsitlejale

class Hädabikäsitleja extends AbstraktneKäsitleja {
    public handle(p: string): string | null {
        if (p === '112') {
            return `Hädaabikäsitleja: Hädaabi number on ${p}.`;
        }
        return super.handle(p);
    }
}

class Telefonikäsitleja extends AbstraktneKäsitleja {
    public handle(p: string): string | null {
        if (p.startsWith('+372')) {
            return `Telefonikäsitleja: Number ${p} on Eesti telefoni number.`;
        }
        return super.handle(p);
    }
}

class VälismaaTelefoniKäsitleja extends AbstraktneKäsitleja {
    public handle(p: string): string | null {
        if (p.startsWith('+971')) {
            return `VälismaaTelefonikäsitleja: Number mis algab ${p.substring(0, 4)} on Araabia Ühendemiraatide number.`;
        }
        if (p.startsWith('+54')) {
            return `VälismaaTelefonikäsitleja: Number mis algab ${p.substring(0, 3)} on Argentina telefoni number.`;
        }
        return super.handle(p);
    }
}

// clientCode on tehtud nii, et see töötab üksiku käsitlejaga. Enamus ajast see ei tea et käsitleja on osa ahelast.
function clientCode(käsitleja: Käsitleja<string, string>) {
    const paringud = ['112', '+3725555555', '+971111234567', 'hädaabi teenused'];

    for (const päring of paringud) {
        console.log(`Klient: Kes teab mis number on ${päring}?`);

        const tulemus = käsitleja.handle(päring);
        if (tulemus) {
            console.log(`   ${tulemus}`);
        } else {
            console.log(`  '${päring}' ei suutnud keegi lahendada.`);
        }
    }
}

//clientCode tegeliku ahela loomine
const hädaabi = new Hädabikäsitleja();
const eesti = new Telefonikäsitleja();
const valismaa = new VälismaaTelefoniKäsitleja();

hädaabi.setNext(eesti).setNext(valismaa);

//kleint peaks saama saata päringu ükskõik mis käsitlejale mitte just esimesele ahelas
console.log('Ahel: Hädaabi > Eesti > Välismaa\n');
clientCode(hädaabi);
console.log('');

console.log('Alamahel: Eesti > Välismaa\n');
clientCode(eesti);
