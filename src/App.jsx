import "./styles/main.css";
import { useState } from "react";
import RecipeInputForm from "./forms/RecipeInputForm";

function App() {
  const [showRecipeForm, setShowRecipeForm] = useState(false);
  return (
    <>
      {/* Navigation with Marquee */}
      <nav className="nav-marquee">
        <div className="marquee-content">
          <img
            src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=40&q=80"
            alt="Coffee bean"
            className="marquee-icon"
          />
          <span className="marquee-text">Coffee Shop Roasters coming soon</span>
          <img
            src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=40&q=80"
            alt="Coffee bean"
            className="marquee-icon"
          />
          <span className="marquee-text">Coffee Shop Roasters coming soon</span>
          <img
            src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=40&q=80"
            alt="Coffee bean"
            className="marquee-icon"
          />
          <span className="marquee-text">Coffee Shop Roasters coming soon</span>
        </div>
      </nav>

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
              Small-batch roasted espresso blends crafted from Brazil,
              Guatemala, and Malabar beans.
            </p>
          </div>
        </section>

        {/* Navigation Bar */}
        <nav className="main-nav">
          <div className="nav-container">
            <div className="nav-logo">
              <span>Coffee Shop Roasters</span>
            </div>
            <div className="nav-links">
              <button
                className="nav-link"
                onClick={() => {
                  console.log("Button clicked! Current state:", showRecipeForm);
                  setShowRecipeForm(!showRecipeForm);
                  console.log("New state will be:", !showRecipeForm);
                }}
              >
                {showRecipeForm ? "Hide Recipe Form" : "Add Recipe"}
              </button>
            </div>
          </div>
        </nav>

        {/* Recipe Form Section */}
        {showRecipeForm && (
          <section className="recipe-form-section">
            <div
              style={{
                background: "red",
                color: "white",
                padding: "10px",
                textAlign: "center",
              }}
            >
              DEBUG: Form should be visible now! State:{" "}
              {showRecipeForm.toString()}
            </div>
            <RecipeInputForm />
          </section>
        )}

        {/* Debug info */}
        <div
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            background: "black",
            color: "white",
            padding: "10px",
            zIndex: 9999,
          }}
        >
          Form State: {showRecipeForm.toString()}
        </div>

        {/* About Section */}
        <section className="about">
          <h2 className="about-title">Our Specialty</h2>
          <p className="about-text">
            At Coffee Shop Roasters, we’re passionate about creating rich,
            balanced espresso. Our unique blend combines the smooth nuttiness of
            Brazilian beans, the bright fruitiness of Guatemalan coffee, and the
            bold, earthy character of Indian Malabar.
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
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80"
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
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80"
                alt="Malabar coffee beans"
                className="bean-img"
              />
              <h3 className="bean-title">Malabar</h3>
              <p className="bean-text">Bold, earthy, and spicy undertones.</p>
            </div>
          </div>
        </section>

        {/* Coffee Cups Section */}
        <section className="coffee-cups-section">
          <div className="coffee-cups-container">
            <img
              src="/src/images/coffee-cups.png"
              alt="Coffee cups"
              className="coffee-cups-image"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>
            &copy; {new Date().getFullYear()} Coffee Shop Roasters. All rights
            reserved.
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
