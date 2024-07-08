import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrl: './recovery-password.component.css'
})
export class RecoveryPasswordComponent implements OnInit{
    public name!: string 

    ngOnInit(): void {
     this.name = "asdfasdfasdf";

    }

    


    
}
