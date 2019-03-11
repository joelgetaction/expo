import { SyntheticPlatformEmitter } from '@unimodules/core';
export default {
    get name() {
        return 'ExponentAccelerometer';
    },
    async isAvailableAsync() {
        return typeof DeviceMotionEvent !== 'undefined';
    },
    _handleMotion({ accelerationIncludingGravity }) {
        SyntheticPlatformEmitter.emit('accelerometerDidUpdate', {
            x: accelerationIncludingGravity.x,
            y: accelerationIncludingGravity.y,
            z: accelerationIncludingGravity.z,
        });
    },
    startObserving() {
        window.addEventListener('devicemotion', this._handleMotion);
    },
    stopObserving() {
        window.removeEventListener('devicemotion', this._handleMotion);
    },
};
//# sourceMappingURL=ExponentAccelerometer.web.js.map