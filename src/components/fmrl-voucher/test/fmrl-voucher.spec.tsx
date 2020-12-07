import { newSpecPage } from '@stencil/core/testing';
import { FmrlVoucher } from '../fmrl-voucher';

describe('fmrl-voucher', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FmrlVoucher],
      html: `<fmrl-voucher></fmrl-voucher>`,
    });
    expect(page.root).toEqualHtml(`
      <fmrl-voucher>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fmrl-voucher>
    `);
  });
});
