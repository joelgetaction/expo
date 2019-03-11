import { SyntheticPlatformEmitter } from '@unimodules/core';

export default {
  get name(): string {
    return 'ExponentGyroscope';
  },
  async isAvailableAsync(): Promise<boolean> {
    return typeof DeviceOrientationEvent !== 'undefined';
  },
  _handleMotion({ alpha: z, beta: y, gamma: x }) {
    SyntheticPlatformEmitter.emit('gyroscopeDidUpdate', { x, y, z });
  },
  startObserving() {
    window.addEventListener('deviceorientation', this._handleMotion);
  },
  stopObserving() {
    window.removeEventListener('deviceorientation', this._handleMotion);
  },
};
