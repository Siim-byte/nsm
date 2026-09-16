class AutoMobile {
    mark!: string;
    mudel!: string;
    värv!: string;
    istmekohti!: number;

    /**
     *
     */
    constructor(mark: string, mudel:string, värv: string, istmeid: number ) {
        this.istmekohti = istmeid
        this.mudel = mudel
        this.värv = värv
        this.mark = mark
    }

    clone(){
        const clone = Object.create(this)
        clone.mark = this.mark
        clone.istmekohti = this.istmekohti
        clone.mudel = this.mudel
        clone.värv = this.värv
        return clone;
    }
}

function programRun3(){
    const originaal = new AutoMobile("aaa","bbb","ccc",777);
    const clone = originaal.clone();

    console.log(originaal)
    console.log(clone)
}
programRun3();