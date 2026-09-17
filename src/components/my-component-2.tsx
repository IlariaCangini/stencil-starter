import {Component, ComponentInterface, Element, Method} from "@stencil/core";

@Component({
    tag: 'my-component-2',
    shadow: true,
})
export class MyComponent2 implements ComponentInterface{
    @Element() host: HTMLMyComponent2Element;

    @Method()
    async myMethod2(): Promise<void> {
        console.log('MyComponent2 method called');
    }

    render() {
    }
}
















