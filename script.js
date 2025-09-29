// Script para interatividade na página de perfil do LinkedIn

document.addEventListener('DOMContentLoaded', function() {
  const connectBtn = document.querySelector('.connect-btn');
  const messageBtn = document.querySelector('.message-btn');
  const moreBtn = document.querySelector('.more-btn');

  if (connectBtn) {
    connectBtn.addEventListener('click', function() {
      alert('Solicitação de conexão enviada!');
      this.innerHTML = '<i class="fas fa-check"></i> Conectado';
      this.disabled = true;
      this.style.backgroundColor = '#666';
      this.style.color = '#fff';
      this.style.borderColor = '#666';
    });
  }

  if (messageBtn) {
    messageBtn.addEventListener('click', function() {
      alert('Abrindo caixa de mensagens...');
    });
  }

  if (moreBtn) {
    moreBtn.addEventListener('click', function() {
      alert('Mais opções: Salvar, Compartilhar, etc.');
    });
  }
});
