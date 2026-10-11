import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
  title,
  team,
  period,
  role,
  featureTitle,
  features,
  achievements,
  skills,
  repositories,
  onShowDetail,
}) => {
  return (
    <div className="p-6 space-y-4 rounded-lg shadow-sm bg-gray-50">
      <div className="flex items-start justify-between">
        <div className="flex-col items-center space-y-1">
          <h3 className="text-xl font-bold text-blue-800">{title}</h3>
          <p className="text-sm text-gray-600">{team}</p>
        </div>
        <span className="flex-shrink-0 pl-4 text-sm text-gray-500">{period}</span>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-700">🧑🏻‍💻 담당 역할 : {role}</h4>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700">{featureTitle}</h4>
          <ul className="pl-5 space-y-2 text-gray-600 list-disc">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {achievements && (
          <div>
            <h4 className="font-semibold text-gray-700">📈 성과</h4>
            <ul className="pl-5 space-y-2 text-gray-600 list-disc">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 레포지토리 링크를 위로 이동하고 간격 늘림 (mt-6 추가) */}
        {repositories && (
        <div className="flex flex-wrap items-center gap-4 pt-8">
          <div className="pl-2">
            <p>[README 및 소스코드]</p>
          </div>

          {(repositories || []).map((repository, index) => (
            <Link
              key={index}
              href={repository.url}
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
              />{" "}
              {repository.name}
            </Link>
          ))}
        </div>
        )}

        {/* 스킬 목록을 아래로 이동하고 자연스럽게 줄바꿈되도록 수정 */}
        <div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
