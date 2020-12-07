import { newE2EPage } from '@stencil/core/testing';

describe('fmrl-link-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fmrl-link-input></fmrl-link-input>');

    const element = await page.find('fmrl-link-input');
    expect(element).toHaveClass('hydrated');
  });
});
