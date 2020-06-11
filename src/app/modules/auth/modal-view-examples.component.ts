import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular/modal-dialog";

import { ModalComponent } from "./modal.component";

@Component({
    selector: "app-search",
    moduleId: module.id,
    providers: [ModalDialogService],
    templateUrl: "./examples-list.component.html"
})
export class ModalViewExamplesComponent {
    links: Array<any>;

    constructor(private modalService: ModalDialogService, private viewContainerRef: ViewContainerRef) {
        this.links = [
            {
                title: "Modal view example", link: "/modal-view/sample-modal-view"
            },
            {
                title: "Modal view navigation", link: "/modal-view/modal-view-navigation"
            },
            {
                title: "Modal view ActionBar", link: "/modal-view/modal-view-actionbar"
            }
        ];
    }

    showModel(): void {
        console.log('Button was pressed');
        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: false,
            context: {}
        };
        this.modalService.showModal(ModalComponent, options);
    }
}
