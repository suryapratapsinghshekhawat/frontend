import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  template: `
           <div class="container my-5">
           <h2 class="mb-3">Employees List</h2>
              <table class="table table-success table-striped">
               <thead>
                <tr>
                  <th> Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Salary</th>
                  <th>Department</th>
                  <th></th>
                </tr>
               </thead>
               <tbody >
                <tr *ngFor="let emp of employees">
                  <td>{{emp.id}}</td>
                  <td>{{emp.name}}</td>
                  <td>{{emp.email}}</td>
                  <td>{{emp.phone}}</td>
                  <td>{{emp.salary}}</td>
                  <td>{{emp.department}}</td>
                  <td> <a  [routerLink]="['/employees', 'edit', emp.id ]" > View </a></td>
                </tr>
               </tbody>
  

              </table>

           </div>
  `,
  styles: [
  ]
})
export class EmployeesListComponent {

  public employees!: Employee[];

   constructor(private employeeService: EmployeeService){}

   ngOnInit(){
     this.employeeService.getAllEmployees().subscribe({
      next: data  =>{this.employees=data
         console.log(data);
         
      },
      error: errors =>{
        console.log(errors);
        
      }
    } )
      
   }

  // employees: Employee[] =[
  //   {
  //     id: 'ab1',
  //     name: 'Surya',
  //     email: 'surya@124',
  //     phone: 1234567891,
  //     salary: 30000,
  //     department: 'Devloper'
  //   },
  //   {
  //     id: 'bb2',
  //     name: 'Karan',
  //     email: 'karan@124',
  //     phone: 1234567842,
  //     salary: 40000,
  //     department: 'Devloper'
  //   },
  //   {
  //     id: 'cb4',
  //     name: 'Rahul',
  //     email: 'rahul@124',
  //     phone: 1234587893,
  //     salary: 20000,
  //     department: 'Devloper'
  //   },
  //   {
  //     id: 'pb7',
  //     name: 'Mehul',
  //     email: 'mehul@124',
  //     phone: 1234562894,
  //     salary: 25000,
  //     department: 'Devloper'
  //   }
  // ]



}
