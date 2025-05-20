// src/components/ProjectDetailModal.jsx

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const SECTIONS = [
  { id: "architecture", title: "시스템 설계" },
  { id: "database", title: "DB 설계" },
  { id: "design", title: "디자인" },
  { id: "backend", title: "백엔드 기능" },
];

const ProjectDetailModal = ({ project, onClose }) => {
  const [currentSection, setCurrentSection] = useState(0);

  const goToNext = () => {
    setCurrentSection((prev) => (prev + 1) % SECTIONS.length);
  };

  const goToPrev = () => {
    setCurrentSection((prev) => (prev - 1 + SECTIONS.length) % SECTIONS.length);
  };

  return (
    <>
      <div className="relative">
        {/* 최상위 오버레이 - 가장 높은 z-index 적용 */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          style={{
            zIndex: 9999,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          {/* 모달 컨테이너 */}
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white w-full max-w-4xl mx-4 rounded-lg shadow-lg overflow-hidden">
              {/* 모달 헤더 */}
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* 모달 컨텐츠 - 스크롤 가능한 영역 */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="relative">
                  {/* 네비게이션 버튼 */}
                  <button
                    onClick={goToPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg z-10 hover:bg-gray-100 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg z-10 hover:bg-gray-100 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* 섹션 내용 */}
                  <div className="px-16 min-h-[60vh]">
                    <h3 className="text-xl font-semibold mb-6">
                      {SECTIONS[currentSection].title}
                    </h3>
                    <div className="space-y-6">
                      {currentSection === 0 && (
                        <div className="space-y-4">
                          <div className="relative w-full aspect-[16/9] max-w-3xl mx-auto">
                            <Image
                              src={
                                project.architecture?.image ||
                                "/placeholder-architecture.png"
                              }
                              alt="Architecture Diagram"
                              fill
                              className="object-contain"
                              priority
                            />
                          </div>
                          <p className="text-gray-700">
                            {project.architecture?.description}
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            {project.architecture?.items.map((item, index) => (
                              <li key={index} className="text-gray-700">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {currentSection === 1 && (
                        <div className="space-y-4">
                          <div className="relative w-full aspect-[16/9] max-w-3xl mx-auto">
                            <Image
                              src={
                                project.database?.image ||
                                "/placeholder-database.png"
                              }
                              alt="Database Schema"
                              fill
                              className="object-contain"
                              priority
                            />
                          </div>
                          <p className="text-gray-700">
                            {project.database?.description}
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            {project.database?.items.map((item, index) => (
                              <li key={index} className="text-gray-700">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {currentSection === 2 && (
                        <div className="space-y-4">
                          <div className="relative w-full aspect-[16/9] max-w-3xl mx-auto">
                            <Image
                              src={
                                project.design?.image ||
                                "/placeholder-design.png"
                              }
                              alt="Design Preview"
                              fill
                              className="object-contain"
                              priority
                            />
                          </div>
                          <p className="text-gray-700">
                            {project.design?.description}
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            {project.design?.items.map((item, index) => (
                              <li key={index} className="text-gray-700">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {currentSection === 3 && (
                        <div className="space-y-4">
                          <p className="text-gray-700">
                            {project.backend?.description}
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            {project.backend?.items.map((item, index) => (
                              <li key={index} className="text-gray-700">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 페이지 인디케이터 */}
                  <div className="flex justify-center gap-2 mt-8">
                    {SECTIONS.map((section, index) => (
                      <button
                        key={section.id}
                        onClick={() => setCurrentSection(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          currentSection === index
                            ? "bg-blue-600"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* body 스크롤 방지를 위한 스타일 */}
        <style jsx global>{`
          body {
            overflow: hidden;
          }
        `}</style>
      </div>
    </>
  );
};

export default ProjectDetailModal;
