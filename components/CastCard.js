const casts = document.createElement("template");
template.innerHTML = `
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
crossorigin="anonymous"
/>

<div
class="card w-100 border-0"
style="background-color: transparent"
>
<div class="position-relative">
<img
  class="h-auto card-img-top "
  style="border-radius: 50%"
/>
<h5 class="text-white text-center pt-3 card-title"></h5>
<a class="card-img-overlay"></a>
</div>
</div>
`;

class castCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
    this.shadowRoot.querySelector("h5").innerText = this.getAttribute("name");
    this.shadowRoot.querySelector("a").href = this.getAttribute("targetLink");
  }

  connectedCallback() {
    this.render();
  }

  render() {}
}
window.customElements.define("cast-card", castCard);
