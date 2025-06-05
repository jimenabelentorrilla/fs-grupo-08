# Bodegón Grupo 08

Sitio web estático de un restaurante ficticio tipo *bodegón*, desarrollado como práctica de frontend. El proyecto cuenta con cuatro páginas principales:

- **Inicio (Home):** presentación del restaurante y navegación general.
- **Menú:** catálogo de platos con posibilidad de filtrar por categorías, consumiendo datos desde un archivo JSON.
- **Reservas:** formulario interactivo para que los usuarios reserven una mesa.
- **Sobre nosotros (About Us):** sección informativa del restaurante.

El sitio fue desarrollado con **[Astro](https://astro.build/)** y tecnologías web nativas (**HTML**, **CSS** y **JavaScript**). Se estructuró utilizando un layout general con `slots` para lograr una composición flexible de las páginas. También se implementaron **componentes reutilizables** como:

- `Nav` y `Footer` para la navegación y pie de página,
- `ProductCard` para mostrar cada plato del menú,
- e `Input` para campos reutilizables del formulario.

El pasaje de información entre componentes se realizó mediante **props**, promoviendo una arquitectura mantenible y modular.

---

## 🔗 Sitio en producción

👉 [https://fs-grupo-08.netlify.app](https://fs-grupo-08.netlify.app)

---

## 🛠 Tecnologías utilizadas

- Astro
- HTML, CSS, JavaScript nativo
- pnpm como gestor de paquetes

---

## ⚙️ Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/jimenabelentorrilla/fs-grupo-08.git
   cd fs-grupo-08

2. Instalar las dependencias:
    ```bash
    pnpm install

3. Iniciar el entorno de desarrollo:
    ```bash 
    pnpm dev 
## 👥 Integrantes
   - 👩‍💻 Jimena Belen.
   - 🧑‍💻 Rivera Victor.
   - 🧑‍💻 Martinez Juan.
