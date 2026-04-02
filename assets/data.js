// 你主要只需要改这个文件：个人信息、论文、项目等
// 资源文件建议用相对路径（例如 ./assets/cv.pdf）

window.SITE_DATA = {
  i18n: {
    zh: {
      "nav.about": "关于",
      "nav.research": "研究",
      "nav.publications": "论文",
      "nav.teaching": "教学",
      "nav.honors": "荣誉",
      "nav.contact": "联系",
      "btn.lang": "语言",
      "btn.theme": "主题",
      "section.news": "最近动态",
      "section.quick": "快速访问",
      "section.about": "关于我",
      "card.bio": "简介",
      "card.interests": "研究兴趣",
      "section.research": "研究方向",
      "hint.research": "建议用 3–6 个方向块，每个块 2–3 行描述，突出“问题—方法—贡献”。",
      "section.publications": "论文发表",
      "ph.pubSearch": "搜索：标题 / 作者 / venue / 关键词",
      "section.projects": "项目与开源",
      "section.teaching": "教学与服务",
      "card.teaching": "教学",
      "card.service": "学术服务",
      "section.honors": "荣誉与项目",
      "card.awards": "荣誉与获奖",
      "card.grants": "主持项目",
      "section.contact": "联系方式",
      "card.contact": "联系",
      "card.downloads": "下载与引用",
    },
    en: {
      "nav.about": "About",
      "nav.research": "Research",
      "nav.publications": "Publications",
      "nav.teaching": "Teaching",
      "nav.honors": "Honors",
      "nav.contact": "Contact",
      "btn.lang": "Lang",
      "btn.theme": "Theme",
      "section.news": "News",
      "section.quick": "Quick links",
      "section.about": "About",
      "card.bio": "Bio",
      "card.interests": "Interests",
      "section.research": "Research",
      "hint.research": "Use 3–6 cards. Each card: problem → method → contribution.",
      "section.publications": "Publications",
      "ph.pubSearch": "Search: title / authors / venue / keywords",
      "section.projects": "Projects",
      "section.teaching": "Teaching & Service",
      "card.teaching": "Teaching",
      "card.service": "Service",
      "section.honors": "Honors & Grants",
      "card.awards": "Honors & Awards",
      "card.grants": "Grants",
      "section.contact": "Contact",
      "card.contact": "Contact",
      "card.downloads": "Downloads",
    },
  },
  meta: {
    name: { zh: "张静", en: "Jing Zhang" },
    affiliation: { zh: "安徽大学 大数据与统计学院（信息安全实验室）", en: "Anhui University (School of Big Data and Statistics)" },
    avatarUrl: "./assets/avatar.png",
    heroTitle: {
      zh: "车联网/物联网安全与隐私：认证、数据共享与边缘计算安全",
      en: "Security & Privacy for VANET/IoT: Authentication, Data Sharing, and Edge Security",
    },
    heroSubtitle: {
      zh: "主要从事大数据安全、网络安全、密码学及其应用研究，尤其关注车联网/物联网场景下的认证与数据共享、区块链应用、边缘计算安全与入侵检测。",
      en: "My research focuses on big data security, network security, and applied cryptography, with particular interests in authentication & data sharing for VANET/IoT, blockchain applications, edge security, and intrusion detection.",
    },
    keywords: {
      zh: ["车联网安全", "物联网安全", "隐私保护认证", "区块链应用", "边缘计算安全", "入侵检测"],
      en: ["VANET security", "IoT security", "privacy-preserving authentication", "blockchain", "edge security", "intrusion detection"],
    },
    aboutTagline: {
      zh: "教授 · 博导/硕导 · 车联网/物联网安全与隐私保护",
      en: "Professor · PhD/MSc Supervisor · Security & Privacy for VANET/IoT",
    },
    bioHtml: {
      zh: `
        <p><b>张静</b>，女，博士/教授，安徽大学大数据与统计学院副院长。2015 年加入安徽大学信息安全实验室，2017 年赴英国德比大学访学，2018 年赴澳大利亚伍伦贡大学访学；2021 年获得安徽大学博士学位；2022 年被聘为副教授；2024 年被聘为教授。</p>
        <p>主要从事<b>大数据安全、网络安全、密码学及其应用</b>等方面研究，尤其在<b>认证与数据共享</b>方面取得一系列成果：构建新型云边端协同驱动的安全通信架构，设计硬件解耦的高可用隐私保护认证机制，提出面向复杂环境的车路云高效传输协议。</p>
        <p>已在 TDSC、TIFS、TMC、TVT、TITS、TNSE、TNSM、DASFAA 等重要期刊和国际会议发表论文 40 余篇（含 CCF 推荐 A 类 10 余篇、ESI 高被引论文 3 篇），Google Scholar 引用 3500+。担任中国电子学会网络空间安全专家委员会通信委员，并为 TDSC、TIFS、TMC、TVT、TITS、TNSM、IoTJ、IEEE Communications Letters、Vehicular Communications、ACM Computing Surveys、Information Sciences 等期刊审稿。</p>
        <p>入选中国科协/安徽省科协青年人才托举工程，入选全球前 2% 顶尖科学家“年度影响力”榜单（2023、2024、2025）。</p>
      `,
      en: `
        <p><b>Jing Zhang</b> is a Professor (PhD) at Anhui University and serves as Deputy Dean of the School of Big Data and Statistics. She joined the Information Security Lab in 2015, visited the University of Derby (UK) in 2017 and the University of Wollongong (Australia) in 2018, received her PhD in 2021, became an Associate Professor in 2022, and was promoted to Professor in 2024.</p>
        <p>Her research interests include <b>big data security</b>, <b>network security</b>, and <b>applied cryptography</b>, with a focus on <b>authentication and data sharing</b> for VANET/IoT, blockchain applications, edge security, and intrusion detection.</p>
        <p>She has published 40+ papers in leading venues such as TDSC, TIFS, TMC, TVT, TITS, TNSE, TNSM, and DASFAA, including 10+ CCF-A papers and 3 ESI Highly Cited Papers, with 3500+ citations on Google Scholar. She has been listed in the annual-impact top 2% scientists ranking for 2023, 2024, and 2025.</p>
      `,
    },
    cvUrl: "./assets/cv.pdf",
    lastUpdated: "2026-04-02",
  },

  links: [
    { label: "Email", hint: "zjing@ahu.edu.cn", url: "mailto:zjing@ahu.edu.cn", icon: "@" },
    { label: "Google Scholar", hint: "", url: "https://scholar.google.com/citations?hl=en&user=CIxnobkAAAAJ", icon: "GS" },
    { label: "ORCID", hint: "0000-0001-7417-9689", url: "https://orcid.org/0000-0001-7417-9689", icon: "ID" },
    {
      label: { zh: "学院主页", en: "University Profile" },
      hint: "cs.ahu.edu.cn",
      url: "https://cs.ahu.edu.cn/2023/0222/c20806a301348/page.htm",
      icon: "AHU",
    },
  ],

  highlights: {
    zh: [
      { k: "职称", v: "教授", s: "博导/硕导" },
      { k: "研究", v: "车联网/物联网", s: "认证 · 数据共享" },
      { k: "方向", v: "密码学/区块链", s: "AI 安全 · 入侵检测" },
    ],
    en: [
      { k: "Title", v: "Professor", s: "PhD/MSc Supervisor" },
      { k: "Focus", v: "VANET/IoT", s: "auth · data sharing" },
      { k: "Topics", v: "crypto/blockchain", s: "AI security · IDS" },
    ],
  },

  news: {
    zh: [
      { date: "2024", contentHtml: "被聘为教授。" },
      { date: "2023–2025", contentHtml: "连续三年入选全球前 2% 顶尖科学家“年度影响力”榜单。" },
    ],
    en: [
      { date: "2024", contentHtml: "Promoted to Professor." },
      { date: "2023–2025", contentHtml: "Listed in the global top 2% scientists (annual impact) for three consecutive years." },
    ],
  },

  quickLinks: {
    zh: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=CIxnobkAAAAJ" },
      { label: "下载 CV", url: "./assets/cv.pdf" },
    ],
    en: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=CIxnobkAAAAJ" },
      { label: "Download CV", url: "./assets/cv.pdf" },
    ],
  },

  interests: {
    zh: ["车联网安全、物联网安全", "隐私保护认证与密钥协商", "密码学与区块链应用", "人工智能安全、边缘计算安全与入侵检测"],
    en: ["VANET & IoT security", "Privacy-preserving authentication & key agreement", "Cryptography and blockchain applications", "AI security, edge security, and intrusion detection"],
  },

  researchAreas: {
    zh: [
      {
        title: "隐私保护认证（VANET）",
        desc: "围绕车联网场景的匿名认证、可追踪与批量验证等机制设计，兼顾安全性与效率。",
        bullets: ["条件隐私保护", "批量认证与聚合", "可追踪与抗攻击"],
      },
      {
        title: "边缘计算辅助安全协议",
        desc: "利用边缘计算提升车联网协议的实时性与可扩展性，减少通信与计算开销。",
        bullets: ["协同下载", "消息认证", "5G/边缘融合"],
      },
      {
        title: "物联网/智能交通安全",
        desc: "面向 IoT 与智能交通系统的身份认证、内容共享与安全数据协作。",
        bullets: ["内容共享", "区块链辅助", "入侵检测与联邦学习"],
      },
    ],
    en: [
      {
        title: "Privacy-preserving authentication (VANET)",
        desc: "Anonymous authentication with traceability and batch verification for vehicular networks, balancing security and efficiency.",
        bullets: ["conditional privacy", "batch/aggregate", "attack resilience"],
      },
      {
        title: "Edge-assisted security protocols",
        desc: "Using edge computing to improve real-time performance and scalability while reducing communication/computation overhead.",
        bullets: ["cooperative downloading", "message authentication", "5G integration"],
      },
      {
        title: "IoT & intelligent transportation security",
        desc: "Authentication, secure sharing, and collaborative security analytics for IoT and ITS.",
        bullets: ["content sharing", "blockchain-assisted", "IDS & federated learning"],
      },
    ],
  },

  publications: [
    {
      year: 2024,
      title:
        "DBCPA: Dual Blockchain-Assisted Conditional Privacy-Preserving Authentication Framework and Protocol for Vehicular Ad Hoc Networks",
      authors: ["Jing Zhang", "Yue Jiang", "Jie Cui", "Debiao He", "Irina Bolodurina", "Hong Zhong"],
      venue: "IEEE Transactions on Mobile Computing 23(2):1127-1141",
      type: "journal",
      tags: ["CCF-A", "ESI Highly Cited"],
      note: "计算机网络领域顶级期刊，中科院一区；ESI 高被引论文。",
    },
    {
      year: 2024,
      title: "Secure and Efficient User-Centric V2C Communication for Intelligent Cyber-Physical Transportation System",
      authors: ["Jing Zhang", "Ruonan Ying", "Jie Cui", "Hong Zhong", "Irina Bolodurina", "Debiao He"],
      venue: "IEEE Transactions on Information Forensics and Security 19:7674-7689",
      type: "journal",
      tags: ["CCF-A"],
      note: "信息安全领域顶级期刊，中科院一区。",
    },
    {
      year: 2023,
      title: "CBDDS: Secure and Revocable Cache-Based Distributed Data Sharing for Vehicular Networks",
      authors: ["Jing Zhang", "Xinzhong Liu", "Jie Cui", "Hong Zhong", "Lu Wei", "Irina Bolodurina", "Debiao He"],
      venue: "IEEE Transactions on Mobile Computing",
      type: "journal",
      tags: ["CCF-A"],
      note: "计算机网络领域顶级期刊，中科院一区。",
    },
    {
      year: 2023,
      title: "Identity-based Broadcast Proxy Re-encryption for Flexible Data Sharing in VANETs",
      authors: ["Jing Zhang", "Shuangshuang Su", "Hong Zhong", "Jie Cui", "Debiao He"],
      venue: "IEEE Transactions on Information Forensics and Security 18:4830-4842",
      type: "journal",
      tags: ["CCF-A"],
      note: "信息安全领域顶级期刊，中科院一区。",
    },
    {
      year: 2021,
      title:
        "PA-CRT: Chinese remainder theorem based conditional privacy-preserving authentication scheme in vehicular ad-hoc networks",
      authors: ["Jing Zhang", "Jie Cui", "Hong Zhong", "Zhili Chen", "Lu Liu"],
      venue: "IEEE Transactions on Dependable and Secure Computing 18(2):722-735",
      type: "journal",
      tags: ["CCF-A", "ESI Highly Cited"],
      note: "信息安全领域顶级期刊，中科院一区；ESI 高被引论文。",
    },
    {
      year: 2021,
      title: "SMAKA: Secure many-to-many authentication and key agreement scheme for vehicular networks",
      authors: ["Jing Zhang", "Hong Zhong", "Jie Cui", "Yan Xu", "Lu Liu"],
      venue: "IEEE Transactions on Information Forensics and Security 16(7):1810-1824",
      type: "journal",
      tags: ["CCF-A"],
      note: "信息安全领域顶级期刊，中科院一区。",
    },
    {
      year: 2024,
      title: "CVAR: Distributed and Extensible Cross-Region Vehicle Authentication With Reputation for VANETs",
      authors: ["Jing Zhang", "Hong Zhong", "Jie Cui", "Lu Wei", "Lu Liu"],
      venue: "IEEE Transactions on Intelligent Transportation Systems",
      type: "journal",
      tags: ["CCF-B"],
      note: "智能交通领域顶级期刊，中科院一区。",
    },
    {
      year: 2023,
      title: "Blockchain-Assisted Privacy-Preserving Traffic Route Management Scheme for Fog-Based Vehicular Ad-Hoc Networks",
      authors: ["Jing Zhang", "Huixia Fang", "Hong Zhong", "Jie Cui", "Debiao He"],
      venue: "IEEE Transactions on Network and Service Management 20(3):2854-2868",
      type: "journal",
      tags: ["CCF-B"],
      note: "中科院二区。",
    },
    {
      year: 2021,
      title: "Intelligent drone-assisted anonymous authentication and key agreement for 5G/B5G vehicular ad-hoc networks",
      authors: ["Jing Zhang", "Jie Cui", "Hong Zhong", "Irina Bolodurina", "Lu Liu"],
      venue: "IEEE Transactions on Network Science and Engineering 8(4):2982-2994",
      type: "journal",
      note: "中科院一区。",
    },
    {
      year: 2021,
      title: "Secure and efficient certificateless provable data possession for cloud-based data management systems",
      authors: ["Jing Zhang", "Jie Cui", "Hong Zhong", "Chengjie Gu", "Lu Liu"],
      venue: "DASFAA 2021",
      type: "conference",
      tags: ["CCF-B"],
      note: "CCF-B 类会议。",
    },
    {
      year: 2020,
      title: "Edge computing-based privacy preserving authentication framework and protocol for 5G-enabled vehicular networks",
      authors: ["Jing Zhang", "Hong Zhong", "Jie Cui", "Miaomiao Tian", "Yan Xu", "Lu Liu"],
      venue: "IEEE Transactions on Vehicular Technology 69(7):7940-7954",
      type: "journal",
      note: "中科院二区。",
    },
    {
      year: 2020,
      title: "An extensible and effective anonymous batch authentication scheme for smart vehicular networks",
      authors: ["Jing Zhang", "Hong Zhong", "Jie Cui", "Yan Xu", "Lu Liu"],
      venue: "IEEE Internet of Things Journal 7(4):3462-3473",
      type: "journal",
      tags: ["CCF-C"],
      note: "中科院一区。",
    },
    {
      year: 2024,
      title: "Cross-Domain Authentication Scheme for Vehicles Based On Given Virtual Identities",
      authors: ["Yuxuan Chen", "Jing Zhang*", "Xiyang Wei", "Yibo Wang", "Jie Cui"],
      venue: "IEEE Internet of Things Journal",
      type: "journal",
      tags: ["CCF-C"],
      note: "中科院一区。",
    },
    {
      year: 2020,
      title: "DDoS detection and defense mechanism for SDN controllers with K-Means",
      authors: ["Jie Cui", "Jing Zhang", "Jiantao He", "Hong Zhong", "Yao Lu"],
      venue: "RTDPCC 2020",
      type: "conference",
      awards: ["Best Paper Award"],
      note: "国际会议最佳论文奖。",
    },
    {
      year: 2018,
      title: "An efficient certificateless aggregate signature without pairings for vehicular ad hoc networks",
      authors: ["Jie Cui", "Jing Zhang", "Hong Zhong", "Runhua Shi", "Yan Xu"],
      venue: "Information Sciences 451:1-15",
      type: "journal",
      tags: ["CCF-B"],
      note: "中科院一区。",
    },
    {
      year: 2017,
      title: "SPACF: A secure privacy-preserving authentication scheme for VANET with cuckoo filter",
      authors: ["Jie Cui", "Jing Zhang", "Hong Zhong", "Yan Xu"],
      venue: "IEEE Transactions on Vehicular Technology 66(11):10283-10295",
      type: "journal",
      note: "中科院二区；ESI 高被引论文。",
    },
  ],

  projects: {
    zh: [
      {
        title: "Google Scholar 论文主页",
        desc: "完整论文列表与引用信息请见 Google Scholar。",
        tags: ["publications"],
        links: [{ label: "Profile", url: "https://scholar.google.com/citations?user=CIxnobkAAAAJ&hl=zh-CN&oi=ao" }],
      },
    ],
    en: [
      {
        title: "Google Scholar Profile",
        desc: "For a complete list of publications and citations, please refer to Google Scholar.",
        tags: ["publications"],
        links: [{ label: "Profile", url: "https://scholar.google.com/citations?user=CIxnobkAAAAJ&hl=zh-CN&oi=ao" }],
      },
    ],
  },

  teaching: {
    zh: ["（可补充）本科/研究生课程授课或指导信息。"],
    en: ["(Optional) Teaching and supervision information."],
  },

  service: {
    zh: [
      "中国电子学会网络空间安全专家委员会通信委员",
      "期刊审稿：IEEE TDSC、TIFS、TMC、TVT、TITS、TNSM、IoTJ、IEEE Communications Letters、Vehicular Communications、ACM Computing Surveys、Information Sciences 等",
    ],
    en: [
      "Committee member, Chinese Institute of Electronics (Cybersecurity Expert Committee)",
      "Reviewer for journals including IEEE TDSC, TIFS, TMC, TVT, TITS, TNSM, IoTJ, IEEE Communications Letters, Vehicular Communications, ACM Computing Surveys, Information Sciences, etc.",
    ],
  },

  awards: {
    zh: [
      "2023、2024、2025 连续三年入选全球前 2% 顶尖科学家“年度影响力”榜单",
      "2024 安徽省计算机学会优秀青年科学家",
      "2024 ACM 合肥分会新星奖",
      "安徽省自然科学奖三等奖（2023年度）",
      "2023 安徽省大学生网络与分布式系统创新设计大赛优秀指导老师",
      "2022 安徽省优秀博士学位论文奖",
      "2021 ACM 合肥分会优博奖",
      "2020 博士研究生国家奖学金（安徽大学计算机学院仅 1 名）",
      "国际会议最佳论文奖 2 项（IEEE/ACM RTDPCC 2020，IEEE TrustCom 2024）",
      "指导学生获省级以上竞赛奖励 6 项",
    ],
    en: [
      "Global top 2% scientists (annual impact), 2023-2025 (three consecutive years)",
      "Outstanding Young Scientist Award (Anhui Computer Federation), 2024",
      "ACM Hefei Rising Star Award, 2024",
      "Anhui Natural Science Award (Third Prize), 2023",
      "Excellent Advisor Award, 2023 (Provincial competition)",
      "Outstanding PhD Dissertation Award (Anhui Province), 2022",
      "ACM Hefei Best PhD Thesis Award, 2021",
      "National Scholarship for PhD Students, 2020",
      "Best Paper Awards (RTDPCC 2020; IEEE TrustCom 2024)",
    ],
  },

  grants: {
    zh: [
      "国家自然科学基金面上：云边端协同的车联网内容分发安全体系研究（62472003），2025.01–2028.12，50万",
      "国家自然科学基金青年：基于区块链的车联网数据安全共享方法研究（62202008），2023.01–2025.12，30万",
      "中国科协青年人才托举工程：云边端协同的车联网内容分发关键安全机制研究，2025.01–2027.12，30万",
      "安徽省科协青年人才托举计划：面向车联网的数据安全存储与分享机制研究，2024.11–2027.11，15万",
      "安徽省自然科学基金青年：基于区块链的车联网数据安全共享机制（2208085QF196），2022.01–2023.12，10万",
      "同济大学嵌入式系统与服务计算教育部重点实验室开放课题：面向车联网的数据安全存储与分享机制（ESSCKF 2022-04），2022.10–2024.09，6万",
    ],
    en: [
      "NSFC General Program: Secure content distribution system for cloud-edge-end collaborative VANETs (62472003), 2025.01–2028.12",
      "NSFC Young Scientists Fund: Blockchain-based secure data sharing for VANETs (62202008), 2023.01–2025.12",
      "CAST Youth Talent Support Program: Key security mechanisms for cloud-edge-end collaborative VANET content distribution, 2025.01–2027.12",
      "Anhui Association for Science and Technology Youth Talent Program: Secure storage and sharing mechanisms for VANETs, 2024.11–2027.11",
      "Anhui Natural Science Foundation (Youth): Blockchain-based secure data sharing for VANETs (2208085QF196), 2022.01–2023.12",
      "Tongji Univ. Key Lab Open Fund: Secure storage and sharing mechanisms for VANETs (ESSCKF 2022-04), 2022.10–2024.09",
    ],
  },

  contact: {
    zh: {
      email: "zjing@ahu.edu.cn",
      location: "合肥，中国",
    },
    en: {
      email: "zjing@ahu.edu.cn",
      location: "Hefei, China",
    },
  },

  downloads: {
    zh: [
      { label: "CV / 简历 (PDF)", url: "./assets/cv.pdf", right: "PDF" },
      { label: "BibTeX（整站）", url: "#bibtex-all", right: "Copy" },
    ],
    en: [
      { label: "CV (PDF)", url: "./assets/cv.pdf", right: "PDF" },
      { label: "BibTeX (all)", url: "#bibtex-all", right: "Copy" },
    ],
  },
};

