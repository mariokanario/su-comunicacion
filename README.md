
## Nextjs

El proyecto esta creado con Next.js, para iniciar su visualización primero debe correr el servidor local:


```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) con su navegador para ver el resultado.

Para iniciar a editar debe ingresar al archivo `src/app/page.tsx` este es el archivo principal de donde se desprende el resto de las páginas que se encuentran en las carpetas de `app`


## Estructura

La estructura del proyecto en Next esta dividida de la siguiente forma:

- Página principal `src/app/page.tsx`
- Esta tiene un layout principal dividida en 3 partes: header, children (contenido) y footer `src/app/layout.tsx`.
- Página Contacto `src/app/contact/page.tsx`
- Página Empresa `src/app/about/page.tsx`
- Página Portafolio `src/app/portfolio/page.tsx`, dentro de la carpeta de portfolio encuentran las páginas que lo conforman: administration, docuManagement, gedsys, hardware, networks, outsourcing.

- Las imágenes se encuentran en `public/img/`
- El video de Gedsys  `public/video/`


Nota: cada página utiliza componentes para su funcionamiento, estos se encuentran en la ruta: `src/components`

## Estilos css

El proyecto utiliza diferente archivos css que se encuentran en la siguiente ruta: `src/app/styles`, estos estilos son llamados en el archivo de layout.tsx al igual que familia tipográfica y librerías de animación.

- Si desea agregar estilos nuevos lo puede hacer en el archivo `src/app/styles/css/style.css`
- Si desea modificar estilos existentes lo puede hacer en los archivos `src/app/styles/css/style.css` ó `src/app/styles/css/main.css` o ingresando de forma detallada en los demás archivos de cada componente.
- El sitio utiliza [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) para su responsive, puede utilizar las clases de esta librería para modificarlo.

## Animaciones

Las animaciones estan hechas con las librerías AOSanimate [AOSanimate](https://michalsnik.github.io/aos/) y [Animate.css](https://animate.style/)
Las animaciones de los gráficos estan indexadas dentro de cada uno de los archivos .svg en la ruta `public/img/illustrations`