import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground" data-testid="hero-title">
              Hello.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground" data-testid="hero-description">
              I'm{" "}
              <span className="text-primary font-semibold">Bishika Chhetri</span>. Machine Learning Enthusiast.{" "}
              <span className="gradient-text font-semibold">Always learning.</span>
            </p>
          </div>

          <div className="flex space-x-4" data-testid="social-links">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-accent transition-colors"
              aria-label="GitHub"
              data-testid="social-github"
            >
              <Github className="h-5 w-5 text-foreground" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-accent transition-colors"
              aria-label="LinkedIn"
              data-testid="social-linkedin"
            >
              <Linkedin className="h-5 w-5 text-foreground" />
            </a>
            <a
              href="mailto:bishika.chhetri2077@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-accent transition-colors"
              aria-label="Email"
              data-testid="social-email"
            >
              <Mail className="h-5 w-5 text-foreground" />
            </a>
          </div>

          <button
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors cursor-pointer border-none"
            data-testid="contact-me-button"
          >
            Contact Me
          </button>
        </div>

        <div className="flex justify-center" data-testid="hero-photo">
          <div className="relative">
            {/* Animated background circles */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse"></div>
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/10 to-transparent animate-spin" style={{animationDuration: '30s'}}></div>
            
            {/* Main photo */}
            <img 
              src="/bishika-photo.png" 
              alt="Bishika Chhetri" 
              className="relative w-96 h-96 object-cover rounded-full shadow-2xl border-4 border-primary/30 hover:border-primary/60 transition-all duration-500 hover:scale-105 animate-bounce"
              style={{animationDuration: '6s', animationIterationCount: 'infinite'}}
            />
            
            {/* Floating elements around the photo */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
            <div className="absolute top-1/2 -left-8 w-3 h-3 bg-accent rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '5s'}}></div>
            <div className="absolute top-1/4 -right-8 w-2 h-2 bg-primary rounded-full animate-ping" style={{animationDelay: '2s', animationDuration: '4s'}}></div>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent hover:from-primary/20 transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
