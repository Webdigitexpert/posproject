import {
  Component,
  Input,
  OnInit,
  ɵɵtrustConstantResourceUrl,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  ) {}

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      category_name: new FormControl('', [Validators.required]),
      category_description: new FormControl('', [Validators.required]),
      status: new FormControl(''),
    });
    this.setDialogProps(this.props);
  }

  setDialogProps(dialogdata: any) {
    console.log(dialogdata);
    this.type = dialogdata.type;
    this.data = dialogdata.data;
    this.categoryId =
      this.type === 'edit' || this.type === 'view' ? dialogdata.data._id : '';
    this.title = dialogdata.title;
    this.buttons = dialogdata.buttons;
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
    console.log('hello');
    this.categoryService
      .updateCategory(this.categoryId, this.categoryForm.value)
      .subscribe(
        (res) => {
          console.log(res);
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
