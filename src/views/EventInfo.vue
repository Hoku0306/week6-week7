<template>
  <div class="container">
    <!-- banner -->
    <section class="eventBanner d-flex mt-8 row">
      <div class="col-lg-10">
        <img
          src="/public/images/event/09.jpg"
          alt="eventBanner"
          class="img-fluid border border-3 border-dark p-6"
        />
      </div>
      <div class="date col-lg-2 d-flex flex-lg-column mt-6 mt-lg-0">
        <h2
          class="border border-3 border-dark py-4 py-xxl-8 px-xxl-10 py-6 px-4 text-center me-2 d-flex align-items-center justify-content-center"
        >
          2023
        </h2>
        <div
          class="d-flex flex-lg-column position-relative border border-3 border-dark mt-lg-6 fontYo align-items-center justify-content-between py-lg-10 flex-grow-1 py-3 px-6"
        >
          <h3 class="text-center">MAY<br />19</h3>

          <p class="slash"></p>
          <div class="text-center">
            <h4 class="fw-bold">12:00</h4>
            <p class="fs-7 py-1">|</p>
            <h4 class="fw-bold">20:00</h4>
          </div>
        </div>
      </div>
    </section>
    <!-- info -->
    <section class="info mt-6">
      <h3 class="fontNsif fw-bold">返老還童-制服聯誼</h3>
      <p class="mt-4 mb-6">
        穿上制服，無年齡限制，一起走上街頭、尋找青春才有的純愛心動！
      </p>
      <ul class="list-unstyled d-lg-flex d-none">
        <li class="tagBorder me-2 fw-bold fontNsif fs-4">聯誼</li>
        <li class="tagBorder me-2 fw-bold fontNsif fs-4">美食</li>
        <li class="tagBorder me-2 fw-bold fontNsif fs-4">戶外</li>
        <li class="tagBorder me-2 fw-bold fontNsif fs-4">交通旅遊</li>
      </ul>
      <div class="content p-8 border border-3 border-dark mt-12">
        <p class="fs-4">想回到過去？試著讓故事繼續？</p>
        <p class="my-4 fs-4">
          由戀愛家教「艾德溫」主辦策劃，讓各位在安排好的青春行程中擁有自然的純愛互動體驗，互相餵食餅乾、觀察對方手相，有趣的互動環節讓你/妳怦然心動！制服由主辦方提供，妝髮造型可額外加價購！
        </p>
        <p class="fs-4">
          活動中全程會有隨行攝影師，捕捉你們的純愛互動，拍攝成實境電視劇，讓你們能留下永恆的美好回憶&lt;3
        </p>
      </div>
    </section>
    <!-- ticket -->
    <section class="ticket mt-12 mb-14">
      <h2
        class="title d-flex justify-content-between align-items-center py-6 px-8 border border-3 border-dark"
      >
        TICKET<span class="titleSm">購票資訊</span>
      </h2>
      <table class="table border-dark">
        <thead>
          <tr class="borderHead">
            <th scope="col" class="bg-transparent py-4 fontNsif fw-bold">
              活動日期
            </th>
            <th scope="col" class="bg-transparent py-4 fontNsif fw-bold">
              票種
            </th>
            <th scope="col" class="bg-transparent py-4 fontNsif fw-bold">
              票價
            </th>
            <th
              scope="col"
              class="bg-transparent py-4 fontNsif fw-bold tableSm text-center text-md-start"
            >
              購票
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th
              scope="row"
              class="bg-transparent align-items-center fontNs py-4 fw-normal"
            >
              2023/5/12
            </th>
            <td class="bg-transparent align-items-center fontNs py-4">
              普通票
            </td>
            <td class="bg-transparent align-items-center fontNs py-4">$600</td>
            <td
              class="bg-transparent align-items-center fontNsif fw-bold py-4 text-end"
            >
              <RouterLink
                to="/Order/FirstStep"
                class="border border-2 border-dark py-2 px-3 d-lg-none orderBtn"
                >購票></RouterLink
              >
              <RouterLink
                to="/Order/FirstStep"
                class="border border-2 border-dark py-2 px-6 d-none d-lg-flex justify-content-center orderBtn"
                >立即購票</RouterLink
              >
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              class="bg-transparent align-items-center fontNs py-4 fw-normal"
            >
              2023/5/12
            </th>
            <td class="bg-transparent align-items-center fontNs py-4">
              改頭換面票（含大改造）
            </td>
            <td class="bg-transparent align-items-center fontNs py-4">$3600</td>
            <td
              class="bg-transparent align-items-center fontNsif fw-bold py-4 text-end"
            >
              <RouterLink
                to="/Order/FirstStep"
                class="py-2 px-3 d-lg-none orderBtn"
                >購票></RouterLink
              >
              <RouterLink
                to="/Order/FirstStep "
                class="py-2 px-6 d-none d-lg-flex justify-content-center orderBtn"
                >立即購票</RouterLink
              >
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              class="bg-transparent align-items-center fontNs py-4 fw-normal"
            >
              2023/5/12
            </th>
            <td class="bg-transparent align-items-center fontNs py-4">
              必勝票（含戀愛小抄）
            </td>
            <td class="bg-transparent align-items-center fontNs py-4">$8000</td>
            <td
              class="bg-transparent align-items-center fontNsif fw-bold py-4 text-end"
            >
              <RouterLink
                to="/Order/FirstStep"
                class="border border-2 border-dark py-2 px-3 d-lg-none orderBtn"
                >購票></RouterLink
              >
              <RouterLink
                to="/Order/FirstStep"
                class="border border-2 border-dark py-2 px-6 d-none d-lg-flex justify-content-center orderBtn"
                >立即購票</RouterLink
              >
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped></style>
