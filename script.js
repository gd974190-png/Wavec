// ==========================================
// 1. SELECCIÓN DE ELEMENTOS DEL DOM
// ==========================================
const btnChatbot = document.getElementById('btn-chatbot');
const btnCerrarChat = document.getElementById('btn-cerrar-chat');
const ventanaChatbot = document.getElementById('ventana-chatbot');

const chatInput = document.getElementById('chat-input');
const btnEnviar = document.getElementById('btn-enviar');
const chatMensajes = document.getElementById('chat-mensajes');


// ==========================================
// 2. ABRIR Y CERRAR LA VENTANA DEL CHATBOT
// ==========================================
btnChatbot.addEventListener('click', () => {
  ventanaChatbot.classList.toggle('oculto');
});

btnCerrarChat.addEventListener('click', () => {
  ventanaChatbot.classList.add('oculto');
});


// ==========================================
// 3. LOGICA DE INTERACCIÓN DEL CHATBOT
// ==========================================

// Función para procesar y enviar mensajes
function enviarMensaje() {
  const textoUsuario = chatInput.value.trim();

  // Si el usuario no escribió nada, no hace nada
  if (textoUsuario === "") return;

  // Agregar el mensaje del usuario a la pantalla
  agregarMensajePantalla(textoUsuario, 'usuario');
  chatInput.value = ""; // Limpiar el input

  // Esperar un breve momento (simular que el bot piensa) para responder
  setTimeout(() => {
    const respuestaBot = generarRespuestaBot(textoUsuario);
    agregarMensajePantalla(respuestaBot, 'bot');
  }, 600);
}

// Escuchar el clic en el botón de enviar
btnEnviar.addEventListener('click', enviarMensaje);

// Permitir enviar el mensaje presionado la tecla "Enter"
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    enviarMensaje();
  }
});


// ==========================================
// 4. REGLAS DE RESPUESTAS DEL CHATBOT
// ==========================================
function generarRespuestaBot(mensaje) {
  // Convertimos el mensaje a minúsculas para facilitar la comparación
  const texto = mensaje.toLowerCase();

  // Reglas de respuesta basadas en palabras clave:
  if (texto.includes('holaa') || texto.includes('buenas')) {
    return "¡Holiss! ¿Cómo estás? ¿En qué puedo ayudarte?";
  } 
  else if (texto.includes('precio') || texto.includes('costo') || texto.includes('cuanto cuesta')) {
    return "Nuestros productos tienen precios variados por categoria como Fan made y original. Puedes consultar el área de Compras para más detalles del producto de tu agrado.";
  } 
  else if (texto.includes('horario') || texto.includes('abierto')) {
    return "Atendemos de Lunes a Viernes de 9:00 am a 6:00 pm y Sabádos y Domingos de 10:00 am a 4:00 pm.";
  } 
  else if (texto.includes('contacto') || texto.includes('telefono') || texto.includes('correo')) {
    return "Puedes escribirnos al gmail wavecsmstore.com o llamarnos al 13-1433-2025.";
  } 
  else if (texto.includes('gracias')) {
    return "¡De nadaa! fue un gusto en haberte ayudado.";
  } 
  else {
    // Respuesta por defecto si no reconoce ninguna palabra clave
    return "Disculpa, no entendí bien tu consulta. podrias repetirlo de nuevo.";
  }
}


// Función auxiliar para insertar las burbujas de texto en el chat
function agregarMensajePantalla(texto, emisor) {
  const divMensaje = document.createElement('div');
  divMensaje.classList.add('mensaje', emisor);
  divMensaje.textContent = texto;

  chatMensajes.appendChild(divMensaje);

  // Desplazar automáticamente el chat hacia abajo
  chatMensajes.scrollTop = chatMensajes.scrollHeight;
}