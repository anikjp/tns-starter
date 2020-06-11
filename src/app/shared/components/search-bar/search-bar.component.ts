import { Component, OnInit } from "@angular/core";
import { SearchBar } from "tns-core-modules/ui/search-bar";

@Component({
    moduleId: module.id,
    selector: "amway-search-bar",
    templateUrl: "./search-bar.component.html",
    styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnInit {
    searchPhrase: string;
    a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    constructor() {
        //
    }

    ngOnInit(): void {
    }

    onSubmit(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Searching for ${searchBar.text}`);
    }

    onTextChanged(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Input changed! New value: ${searchBar.text}`);
    }

    onClear(args) {
        setTimeout(() => {
            args.object.dismissSoftInput();
            console.log(`Clear event raised`);
        }, 200);
    }

}
