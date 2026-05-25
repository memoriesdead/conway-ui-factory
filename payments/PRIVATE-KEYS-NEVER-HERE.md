# Private Keys Never Go Here

The 24/7 harness may use public receive addresses or a public hosted checkout URL.

It must never write, request, checkpoint, or hard-code:

- wallet private keys
- seed phrases
- mnemonics
- signing keys
- exchange API secrets

Keep private wallet material outside the repo. Use a wallet, hardware signer, custody tool, or external secret manager. For direct payment pages, expose only a receive address after setting `HARNESS_CRYPTO_EXPOSE_RECEIVE_ADDRESS=true` intentionally.
