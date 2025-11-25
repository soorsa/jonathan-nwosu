import AnimatedHero from "@/components/HeroSection";
import Projects from "@/components/Projects";
import ProjectStats from "@/components/ProjectStats";
import ServiceSection from "@/components/ServiceSection";
import SkillsChart from "@/components/SkillChart";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <AnimatedHero />
        <ServiceSection />
        <Skills />
        <SkillsChart />
        <Projects />
        <ProjectStats />
      </main>
    </div>
  );
}
