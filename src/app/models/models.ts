export interface SubSectionNode {
  title: string,
  description?: string,
}

export interface SectionNode {
  title: string,
  children?: SubSectionNode[] | null,
  isOpen: boolean,
}

export interface RootTreeNodes {
  title: string,
  children?: SectionNode[] | null,
  isOpen: boolean,
}
