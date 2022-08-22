import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable, of, tap } from 'rxjs';
import { copy } from '../functions/copy';
import { RootTreeNodes } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class NodeService {
  public treeNodes: RootTreeNodes = {
    id: 1,
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

  editNode(id: number): Observable<any> {
    // TODO:
    return of()
  }

  removeNode(id: number): Observable<any> {
    // TODO: Use uuid lib for unique id..
    return this.nodes$.pipe(
      tap((n: RootTreeNodes) => {
        n.children?.filter((c) => c.id !== id)
      })
    )
  }

  addNode(node: any, determinationNode?: any): Observable<any> {
    return this.nodes$.pipe(
      tap((n: any) => {
        const _node = copy(node) // lya ianbagi
        n.children.push(_node)
      })
    )
  }
}
