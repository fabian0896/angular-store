import { Component } from '@angular/core';
import SwiperCore,{ SwiperOptions, Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  images: string[] = [
    'assets/images/banner-1.jpeg',
    'assets/images/banner-2.jpeg',
    'assets/images/banner-3.jpeg',
  ]

  config: SwiperOptions = {};

  constructor() { }
}
