import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const VideoCarousel = ({ videos }) => {
    return (
        <div className="w-full py-8">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper w-full max-w-5xl"
                initialSlide={1}
            >
                {videos.map((video) => (
                    <SwiperSlide key={video.id} className="w-[300px] sm:w-[400px] md:w-[600px] aspect-video rounded-xl overflow-hidden bg-black shadow-2xl border-2 border-gold-500/30">
                        <iframe
                            src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1`}
                            title={video.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </SwiperSlide>
                ))}
            </Swiper>
            <style>{`
                .swiper-pagination-bullet {
                    background-color: var(--color-gold-500) !important;
                }
                .swiper-button-next, .swiper-button-prev {
                    color: var(--color-gold-500) !important;
                }
            `}</style>
        </div>
    );
};

export default VideoCarousel;
