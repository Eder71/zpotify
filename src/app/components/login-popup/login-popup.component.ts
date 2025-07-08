

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppStateService } from '../../app-state.service';
import { SocialLoginModalComponent } from '../social-login-modal/social-login-modal.component';

@Component({
  selector: 'app-login-popup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SocialLoginModalComponent],
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent {
  showSocialModal: 'google' | 'facebook' | null = null;
  currentView: 'main' | 'form' = 'main';
  loginForm: FormGroup;
  loading = false;
  codeSent = false;
  codeTimer = 0;
  codeInterval: any;

  constructor(
    private fb: FormBuilder,
    public appState: AppStateService
  ) {
    this.loginForm = this.fb.group({
      gameId: ['', [Validators.required, Validators.pattern(/^\d{6,}$/)]],
      serverId: ['', [Validators.required, Validators.pattern(/^\d{1,}$/)]],
      verificationCode: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  close() {
    this.appState.closeLogin();
    this.currentView = 'main';
    this.loginForm.reset();
    this.stopCodeTimer();
  }

  goToForm() {
    this.currentView = 'form';
  }

  goToMain() {
    this.currentView = 'main';
    this.loginForm.reset();
    this.stopCodeTimer();
  }

  sendCode() {
    if (this.loginForm.get('gameId')?.invalid || this.loginForm.get('serverId')?.invalid) return;
    this.codeSent = true;
    this.codeTimer = 60;
    this.codeInterval = setInterval(() => {
      this.codeTimer--;
      if (this.codeTimer <= 0) this.stopCodeTimer();
    }, 1000);
  }

  stopCodeTimer() {
    if (this.codeInterval) clearInterval(this.codeInterval);
    this.codeTimer = 0;
    this.codeSent = false;
  }

  onSubmit() {
    if (this.loginForm.invalid) return;
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.appState.closeLogin();
      this.goToMain();
    }, 1500);
  }

  openDownload() {
    window.open('https://play.google.com/store/apps/details?id=com.mobile.legends', '_blank');
  }

  socialLoading: 'google' | 'facebook' | null = null;
  socialMsg: string = '';

  loginWithSocial(provider: 'google' | 'facebook') {
    this.showSocialModal = provider;
  }

  onSocialModalClose() {
    this.showSocialModal = null;
  }

  onSocialModalSuccess() {
    this.showSocialModal = null;
    this.appState.closeLogin();
    this.goToMain();
  }

  // (Eliminada función duplicada)
}
