import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

// export interface User {
//   name: string,
//   username: string,
//   phone: number,
//   email: string
// }

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  // getBeer() {
  //   return this.http.get('https://api.openbrewerydb.org/breweries')
  // }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(userId:number) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId);
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

}
