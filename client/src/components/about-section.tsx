import { Zap } from "lucide-react";

export function AboutSection() {
  const features = [
    "Building responsive website front end using React.JS and Angular",
    "Developing mobile applications using Flutter and native Android",
    "Backend development using Node.JS, Express.JS and Flask",
  ];

  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="about-title">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          {/* Left side - About image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/about.png" 
                alt="About Bishika" 
                className="w-96 h-96 object-cover rounded-lg border-2 border-primary/30 dark:border-primary/50 light:border-primary/20 transition-all duration-300 hover:scale-105 shadow-xl"
              />
              {/* Theme-responsive overlay */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/10 light:from-primary/5 transition-all duration-300"></div>
            </div>
          </div>

          {/* Right side - About Me box */}
          <div className="space-y-8">
            <div className="relative w-[650px] h-[350px] -ml-4">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-12 rounded-2xl border border-primary/20 shadow-xl backdrop-blur-sm w-full h-full flex flex-col justify-center">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary rounded-full opacity-60"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                    <Zap className="mr-3 text-primary" />
                    This is about me
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Hi, I'm Bishika Chhetri a 2nd-year student passionate about AI, innovation, and building smart solutions that make a difference. I enjoy exploring AI and software development, and I've worked on projects like smart home simulations, responsive websites, and Python applications. Currently, I'm diving deep into AI applications using LangChain and CV to create intelligent systems. I love turning ideas into reality and solving problems creatively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
