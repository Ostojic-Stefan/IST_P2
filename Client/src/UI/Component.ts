export default abstract class Component<TParentElement extends HTMLElement> {
    // Single Item
    protected templateElement: HTMLTemplateElement;

    // First child element of the template
    protected element: TParentElement;

    constructor(templateId: string) {
        this.templateElement = document.getElementById(templateId) as HTMLTemplateElement;

        const importedNode = document.importNode(this.templateElement.content, true);

        this.element = importedNode.firstElementChild as TParentElement;
    }

    abstract render(): void;
}