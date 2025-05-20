// src/components/Navigation.js
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  { id: "about", label: "자기소개" },
  { id: "mainProjects", label: "주요 프로젝트" },
  { id: "skills", label: "기술 스택" },
  { id: "certificates", label: "자격증" },
  { id: "awards", label: "수상 경력" },
  { id: "education", label: "학력 / 교육" },
  
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 초기 체크
    checkIsMobile();

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener("resize", checkIsMobile);

    // 클린업 함수
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* 모바일 메뉴 토글 버튼 */}
      {isMobile && (
        <button
          onClick={toggleMenu}
          className="fixed z-50 p-2 bg-white rounded-md shadow-md top-4 left-4"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* 네비게이션 메뉴 */}
      <nav
        className={`${
          isMobile ? (isOpen ? "fixed" : "hidden") : "fixed"
        } w-64 h-screen p-6 border-r bg-white z-40`}
      >
        <div className="sticky space-y-4 top-6">
          <h3 className="mb-6 text-lg font-semibold">목차</h3>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block p-2 text-gray-600 transition-colors rounded hover:text-blue-600 hover:bg-gray-50"
                  onClick={isMobile ? closeMenu : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
