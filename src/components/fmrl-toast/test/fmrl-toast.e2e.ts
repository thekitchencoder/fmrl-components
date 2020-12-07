import { newE2EPage } from '@stencil/core/testing';

describe('fmrl-toast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fmrl-toast></fmrl-toast>');

    const element = await page.find('fmrl-toast');
    expect(element).toHaveClass('hydrated');
  });
});
