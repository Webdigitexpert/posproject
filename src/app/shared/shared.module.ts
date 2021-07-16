import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { SearchComponent } from './components/search/search.component';
import { ButtonComponent } from './components/button/button.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { DeleteComponent } from './components/delete/delete.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { InputTypeComponent } from './components/input-type/input-type.component';
import { SelectComponent } from './components/select/select.component';
import { TextareaComponent } from './components/textarea/textarea.component';

import { DialogServiceService } from './services/dialog/dialog-service.service';


@NgModule({
  declarations: [
    InputTypeComponent,
    SearchComponent,
    ButtonComponent,
    AddCustomerComponent,
    DeleteComponent,
    EditCustomerComponent,
    SelectComponent,
    TextareaComponent
  ],
  exports: [
    InputTypeComponent,
    SearchComponent,
    ButtonComponent,
    AddCustomerComponent,
    DeleteComponent,
    EditCustomerComponent,
    SelectComponent,
    TextareaComponent,
  ],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule
  ],
  providers: [DialogServiceService],
})
export class SharedModule { }
