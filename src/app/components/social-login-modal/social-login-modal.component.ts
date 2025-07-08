import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-social-login-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './social-login-modal.component.html',
  styleUrls: ['./social-login-modal.component.css']
})
export class SocialLoginModalComponent {
  @Input() provider: 'google' | 'facebook' = 'google';
  @Input() visible = false;
  @Output() close = new EventEmitter<void>();
  @Output() success = new EventEmitter<void>();

  loading = false;
  email = '';
  password = '';
  error = '';

  get providerName() {
    return this.provider === 'google' ? 'Google' : 'Facebook';
  }

  get logoUrl() {
    return this.provider === 'google'
      ? 'assets/google-logo.svg'
      : 'assets/facebook-logo.svg';
  }

  submit() {
    this.error = '';
    if (!this.email || !this.password) {
      this.error = 'Por favor, completa todos los campos.';
      return;
    }
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.success.emit();
      this.close.emit();
    }, 1500);
  }

  onClose() {
    this.close.emit();
  }
}
