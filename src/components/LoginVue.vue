<template>
  <section class="container">
    <div class="row login">
      <div class="col-xl-6 mx-auto">
        <div class="header d-flex flex-column align-items-center mt-md-16 mt-6 mb-4">
          <img src="/public/images/sparkler.png" alt="star" />
          <h2>會員登入</h2>
        </div>
        <form class="d-flex flex-column">
          <label for="accout" class="mb-2">帳號</label>
          <input
            type="text"
            placeholder="請輸入會員帳號"
            class="mb-4 rounded-0 border border-2 border-dark text-gray py-2 px-4"
          />
          <label for="password" class="mb-2">密碼</label>
          <input
            type="text"
            placeholder="請輸入密碼"
            class="rounded-0 border border-2 border-dark text-gray py-2 px-4"
          />
          <button type="button" class="btn btn-dark mt-8 fw-bold">
            登入<i class="icofont-rounded-double-right"></i>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
