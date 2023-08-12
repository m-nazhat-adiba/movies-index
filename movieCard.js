const template = document.createElement("template");
template.innerHTML = `
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
<button type="button" class="btn btn-link p-0" data-bs-toggle="modal" data-bs-target="#notificationModal">
<i class="position-absolute bi bi-bookmark-plus-fill" style="font-size: 32px; left: -2px; top: -10px"></i>
</button>
</div>`;

class movieCard extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
    this.querySelector("img").src = this.getAttribute("poster");
    this.querySelector("h4").innerText = this.getAttribute("movieTitle");
    this.querySelector("p").innerText = this.getAttribute("year");
    this.querySelector("a").href = this.getAttribute("targetLink");
  }

  connectedCallback() {
    this.render();
  }

  render() {}
}
window.customElements.define("movie-card", movieCard);
