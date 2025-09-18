import { Github, Linkedin, Mail, Users, Dribbble } from "lucide-react";

export function ContactSection() {
  return (
    <footer id="contact" className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          <div className="space-y-6 text-center" data-testid="footer-social">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" >
            Let's Connect!
          </h2>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Bishikaa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-social-github"
              >
                <Github className="h-4 w-4" />
                <span>Github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/bishika-chhetri/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-social-linkedin"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:bishika.chhetri2077@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-social-email"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center" data-testid="footer-copyright">
          <p className="text-muted-foreground">
            © 2024 - Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
