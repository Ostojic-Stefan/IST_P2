import Preduzece from "../Preduzece.js";

export default interface IRepository {
    allPreduzeca(): Array<Preduzece>;
    getPreduzeceByPib(pib: string): Preduzece| undefined;
    postPreduzece(preduzece: Preduzece): void;
    updatePreduzece(pib: string, preduzecePartial: Partial<Preduzece>): void;
}