const PORTAL_MENU = {
  hot: ["企业出海数字化方案", "央国企数字化方案", "新质生产力解决方案"],
  industry: ["装备制造", "建筑行业", "医药流通", "汽车及零部件", "钢铁冶金", "电子半导体"],
};

const PORTAL_NAV_ITEMS = ["产品", "解决方案", "标杆案例", "资源中心", "服务支持", "生态伙伴与开发者", "关于金蝶"];
const BASE_URL = import.meta.env.BASE_URL || "/";
const KINGDEE_LOGO_SRC = `${BASE_URL}kingdee-logo.png`;
const PORTAL_HERO_ART_SRC = `${BASE_URL}portal-hero-art.png`;

const DEFAULT_CARDS = [
  {
    id: "finance-analysis",
    name: "智能财务分析",
    category: "财务管理",
    desc: "基于AI算法自动分析财务数据，识别异常交易，预测现金流趋势，提供智能财务决策建议。",
    tags: ["异常检测", "趋势预测", "决策建议"],
    status: "已启用",
    statusType: "on",
  },
  {
    id: "contract-analysis",
    name: "智能合同分析",
    category: "财务管理",
    desc: "自动识别合同关键条款，提取重要信息，检测风险点，提供标准化合同模板和智能审查建议。",
    tags: ["条款提取", "风险检测", "模板生成"],
    status: "已启用",
    statusType: "on",
  },
  {
    id: "recruiting-assistant",
    name: "智能招聘助手",
    category: "人力资源管理",
    desc: "自动筛选简历，匹配岗位需求，生成面试问题，分析候选人优势，辅助招聘决策。",
    tags: ["简历筛选", "岗位匹配", "面试辅助"],
    status: "试用中",
    statusType: "trial",
  },
  {
    id: "inventory-forecast",
    name: "智能库存预测",
    category: "供应链管理",
    desc: "基于历史销售数据和市场趋势，预测商品需求量，优化库存水平，减少库存积压和缺货风险。",
    tags: ["需求预测", "库存优化", "补货建议"],
    status: "已启用",
    statusType: "on",
  },
  {
    id: "customer-analysis",
    name: "智能客户分析",
    category: "销售",
    desc: "分析客户行为数据，识别潜在客户，预测客户流失风险，提供个性化营销和服务建议。",
    tags: ["客户画像", "流失预测", "个性化推荐"],
    status: "已启用",
    statusType: "on",
  },
  {
    id: "procurement-analysis",
    name: "智能采购分析",
    category: "采购管理",
    desc: "分析供应商数据，评估供应商风险，优化采购策略，预测价格趋势，降低采购成本。",
    tags: ["供应商评估", "价格预测", "成本优化"],
    status: "未启用",
    statusType: "off",
  },
  {
    id: "production-scheduling",
    name: "智能生产调度",
    category: "生产管理",
    desc: "优化生产计划，合理分配资源，预测设备维护需求，提高生产效率，减少生产延误。",
    tags: ["计划优化", "资源分配", "设备维护"],
    status: "试用中",
    statusType: "trial",
  },
  {
    id: "expense-reimbursement",
    name: "智能费用报销",
    category: "财务管理",
    desc: "自动识别报销单据，提取金额和事项，审核合规性，加速报销流程，减少人工处理成本。",
    tags: ["单据识别", "合规审核", "流程加速"],
    status: "已启用",
    statusType: "on",
  },
];

const CATEGORIES = ["全部", "财务管理", "人力资源管理", "供应链管理", "销售", "采购管理", "生产管理"];

const NAV_ITEMS = [
  { label: "产品", menu: ["AI应用中心", "财务分析", "智能合同"] },
  { label: "解决方案", menu: ["制造业", "零售业", "金融行业"] },
  { label: "标杆案例", menu: ["客户案例", "实施经验", "ROI 报告"] },
  { label: "资源中心", menu: ["白皮书", "视频教程", "开发文档"] },
  { label: "服务支持", menu: ["帮助中心", "工单支持", "在线咨询"] },
  { label: "生态伙伴", menu: ["合作伙伴", "开发者中心", "应用市场"] },
  { label: "关于金蝶", menu: ["公司介绍", "新闻动态", "联系我们"] },
];

const DETAIL_DATA = {
  breadcrumb: ["首页", "AI场景中心", "智能财务分析"],
  title: "智能财务分析",
  domain: "财务领域",
  status: "已启用",
  version: "V2.3.0",
  summary:
    "基于AI算法自动分析财务数据，识别异常交易，预测现金流趋势，提供智能财务决策建议。",
  tabs: ["概览", "功能详情", "应用案例", "常见问题"],
  intro: [
    "智能财务分析AI场景通过先进的机器学习算法和自然语言处理技术，彻底改变企业财务管理方式。该场景整合了财务数据聚合、异常检测、趋势预测和决策建议等核心功能，为财务团队提供全方位的智能支持。",
    "系统能够自动分析跨客户余额、催款历史和争议项目的应收数据，提供基于数据的洞察和建议。AI代理通过优先处理未结项目和跟进高价值任务，帮助减少销售未清天数(DSO)。它分析行为模式以预测风险，推荐下一步最佳行动，并为用户提供有意义的、上下文感知的洞察。",
  ],
  roles: [
    "财务经理：负责财务规划和分析，需要全面了解公司财务状况，制定战略决策",
    "财务分析师：负责日常财务数据分析，识别趋势，准备财务报告和分析",
    "会计专员：负责日常会计操作，处理账目，确保财务数据的准确性",
    "首席财务官：负责公司整体财务战略，需要准确的财务洞察支持战略决策",
  ],
  pains: [
    "财务数据处理效率低下：财务团队花费大量时间手动收集、整理和分析数据，无法专注战略任务",
    "异常交易检测滞后：传统方法难以实时识别异常交易和潜在风险，往往在问题发生后才发现",
    "财务预测准确性不足：基于人工经验的财务预测准确性不高，难以应对复杂多变环境",
    "决策支持信息不足：管理层缺乏及时、准确的财务洞察，难以做出数据驱动决策",
  ],
  values: [
    "提升工作效率：自动化数据聚合和分析，减少 75% 未结项目分析和对账工作",
    "降低财务风险：提前发现潜在争议或高风险账户，帮助减少 2% 无法收回核销",
    "加速现金流：通过智能优先级与洞察推动更快回款，减少 1% 销售未清天数(DSO)",
    "支持战略决策：从被动任务转向主动战略决策，提供上下文感知洞察",
  ],
  demo: {
    title: "智能财务分析AI场景演示",
    desc: "观看如何利用AI技术提升财务分析效率和准确性",
    duration: "05:32",
    quality: "1080p",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  resources: [
    "智能财务分析白皮书（PDF, 2.4MB）",
    "制造业财务AI应用案例研究（PDF, 1.8MB）",
    "智能财务分析实施指南（PDF, 3.1MB）",
    "财务AI API开发文档（在线文档）",
  ],
  features: [
    { title: "财务数据自动聚合", desc: "自动打通 ERP、CRM 与账务系统，多源异构数据实时汇总并标准化处理。" },
    { title: "异常交易智能检测", desc: "基于规则与模型识别异常交易、重复付款、可疑报销和潜在欺诈行为。" },
    { title: "现金流趋势预测", desc: "结合历史回款、季节性和业务计划，预测未来现金流并给出风险预警。" },
    { title: "决策建议与解释", desc: "生成可追溯的建议路径与原因解释，辅助财务管理层快速决策。" },
  ],
  cases: [
    { company: "某制造集团", summary: "上线 3 个月后，对账效率提升 62%，财务月结周期缩短 4 天。" },
    { company: "某零售连锁企业", summary: "通过异常交易预警，季度潜在损失下降 31%，审计准备时间减少 40%。" },
    { company: "某科技服务公司", summary: "现金流预测误差从 18% 降到 7%，预算调整响应速度提升一倍。" },
  ],
  faqs: [
    { q: "接入需要改造现有系统吗？", a: "支持 API 与文件两种接入方式，通常只需配置数据映射，无需大规模改造。" },
    { q: "模型是否支持行业化定制？", a: "支持。可按行业特征和企业口径进行规则与模型联合调优。" },
    { q: "数据安全如何保障？", a: "支持私有化部署、权限隔离、传输加密和操作审计，满足企业合规要求。" },
    { q: "上线周期一般多久？", a: "标准版本通常 2-4 周可上线，复杂场景可分阶段迭代实施。" },
  ],
};

class AiSceneApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.appView = "portal";
    this.portalMenuOpen = false;
    this.cards = DEFAULT_CARDS;
    this.filteredCards = DEFAULT_CARDS;
    this.activeCategory = "全部";
    this.keyword = "";
    this.view = "list";
    this.selectedCard = null;
    this.activeTab = "概览";
    this.activeNav = NAV_ITEMS[0].label;
  }

  connectedCallback() {
    this.render();
    this.bindEvents();
  }

  get demoVideoUrl() {
    return this.getAttribute("demo-video-url") || DETAIL_DATA.demo.videoUrl;
  }

  filterCards() {
    this.filteredCards = this.cards.filter((card) => {
      const categoryOk = this.activeCategory === "全部" || card.category === this.activeCategory;
      const keywordOk =
        this.keyword.length === 0 ||
        card.name.includes(this.keyword) ||
        card.desc.includes(this.keyword) ||
        card.tags.some((t) => t.includes(this.keyword));
      return categoryOk && keywordOk;
    });
  }

  bindEvents() {
    const root = this.shadowRoot;
    if (!root) return;

    root.querySelector("#portalSolutionBtn")?.addEventListener("click", () => {
      this.portalMenuOpen = !this.portalMenuOpen;
      this.render();
      this.bindEvents();
    });
    root.querySelector("#portalSolutionNav")?.addEventListener("click", () => {
      this.portalMenuOpen = !this.portalMenuOpen;
      this.render();
      this.bindEvents();
    });
    root.querySelectorAll("[data-enter-ai]").forEach((el) => {
      el.addEventListener("click", () => {
        this.appView = "ai";
        this.portalMenuOpen = false;
        this.render();
        this.bindEvents();
      });
    });

    root.querySelector("#backPortalBtn")?.addEventListener("click", () => {
      this.appView = "portal";
      this.view = "list";
      this.render();
      this.bindEvents();
    });

    root.querySelectorAll("[data-category]").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.activeCategory = btn.getAttribute("data-category") || "全部";
        this.filterCards();
        this.render();
        this.bindEvents();
      });
    });

    const search = root.querySelector("#searchInput");
    search?.addEventListener("input", (e) => {
      this.keyword = e.target.value.trim();
      this.filterCards();
      this.render();
      this.bindEvents();
    });

    root.querySelectorAll("[data-card-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-card-id");
        this.selectedCard = this.cards.find((item) => item.id === id) || null;
        this.view = "detail";
        this.render();
        this.bindEvents();
      });
    });

    root.querySelector("#backToListBtn")?.addEventListener("click", () => {
      this.view = "list";
      this.render();
      this.bindEvents();
    });

    root.querySelectorAll("[data-detail-tab]").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.activeTab = btn.getAttribute("data-detail-tab") || "概览";
        this.render();
        this.bindEvents();
      });
    });

    root.querySelectorAll("[data-nav-item]").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.activeNav = btn.getAttribute("data-nav-item") || NAV_ITEMS[0].label;
        this.render();
        this.bindEvents();
      });
    });
  }

  renderPortal() {
    return `
      <header class="portal-header">
        <div class="portal-header-inner">
          <div class="portal-logo-wrap">
            <img class="logo-image" src="${KINGDEE_LOGO_SRC}" alt="金蝶" />
          </div>
          <nav class="portal-main-nav">
            ${PORTAL_NAV_ITEMS.map((item) =>
              item === "解决方案"
                ? `<button id="portalSolutionNav" class="portal-nav-link active">${item}</button>`
                : `<button class="portal-nav-link">${item}</button>`,
            ).join("")}
          </nav>
          <div class="portal-actions">
            <span class="portal-phone">☎ 售前：4008-830-830</span>
            <span class="portal-workbench">我的工作台 | 退出</span>
            <button id="portalSolutionBtn" class="portal-plan-btn">获取方案</button>
            <span class="portal-search">⌕</span>
            <span class="portal-user"></span>
          </div>
          <div class="portal-menu ${this.portalMenuOpen ? "show" : ""}">
            <div class="menu-left">
              <h4>解决方案</h4>
              <button type="button">热点方案</button>
              <button type="button">行业方案</button>
              <button data-enter-ai type="button">AI场景方案</button>
            </div>
            <div class="menu-right">
              <div class="group">
                <h5>热点方案</h5>
                <div class="links">${PORTAL_MENU.hot.map((i) => `<a href="javascript:void(0)">${i}</a>`).join("")}</div>
              </div>
              <div class="group">
                <h5>行业方案</h5>
                <div class="links">
                  ${PORTAL_MENU.industry.map((i) => `<a href="javascript:void(0)">${i}</a>`).join("")}
                  <a data-enter-ai class="ai-link" href="javascript:void(0)">AI场景方案</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main class="portal-main">
        <section class="portal-hero">
          <img class="portal-hero-bg" src="${PORTAL_HERO_ART_SRC}" alt="AI 智能体视觉图" />
          <div class="portal-hero-inner">
            <div class="portal-hero-left">
              <h1>AI 时代<br>企业管理用金蝶</h1>
              <p>不论是初创小微还是行业巨头，我们为您提供财务、人力、供应链及全场景 AI 解决方案。以 AI 智能体激活数据，领航业务智能自治，助您从单纯提效跃升至价值创造。</p>
              <div class="portal-hero-actions">
                <button id="portalSolutionBtn2" class="portal-try-btn">方案咨询</button>
                <button data-enter-ai class="portal-plan-btn">体验AI场景</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    `;
  }

  renderTopbar() {
    return `
      <div class="topbar-inner">
        <button id="backPortalBtn" class="btn-text">官网首页</button>
        <img class="brand-logo" src="${KINGDEE_LOGO_SRC}" alt="金蝶" />
        <nav class="main-nav">
          ${NAV_ITEMS.map(
            (item) => `
            <div class="nav-item-wrap">
              <button class="nav-item ${this.activeNav === item.label ? "active" : ""}" data-nav-item="${item.label}">
                ${item.label}
              </button>
              <div class="nav-menu">${item.menu.map((m) => `<a href="javascript:void(0)">${m}</a>`).join("")}</div>
            </div>
          `,
          ).join("")}
        </nav>
        <div class="top-actions">
          ${this.view === "list" ? `<input id="searchInput" class="search" placeholder="搜索应用、功能标签..." value="${this.keyword}">` : ""}
          <button class="btn-secondary">获取方案</button>
        </div>
      </div>
    `;
  }

  renderListView() {
    return `
      <section class="title">
        <h1>企业级 AI 场景库</h1>
        <p>基于 Calicat 图层生成，可本地轻量运行并支持外部系统嵌入。</p>
      </section>
      <section class="categories">
        ${CATEGORIES.map((n) => `<button class="category-btn ${n === this.activeCategory ? "active" : ""}" data-category="${n}">${n}</button>`).join("")}
      </section>
      <section class="grid">
        ${
          this.filteredCards
            .map(
              (card) => `
          <article class="card">
            <div class="card-head">
              <div class="card-title-wrap">
                <div class="icon">AI</div>
                <div><h3>${card.name}</h3><p>${card.category}</p></div>
              </div>
              <button class="ghost">•••</button>
            </div>
            <p class="card-desc">${card.desc}</p>
            <div class="tag-list">${card.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
            <div class="card-foot">
              <span class="status"><i class="${card.statusType || "on"}"></i>${card.status}</span>
              <button class="link" data-card-id="${card.id}">查看详情 →</button>
            </div>
          </article>
        `,
            )
            .join("") || `<div class="empty">未匹配到任何 AI 场景。</div>`
        }
        ${
          this.filteredCards.length
            ? `<article class="card more-card"><div class="more-icon">+</div><h3>查看更多AI应用</h3><p>探索全部20+企业管理AI应用场景</p></article>`
            : ""
        }
      </section>
    `;
  }

  renderDetailView() {
    const data = DETAIL_DATA;
    const title = this.selectedCard?.name || data.title;
    const tab = this.activeTab;
    const left =
      tab === "概览"
        ? `
      <article class="panel"><h3>概述AI场景</h3>${data.intro.map((t) => `<p>${t}</p>`).join("")}</article>
      <article class="panel"><h3>用户角色</h3><ul>${data.roles.map((i) => `<li>${i}</li>`).join("")}</ul></article>
      <article class="panel"><h3>场景痛点</h3><ul>${data.pains.map((i) => `<li>${i}</li>`).join("")}</ul></article>
      <article class="panel"><h3>应用价值</h3><div class="value-grid">${data.values.map((i) => `<div class="value-card">${i}</div>`).join("")}</div></article>
    `
        : tab === "功能详情"
          ? `<article class="panel"><h3>功能详情</h3><div class="feature-list">${data.features.map((i) => `<div class="feature-item"><h4>${i.title}</h4><p>${i.desc}</p></div>`).join("")}</div></article>`
          : tab === "应用案例"
            ? `<article class="panel"><h3>应用案例</h3><div class="feature-list">${data.cases.map((i) => `<div class="feature-item"><h4>${i.company}</h4><p>${i.summary}</p></div>`).join("")}</div></article>`
            : `<article class="panel"><h3>常见问题</h3><div class="feature-list">${data.faqs.map((i) => `<div class="feature-item"><h4>${i.q}</h4><p>${i.a}</p></div>`).join("")}</div></article>`;
    return `
      <nav class="breadcrumbs">${data.breadcrumb.map((i, idx) => `<span class="${idx === 2 ? "current" : ""}">${idx === 2 ? title : i}</span>`).join("<span class='sep'>/</span>")}</nav>
      <section class="detail-head">
        <button id="backToListBtn" class="back-btn">← 返回列表</button>
        <div class="detail-title-line">
          <div class="icon large">AI</div>
          <div><h1>${title}</h1><p>${data.summary}</p></div>
        </div>
        <div class="meta-tags"><span>${data.domain}</span><span class="ok">${data.status}</span><span>${data.version}</span></div>
      </section>
      <section class="tabs">${data.tabs.map((i) => `<button class="tab ${i === tab ? "active" : ""}" data-detail-tab="${i}">${i}</button>`).join("")}</section>
      <section class="detail-layout">
        <div class="left-col">${left}</div>
        <aside class="right-col">
          <article class="panel side">
            <h3>${data.demo.title}</h3><p>${data.demo.desc}</p>
            <div class="video-box"><video class="video-player" controls preload="metadata" src="${this.demoVideoUrl}"></video><small>${data.demo.duration} · ${data.demo.quality}</small></div>
          </article>
          <article class="panel side"><h3>相关资源</h3><ul>${data.resources.map((i) => `<li>${i}</li>`).join("")}</ul></article>
        </aside>
      </section>
    `;
  }

  renderAi() {
    this.filterCards();
    return `
      <section class="page">
        <header class="topbar">${this.renderTopbar()}</header>
        <main>${this.view === "list" ? this.renderListView() : this.renderDetailView()}</main>
      </section>
    `;
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host { display:block; color:#1f2329; font-family:"PingFang SC","Microsoft YaHei",Arial,sans-serif; }
        *{box-sizing:border-box;} .page{min-height:100vh;background:#f7f8fa;}
        .header,.topbar{position:sticky;top:0;z-index:20;background:#fff;border-bottom:1px solid #e5e6eb;}
        .header-inner,.topbar-inner{width:min(1392px,calc(100% - 32px));margin:0 auto;display:flex;align-items:center;gap:14px;}
        .header-inner{height:72px;justify-content:space-between;} .topbar-inner{height:64px;}
        .logo,.brand{font-weight:700;color:#2b5aed;} .logo{font-size:36px;line-height:1;} .brand{white-space:nowrap;}
        .portal-header{position:sticky;top:0;z-index:30;background:#fff;border-bottom:1px solid #e7ebf0;}
        .portal-header-inner{width:min(1392px,calc(100% - 48px));margin:0 auto;height:74px;display:flex;align-items:center;gap:16px;position:relative;}
        .portal-logo-wrap{display:flex;align-items:center;min-width:132px;}
        .logo-image{display:block;height:40px;width:auto;object-fit:contain;}
        .brand-logo{display:block;height:30px;width:auto;object-fit:contain;}
        .portal-main-nav{display:flex;align-items:center;gap:4px;flex:1;min-width:0;}
        .portal-nav-link{border:none;background:transparent;padding:8px 9px;font-size:13px;color:#1f2329;cursor:pointer;border-bottom:2px solid transparent;white-space:nowrap;}
        .portal-nav-link:hover,.portal-nav-link.active{color:#1e63d6;border-bottom-color:#1e63d6;}
        .portal-actions{display:flex;align-items:center;gap:8px;font-size:12px;color:#64748b;white-space:nowrap;}
        .portal-phone{color:#2a7bd8;font-weight:600;}
        .portal-plan-btn{height:34px;border:none;background:#1e63d6;color:#fff;border-radius:6px;padding:0 14px;cursor:pointer;font-size:12px;}
        .portal-search{font-size:16px;color:#334155;}
        .portal-user{width:16px;height:16px;border-radius:50%;background:#ef4444;display:inline-block;}
        .portal-menu{display:none;position:absolute;top:66px;left:180px;width:860px;background:#fff;border:1px solid #e5e6eb;border-radius:12px;box-shadow:0 14px 36px rgba(31,35,41,.12);overflow:hidden;}
        .portal-menu.show{display:grid;grid-template-columns:170px 1fr;} .menu-left{background:#f5f7fb;border-right:1px solid #e5e6eb;}
        .menu-left h4{margin:0;padding:14px 16px;font-size:14px;color:#4e5969;border-bottom:1px solid #e5e6eb;}
        .menu-left button{width:100%;text-align:left;border:none;background:transparent;padding:14px 16px;cursor:pointer;}
        .menu-left button:hover{background:#eef3ff;color:#2b5aed;} .menu-right{padding:16px;}
        .group{margin-bottom:18px;} .group h5{margin:0 0 10px;color:#4e5969;}
        .links{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;}
        .links a{text-decoration:none;color:#1f2329;font-size:13px;padding:7px 8px;border-radius:6px;background:#f9fafb;}
        .links a:hover{background:#eef3ff;color:#2b5aed;} .links .ai-link{background:#e8efff;color:#2b5aed;font-weight:600;}
        .portal-main{margin:0 auto;}
        .portal-hero{position:relative;height:560px;border-bottom:1px solid #e8edf5;overflow:hidden;background:#edf2fd;}
        .portal-hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center right;z-index:0;}
        .portal-hero-inner{position:relative;z-index:1;width:min(1392px,calc(100% - 48px));margin:0 auto;height:100%;display:flex;align-items:center;padding-left:12px;}
        .portal-hero-left{max-width:500px;}
        .portal-hero-left h1{margin:0;font-size:56px;line-height:1.12;color:#111827;font-weight:700;letter-spacing:.2px;}
        .portal-hero-left p{margin:18px 0 0;color:#1f2937;max-width:500px;line-height:1.75;font-size:17px;}
        .portal-hero-actions{margin-top:28px;display:flex;gap:10px;}
        .portal-try-btn{height:42px;border:1px solid #1e63d6;background:#fff;color:#1e63d6;border-radius:6px;padding:0 18px;cursor:pointer;font-size:14px;}
        .main-nav{display:flex;align-items:center;gap:4px;flex:1;min-width:0;overflow-x:auto;scrollbar-width:none;} .main-nav::-webkit-scrollbar{display:none;}
        .nav-item-wrap{position:relative;} .nav-item{border:1px solid transparent;background:transparent;padding:8px 10px;border-radius:8px;cursor:pointer;font-size:12px;white-space:nowrap;}
        .nav-item:hover,.nav-item.active{background:#eef3ff;color:#2b5aed;border-color:#dbe6ff;}
        .nav-menu{display:none;position:absolute;left:0;top:36px;min-width:150px;background:#fff;border:1px solid #e5e6eb;border-radius:10px;box-shadow:0 10px 30px rgba(31,35,41,.08);padding:6px;z-index:20;}
        .nav-item-wrap:hover .nav-menu{display:grid;} .nav-menu a{color:#4e5969;font-size:12px;padding:8px 10px;border-radius:8px;text-decoration:none;}
        .nav-menu a:hover{background:#f2f3f5;color:#1f2329;} .top-actions{display:flex;align-items:center;gap:8px;margin-left:auto;}
        .btn-secondary,.btn-text{height:32px;border-radius:8px;padding:0 10px;cursor:pointer;font-size:12px;white-space:nowrap;}
        .btn-secondary{border:1px solid #2b5aed;background:#2b5aed;color:#fff;} .btn-text{border:1px solid #d0d3d9;background:#fff;color:#4e5969;}
        .search{width:220px;height:36px;border:1px solid #d0d3d9;border-radius:10px;padding:0 12px;font-size:12px;}
        main{width:min(1392px,calc(100% - 48px));margin:28px auto 48px;} .title h1{margin:0;font-size:28px;} .title p{margin:8px 0 0;color:#4e5969;}
        .categories{margin-top:20px;display:flex;flex-wrap:wrap;gap:8px;} .category-btn{border:1px solid #d0d3d9;border-radius:999px;background:#fff;height:36px;padding:0 16px;cursor:pointer;}
        .category-btn.active{background:#2b5aed;border-color:#2b5aed;color:#fff;} .grid{margin-top:24px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;}
        .card{background:#fff;border:1px solid #e5e6eb;border-radius:14px;padding:18px;display:grid;gap:14px;} .card-head{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;}
        .card-title-wrap{display:flex;align-items:center;gap:12px;} .icon{width:40px;height:40px;border-radius:10px;background:#e8efff;color:#2b5aed;display:grid;place-items:center;font-size:12px;font-weight:700;}
        h3{margin:0;font-size:18px;} .card-head p{margin:2px 0 0;color:#86909c;font-size:13px;} .ghost{border:none;background:transparent;color:#86909c;}
        .card-desc{margin:0;color:#4e5969;} .tag-list{display:flex;flex-wrap:wrap;gap:8px;} .tag{font-size:12px;padding:4px 10px;border-radius:999px;background:#f2f3f5;color:#4e5969;}
        .card-foot{display:flex;align-items:center;justify-content:space-between;} .status{display:inline-flex;align-items:center;gap:6px;font-size:13px;} .status i{width:8px;height:8px;background:#00b42a;border-radius:50%;}
        .status i.trial{background:#ff7d00;} .status i.off{background:#c9cdd4;}
        .link{border:none;background:transparent;color:#2b5aed;cursor:pointer;font-size:14px;} .empty{background:#fff;border:1px dashed #c9cdd4;border-radius:12px;padding:40px;text-align:center;color:#86909c;}
        .more-card{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:8px;}
        .more-card h3{font-size:16px;} .more-card p{margin:0;color:#86909c;font-size:12px;}
        .more-icon{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:#eef3ff;color:#2b5aed;font-weight:700;}
        .breadcrumbs{display:flex;align-items:center;gap:8px;color:#86909c;font-size:13px;margin-bottom:16px;} .breadcrumbs .current{color:#1f2329;font-weight:600;} .sep{color:#c9cdd4;}
        .detail-head,.panel{background:#fff;border:1px solid #e5e6eb;border-radius:10px;} .detail-head{padding:18px;display:grid;gap:14px;}
        .back-btn{width:fit-content;border:1px solid #d0d3d9;background:#fff;border-radius:8px;padding:6px 12px;cursor:pointer;}
        .detail-title-line{display:flex;align-items:flex-start;gap:12px;} .large{width:48px;height:48px;font-size:14px;} .detail-title-line h1{margin:0 0 4px;font-size:24px;}
        .detail-title-line p{margin:0;color:#4e5969;font-size:13px;} .meta-tags{display:flex;flex-wrap:wrap;gap:8px;} .meta-tags span{background:#f1f5f9;color:#475569;border-radius:999px;padding:4px 10px;font-size:12px;}
        .meta-tags .ok{background:#f0fdf4;color:#059669;} .tabs{display:flex;gap:8px;margin:12px 0;border-bottom:1px solid #e5e6eb;padding-bottom:8px;}
        .tab{border:1px solid transparent;background:transparent;color:#4e5969;border-radius:6px;padding:6px 10px;cursor:pointer;font-size:13px;}
        .tab.active{color:#2b5aed;border-color:#dbe6ff;background:#eef3ff;} .detail-layout{display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:14px;align-items:start;}
        .left-col,.right-col{display:grid;gap:12px;} .right-col{position:sticky;top:80px;} .panel{padding:16px;} .panel h3{margin:0 0 10px;font-size:18px;}
        .panel p{margin:0 0 10px;color:#4e5969;font-size:13px;} .panel ul{margin:0;padding-left:18px;display:grid;gap:8px;color:#4e5969;font-size:13px;}
        .video-box{margin-top:10px;border:1px dashed #c9cdd4;border-radius:10px;height:210px;display:grid;place-items:stretch;background:#f8fafc;padding:8px;}
        .video-player{width:100%;height:170px;border-radius:8px;background:#000;object-fit:cover;} .video-box small{margin-top:6px;padding-left:2px;}
        .feature-list{display:grid;gap:10px;} .feature-item,.value-card{border:1px solid #e5e6eb;border-radius:8px;background:#fafbfc;padding:12px;}
        .feature-item h4{margin:0 0 6px;font-size:14px;} .feature-item p{margin:0;} .value-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;}
        @media (max-width:1200px){
          .portal-header-inner{height:auto;padding:10px 0;flex-wrap:wrap;}
          .portal-main-nav{order:3;width:100%;overflow-x:auto;scrollbar-width:none;}
          .portal-actions{margin-left:auto;}
          .portal-menu{left:0;width:min(96vw,860px);}
          .portal-hero{height:auto;min-height:520px;padding:30px 0;}
          .portal-hero-bg{height:100%;}
          .portal-hero-inner{align-items:flex-start;}
          .portal-hero-left h1{font-size:44px;}
          .portal-hero-left p{font-size:16px;}
        }
        @media (max-width:1200px){ .grid{grid-template-columns:repeat(2,minmax(0,1fr));} }
        @media (max-width:1000px){ .detail-layout{grid-template-columns:1fr;} .right-col{position:static;} .topbar{height:auto;padding:8px 0;} .topbar-inner{align-items:flex-start;flex-wrap:wrap;} .top-actions{width:100%;justify-content:flex-end;} .search{width:100%;} .grid{grid-template-columns:1fr;} }
      </style>
      ${this.appView === "portal" ? this.renderPortal() : this.renderAi()}
    `;
  }
}

if (!customElements.get("ai-scene-app")) {
  customElements.define("ai-scene-app", AiSceneApp);
}
