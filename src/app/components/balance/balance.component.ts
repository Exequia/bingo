import { Component, Input, OnInit } from '@angular/core';
import { BalanceType } from '@app/models';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit{
  @Input() balance: number | undefined = 0;
  @Input() balanceType: BalanceType | undefined;
  balanceTypeIcon: string | undefined = undefined;

  ngOnInit(): void {
    if (!!this.balanceType) {
      this.balanceTypeIcon = this.balanceType === BalanceType.Add ? '+' : '-';
    }
  }
}
