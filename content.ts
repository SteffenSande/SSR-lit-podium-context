import { html } from "lit";
// @ts-ignore
import { PodiumElement } from "@podium/experimental-podium-element";
import './someParent';


export default class Content extends PodiumElement {
  initialState: { name: string }[];

  render() {
    return html`
      <section>
        <section>
          <h1>List of countries</h1>
          <ul>
            ${this.initialState.map(({ name }) => html`<li>${name}</li>`)}
          </ul>
        </section>
        <some-parent></some-parent>
      </section>
    `;
  }
}
