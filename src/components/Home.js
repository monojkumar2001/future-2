import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HashLink as HashLink } from "react-router-hash-link";
import "swiper/swiper.min.css";
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
      {/* =================== Desktop start ==================== */}
      <section className="pc">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          speed={1000}
          mousewheel={true}
          modules={[ Mousewheel, Pagination]}
          className="mySwiper"
          pagination={pagination}
        >
          <SwiperSlide>
            <section
              id="hero"
              className="intro section-bg animate_fadeIn animate__animated"
            >
              <div className="hero-img">
                <img src="./images/hero-img.png" alt="" />
              </div>
              <div className="page-bg-1 page-bg"></div>
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
                      <div className="join-btn-text">
                        <p>Join Discord</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="hero-right">
                  <div className="hero-imgs">
                    <img src="./images/hero-img-1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="social-link-item">
                <a href="https://pentonium.medium.com/" target={"_blank"}>
                  <img src="./images/medium.png" alt="" />
                </a>
                <a href="https://twitter.com/pentonium_ptm" target={"_blank"}>
                  <img src="./images/twitter-logo.png" alt="" />
                </a>
                <a href="" target={"_blank"}>
                  <img src="./images/discord-logo.png" alt="" />
                </a>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="talent-tool cpt-6 section-bg">
              <div className="page-bg-2 page-bg"></div>
              <div className="talent-tool-wrapper">
                <div className="talent-tool-con">
                  <div className="talent-item talent-item-1 talent-item-box">
                    <img src="./images/talent-img-1.png" alt="" />
                    <div className="talent-content">
                      <p>Discover the right candidate from a big pool of talent marketplace. </p>
                    </div>
                  </div>
                  <div className="talent-item talent-item-2 ">
                    <img src="./images/talent-img-2.png" alt="" />
              
                  </div>
                  <div className="talent-item talent-item-3 talent-item-box">
                    <img src="./images/talent-img-3.png" alt="" />
                    <div className="talent-content">
                      <p>Collect SBTs as badges and achievements to get recognized among the peers.</p>
                    </div>
                  </div>
                </div>
                <div className="talent-item-buttom talent-item talent-item-4 ">
                  <img src="./images/talent-img-4.png" alt="" />
                  <div className="talent-content">
                      <p>Collect SBTs as badges and achievements to get recognized among the peers.</p>
                    </div>
                </div>
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            {/* =================== virtual-office start ================== */}
            <section className="virtual-office cpb-6 section-bg">
              <div className="page-bg-3 page-bg"></div>
              <div className="virtual-wrapper">
                <div className="virtual-left">
                  <div className="virtual-img">
                    <img src="./images/virtual-2.png" alt="" />
                  </div>
                </div>
                <div className="virtual-right">
                  <div className="virtual-img">
                    <img src="./images/virtual-1.png" alt="" />
                  </div>
                  <div className="virtual-contents">
                    <h2>
                      <span>virtual</span> office
                    </h2>
                    <p>
                      Having a meeting or an event in your office? Or missing
                      out the experience of sitting with your colleagues is
                      something which makes us travel to the office every day.
                      Pentonium offers to build virtual spaces ( offices /
                      meeting rooms ) according to the brands and help them
                      launch events, gathering or other activities, customized
                      just for the brand keeping the brand value alive
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* =================== virtual-office end ================== */}
          </SwiperSlide>
          <SwiperSlide>
            {/* ================= Remote Job Start ==================== */}
            <section className="remote section-bg">
              <div className="page-bg-4 page-bg"></div>
              <div className="remote-job-wrapper">
                <div className="remote-content">
                  <h2>remote <span>job</span> </h2>
                  <p>Build your business without an office has never been so easy, offering tools to monitor and engage remote employees with an extended form of autonomous agreement protocol, saving money and offering transparency at the same time. </p>
                </div>
                <div className="remote-job-img ">
                  <div className="remote-job-imgs">
                    <img src="./images/remote-job-img-2.png" alt="" />
                  </div>
                </div>
              </div>
            </section>
            {/* ================= Remote Job end ==================== */}
          </SwiperSlide>
          <SwiperSlide>
            {/* =================== Community start ========================= */}
            <section className="cummunity section-bg">
              <div className="page-bg-5 page-bg"></div>
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
                      <div className="community-content">
                        <h3>community</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
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
                      <div className="community-content">
                        <h3>Events</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
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
                      <div className="community-content">
                        <h3>Learn</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
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
                      <div className="community-content">
                        <h3>Grow</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
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
            <section className="backer cpb-6 section-bg">
              <div className="page-bg-6 page-bg"></div>
              <div className="container">
                <div className="backer-wrapper">
                  <div className="backer-title">
                    <h1 className="section-title">
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

              <div className="footer-warrper">
                <div className="footer-bg">
                  <img src="./images/footer-bg.png" alt="" />
                </div>
                <div className="footer-con">
                  <div className="socials">
                    <div className="social-list">
                      <a
                        href="https://twitter.com/pentonium_ptm"
                        target="_blank"
                      >
                        <img src="./images/social-bg.png" alt="" />
                        <div className="social-content">
                          <img src="./images/twitter.png" alt="" />
                          <p>Twitter</p>
                        </div>
                      </a>
                    </div>
                    <div className="social-list">
                      <a href="" target="_blank">
                      <img src="./images/social-bg.png" alt="" />
                        <div className="social-content">
                          <img src="./images/discord.png" alt="" />
                          <p>Discord</p>
                        </div>
                      </a>
                    </div>
                    <div className="social-list">
                      <a href="https://t.me/pentonium" target="_blank">
                      <img src="./images/social-bg.png" alt="" />
                        <div className="social-content">
                          <img src="./images/telegram.png" alt="" />
                          <p>Telegram</p>
                        </div>
                      </a>
                    </div>
                    <div className="social-list">
                      <a href="https://pentonium.medium.com/" target="_blank">
                      <img src="./images/social-bg.png" alt="" />
                        <div className="social-content">
                        <img src="./images/mediums.png" alt="" />
                          <p>Medium</p>
                        </div>
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
                </div>
              </div>
            </section>
            {/* ===================== Backer end ================== */}
          </SwiperSlide>
        </Swiper>
      </section>
      {/* =================== Desktop end ==================== */}

      {/* ================ Mobile device  start =============== */}
      <section className="mobile-home">
        {/* =============== Hero Section Start ===================== */}
        <section
          className="hero-mobile"
          id="hero"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <div className="container">
            <div className="hero-mobile-warrper">
              <div className="hero-mobile-left">
                <h1
                  className="mobile-section-title"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  Future infrastructure for workforce
                </h1>
                <p data-aos="fade-down" data-aos-duration="2500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <button
                  className="mobile-join-discord-btn"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-duration="3000"
                >
                    <a href="">
                      <img src="./images/join-discord-btn-mobile.png" alt="" />
                    </a>
                </button>
              </div>
              <div
                className="hero-mobile-right"
                data-aos="zoom-in-up"
                data-aos-duration="3000"
              >
                <img src="./images/hero-img-1.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* =============== Hero Section End ===================== */}

        {/* ================= talent Start ==================== */}
        <section className="talent-mobile" id="talent">
          <div className="container">
            <div className="talent-mobile-wrapper">
              <div
                className="talent-mobile-item"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="3000"
              >
                <h3>Talent pool</h3>
                <p>
                  Discover the right candidate from a big pool of talent
                  marketplace.{" "}
                </p>
              </div>
              <div
                className="talent-mobile-item"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-duration="3000"
              >
                <h3>s b t s</h3>
                <p>
                  Collect SBTs as badges and achievements to get recognized
                  among the peers.{" "}
                </p>
              </div>
              <div
                className="talent-mobile-item"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="3000"
              >
                <h3>Autonomous Agreement Protocol </h3>
                <p>
                  We have built a protocol to define an escrow smart contract
                  with inbuilt dispute resolution.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ================= talent end ==================== */}

        {/* =================== virtual-office start ================== */}
        <section className="mobile-virtual" id="virtual">
          <div className="container">
            <div className="mobile-virtual-wrapper">
              <div
                className="mobile-virtual-left"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <img src="./images/virtual-2.png" alt="" />
              </div>
              <div className="mobile-virtual-right">
                <div
                  className="mobile-virtual-content"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <h1 className="mobile-section-title">Virtual Offices</h1>
                  <p>
                    Having a meeting or an event in your office? Or missing out
                    the experience of sitting with your colleagues is something
                    which makes us travel to the office every day. Pentonium
                    offers to build virtual spaces ( offices / meeting rooms )
                    according to the brands and help them launch events,
                    gathering or other activities, customized just for the brand
                    keeping the brand value alive.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =================== virtual-office end ================== */}
        {/* =================== Remote job start ================== */}
        <section className="mobile-remote" id="remote">
          <div className="container">
            <div className="mobile-remote-wrapper">
              <div
                className="mobile-remote-left"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <img src="./images/remote-job-img-1.png" alt="" />
              </div>
              <div className="mobile-remote-right">
                <div
                  className="mobile-remote-content"
                  data-aos="fade-left"
                  data-aos-duration="3000"
                >
                  <h1 className="mobile-section-title">remote job</h1>
                  <p>
                  Build your business without an office has never been so easy, offering tools to monitor and engage remote employees with an extended form of autonomous agreement protocol, saving money and offering transparency at the same time. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =================== Remote job end ================== */}

        {/* =================== Community start ========================= */}
        <section className="cummunity" id="cummunity">
          <div className="container">
            <div className="mobile-community-wrapper">
              <h1
                className="mobile-section-title"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-duration="3000"
              >
                Community
              </h1>
              <div className="mobile-community-items">
                <div className="mobile-community-item cummunity-item-1">
                  <div
                    className="mobile-community-item"
                    data-aos="zoom-in-up"
                    data-aos-offset="500"
                    data-aos-duration="3000"
                  >
                    <h2>Community</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                  </div>
                </div>
                <div className="mobile-community-item cummunity-item-2">
                <div
                    className="mobile-community-item"
                    data-aos="zoom-in-up"
                    data-aos-offset="500"
                    data-aos-duration="3000"
                  >
                    <h2>Events</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                  </div>
                </div>
                <div className="mobile-community-item cummunity-item-3">
                <div
                    className="mobile-community-item"
                    data-aos="zoom-in-up"
                    data-aos-offset="500"
                    data-aos-duration="3000"
                  >
                    <h2>Learn</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                  </div>
                </div>
                <div className="mobile-community-item cummunity-item-4">
                <div
                    className="mobile-community-item"
                    data-aos="zoom-in-up"
                    data-aos-offset="500"
                    data-aos-duration="3000"
                  >
                    <h2>Grow</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =================== Community end ========================= */}
        {/* ===================== Backer start ================== */}
        <section className="cummunity" id="backer">
          <div className="container">
            <div className="mobile-community-wrapper">
              <h1
                className="mobile-section-title"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="3000"
              >
                OUR BACKERS
              </h1>
              <div className="mobile-community-items backer-items">
                <div className="mobile-community-item backers-item cummunity-item-1">
                  <div
                    className="mobile-community-item-img backer-img"
                    data-aos="zoom-in-up"
                    data-aos-offset="500"
                    data-aos-duration="3000"
                  >
                    <img src="./images/backer-1.png" alt="" className="com-1" />
                    <img
                      src="./images/backer-hover-1.png"
                      className="com-2"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mobile-community-item backers-item cummunity-item-2">
                  <div
                    className="mobile-community-item-img backer-img"
                    data-aos="zoom-in-up"
                    data-aos-offset="500"
                    data-aos-duration="3000"
                  >
                    <img src="./images/backer-2.png" alt="" className="com-1" />
                    <img
                      src="./images/backer-hover-2.png"
                      className="com-2"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mobile-community-item backers-item cummunity-item-3">
                  <div
                    className="mobile-community-item-img backer-img"
                    data-aos="zoom-in-up"
                    data-aos-offset="500"
                    data-aos-duration="3000"
                  >
                    <img src="./images/backer-3.png" alt="" className="com-1" />
                    <img
                      src="./images/backer-hover-3.png"
                      className="com-2"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mobile-community-item backers-item cummunity-item-4">
                  <div
                    className="mobile-community-item-img backer-img"
                    data-aos="zoom-in-up"
                    data-aos-offset="500"
                    data-aos-duration="3000"
                  >
                    <img src="./images/backer-4.png" alt="" className="com-1" />
                    <img
                      src="./images/backer-hover-4.png"
                      className="com-2"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================== Backer end ================== */}

        {/* =========== Footer start ======================= */}
        <section className="mobile-footer">
          <div className="mobile-footer-bg">
            <img src="./images/footer-bg.png" alt="" />
          </div>
          <div className="mobile-footer-con">
          <div className="socials">
                    <div className="social-list">
                      <a
                        href="https://twitter.com/pentonium_ptm"
                        target="_blank"
                      >
                        <img src="./images/social-bg.png" alt="" />
                        <div className="social-content">
                          <img src="./images/twitter.png" alt="" />
                          <p>Twitter</p>
                        </div>
                      </a>
                    </div>
                    <div className="social-list">
                      <a href="" target="_blank">
                      <img src="./images/social-bg.png" alt="" />
                        <div className="social-content">
                          <img src="./images/discord.png" alt="" />
                          <p>Discord</p>
                        </div>
                      </a>
                    </div>
                    <div className="social-list">
                      <a href="https://t.me/pentonium" target="_blank">
                      <img src="./images/social-bg.png" alt="" />
                        <div className="social-content">
                          <img src="./images/telegram.png" alt="" />
                          <p>Telegram</p>
                        </div>
                      </a>
                    </div>
                    <div className="social-list">
                      <a href="https://pentonium.medium.com/" target="_blank">
                      <img src="./images/social-bg.png" alt="" />
                        <div className="social-content">
                        <img src="./images/mediums.png" alt="" />
                          <p>Medium</p>
                        </div>
                      </a>
                    </div>
                  </div>
            <div className="copyright">
              <p>
                © 2023 Hooked All Rights Reserved. All names, logos, images,and
                brands are property of their respective owners. Non-Affiliation
                and Disclaimer
              </p>
            </div>
          </div>
        </section>
        {/* =========== Footer end ======================= */}
      {/* ================ Mobile device  end =============== */}

      </section>

      {/*  */}
    </React.Fragment>
  );
}

export default Home;
