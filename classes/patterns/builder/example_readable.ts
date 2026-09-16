class Maja {
    aadress: string;
    korrustearv: number;
    linn: string;
    onParkimiskoht: boolean;
    onAed: boolean;

    /**
     * Base constructor
     */
    constructor(majaEhitaja: MajaEhitaja) {
        this.aadress = majaEhitaja.aadress;
        this.korrustearv = majaEhitaja.korrustearv;
        this.linn = majaEhitaja.linn;
        this.onParkimiskoht = majaEhitaja.onParkimiskoht;
        this.onAed = majaEhitaja.onAed;
    }
}
class MajaEhitaja {
    private readonly _aadress: string 
    private _korrustearv: number = 0;
    private _linn: string = "";
    private _onParkimiskoht: boolean = false;
    private _onAed: boolean = false;
    /**
     *
     */
    constructor(aadress: string) {
        this._aadress = aadress;
    }
    setKorruseid(korruseid: number) {
        this._korrustearv = korruseid
        return this;
    }
    setLinn(linn: string) {
        this._linn = linn
        return this;
    }
    ehitaParkla() {
        this._onParkimiskoht = true;
        return this;
    }
    ehitaAed() {
        this._onAed = true;
        return this;
    }
    build() {
        return new Maja(this);
    }

    get onParkimiskoht() {
        return this._onParkimiskoht;
    }
    get onAed() {
        return this._onAed;
    }
    get aadress() {
        return this._aadress;
    }
    get korrustearv() {
        return this._korrustearv;
    }
    get linn() {
        return this._linn;
    }
}

function klientKood2() {
    const muMaja = new MajaEhitaja('Sõpruse pst 182')
    .setLinn("Tallinn")
    .setKorruseid(2)
    .ehitaAed()
    .ehitaParkla()
    .build();

    console.log(muMaja)
}

klientKood2();