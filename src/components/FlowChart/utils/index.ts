import { builtInAvailableType, NodeDescription, NodeTypes } from "../Nodes";

export function getNodeTypesAndMapFromConfig(nodes: NodeDescription[]) {
  const nodeTypes: NodeTypes = {};
  const nodesMap: { [nodeType: string]: NodeDescription } = {};
  nodes.forEach(({ type, label, component }) => {
    nodeTypes[type] = component;
    nodesMap[type] = { type, label, component };
  });
  return { nodes, nodeTypes, nodesMap };
}

export function mergeCustomNodes(
  customNodes: NodeDescription[],
  builtInNodes: NodeDescription[],
  defaultNodes: builtInAvailableType[]
) {
  return [
    ...customNodes,
    ...builtInNodes.filter((item: NodeDescription) =>
      (defaultNodes as string[]).includes(item.type)
    ),
  ];
}
