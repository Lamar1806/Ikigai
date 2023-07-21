import { Tree, readProjectConfiguration } from '@nx/devkit';
import { ReactNativeComponentGeneratorSchema } from '../generators/react-native-component/schema';

export function camelToPascalCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (char, index) => {
      return index === 0 ? char.toUpperCase() : char.toUpperCase();
    })
    .replace(/\s+/g, '');
}

export function camelCaseToSpinalCase(input: string): string {
  return input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

interface DecideNewComponentPathProps {
  tree: Tree;
  options: ReactNativeComponentGeneratorSchema;
}
type decideNewComponentPathType = ({
  ...props
}: DecideNewComponentPathProps) => string | 'null';

export const decideNewComponentPath: decideNewComponentPathType = ({
  tree,
  options,
}) => {
  const { project, path: unFormattedPath, name: unformattedName } = options;
  const path = camelCaseToSpinalCase(unFormattedPath);
  const name = camelCaseToSpinalCase(unformattedName);
  const { projectType } = readProjectConfiguration(tree, project);

  if (projectType === 'library') {
    if (path) {
      return `libs/ui-components/src/lib/${path}/${name}`;
    }
    return `libs/ui-components/src/lib/${name}`;
  }

  if (path) {
    return `apps/${project}/src/${path}/${name}`;
  }
  return `apps/${project}/src/${name}`;
};

interface AddGeneratedFileToIndexProps {
  tree: Tree;
  options: ReactNativeComponentGeneratorSchema;
  pascalName: string;
  generatedFilePath: string;
}
type addGeneratedFileToIndexT = (props: AddGeneratedFileToIndexProps) => void;
export const addGeneratedFileToIndex: addGeneratedFileToIndexT = ({
  tree,
  options,
  pascalName,
  generatedFilePath,
}) => {
  const { project } = options;
  const { sourceRoot, projectType } = readProjectConfiguration(tree, project);

  if (projectType !== 'library') return;

  const indexFilePath = `${sourceRoot}/index.ts`;
  const indexFile = tree.read(indexFilePath, 'utf-8');
  const componentPath = `./${generatedFilePath.split('/').slice(3).join('/')}`;

  if (indexFile) {
    const importStatement = `\nimport { ${pascalName} } from '${componentPath}'; // Generated Components`;
    let updatedIndexContent = '';
    if (!indexFile.includes(importStatement)) {
      updatedIndexContent = importStatement + indexFile;
    } else {
      updatedIndexContent = indexFile.replace(importStatement, importStatement);
    }
    tree.write(indexFilePath, updatedIndexContent);
  }
};
