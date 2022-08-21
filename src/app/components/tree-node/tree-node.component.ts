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

  @ViewChild('addSubSectionForms') addSubSectionForms!: TemplateRef<any>;

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

  addSection(): void {
    const template = this.addSubSectionForms;
    this.dialog.open(ModalComponent, {
      width: '80vw',
      height: '80vh',
      maxWidth: '350px',
      maxHeight: '300px',
      data: {template},
      autoFocus: false,
    }).afterClosed().subscribe({
      next: (accept?: boolean) => {
        if(!accept) {
          console.log('false')
        }
        console.log('true')
      }
    })
  }

  openDialog(): void {
    this.dialog.open(ModalComponent, {
      width: '80vw',
      height: '80vh',
      maxWidth: '350px',
      maxHeight: '300px',
      data: "Hello Modal Component",
      autoFocus: false,
    })
  }

}
