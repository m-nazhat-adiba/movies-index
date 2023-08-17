const videocard = document.createElement("template");
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

<div
class="card w-100 border-0"
style="background-color: transparent"
>
<div class="position-relative">
<img
  class="card-img-top"
/>
<div
  class="card-img-overlay d-flex flex-column text-white justify-content-center"
>
  <div
    class="d-flex flex-row align-items-center justify-content-center "
  >
    <i class="bi bi-play-circle" style="font-size: 2rem"></i>
    <p class="card-text fs-5 ps-2 len"></p>
  </div>
</div>
</div>
<a class="card-img-overlay"></a>
<h4 class="card-title fs-5 text-white"></h4>
<p class="card-text fs-6 text-white date"></p>
</div>
`;

class videoCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("img").src = this.getAttribute("thumbnail");
    this.shadowRoot.querySelector("h4").innerText =
      this.getAttribute("movieTitle");
    this.shadowRoot.querySelector(".date").innerText =
      this.getAttribute("date");
    this.shadowRoot.querySelector(".len").innerText = this.getAttribute("len");
    this.shadowRoot.querySelector("a").href = this.getAttribute("targetLink");
  }

  connectedCallback() {
    this.render();
  }

  render() {}
}
window.customElements.define("video-card", videoCard);
