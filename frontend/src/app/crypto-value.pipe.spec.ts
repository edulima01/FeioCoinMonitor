import { CryptoValuePipe } from './crypto-value.pipe';

describe('CryptoValuePipe', () => {
  it('create an instance', () => {
    const pipe = new CryptoValuePipe();
    expect(pipe).toBeTruthy();
  });
});
