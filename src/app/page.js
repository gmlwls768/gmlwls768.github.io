"use client";

import { useState } from "react";
import React from "react";
import {
  Code2,
  Terminal,
  Database,
  Cloud,
  LinkIcon,
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

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-1">
        <Navigation />
        <main className="flex items-center justify-center flex-1 w-full p-4 md:p-8 md:ml-64">
          <div className="w-full max-w-4xl space-y-12">
            {/* Header Section */}
            <header className="space-y-8">
              <div className="flex flex-col gap-8 md:flex-row md:items-start">
                {/* Profile Image */}
                <div className="relative flex-shrink-0 w-40 mx-auto overflow-hidden rounded-lg h-52 md:mx-0">
                  <Image
                    src="assets/profileImage.jpg"
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
                    </div>

                    <div className="mt-16 space-y-2">
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
                <div>
                  <p className="text-lg text-black">
                    [네트워크를 좋아하는 개발자]
                  </p>
                  <p>
                    백엔드 개발에 있어서 네트워크는 핵심 요소 중 하나라고
                    생각합니다.
                    <br />
                    서버에 대한 로망이 있어 NAS를 직접 구성해 사용해보며 서버에
                    대한 흥미를 키워왔습니다.
                    <br />
                    최근에는 Proxmox 가상화 OS를 활용해 홈서버를 구축하고
                    있으며 이를 통해 자연스럽게 리눅스 환경과 네트워크,
                    데브옵스(DevOps)에 대한 관심도 깊어졌습니다.
                    <br />
                    이러한 경험을 바탕으로 개발에 필요한 네트워크 환경에
                    익숙하고 시스템 전반에 대한 이해를 갖춘 개발자로 성장하고
                    있습니다.
                    <br />
                  </p>
                </div>

                <div>
                  <p className="text-lg text-black">
                    [소통을 중요시하는 개발자]
                  </p>
                  <p>
                    효율적인 개발을 위해서는 모든 구성원이 요구사항을 명확히 이해하고 이를 기반으로 일관된 방향성을 유지하는 것이 중요하다고 생각합니다.
                    <br />
                    여러 프로젝트에서 프론트엔드와 백엔드 역할을 모두 경험하면서 소통이 원활했던 경우와 그렇지 않았던 경우를 모두 겪어보았습니다.
                    <br/>
                    그 경험을 통해 역할 간 원활한 커뮤니케이션이 개발 효율에 직결된다는 점을 깨달았고
                    각 역할 간 어떤 방식으로 소통해야 협업이 원활한지도 자연스럽게 익히게 되었습니다.
                  </p>
                </div>
              </div>
            </section>

            {/* Main Projects Section */}
            <section id="mainProjects" className="space-y-8">
              <h2 className="pb-2 text-2xl font-bold border-b">
                주요 프로젝트
              </h2>

              <div className="space-y-12">
                <ProjectCard
                  title="태그, 친구, 그룹을 이용하여 일기를 분류, 검색, 저장할 수 있는 일기 서비스 [mollo]"
                  headCount="2"
                  memberRole="프론트엔드 개발 1명, 백엔드 개발 1명"
                  period="2025.04 - 현재 진행중"
                  role="백엔드 개발"
                  features={[
                    "OAuth 2.0을 이용한 간편 회원가입 및 간편 로그인 기능",
                    "Spring Security, JWT, Redis를 이용한 사용자 인증 시스템",
                    "사용자 정보 조회 기능",
                    "메모 CRD API",
                    "태그 및 친구 CRUD API",
                    "친구 관계를 활용한 파티(그룹) CRUD API",
                    "태그·친구·파티 정보를 연동한 일기 CRUD API",
                    "Nginx, Docker, deploy script를 이용한 개발 서버 배포 구현",
                    "Let's encrypt을 이용한 HTTPS 연결 설정",
                  ]}
                  skills={[
                    "Spring Boot",
                    "Spring Security",
                    "MySQL",
                    "Redis",
                    "Docker",
                    "OAuth 2.0",
                    "JWT",
                  ]}
                  repositories={[
                    {
                      url: "https://github.com/Team-mollo",
                      name: "mollo-team",
                    },
                    // ,
                    // {
                    //   url: "https://github.com/Team-Turtle-Minecraft/Turtule-Playground-Backend",
                    //   name: "거북이 놀이터 백엔드",
                    // },
                  ]}
                />
              </div>

              <div className="space-y-12">
                <ProjectCard
                  title="학교 재학생의 편의를 위한 시간표 서비스 [학점 가방]"
                  headCount="5"
                  memberRole="프론트엔드 개발 3명, 백엔드 개발 2명"
                  period="2025.02 - 2025.04"
                  role="백엔드 개발"
                  features={[
                    "OAuth 2.0을 이용한 간편 회원가입 및 간편 로그인 기능",
                    "Github Actions, Nginx, Docker를 이용한 온프레미스에서의 blue-green 전략의 무중단 배포 구현",
                    "Nginx, Let's encrypt(certbot)을 이용한 HTTPS 연결 설정",
                    "VPN 환경 구축",
                    "prometheus, grafa 를 이용한 모니터링 구축",
                  ]}
                  skills={[
                    "Spring Boot",
                    "Spring Security",
                    "MySQL",
                    "Redis",
                    "Docker",
                    "Github Actions",
                    "OAuth 2.0",
                    "JWT",
                  ]}
                  repositories={[
                    {
                      url: "https://github.com/Dongguk-unibag",
                      name: "unibag-team",
                    },
                    // ,
                    // {
                    //   url: "https://github.com/Team-Turtle-Minecraft/Turtule-Playground-Backend",
                    //   name: "거북이 놀이터 백엔드",
                    // },
                  ]}
                />
              </div>

              <div className="space-y-12">
                <ProjectCard
                  title="환자와 보호자를 위한 원격 헬스케어 서비스 [만수무강]"
                  headCount="5"
                  memberRole="프론트엔드(웹) 개발 2명, 백엔드 개발 2명, 프론트엔드(안드로이드) 개발 1명"
                  period="2024.07 - 2024.09"
                  role="프론트엔드(안드로이드) 담당"
                  features={[
                    "로그인, 회원 정보 관리 등의 회원 기능",
                    "복약 일정 기록 및 알림 기능",
                    "병원 내방 일정 기록 및 알림 기능",
                    "앱 내 사진 촬영 및 전송 기능",
                    "음성 메시지 녹음 및 전송 기능",
                    "Firebase Cloud Messaging을 이용한 푸시 알림 기능",
                    "Github Actions를 이용한 버전별 간소화 배포 구현",
                  ]}
                  skills={["JAVA", "JWT", "Github Actions"]}
                  repositories={[
                    {
                      url: "https://github.com/Team-MansuMugang",
                      name: "만수무강",
                    },
                    {
                      url: "https://github.com/Team-MansuMugang/mansumugang-android",
                      name: "만수무강 안드로이드",
                    },
                  ]}
                />
              </div>

              <div className="space-y-12">
                <ProjectCard
                  title="다이어터, 운동인을 위한 식단, 헬스케어 서비스[health care service]"
                  headCount="3"
                  memberRole="프론트엔드 개발 1명, 백엔드 개발 2명"
                  period="2023.10 - 2023.12"
                  role="팀장, 백엔드 담당"
                  features={[
                    "회원가입, 로그인 등의 회원 기능",
                    "운동 영상 추천 기능",
                    "활동한 운동별 칼로리 계산 기능",
                    "식사한 음식별 칼로리 계산 기능",
                    "신체정보와 식사정보, 운동정보를 토대로 BMI기반 칼로리 계산 기능",
                  ]}
                  skills={["Node.js", "MSSQL", "Python"]}
                  repositories={[
                    {
                      url: "https://github.com/gmlwls768/health_care_service",
                      name: "health_care_service",
                    },
                  ]}
                />
              </div>
            </section>

            {/* Technical Skills Section */}
            <section id="skills" className="space-y-6">
              <h2 className="pb-2 text-2xl font-bold border-b">기술 스택</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <SkillCard
                  title="Backend"
                  icon={<Terminal className="w-5 h-5 text-blue-600" />}
                  skills={["Java", "Spring Boot"]}
                />
                <SkillCard
                  title="Database"
                  icon={<Database className="w-5 h-5 text-green-600" />}
                  skills={["MySQL", "MSSQL", "Redis"]}
                />
                <SkillCard
                  title="DevOps"
                  icon={<Cloud className="w-5 h-5 text-purple-600" />}
                  skills={[
                    "Nginx",
                    "Docker",
                    "Prometheus",
                    "Grafana",
                    "Git",
                    "Github",
                    "GitHub Actions",
                  ]}
                />
                <SkillCard
                  title="Tools"
                  icon={<Code2 className="w-5 h-5 text-orange-600" />}
                  skills={["Figma", "Notion", "Swagger"]}
                />
              </div>
            </section>

            {/* Certificates Section */}
            <section id="certificates" className="space-y-4">
              <h2 className="pb-2 text-2xl font-bold border-b">자격증</h2>
              <div className="space-y-2">
                <CertificateCard name="SQL 개발자(SQLD)" date="2025.04" />
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

            {/* Education Section */}
            <section id="education" className="space-y-4">
              <h2 className="pb-2 text-2xl font-bold border-b">학력 / 교육</h2>
              <div className="space-y-4">
                <EducationCard
                  school="동국대학교 WISE 캠퍼스"
                  major="컴퓨터공학전공"
                  grade="4.21"
                  period="2019.03 - 2025.02"
                />
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
