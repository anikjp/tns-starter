declare var UIApplication: any;
declare var UIStatusBarStyle: any;

export function setStatusBarColors() {
    UIApplication.sharedApplication.setStatusBarStyleAnimated(UIStatusBarStyle.DarkContent, false);
    UIApplication.sharedApplication.setStatusBarHiddenWithAnimation(false, 3);
}
