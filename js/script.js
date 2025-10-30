// aguarda o carregamento completo do HTML
document.addEventListener("DOMContentLoaded", () => {

  // seleciona o formulário da página
  const form = document.querySelector("form");

  // add um evento que dispara quando o usuário clica em "Enviar"
  form.addEventListener("submit", (event) => {
    // impede que o formulário seja enviado automaticamente
    event.preventDefault();

    // pega o valor de cada campo e remove espaços extras
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const nascimento = document.getElementById("nascimento").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("estado").value.trim();
    const cep = document.getElementById("cep").value.trim();

    // verifica se algum campo obrigatório está vazio
    if (!nome || !email || !cpf || !telefone || !nascimento || !endereco || !cidade || !estado || !cep) {
      alert("Por favor, preencha todos os campos corretamente.");
      return; // para a execução se algum campo estiver vazio
    }

    // validação simples de e-mail
    if (!email.includes("@")) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    // validação simples de CPF (só checa tamanho)
    if (cpf.length !== 14) { // formato 000.000.000-00
      alert("Por favor, insira um CPF válido.");
      return;
    }

    // se tudo estiver correto, guarda os dados no armazenamento local
    localStorage.setItem("cadastro", JSON.stringify({
      nome, email, cpf, telefone, nascimento, endereco, cidade, estado, cep
    }));

    // mostra mensagem de sucesso ao usuário
    alert("Cadastro realizado com sucesso! 🎉");

    // limpa o formulário
    form.reset();
  });

});
