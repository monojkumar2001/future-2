import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HashLink as HashLink } from "react-router-hash-link";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import "swiper/swiper.min.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/modules/pagination/pagination.min.css";
import { Mousewheel, Pagination } from "swiper";
// typed
import Typed from "react-typed";
function Home() {
  // States
  const [activeFaq, setActiveFaq] = useState();
  const [value, setValue] = useState(1);
  const [socialActive, setSocialActive] = useState(false);

  const _toggleSidebar = () => {
    setSocialActive(!socialActive);
  };
  const [isHovering, setIsHovering] = useState(1);

  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      const texts = [
        "Home",
        "Talent",
        "Virtual",
        "Remote",
        "Communtiy",
        "Backer",
      ];
      return `<span class="${className}">${texts[index]}</span>`;
    },
  };

  return (
    <React.Fragment>
      <section className="pc">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          speed={2000}
          mousewheel={true}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
          pagination={pagination}
        >
          <SwiperSlide>
            <section id="hero">
              <div className="hero-img">
                <img src="./images/hero-img.png" alt="" />
              </div>
              <div className="hero-warrper">
                <div className="hero-left">
                  <h1 className="section-title">
                    <Typed
                      strings={[`Future infrastructure for workforce`]}
                      typeSpeed={120}
                      backSpeed={40}
                    ></Typed>
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <div className="join-btn">
                    <a href="">
                      <img src="./images/join-discord-btn.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="hero-right">
                  <div className="hero-imgs">
                    <img src="./images/hero-img-1.png" alt="" />
                  </div>
                </div>
              </div>
              <div
                className="social-link-item"
              >
                <a href="">
                  {" "}
                  <img src="./images/opensea.png" alt="" />
                </a>
                <a href="">
                  {" "}
                  <img src="./images/twitter-logo.png" alt="" />
                </a>
                <a href="">
                  <img src="./images/discord-logo.png" alt="" />
                </a>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="talent-tool cpt-6">
              <div className="talent-tool-wrapper">
                <div className="talent-tool-con">
                  <div className="talent-item talent-item-1">
                    <img
                      src="./images/talent-img-1.png"
                      alt=""
                    />
                  </div>
                  <div className="talent-item talent-item-2">
                    <img
                      src="./images/talent-img-2.png"
                      alt=""
                    />
                  </div>
                  <div className="talent-item talent-item-3">
                    <img
                      src="./images/talent-img-3.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="talent-item-buttom talent-item talent-item-4">
                  <img
                    src="./images/talent-img-4.png"
                    alt=""
                  />
                </div>
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            {/* =================== virtual-office start ================== */}
            <section className="virtual-office cpb-6">
              <div className="virtual-wrapper">
                <div className="virtual-left">
                  <div
                    className="virtual-img"
                  >
                    <img src="./images/virtual-2.png" alt="" />
                  </div>
                </div>
                <div className="virtual-right">
                  <div
                    className="virtual-img"
                  >
                    <img src="./images/virtual-1.png" alt="" />
                  </div>
                </div>
              </div>
            </section>
            {/* =================== virtual-office end ================== */}
          </SwiperSlide>
          <SwiperSlide>
            {/* ================= Remote Job Start ==================== */}
            <section className="remote-job cpb-6">
              <div className="remote-job-wrapper">
                <div className="remote-content">
                  <img
                    src="./images/remote-job-img.png"
                    alt=""
                  />
                </div>
                <div className="remote-job-img">
                  <img
                    src="./images/remote-job-img-2.png"
                    alt=""
                  />
                </div>
              </div>
            </section>
            {/* ================= Remote Job end ==================== */}
          </SwiperSlide>
          <SwiperSlide>
            {/* =================== Community start ========================= */}
            <section className="cummunity">
              <div className="container">
                <div className="community-wrapper">
                  <div className="community-title">
                    <h1 className="section-title">
                      Comm<span>unity</span>{" "}
                    </h1>
                  </div>
                  <div className="community-items">
                    <div className="community-item cummunity-item-1">
                      <div className="community-item-img">
                        <img
                          src="./images/community-item-1.png"
                          alt=""
                          className="com-1"
                        />
                        <img
                          src="./images/community-item-hover-1.png"
                          alt=""
                          className="com-2"
                        />
                      </div>
                    </div>
                    <div className="community-item cummunity-item-2">
                      <div className="community-item-img">
                        <img
                          src="./images/community-item-1.png"
                          alt=""
                          className="com-1"
                        />
                        <img
                          src="./images/community-item-hover-1.png"
                          alt=""
                          className="com-2"
                        />
                      </div>
                    </div>
                    <div className="community-item cummunity-item-3">
                      <div className="community-item-img">
                        <img
                          src="./images/community-item-1.png"
                          alt=""
                          className="com-1"
                        />
                        <img
                          src="./images/community-item-hover-1.png"
                          alt=""
                          className="com-2"
                        />
                      </div>
                    </div>
                    <div className="community-item cummunity-item-4">
                      <div className="community-item-img">
                        <img
                          src="./images/community-item-1.png"
                          alt=""
                          className="com-1"
                        />
                        <img
                          src="./images/community-item-hover-1.png"
                          alt=""
                          className="com-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* =================== Community end ========================= */}
          </SwiperSlide>
          <SwiperSlide>
            {/* ===================== Backer start ================== */}
            <section className="backer cpb-6">
              <div className="container">
                <div className="backer-wrapper">
                  <div className="backer-title">
                    <h1 className="section-title">
                      {" "}
                      <span>OUR BACKERS</span>
                    </h1>
                  </div>
                  <div className="backer-items">
                    <div className="backer-item backer-item-1">
                      <img
                        src="./images/backer-1.png"
                        alt=""
                        className="backer-1"
                      />
                      <img
                        src="./images/backer-hover-1.png"
                        className="backer-2"
                        alt=""
                      />
                    </div>
                    <div className="backer-item backer-item-2">
                      <img
                        src="./images/backer-2.png"
                        alt=""
                        className="backer-1"
                      />
                      <img
                        src="./images/backer-hover-2.png"
                        className="backer-2"
                        alt=""
                      />
                    </div>
                    <div className="backer-item backer-item-3">
                      <img
                        src="./images/backer-3.png"
                        alt=""
                        className="backer-1"
                      />
                      <img
                        src="./images/backer-hover-3.png"
                        className="backer-2"
                        alt=""
                      />
                    </div>
                    <div className="backer-item backer-item-4">
                      <img
                        src="./images/backer-4.png"
                        alt=""
                        className="backer-1"
                      />
                      <img
                        src="./images/backer-hover-4.png"
                        className="backer-2"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ===================== Backer end ================== */}

            {/* =========== Footer start ======================= */}
            <section className="footer">
              <div className="footer-bg">
                <img src="./images/footer-bg.png" alt="" />
              </div>
              <div className="footer-con">
                <div className="socials">
                  <div className="social-list">
                    <a href="" target="_blank">
                      <img src="./images/twitter-1.png" alt="discord" />
                    </a>
                  </div>
                  <div className="social-list">
                    <a href="" target="_blank">
                      <img src="./images/discord-1.png" alt="discord" />
                    </a>
                  </div>
                  <div className="social-list">
                    <a href="" target="_blank">
                      <img src="./images/telegram-1.png" alt="discord" />
                    </a>
                  </div>
                  <div className="social-list">
                    <a href="" target="_blank">
                      <img src="./images/tiktok.png" alt="discord" />
                    </a>
                  </div>
                </div>
                <div className="copyright">
                  <p>
                    © 2023 Hooked All Rights Reserved. All names, logos,
                    images,and brands are property of their respective owners.
                    Non-Affiliation and Disclaimer
                  </p>
                </div>
                <div className="terms-and-policy">
                  <Link to="/">
                    <p>Terms of toke Services</p>
                  </Link>
                  <Link to="/">
                    <p>Privacy Policy</p>
                  </Link>
                </div>
              </div>
            </section>
            {/* =========== Footer end ======================= */}
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="mobile-home">
        {/* =============== Hero Section Start ===================== */}
        <section className="hero" id="hero">
          <div className="container">
            <div className="hero-warrper">
              <h1 className="section-title">
                Future infrastructure for workforce
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button className="join-discord-btn">
                <img src="./images/join-discord-btn.png" alt="" />
              </button>
            </div>
          </div>
        </section>
        {/* =============== Hero Section End ===================== */}
        {/* ================== Mentioned Area start ================== */}
        <section className="mention-setion cpb-6">
          <div className="images-slider">
            <div className="images-slider-wrapper">
              <div className="images-slider-imgs">
                <img src="./images/imges-1.png" alt="" />
                <img src="./images/imges-2.png" alt="" />
                <img src="./images/imges-3.png" alt="" />
              </div>
              <div className="images-slider-imgs">
                <img src="./images/imges-1.png" alt="" />
                <img src="./images/imges-2.png" alt="" />
                <img src="./images/imges-3.png" alt="" />
              </div>
              <div className="images-slider-imgs">
                <img src="./images/imges-1.png" alt="" />
                <img src="./images/imges-2.png" alt="" />
                <img src="./images/imges-3.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* ================== Mentioned Area end ================== */}
        {/* ================== Roadmap start ================= */}
        <section className="talent-tool " id="talent-pool">
          <div className="talent-tool-wrapper">
            <div className="talent-content">
              <h1 className="section-title">Talent Pool </h1>
              <p>
                Discover the right candidate from a big pool of talent
                marketplace. SBTs - Collect SBTs as badges and achievements to
                get recognized among the peers. Autonomous Agreement Protocol -
                We have built a protocol to define an escrow smart contract with
                inbuilt dispute resolution.{" "}
              </p>
            </div>

            <div className="talent-tool-item">
              <div className="talent-tool-img">
                <img src="./images/talent-tool-img.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* ================== Roadmap end ================= */}

        {/* ================= Remote Job Start ==================== */}
        <section className="remote-job cpb-6" id="remote">
          <div className="container">
            <div className="remote-job-wrapper">
              <div className="remote-job-img">
                <img src="./images/remote-job-img.png" alt="" />
              </div>
              <div className="remote-content">
                <h1 className="section-title">
                  Remote Job (good for both parties)
                </h1>
                <p>
                  Remote Jobs Build your business without an office has never
                  been so easy, offering tools to monitor and engage remote
                  employees with an extended form of autonoums agreement
                  protocol, saving money and offering transparency at the same
                  time.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ================= Remote Job end ==================== */}

        {/* =================== virtual-office start ================== */}
        <section className="virtual-office cpb-6" id="virtual">
          <div className="virtual-wrapper">
            <div className="virtual-left">
              <div className="virtual-content">
                <h1 className="section-title">Virtual Offices</h1>
                <p>
                  Having a meeting or an event in your office? Or missing out
                  the experience of sitting with your colleagues is something
                  which makes us travel to the office every day. Pentonium
                  offers to build virtual spaces ( offices / meeting rooms )
                  according to the brands and help them launch events, gathering
                  or other activities, customized just for the brand keeping the
                  brand value alive.{" "}
                </p>
              </div>
            </div>
            <div className="virtual-right">
              <div className="virtual-img">
                <img src="./images/virtual-img.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* =================== virtual-office end ================== */}

        {/* =================== Community start ========================= */}
        <section className="cummunity" id="cummunity">
          <div className="container">
            <div className="community-wrapper">
              <div className="section-title">
                <h1>community</h1>
              </div>
              <div className="community-items">
                <div className="community-item">
                  <div className="community-item-img">
                    <img src="./images/community-item-1.png" alt="" />
                  </div>
                </div>
                <div className="community-item">
                  <div className="community-item-img">
                    <img src="./images/community-item-1.png" alt="" />
                  </div>
                </div>
                <div className="community-item">
                  <div className="community-item-img">
                    <img src="./images/community-item-1.png" alt="" />
                  </div>
                </div>
                <div className="community-item">
                  <div className="community-item-img">
                    <img src="./images/community-item-1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =================== Community end ========================= */}

        {/* ===================== Backer start ================== */}
        <section className="backer cpb-6" id="backer">
          <div className="container">
            <div className="backer-wrapper">
              <div className="backer-title">
                <h1 className="section-title">Backer / Partners </h1>
              </div>
              <div className="backer-items">
                <div className="backer-item">
                  <div className="backer-logo-img">
                    <img src="./images/backer-logo-1.png" alt="" />
                  </div>
                  <div className="backer-short-title">
                    <h3>InterPlanetary File System</h3>
                  </div>
                </div>
                <div className="backer-item">
                  <div className="backer-logo-img">
                    <img src="./images/backer-logo-2.png" alt="" />
                  </div>
                  <div className="backer-short-title">
                    <h3>Siacoin</h3>
                  </div>
                </div>
                <div className="backer-item">
                  <div className="backer-logo-img">
                    <img src="./images/backer-logo-3.png" alt="" />
                  </div>
                  <div className="backer-short-title">
                    <h3>Dai crypto currency</h3>
                  </div>
                </div>
                <div className="backer-item">
                  <div className="backer-logo-img">
                    <img src="./images/backer-logo-4.png" alt="" />
                  </div>
                  <div className="backer-short-title">
                    <h3>OpenZeppelin</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================== Backer end ================== */}
      </section>

      {/*  */}
    </React.Fragment>
  );
}

export default Home;
