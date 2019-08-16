import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private service: ProductService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(product: Product) {
    this.service.formData = Object.assign({}, product);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteProduct(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'Product Deleted');
      });
    }
  }

}
