"use client";

import { useState, useEffect } from "react";
import React from "react";
import {
  Code2,
  Terminal,
  Database,
  Cloud,
  Server,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import EducationCard from "@/components/EducationCard";
import CertificateCard from "@/components/CertificateCard";
import AwardCard from "@/components/AwardCard";
import ProjectDetailModal from "@/components/ProjectDetailModal";
import Footer from "@/components/Footer";
import ViewToggle from "@/components/ViewToggle";
import {
  views,
  about,
  projects,
  skills,
  certificates,
  activities,
  education,
} from "@/data/portfolio";

const skillIcons = {
  terminal: <Terminal className="w-5 h-5 text-blue-600" />,
  database: <Database className="w-5 h-5 text-green-600" />,
  cloud: <Cloud className="w-5 h-5 text-purple-600" />,
  code: <Code2 className="w-5 h-5 text-orange-600" />,
  server: <Server className="w-5 h-5 text-orange-600" />,
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [view, setView] = useState("dev");

  // ?view=sys 로 들어오면 시스템 엔지니어 화면부터 보여 준다
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("view");
    if (views.some((item) => item.id === param)) setView(param);
  }, []);

  const changeView = (next) => {
    setView(next);
    window.history.replaceState(null, "", next === "dev" ? "./" : `?view=${next}`);
  };

  const shownProjects = projects.filter((project) =>
    view === "sys" ? project.infra : project.only !== "sys"
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-1">
        <Navigation view={view} onChangeView={changeView} />
        <main className="flex items-center justify-center flex-1 w-full p-4 md:p-8 md:ml-64">
          <div className="w-full max-w-4xl space-y-12">
            {/* Header Section */}
            <header className="space-y-8">
              <div className="flex flex-col gap-8 md:flex-row md:items-start">
                {/* Profile Image */}
                <div className="relative flex-shrink-0 w-40 mx-auto overflow-hidden rounded-lg h-52 md:mx-0">
                  <Image
                    src="assets/profileImage.png"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="flex-grow mt-4 space-y-4 md:mt-0">
                  <div className="flex-col justify-between">
                    <div>
                      <h1 className="text-4xl font-bold text-center md:text-left">
                        김희진
                      </h1>
                      <p className="mt-2 text-lg text-center text-gray-600 md:text-left">
                        {views.find((item) => item.id === view).title}
                      </p>
                      <div className="flex justify-center mt-4 md:justify-start">
                        <ViewToggle view={view} onChange={changeView} />
                      </div>
                    </div>

                    <div className="mt-8 space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span>gmlwls768@naver.com</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>010-3594-5875</span>
                      </div>
                      <Link
                        href="https://github.com/gmlwls768"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                      >
                        <Image
                          src="assets/github-mark.svg"
                          alt="GitHub"
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                        <span>GitHub</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* About Me Section */}
            <section id="about" className="space-y-4">
              <h2 className="pb-2 text-2xl font-bold border-b">
                저는 이런 사람입니다!
              </h2>
              <div className="space-y-6 prose text-gray-600 max-w-none">
                {about[view].map((item) => (
                  <div key={item.title}>
                    <p className="text-lg text-black">{item.title}</p>
                    <p>
                      {item.lines.map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Main Projects Section */}
            <section id="mainProjects" className="space-y-8">
              <h2 className="pb-2 text-2xl font-bold border-b">
                주요 프로젝트
              </h2>

              {shownProjects.map((project) => (
                <div key={project.title} className="space-y-12">
                  <ProjectCard
                    {...project}
                    featureTitle={
                      view === "sys" ? "🛠️ 인프라 · 운영" : "🔍 구현 기능"
                    }
                    features={
                      view === "sys"
                        ? project.infra
                        : [...(project.features || []), ...(project.infra || [])]
                    }
                  />
                </div>
              ))}
            </section>

            {/* Technical Skills Section */}
            <section id="skills" className="space-y-6">
              <h2 className="pb-2 text-2xl font-bold border-b">기술 스택</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {skills[view].map((skill) => (
                  <SkillCard
                    key={skill.title}
                    title={skill.title}
                    icon={skillIcons[skill.icon]}
                    skills={skill.skills}
                  />
                ))}
              </div>
            </section>

            {/* Certificates Section */}
            <section id="certificates" className="space-y-4">
              <h2 className="pb-2 text-2xl font-bold border-b">자격증</h2>
              <div className="space-y-2">
                {certificates.map((certificate) => (
                  <CertificateCard key={certificate.name} {...certificate} />
                ))}
              </div>
            </section>

            {/* Awards Section */}
            <section id="awards" className="space-y-4">
              <h2 className="pb-2 text-2xl font-bold border-b">수상 경력</h2>
              <div className="space-y-4">
                <AwardCard
                  title="교내 우수 논문상"
                  date="2023.08"
                  description="만수무강"
                />

                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-blue-800">
                        최우등 졸업
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Activities Section */}
            <section id="activities" className="space-y-4">
              <h2 className="pb-2 text-2xl font-bold border-b">활동 / 학습</h2>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.name} className="flex justify-between">
                    <div>
                      <h3 className="font-semibold">{activity.name}</h3>
                      <p className="text-gray-600">{activity.detail}</p>
                    </div>
                    <span className="text-gray-500">{activity.date}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section id="education" className="space-y-4">
              <h2 className="pb-2 text-2xl font-bold border-b">학력 / 교육</h2>
              <div className="space-y-4">
                {education.map((item) => (
                  <EducationCard key={item.school} {...item} />
                ))}
              </div>
            </section>

            {/* Language Skills Section */}
            {/* <section id="language" className="space-y-4">
              <h2 className="pb-2 text-2xl font-bold border-b">어학</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">TOEIC</span>
                  <span className="text-gray-500">760</span>
                </div>
              </div>
            </section> */}
            {selectedProject && (
              <ProjectDetailModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            )}
          </div>
        </main>
      </div>
      <div className="left-0 right-0 z-50 w-full">
        <Footer />
      </div>
    </div>
  );
}
