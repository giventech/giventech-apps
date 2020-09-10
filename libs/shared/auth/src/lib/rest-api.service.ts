import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


//TODO Consider making the RestAPI service a generic one for secure and non-secure calls
//https://medium.com/netscape/the-better-way-to-write-api-service-in-angular-4-c9178ecf7f48

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  //Todo make this an environment variable
  private readonly  ENDPOINT;
  // https://github.com/nrwl/nx/issues/208
  constructor(private http: HttpClient) {
    this.ENDPOINT = 'http://localhost:4200/';
  }

  /**
   * Generic options methods for all htttp calls
   * @param params
   * @param headers
   */
  commonOptions(): {params?:any, headers?: HttpHeaders} {
    return {};
  }
  /**
   * calls the API
   * @param name
   */
  readHelloWorld(name:string): Observable<any> {
     this.http.get(this.ENDPOINT+'hello/'+name).subscribe(
       (response) => {
          name = ''+response;
       }
     )
    return of(name);
  }
}
