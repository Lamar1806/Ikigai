import {
  formatFiles,
  generateFiles,
  Tree,
  readProjectConfiguration,
} from '@nx/devkit';
import * as path from 'path';
import { ReactNativeComponentGeneratorSchema } from './schema';

export async function reactNativeComponentGenerator(
  tree: Tree,
  options: ReactNativeComponentGeneratorSchema
) {
  type decideProjectRootType = (
    options: ReactNativeComponentGeneratorSchema
  ) => string;
  const decideProjectRoot: decideProjectRootType = ({
    project: selectedProject,
    name: selectedName,
    path: selectedPath,
  }) => {
    const { projectType, sourceRoot } = readProjectConfiguration(
      tree,
      selectedProject
    );

    console.log('selectedProject: ', selectedProject);
    console.log('projectType: ', projectType);
    console.log('selectedPath: ', selectedPath);
    console.log('selectedName: ', selectedName);

    if (projectType === 'library') {
      if (selectedPath) {
        return `${sourceRoot}/${selectedPath}/${selectedName}`;
      }
      return `${sourceRoot}/${selectedName}`;
    }
    if (projectType === 'application') {
      return `${sourceRoot}/components/${selectedName}`;
    }
  };

  const projectRoot = decideProjectRoot(options);

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default reactNativeComponentGenerator;
