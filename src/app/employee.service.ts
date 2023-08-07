import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee } from './models/employee.model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string= "https://localhost:7111/api/employees/";
  constructor(private http :HttpClient) { }

  

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
     return throwError(error.message || 'server error');
  }

  addEmployee(employee: Employee):Observable<Employee>{
    employee.id= '00000000-0000-0000-0000-000000000000';
     return this.http.post<Employee>(this._url, employee);
  }

  getEmployee(id: string):Observable<Employee>{
     return this.http.get<Employee>(this._url +id);
  }

  updateEmployee(id: string , updateEmployeeRequest: Employee ):Observable<Employee>
  {
    return this.http.put<Employee>(this._url +id , updateEmployeeRequest);
  }

  deleteEmployee(id: string):Observable<Employee>{
    return this.http.delete<Employee>(this._url +id);
  }
}
