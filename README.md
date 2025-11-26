# 🏀 Futsala

Aplicación web para la gestión de torneos y equipos de fútbol sala.

## 📁 Estructura del Proyecto

```
futsala/
├── src/                    # Código fuente del frontend
│   ├── components/         # Componentes reutilizables de React
│   ├── pages/              # Páginas/vistas de la aplicación
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Funciones de utilidad
│   ├── assets/             # Recursos estáticos (imágenes, iconos)
│   ├── App.jsx             # Componente raíz de la aplicación
│   ├── App.css             # Estilos del componente App
│   ├── main.jsx            # Punto de entrada de React
│   └── index.css           # Estilos globales
├── backend/                # API del servidor (próximamente)
├── docs/                   # Documentación adicional
├── index.html              # HTML principal
├── vite.config.js          # Configuración de Vite
├── eslint.config.js        # Configuración de ESLint
├── package.json            # Dependencias y scripts
└── pnpm-lock.yaml          # Lock file de pnpm
```

## 🚀 Tecnologías

### Frontend
- **React 19** - Biblioteca de UI
- **Vite 7** - Build tool y dev server
- **CSS** - Estilos vanilla
- **ESLint** - Linter de código

### Herramientas
- **pnpm** - Gestor de paquetes rápido y eficiente

## 💻 Desarrollo

### Requisitos Previos
- Node.js (v18 o superior)
- pnpm (instalado globalmente)

### Instalación

```bash
# Instalar dependencias
pnpm install
```

### Scripts Disponibles

```bash
# Iniciar servidor de desarrollo (http://localhost:5173)
pnpm dev

# Compilar para producción
pnpm build

# Previsualizar build de producción
pnpm preview

# Ejecutar linter
pnpm lint
```

## 📝 Estado del Proyecto

🚧 **En desarrollo inicial**

### Completado
- ✅ Configuración inicial del proyecto
- ✅ Estructura de carpetas organizada
- ✅ Configuración de Vite y React
- ✅ Configuración de ESLint

### Próximos Pasos
- 🔲 Implementar sistema de rutas
- 🔲 Diseñar interfaz de usuario
- 🔲 Crear componentes base
- 🔲 Desarrollar API del backend
- 🔲 Integrar base de datos

## 📖 Documentación

Para más información sobre la estructura y convenciones del proyecto, consulta:
- [Documentación del proyecto](./docs/README.md)
- [Guía de componentes](./src/components/README.md)
- [Backend API](./backend/README.md)

## 🤝 Contribución

Este es un proyecto en desarrollo. Las contribuciones son bienvenidas.

## 📄 Licencia

Privado - Todos los derechos reservados
