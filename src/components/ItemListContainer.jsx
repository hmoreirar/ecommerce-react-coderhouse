export default function ItemListContainer({ mensaje }) {
  return (
    <main className="container py-4">
      <h1 className="text-center">{mensaje}</h1>
      <p className="text-center text-muted">
        Aquí aparecerá el catálogo de productos.
      </p>
    </main>
  );
}
