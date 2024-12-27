import { env } from './envSetting';
import * as HyperDX from '@hyperdx/node-opentelemetry';

const pino = require('pino');

const logger = pino(
  pino.transport({
    mixin: HyperDX.getPinoMixinFunction,
    targets: [
      HyperDX.getPinoTransport('info', {
        // Send logs info and above
        detectResources: true,
      }),
    ],
  }),
);

export default logger;
