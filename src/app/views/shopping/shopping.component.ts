import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BalanceType } from '@app/models';
import { GameFacade } from '@app/redux/facades/gameFacade';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
  balanceType = BalanceType.Subtract;
  dashboardAmountMin = 1;
  dashboardPrice = 5;
  bill = this.dashboardAmountMin * this.dashboardPrice;
  shoppingForm = new FormGroup({
    dashboardAmount: new FormControl<number>(this.dashboardAmountMin, [
      Validators.required,
    ]),
  });

  constructor(private readonly translate: TranslateService, private readonly gameFacade: GameFacade) {}

  ngOnInit(): void {
    this.shoppingForm
      .get('dashboardAmount')
      ?.valueChanges.subscribe((value) => {
        if (!value || value < this.dashboardAmountMin) {
          value = 0
        }
        this.bill = value * this.dashboardPrice;
      });
  }

  getErrorMessage() {
    if (this.shoppingForm.get('dashboardAmount')?.hasError('required')) {
      return this.translate.instant('common.error.required');
    }
  }

  onSubmit() {
    if (this.shoppingForm.valid) {
      this.gameFacade.playerShopping(this.shoppingForm.get('dashboardAmount')?.value!)
    }
  }
}
