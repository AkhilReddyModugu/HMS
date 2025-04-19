import { Component } from '@angular/core';

@Component({
  selector: 'app-doctors-section',
  standalone: false,
  templateUrl: './doctors-section.component.html',
  styleUrls: ['./doctors-section.component.css']
})
export class DoctorsSectionComponent {
  selectedSpecialty = 'all';
  
  specialties = [
    { id: 'all', name: 'All Specialties' },
    { id: 'cardiology', name: 'Cardiology' },
    { id: 'neurology', name: 'Neurology' },
    { id: 'pediatrics', name: 'Pediatrics' },
    { id: 'dermatology', name: 'Dermatology' }
  ];
  
  doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'cardiology',
      specialtyName: 'Cardiologist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop',
      rating: 4.9,
      experience: '15 years'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'neurology',
      specialtyName: 'Neurologist',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=300&auto=format&fit=crop',
      rating: 4.8,
      experience: '12 years'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'pediatrics',
      specialtyName: 'Pediatrician',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&auto=format&fit=crop',
      rating: 4.9,
      experience: '10 years'
    },
    {
      id: 4,
      name: 'Dr. David Williams',
      specialty: 'dermatology',
      specialtyName: 'Dermatologist',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=300&auto=format&fit=crop',
      rating: 4.7,
      experience: '8 years'
    }
  ];
  
  get filteredDoctors() {
    if (this.selectedSpecialty === 'all') {
      return this.doctors;
    }
    return this.doctors.filter(doctor => doctor.specialty === this.selectedSpecialty);
  }
  
  setSpecialty(specialty: string) {
    this.selectedSpecialty = specialty;
  }
}