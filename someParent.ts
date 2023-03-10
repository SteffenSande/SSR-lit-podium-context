import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { Context, IContext } from "./context";
import './someChild';
import { provide } from "@lit-labs/context";

@customElement("some-parent")
export class SomeParent extends LitElement {
  @provide({ context: Context })
  @state()
  context: IContext = {
    foo: "bar",
    setContext: (context) => {
      this.context = { ...this.context, ...context };
    },
    reset: () => {
      this.context = {
        ...this.context,
        foo: "bar"
      };
    },
  };

  render() {
    return html`
      <section>
        In parent show: ${this.context.foo}
      </section>
      <some-child></some-child>
    `;
  }
}
