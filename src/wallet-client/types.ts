// https://github.com/keybase/client/blob/8abfc8dc60baf072b62e12b92a6ce1b81ce39cf3/go/protocol/stellar1/local.go

/**
 * The status of a payment.
 */
export type PaymentStatus = 'none' | 'pending' | 'claimable' | 'completed' | 'error' | 'unknown' | 'canceled'

/**
 * An asset.
 */
export interface Asset {
  type: string
  code: string
  issuer: string
  verifiedDomain: string
  issuerName: string
  desc: string
  infoUrl: string
}

/**
 * An exchange rate, which specifies a currency and the rate of exchange between an asset and that currency.
 */
export interface ExchangeRate {
  currency: string
  rate: string
}

/**
 * A balance.
 */
export interface Balance {
  asset: Asset
  amount: string
  limit: string
}

/**
 * An account, with money inside!
 */
export interface Account {
  accountId: string
  name: string
  isPrimary: boolean
  balance: null | Balance[]
  exchangeRate: ExchangeRate
}

/**
 * A transaction, where a user sends money to another user.
 */
export interface Transaction {
  txId: string
  time: number
  status: PaymentStatus
  statusDetail: string
  amount: string
  asset: Asset
  displayAmount: string
  displayCurrency: string
  sourceAmountMax: string
  sourceAmountActual: string
  sourceAsset: Asset
  isAdvanced: boolean
  summaryAdvanced: string
  operations: null | string[]
  fromStellar: void | string
  toStellar: void | string
  fromUsername: void | string
  toUsername: void | string
  note: string
  noteErr: string
  unread: boolean
  publicNote: string
  publicNoteType: string
  feeChargedDescription: string
}

/**
 * In batch sends, one individual send
 */
export interface PaymentBatchItem {
  recipient: string
  amount: string
  message?: string
}

export interface BatchItemResult {
  username: string
  startTime: number
  submittedTime: number
  endTime: number
  txId: string
  status: number
  statusDescription: string
  error: null | string
}

/**
 * A batch send result
 */
export interface BatchResult {
  payments: BatchItemResult[]
  startTime: number
  preparedTime: number
  allSubmittedTime: number
  endTime: number
  overallDurationMs: number
  prepareDurationMs: number
  submitDurationMs: number
  waitDurationMs: number
  countSuccess: number
  countError: number
  countPending: number
  avgDurationMs: number
  avgSuccessDurationMs: number
  avgErrorDurationMs: number
}

export interface HistoryResultItem {
  payment: Transaction
}
