# PRD - Nuna Coffee Shop Website

## Información del Proyecto
**Nombre:** Nuna Coffee Shop Website  
**Tipo:** Landing page / Sitio web para cafetería de especialidad  
**Ubicación:** Calle de Modesto Lafuente, 4, Chamberí, 28010 Madrid  
**Fecha de inicio:** Diciembre 2025  

## Problema Original
Crear un sitio web profesional, moderno y altamente optimizado para conversión para una cafetería de especialidad llamada Nuna Coffee Shop ubicada en Madrid. El objetivo es atraer clientes locales, posicionar en Google como cafetería en Chamberí, mostrar el ambiente del local, destacar el brunch y café de especialidad, facilitar llamadas y cómo llegar, y transmitir calidad artesanal.

## User Personas
1. **Cliente Local (25-45 años)**
   - Busca cafetería de calidad en Chamberí
   - Valora ambiente acogedor y café artesanal
   - Usa móvil para buscar información

2. **Turista/Visitante**
   - Busca recomendaciones de brunch en Madrid
   - Necesita ubicación y horarios claros
   - Valora reseñas y fotos

3. **Profesional/Freelancer**
   - Busca espacio tranquilo para trabajar
   - Valora calidad del café
   - Necesita saber horarios y ambiente

## Requisitos Core (Estáticos)

### Información de Negocio
- **Nombre:** Nuna Coffee Shop
- **Teléfono:** 667 06 29 98
- **Dirección:** Calle de Modesto Lafuente, 4, Chamberí, 28010 Madrid
- **Horario:** 8:00 — 20:00
- **Valoración:** 4.8/5 (225+ reseñas)
- **Rango de precios:** 1€ – 10€
- **Instagram:** https://www.instagram.com/nunacoffeeshop/

### Diseño
- **Paleta de colores:**
  - Principal: #6F4E37 (marrón café)
  - Secundario: #D6BFA7 (beige café)
  - Neutro: #F8F6F2 (crema)
  - Acento: #4A6B57 (verde natural)
  - Texto: #2A2A2A

- **Tipografía:**
  - Títulos: Playfair Display (serif elegante)
  - Texto: Inter (sans-serif moderna)

### Estructura del Sitio
1. Header con navegación sticky
2. Hero Section (imagen + CTAs)
3. Sobre Nuna (storytelling + valores)
4. Especialidades (café, bebidas, brunch)
5. Menú detallado
6. Galería de imágenes
7. Reseñas de clientes
8. Ubicación con mapa
9. Formulario de contacto
10. Footer completo

## Implementado (Fecha: Diciembre 2025)

### ✅ Frontend Completo
**Componentes creados:**
- `/app/frontend/src/data/mock.js` - Datos mock
- `/app/frontend/src/components/Header.jsx` - Navegación sticky
- `/app/frontend/src/components/Hero.jsx` - Sección hero
- `/app/frontend/src/components/About.jsx` - Sobre Nuna
- `/app/frontend/src/components/Specialties.jsx` - Especialidades
- `/app/frontend/src/components/Menu.jsx` - Menú con tabs
- `/app/frontend/src/components/Gallery.jsx` - Galería con lightbox
- `/app/frontend/src/components/Reviews.jsx` - Reseñas
- `/app/frontend/src/components/Location.jsx` - Mapa + info
- `/app/frontend/src/components/Contact.jsx` - Formulario (MOCK)
- `/app/frontend/src/components/Footer.jsx` - Footer

**Características:**
- Diseño responsive mobile-first
- Navegación smooth scroll
- Header con transparencia inicial
- Hero con 3 CTAs prominentes
- Menú interactivo con categorías
- Galería con lightbox al hacer clic
- Integración de Google Maps
- Formulario de contacto (frontend only - MOCK)
- Animaciones y transiciones suaves
- SEO optimizado (meta tags)

**Imágenes:**
- 12 imágenes profesionales de Unsplash/Pexels
- Optimizadas para web
- Estética moderna y cálida

## API Contracts (Pendiente Backend)

### POST /api/contact
**Request:**
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Mensaje enviado correctamente",
  "id": "contact_id"
}
```

## Backlog Priorizado

### P0 (Crítico)
- [ ] Implementar backend API para formulario de contacto
- [ ] Conectar Contact form con backend
- [ ] Guardar mensajes en MongoDB
- [ ] Testing completo frontend + backend

### P1 (Alta prioridad)
- [ ] Sistema de notificaciones por email al recibir contacto
- [ ] Panel admin para ver mensajes de contacto
- [ ] Optimización SEO avanzada
- [ ] Analytics integration (Google Analytics)

### P2 (Mejoras futuras)
- [ ] Sistema de reservas online
- [ ] Integración con redes sociales (feed de Instagram)
- [ ] Newsletter signup
- [ ] Blog de café y recetas
- [ ] Programa de fidelización
- [ ] Multi-idioma (inglés)

## Next Tasks
1. **Implementar Backend:**
   - Crear modelo Contact en MongoDB
   - Crear endpoint POST /api/contact
   - Validación de datos
   - Manejo de errores

2. **Integración Frontend-Backend:**
   - Conectar formulario de contacto
   - Remover mock data
   - Testing E2E

3. **Testing:**
   - Probar formulario de contacto
   - Validar responsive design
   - Probar todos los links y navegación
   - Performance testing

## Notas Técnicas
- Stack: React + FastAPI + MongoDB
- Frontend port: 3000
- Backend port: 8001
- Componentes UI: Shadcn UI + Tailwind CSS
- Fuentes: Google Fonts (Playfair Display + Inter)
- Mapas: Google Maps iframe (sin API key requerida)
