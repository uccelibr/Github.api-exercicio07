import { Component, OnInit } from '@angular/core';
import { GhUser } from '../../models/ghUser';
import { GhRep } from "../../models/ghRep";
import { GhApiService } from '../../services/gh-api.service';


@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  username:string = ''
  user: GhUser | null = null
  rep: GhRep[] | undefined

  constructor(
    private ghService: GhApiService
  ) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe(
      (gUser) => {
      
        this.user = gUser 
      }
    )
    this.ghService.findUserRepositorio(this.username).subscribe(
      (gRep) => {

        this.rep= gRep
   }
  )
}

}
