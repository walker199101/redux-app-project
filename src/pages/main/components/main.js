import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import BannerImg from './../../../img/banner.png';

function Section() {
  return (
    <div className="section">
      <div className="section-header">
        <div className="section-title">Section Title</div>
        <div className="my-page-btn">ㅇㅇㅇ</div>
      </div>
      <div className="section-content">
        Section Content
      </div>
    </div>
  )
}

function Main() {
    const arr = new Array(20);
    const slideArr = arr.fill(1);
    return (
        <div>
            <div className="header">
                <div className="header-title">어플 로고</div>
                <div className="search-button">검색</div>
            </div>
            <div className="main">
                <div className="banner-carousel">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                      slideArr.map(el => {
                          return (
                          <SwiperSlide>
                              <img className="banner" alt="banner" src={BannerImg}></img>
                          </SwiperSlide>
                          );
                      })
                    }
                </Swiper>
                </div>
                <Section />
                <Section />
                <Section />
                <Section />
                <Section />
                <Section />
            </div>
        </div>
    )
}

export default Main;