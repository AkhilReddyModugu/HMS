import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials-section',
  standalone: false,
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css']
})
export class TestimonialsSectionComponent implements OnInit {
  currentIndex = 0;
  autoplayInterval: any;
  
  testimonials = [
    {
      id: 1,
      name: 'Jennifer Martinez',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
      content: 'The appointment scheduling system is incredibly user-friendly. I was able to book my appointment and receive reminders without any hassle. The doctors are excellent and really take the time to listen.',
      rating: 5
    },
    {
      id: 2,
      name: 'Robert Wilson',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
      content: 'I appreciate how easy it is to access my medical records through the system. The notification reminders for my medications have been a lifesaver. The staff is always friendly and professional.',
      rating: 4
    },
    {
      id: 3,
      name: 'Sophia Chen',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
      content: 'Being able to schedule appointments online has saved me so much time. The doctors are very knowledgeable and take their time explaining everything. I highly recommend this hospital to everyone.',
      rating: 5
    }
  ];
  
  ngOnInit() {
    this.startAutoplay();
  }
  
  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }
  
  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }
  
  setSlide(index: number) {
    this.stopAutoplay();
    this.currentIndex = index;
    this.startAutoplay();
  }
  
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }
  
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
  
  getRatingStars(rating: number) {
    return Array(rating).fill(0);
  }
}