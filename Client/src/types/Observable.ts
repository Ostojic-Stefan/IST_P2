import { Listener } from "../Utils";

export default abstract class Observable<T> {
    protected listeners: Array<Listener<T>> = [];

    addListener(listenerFn: Listener<T>) {
        this.listeners.push(listenerFn);
    }

    // This could be implemented here aswell
    abstract updateListeners(t : T): void;
}
