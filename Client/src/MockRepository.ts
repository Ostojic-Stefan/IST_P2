import Preduzece from "./Preduzece.js";
import IRepository from "./types/IRepository.js";

type Listener<T> = (items: T) => void;


abstract class Observable<T> {
    protected listeners: Array<Listener<T>> = [];

    addListenerOnCreate(listenerFn: Listener<T>) {
        this.listeners.push(listenerFn);
    }

    // addListenerOnUpdate(listenerFn: Listener<T>) {
    //     this.listeners.push(listenerFn);
    // }

    abstract updateListeners(t : T): void;
}



export default class MockRepository extends Observable<Preduzece> implements IRepository {

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


    // Observer region

    addListenerOnCreate(listener: Listener<Preduzece>) {
        this.listeners.push(listener);
    }

    addListenerOnUpdate(_listenerFn: Listener<Preduzece>): void {
        
    }
    
    updateListeners(preduzece: Preduzece): void {
        for (let listener of this.listeners) {
            listener(preduzece);
        }
    }


    // REPOSITORY region

    allPreduzeca() : Array<Preduzece> {
        return this.preduzeca;
    }
    
    getPreduzeceByPib(pib: string) : Preduzece | undefined {
        return this.preduzeca.find(p => p.pib === pib);
    }
    
    postPreduzece(preduzece: Preduzece) : void {
        this.preduzeca.push(preduzece);
        this.updateListeners(preduzece);
    }
    
    updatePreduzece(_pib: string, _preduzecePartial: Partial<Preduzece>) : void {
        // const preduzeceIndex = this.preduzeca.findIndex(p => p.pib === pib);
        // const updated = { ...this.preduzeca[preduzeceIndex], ...preduzecePartial };
        // this.preduzeca[preduzeceIndex] = updated;

        // this.updateListeners();
    }


    seedData(list: Array<Preduzece>): void {
        for (let p of list) {
            this.postPreduzece(p);
        }
    }

    // TEST

    log() {
        console.log(this.preduzeca);
    }

}
