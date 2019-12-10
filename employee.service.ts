import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseurl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.baseurl + '/employees/' + id)
      .pipe(


      );
  }

  public getEmployees(): Observable<Employee> {
    return this.http.get<Employee>(this.baseurl + '/employees/')
      .pipe(


      );
  }

}
