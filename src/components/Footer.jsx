// components/Footer.js
"use client";

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 mt-12 bg-gray-100 border-t">
      <div className="container max-w-4xl px-4 mx-auto text-center">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-sm text-gray-600">
            © {currentYear} 김희진 포트폴리오
          </p>
          <p className="text-xs text-gray-500">
            본 포트폴리오는 상업적 목적으로 사용되지 않으며, 개인 역량 소개를
            위해 제작되었습니다.
          </p>
          <p className="text-xs text-gray-500">
            모든 프로젝트 정보 및 콘텐츠는 교육 및 참고 목적으로만 제공됩니다.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
