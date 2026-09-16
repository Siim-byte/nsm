//singletoni klass defineerib ära instansi hankija, see laseb klientidel juurde pääseda sellele unikaalsele ainsale singletonile
class singleton{
    static #instance: singleton;

    //singletoni enda vaikekonstruktor peaks olema alati privaatne, et vältida "new" operaatori kasutamist, mis muidu asendab eksisteeriva singletoni uuega.
    private constructor() {
        
    }

    //staatiline gettermeetod mis kontrollib juurdepääsu sellele ainsale instantsile. Selline implementatsioon laseb laiendada singletoni klassi, samas hoides ainult ühte instantsi mälus ükskõik millisel ajahetkel
    public static get instance(): singleton{
        if (!singleton.#instance) {
            singleton.#instance = new singleton()
        }
        return singleton.#instance
    }

    public someMethod() {/* shit bein dun */}
}

function klientKood4(){
    const single1 = singleton.instance;
    const single2 = singleton.instance;

    if (single1 === single2){
        console.log("Singletoni instantsid on identsed, esile kutsutud eksisteeriv singleton")
    }
    else{
         console.log("Instantsid erinevad, Singletoni loomine nurjus")
    }
}

klientKood4();