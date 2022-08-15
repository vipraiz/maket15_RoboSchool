import Swiper, { Navigation, Scrollbar } from "swiper";
Swiper.use([Navigation, Scrollbar]);
const swiper = new Swiper(".treners__content", {
  slidesPerView: "auto",
  spaceBetween: 40,
  scrollbar: {
    el: ".treners__scroll",
  },
});
