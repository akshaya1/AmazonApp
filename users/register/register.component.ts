import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      userId: null,
      userName: '',
      password : ''
    }

  }

  onSubmit(form: NgForm) {
    if (form.value.userId == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postUser(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'User Registration Done!!');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putUser(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'User Registration Done!!');
      this.resetForm(form);
      this.service.refreshList();
    });

  }
}
