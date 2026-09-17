import {Component, ComponentInterface, h} from "@stencil/core";
import {Helper} from "./helper";

@Component({
    tag: 'app-root',
    shadow: true,
})
export class App implements ComponentInterface{

    private element: HTMLMyComponent1Element|HTMLMyComponent2Element;

    componentDidLoad() {
        // this breaks at runtime
        Helper.genericFunctionUsingHTMLElement(this.element);

        // this works at runtime but breaks while transpiling
        Helper.genericFunctionUsingComponentInstance(this.element);
    }
    render() {
        if(Math.random() > 0.5) {
           return <my-component-1 ref={(element) => this.element = element!}></my-component-1>
        }else {
           return <my-component-2 ref={(element) => this.element = element!}></my-component-2>
        }
    }
}
