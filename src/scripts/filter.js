document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button-menu');
  const products = document.querySelectorAll('.product');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Clase activa
      buttons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');

      const category = button.id;

      products.forEach(product => {
        const productCategory = product.dataset.category.toLowerCase();
        if (category === 'todos' || category === productCategory) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    });
  });
});
