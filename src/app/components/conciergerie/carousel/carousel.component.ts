import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewEncapsulation,
  AfterViewInit,
  ChangeDetectorRef
} from "@angular/core";
import { NgbCarouselConfig, NgbSlide } from "@ng-bootstrap/ng-bootstrap"; // instead used ngu-carousel
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { NguCarousel, NguCarouselConfig } from "@ngu/carousel";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
  providers: [NgbCarouselConfig],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit, AfterViewInit {
  name = "Angular";
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @Input() listServices: [];
  @ViewChild("myCarousel", { static: true }) myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 3, sm: 3, md: 3, lg: 3, all: 0 },
    load: 0,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: false,
    touch: true,
    velocity: 0.2
  };

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    console.log(this.listServices);
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }
}
