import { newSpecPage } from '@stencil/core/testing';
import { FmrlLinkInput } from '../fmrl-link-input';

describe('fmrl-link-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FmrlLinkInput],
      html: `<fmrl-link-input></fmrl-link-input>`,
    });
    expect(page.root).toEqualHtml(`
      <fmrl-link-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fmrl-link-input>
    `);
  });
});
