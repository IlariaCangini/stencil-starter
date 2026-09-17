import {MyComponent1} from "./my-component-1";
import {MyComponent2} from "./my-component-2";

export class Helper {

  static genericFunctionUsingHTMLElement(a: HTMLMyComponent1Element | HTMLMyComponent2Element): void {
    /*
      This breaks at runtime because HTMLMyComponent1Element is not defined.
      ReferenceError: HTMLMyComponent1Element is not defined
      at Helper.genericFunctionUsingHTMLElement (helper.ts:7:21)
      at HTMLElement.componentDidLoad (app.tsx:14:16)
    */
    if (a instanceof HTMLMyComponent1Element) {
      a.myMethod1();
      return;
    }

    a.myMethod2();
  }

  static genericFunctionUsingComponentInstance(a: MyComponent1 | MyComponent2): void {
    if (a instanceof MyComponent1) {
      a.myMethod1();
      return;
    }

    a.myMethod2();
  }
}
