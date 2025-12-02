
const SUPABASE_URL = "https://mjonleauwersmikhshao.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qb25sZWF1d2Vyc21pa2hzaGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNTMzODMsImV4cCI6MjA3OTgyOTM4M30.wmfouOgoy8l711CH6sRfQWpHcVBk03T_R7yL1uEUHsI";

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* Valida email */
function validarEmail(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}

/* Valida telefone */
function validarTelefone(telefone) {
  const apenasNumeros = telefone.replace(/\D/g, "");
  return apenasNumeros.length >= 10 && apenasNumeros.length <= 11;
}

/* Inicializa o formulário */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContato");
  if (!form) {
    console.warn("Formulário #formContato não encontrado no DOM");
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton ? submitButton.textContent : "Enviar mensagem";

    try {
      // === COLETA DE DADOS ===
      const formData = new FormData(form);

      const nome = (formData.get("usuario_nome") || "").toString().trim();
      const email = (formData.get("usuario_email") || "").toString().trim();
      const telefone = (formData.get("telefone") || "").toString().trim();
      const assunto = (formData.get("assunto") || "").toString();
      const contatoPreferido = (formData.get("contato_preferido") || "").toString();
      const mensagem = (formData.get("usuario_msg") || "").toString().trim();
      const recebeNovidades = !!formData.get("novidades");

      // === VALIDAÇÃO ===
      if (!nome || !email || !mensagem) {
        showNotification("Por favor, preencha Nome, E-mail e Mensagem", "error");
        return;
      }

      if (!validarEmail(email)) {
        showNotification("E-mail inválido. Digite um e-mail válido", "error");
        return;
      }

      if (telefone && !validarTelefone(telefone)) {
        showNotification("Telefone inválido. Digite 10 ou 11 dígitos", "error");
        return;
      }

      // === PREPARAÇÃO PARA ENVIO ===
      const payload = {
        full_name: nome,
        email: email,
        phone: telefone || null,
        subject: assunto || null,
        preferred_contact: contatoPreferido,
        message: mensagem,
        receive_news: recebeNovidades,
        created_at: new Date().toISOString()
      };

      // === DESABILITA BOTÃO E MOSTRA FEEDBACK ===
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "📤 Enviando...";
      }

      // === SUPABASE ===
      const { data, error } = await supabaseClient
        .from("contact_messages")
        .insert([payload]);

      if (error) {
        console.error("Erro ao inserir no Supabase:", error);
        showNotification("Não conseguimos enviar sua mensagem. Tente novamente em alguns instantes", "error");
        return;
      }

      // === SUCESSO ===
      showNotification("Mensagem enviada com sucesso! Em breve entraremos em contato", "success");
      form.reset();

      // Log para debug
      console.log("Mensagem inserida com sucesso:", data);

    } catch (err) {
      console.error("Erro inesperado:", err);
      showNotification("Algo deu errado. Por favor, tente novamente", "error");
    } finally {
      // === RESTAURA BOTÃO ===
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    }
  });
});

/* notificações  */
function showNotification(message, type = "info") {
  // Remove notificação anterior se existir
  const existing = document.querySelector(".notification");
  if (existing) existing.remove();

  // Cria elemento de notificação
  const notification = document.createElement("div");
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-message">${message}</span>
      <button class="notification-close" type="button" aria-label="Fechar">×</button>
    </div>
  `;


  document.body.insertBefore(notification, document.body.firstChild);
  notification.querySelector(".notification-close").addEventListener("click", () => {
    notification.remove();
  });

  // Auto-remove
  setTimeout(() => {
    if (notification.parentElement) notification.remove();
  }, 6000);
}
