import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StackoverflowService {
  
 
 //baseUrl ='https://api.stackexchange.com/2.2/search/advanced';
 baseUrl ='https://api.stackexchange.com/2.2'
 
  constructor(private http: HttpClient) { }

  getList() {
    let params = new HttpParams();
    let hdrs = new HttpHeaders();
    hdrs.append('Accept-Encoding', 'gzip, deflate')
     params = params.append('order', 'desc');
     params = params.append('sort', 'activity');
     params = params.append('site', 'stackoverflow');
    return this.http.get(`${this.baseUrl}/questions`,{headers: hdrs,params:params}).pipe(map(data=>{
      const ques =[];
      for(const items in data){
        if(data.hasOwnProperty(items)){
          ques.push(data[items]);
        }
      }
      console.log(ques);
      return ques;
    }
      

    ))
  }
}