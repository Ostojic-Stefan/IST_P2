import Observable from "./types/Observable.js";

export enum State { LIST, INPUT }

export class ApplicationState extends Observable<State> {
    private state: State = State.LIST;

    updateListeners(t : State): void {
        for(let listener of this.listeners) {
            listener(t);
        }
    }

    changeState(state: State): void {
        this.state = state;
        this.updateListeners(this.state);
    }

    currentState() {
        return this.state;
    }

}