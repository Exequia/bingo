import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-new-player-form',
  templateUrl: './new-player-form.component.html',
  styleUrls: ['./new-player-form.component.scss'],
})
export class NewPlayerFormComponent {
  @Output() setName: EventEmitter<string> = new EventEmitter<string>();
  profileForm = new FormGroup({
    name: new FormControl(null, [Validators.required])
  });
  
  constructor(private translate: TranslateService) {}
  
  getErrorMessage() {
    if (this.profileForm.get('name')?.hasError('required')) {
      return this.translate.instant('common.error.required');
    }
  }

  onSubmit() {
    if (this.profileForm.get('name')?.value) {
      this.setName.emit(this.profileForm.get('name')?.value!);
    }
  }
}
