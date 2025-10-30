document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const cpf = form.querySelector('#cpf') ? form.querySelector('#cpf').value.trim() : '';
    const telefone = form.telefone.value.trim();

    if (!nome || !email || !cpf || !telefone) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    if (!cpfRegex.test(cpf)) {
      alert('CPF inválido. Use o formato 000.000.000-00');
      return;
    }

    const telRegex = /\(\d{2}\)\s?\d{4,5}-\d{4}/;
    if (!telRegex.test(telefone)) {
      alert('Telefone inválido. Use o formato (00) 00000-0000');
      return;
    }

    alert('Cadastro realizado com sucesso!');
    form.reset();
  });
});