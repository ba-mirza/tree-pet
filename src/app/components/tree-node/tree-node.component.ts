import { Component, OnInit } from '@angular/core';
import { RootTreeNodes } from 'src/app/models/models';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/modal/modal/modal.component';
import { NodeService } from 'src/app/services/node-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CLOSE } from 'src/app/constants';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
})
export class TreeNodeComponent implements OnInit {

  public treeNodes!: RootTreeNodes;

  constructor(
    public dialog: MatDialog,
    private nodeService: NodeService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.nodeService.nodes$.subscribe({
      next: (n: RootTreeNodes) => {
        this.treeNodes = n;
      }
    })
  }

  editNode(nodeId: number): void {
    this.dialog.open(ModalComponent, {
      width: '80vw',
      height: '80vh',
      maxWidth: '350px',
      maxHeight: '300px',
      data: nodeId,
      autoFocus: false,
    }).afterClosed().subscribe({
      next: (res) => {

      }
    })
  }

  removeNode(nodeId: number): void {
    this.nodeService.removeNode(nodeId).subscribe({
      next: (n) => {
        this._snackBar.open(`REMOVED ${n.title}`, CLOSE)
      }
    })
  }

  addNode(node?: any): void {
    this.dialog.open(ModalComponent, {
      width: '80vw',
      height: '80vh',
      maxWidth: '350px',
      maxHeight: '300px',
      data: 'asd',
      autoFocus: false,
    }).afterClosed().subscribe({
      next: (res?: any) => {
        if(!res.bool) {
          return
        }
        if(res.value.title === null) {
          this._snackBar.open('ERROR: Please, fill in the field', CLOSE);
        } else {
          console.log(res.value)
          this.nodeService.addNode(res.value, node).subscribe({
            next: () => {
              this._snackBar.open("NOTICE: Node added successfully!", CLOSE)
            },
          })
        }
      }
    })
  }

  editDescriptionLastNode(): void {
    this.dialog.open(ModalComponent, {
      width: '80vw',
      height: '80vh',
      maxWidth: '350px',
      maxHeight: '300px',
      autoFocus: false,
    })
  }

}
