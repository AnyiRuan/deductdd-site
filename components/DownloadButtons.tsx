import Image from "next/image";

export default function DownloadButtons() {
  return (
    <div id="download" className="flex flex-col sm:flex-row items-center gap-4">
      <a className="btn btn-primary w-full sm:w-auto" href="#" aria-label="App Store">App Store</a>
      <a className="btn btn-outline w-full sm:w-auto" href="#" aria-label="Google Play">Google Play</a>
      <div className="text-xs text-neutral-500">* 即将上线</div>
    </div>
  );
}
