export default abstract class Component<THostElement extends HTMLElement, UParentElement extends HTMLElement> {
    protected templateElement: HTMLTemplateElement;
    protected hostElement: THostElement;
    protected element: UParentElement;

    constructor(templateId: string, hostElementId: string) {
        this.templateElement = document.getElementById(templateId) as HTMLTemplateElement;
        this.hostElement = document.getElementById(hostElementId) as THostElement;
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as UParentElement;
        this.attach();
    }

    private attach() {
        this.hostElement.insertAdjacentElement('beforeend', this.element);
    }

    abstract render(): void;
}