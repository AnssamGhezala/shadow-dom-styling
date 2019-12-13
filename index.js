// Select my element
const el = document.body.querySelector("my-element")

// Attack shadow dom mode: open or closed
el.attachShadow({ mode: "closed" });

// Get the shadow root
const shadowRoot = el.shadowRoot;

if (shadowRoot) {
  shadowRoot.innerHTML = `
  <style>
    :host { /* Selects a shadow root host,*/
      all: initial; /* Specifies that all the element's properties should be changed to their initial values. */
      display: flex;
      flex-direction: column;
      background: black;
      font-size: 2.5rem;
    }
    label {
      color: white;
    }
  </style>
  <div>
    <label>Who's there?</label>
  </div>
`;
}
