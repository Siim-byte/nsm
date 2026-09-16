//siin on liides mis kirjeldab ära mida igat tüüpi Sõiduk tegema peaks
interface Sõiduk {
    liigu(): string;
}
//kõik sõidukid mis luuakse, peavad implementeerima *oma* "liigu()" meetodi

//auto on ühte tüüpi sõiduk
class Auto implements Sõiduk
{
    liigu(): string {
        return "auto liigub";
    }
}

//tramm on teist tüüpi sõiduk
class Tramm implements Sõiduk
{
    liigu(): string {
        return "sõidad trammiga";
    }
}

//siin on tehas mis teeb meile Sõiduk-eid
//selle asemel et koodis adresseerida eraldi klasse, nagu new Auto() 
// või new Tramm(), küsime tehaselt õiget tüüpi sõiduki.
class NormaSõidukiTehas {
    static teeSõiduk(sõidukiLiik: string): Sõiduk {
        switch (sõidukiLiik) 
        {
            case "auto":
                return new Auto();
                break;
            case "tramm":
                return new Tramm();
                break;
        
            default:
                throw new Error(`Ei oska ${sõidukiLiik} sõidukit koostada`);
        }
    }
}

//teeme auto
const sõiduvahend1: Sõiduk = NormaSõidukiTehas.teeSõiduk("auto")
console.log(sõiduvahend1.liigu());
//teeme trammi
const sõiduvahend2: Sõiduk = NormaSõidukiTehas.teeSõiduk("tramm")
console.log(sõiduvahend2.liigu());