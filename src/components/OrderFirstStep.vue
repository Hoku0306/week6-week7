<template>
  <div class="container">
    <!-- progress -->
    <section class="orderProgress row mt-16">
      <ul
        class="col-lg-6 list-unstyled d-flex mx-auto justify-content-between fontNsif fw-bold mb-0"
      >
        <li class="d-flex flex-column align-items-center position-relative">
          <span
            class="firstSection active mb-2 border border-1 border-dark d-flex justify-content-center align-items-center"
            >1</span
          >訂單確認
        </li>
        <li class="d-flex flex-column align-items-center position-relative">
          <span
            class="firstSection mb-2 border border-1 border-dark d-flex justify-content-center align-items-center"
            >2</span
          >結帳付款
        </li>
        <li class="d-flex flex-column align-items-center position-relative">
          <span
            class="mb-2 border border-1 border-dark d-flex justify-content-center align-items-center"
            >3</span
          >訂購結果
        </li>
      </ul>
    </section>
    <!-- order -->
    <section class="firstStep row">
      <div class="col-lg-6 mx-auto">
        <h2 class="fontNsif mt-12 mb-8 text-center">返老還童-制服聯誼</h2>
        <div class="list">
          <p
            class="py-2 border-top border-2 border-dark d-flex justify-content-between fontNsif fw-bold"
          >
            日期<span class="fontNs fw-normal">2023/5/21</span>
          </p>
          <p
            class="py-2 border-top border-dark d-flex justify-content-between fontNsif fw-bold"
          >
            票種<span class="fontNs fw-normal">改頭換面（含大改造）</span>
          </p>
          <p
            class="py-2 border-top border-bottom border-dark d-flex justify-content-between fontNsif fw-bold"
          >
            票價<span class="fontNs fw-normal">$8000</span>
          </p>
        </div>
        <div class="userInfo mt-12 mb-16">
          <h3
            class="d-flex flex-column align-items-center fontNsif fw-bold mb-4"
          >
            <img
              src="/public/images/sparkler.png"
              alt="star"
              class="mb-4"
              width="32"
              height="32"
            />聯絡人資料
          </h3>
          <form class="d-flex flex-column">
            <label for="name" class="mb-2">聯絡人姓名</label>
            <input
              type="text"
              class="rounded-0 bg-transparent border-2 border-dark border py-2 px-4 mb-4"
              id="name"
              placeholder="請輸入聯絡人名稱"
            />
            <label for="email" class="mb-2">Email</label>
            <input
              type="email"
              class="rounded-0 bg-transparent border-2 border-dark border py-2 px-4 mb-4"
              id="email"
              placeholder="請輸入Email"
            />
            <label for="phone" class="mb-2">手機</label>
            <input
              type="tel"
              class="rounded-0 bg-transparent border-2 border-dark border py-2 px-4 mb-4"
              id="phone"
              placeholder="請輸入手機號碼"
            />
          </form>
          <RouterLink
            to="/Order/SecondStep"
            class="bg-black d-block mt-8 mb-4 text-center fw-bold text-white py-2 mx-auto"
          >
            確認表單資料<i class="icofont-rounded-double-right"></i
          ></RouterLink>
          <a href="#" class="d-block text-center mx-auto">取消購票</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped></style>
