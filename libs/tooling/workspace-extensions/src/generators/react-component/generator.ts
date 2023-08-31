import { formatFiles, generateFiles, Tree } from '@nx/devkit';
import * as path from 'path';
import { ReactNativeComponentGeneratorSchema } from './schema';
import {
  decideNewComponentPath,
  camelToPascalCase,
  addGeneratedFileToIndex,
} from '../../utils/utils';

export async function reactNativeComponentGenerator(
  tree: Tree,
  options: ReactNativeComponentGeneratorSchema
) {
  const componentPath = decideNewComponentPath({ tree, options });
  const pascalName = camelToPascalCase(options.name);

  generateFiles(tree, path.join(__dirname, 'files'), componentPath, {
    ...{ ...options, name: pascalName },
  });

  await formatFiles(tree);

  addGeneratedFileToIndex({
    tree,
    options,
    pascalName,
    generatedFilePath: componentPath,
  });
}

export default reactNativeComponentGenerator;
