# Prueba Técnica
<p>La siguiente prueba técnica consiste en desarrollar una aplicación web con las siguientes características:</p>

<ul>
<li>
Desarrollar la prueba con React.js e implementar Bootstrap.
</li>
<li>
Implementar Axios / CURL / Fetch para el consumo de Web Services.
</li>
<li>
Subir la prueba a un repositorio en GitHub.
</li>
</ul>

## Descripción
<p>Para esta prueba, se proporciona una API con su archivo Swagger correspondiente, que puede ser visualizado en https://editor.swagger.io para obtener información sobre el servicio.</p>

<strong>URL API:</strong>
<code>https://api.devdicio.net:8444/v1/sec_dev_interview</code>

<p>Debes incluir el siguiente token en el encabezado de las solicitudes:</p>
<pre>
<code>
headers: {
  'Content-Type': 'application/json',
  'Host: api.devdicio.net',
  'xc-token': "J38b4XQNLErVatKIh4oP1jw9e_wYWkS86Y04TMNP"
}
</code>
</pre>
<p>Esta aplicación constará de dos secciones:</p>

<ul>
<li><strong>Alta de usuario con foto</strong>.- Se debe construir un formulario para un registro de usuarios que tenga las 
características mencionadas más adelante.</li>
<li><strong>Visualización de datos</strong>.- Se debe visualizar la información de los usuarios ya registrados.</li>
</ul>

<ol>
<li><strong>Alta de usuario.</strong> Construir un formulario que contenga los siguiente datos y validación de los mismos:</li>
<ol>
<li><strong>Formulario</strong></li>
<ol>
<li>Nombre (Campo no vacío y solo letras)</li>
<li>Apellido Paterno (Campo no vacío y solo letras)</li>
<li>Apellido Materno (Campo no vacío y solo letras)</li>
<li>Email (Formato de email)</li>
<li>Fecha de Nacimiento (AAAA-MM-DD)</li>
<li>Datos: </li>
<ul>
<li>Calle (Campo no vacío y solo letras)</li>
<li>Numero (Campo no vacío y solo numeros)</li>
<li>Colonia (Campo no vacío)</li>
<li>Delegacion/Municipio (Campo no vacío)</li>
<li>Estado (Campo no vacío y solo letras)</li>
<li>CP (Campo no vacío y solo numeros)</li>
<li>Fotografía.- El usuario deberá tomar una foto desde la cámara y realizar lo siguiente:</li>
<ul>
<li><strong>Guía en sefie.</strong> Poner una guia para centrar el rostro.</li>
<li><strong>Envío.</strong> Para el envío al web service se debe enviar en base64 y tener formato png, además de 
recortar la imagen puede ser manual (el usuario lo gestione el recorte) o automático desde el 
centro de 300x300.</li>
</ul>
</ul>
</ol>
</ul>
<li><strong>Visualización datos.</strong> En un menu/pestaña/popup donde se pueda ver la información guardada 
en una tabla con todos los usuarios incluye información pesonal como fotografía y un filtro de 
búsqueda por nombre.</li>
<li><strong>OPCIONAL. Edición de datos.</strong> Una sección donde se pueda editar la información de los 
usuarios registrados.</li>
</ol>

## Consideraciones:

<ol>
<li>Se debe construir en React JS y uso de hooks.</li>
<li>Crear README con lo solicitado de las instrucciones.</li>
<li>Diseño responsivo y patrones de diseño.</li>
<li>Buen uso de git (commits bien definidos y documentados)</li>
</ol>

## Restricciones:
<p>Al finalizar, súbelo a GitHub. Por favor, mandame un correo de confirmación y compartelo con este usuario:</p>
<ul>
<li><strong>Robyrojas</strong></li>
</ul>

