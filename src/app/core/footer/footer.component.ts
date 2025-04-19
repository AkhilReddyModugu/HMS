import { Component } from '@angular/core';

@Component({
  selector: 'footer-component',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  quickLinks = [
    { label: 'Home', link: '/' },
    { label: 'Appointments', link: '/appointments' },
    { label: 'Doctors', link: '/doctors' },
    { label: 'Services', link: '/services' }
  ];
  
  supportLinks = [
    { label: 'Help Center', link: '/help' },
    { label: 'Privacy Policy', link: '/privacy' },
    { label: 'Terms of Service', link: '/terms' },
    { label: 'Contact Us', link: '/contact' }
  ];
}