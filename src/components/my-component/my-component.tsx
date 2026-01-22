import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /** The first name */
  @Prop() first: string;

  /** The middle name */
  @Prop() middle: string;

  /** The last name */
  @Prop() last: string;

  @State() count: number = 0;

  /** Emitted when the button is clicked */
  @Event() buttonClick: EventEmitter<number>;

  private getName(): string {
    return format(this.first, this.middle, this.last);
  }

  private handleClick = () => {
    this.count++;
    this.buttonClick.emit(this.count);
  };

  render() {
    return (
      <div class="card">
        <p>Hello, World! I'm {this.getName()}</p>
        <button onClick={this.handleClick}>
          Clicked {this.count} times
        </button>
      </div>
    );
  }
}
