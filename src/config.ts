
export const siteConfig = {
  // ==================== 基本信息 ====================
  site: {
    title: "My Blog",
    language: 'zh-CN',
    favicon: '/favicon.ico',
    logo: '/favicon.svg',
  },

  // ==================== 分页 ====================
  pagination: {
    postsPerPage: 6,
  },

} as const;

// ==================== 类型导出 ====================
export type SiteConfig = typeof siteConfig;

// ==================== 辅助函数 ====================

/**
 * 获取完整的页面标题
 * @param pageTitle 页面标题
 * @returns 完整标题
 */
export function getPageTitle(pageTitle?: string): string {
  if (!pageTitle) {
    return siteConfig.site.title;
  }
  return `${pageTitle} | ${siteConfig.site.title}`;
}
