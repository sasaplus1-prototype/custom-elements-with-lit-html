import { html } from './lit-html/lit-html.js';
import { render } from './lit-html/lib/lit-extended.js';

export default class XHello extends HTMLElement {
  constructor() {
    super();

    this.handleInput = this.onInput.bind(this);
    this.value = 'Hello';
  }

  connectedCallback() {
    this.attachShadow({
      mode: 'open',
    });

    this.render();
  }

  html() {
    return html`
      <div>
        <input type="text" value="${this.value}" on-input="${this.handleInput}" />
        <br />
        <span>${this.value}</span>
      </div>
    `;
  }

  render() {
    render(
      this.html(),
      this.shadowRoot
    );
  }

  onInput(event) {
    const [ input ] = event.path;

    this.value = input.value;
    this.render();
  }
}

customElements.define('x-hello', XHello);
