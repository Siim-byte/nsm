// mingisusguse kauge teenuse liides:
interface kolmandaOsapooleYoutubeTeenus {
    loetleVideod(): string[];
    loeVideoInfo(id: string): string;
    laeVideoAlla(id: string): void;
}

// Päristeenus
class kolmandaOsapooleYoutubeClass implements kolmandaOsapooleYoutubeTeenus {
    loetleVideod(): string[] {
        console.log("Loen videod youtubelt")
        return ["Video1", "Video2", "Video3"]
    }
    loeVideoInfo(id: string): string {
        console.log(`hangin info video ${id} kohta`)
        return `siin on info ${id} kohta abklbwkjfb`;
    }
    laeVideoAlla(id: string): void {
        console.log(`laen alla videot ${id} youtuubist`)
    }
}

// Proxy, mis vahendab päristeenust kliendlie
class ProxyKlassYoutbeTeenusele implements kolmandaOsapooleYoutubeTeenus {
    private teenus: kolmandaOsapooleYoutubeTeenus;
    private loendiPuhver: string[] | null = null;
    private videoPuhver: Map<string, string> = new Map();
    private allalaetudVideod: string[] = [];
    vajabVärskendust: boolean = false;

    constructor(teenus: kolmandaOsapooleYoutubeTeenus) {
        this.teenus = teenus;
    }
    loetleVideod(): string[] {
        if (this.loendiPuhver === null || this.vajabVärskendust){
            this.loendiPuhver = this.teenus.loetleVideod();
        }
        else{
            console.log("Videod tulevad puhvrist")
        }
        return this.loendiPuhver;
    }
    loeVideoInfo(id: string): string {
        const puhverdatudVideo = this.videoPuhver.get(id);
        if (puhverdatudVideo === undefined || this.vajabVärskendust) {
            const info = this.teenus.loeVideoInfo(id);
            this.videoPuhver.set(id, info);
            return info;
        }
        console.log(`Info video ${id} jaoks tuleb puhvrist`)
        return puhverdatudVideo;
    }
    laeVideoAlla(id: string): void {
        const jubaAllalaetudVideo = this.allalaetudVideod.includes(id);
        if(!jubaAllalaetudVideo || this.vajabVärskendust) {
            this.teenus.laeVideoAlla(id);
            this.allalaetudVideod.push(id);
        }
        else {
            console.log(`See video ${id}`)
        }
    }
    
}