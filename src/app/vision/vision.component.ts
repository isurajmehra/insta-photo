import { Component, OnInit } from "@angular/core";

import { VisionService } from "../vision.service";

@Component({
  selector: "app-vision",
  templateUrl: "./vision.component.html",
  styleUrls: ["./vision.component.css"]
})
export class VisionComponent implements OnInit {
  imageSrc: string;
  response: string;
  error: string;

  constructor(private visionService: VisionService) {}

  ngOnInit() {}

  previewImage(event: any) {
    if (!event.target.files && !event.target.files[0]) {
      return;
    }

    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.imageSrc = event.target.result;
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  analyzeButtonClick() {
    if (!this.imageSrc) {
      return;
    }

    this.visionService.processImage(this.imageSrc).subscribe(
      data => (this.response = JSON.stringify(data.body, null, 2)), // success path
      error => (this.error = error) // error path
    );
  }
}
