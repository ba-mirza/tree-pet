export type CreateDirectoryModes = 'root' | 'child';

export interface SubSectionNode {
  // FIX: parent interface
  id: number,
  title: string,
  description?: string,
  parent?: SectionNode,
}

export interface SectionNode {
  // FIX: parent interface
  id: number,
  title: string,
  parent?: RootTreeNodes,
  children?: SubSectionNode[] | null,
  isOpen: boolean,
}

export interface RootTreeNodes {
  id: number,
  title: string,
  children?: SectionNode[] | null,
  isOpen: boolean,
}
