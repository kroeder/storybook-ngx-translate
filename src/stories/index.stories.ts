import { storiesOf } from '@storybook/angular';
import { I18nModule } from 'src/app/i18n/i18n.module';

storiesOf('Button', module).add('with text', () => ({
  template: `
    <button>{{ 'basic.submit' | translate }}</button>
  `,
  moduleMetadata: {
    imports: [I18nModule]
  },
  props: {
    text: 'Hello Button'
  }
}));
