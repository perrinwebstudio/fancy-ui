export const SITE_DETAIL_MENU_CONFIG = {
  site_configuration: {
    key: "site_configuration",
    text: "Site Configuration",
    defaultSubMenu: "general",
    subMenu: {
      general: {
        key: "general",
        text: "General Site / Business Information",
      },
      billing: {
        key: "billing",
        text: "Service Billing / Plan",
      },
      connections: {
        key: "connections",
        text: "Site Connections",
      },
      members: {
        key: "members",
        text: "Site Members",
      },
    },
  },
  strategy_plan: {
    key: "strategy_plan",
    text: "Strategy Plan",
    defaultSubMenu: "how_it_work",
    subMenu: {
      how_it_work: {
        key: "how_it_work",
        text: "How It Works",
        icon: "how-it-work",
      },
      keyword_short_term: {
        key: "keyword_short_term",
        text: "Keywords (Short-Term)",
        icon: "keyword",
      },
      keyword_long_term: {
        key: "keyword_long_term",
        text: "Keywords (Long-Term)",
        icon: "keyword",
      },
      keyword_research: {
        key: "keyword_research",
        text: "Keyword Research",
        icon: "research",
      },
      content_updates: {
        key: "content_updates",
        text: "Content Updates",
        icon: "content",
      },
      new_content: {
        key: "new_content",
        text: "New Content",
        icon: "content",
      },
      site_optimizations: {
        key: "site_optimizations",
        text: "Site Optimizations",
        icon: "optimize",
      },
      backlinking: {
        key: "backlinking",
        text: "Backlinking",
        icon: "backlink",
      },
    },
  },
  review_center: {
    key: "review_center",
    text: "Review Center",
    defaultSubMenu: null,
    subMenu: null,
  },
  performance_reporting: {
    key: "performance_reporting",
    text: "Performance Reporting",
    defaultSubMenu: "strategic_analysis",
    subMenu: {
      strategic_analysis: {
        key: "strategic_analysis",
        text: "Strategic Analysis",
        icon: "bar-chart",
      },
      overall_performance: {
        key: "overall_performance",
        text: "Overall Performance",
        icon: "chart",
      },
      keyword_performance: {
        key: "keyword_performance",
        text: "Keyword Performance",
        icon: "keyword",
      },
      site_performance: {
        key: "site_performance",
        text: "Site Performance",
        icon: "layout",
      },
      search_performance: {
        key: "search_performance",
        text: "Search Performance",
        icon: "geometre",
      },
      user_performance: {
        key: "user_performance",
        text: "User Performance",
        icon: "user-add",
      },
    },
  },
};

export const SITE_GOOGLE_ACCOUNT_TYPES = {
  googleGeneralTokens: "googleGeneralTokens",
  googleGATokens: "googleGATokens",
  googleGSCTokens: "googleGSCTokens",
};

export const SITE_GOOGLE_SERVICE_TYPES = {
  GSC: "GSC",
  GA: "GA",
};
