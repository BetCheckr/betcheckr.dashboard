# BetCheckr

**BetCheckr** es una aplicación web diseñada para verificar la precisión de las predicciones de tipsters en apuestas deportivas. El objetivo principal de la plataforma es fomentar la transparencia y reducir el riesgo de estafas en la comunidad de apuestas. Los usuarios pueden acceder a estadísticas de tipsters, comprobar la fiabilidad de sus predicciones y tomar decisiones más informadas.

---

## Características

- **Verificación de Predicciones**: Compara las predicciones de los tipsters con los resultados reales para calcular la precisión.
- **Perfil de Tipsters**: Los usuarios pueden visualizar estadísticas detalladas sobre el rendimiento histórico de los tipsters.
- **Interfaz Intuitiva**: Una interfaz sencilla y fácil de usar para que los usuarios puedan navegar sin complicaciones.
- **Dashboard Personalizado**: Accede a un dashboard con las métricas más relevantes sobre tus apuestas y los tipsters que sigues.
- **Transparencia**: Ofrece una visión clara y confiable sobre las estadísticas de las predicciones de los tipsters.

---

## Tecnologías Utilizadas

- **Frontend**:
  - React.js (con hooks y Context API)
  - Tailwind CSS (para un diseño limpio y adaptable)
  - React Router (para la navegación)
  - Zustand (para el manejo del estado de la aplicación)
  - Jest y React Testing Library (para pruebas unitarias)

- **Backend**:
  - Google Cloud Platform (GCP) (responsable de la infraestructura backend)
  - Supabase (para autenticación y base de datos)

- **Version Control**:
  - Git & GitHub (para el control de versiones y colaboración en el proyecto)

---

## Instalación

### Requisitos previos

1. **Node.js**: Asegúrate de tener la versión 16.8 o superior instalada.
2. **pnpm**: Si no tienes `pnpm` instalado, puedes hacerlo globalmente con el siguiente comando:

   ```bash
   npm install -g pnpm
   ```

## Pasos de instalación
### Clonar el repositorio:

```bash
git clone https://github.com/tuusuario/betchkr.dashboard.git
```

## Instalar las dependencias:

Entra en la carpeta del proyecto y ejecuta el siguiente comando:

```bash
pnpm install
```

## Iniciar el servidor de desarrollo:

Para arrancar la aplicación en modo desarrollo, ejecuta:

```bash
pnpm start
```

Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en http://localhost:3000.

## Ejecutar las pruebas:

Si deseas ejecutar las pruebas de la aplicación, usa el siguiente comando:

```bash
pnpm test
```

## Estructura del Proyecto
```bash
/betchkr.dashboard
├── /public               # Archivos públicos estáticos
├── /src                  # Código fuente
│   ├── /components       # Componentes reutilizables
│   ├── /pages            # Páginas principales (HomePage, BetPage, etc.)
│   ├── /store            # Estado global utilizando Zustand
│   ├── /tests            # Archivos de prueba
│   ├── App.jsx           # Componente principal
│   ├── index.css         # Estilos globales
│   └── main.jsx          # Archivo de entrada principal
├── .gitignore            # Archivos y directorios ignorados por Git
├── package.json          # Dependencias y scripts
├── pnpm-lock.yaml        # Dependencias de pnpm
└── README.md             # Documentación del proyecto
```

## Contribuciones
Si deseas contribuir a este proyecto, sigue estos pasos:

1. Crea una nueva rama (git checkout -b nombre-de-la-rama).
2. Realiza tus cambios y haz commit (git commit -am 'Añadir nueva funcionalidad').
3. Empuja tus cambios a tu fork (git push origin nombre-de-la-rama).
4. Crea un Pull Request para revisión.

## Test y Validación
### Ejecución de pruebas
El proyecto utiliza Jest y React Testing Library para las pruebas unitarias. Para ejecutar las pruebas, usa el siguiente comando:

```bash
pnpm test
```
Las pruebas se ejecutarán y se informará sobre el estado de las mismas en la consola.

### Linter
El proyecto está configurado con ESLint para garantizar la calidad del código. Puedes ejecutar el linter con:

```bash
pnpm lint
```

Licencia
Este proyecto está bajo la MIT License. Consulta el archivo LICENSE para más detalles.

## Roadmap
Futuras características:

- Integración con más plataformas de apuestas.
- Funcionalidad de predicciones personalizadas.
- Soporte para múltiples idiomas y monedas.
- Mejoras en la visualización de estadísticas.