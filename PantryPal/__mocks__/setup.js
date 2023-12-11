import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native/Libraries/Image/AssetSourceResolver', () => 'test-file-stub');