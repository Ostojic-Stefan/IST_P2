// import Preduzece from "../Preduzece.js";
import IRenderable from "../types/IRenderable.js";
import Component from "./Component.js";

export default class Item<T extends IRenderable<HTMLDivElement>> extends Component<HTMLDivElement, HTMLDivElement> {
    
    private item: T;

    constructor(hostElementId: string, item: T) {
        super('single-item', hostElementId);
        this.item = item;

        this.render();
    }

    render(): void {
        this.item.render(this.element);
    }
}