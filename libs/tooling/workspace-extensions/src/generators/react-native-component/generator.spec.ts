import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { reactNativeComponentGenerator } from './generator';
import { ReactNativeComponentGeneratorSchema } from './schema';

describe('react-native-component generator', () => {
  let tree: Tree;
  const options: ReactNativeComponentGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await reactNativeComponentGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
