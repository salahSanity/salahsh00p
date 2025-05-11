import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "8zw3i8be",
  dataset: "production",
  apiVersion: "2024-05-11",
  useCdn: true,
  token:
    "skOVB69L3fzOXvkHMxbMCjckHVmqOoE46cPHLRSYYwBMfXm9SSo5yjIfSgfHvaBqWaXXr77pLiIpynDQzrKHPnJwVmrZQsro397e9l52wWbNgavrV5yy8cqGW1rqgvzn6XlVNtT1zcPNmydWbxq6h09OpYnOLBmLIw7ksesUaIgqQWAoN4aV",
});

const builder = imageUrlBuilder(client);

export function imageUrl(source: any) {
  return builder.image(source).url();
}

export default client;
