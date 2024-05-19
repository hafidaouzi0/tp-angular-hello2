import {Component, OnInit} from '@angular/core';
import {RecordsService} from "../services/records.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

  employee1 : string[]=[]
  employee2 : string[]=[]
  employee3 : string[]=[]
  constructor(private service:RecordsService) { }
  public getEmployee1() {
    this.employee1=this.service.getInfo1();
  }
  public getEmployee2() {
    this.employee2=this.service.getInfo2();
  }
  public getEmployee3() {
    this.employee3=this.service.getInfo3();
  }
  ngOnInit(): void {
  }

}
