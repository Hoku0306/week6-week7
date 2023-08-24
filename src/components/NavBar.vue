<template>
  <div class="border-bottom border-dark border-3">
    <nav class="navbar navbar-expand-lg py-6 position-relative">
      <div class="container">
        <RouterLink to="/">
          <img src="/public/images/logo.png" alt="logo" class="me-md-4 me-0" />
        </RouterLink>
        <h1 class="fs-8 me-1 d-none d-md-block">7TAO</h1>
        <h2 class="fs-4 me-12 d-none d-md-block">活動訂票網</h2>
        <form class="d-flex">
          <input
            class="form-control border-dark border-2 py-2 py-md-3 bg-transparent"
            type="search"
            placeholder="探索活動"
            aria-label="Search"
          />
          <button
            class="btn btn-dark px-4 d-flex align-items-center"
            type="submit"
          >
            <i class="icofont-search-1 fs-5 text-primary"></i>
          </button>
        </form>
        <button
          class="navbar-toggler navBtn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse navToggle mt-6 pb-6 px-3"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ms-auto">
            <li class="nav-item me-6 mb-lg-0 mb-4">
              <button
                type="button"
                class="register border-0 registerBtn p-0"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i class="icofont-ui-file fs-5 me-1"></i>REGISTER
              </button>
              <!-- modal fade-->
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div
                    class="modal-content rounded-0 d-flex flex-column align-items-center"
                  >
                    <div
                      class="d-flex justify-content-center position-relative border-bottom border-2 border-dark w-100"
                    >
                      <h5
                        class="modal-title py-4 fontNsif fw-bold"
                        id="exampleModalLabel"
                      >
                        立刻成為7TAO會員
                      </h5>
                      <button
                        type="button"
                        class="btn-close position-absolute"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body text-center pt-8 pt-lg-12">
                      立刻成為七逃會員，加速活動報名流程並取得活動優惠資訊。<br />
                      您也可以先報名活動，日後再註冊帳號，<br />
                      系統會在認證您的Email後，協助您找回舊的訂單。
                    </div>
                    <RouterLink
                      to="/MemberShip/Login"
                      class="bg-dark text-primary mb-8 mb-lg-12 text-center py-2 px-8 signInBtn"
                      data-bs-dismiss="modal"
                      >立即成為會員</RouterLink
                    >
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <RouterLink to="/MemberShip/Login" class="register registerBtn"
                ><i class="icofont-ui-user fs-5 me-1"></i>LOGIN</RouterLink
              >
            </li>
          </ul>
        </div>
        <!-- <button type="button" class="btn text-dark register" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="icofont-ui-file fs-5 me-1"></i>REGISTER</button> -->
        <!-- <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mt-6" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item me-6 mb-4">
              <RouterLink to="/MemberShip/Register" class="text-dark register"
                ><i class="icofont-ui-file fs-5 me-1"></i>REGISTER</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/MemberShip/Login" class="text-dark register"
                ><i class="icofont-ui-user fs-5 me-1"></i>LOGIN</RouterLink
              >
            </li>
          </ul>
        </div> -->
      </div>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
import { Modal } from "bootstrap/dist/js/bootstrap.bundle.min.js";

onMounted(() => {
  const navToggle = document.querySelector(".navToggle");
  const btn = document.querySelector(".navBtn");

  btn.addEventListener("click", function () {
    if (navToggle) {
      navToggle.classList.toggle("navDropdown");
    }
  });

  const modalElement = document.getElementById("exampleModal");
  const modal = new Modal(modalElement);

  const registerBtn = document.querySelector(".registerBtn");
  registerBtn.addEventListener("click", function () {
    modal.show();
  });
});
</script>

<style lang="scss" scoped></style>
