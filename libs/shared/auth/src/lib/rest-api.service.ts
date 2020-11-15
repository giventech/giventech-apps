import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

// TODO Great documentation


//https://itnext.io/an-oauth-2-0-introduction-for-beginners-6e386b19f7a9
//TODO Consider adding OAUth
//https://offering.solutions/blog/articles/2020/05/18/authentication-and-authorization-with-angular-and-asp.net-core-using-oidc-and-oauth2/

//TODO Oidc with Facade

//  https://medium.com/interoperable/using-httpinterceptor-to-add-a-bearer-token-to-api-calls-with-ng-oidc-client-6b088d680e73

//TODO Consider making the RestAPI service a generic one for secure and non-secure calls
//https://medium.com/netscape/the-better-way-to-write-api-service-in-angular-4-c9178ecf7f48


//TODO with Spring 5

//  https://dev.to/shyamala_u/spring-boot--spring-security-5--oauth2oidc-client---basics-4ibo


@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  //Todo make this an environment variable
  private readonly  ENDPOINT;
  private searchParam:string;
  // https://github.com/nrwl/nx/issues/208
  constructor(private http: HttpClient,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
    this.ENDPOINT = 'http://localhost:8080/api/';
  }


  obtainAccessToken(loginData){

    const httpParams= new HttpParams()
      .set("username",loginData.username)
      .set("password",loginData.password)
      .set("grant_type","password")
      .set("client_id","my-client")
      .set("client_secret","my-secret")
      .set("scope","read write trust");


    const authorisationHeader =
      new HttpHeaders(
        {
          'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
          'Authorization': 'Basic '+btoa("my-client:my-secret")
        });
    this.http.post('http://localhost:8080/oauth/token', httpParams, {headers:authorisationHeader})
      .subscribe(
        token => this.saveToken(token)
      )
  }

  saveToken(token){
    const expireDate = new Date().getTime() + (1000 * token.expires_in);
    this.setWithExpiry("access_token", token.access_token, expireDate);
    //this.router.navigate(['/']);



  }

  setWithExpiry(key, value, ttl) {
    const now = new Date()

    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
      value: value,
      expiry: now.getTime() + ttl,
    }
    localStorage.setItem(key, JSON.stringify(item))
  }

  getWithExpiry(key) {
    const itemStr = localStorage.getItem(key)
    // if the item doesn't exist, return null
    if (!itemStr) {
      return null
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage
      // and return null
      localStorage.removeItem(key)
      return null
    }
    return item.value
  }

  checkCredentials(){
    if (!this.getWithExpiry('access_token')){
      this.router.navigate(['/login']);
    }
  }
  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
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
    const params: URLSearchParams =  new URLSearchParams();
    return  this.http.get(this.ENDPOINT+'hello?name=fabrice',{...this.commonOptions()

    });
  }
}
