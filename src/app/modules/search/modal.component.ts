import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';

@Component({
    selector: 'app-modal',
    template: `
		<StackLayout class="p-20">
            <Label class="h2 text-center" text="This is a modal page." textWrap="true"></Label>
            <Label class="h2 text-center" text="This is a modal page." textWrap="true"></Label>
            <Label class="h2 text-center" text="This is a modal page." textWrap="true"></Label>
            <Button class="btn btn-outline" text="Close Modal" (tap)="close()"></Button>
        </StackLayout>
	`
})
export class ModalComponent implements OnInit {

    constructor(private params: ModalDialogParams) {}

    ngOnInit() {}

    close() {
        this.params.closeCallback();
    }
}
