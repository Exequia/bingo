import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DASHBOARD_AMOUNT_MIN, DASHBOARD_MIN_PRICE } from '@app/config';
import { BalanceType } from '@app/models';
import { GameFacade } from '@app/store/facades/gameFacade';
import { PlayerFacade } from '@app/store/facades/playerFacade';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
  localPlayer$ = this.playerFacade.player$;
  balanceType = BalanceType.Subtract;
  dashboardAmountMin = DASHBOARD_AMOUNT_MIN;
  dashboardPrice: number = DASHBOARD_MIN_PRICE;
  bill = this.dashboardAmountMin * this.dashboardPrice;
  dashboardAmountMax: number = DASHBOARD_AMOUNT_MIN;
  shoppingForm = new FormGroup({
    dashboardAmount: new FormControl<number>(this.dashboardAmountMin, [
      Validators.required,
    ]),
  });

  constructor(
    private readonly translate: TranslateService,
    private readonly gameFacade: GameFacade,
    private readonly playerFacade: PlayerFacade
  ) {
    this.localPlayer$.subscribe(player => {
      this.dashboardPrice = player.dashboardPrice || DASHBOARD_MIN_PRICE;
      this.bill = this.dashboardAmountMin * this.dashboardPrice;
      this.dashboardAmountMax = (player.amount || 0) / this.dashboardPrice;
    })
  }

  ngOnInit(): void {
    this.shoppingForm
      .get('dashboardAmount')
      ?.valueChanges.subscribe((value) => {
        if (!value || value < this.dashboardAmountMin) {
          value = 0;
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
      this.gameFacade.playerShopping(
        this.shoppingForm.get('dashboardAmount')?.value!
      );
    }
  }
}
