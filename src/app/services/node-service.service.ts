import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RootTreeNodes } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class NodeService {
  public treeNodes: RootTreeNodes = {
    title: 'Root',
    children: [
      {
        title: 'section1',
        children: [
          { title: 'subsection1', description: 'descrpt1' },
          { title: 'subsection2', description: 'descrpt2' },
        ],
        isOpen: true,
      },
      {
        title: 'section2',
        children: null,
        isOpen: false,
      },
    ],
    isOpen: true,
  };

  public nodes$: BehaviorSubject<RootTreeNodes> =
    new BehaviorSubject<RootTreeNodes>(this.treeNodes);

  constructor() {}

  get nodes() {
    return this.nodes$.asObservable();
  }

  set nodes(node: any) {
    this.nodes$.next(node);
  }
}
