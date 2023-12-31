const navigation = document.createElement("template");
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
<style>
.vignetteNav {
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 212, 255, 0) 80%
    );
  }
  .iconDark {
    color: white;
  }
  input.transparent-input {
    background-color: rgba(0, 0, 0, 0) !important;
    border: none !important;
  }
  .form-control::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white !important;
    opacity: 1; /* Firefox */
  }
  
  .form-control:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: white !important;
  }
  
  .form-control::-ms-input-placeholder {
    /* Microsoft Edge */
    color: white !important;
  }
</style>

<nav class="position-sticky vignetteNav sticky-top mx-0 my-0 pt-3 pb-5">
      <div class="navbar navbar-expand-lg">
        <div class="container mx-auto">
          <div class="align-items-center flex-grow-1 w-nav">
            <img
              src="src/logo.png"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            <a class="navbar-brand text-white" href="#"> Moviever</a>
          </div>
          <button
            class="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse pt-2" id="navbarNavAltMarkup">
            <form class="d-flex flex-row" style="min-width: 250px" role="search">
              <div class="input-group">
                <input
                  class="form-control border rounded-pill bg-transparent"
                  type="search"
                  placeholder="search"
                  id="example-search-input"
                />
                <span class="input-group-append">
                  <button
                    class="btn bg-transparent iconDark border-0 ms-n5"
                    type="button"
                  >
                    <i class="bi bi-search"></i>
                  </button>
                </span>
              </div>
            </form>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-2 ps-4">
              <li class="nav-item">
                <a class="nav-link d-flex justify-content-center" aria-current="page" href="index.html"
                  ><i class="bi bi-house iconDark"></i
                ></a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex justify-content-center" href="#"
                  ><i class="bi bi-fire iconDark"></i
                ></a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex justify-content-center" href="profile.html">
                  <i class="bi bi-person iconDark"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>`;

class navBar extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }

  render() {}
}
window.customElements.define("nav-bar", navBar);
