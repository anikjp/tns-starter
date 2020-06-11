import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { TNSFancyAlert, TNSFancyAlertButton } from "nativescript-fancyalert";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Color } from "tns-core-modules/color";
import { isIOS } from "tns-core-modules/platform";

declare const SCLAlertViewShowAnimation: any;
declare const SCLAlertViewHideAnimation: any;
declare const NSUnderlineStyleSingle: any;
declare const NSCaseInsensitiveSearch: any;

@Component({
    moduleId: module.id,
    selector: "app-browse",
    templateUrl: "./notifications.component.html"
})
export class NotificationsComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.

    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }


    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    showSuccess() {
        TNSFancyAlert.showSuccess(
            "Success!",
            "Fancy alerts are nice.",
            "Yes they are!"
        );
    }

    showSuccessCustomEffects() {
        if (isIOS) {
            TNSFancyAlert.showAnimationType =
                TNSFancyAlert.SHOW_ANIMATION_TYPES.SlideInFromLeft;
            TNSFancyAlert.hideAnimationType =
                TNSFancyAlert.HIDE_ANIMATION_TYPES.SlideOutToRight;
            TNSFancyAlert.backgroundType = TNSFancyAlert.BACKGROUND_TYPES.Blur;
            TNSFancyAlert.soundURL = "bell.mp3";
            TNSFancyAlert.showSuccess(
                "Sound?",
                "You can use sound and customize many aspects like animation in/out, color, background style and much more.",
                "Amazing!"
            );
            this.reset();
        }
    }

    showSuccessDelay() {
        TNSFancyAlert.showSuccess(
            "Success!",
            "Fancy alerts are nice. This will disappear in 5 seconds.",
            "Close Now!",
            5
        );
    }

    showError() {
        TNSFancyAlert.showError(
            "Error!",
            "At least it looks good :)",
            "Yeah it does."
        );
    }

    showNotice() {
        TNSFancyAlert.showNotice(
            "Notice",
            `You've been officially notified that NativeScript is awesome.`,
            "Yeah it is!"
        );
    }

    showWarning() {
        TNSFancyAlert.showWarning("Warning", `#nowebview here.`, "Ok, Got It!");
    }

    showInfo() {
        if (isIOS) {
            TNSFancyAlert.showAnimationType =
                SCLAlertViewShowAnimation.SlideInFromBottom;
            TNSFancyAlert.hideAnimationType =
                SCLAlertViewHideAnimation.SlideOutToRight;
        }
        TNSFancyAlert.showInfo(
            "Info",
            `You can integrate any CocoaPod or Android library with NativeScript.`,
            "Sweet!"
        );
        if (isIOS) {
            this.reset();
        }
    }

    showEdit() {
        TNSFancyAlert.showEdit(
            "Edit",
            `We could edit something but won't right now.`,
            "Sounds Good"
        );
    }

    showWaiting() {
        TNSFancyAlert.showWaiting(
            "Waiting...",
            `It's like waiting for a WebView to render ;)`,
            "Uh yeah it is."
        );
    }

    showQuestion() {
        TNSFancyAlert.showQuestion(
            "Question",
            `Do you like developing with NativeScript?`,
            "Well yes I do!"
        );
    }

    showCustomImage() {
        TNSFancyAlert.showCustomImage(
            "nativescript.png",
            "#2B33FF",
            "Custom Image",
            `Using your own images is sure nice.`,
            "Yes!"
        );
    }

    showCustomButtonTimer() {
        TNSFancyAlert.showCustomButtonTimer(
            0,
            true,
            undefined,
            undefined,
            "Mission Impossible",
            `This will self-destruct in 5 seconds.`,
            "Ok"
        );
    }

    showCustomButtons() {
        const buttons = [
            new TNSFancyAlertButton({
                label: "One",
                action: () => {
                    console.log("One");
                }
            }),
            new TNSFancyAlertButton({
                label: "Two",
                action: () => {
                    console.log("Two");
                }
            }),
            new TNSFancyAlertButton({
                label: "Three",
                action: () => {
                    console.log("Three");
                }
            }),
            new TNSFancyAlertButton({
                label: "Four",
                action: () => {
                    console.log("Four");
                }
            }),
            new TNSFancyAlertButton({
                label: "Really? More?",
                action: () => {
                    console.log("more");
                }
            })
        ];
        TNSFancyAlert.showCustomButtons(
            buttons,
            undefined,
            undefined,
            "Got Buttons?",
            `Add as many as you'd like.`,
            "Ok"
        );
    }

    showCustomWidth() {
        TNSFancyAlert.showSuccess(
            "Success!",
            "This uses a custom width of 300.",
            `Oh that's nice.`,
            0,
            300
        );
    }

    customText() {
        const textAttribution = (value: any) => {
            const nsString = NSString.alloc().initWithString(value);
            const subTitle = NSMutableAttributedString.alloc().initWithString(value);

            const redRange = nsString.rangeOfStringOptions(
                "Yep",
                NSCaseInsensitiveSearch
            );
            subTitle.addAttributeValueRange(
                NSForegroundColorAttributeName,
                new Color("#BC1224").ios,
                redRange
            );

            const greenRange = nsString.rangeOfStringOptions(
                "that can be done",
                NSCaseInsensitiveSearch
            );
            subTitle.addAttributeValueRange(
                NSForegroundColorAttributeName,
                new Color("#528100").ios,
                greenRange
            );

            const underline = nsString.rangeOfStringOptions(
                "too!",
                NSCaseInsensitiveSearch
            );
            subTitle.addAttributeValueRange(
                NSUnderlineStyleAttributeName,
                NSUnderlineStyleSingle,
                underline
            );

            return subTitle;
        };
        TNSFancyAlert.showCustomTextAttributes(
            textAttribution,
            new TNSFancyAlertButton({
                label: "Wow, ok.",
                action: (value: any) => {
                    console.log(`Clicked ok.`);
                }
            }),
            undefined,
            undefined,
            "Custom text color?",
            `Yep, that can be done too!`,
            null
        );
    }

    showTextField() {
        TNSFancyAlert.showTextField(
            "Enter your name",
            "",
            new TNSFancyAlertButton({
                label: "Save",
                action: (value: any) => {
                    console.log(`User entered ${value}`);
                }
            }),
            undefined,
            undefined,
            "User Input?",
            `Yeah, sure we can.`,
            "Ok, lots of options."
        );
    }

    showSwitch() {
        TNSFancyAlert.showSwitch(
            `Don't show again`,
            "#58B136",
            new TNSFancyAlertButton({
                label: "Save",
                action: (isSelected: boolean) => {
                    console.log(`Don't show again was selected: ${isSelected}`);
                }
            }),
            "switch.png",
            "#B3714F",
            "Need a switch?",
            `It can be useful.`,
            "Got it."
        );
    }

    showCustomView() {
        const customView = UIView.alloc().initWithFrame(CGRectMake(0, 0, 215, 80));
        customView.backgroundColor = new Color("#FE00FC").ios;
        TNSFancyAlert.showCustomView(
            customView,
            undefined,
            undefined,
            "Add any view?",
            `Just pass in a any UIView.`,
            "Nice!"
        );
    }

    onButtonTap(): void {
        console.log("Button was pressed");
    }

    private reset() {
        setTimeout(() => {
            TNSFancyAlert.showAnimationType = undefined;
            TNSFancyAlert.hideAnimationType =
                TNSFancyAlert.HIDE_ANIMATION_TYPES.SlideOutToBottom;
            TNSFancyAlert.backgroundType = undefined;
            TNSFancyAlert.soundURL = undefined;
        }, 1000);
    }
}
