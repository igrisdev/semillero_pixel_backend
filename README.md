# 🚀 Semillero Pixel Backend

Este proyecto es una aplicación backend construida con [Strapi](https://strapi.io/), un CMS Headless flexible y potente. El backend gestiona información sobre miembros, proyectos, publicaciones, eventos y más, con soporte para internacionalización (i18n).

## 🚀 Comandos Principales

### Desarrollar

Inicia la aplicación Strapi en modo desarrollo con recarga automática:

```sh
npm run develop
# o
yarn develop
```

### Producción

Inicia la aplicación en modo producción:

```sh
npm run start
# o
yarn start
```

### Construir el Panel de Administración

Compila el panel de administración de Strapi:

```sh
npm run build
# o
yarn build
```

## ⚙️ Configuración

Copia el archivo `.env.example` a `.env` y completa las variables necesarias para tu entorno (puerto, claves, conexión a base de datos, etc.).

## 🗄️ Modelos de Contenido

El backend gestiona los siguientes modelos principales:

- **Miembros**: Información de los integrantes del semillero, incluyendo redes sociales y proyectos asociados.
- **Proyectos**: Detalles de proyectos realizados, tecnologías usadas y miembros participantes.
- **Publicaciones**: Artículos, papers o documentos publicados por los miembros.
- **Eventos**: Registro de eventos con imágenes y fechas.
- **Sobre Nosotros**: Información institucional.
- **Tipos de Publicación**: Clasificación y color para publicaciones.

Todos los modelos soportan internacionalización (i18n) y relaciones entre sí.

## 🛠️ Dependencias

- Node.js >= 18.x <= 22.x
- PostgreSQL (por defecto) o puedes configurar MySQL/SQLite en `config/database.ts`
- Strapi 5.x
- Plugins: color-picker, users-permissions, cloud

## 📚 Recursos

- [Documentación oficial de Strapi](https://docs.strapi.io)
- [Centro de recursos Strapi](https://strapi.io/resource-center)
- [Foro y comunidad](https://forum.strapi.io/)

## 👥 Comunidad

- [Discord de Strapi](https://discord.strapi.io)
- [Awesome Strapi](https://github.com/strapi/awesome-strapi)

---

<sub>Proyecto desarrollado por Johan Alvarez</sub>
