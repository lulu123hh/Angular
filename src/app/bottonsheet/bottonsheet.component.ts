import { Component, inject } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-bottonsheet',
  standalone: true,
  imports: [MatButtonModule, MatBottomSheetModule],
  templateUrl: './bottonsheet.component.html',
})
export class BottonsheetComponent {
  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponentSheet);
  }
}
@Component({
  selector: 'app-bottonsheetala',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './bottonsheet.component.dab.html',
})
export class BottomSheetComponentSheet {
  private _bottomSheetRef =
    inject<MatBottomSheetRef<BottomSheetComponentSheet>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}