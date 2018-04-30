import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse
} from "@angular/common/http";

import { of } from "rxjs/observable/of";
import { Observable } from "rxjs/Observable";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import "rxjs/add/operator/catch";

import { environment } from "../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/octet-stream",
    "Ocp-Apim-Subscription-Key": environment.visionapi_subscription_key
  })
};

@Injectable()
export class VisionService {
  constructor(private http: HttpClient) {}

  processImage(sourceImage): Observable<HttpResponse<any>> {
    const data = JSON.stringify({
      url: sourceImage
    });

    return this.http
      .post(environment.visionapi_url, data, httpOptions)
      .catch((e: any) => Observable.throw(this.handleError(e)));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      "Something bad happened; please try again later."
    );
  }
}
