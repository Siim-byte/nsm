
// Hetkel abstraktne tehase liides, ütleb et on järgnevad meetodid mis tagastavad erinevaid abstraktseid tooteid. Neid nimetatakse perekonnaks ja nad sarnanevad üksteisega kõrgetasemelise kontseptsiooni abil.
//Ühe perekonna tooted tavaliselt on koostöövõimelised. Ühel tooteperekonnal võib olla mitu erinevat varianti, aga ühe variandi tooted ei ole teise variandiga ühilduvad.

interface AbstractFactory {

    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;

}

//Kindlad tehased toodavad perekonnatooteid mis kuuluvad ühe variandi juurde. Tehas garanteerib et valminud tooted on ühilduvad. Meetodite signatuurid tagastavad abstraktse toote "AbstractProductA/B" aga meetod ise paneb paika selle täpse toote.

class ConcreteFactory1 implements AbstractFactory {
    public createProductA() : AbstractProductA
    {
        return new ConcreteProductA1();
    }
    public createProductB() : AbstractProductB 
    {        
        return new ConcreteProductB1();
    }

}
//igal tehasel on vastavad tootevariandid.
class ConcreteFactory2 implements AbstractFactory {
    public createProductA() : AbstractProductA
    {
        return new ConcreteProductA2();
    }
    public createProductB() : AbstractProductB 
    {        
        return new ConcreteProductB2();
    }

}

//Igal eraldiseisval lõpptootel tooteperekonnas peaks olema oma lähteliides, kõik selle toote variandid peavad selle liidese endasse implementeerima
interface AbstractProductA {
    kasulikFunktsioonA(): string;
}
//neid tooteid väljastab iga vastav tehas
class ConcreteProductA1 implements AbstractProductA {
    public kasulikFunktsioonA(): string {
        return "toote A1 väljastus"
    }
}
class ConcreteProductA2 implements AbstractProductA {
    public kasulikFunktsioonA(): string {
        return "toote A2 väljastus"
    }
}

//teise toote abstraktne liides. Kõik tooted saavad üksteisega koostööd teha, aga korralik suhtlus on toodete vahel ainult võimalik sama kindla variandi toodetel.

interface AbstractProductB 
{
    // toote b omane tegevus
    kasulikFunktsioonB(): string;
    //aga ka koostöövõime toote A-ga
    teineKAsulikFunktsioonB(collaborator: AbstractProductA): string;
}

//ka need tooted on väljastatud neile vastavate tehaste poolt
class ConcreteProductB1 implements AbstractProductB 
{
    public kasulikFunktsioonB(): string {
        return "toote B1 väljastus";
    }
    //toode b1 variant töötab õigesti ainult koos variandi A1 tootega. sellegipoolest saab vastu võtta ükskõik mis AbstractProductA argumendina sisse.
    public teineKAsulikFunktsioonB(collaborator: AbstractProductA): string {
        const result = collaborator.kasulikFunktsioonA();
        return `b1 koostöö tulemuseks on ${result}`;
    }
}
class ConcreteProductB2 implements AbstractProductB 
{
    public kasulikFunktsioonB(): string {
        return "toote B2 väljastus";
    }
    //toode b2 variant töötab õigesti ainult koos variandi A2 tootega. sellegipoolest võetakse ka siin vastu ükskõik mis AbstractProductA objekti argumendina sisse.
    public teineKAsulikFunktsioonB(collaborator: AbstractProductA): string {
        const result = collaborator.kasulikFunktsioonA();
        return `b2 koostöö tulemuseks on ${result}`;
    }
}

//klientkood töötab tehaste ja nende toodetega ainult läbi abstraktsete tüüpide (AbstractFactory ja AbstractProduct), sedaviisi saab anda edasi ükskõik millist tehast võu toote alamklassi klientkoodile ilma seda katki tegemata.
function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
    console.log(productB.kasulikFunktsioonB());
    console.log(productB.teineKAsulikFunktsioonB(productA))
}

//klientkood töötab ükskõik milliste tehastetüüpidega
console.log('Klient: testin esimest tehast');
clientCode(new ConcreteFactory1());

console.log('Klient: testin teist tehast sama koodiga');
clientCode(new ConcreteFactory2());