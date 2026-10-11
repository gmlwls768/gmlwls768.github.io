"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Image from "next/image";
import ViewToggle from "@/components/ViewToggle";
import {
  views,
  about,
  projects,
  skills,
  certificates,
  awards,
  education,
} from "@/data/portfolio";

const sections = [
  { id: "about", label: "소개" },
  { id: "projects", label: "프로젝트" },
  { id: "skills", label: "기술 스택" },
  { id: "records", label: "자격 · 수상 · 학력" },
];

const Section = ({ id, label, children }) => (
  <section id={id} className="scroll-mt-20">
    <h2 className="flex items-center gap-4 mb-8 text-sm font-bold tracking-widest text-slate-900">
      {label}
      <span className="flex-1 h-px bg-slate-200" />
    </h2>
    {children}
  </section>
);

const Bullets = ({ title, items }) => (
  <div>
    <h4 className="mb-2 text-xs font-semibold tracking-wider text-slate-400">
      {title}
    </h4>
    <ul className="space-y-1.5">
      {items.map((item, index) => (
        <li key={index} className="relative pl-4 leading-relaxed">
          <span className="absolute left-0 top-[0.7em] w-1.5 h-1.5 rounded-full bg-indigo-300" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Project = ({ project, view }) => (
  <article className="p-6 transition bg-white border shadow-sm border-slate-200 rounded-2xl md:p-8 hover:shadow-md hover:border-indigo-200">
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <h3 className="text-xl font-bold text-slate-900">{project.name}</h3>
      <span className="text-sm text-slate-400">{project.period}</span>
    </div>
    <p className="mt-1 text-slate-700">{project.summary}</p>

    <div className="flex flex-wrap gap-2 mt-4 text-xs">
      <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
        {project.role}
      </span>
      <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
        {project.team}
      </span>
      {project.note && (
        <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-700">
          {project.note}
        </span>
      )}
    </div>

    <div className="mt-6 space-y-5 text-[0.95rem]">
      {view === "dev" && project.features && (
        <Bullets title="구현 기능" items={project.features} />
      )}
      {project.infra && (
        <Bullets
          title={view === "sys" ? "인프라 · 운영" : "배포 · 인프라"}
          items={project.infra}
        />
      )}
    </div>

    <div className="flex flex-wrap gap-2 mt-6">
      {project.skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 text-xs font-medium text-indigo-700 rounded-full bg-indigo-50"
        >
          {skill}
        </span>
      ))}
    </div>

    {project.repositories && (
      <div className="flex flex-wrap pt-5 mt-6 text-sm border-t gap-x-5 gap-y-2 border-slate-100">
        {project.repositories.map((repository) => (
          <a
            key={repository.url}
            href={repository.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-slate-700 hover:text-indigo-600"
          >
            <Image
              src="assets/github-mark.svg"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4 mr-1"
            />
            {repository.name}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        ))}
      </div>
    )}
  </article>
);

// 날짜가 왼쪽, 내용이 오른쪽에 오는 한 줄
const Record = ({ date, name, detail }) => (
  <div className="grid gap-1 py-3 md:grid-cols-[9rem_1fr]">
    <span className="text-sm text-slate-400 md:pt-0.5">{date}</span>
    <div>
      <p className="font-semibold text-slate-900">{name}</p>
      {detail && <p className="text-sm">{detail}</p>}
    </div>
  </div>
);

const RecordGroup = ({ title, children }) => (
  <div>
    <h3 className="mb-1 text-xs font-semibold tracking-wider text-slate-400">
      {title}
    </h3>
    <div className="divide-y divide-slate-100">{children}</div>
  </div>
);

export default function Portfolio() {
  const [view, setView] = useState("dev");
  const [active, setActive] = useState("about");

  // ?view=sys 로 들어오면 시스템 엔지니어 화면부터 보여 준다
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("view");
    if (views.some((item) => item.id === param)) setView(param);
  }, []);

  // 지금 보고 있는 절을 왼쪽 목차에 표시
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach(({ id }) =>
      observer.observe(document.getElementById(id))
    );
    return () => observer.disconnect();
  }, []);

  const changeView = (next) => {
    setView(next);
    window.history.replaceState(
      null,
      "",
      next === "dev" ? "./" : `?view=${next}`
    );
  };

  const current = views.find((item) => item.id === view);
  const shownProjects = projects.filter((project) =>
    view === "sys" ? project.infra : project.only !== "sys"
  );

  return (
    <div className="max-w-6xl px-6 mx-auto lg:flex lg:gap-16 lg:px-10">
      {/* 왼쪽: 소개와 목차 (넓은 화면에서는 고정) */}
      <header className="py-12 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-80 lg:flex-shrink-0 lg:flex-col lg:justify-between lg:py-20">
        <div>
          <div className="relative w-24 h-24 overflow-hidden shadow-sm rounded-2xl ring-1 ring-slate-200">
            <Image
              src="assets/profileImage.png"
              alt="김희진"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
            김희진
          </h1>
          <p className="mt-2 text-lg font-semibold text-indigo-600">
            {current.title}
          </p>
          <p className="mt-3 leading-relaxed">{current.tagline}</p>

          <div className="mt-6">
            <ViewToggle view={view} onChange={changeView} />
          </div>

          <nav className="hidden mt-12 lg:block">
            <ul className="space-y-4">
              {sections.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`group flex items-center gap-4 text-sm font-semibold transition-colors ${
                      active === item.id
                        ? "text-slate-900"
                        : "text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    <span
                      className={`h-px transition-all ${
                        active === item.id
                          ? "w-14 bg-slate-900"
                          : "w-7 bg-slate-300 group-hover:w-14 group-hover:bg-slate-900"
                      }`}
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 space-y-2 text-sm">
          <a
            href="mailto:gmlwls768@naver.com"
            className="flex items-center gap-2 hover:text-indigo-600"
          >
            <Mail className="w-4 h-4" />
            gmlwls768@naver.com
          </a>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            010-3594-5875
          </div>
          <a
            href="https://github.com/gmlwls768"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-600"
          >
            <Image
              src="assets/github-mark.svg"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4"
            />
            github.com/gmlwls768
          </a>
        </div>
      </header>

      <main className="flex-1 min-w-0 pb-16 space-y-20 lg:py-20">
        <Section id="about" label="소개">
          <div className="space-y-4">
            {about[view].map((item, index) => (
              <div
                key={item.title}
                className="grid gap-2 p-6 bg-white border shadow-sm border-slate-200 rounded-2xl md:grid-cols-[3rem_1fr]"
              >
                <span className="text-2xl font-bold text-indigo-200">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed">
                    {item.lines.join(" ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" label="프로젝트">
          <div className="space-y-6">
            {shownProjects.map((project) => (
              <Project key={project.name} project={project} view={view} />
            ))}
          </div>
        </Section>

        <Section id="skills" label="기술 스택">
          <div className="grid gap-4 md:grid-cols-2">
            {skills[view].map((group) => (
              <div
                key={group.title}
                className="p-5 bg-white border shadow-sm border-slate-200 rounded-2xl"
              >
                <h3 className="mb-3 font-bold text-slate-900">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-slate-100 text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="records" label="자격 · 수상 · 학력">
          <div className="p-6 space-y-8 bg-white border shadow-sm border-slate-200 rounded-2xl md:p-8">
            <RecordGroup title="자격증">
              {certificates.map((item) => (
                <Record key={item.name} {...item} />
              ))}
            </RecordGroup>
            <RecordGroup title="수상">
              {awards.map((item) => (
                <Record key={item.name} {...item} />
              ))}
            </RecordGroup>
            <RecordGroup title="학력">
              {education.map((item) => (
                <Record
                  key={item.school}
                  date={item.period}
                  name={item.school}
                  detail={`${item.major} · 전체 평점 ${item.grade} / 4.5`}
                />
              ))}
            </RecordGroup>
          </div>
        </Section>

        <footer className="text-xs text-slate-400">
          © {new Date().getFullYear()} 김희진 · 본 포트폴리오는 개인 역량
          소개를 위해 제작되었습니다.
        </footer>
      </main>
    </div>
  );
}
