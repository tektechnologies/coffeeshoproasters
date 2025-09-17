import './styles/main.css'


function App() {
 
  return (
    <>
     <main className="app">
      {/* Hero Section */}
      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80"
          alt="Espresso cup"
          className="hero-bg"
        />
        <div className="hero-content">
          <h1 className="hero-title">Coffee Shop Roasters</h1>
          <p className="hero-text">
            Small-batch roasted espresso blends crafted from Brazil, Guatemala,
            and Malabar beans.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2 className="about-title">Our Specialty</h2>
        <p className="about-text">
          At Barkley Roasters, we’re passionate about creating rich, balanced
          espresso. Our unique blend combines the smooth nuttiness of Brazilian
          beans, the bright fruitiness of Guatemalan coffee, and the bold,
          earthy character of Indian Malabar.
        </p>
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
          alt="Espresso"
          className="about-img"
        />
      </section>

      {/* Coffee Beans Section */}
      <section className="beans">
        <div className="bean-grid">
          <div className="bean">
            <img
              src="https://images.unsplash.com/photo-1515442261605-65987783cb6f?auto=format&fit=crop&w=600&q=80"
              alt="Brazil coffee beans"
              className="bean-img"
            />
            <h3 className="bean-title">Brazil</h3>
            <p className="bean-text">Nutty, smooth, and chocolatey notes.</p>
          </div>
          <div className="bean">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
              alt="Guatemala coffee"
              className="bean-img"
            />
            <h3 className="bean-title">Guatemala</h3>
            <p className="bean-text">Bright, fruity, and lively acidity.</p>
          </div>
          <div className="bean">
            <img
              src="https://images.unsplash.com/photo-1576485290815-82f0f2296c83?auto=format&fit=crop&w=600&q=80"
              alt="Malabar coffee beans"
              className="bean-img"
            />
            <h3 className="bean-title">Malabar</h3>
            <p className="bean-text">Bold, earthy, and spicy undertones.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Barkley Roasters. All rights
          reserved.
        </p>
      </footer>
    </main>


    </>
  )
}

export default App
