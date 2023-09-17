import { Component, ViewChild } from '@angular/core';
import { HttpDataService } from '../services/service.service';
import { Ticket } from '../model/ticket.model';
import { NgForm } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-teleticket',
  templateUrl: './teleticket.component.html',
  styleUrls: ['./teleticket.component.css']
})
export class TeleticketComponent {
  @ViewChild('tticketForm', {static:false})
  ticketForm!: NgForm;

  ticketData!: Ticket;

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'dni', 'name', 'email', 'address', 'time', 'price']

@ViewChild(MatPaginator, {static:true})
paginator!: MatPaginator;
isEditMode= false

@ViewChild(MatSort)
sort!: MatSort;

constructor(private HttpDataService: HttpDataService){

  this.ticketData = {} as Ticket;

}

ngOnInit(): void{
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  this.getAllTickets();
}

onSubmit() {
  if (this.ticketForm.form.valid) {
    console.log('valid');
    console.log('Create');
    this.addTicket();
  } else {
    console.log('Invalid data');
  }
}


getAllTickets(){
  this.HttpDataService.getList().subscribe((response: any)=>{
    this.dataSource.data = response;
  });
}


addTicket(){
  this.ticketData.id = 0;
  this.HttpDataService.createItem(this.ticketData).subscribe((response: any)=>{
    this.dataSource.data.push({...response});
    this.dataSource.data = this.dataSource.data.map((o:any)=>{
      return 0;
    });
  });
}

}
