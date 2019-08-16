import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private service: ProductService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      productId: null,
      productName: '',
      cost: null,
      description: ''
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.productId == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postProduct(form.value).subscribe(res => {
      console.log("here")
      this.toastr.success('Inserted successfully', 'Product Added!!');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putProduct(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'Product Edited!!');
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}
