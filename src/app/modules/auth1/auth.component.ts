import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { User } from '@app/core/models/user.model';

@Component({
    moduleId: module.id,
    selector: 'amway-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    isLoggingIn = true;
    user: User;
    processing = false;
    @ViewChild('password', {static: false}) password: ElementRef;
    @ViewChild('confirmPassword', {static: false}) confirmPassword: ElementRef;
    constructor() {
      console.log('----AuthComponent----');
    }

    ngOnInit(): void {

    }

    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    submit() {
        this.processing = true;
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.register();
        }
    }

    login() {

    }

    register() {
        this.alert('Your passwords do not match.');

        return;
    }

    forgotPassword() {
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }
    focusConfirmPassword() {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    }

    alert(message: string) {
        return alert({
            title: 'APP NAME',
            okButtonText: 'OK',
            message
        });
    }
}
