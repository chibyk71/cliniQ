import { createHmac } from "crypto";

/**
 * Verify Telegram WebApp initData
 */
export function verifyTelegramInitData(initData: string, botToken: string): boolean {
  const params = new URLSearchParams(initData);
  const receivedHash = params.get("hash");
  if (!receivedHash) return false;
  params.delete("hash");

  // Build sorted string
  const dataCheckString = Array.from(params.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join("\n");

  // Create secret key
  const secretKey = createHmac("sha256", "WebAppData")
    .update(botToken)
    .digest();

  // Generate hash
  const computedHash = createHmac("sha256", secretKey)
    .update(dataCheckString)
    .digest("hex");

  return computedHash === receivedHash;
}
