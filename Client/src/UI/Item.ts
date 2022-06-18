// import Preduzece from "../Preduzece";
import IRenderable from "../types/IRenderable";
import Component from "./Component";

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