//abstraktsioon defineerib ära liidese kontrolliva osa jaoks selles kahe klassi hierarhias. See talletab endas videot objektile Implementatsioon-ile hierarhias ja delegeerib kõik päris töö Implementatsiooni klassile

class Abstraktsioon {
    protected implementatsioon: Implementatsioon
    /**
     *
     */
    constructor(implementatsioon: Implementatsioon) {
        this.implementatsioon = implementatsioon;
    }
    public operatsioon(): string {
        const tulemust = this.implementatsioon.operatsiooniImplementatsioon();
        return `Abstraktsioon: baastegevus käib sellise tulemusega:${tulemus}`
    }
}

//Abstraktsiooni saab laiendada ilma Implementatsiooni klassi muudatuseta
class LaiendatudAbstraktsioon extends Abstraktsioon {
    public operatsioon(): string {
        const tulemus = this.implementatsioon.operatsiooniImplementatsioon
        return `LaiendatudAbstraktsioon: Laiendatud operatsiooni tulemus on: ${tulemus} `
    }
}
//Implementatsioon defineerib ära liidese kõikide implementatsiooni klasside jaoks. See ei pea olema sama nagu Abstraktsioon-i liides, need kaks liidest võivad olla täielikult erinevad. Tüüpiliselt annab Implementatsiooni liides ainult primitiivsed operatsioonid, samas kui Abstraktsioon defineerib öra kõrgematasalised operatsioonid põhinedes nendele primitiividele.

interface Implementatsioon {
    operatsiooniImplementatsioon(): string;
}

//iga konkreetne Implementatsioon vastab mingisugusele kindlale platvormile ja implementeerib Implementatsiooni liidese kastades selle platvormi APIt.
class konkreetneImplementatsioonA implements Implementatsioon {
    public operatsiooniImplementatsioon(): string {
        return 'Platform A KonkreetneImplementatsioonA tulemus.'   
    }
}