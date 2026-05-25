# Crypto Payment Rail

Mode: startup
Profile: startup_checkout
Objective: startup factory: offer, website, payment, users, retention, runway, and profit

## Status

- Configured: false
- Live payment allowed: false
- Unsafe private secret detected: false
- Chain: unconfigured
- Asset: USDC
- Suggested USD amount: 5
- Receipt verification: rpc=false explorer=false webhook=false
- Public receive address exposed: false

## Env Gate

- `HARNESS_CRYPTO_PAYMENT_ALLOWED=true` enables live payment copy on a configured public receive address.
- `HARNESS_CRYPTO_EXPOSE_RECEIVE_ADDRESS=true` is required before a direct wallet receive address is written into public checkout files.
- `HARNESS_CRYPTO_CHECKOUT_URL` can be used instead when you want a public payment link without writing the wallet address into this repo.
- `HARNESS_CRYPTO_RECEIVE_ADDRESS`, `HARNESS_CRYPTO_EVM_ADDRESS`, `HARNESS_CRYPTO_SOLANA_ADDRESS`, or `HARNESS_CRYPTO_LIGHTNING_ADDRESS` are public receive addresses.
- `HARNESS_CRYPTO_RPC_URL`, `HARNESS_CRYPTO_EXPLORER_API_KEY`, and `HARNESS_CRYPTO_WEBHOOK_SECRET` can verify receipts without exposing values.
- Private keys, seed phrases, and wallet secrets are never accepted by the harness.

## Revenue Rule

Do not count crypto revenue from a button click. Count it only from verified on-chain receipt, signed webhook, or explicit operator-recorded proof.
