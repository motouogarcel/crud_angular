import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstname: string = ""
  names:string[] = []
  constructor() { }

  ngOnInit(): void {
  }

  handleSave(){
    if (this.firstname) {
      this.names.push(this.firstname);
      this.firstname ="";
    }
  }

  handleDelete(position: number){
    if (position >= 0){
        this.names.splice(position,1);
    }
  }

  handleUpdate(position: number){
    if (position >= 0){
      const name = this.names[position];
      this.names.splice(position,1);
      this.firstname = name
  }
}

}
