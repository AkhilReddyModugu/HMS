import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'header-component',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;
  isScrolled = false;

  menuItems = [
    { label: 'Home', link: '/' },
    { label: 'Appointments', link: '/appointments' },
    { label: 'Doctors', link: '/doctors' },
    { label: 'Services', link: '/services' },
    { label: 'About Us', link: '/about' },
    { label: 'Contact', link: '/contact' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }
}