import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { RootTreeNodes } from 'src/app/models/models';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/modal/modal/modal.component';
import { NodeService } from 'src/app/services/node-service.service';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
})
export class TreeNodeComponent implements OnInit {

  public treeNodes!: RootTreeNodes;

  constructor(
    public dialog: MatDialog,
    private nodeService: NodeService
  ) {}

  ngOnInit(): void {
    this.nodeService.nodes$.subscribe({
      next: (n: RootTreeNodes) => {
        this.treeNodes = n;
      }
    })
  }

  editSection(): void {

  }

  addSection(): void {
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
        this.nodeService.addNode(res.value);
      }
    })
  }

  openDialog(): void {
    this.dialog.open(ModalComponent, {
      width: '80vw',
      height: '80vh',
      maxWidth: '350px',
      maxHeight: '300px',
      autoFocus: false,
    })
  }

}
