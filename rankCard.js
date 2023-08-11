const rankcard = document.createElement("template");
template.innerHTML = `
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
crossorigin="anonymous"
/>
<link
rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
/>

<div class="card mb-3 border-0" style="background-color: transparent">
  <div class="row g-0">
    <div class="col-md-2">
      <img class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-10">
      <div class="card-body text-white">
        <h5 class="card-title"></h5>
        <p class="card-text">Genre</p>
      </div>
    </div>
  </div>
</div>
`;

class rankCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("img").src = this.getAttribute("thumbnail");
    this.shadowRoot.querySelector(".card-title").innerText =
      this.getAttribute("movieTitle");
  }

  connectedCallback() {
    this.render();
  }

  render() {}
}
window.customElements.define("rank-card", rankCard);
