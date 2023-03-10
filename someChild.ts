import { consume } from "@lit-labs/context";
import { html, LitElement } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { Context, IContext } from "./context";

@customElement("some-child")
export class SomeChild extends LitElement {
  @consume({ context: Context, subscribe: true })
  context: IContext;

  render() {
    console.log("context", this.context);
    return html`
      <section>
        This is inside the child, write something
        <input @input=${(e) => {
          this.context.setContext({ foo: e.target.value });
        }} .value=${this.context.foo} />
      </section>
    `;
  }
}