import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { MatCardModule } from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material";
import { MatButtonModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

import { VisionComponent } from "./vision/vision.component";
import { VisionService } from "./vision.service";

@NgModule({
  declarations: [AppComponent, VisionComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [VisionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
