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
            ><i class="icofont-check-circled"></i
          ></span>
        </li>
        <li class="d-flex flex-column align-items-center position-relative">
          <span
            class="firstSection mb-2 border active border-1 border-dark d-flex justify-content-center align-items-center"
            ><i class="icofont-check-circled"></i></span
          >結帳付款
        </li>
        <li class="d-flex flex-column align-items-center position-relative">
          <span
            class="mb-2 active border border-1 border-dark d-flex justify-content-center align-items-center"
            >3</span
          >訂購結果
        </li>
      </ul>
    </section>
    <!-- order -->
    <section class="thirdStep row">
      <div class="col-lg-6 mx-auto">
        <h2 class="fontNsif mt-12 mb-8 text-center d-flex flex-column">
          <i class="icofont-check-circled mb-2"></i>訂購成功
        </h2>
        <div class="list mb-4">
          <p
            class="py-2 border-top border-2 border-dark d-flex justify-content-between fontNsif fw-bold"
          >
            訂單編號<span class="fontNs fw-normal">892746123</span>
          </p>
          <p
            class="py-2 border-top border-dark d-flex justify-content-between fontNsif fw-bold"
          >
            訂票時間<span class="fontNs fw-normal">2023/04/28 14:30</span>
          </p>
          <p
            class="py-2 border-top border-bottom border-dark d-flex justify-content-between fontNsif fw-bold"
          >
            票券<span class="fontNs fw-normal"
              >改頭換面票（含大改造）$8000</span
            >
          </p>
          <p
            class="py-2 border-top border-bottom border-dark d-flex justify-content-between fontNsif fw-bold"
          >
            取票序號<span class="fontNs fw-normal textRed">95G54J4434</span>
          </p>
          <p
            class="py-2 border-top border-bottom border-dark d-flex justify-content-between fontNsif fw-bold"
          >
            取票號碼<span class="fontNs fw-normal textRed">04597101</span>
          </p>
        </div>
        <p class="fs-4 textGray mb-16">
          請至 7-Eleven 完成取票，請於 ibon
          點選【購票/取票/訂房】>【售票系統】>【取票】>【拓元售票系統】。 <br />
          若您未前往取票，本筆交易仍視為完成，不可取消訂單。
          若需退票，請按照退票辦法進行申請。
        </p>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
