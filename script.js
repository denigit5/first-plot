document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.add('navbar-links-active');
    document.querySelector('.navbar-links').classList.remove('navbar-links-inactive');
  });
  document.querySelector('.close-button').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.remove('navbar-links-active');
    document.querySelector('.navbar-links').classList.add('navbar-links-inactive');
  });
  document.querySelector('.nav-link1').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.remove('navbar-links-active');
    document.querySelector('.navbar-links').classList.add('navbar-links-inactive');
  });
  document.querySelector('.nav-link2').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.remove('navbar-links-active');
    document.querySelector('.navbar-links').classList.add('navbar-links-inactive');
  });
  document.querySelector('.nav-link3').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.remove('navbar-links-active');
    document.querySelector('.navbar-links').classList.add('navbar-links-inactive');
  });
});