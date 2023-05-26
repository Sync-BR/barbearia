// Selecione todos os links com o atributo href
const links = document.querySelectorAll('[href^="#"]');

// Percorra cada link e adicione um ouvinte de eventos
links.forEach(link => {
  link.addEventListener('click', (event) => {
    // Impedir o comportamento padrão do link
    event.preventDefault();

    // Obter o destino da rolagem a partir do atributo href
    const target = document.querySelector(link.getAttribute('href'));

    // Verificar se o destino existe
    if (target) {
      // Calcular a posição do destino na página
      const targetPosition = target.offsetTop;

      // Definir a opção de comportamento da rolagem suave
      const options = {
        behavior: 'smooth'
      };

      // Fazer a rolagem suave para o destino
      window.scrollTo({
        top: targetPosition,
        ...options
      });
    }
  });
});


//
