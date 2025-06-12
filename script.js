// Sistema de autenticação neural
const validarCredenciais = (email, senha) => {
  const emailCorreto = 'synapse@dmw.com';
  const senhaCorreta = '123456';
  return email === emailCorreto && senha === senhaCorreta;
};

const entrarBtn = document.querySelector('.btn-login');

entrarBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.querySelector('.input-email').value;
  const senha = document.querySelector('.input-senha').value;
  if (validarCredenciais(email, senha)) {
    alert('Bem-vindo à rede neural Synapsewarts! Sua conexão foi estabelecida.');
  } else {
    alert('Falha na conexão neural. Verifique suas credenciais de acesso.');
  }
});

// Validação de concordância com análise de dados
const validaCheckbox = () => {
  const btnEnviar = document.querySelector('#submit-btn');
  const checkbox = document.querySelector('#agreement');
  btnEnviar.disabled = true;

  checkbox.addEventListener('click', () => {
    if (checkbox.checked === true) {
      btnEnviar.disabled = false;
      btnEnviar.classList.add('pulse-effect');
    } else {
      btnEnviar.disabled = true;
      btnEnviar.classList.remove('pulse-effect');
    }
  });
};

// Contador de caracteres com feedback visual
const setupTextareaCounter = () => {
  const textarea = document.querySelector('textarea');
  const counter = document.querySelector('#counter');
  
  textarea.addEventListener('input', () => {
    const remaining = 500 - textarea.value.length;
    counter.textContent = remaining;
    
    if (remaining < 100) {
      counter.style.color = 'orange';
    } else {
      counter.style.color = 'rgb(86, 22, 155)';
    }
    
    if (remaining < 30) {
      counter.style.color = 'red';
    }
  });
};

// Efeito visual para simular conexões neurais
const addNeuralEffects = () => {
  const formElements = document.querySelectorAll('input, select, textarea');
  
  formElements.forEach(element => {
    element.addEventListener('focus', () => {
      element.style.boxShadow = '0 0 8px rgba(86, 22, 155, 0.6)';
    });
    
    element.addEventListener('blur', () => {
      element.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.1)';
    });
  });
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  validaCheckbox();
  setupTextareaCounter();
  addNeuralEffects();
  
  // Easter egg para entusiastas de dados
  console.log('Synapsewarts DMW: Conectando Dados, Marketing e Web através de sinapses digitais.');
});
