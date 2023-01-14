//https://stackoverflow.com/questions/43058801/typescript-path-mapping-for-react-native-android-ts-and-ios-ts-modules
import LooksCameraAndroid from './LooksCamera.component.android';
import * as android from './LooksCamera.component.android';
import LooksCamera from './LooksCamera.component.ios';
import * as ios from './LooksCamera.component.ios';

declare var _test: typeof ios;
declare var _test: typeof android;

declare var _testDefault: typeof LooksCamera;
declare var _testDefault: typeof LooksCameraAndroid;

export * from './LooksCamera.component.ios';
export default LooksCamera;
