import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from 'src/app/shared/services/categories/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  @Input() props: any;

  public title = null;
  public description = null;
  public buttons: any = {};
  public categoryId: string;

  public type: string;
  public data: any;
  public categoryForm: FormGroup;

  public categoryNameInput = {
    type: 'text',
    placeholder: 'Category',
    class: 'form-control',
  };

  public statusOptions = [
    {
      state: 'Active',
    },
    {
      state: 'Inactive',
    },
  ]; 

  constructor(
    public ngbModal: NgbActiveModal,
    private categoryService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      category_name: new FormControl('', [Validators.required, Validators.maxLength(5)]),
      category_description: new FormControl('', [Validators.required, Validators.maxLength(6)]),
      status: new FormControl('Active'),
    });
    this.setDialogProps(this.props);
  }

  setDialogProps(dialogdata: any) {
    this.type = dialogdata.type;
    this.data = dialogdata.data;
    this.title = dialogdata.title;
    this.buttons = dialogdata.buttons;
    if (['edit', 'view'].includes(this.type)) {
      this.categoryId = dialogdata.data._id;
      this.categoryForm.patchValue(this.data);
    }

  }
  onCreate() {
    this.categoryService.postCategory(this.categoryForm.value).subscribe(
      (res) => {
        console.log(res);
        this.onClose();
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(this.categoryForm.value);
  }

  onEdit() {
    debugger
    this.categoryService
      .updateCategory(this.categoryId, this.categoryForm.value)
      .subscribe(
        (res) => {
          console.log(res);
          this.onClose();
        },
        (err) => {
          console.log(err);
        }
      );
  }

  onClose() {
    this.ngbModal.close();
  }
}
