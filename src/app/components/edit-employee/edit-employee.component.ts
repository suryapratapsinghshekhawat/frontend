import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  constructor(private router: ActivatedRoute , private employeeService: EmployeeService,
              private navigateRouter: Router){}

  employeeDetails: Employee ={
    id:'',
    name:'',
    email: '',
    phone:0,
    salary:0,
    department:''
  };

 ngOnInit(): void{
   this.router.paramMap.subscribe({
      next: (params) => {
         const id = params.get('id');

         if(id){
            // call api
            this.employeeService.getEmployee(id).subscribe({
               next:(response)=>{
                    this.employeeDetails=response;
               }
            })
         }
      }
   })
 }

  editEmployee(){
      this.employeeService.updateEmployee(this.employeeDetails.id ,this.employeeDetails)
        .subscribe({
           next: (response) =>{
            this.navigateRouter.navigate(['employees']);
           }
        })
  }

  deleteEmployee(id: string){
    this.employeeService.deleteEmployee(id)
    .subscribe({
      next :(response) =>
      this.navigateRouter.navigate(['employees'])
    })
  }

}
