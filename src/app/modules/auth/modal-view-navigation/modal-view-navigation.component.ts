 // >> opening-modal-view
import { Component, ViewContainerRef } from "@angular/core";
import { HomeModalViewComponent } from "@app/modules/auth/modal-view-navigation/home-modal-view.component";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular/modal-dialog";

@Component({
    moduleId: module.id,
    providers: [ModalDialogService],
    templateUrl: "./modal-view-navigation.component.html"
})
export class ModalViewNavigationComponent {
    constructor(private _modalService: ModalDialogService, private _vcRef: ViewContainerRef) {
        console.log("-----------ModalViewNavigationComponent-----------");
    }

    onTap(): void {
        const options: ModalDialogOptions = {
            viewContainerRef: this._vcRef,
            context: {},
            fullscreen: false
        };
        this._modalService.showModal(HomeModalViewComponent, options)
            .then((result: string) => {
                console.log(result);
            }).catch((e) => {
            console.error("error ", e);
        });
    }
    // << opening-modal-view
}
