export default function AppMain() {

  const products = ['Product 1', 'Product 2', 'Product 3']

  return (
    <main>
      <h2>
        Hello React.js
      </h2>


      <section className="products">
        <ul>
          {products.map(product => <li>{product}</li>)}

        </ul>
      </section>


    </main>
  )
}