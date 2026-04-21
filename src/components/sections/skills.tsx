import { Badge } from "../ui/badge";
import { SKILLS } from "@/data/constants";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" className="w-full flex flex-col items-center justify-center min-h-screen py-20 z-10 relative">
      <SectionHeader id="skills" title="Tech Stack" desc="Technologies I've worked with" className="mb-12 mt-0" />
      
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-4">
        {Object.values(SKILLS).map((skill) => (
          <Badge key={skill.id} variant="outline" className="gap-2 px-4 py-2 text-sm font-normal bg-secondary/30 hover:bg-secondary/50 transition-colors border-transparent cursor-default">
            <img src={skill.icon} alt={skill.label} className="w-5 h-5 object-contain" />
            {skill.label}
          </Badge>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
