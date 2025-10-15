const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-menu a');


navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

const projectData = {
  1: {
    title: 'Library Management System',
    description: 'A comprehensive Library Management System built with Java and MySQL. It provides a complete solution for managing library operations, including book records, borrower information, and transaction tracking. The system allows librarians to efficiently handle book borrowing, returning, and inventory management through a secure and user-friendly interface.The project aims to reduce manual record-keeping, minimize human error, and make library processes faster and more organized. It demonstrates how Java and MySQL can be integrated to build a reliable and efficient management application suitable for schools, universities, and institutions.',
    features: [
      'Book management (add, update, delete, and search books)',
      'Borrower registration and record tracking',
      'Borrowing and returning transactions with due date monitoring',
      'Real-time book availability status',
      'Centralized database for accurate and organized data',
      'Reporting for borrowed and available books',
      'Simple and intuitive graphical interface',
      'Secure data handling and easy maintenance'
    ],
    tags: ['Java', 'MYSql'],
    image: '/pics/Library.png',
    github: 'https://github.com/brentow/Library_Management_System.git'
  },
  2: {
    title: 'Landing Page For Aplication',
    description: 'PharmaShield is a blockchain-based platform designed to combat counterfeit medications by ensuring transparency and trust in the pharmaceutical supply chain. Through QR code verification, users can instantly confirm a medicine’s authenticity, origin, and distribution path—protecting lives and promoting safer healthcare for everyone.',
    features: [
      'Real-time verification of medicine authenticity across devices',
      'End-to-end traceability using blockchain technology',
      'QR code scanning for quick access to drug details and history',
      'Multi-level access for consumers, healthcare providers, and regulators',
      'Expiration and recall alerts to ensure medicine safety',
      'Data analytics dashboard for supply chain monitoring',
      'Secure and transparent records powered by blockchain'
    ],
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS', 'WebSockets'],
     image: '/pics/Landing.png',
    github: 'https://github.com/brentow/PharmaShield_LandingPage.git'
  }
};


const projectButtons = document.querySelectorAll('.project-button');
const modal = document.getElementById('projectModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    const projectId = button.getAttribute('data-project');
    const project = projectData[projectId];

    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalImage').src = project.image;

    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresList.appendChild(li);
    });

    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = '';
    project.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = tag;
      tagsContainer.appendChild(span);
    });

    // 👇 Update GitHub link dynamically
    const githubButton = document.querySelector('.modal-button.secondary');
    githubButton.href = project.github;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});


modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
});

modalOverlay.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const scrollFadeElements = document.querySelectorAll('.scroll-fade');
scrollFadeElements.forEach(element => {
  observer.observe(element);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
  } else {
    navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
  }
});