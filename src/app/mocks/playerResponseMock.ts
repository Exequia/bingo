import {
  BalanceType,
  CreatePlayerResponse,
  GiftResponse,
  GiftResponseType,
} from '@app/models';

const initBalance = 100;
export const GiftPlayerResponseMock: GiftResponse = {
  type: GiftResponseType.credit,
  balance: initBalance,
  balanceType: BalanceType.Add,
};

export const CreatePlayerResponseMock: CreatePlayerResponse = {
  player: {
    id: '56465464',
    name: '',
    amount: initBalance,
  },
  gift: GiftPlayerResponseMock,
};
