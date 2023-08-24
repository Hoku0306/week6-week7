<script>
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import { Vue3Marquee } from "vue3-marquee";
export default defineComponent({
  components: {
    Vue3Marquee,
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="container">
    <!-- banner -->
    <section
      class="banner text-white mt-8 d-flex flex-column justify-content-between"
    >
      <p class="card-title ms-12 pt-12 fontYo date">19 MAY 2023</p>
      <div class="text text-center pb-6">
        <h3 class="card-text font-serif fw-bold fs-6 mb-4">
          隔牆有耳-沒有草東的派對
        </h3>
        <p class="card-text d-none d-lg-block">
          你各位聽團仔們！每次想跟朋友一起聽草東專場卻每一次都搶不到票？「草東沒有派對」永遠都是「草東沒有門票」！<br />
          帶上啤酒、野餐墊，讓我們在Live House外面一起開場「沒有草東的派對」吧！
        </p>
      </div>
    </section>
    <!-- event -->
    <section class="event row mt-12">
      <div
        class="eventCategory col-4 col-lg-2 mb-lg-0 mb-4 d-flex flex-column justify-content-center align-items-center"
      >
        <div
          class="content d-flex flex-column justify-content-center align-items-center fs-6 border border-dark fw-bold"
        >
          <img
            src="/public/images/cate01.svg"
            alt="cate"
            class="eventLogo mb-3"
          />演出
        </div>
      </div>
      <div
        class="eventCategory col-4 col-lg-2 mb-lg-0 mb-4 d-flex flex-column justify-content-center align-items-center"
      >
        <div
          class="content d-flex flex-column justify-content-center align-items-center fs-6 border border-dark fw-bold"
        >
          <img
            src="/public/images/cate02.svg"
            alt="cate"
            class="eventLogo mb-3"
          />聯誼
        </div>
      </div>
      <div
        class="eventCategory col-4 col-lg-2 mb-lg-0 mb-4 d-flex flex-column justify-content-center align-items-center"
      >
        <div
          class="content d-flex flex-column justify-content-center align-items-center fs-6 border border-dark fw-bold"
        >
          <img
            src="/public/images/cate03.svg"
            alt="cate"
            class="eventLogo mb-3"
          />展覽
        </div>
      </div>
      <div
        class="eventCategory col-4 col-lg-2 d-flex flex-column justify-content-center align-items-center"
      >
        <div
          class="content d-flex flex-column justify-content-center align-items-center fs-6 border border-dark fw-bold"
        >
          <img
            src="/public/images/cate04.svg"
            alt="cate"
            class="eventLogo mb-3"
          />美食
        </div>
      </div>
      <div
        class="eventCategory col-4 col-lg-2 d-flex flex-column justify-content-center align-items-center"
      >
        <div
          class="content d-flex flex-column justify-content-center align-items-center fs-6 border border-dark fw-bold"
        >
          <img
            src="/public/images/cate05.svg"
            alt="cate"
            class="eventLogo mb-3"
          />戶外
        </div>
      </div>
      <div
        class="eventCategory col-4 col-lg-2 d-flex justify-content-center align-items-center"
      >
        <div
          class="content moreText d-flex flex-column justify-content-center align-items-center border border-dark fw-bold"
        >
          <RouterLink to="/Event" class="moreText">探索<br />更多</RouterLink>
        </div>
      </div>
    </section>
    <!-- recent -->
    <section class="recent">
      <h2
        class="d-flex justify-content-between align-items-center recentTitle border border-2 border-dark py-6 px-8 mt-12 mb-8"
      >
        RECENT<span>近期活動</span>
      </h2>
      <ul class="row list-unstyled mb-0">
        <li class="col-lg-4 mb-6 mb-lg-12">
          <div class="card bg-transparent border-0">
            <h3 class="pb-3 border-bottom border-2 border-dark mb-3">
              19 MAY 2023
            </h3>
            <img
              src="/public/images/event/01.jpg"
              class="card-img-top rounded-0"
              alt="eventPic"
            />
            <h4 class="my-3 fs-6 fw-bold">邪典電影派對——房間</h4>
            <div class="card-body p-0">
              <p class="mb-4">
                你有聽說過「大災難家」裡面的主角 Tommy Wiseau
                製作的「史上最爛的電影」——房間嗎？在美國甚至演變成一種邪教、一種派對的形式，在電影播放的對著螢幕丟湯匙都...
              </p>
              <div
                class="eventSale d-flex justify-content-between align-items-center border-top border-bottom border-2 border-dark py-3 fw-bold"
              >
                <p>
                  <img
                    src="/public/images/sparkler.png"
                    alt="sparkler"
                    width="24"
                    class="me-1"
                  />社群活動
                </p>
                <a href="#"
                  >開賣中<i class="icofont-rounded-double-right"></i
                ></a>
              </div>
            </div>
          </div>
        </li>
        <li class="col-lg-4 mb-6 mb-lg-12">
          <div class="card bg-transparent border-0">
            <h3 class="pb-3 border-bottom border-2 border-dark mb-3">
              19 MAY 2023
            </h3>
            <img
              src="/public/images/event/02.jpg"
              class="card-img-top rounded-0"
              alt="eventPic"
            />
            <h4 class="my-3 fs-6 fw-bold">邪典電影派對——房間</h4>
            <div class="card-body p-0">
              <p class="mb-4">
                你有聽說過「大災難家」裡面的主角 Tommy Wiseau
                製作的「史上最爛的電影」——房間嗎？在美國甚至演變成一種邪教、一種派對的形式，在電影播放的對著螢幕丟湯匙都...
              </p>
              <div
                class="eventSale d-flex justify-content-between align-items-center border-top border-bottom border-2 border-dark py-3 fw-bold"
              >
                <p>
                  <img
                    src="/public/images/sparkler.png"
                    alt="sparkler"
                    width="24"
                    class="me-1"
                  />社群活動
                </p>
                <a href="#"
                  >開賣中<i class="icofont-rounded-double-right"></i
                ></a>
              </div>
            </div>
          </div>
        </li>
        <li class="col-lg-4 mb-6 mb-lg-12">
          <div class="card bg-transparent border-0">
            <h3 class="pb-3 border-bottom border-2 border-dark mb-3">
              19 MAY 2023
            </h3>
            <img
              src="/public/images/event/03.jpg"
              class="card-img-top rounded-0"
              alt="eventPic"
            />
            <h4 class="my-3 fs-6 fw-bold">邪典電影派對——房間</h4>
            <div class="card-body p-0">
              <p class="mb-4">
                你有聽說過「大災難家」裡面的主角 Tommy Wiseau
                製作的「史上最爛的電影」——房間嗎？在美國甚至演變成一種邪教、一種派對的形式，在電影播放的對著螢幕丟湯匙都...
              </p>
              <div
                class="eventSale d-flex justify-content-between align-items-center border-top border-bottom border-2 border-dark py-3 fw-bold"
              >
                <p>
                  <img
                    src="/public/images/sparkler.png"
                    alt="sparkler"
                    width="24"
                    class="me-1"
                  />社群活動
                </p>
                <a href="#"
                  >開賣中<i class="icofont-rounded-double-right"></i
                ></a>
              </div>
            </div>
          </div>
        </li>
        <li class="col-lg-4 mb-6 mb-lg-0">
          <div class="card bg-transparent border-0">
            <h3 class="pb-3 border-bottom border-2 border-dark mb-3">
              19 MAY 2023
            </h3>
            <div>
              <img
                src="/public/images/event/04.jpg"
                class="card-img-top rounded-0"
                alt="eventPic"
              />
            </div>
            <h4 class="my-3 fs-6 fw-bold">邪典電影派對——房間</h4>
            <div class="card-body p-0">
              <p class="mb-4">
                你有聽說過「大災難家」裡面的主角 Tommy Wiseau
                製作的「史上最爛的電影」——房間嗎？在美國甚至演變成一種邪教、一種派對的形式，在電影播放的對著螢幕丟湯匙都...
              </p>
              <div
                class="eventSale d-flex justify-content-between align-items-center border-top border-bottom border-2 border-dark py-3 fw-bold"
              >
                <p>
                  <img
                    src="/public/images/sparkler.png"
                    alt="sparkler"
                    width="24"
                    class="me-1"
                  />社群活動
                </p>
                <a href="#"
                  >開賣中<i class="icofont-rounded-double-right"></i
                ></a>
              </div>
            </div>
          </div>
        </li>
        <li class="col-lg-4 mb-6 mb-lg-0">
          <div class="card bg-transparent border-0">
            <h3 class="pb-3 border-bottom border-2 border-dark mb-3">
              19 MAY 2023
            </h3>
            <img
              src="/public/images/event/05.jpg"
              class="card-img-top rounded-0"
              alt="eventPic"
            />
            <h4 class="my-3 fs-6 fw-bold">邪典電影派對——房間</h4>
            <div class="card-body p-0">
              <p class="mb-4">
                你有聽說過「大災難家」裡面的主角 Tommy Wiseau
                製作的「史上最爛的電影」——房間嗎？在美國甚至演變成一種邪教、一種派對的形式，在電影播放的對著螢幕丟湯匙都...
              </p>
              <div
                class="eventSale d-flex justify-content-between align-items-center border-top border-bottom border-2 border-dark py-3 fw-bold"
              >
                <p>
                  <img
                    src="/public/images/sparkler.png"
                    alt="sparkler"
                    width="24"
                    class="me-1"
                  />社群活動
                </p>
                <a href="#"
                  >開賣中<i class="icofont-rounded-double-right"></i
                ></a>
              </div>
            </div>
          </div>
        </li>
        <li class="col-lg-4 mb-6 mb-lg-0">
          <div class="card bg-transparent border-0">
            <h3 class="pb-3 border-bottom border-2 border-dark mb-3">
              19 MAY 2023
            </h3>
            <img
              src="/public/images/event/06.jpg"
              class="card-img-top rounded-0"
              alt="eventPic"
            />
            <h4 class="my-3 fs-6 fw-bold">邪典電影派對——房間</h4>
            <div class="card-body p-0">
              <p class="mb-4">
                你有聽說過「大災難家」裡面的主角 Tommy Wiseau
                製作的「史上最爛的電影」——房間嗎？在美國甚至演變成一種邪教、一種派對的形式，在電影播放的對著螢幕丟湯匙都...
              </p>
              <div
                class="eventSale d-flex justify-content-between align-items-center border-top border-bottom border-2 border-dark py-3 fw-bold"
              >
                <p>
                  <img
                    src="/public/images/sparkler.png"
                    alt="sparkler"
                    width="24"
                    class="me-1"
                  />社群活動
                </p>
                <a href="#"
                  >開賣中<i class="icofont-rounded-double-right"></i
                ></a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <!-- online -->
    <section class="online">
      <h2
        class="d-flex justify-content-between align-items-center recentTitle border border-2 border-dark py-6 px-8 mt-8 mt-lg-12 mb-8"
      >
        ONLINE<span class="">線上活動</span>
      </h2>
      <div class="row">
        <div class="col-lg-7 mb-md-3">
          <img src="/public/images/event/online.jpg" alt="onlinePic" class="" />
        </div>
        <div class="col-lg-5">
          <h3 class="mb-4">切特居批踢</h3>
          <ul class="list-unstyled d-flex">
            <li class="py-1 ps-5 pe-6 fw-bold">競賽</li>
            <li class="py-1 ps-5 pe-6 fw-bold mx-2">科技</li>
            <li class="py-1 ps-5 pe-6 fw-bold">有趣</li>
          </ul>
          <p class="my-8">
            最近網路上很流行的AI程式
            ChatGPT，可以用來聊天或是查詢、整理各種資料，不同的應用方式如雨後春筍般冒出來。<br />
            這個活動讓大家把自己最有特色的使用方法提出來讓大家參考，也會投票出最有趣的用法。<br />
            該讓其他人知道自己使用 ChatGPT 的姿勢才是最特別的那個了！
          </p>
          <a
            href="#"
            class="bg-dark text-white text-center d-block py-4 py-lg-2"
            >查看活動詳情<i class="icofont-rounded-double-right"></i
          ></a>
        </div>
      </div>
    </section>
  </div>
  <!-- album -->
  <section class="album">
    <Vue3Marquee
      ><h3 class="text-primary bg-dark py-6">
        活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS
      </h3></Vue3Marquee
    >
    <div class="container">
      <ul class="row list-unstyled">
        <li
          class="col-md-6 col-xl-3 mb-6 mb-xxl-0 d-flex flex-column align-items-center"
        >
          <div class="border border-2 border-dark px-2 pt-4 position-relative">
            <p class="position-absolute firstInner bg-white fw-bold">
              社群活動
            </p>
            <img
              src="/public/images/album/01.jpg"
              alt="album"
              class="img-fluid"
            />
            <p class="fw-bold mt-4 mb-12 textLg">無聲派對-閉閉嘴dancing</p>
          </div>
        </li>
        <li
          class="col-md-6 col-xl-3 mb-6 mb-xxl-0 d-flex flex-column align-items-center"
        >
          <div
            class="border border-2 border-dark px-2 pt-4 position-relative secondOutter"
          >
            <p class="position-absolute secondInner bg-white fw-bold">
              藝文活動
            </p>
            <img
              src="/public/images/album/02.jpg"
              alt="album"
              class="img-fluid"
            />
            <p class="fw-bold mt-4 mb-12 textLg">拯救老店大作戰</p>
          </div>
        </li>
        <li
          class="col-md-6 col-xl-3 mb-6 mb-xxl-0 d-flex flex-column align-items-center"
        >
          <div
            class="border border-2 border-dark px-2 pt-4 position-relative thirdOutter"
          >
            <p class="position-absolute thirdInner bg-white fw-bold">
              自我覺察
            </p>
            <img
              src="/public/images/album/03.jpg"
              alt="album"
              class="img-fluid"
            />
            <p class="fw-bold mt-4 mb-12 textLg">內觀修行-部落篇</p>
          </div>
        </li>
        <li
          class="col-md-6 col-xl-3 mb-6 mb-xxl-0 d-flex flex-column align-items-center"
        >
          <div
            class="border border-2 border-dark px-2 pt-4 position-relative forthOutter"
          >
            <p class="position-absolute forthInner bg-white fw-bold">
              聯誼活動
            </p>
            <img
              src="/public/images/album/04.jpg"
              alt="album"
              class="img-fluid"
            />
            <p class="fw-bold mt-4 mb-12 textLg">賞櫻野餐</p>
          </div>
        </li>
      </ul>
    </div>
    <Vue3Marquee
      ><h3 class="text-primary bg-dark py-6">
        活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS
      </h3></Vue3Marquee
    >
  </section>
  <!-- contact -->
  <section class="contact container d-flex flex-column flex-md-row">
    <div class="follow border border-2 border-dark w-100 mb-6 mb-md-0">
      <h2 class="py-4 ps-8 border-bottom border-2 border-dark">#FOLLOW US</h2>
      <div class="followContent p-8">
        <p class="mb-8">
          想第一時間獲得新奇有趣的活動資訊？<br />追蹤我們的社群吧！<br />
          也歡迎你聯繫我們，提供好玩有趣的活動企劃。
        </p>
        <div class="sns d-flex flex-column">
          <a href="tomail" class="mb-4"
            ><i class="icofont-ui-email bg-dark p-2 text-white me-4"></i
            >7tao.event@gmail.com</a
          >
          <a href="tel" class="mb-4"
            ><i class="icofont-ui-email bg-dark p-2 text-white me-4"></i
            >09123123123</a
          >
          <a href="#"
            ><i class="icofont-facebook bg-dark p-2 text-white me-4"></i
            >7TAO七逃</a
          >
        </div>
      </div>
    </div>
    <div class="subscribe border border-2 border-dark w-100 d-flex flex-column">
      <h2 class="py-4 ps-8 border-bottom border-2 border-dark">
        #SUBSCRIBE US
      </h2>
      <div class="followContent p-8 d-flex flex-column">
        <p class="mb-8">
          訂閱電子報送折價券！<br />
          定期精選文章資訊及最新優惠資訊，<br />
          還不通通給我訂閱起來？
        </p>
        <input
          type="email"
          placeholder="輸入Email"
          class="py-4 ps-6 bg-transparent border-dark border-2"
        />
      </div>
      <a href="#" class="d-block text-center bg-dark text-white py-2 mt-auto"
        >確認訂閱<i class="icofont-rounded-double-right"></i
      ></a>
    </div>
  </section>
  <!-- bottom -->
  <section class="bottom text-center border-top border-3 border-dark">
    <h2 class="mb-4">此刻打盹，你將做夢；此刻學習，你將圓夢</h2>
    <p class="fw-bold">——我也不知道誰說的</p>
  </section>
</template>
