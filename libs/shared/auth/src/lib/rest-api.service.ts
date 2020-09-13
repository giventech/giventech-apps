import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


//TODO Consider making the RestAPI service a generic one for secure and non-secure calls
//https://medium.com/netscape/the-better-way-to-write-api-service-in-angular-4-c9178ecf7f48

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  //Todo make this an environment variable
  private readonly  ENDPOINT;
  private searchParam:string;
  // https://github.com/nrwl/nx/issues/208
  constructor(private http: HttpClient,
              private activatedRoute: ActivatedRoute
              ) {
    this.ENDPOINT = 'http://localhost:8080/api/';
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

    //TODO  Question: Is this possible to pass a route to a Service
    //TODO  Can we get a reference to the Activated Route from a service
    /** Yes you can, it is dependency injection so the activated route is available all throughout the application
     *  However this is is not relevant to making
     */

    //https://www.techiediaries.com/pass-parameters-angular-10-service-inject/
    let params: URLSearchParams =  new URLSearchParams();
    return  this.http.get(this.ENDPOINT+'hello?name=fabrice',{...this.commonOptions()

    });
  }





}
