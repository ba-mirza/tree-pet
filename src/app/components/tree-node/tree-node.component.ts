import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { RootTreeNodes } from 'src/app/models/models';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/modal/modal/modal.component';
import { NodeService } from 'src/app/services/node-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CLOSE } from 'src/app/constants';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeNodeComponent implements OnInit, OnDestroy {
  public treeNodes!: RootTreeNodes;
  readonly destroy$: Subject<undefined> = new Subject();

  constructor(
    private dialog: MatDialog,
    private nodeService: NodeService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.nodeService.nodes$.subscribe({
      next: (n: RootTreeNodes) => {
        this.treeNodes = n;
      },
    });
  }

  public editNode(nodeId: number): void {
    this.dialog
      .open(ModalComponent, {
        width: '80vw',
        height: '80vh',
        maxWidth: '350px',
        maxHeight: '300px',
        data: nodeId,
        autoFocus: false,
      })
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {return res},
      });
  }

  public removeNode(nodeId: number): void {
    this.nodeService.removeNode(nodeId).subscribe({
      next: (n) => {
        this._snackBar.open(`REMOVED ${n.title}`, CLOSE);
      },
    });
  }

  public addNode(node?: any): void {
    this.dialog
      .open(ModalComponent, {
        width: '80vw',
        height: '80vh',
        maxWidth: '350px',
        maxHeight: '300px',
        data: 'asd',
        autoFocus: false,
      })
      .afterClosed()
      .subscribe({
        next: (res?: any) => {
          if (!res.bool) {
            return;
          }
          if (res.value.title === null) {
            this._snackBar.open('ERROR: Please, fill in the field');
          } else {
            console.log(res.value);
            this.nodeService.addNode(res.value, node).subscribe({
              next: () => {
                this._snackBar.open('NOTICE: Node added successfully!', CLOSE);
              },
            });
          }
        },
      });
  }

  public editDescriptionLastNode(): void {
    this.dialog.open(ModalComponent, {
      width: '80vw',
      height: '80vh',
      maxWidth: '350px',
      maxHeight: '300px',
      autoFocus: false,
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }
}
