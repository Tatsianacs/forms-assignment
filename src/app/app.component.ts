import {Component, ViewChild} from '@angular/core';
import {Form, NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('f') generalForm: NgForm;
    isSubmitted = false;
    defaultPlan='pro';
    userData = {
        email: '',
        plan: '',
        password: ''
    };

    onSubmit() {
        this.isSubmitted = true;
        console.log(this.generalForm);
        this.userData.email = this.generalForm.value.email;
        this.userData.plan = this.generalForm.value.plan;
        this.userData.password = this.generalForm.value.password;
        //this.generalForm.reset();
    }
}
