const template = document.createElement("template");
template.innerHTML = `
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
crossorigin="anonymous"
/>
<style>
.cardGradient {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 212, 255, 0) 80%
  );
}
</style>

<div class="card w-100 border-0">
<img class="card-img-top" />
<div
  class="card-img-overlay d-flex flex-column justify-content-end text-white cardGradient"
>
  <h4 class="card-title fs-5"></h4>
  <p class="card-text fs-6"></p>
</div>
<a class="card-img-overlay" href="#"></a>
</div>`;

class movieCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("img").src = this.getAttribute("poster");
    this.shadowRoot.querySelector("h4").innerText =
      this.getAttribute("movieTitle");
    this.shadowRoot.querySelector("p").innerText = this.getAttribute("year");
    this.shadowRoot.querySelector("a").href = this.getAttribute("targetLink");
  }

  connectedCallback() {
    this.render();
  }

  render() {}
}
window.customElements.define("movie-card", movieCard);
