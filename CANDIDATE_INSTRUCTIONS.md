# Prueba Técnica Backend — NestJS Debug Challenge

## Contexto

En Alpha ICG estamos desarrollando una plataforma SaaS empresarial basada en APIs y microservicios.

Esta prueba busca evaluar tu capacidad para entender una API NestJS existente, detectar problemas, corregirlos y dejar una solución simple, funcional y mantenible.

Puedes usar herramientas de IA como ChatGPT, Cursor, Claude, GitHub Copilot o similares. Lo importante es que el resultado funcione y puedas explicar tus decisiones.

## Duración esperada

30 a 45 minutos.

No esperamos una solución perfecta ni sobreingeniería. Esperamos criterio, claridad y capacidad de ejecución.

## Objetivo

Recibirás un pequeño proyecto NestJS con una API de proyectos.

La API ya existe, pero contiene errores intencionales.

Tu objetivo es:

1. Levantar el proyecto localmente.
2. Detectar los problemas principales.
3. Corregirlos.
4. Asegurar que los endpoints funcionen correctamente.
5. Dejar instrucciones claras en el README.
6. Explicar brevemente qué corregiste y por qué.

## API esperada

La API administra proyectos.

### Entidad Project

```ts
{
  id: string;
  name: string;
  status: 'planned' | 'active' | 'completed';
  budget: number;
  createdAt: string;
}
```

### Endpoints esperados

```http
GET /projects
GET /projects/:id
POST /projects
PATCH /projects/:id
DELETE /projects/:id
```

## Reglas funcionales

- `name` es obligatorio.
- `name` debe tener mínimo 3 caracteres.
- `status` solo puede ser `planned`, `active` o `completed`.
- `budget` debe ser un número mayor o igual a 0.
- Al crear un proyecto, debe generarse un `id`.
- Al crear un proyecto, debe generarse `createdAt`.
- Si se consulta un proyecto inexistente, la API debe responder `404`.
- Si se actualiza un proyecto inexistente, la API debe responder `404`.
- Si se elimina un proyecto inexistente, la API debe responder `404`.
- Si se intenta crear o actualizar con datos inválidos, la API debe responder `400`.
- `PATCH` debe permitir actualizaciones parciales sin borrar campos existentes.
- No es necesario usar base de datos real. Puede mantenerse almacenamiento en memoria.

## Requisitos técnicos

- NestJS.
- TypeScript.
- DTOs con validación.
- Manejo adecuado de errores HTTP.
- Dockerfile funcional.
- README con instrucciones de ejecución.
- No agregar base de datos.
- No cambiar el framework.
- No reescribir todo el proyecto desde cero salvo que sea estrictamente necesario.

## Entregables

Puedes entregar de una de estas formas:

1. Pull Request sobre el repositorio entregado.
2. Repositorio GitHub con tu solución.
3. ZIP con el proyecto corregido.

Además, incluye en el README una sección llamada:

```md
## Cambios realizados
```

Ahí explica brevemente:

- Qué errores encontraste.
- Qué corregiste.
- Cómo ejecutar la API.
- Cómo probar rápidamente los endpoints.

## Evaluación

Se evaluará:

- Que el proyecto compile.
- Que la API funcione.
- Que las validaciones estén bien implementadas.
- Que el manejo de errores sea correcto.
- Que el Dockerfile funcione.
- Que el código sea claro y mantenible.
- Que el README sea útil.
- Que puedas explicar tus decisiones técnicas.

## Uso de IA

Está permitido usar herramientas de IA.

Sin embargo, debes revisar y entender el código entregado. Durante la entrevista técnica podremos pedirte que expliques partes específicas de tu solución.
