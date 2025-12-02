# React Coderhouse — Tienda de ejemplo

Pequeña tienda en React creada durante el curso de React de Coderhouse. Incluye listados de productos, detalle de producto, carrito y checkout con integración mínima a Firebase.

## Características

- Listado de productos y filtrado por categoría.
- Página de detalle de producto.
- Carrito con agregar/quitar/vaciar.
- Checkout (formulario) que crea una orden en Firebase.
- Context API para el manejo del carrito.
- Ruteo con React Router.

## Requisitos

- Node.js >= 14
- npm
- Cuenta/configuración de Firebase (opcional, si quieres persistir órdenes)

## Instalación

## 1. Clonar el repositorio

```bash
$ git clone
```

## 2. Instalar dependencias

```bash
$ npm install
```

## Ejecutar en desarrollo

```bash
$ npm run dev
```

Abre http://localhost:3000 (o la URL que indique el terminal).

## Estructura principal

- src/
  - components/ — componentes de UI (NavBar, Item, ItemListContainer, ItemDetailContainer, CartContainer, FormCheckout, etc.)
  - context/ — CartContext (manejador de estado global del carrito)
  - data/ — integración con Firebase (createOrder, getProducts, etc.)
  - App.jsx — ruteo y proveedor del contexto

## Notas

- El formulario de checkout (`FormCheckout.jsx`) está controlado por estado y se envía mediante la función `handleCheckout` provista desde `CartContainer`.
- `CartContainer` ahora hace render condicional: si `cartItems` está vacío no muestra el formulario y en su lugar muestra un mensaje con un enlace a productos.
- Si usas Firebase, revisa `src/data/firebase.js` para agregar tus credenciales y configurar Firestore.

## Producción / Build

```bash
npm run build
```

El contenido listo para producción quedará en la carpeta `build`/`dist` según la configuración.

## Contacto / Licencia

Proyecto de ejemplo para aprendizaje. Libre para modificar y usar como referencia.
