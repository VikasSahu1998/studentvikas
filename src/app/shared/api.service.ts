import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  //POST GET PUT DELETE Method

  postStudent(data:any){
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(
      map(
        (res => {
          return res;
        })))
            
      }

      getStudent(){
        return this._http.get<any>("http://localhost:3000/posts").pipe(
          map(
            (res => {
              return res;
            })))
                    
          }

          putStudent(data:any,id:number){
            return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(
              map(
                (res => {
                  return res;
                })))
                           
              }

              deleteStudent(id:number){
                return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(
                  map(
                    (res => {
                      return res;
                    })))
                  
                  
                  }


}
