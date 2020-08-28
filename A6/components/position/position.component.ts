import { Component, OnInit, OnDestroy } from '@angular/core';
import { PositionService } from '../../data/position.service';
import { ActivatedRoute } from '@angular/router';
import { Position } from '../../data/position';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit, OnDestroy {

  public paramSubscription: any;
	public positionSubscription: any;
	public savePositionSubscription: any;
	public position: Position; 
	public successMessage = false 
	public failMessage = false;


  constructor(private positionService: PositionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramSubscription = this.route.params.subscribe((params)=>{ //calling the getPosition method
      this.positionSubscription = this.positionService.getPosition(params['_id']).subscribe((pos)=>{
        //console.log(pos[0]); //tester to display the position

        this.position = pos[0]; //obtain a single position based on the id sent
        //subscribe converts the incoming stream into a familar array
      
      });
    });
  }

  onSubmit(){

    this.savePositionSubscription = this.positionService.savePosition(this.position).subscribe(
    
      ()=> { //if the position was saved successfully - first callback
      
        this.successMessage = true;
  
        setTimeout(() => {
          this.successMessage = false;
        }, 2500);
      }, 
      
      () =>{ //second callback
        //if position was not saved successfully
        this.failMessage = true;
  
        setTimeout(() => {
          this.failMessage = false;
        }, 2500);
  
      })
  }

  ngOnDestroy(){
    if(this.paramSubscription != 'undefined'){
      this.paramSubscription.unsubscribe();
    }
    if(this.positionSubscription != 'undefined'){
      this.positionSubscription.unsubscribe();
    }
    if(this.savePositionSubscription != 'undefined'){
      this.savePositionSubscription.unsubscribe();
    }

  }
}
