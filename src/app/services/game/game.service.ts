import { Injectable } from '@angular/core';
import { GiftResponse } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor() { }

  // manageGameGift(gift: GiftResponse | undefined): Observable<> {
    
  //   switch (gift?.type) {
  //     case GiftResponseType.credit:
  //       component = WelcomeNewPlayerDialogComponent;
  //       data = { welcomePlayerAmmount: gift.balance };
  //       break;

  //     default:
  //       break;
  //   }

  // }
}
