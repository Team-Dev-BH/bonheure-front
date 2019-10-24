import { Component } from "@angular/core";
import { fade } from "./animations/animations";

// TODO : add fade animation for all route links
// import { fadeRouterAnimation } from "./animations/animations";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [fade]
})
export class AppComponent {
  title = "bonheure-front";

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
