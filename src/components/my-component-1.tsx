import {Component, ComponentInterface, Element, Method} from "@stencil/core";

@Component({
    tag: 'my-component-1',
    shadow: true,
})
export class MyComponent1 implements ComponentInterface{
    @Element() host: HTMLMyComponent1Element;

    @Method()
    async myMethod1(): Promise<void> {
        console.log('MyComponent1 method called');
    }

    render() {
    }
}
