import { newSpecPage } from '@stencil/core/testing';
import { FmrlToast } from '../fmrl-toast';

describe('fmrl-toast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FmrlToast],
      html: `<fmrl-toast></fmrl-toast>`,
    });
    expect(page.root).toEqualHtml(`
      <fmrl-toast>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fmrl-toast>
    `);
  });
});
