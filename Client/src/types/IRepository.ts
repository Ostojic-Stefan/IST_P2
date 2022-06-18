import {Preduzece} from "../Preduzece";

export default interface IRepository {
    getState(): Array<Preduzece>;
    postPreduzece(preduzece: Preduzece): void;
}