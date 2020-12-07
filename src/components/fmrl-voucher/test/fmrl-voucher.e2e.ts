import { newE2EPage } from '@stencil/core/testing';

describe('fmrl-voucher', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fmrl-voucher></fmrl-voucher>');

    const element = await page.find('fmrl-voucher');
    expect(element).toHaveClass('hydrated');
  });
});
