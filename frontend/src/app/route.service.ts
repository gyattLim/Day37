import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { User } from "./models";

const URL = "http://localhost:8080"

@Injectable()
export class RouteService {

  http = inject(HttpClient)

  proceed = false


  // readonly URL1 = "http://localhost:8080"
  
  register(data: User): Promise<any> {
    return firstValueFrom(
      // this.http.post<any>(`${this.URL1}/api/user`, data)

      // Since we have created a proxy in proxy.config.json, it would auto route to localhost:8080 when it see /api
      this.http.post<any>(`/api/user`, data)
    )
  }
}
