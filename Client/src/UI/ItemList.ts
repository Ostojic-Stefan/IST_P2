// import Preduzece from "../Preduzece.js";
// import Component from "./Component.js";
// import Item from "./Item.js";

// export default class ItemList extends Component<HTMLDivElement> {

//     private hostElement: HTMLDivElement;

//     constructor(
//         hostElementId: string,
//         templateId: string,
//         private data: Array<Preduzece>
//     ) {
//         super(templateId);

//         this.hostElement = document.getElementById(hostElementId) as HTMLDivElement;

//         this.attach();

//         this.render();
//     }

//     render(): void {
//         this.data.forEach(d => {
//             new Item('single-item', d);
//         });
//     }
    
//     private attach(): void {
//         this.hostElement.insertAdjacentElement('beforeend', this.element);
//     }

// }