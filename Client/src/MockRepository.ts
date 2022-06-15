import Preduzece from "./Preduzece.js";
import IRepository from "./types/IRepository.js";
import Observable from "./types/Observable.js";

export default class MockRepository extends Observable<Array<Preduzece>> implements IRepository {

    private constructor() {
        super();
    }

    private preduzeca: Array<Preduzece> = [];

    // Singleton

    static instance: MockRepository;

    static getInstance() {
        if (this.instance) return this.instance;
        this.instance = new MockRepository();
        return this.instance;
    }


    // Observer

    updateListeners(preduzeca: Array<Preduzece>): void {
        for (let listener of this.listeners) {
            listener(preduzeca);
        }
    }


    // REPOSITORY

    allPreduzeca() : Array<Preduzece> {
        return this.preduzeca;
    }
    
    getPreduzeceByPib(pib: string) : Preduzece | undefined {
        return this.preduzeca.find(p => p.pib === pib);
    }
    
    postPreduzece(preduzece: Preduzece) : void {
        this.preduzeca.push(preduzece);
        this.updateListeners(this.preduzeca.slice());
    }
    
    updatePreduzece(pib: string, preduzecePartial: Partial<Preduzece>) : void {
        const foundObj = this.preduzeca[this.preduzeca.findIndex(p => p.pib === pib)];

        if (foundObj) foundObj.update(preduzecePartial);

        this.updateListeners(this.preduzeca);
    }


    seedData(list: Array<Preduzece>): void {
        for (let p of list) {
            this.postPreduzece(p);
        }
    }
}
