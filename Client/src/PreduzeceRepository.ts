import { Preduzece, IPreduzece } from "./Preduzece";
import IRepository from "./types/IRepository";
import Observable from "./types/Observable";
import axios from "../node_modules/axios/index";

export default class PreduzeceRepository extends Observable<Array<Preduzece>> implements IRepository {

    private baseUrl = 'https://localhost:7021/api';

    private constructor() {
        super();
        this.getData();
    }

    private preduzeca: Array<Preduzece> = [];
    private currentStatePreduzeca: Array<Preduzece> = [];

    // Singleton

    static instance: PreduzeceRepository;

    static getInstance() {
        if (this.instance) return this.instance;
        this.instance = new PreduzeceRepository();
        return this.instance;
    }

    // Observer

    updateListeners(currentStatePreduzeca: Array<Preduzece>): void {
        for (let listener of this.listeners) {
            listener(currentStatePreduzeca);
        }
    }

    // Repository

    getPreduzeceByPib(pib: string): Preduzece {
        return this.preduzeca.filter(p => p.pib === pib)[0];
    }

    filter(option: string, value: string) {
        if (option === "pib")
            this.currentStatePreduzeca = this.preduzeca.filter(p => p.pib === value);
            
        else if (option === 'naziv')
            this.currentStatePreduzeca = this.preduzeca.filter(p => p.naziv === value);

        console.log(this.currentStatePreduzeca);
        this.updateListeners(this.currentStatePreduzeca);
    }

    resetState() {
        this.currentStatePreduzeca = this.preduzeca;
    }

    getState() : Array<Preduzece> {
        return this.currentStatePreduzeca;
    }
    
    postPreduzece(preduzece: IPreduzece) : void {
        this.postData(preduzece);
    }
    
    seedData(list: Array<Preduzece>): void {
        for (let p of list) {
            this.postPreduzece(p);
        }
    }
    
    private async getData(): Promise<void> {
        const { data } = await axios.get<Array<IPreduzece>>(`${this.baseUrl}/Preduzece`);
        this.preduzeca = Preduzece.ConstructPreduzeceArray(data);

        this.currentStatePreduzeca = this.preduzeca;
        this.updateListeners(this.currentStatePreduzeca);
    }

    private async postData(preduzece: IPreduzece): Promise<void> {
        try {
            await axios.post<string>(`${this.baseUrl}/Preduzece`, {
                ...preduzece
            });
            const constructed = Preduzece.ConstructPreduzece(preduzece);

            this.preduzeca.push(constructed);
            this.currentStatePreduzeca.push(constructed);
            this.updateListeners(this.currentStatePreduzeca);

        } catch (err) {
            console.log(MediaError);
        }
    }

    async updateData(pib: string, preduzece: IPreduzece): Promise<void> {
        try {
            await axios.put<string>(`${this.baseUrl}/Preduzece/${pib}`, {
                ...preduzece
            });

            this.getData();
            
        } catch(err) {
            
        }
    }

}