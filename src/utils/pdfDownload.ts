import type { MouseEvent } from "react";

async function isPdfAvailable(url: string): Promise<boolean> {
  try {
    const res = await fetch(url);
    if (!res.ok) return false;

    const reader = res.body?.getReader();
    if (!reader) return false;

    const { value, done } = await reader.read();
    await reader.cancel();

    if (done || !value || value.length < 4) return false;

    const header = new TextDecoder().decode(value.subarray(0, 5));
    return header.startsWith("%PDF");
  } catch {
    return false;
  }
}

function triggerDownload(url: string) {
  const link = document.createElement("a");
  link.href = url;
  link.download = "";
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export async function handlePdfDownloadClick(
  event: MouseEvent<HTMLAnchorElement>,
  url: string,
  notReadyMessage: string,
) {
  event.preventDefault();

  const ok = await isPdfAvailable(url);
  if (!ok) {
    window.alert(notReadyMessage);
    return;
  }

  triggerDownload(url);
}
