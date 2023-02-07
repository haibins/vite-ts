export interface treeDataItemType {
  title: string;
  key: string;
  children: treeDataItemType[];
}

type mapDataItem = treeDataItemType & {
  level: number;
};

export interface mapData {
  [x: string]: mapDataItem;
}

export type treeDataType = treeDataItemType[];

export const treeToMap = (
  tree: treeDataType = [],
  map: mapData = {},
  level = 0
) => {
  level++;
  tree.forEach((current) => {
    const { children } = current;
    map[current.key] = { ...current, level };
    if (children) {
      return treeToMap(children, map, level);
    }
  });
  return map;
};


export const UUID = ()=>{
  return Math.random().toString(36).substr(-6)
}
