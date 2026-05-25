const HARNESS_CRYPTO_PAYMENT = {
  "profile": "startup_checkout",
  "chain": "unconfigured",
  "asset": "USDC",
  "amountUsd": "5",
  "checkoutUrl": null,
  "receiveAddress": null,
  "addressEnvLocked": false,
  "exposeReceiveAddress": false,
  "memo": "conway-ui-factory:startup:mpkk0iuz",
  "configured": false,
  "livePaymentAllowed": false,
  "verification": {
    "rpcConfigured": false,
    "explorerConfigured": false,
    "webhookConfigured": false
  },
  "secretPolicy": "no_private_keys_public_addresses_only"
};

document.addEventListener('click', async (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const value = target.getAttribute('data-copy');
  if (!value) return;
  try {
    await navigator.clipboard.writeText(value);
    target.textContent = 'Copied';
  } catch {
    target.textContent = 'Copy manually';
  }
});

window.HARNESS_CRYPTO_PAYMENT = HARNESS_CRYPTO_PAYMENT;
