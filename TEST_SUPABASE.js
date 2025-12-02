console.group("🧪 Teste de Integração Supabase");

// Verificar se Supabase está carregado
if (typeof supabase !== "undefined") {
  console.log("✅ Supabase SDK carregado");
  
  const { createClient } = supabase;
  const SUPABASE_URL = "https://mjonleauwersmikhshao.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qb25sZWF1d2Vyc21pa2hzaGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNTMzODMsImV4cCI6MjA3OTgyOTM4M30.wmfouOgoy8l711CH6sRfQWpHcVBk03T_R7yL1uEUHsI";
  
  const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  
  // Teste de conexão
  client
    .from("contact_messages")
    .select("count(*)", { count: "exact" })
    .then((response) => {
      if (response.error) {
        console.error("Erro ao conectar:", response.error);
      } else {
        console.log("Conexão com Supabase bem-sucedida");
        console.log(`Total de mensagens armazenadas: ${response.count || 0}`);
      }
    })
    .catch((err) => {
      console.error("Erro inesperado:", err);
    });
  
} else {
  console.error("Supabase SDK não foi carregado. Verifique o <script> tag no HTML");
}

// Verifica formulário 
const form = document.getElementById("formContato");
if (form) {
  console.log("Formulário #formContato encontrado");
} else {
  console.error("Formulário #formContato não encontrado");
}

// Valida de email 
function testarValidacao() {
  console.group("Teste de Validações");
  
  const emails = [
    { email: "usuario@exemplo.com", esperado: true },
    { email: "invalido@com", esperado: false },
    { email: "teste", esperado: false },
  ];
  
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  emails.forEach(({ email, esperado }) => {
    const resultado = regexEmail.test(email);
    const status = resultado === esperado ? "✅" : "❌";
    console.log(`${status} E-mail: ${email} => ${resultado}`);
  });
  
  console.groupEnd();
}

testarValidacao();
console.groupEnd();

console.log("💡 Para enviar um teste, preencha o formulário em pages/contato.html");
