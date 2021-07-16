import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor(public ngbModel: NgbModal) { }

  openDialog(props: any, component?): Promise<any> {
    console.log(props)
    var modelRef = this.ngbModel.open(component, { size: 'md  ', backdrop: 'static' });
    modelRef.componentInstance.props = props;
    return modelRef.result;
  }
  
}
