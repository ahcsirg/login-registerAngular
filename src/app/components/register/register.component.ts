import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  user = { email: '', password: '' };

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.register(this.user).subscribe(response => {
      console.log('User registered successfully:', response);
    });
  }
}
