import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

constructor(private emplyeeService :EmployeeService, private router: Router){}


addEmployeeRequest : Employee ={
  id:'',
  name:'',
  email: '',
  phone:0,
  salary:0,
  department:''
};

addEmployee(){
       this.emplyeeService.addEmployee(this.addEmployeeRequest).subscribe({
        next : data => {
          console.log(data);
         this.router.navigate(['employees']);
        }
    })
}

}
