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
<div class="card-body text-white px-0 ">
  <div class="row g-0">
    <div class="col-md-2 col-sm-2 col-xs-2">
      <img class="object-fit-cover rounded-start w-100 h-auto" alt="...">
    </div>
    <div class="col-md-1 col-sm-1 col-xs-1"></div>
    <div class="col-md-9 col-sm-9 col-xs-9">
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
