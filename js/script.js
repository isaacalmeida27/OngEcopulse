document.addEventListener("DOMContentLoaded", () => {
  const conteudo = document.getElementById("conteudo");
  const links = document.querySelectorAll("nav a");


  const paginas = {
    home: `
      <section class="caixa-conteudo">
        <h1>Bem-vindo à Ecopulse</h1>
        <p>Somos uma organização dedicada à sustentabilidade e à proteção do meio ambiente.</p>
      </section>
    `,
    sobre: `
      <section class="caixa-conteudo">
        <h1>Sobre Nós</h1>
        <p>A Ecopulse atua em projetos de conscientização ambiental e tecnologia verde.</p>
      </section>
    `,
    contato: `
      <section class="caixa-conteudo">
        <h1>Entre em Contato</h1>
        <form id="formulario">
          <label for="nome">Nome:</label>
          <input type="text" id="nome" required>

          <label for="email">E-mail:</label>
          <input type="email" id="email" required>

          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" placeholder="000.000.000-00" required>

          <label for="telefone">Telefone:</label>
          <input type="text" id="telefone" placeholder="(11) 91234-5678" required>

          <label for="nascimento">Data de Nascimento:</label>
          <input type="date" id="nascimento" required>

          <label for="endereco">Endereço:</label>
          <input type="text" id="endereco" required>

          <label for="cidade">Cidade:</label>
          <input type="text" id="cidade" required>

          <label for="estado">Estado:</label>
          <input type="text" id="estado" required>

          <label for="cep">CEP:</label>
          <input type="text" id="cep" placeholder="00000-000" required>

          <button type="submit">Enviar</button>
        </form>
      </section>
    `
  };

  function carregarPagina(pagina) {
    conteudo.innerHTML = paginas[pagina];
    if (pagina === "contato") validarFormulario(); // ativa validação só na página de contato
  }


  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const pagina = e.target.dataset.page;
      carregarPagina(pagina);
    });
  });

 
  carregarPagina("home");


  function validarFormulario() {
    const form = document.getElementById("formulario");
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const cpf = document.getElementById("cpf").value.trim();
      const telefone = document.getElementById("telefone").value.trim();
      const nascimento = document.getElementById("nascimento").value.trim();
      const endereco = document.getElementById("endereco").value.trim();
      const cidade = document.getElementById("cidade").value.trim();
      const estado = document.getElementById("estado").value.trim();
      const cep = document.getElementById("cep").value.trim();

      if (!nome || !email || !cpf || !telefone || !nascimento || !endereco || !cidade || !estado || !cep) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
      }

      const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
      if (!cpfRegex.test(cpf)) {
        alert("CPF inválido. Use o formato 000.000.000-00.");
        return;
      }

      const telefoneRegex = /^\(\d{2}\)\s?\d{4,5}\-?\d{4}$/;
      if (!telefoneRegex.test(telefone)) {
        alert("Telefone inválido. Exemplo: (11) 91234-5678");
        return;
      }

      const cepRegex = /^\d{5}\-?\d{3}$/;
      if (!cepRegex.test(cep)) {
        alert("CEP inválido. Exemplo: 12345-678");
        return;
      }

      localStorage.setItem("cadastro", JSON.stringify({
        nome, email, cpf, telefone, nascimento, endereco, cidade, estado, cep
      }));

      alert("Cadastro realizado com sucesso!");
      form.reset();
    });
  }
});