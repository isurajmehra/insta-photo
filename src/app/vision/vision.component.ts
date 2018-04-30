import { Component, OnInit } from '@angular/core';

import { VisionService } from '../vision.service';
import { VisionAnalytics } from './model';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css']
})
export class VisionComponent implements OnInit {
  imageSrc: string;
  captions: string;
  error: string;
  file: any;

  constructor(private visionService: VisionService) { }

  ngOnInit() { }

  previewImage(event: any) {
    if (!event.target.files && !event.target.files[0]) {
      return;
    }

    this.file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (ev: any) => {
      this.imageSrc = ev.target.result;
    };

    reader.readAsDataURL(this.file);
  }

  analyzeButtonClick() {
    if (!this.imageSrc) {
      return;
    }

    this.visionService.processImage(this.file).subscribe(
      (data: VisionAnalytics) => {

        let result = '';
        data.description.captions.forEach(element => {
          result += `${element.text} `;
        });

        data.description.tags.forEach(element => {
          result += `#${element} `;
        });

        this.captions = result;

      }, // success path
      error => (this.error = error) // error path
    );
  }
}
