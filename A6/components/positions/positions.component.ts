import { Component, OnInit, OnDestroy } from '@angular/core';
import {Position} from 'src/app/data/position';
import {PositionService} from 'src/app/data/position.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  positions: Position[];
  getPositionsSub: any;
  loadingError: boolean = false;

  constructor(private positionService: PositionService, private router: Router) { }

  ngOnInit() {
    this.getPositionsSub = this.positionService.getPositions().subscribe(data => {
      this.positions = data;
    }, error => {
        this.loadingError = true;
    });
  }

  routePosition(id: string){
    this.router.navigate(['/position/', id]);
  }

  ngOnDestroy(){
    if(this.getPositionsSub != 'undefined'){
      this.getPositionsSub.unsubscribe();
    }
  }
}
