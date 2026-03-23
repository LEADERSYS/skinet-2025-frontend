import { Component, inject } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { BusyService } from '../../core/services/busy.service';
import { MatProgressBar } from '@angular/material/progress-bar';
import { CartService } from '../../core/services/cart.service';
import { AccountService } from '../../core/services/account.service';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-header',
  imports: [
    MatIcon,
    MatButton,
    MatBadge,
    MatProgressBar,
    RouterLink,
    RouterLinkActive,
    MatMenuTrigger,
    MatMenu,
    MatDivider,
    MatMenuItem
],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  busyService = inject(BusyService);
  cartService = inject(CartService);
  accounService = inject(AccountService);
  private router = inject(Router);

  logout() {
    this.accounService.logout().subscribe({
      next: () => {
        this.accounService.currentUser.set(null);
        this.router.navigateByUrl('/');
      }
    })
  }
}
