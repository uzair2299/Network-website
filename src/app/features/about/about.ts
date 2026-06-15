import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  stats = [
    { icon: 'chart', value: '5,000+', label: 'Jobs Completed' },
    { icon: 'users', value: '200+', label: 'Verified Professionals' },
    { icon: 'trophy', value: '9+', label: 'Service Categories' },
    { icon: 'building', value: '10+', label: 'Years of Experience' },
  ];

  features = [
    { icon: 'star',    title: 'Trusted & Verified',   desc: 'Every professional on our platform is thoroughly vetted and verified before being listed, so you can book with confidence.', bgImage: 'https://images.unsplash.com/photo-1521791136364-728647532899?auto=format&fit=crop&w=600&q=80', colorClass: 'svc-blue' },
    { icon: 'zap',     title: 'Fast & Reliable',       desc: 'We match you with the right professional quickly and ensure your service is delivered on time, every time.', bgImage: 'https://images.unsplash.com/photo-1508847154043-be12a62861c1?auto=format&fit=crop&w=600&q=80', colorClass: 'svc-orange' },
    { icon: 'globe',   title: 'UAE-Wide Coverage',     desc: 'Serving customers across Dubai, Abu Dhabi, Sharjah, and all major emirates — wherever you are in the UAE, we\'ve got you covered.', bgImage: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=600&q=80', colorClass: 'svc-indigo' },
    { icon: 'user',    title: 'Customer First',         desc: 'Your satisfaction drives everything we do. Our support team is always available to ensure a seamless experience from booking to completion.', bgImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80', colorClass: 'svc-rose' },
    { icon: 'bolt',    title: 'Wide Range of Services', desc: 'From home shifting and deep cleaning to pest control, installation, and commercial facility management — all in one platform.', bgImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80', colorClass: 'svc-teal' },
    { icon: 'heart',   title: 'Transparent Pricing',   desc: 'No hidden fees, no surprises. We believe in clear, honest pricing so you always know what you\'re paying for.', bgImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80', colorClass: 'svc-emerald' },
    { icon: 'award',   title: 'Quality Guaranteed',    desc: 'We uphold strict quality standards and follow up after every job to make sure you\'re completely satisfied with the results.', bgImage: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&w=600&q=80', colorClass: 'svc-amber' },
    { icon: 'check',   title: 'One Platform',           desc: 'Discover, book, and manage all your service needs through a single reliable platform — simple, convenient, and stress-free.', bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', colorClass: 'svc-violet' },
  ];

}

