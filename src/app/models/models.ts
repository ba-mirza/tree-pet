export interface SubSectionNode {
  id: number,
  title: string,
  description?: string,
}

export interface SectionNode {
  id: number,
  title: string,
  children?: SubSectionNode[] | null,
  isOpen: boolean,
}

export interface RootTreeNodes {
  title: string,
  children?: SectionNode[] | null,
  isOpen: boolean,
}
