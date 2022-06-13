import Preduzece from "./Preduzece.js";
import IRepository from "./types/IRepository.js";


export default class MockRepository implements IRepository {

    constructor(private preduzeca: Array<Preduzece>) {}

    allPreduzeca() : Array<Preduzece> {
        return this.preduzeca;
    }
    
    getPreduzeceByPib(pib: string) : Preduzece | undefined {
        return this.preduzeca.find(p => p.pib === pib);
    }
    
    postPreduzece(preduzece: Preduzece) : void {
        this.preduzeca.push(preduzece);
    }
    
    updatePreduzece(pib: string, preduzecePartial: Partial<Preduzece>) : void {
        const preduzeceIndex = this.preduzeca.findIndex(p => p.pib === pib);
        const updated = { ...this.preduzeca[preduzeceIndex], ...preduzecePartial };
        this.preduzeca[preduzeceIndex] = updated;
    }
}




