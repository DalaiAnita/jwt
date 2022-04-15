import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
apiUrl = environment.serviceUrl;
  constructor(private http:HttpClient) { }
  getUserData(data:any){
    return this.http.get(`${this.apiUrl}/UserRole/getUserRoles`,data)
    .pipe(map((data:any)=>{
    return data;
    }))
  }
}
