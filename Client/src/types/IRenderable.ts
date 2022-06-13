export default interface IRenderable<T extends HTMLElement> {
    render(el: T): void;
}