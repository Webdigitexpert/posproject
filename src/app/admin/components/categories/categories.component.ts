import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DialogServiceService } from '../../../shared/services/dialog/dialog-service.service';
import { AddCategoryComponent } from '../../shared/components/category/add-category.component';

import { DeleteComponent } from '../../../shared/components/delete/delete.component';
import { CategoriesService } from 'src/app/shared/services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(
    private dialogService: DialogServiceService,
    private categoryService: CategoriesService
  ) {}

  @Output() toDeletebyId = new EventEmitter();
  public gettype: any;
  public categories: any;
  public addnewbtn = {
    type: 'button',
    name: 'btn',
    class: 'btn btn-primary',
    value: 'Add New',
  };

  public inputdata = {
    type: 'button',
    name: 'btn',
    class: 'btn btn-primary',
    value: 'Add New',
  };
  public actions = {
    edit: true,
    delete: true,
    add: true,
    view: true,
  };

  public columns = [
    {
      label: 'Category Name',
      field: 'category_name',
    },
    {
      label: 'Category Description',
      field: 'category_description',
    },
    {
      label: 'Category Status',
      field: 'status',
    },
  ];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (res) => {
        this.categories = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.categoryService._categories$.subscribe(res => {
      this.categories = res;
    });
  }
  opendialog(data: any) {
    this.dialogService
      .openDialog(
        {
          title: 'Add Category',
          buttons: {
            add: 'Add',
            cancel: 'Cancel',
          },
          type: 'add',
        },
        AddCategoryComponent
      )
      .then((res: any) => {
        console.log(res);
      });
  }
  deleteCategory(data: any) {
    console.log(data);
    
    this.dialogService
      .openDialog(
        {
          title: 'Delete Category',
          buttons: {
            delete: 'Delete',
            cancel: 'Cancel',
          },
          data: data,
          type: 'deleteCategory',
        },
        DeleteComponent
      )
      .then((res: any) => {
        console.log(res);
      });
  }

  editCategory(data: any) {
    console.log(data);
    this.dialogService
      .openDialog(
        {
          title: 'Edit Category',
          buttons: {
            edit: 'Add',
            cancel: 'Cancel',
          },
          data: data,
          type: 'edit',
        },
        AddCategoryComponent
      )
      .then((res: any) => {
        console.log(res);
      });
  }

  viewCategory(data: any) {
    console.log(data);
    this.dialogService
      .openDialog(
        {
          title: 'View Category',
          buttons: {
            cancel: 'Cancel',
          },
          type: 'view',
          data: data,
        },
        AddCategoryComponent
      )
      .then((res: any) => {
        console.log(res);
      });
  }
}
