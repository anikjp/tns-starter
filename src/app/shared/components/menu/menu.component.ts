import { Component, OnInit } from '@angular/core';
import { PresetType } from '@app/shared/models/ui/types/presets';

@Component({
    moduleId: module.id,
    selector: 'app-menu',
    templateUrl: 'menu.component.html'
})

export class MenuComponent implements OnInit {
    constructor() {
      //
    }

    ngOnInit() {}

    onSelectPresetTap(preset: PresetType) {
        // TODO: navigate to the preset URL
    }
}
