import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DialogServiceService } from '../../../../shared/services/dialog/dialog-service.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  @Input() data: any[];
  @Input() columns: any;
  @Input() actions: any;
  @Input() type: any;
  @Input() id: any;


  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() openDialog = new EventEmitter();
  @Output() onView = new EventEmitter();
  public showActions: boolean = false;
  public isAdd: boolean = false;
  public imageUrl = environment.imageUrl
  @Input() img: boolean = false;
  public editbtn = {
    type: 'button',
    name: 'btn',
    class: 'btn btn-primary',
    value: 'Edit',
  };
  public deletebtn = {
    type: 'button',
    name: 'btn',
    class: 'btn btn-primary',
    value: 'Delete',
  };

  constructor(private dialogService: DialogServiceService) {}

  ngOnInit(): void {
    this.isAdd = this.actions.add ? true : false;

    this.showActions = !!Object.keys(this.actions).length;
    // this.columns = Object.keys(this.data[0]);
  }

  delete(data: any) {
    this.onDelete.emit(data);
  }
  edit(data: any) {
    this.onEdit.emit(data);
  }
  view(data: any) {
    this.onView.emit(data);
  }
}
