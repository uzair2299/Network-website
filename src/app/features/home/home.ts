import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  serviceCategories = [
    {
      name: 'Home Services',
      types: [
        'AC Repair & Installation',
        'Plumbing Services',
        'Electrical Services',
        'Carpentry Work',
        'Appliance Repair (Fridge, Washing Machine, Oven)',
        'Water Tank Cleaning',
        'Handyman Services',
        'General Maintenance'
      ]
    },
    {
      name: 'Cleaning Services',
      types: [
        'Home Deep Cleaning',
        'Kitchen Cleaning',
        'Bathroom Cleaning',
        'Sofa & Carpet Cleaning',
        'Mattress Cleaning',
        'Window Cleaning',
        'Office Cleaning',
        'Move-in / Move-out Cleaning'
      ]
    },
    {
      name: 'Moving & Logistics',
      types: [
        'Home Shifting',
        'Office Relocation',
        'Furniture Moving',
        'Packing & Unpacking Services',
        'Loading & Unloading',
        'Local Courier Services',
        'Heavy Item Transport'
      ]
    },
    {
      name: 'Business & Commercial Services',
      types: [
        'Office Cleaning Contracts',
        'Facility Management',
        'Security Services',
        'Corporate IT Support',
        'Pest Control Contracts (Commercial)',
        'Maintenance Contracts',
        'Staffing Services (Office Workers, Helpers)'
      ]
    },
    {
      name: 'Installation Services',
      types: [
        'TV Mounting',
        'CCTV Installation',
        'Internet & Network Setup',
        'Smart Home Device Installation',
        'Solar Panel Installation',
        'Water Heater Installation',
        'Kitchen Appliance Installation'
      ]
    },
    {
      name: 'On-Demand Delivery Services',
      types: [
        'Grocery Delivery',
        'Pharmacy Delivery',
        'Food Delivery',
        'Flower Delivery',
        'Document Delivery',
        'Water Bottle Delivery',
        'Parcel Pickup & Drop'
      ]
    },
    {
      name: 'Retail & Errand Services',
      types: [
        'Personal Shopping Assistance',
        'Queue Management Services',
        'Bill Payment Assistance',
        'Document Submission Services',
        'Small Errand Tasks',
        'Courier Drop-off Assistance'
      ]
    },
    {
      name: 'Specialized Cleaning Services (Advanced)',
      types: [
        'Post-Construction Cleaning',
        'Industrial Cleaning',
        'High-rise Window Cleaning',
        'Hospital Cleaning',
        'Water Tank Deep Cleaning',
        'Disinfection & Sanitization',
        'Warehouse Cleaning'
      ]
    },
    {
      name: 'Pest Control Services',
      types: [
        'Cockroach Control',
        'Termite Treatment',
        'Bed Bug Treatment',
        'Mosquito Control',
        'Rodent Control',
        'Ant Control',
        'General Fumigation Services',
        'Commercial Pest Control Contracts'
      ]
    }
  ];

  selectedCategoryTypes: string[] = [];
  
  isCategoryDropdownOpen = false;
  isTypeDropdownOpen = false;
  selectedCategoryName = '';
  selectedTypeName = '';

  constructor(private eRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.isCategoryDropdownOpen = false;
      this.isTypeDropdownOpen = false;
    }
  }

  toggleCategoryDropdown(event: Event) {
    event.stopPropagation();
    this.isCategoryDropdownOpen = !this.isCategoryDropdownOpen;
    this.isTypeDropdownOpen = false;
  }

  toggleTypeDropdown(event: Event) {
    event.stopPropagation();
    this.isTypeDropdownOpen = !this.isTypeDropdownOpen;
    this.isCategoryDropdownOpen = false;
  }

  selectCategory(categoryName: string, event: Event) {
    event.stopPropagation();
    this.selectedCategoryName = categoryName;
    const category = this.serviceCategories.find(c => c.name === categoryName);
    this.selectedCategoryTypes = category ? category.types : [];
    this.selectedTypeName = '';
    this.isCategoryDropdownOpen = false;
  }

  selectType(typeName: string, event: Event) {
    event.stopPropagation();
    this.selectedTypeName = typeName;
    this.isTypeDropdownOpen = false;
  }
}
