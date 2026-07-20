import MenuGrid from '../Components/MenuGrid.jsx'

export default function MenuPage() {
  return (
    <main className="bg-stone-50 min-h-screen pt-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-black text-stone-900 mb-4">Our Full Menu</h1>
        <p className="text-stone-600 max-w-2xl mx-auto px-4">
          Explore our handcrafted pizzas. Every order is baked fresh in our wood-fired oven.
        </p>
      </div>
      <MenuGrid />
    </main>
  )
}