import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import {
  NgbCarouselConfig,
  NgbCarousel,
  NgbSlide
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-carousel-ngb",
  templateUrl: "./carousel-ngb.component.html",
  styleUrls: ["./carousel-ngb.component.css"],
  providers: [NgbCarouselConfig],
  encapsulation: ViewEncapsulation.None
})
export class CarouselNgbComponent implements OnInit {
  @Input() listServices: [];
  showNavigationArrows = true;
  showNavigationIndicators = true;
  paused = true;
  interval = 0;

  @ViewChild("carousel", { static: true }) carousel: NgbCarousel;

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationArrows = true;
  }

  ngOnInit() {}
}
