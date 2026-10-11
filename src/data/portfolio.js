// 화면에 보이는 내용은 전부 이 파일에 있습니다.
// view: "dev" = 개발자, "sys" = 시스템 엔지니어

export const views = [
  {
    id: "dev",
    label: "개발자",
    title: "Backend Developer",
    tagline: "네트워크와 인프라까지 이해하는 백엔드 개발자입니다.",
  },
  {
    id: "sys",
    label: "시스템 엔지니어",
    title: "System Engineer",
    tagline: "직접 구축하고 운영하며 배우는 시스템 엔지니어입니다.",
  },
];

export const about = {
  dev: [
    {
      title: "네트워크를 좋아하는 개발자",
      lines: [
        "백엔드 개발에 있어서 네트워크는 핵심 요소 중 하나라고 생각합니다.",
        "서버에 대한 로망이 있어 NAS를 직접 구성해 사용해보며 서버에 대한 흥미를 키워왔습니다.",
        "지금은 Proxmox 가상화 환경으로 홈서버를 직접 운영하고 있으며 이를 통해 리눅스 환경과 네트워크, 데브옵스(DevOps)에 대한 이해를 넓혀 왔습니다.",
        "이러한 경험을 바탕으로 개발에 필요한 네트워크 환경에 익숙하고 시스템 전반에 대한 이해를 갖춘 개발자로 성장하고 있습니다.",
      ],
    },
    {
      title: "소통을 중요시하는 개발자",
      lines: [
        "효율적인 개발을 위해서는 모든 구성원이 요구사항을 명확히 이해하고 이를 기반으로 일관된 방향성을 유지하는 것이 중요하다고 생각합니다.",
        "여러 프로젝트에서 프론트엔드와 백엔드 역할을 모두 경험하면서 소통이 원활했던 경우와 그렇지 않았던 경우를 모두 겪어보았습니다.",
        "그 경험을 통해 역할 간 원활한 커뮤니케이션이 개발 효율에 직결된다는 점을 깨달았고 각 역할 간 어떤 방식으로 소통해야 협업이 원활한지도 자연스럽게 익히게 되었습니다.",
      ],
    },
    {
      title: "필요한 도구를 직접 만들어 쓰는 개발자",
      lines: [
        "불편한 점이 보이면 직접 프로그램으로 만들어 해결합니다.",
        "개인 프로젝트는 AI 코딩 도구를 적극적으로 활용해 기획부터 배포, 릴리스 관리까지 혼자 진행하고 있습니다.",
        "만든 프로그램은 홈서버에 올려 직접 사용하면서 계속 고쳐 나갑니다.",
      ],
    },
  ],
  sys: [
    {
      title: "직접 운영해 보며 배우는 엔지니어",
      lines: [
        "서버에 대한 로망으로 NAS를 구성해 본 것을 시작으로, 지금은 Proxmox 가상화 환경 위에 여러 VM과 컨테이너를 올려 홈서버를 직접 운영하고 있습니다.",
        "스토리지, 네트워크, 백업, 업그레이드, 장애 대응까지 운영에 필요한 일을 처음부터 끝까지 직접 겪어 보았습니다.",
        "매일 쓰는 서비스가 올라가 있는 환경이라 멈추지 않게, 데이터를 잃지 않게 운영하는 것을 가장 중요하게 생각합니다.",
      ],
    },
    {
      title: "원인을 끝까지 확인하는 엔지니어",
      lines: [
        "문제가 생기면 증상을 덮는 대신 원인을 좁혀 나갑니다.",
        "파일이 간헐적으로 손상되는 문제를 해시 비교로 추적해 메모리의 특정 영역 결함임을 확인하고 해당 영역을 사용하지 않도록 조치한 경험이 있습니다.",
        "커널 업그레이드 뒤 저장 장치 컨트롤러가 동작하지 않는 문제는 호환되는 커널 버전을 찾아 고정하는 방식으로 해결했습니다.",
      ],
    },
    {
      title: "반복 작업은 자동화하는 엔지니어",
      lines: [
        "한 번 손으로 한 작업은 스크립트와 예약 작업으로 옮겨 다시 손대지 않도록 만듭니다.",
        "팀 프로젝트에서는 배포와 인프라를 맡아 무중단 배포, HTTPS, VPN, 모니터링을 구성했고 개발자가 배포를 신경 쓰지 않아도 되는 환경을 만드는 데 집중했습니다.",
      ],
    },
  ],
};

// features: 개발 쪽 내용, infra: 인프라·운영 쪽 내용.
// 개발자 화면은 둘 다 보여 주고, 시스템 엔지니어 화면은 infra 가 있는 프로젝트만 infra 로 보여 줍니다.
export const projects = [
  {
    name: "홈서버 구축 · 운영",
    summary: "Proxmox 가상화 위에서 NAS, 미디어 서버, 개발 환경을 직접 운영하는 홈서버",
    team: "개인 프로젝트",
    period: "2025 - 현재 운영 중",
    role: "설계, 구축, 운영",
    only: "sys",
    infra: [
      "Proxmox VE(Ryzen 9 3950X, RAM 약 78GB)에 VM과 LXC 컨테이너를 나누어 NAS, 미디어 서버, Windows 작업용 VM, 원격 개발용 VM, 자체 제작 서비스를 운영",
      "HDD 8TB 6개를 HBA 패스스루로 NAS VM에 직접 연결하고, 다른 VM과 컨테이너에는 NFS와 SMB 멀티채널로 스토리지 제공",
      "커널 업그레이드 뒤 HBA가 동작하지 않는 문제를 확인하고 호환되는 커널 버전으로 고정, 업그레이드 때마다 다시 적용해야 하는 항목을 절차로 정리",
      "파일이 간헐적으로 손상되는 문제를 해시 비교로 추적해 메모리의 특정 물리 주소 영역 결함으로 확인하고 커널 옵션으로 해당 영역을 제외",
      "게스트를 정해진 순서로 종료한 뒤 호스트를 끄는 전체 종료 스크립트 작성 (PC에서 한 번에 실행)",
      "systemd 타이머로 PC와 원격 개발용 VM 사이 작업 폴더 동기화, 미디어 서버 정리 작업, 패키지 업그레이드 뒤 재적용 작업을 자동화",
      "파일 시스템 스냅샷을 이용해 실수로 지운 데이터를 복구하는 절차 마련",
      "화면이 필요 없는 Windows 빌드와 테스트를 SSH로 Windows VM에 맡기는 원격 빌드 환경 구성",
    ],
    skills: [
      "Proxmox VE",
      "KVM",
      "LXC",
      "Linux",
      "systemd",
      "NFS",
      "SMB",
      "Shell Script",
      "SSH",
    ],
  },
  {
    name: "TraceDownloader",
    summary: "받은 기록을 추적해 새로 올라온 것만 이어 받는 일괄 다운로더",
    team: "개인 프로젝트",
    note: "AI 코딩 도구 활용",
    period: "2026.07 - 현재 진행중",
    role: "기획, 개발, 배포",
    features: [
      "yt-dlp와 gallery-dl 위에 대기열 방식의 일괄 다운로드 구현, URL을 넣으면 어느 도구로 받을지 자동 판별",
      "채널, 재생목록 단위로 받은 기록을 DB에 남겨 이어받기, 중복 제외, 새로 올라온 항목만 다시 받기 지원",
      "같은 엔진을 Windows 데스크톱 앱(tkinter)과 웹 UI(FastAPI) 두 가지로 제공",
      "예약 재확인, 일시정지와 재개, 우선순위, 해상도와 파일 크기 기준 재다운로드 등 관리 기능",
      "한국어, 영어 UI 지원",
    ],
    infra: [
      "웹 서버 버전을 홈서버의 LXC 컨테이너에 systemd 서비스로 올려 상시 운영",
      "Linux용 설치 스크립트와 Windows 실행 파일(PyInstaller)을 GitHub Releases로 배포, 버전별 릴리스 노트 관리",
    ],
    skills: ["Python", "FastAPI", "tkinter", "SQLite", "PyInstaller", "systemd"],
    repositories: [
      {
        url: "https://github.com/gmlwls768/tracedownloader",
        name: "tracedownloader",
      },
    ],
  },
  {
    name: "MicBadge",
    summary: "헤드셋 물리 음소거 상태를 화면에 보여 주는 Windows 배지",
    team: "개인 프로젝트",
    note: "AI 코딩 도구 활용",
    period: "2026.10",
    role: "기획, 개발, 배포",
    only: "dev",
    features: [
      "헤드셋 본체에서 음소거하면 Windows가 알지 못하는 문제를 마이크 입력 신호로 판별해 해결",
      "WASAPI raw 모드로 음향 효과를 거치지 않은 입력을 읽어 완전한 무음이 이어지면 음소거로 판정",
      "항상 위에 표시, 포커스를 가져가지 않음, 끌어서 이동과 크기 조절, 투명 배경 모드",
      "외부 의존성 없는 단일 실행 파일(약 20KB)",
      "태그를 올리면 Github Actions가 빌드해 릴리스에 실행 파일을 첨부",
    ],
    skills: ["C#", "WinForms", "WASAPI", "Github Actions"],
    repositories: [
      { url: "https://github.com/gmlwls768/MicBadge", name: "MicBadge" },
    ],
  },
  {
    name: "mollo",
    summary: "태그, 친구, 그룹을 이용하여 일기를 분류, 검색, 저장할 수 있는 일기 서비스",
    team: "2명 (프론트엔드 1, 백엔드 1)",
    period: "2025.04 - 2025.08",
    role: "백엔드 개발",
    features: [
      "OAuth 2.0을 이용한 간편 회원가입 및 간편 로그인 기능",
      "Spring Security, JWT, Redis를 이용한 사용자 인증 시스템",
      "사용자 정보 조회 기능",
      "Restful한 API 구현",
    ],
    infra: [
      "Nginx, Docker, deploy script를 이용한 개발 서버 배포 구현",
      "Let's encrypt을 이용한 HTTPS 연결 설정",
    ],
    skills: [
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "Redis",
      "Docker",
      "OAuth 2.0",
      "JWT",
    ],
    repositories: [{ url: "https://github.com/Team-mollo", name: "mollo-team" }],
  },
  {
    name: "학점 가방",
    summary: "학교 재학생의 편의를 위한 시간표 서비스",
    team: "5명 (프론트엔드 3, 백엔드 2)",
    period: "2025.02 - 2025.04",
    role: "백엔드 개발",
    features: [
      "OAuth 2.0을 이용한 간편 회원가입 및 간편 로그인 기능",
      "Restful한 API 구현",
    ],
    infra: [
      "Github Actions, Nginx, Docker를 이용한 온프레미스에서의 blue-green 전략의 무중단 배포 구현",
      "Nginx, Let's encrypt(certbot)을 이용한 HTTPS 연결 설정",
      "VPN 환경 구축",
      "Prometheus, Grafana를 이용한 모니터링 구축",
    ],
    skills: [
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "Redis",
      "Docker",
      "Github Actions",
      "OAuth 2.0",
      "JWT",
    ],
    repositories: [
      { url: "https://github.com/Dongguk-unibag", name: "unibag-team" },
      {
        url: "https://github.com/Dongguk-unibag/uni-bag-spring-boot-app",
        name: "학점 가방 백엔드",
      },
    ],
  },
  {
    name: "만수무강",
    summary: "환자와 보호자를 위한 원격 헬스케어 서비스",
    team: "5명 (웹 2, 백엔드 2, 안드로이드 1)",
    period: "2024.07 - 2024.09",
    role: "프론트엔드(안드로이드) 담당",
    only: "dev",
    features: [
      "로그인, 회원 정보 관리 등의 회원 기능",
      "복약 일정 기록 및 알림 기능",
      "병원 내방 일정 기록 및 알림 기능",
      "앱 내 사진 촬영 및 전송 기능",
      "음성 메시지 녹음 및 전송 기능",
      "Firebase Cloud Messaging을 이용한 푸시 알림 기능",
      "Github Actions를 이용한 버전별 간소화 배포 구현",
    ],
    skills: ["JAVA", "JWT", "Github Actions"],
    repositories: [
      { url: "https://github.com/Team-MansuMugang", name: "만수무강" },
      {
        url: "https://github.com/Team-MansuMugang/mansumugang-android",
        name: "만수무강 안드로이드",
      },
    ],
  },
  {
    name: "health care service",
    summary: "다이어터, 운동인을 위한 식단, 헬스케어 서비스",
    team: "3명 (프론트엔드 1, 백엔드 2)",
    period: "2023.10 - 2023.12",
    role: "팀장, 백엔드 담당",
    only: "dev",
    features: [
      "회원가입, 로그인 등의 회원 기능",
      "운동 영상 추천 기능",
      "활동한 운동별 칼로리 계산 기능",
      "식사한 음식별 칼로리 계산 기능",
      "신체정보와 식사정보, 운동정보를 토대로 BMI기반 칼로리 계산 기능",
    ],
    skills: ["Node.js", "MSSQL", "Python"],
    repositories: [
      {
        url: "https://github.com/gmlwls768/health_care_service",
        name: "health_care_service",
      },
    ],
  },
];

export const skills = {
  dev: [
    { title: "Backend", skills: ["Java", "Spring Boot", "Spring Security", "Python", "Node.js"] },
    { title: "Database", skills: ["MySQL", "MSSQL", "Redis"] },
    {
      title: "DevOps",
      skills: ["Nginx", "Docker", "Prometheus", "Grafana", "Git", "Github", "GitHub Actions"],
    },
    { title: "Tools", skills: ["Figma", "Notion", "Swagger"] },
  ],
  sys: [
    {
      title: "Virtualization",
      skills: ["Proxmox VE", "KVM", "LXC", "PCI Passthrough", "Docker"],
    },
    {
      title: "OS",
      skills: ["Linux (Debian, Ubuntu)", "systemd", "Shell Script", "Windows"],
    },
    {
      title: "Storage / Network",
      skills: ["NFS", "SMB", "Snapshot", "Nginx", "HTTPS (Let's Encrypt)", "VPN", "SSH"],
    },
    {
      title: "Monitoring / Automation",
      skills: ["Prometheus", "Grafana", "GitHub Actions", "Git"],
    },
  ],
};

export const certificates = [
  { name: "SQL 개발자(SQLD)", date: "2025.04" },
  { name: "정보처리기사", date: "2025.06" },
];

export const awards = [
  { name: "교내 우수 논문상", detail: "출품작 : 만수무강", date: "2023.08" },
  { name: "최우등 졸업", detail: "동국대학교 WISE 캠퍼스" },
];

export const education = [
  {
    school: "동국대학교 WISE 캠퍼스",
    major: "컴퓨터공학전공",
    grade: "4.21",
    period: "2019.03 - 2025.02",
  },
];
