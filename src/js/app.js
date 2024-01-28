import {
  isWebp,
  burger,
  DynamicAdapt,
  fixedHeader,
} from "./modules/functions.js";
import sal from "./libs/sal.js";

isWebp();
burger();
fixedHeader();
sal();

const da = DynamicAdapt;
const daMax = new da("max");
daMax.init();

const slider = new Swiper(".slider-feedbacks", {
  pagination: {
    el: ".slider-feedbacks__bullets",
    type: "bullets",
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  loop: true,
  autoHeight: true,
  autoplay: {
    delay: 3000,
  },
});
