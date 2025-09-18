import { Star } from "lucide-react";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiSass,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiGit,
  SiFirebase,
  SiFigma,
  SiMysql,
  SiWordpress,
  SiGraphql,
  SiAndroid,
  SiLangchain,
  SiFastapi,
  SiCanva,
  SiSqlite,
  SiStreamlit
} from "react-icons/si";

export function SkillsSection() {
  const frontendSkills = [
    { icon: SiHtml5, name: "HTML", color: "text-orange-500" },
    { icon: SiCss3, name: "CSS", color: "text-blue-500" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-500" },
    { icon: SiReact, name: "React", color: "text-cyan-500" },
  ];

  const backendSkills = [
    { icon: SiFastapi, name: "Fastapi", color: "text-white dark:text-black" },
    { icon: SiStreamlit, name: "Streamlit", color: "text-blue-400" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    
  ];

  const toolsSkills = [
    { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
    { icon: SiLangchain, name: "Langchain", color: "text-blue-700" },
    { icon: SiCanva, name: "Canva", color: "text-orange-600" },
    { icon: SiFigma, name: "Figma", color: "text-purple-500" },
    { icon: Star, name: "AI/ML", color: "text-gray-400" },
  ];

  return (
    <section id="skills" className="section-padding bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3" data-testid="skills-stars">
                <Star className="text-2xl text-primary fill-current" />
                <Star className="text-2xl text-primary fill-current" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground" data-testid="skills-title">
                I got the experience.<br />
                Here is my toolbelt for success.
              </h2>
            </div>

            {/* Development tools illustration */}
            <div className="flex justify-center lg:justify-start">
              <div className="bg-card border border-border rounded-xl p-6 shadow-lg max-w-sm w-full" data-testid="tools-illustration">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground text-sm font-bold">&lt;/&gt;</span>
                    </div>
                    <span className="text-foreground font-semibold">Code Editor</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-chart-2 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">⚡</span>
                    </div>
                    <span className="text-foreground font-semibold">Build Tools</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-chart-3 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">🚀</span>
                    </div>
                    <span className="text-foreground font-semibold">Deployment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Frontend Row */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground" data-testid="frontend-title">Frontend</h3>
              <div className="grid grid-cols-6 gap-6" data-testid="frontend-skills">
                {frontendSkills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="tech-icon flex flex-col items-center space-y-2"
                      data-testid={`skill-${skill.name.toLowerCase().replace('.', '')}`}
                    >
                      <Icon className={`text-4xl ${skill.color}`} />
                      <span className="text-xs text-muted-foreground">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Backend Row */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground" data-testid="backend-title">Backend & Tools</h3>
              <div className="grid grid-cols-6 gap-6" data-testid="backend-skills">
                {backendSkills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="tech-icon flex flex-col items-center space-y-2"
                      data-testid={`skill-${skill.name.toLowerCase().replace('.', '')}`}
                    >
                      <Icon className={`text-4xl ${skill.color}`} />
                      <span className="text-xs text-muted-foreground">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tools Row */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground" data-testid="tools-title">Additional Skills</h3>
              <div className="grid grid-cols-6 gap-6" data-testid="tools-skills">
                {toolsSkills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="tech-icon flex flex-col items-center space-y-2"
                      data-testid={`skill-${skill.name.toLowerCase().replace('.', '').replace('/', '')}`}
                    >
                      <Icon className={`text-4xl ${skill.color}`} />
                      <span className="text-xs text-muted-foreground">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
