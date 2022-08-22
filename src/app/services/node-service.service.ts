import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, map, tap } from 'rxjs';
import { copy } from '../functions/copy';
import { RootTreeNodes } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class NodeService {
  public treeNodes: RootTreeNodes = {
    title: 'Root',
    children: [
      {
        id: 1,
        title: 'section1',
        children: [
          { id: 1, title: 'subsection1', description: 'descrpt1' },
          { id: 2, title: 'subsection2', description: 'descrpt2' },
        ],
        isOpen: true,
      },
      {
        id: 2,
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

  addNode(node: any) {
    this.nodes$.pipe(
      tap((n: any) => {
        const _node = copy(node)
        n.children.push(_node)
      }),
    ).subscribe({
      next: (db) => {
        finalize(() => console.log('added to ch')),
        console.log(db);
      }
    })
  }
}
