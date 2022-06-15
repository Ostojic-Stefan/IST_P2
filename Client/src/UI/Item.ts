// import Preduzece from "../Preduzece.js";
import IRenderable from "../types/IRenderable.js";
import Component from "./Component.js";

export default class Item<T extends IRenderable<HTMLDivElement>> extends Component<HTMLDivElement> {
    private data: T;

    constructor(templateId: string, data: T) {
        super(templateId);
        this.data = data;

        this.render();
    }

    render(): void {
        console.log(this.element);
        
        this.data.render(this.element);
    }
}