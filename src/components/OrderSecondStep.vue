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
            ><i class="icofont-check-circled"></i></span
          >訂單確認
        </li>
        <li class="d-flex flex-column align-items-center position-relative">
          <span
            class="firstSection active mb-2 border border-1 border-dark d-flex justify-content-center align-items-center"
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
    <section class="secondStep row">
      <div class="col-lg-6 mx-auto">
        <h2 class="fontNsif mt-12 mb-4 text-center">返老還童-制服聯誼</h2>
        <h3
          class="bg-dark text-primary mb-8 fontFs fs-4 py-2 break text-center"
        >
          您的訂單已保留，請在2023/5/30
          04:32前完成繳費。若逾期未繳款，系統將取消您的訂單。
        </h3>
        <div class="list">
          <p
            class="py-2 border-top border-2 border-dark d-flex justify-content-between fontNsif fw-bold"
          >
            訂單編號<span class="fontNs fw-normal">892746123</span>
          </p>
          <p
            class="py-2 border-top border-bottom border-dark d-flex justify-content-between fontNsif fw-bold"
          >
            票券<span class="fontNs fw-normal"
              >改頭換面票（含大改造）$8000</span
            >
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
            />結帳資訊
          </h3>
          <form class="d-flex flex-column mb-4">
            <label for="name" class="mb-2">取票資訊</label>
            <input
              type="text"
              class="rounded-0 bg-transparent border-2 border-dark border py-2 px-4 mb-4"
              placeholder="請輸入身分證字號或護照號碼"
            />
            <p class="paymentDetail mb-4">
              請輸入您的
              <span>身分證字號</span>
              供取票使用，外籍人士請輸入
              <span>護照號碼</span>
            </p>
            <h4 class="fontNs fs-4 fw-normal mb-2">付款方式</h4>
            <div class="form-check">
              <input
                class="form-check-input rounded-circle"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                信用卡
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input rounded-circle"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                ATM虛擬帳號
              </label>
            </div>
          </form>

          <RouterLink
            to="/Order/ThirdStep"
            class="bg-black d-block mt-8 mb-4 text-center fw-bold text-white py-2 mx-auto"
          >
            確認訂單並繳費 $8000<i class="icofont-rounded-double-right"></i
          ></RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped></style>
