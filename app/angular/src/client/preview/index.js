import { start } from '@storybook/core/client';

import './globals';
import render from './render';

const { clientApi, configApi, forceReRender } = start(render);

export const {
  setAddon,
  addDecorator,
  addParameters,
  clearDecorators,
  getStorybook,
  raw,
  load: coreLoad,
} = clientApi;

const framework = 'angular';
export const storiesOf = (...args) => clientApi.storiesOf(...args).addParameters({ framework });
export const load = (...args) => coreLoad(...args, framework);

export const { configure } = configApi;
export { forceReRender };
