export const config = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME!,
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL!,
  personalPhoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || "",
  personalEmail: process.env.NEXT_PUBLIC_EMAIL || "",
  personalGithubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || "",
  personalTelegramUrl: process.env.NEXT_PUBLIC_TELEGRAM_URL || "",
  personalLinkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
};
