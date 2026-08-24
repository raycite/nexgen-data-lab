import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex min-h-screen items-center justify-center bg-white" role="status" aria-live="polite" aria-label="Loading NexGen Data Lab">
      <div className="flex flex-col items-center">
        <div className="relative flex h-28 w-56 items-center justify-center">
          <span className="loading-data-node absolute left-2 top-5 h-2.5 w-2.5 rounded-full bg-[#1264E8]" />
          <span className="loading-data-node absolute right-3 top-2 h-2.5 w-2.5 rounded-full bg-[#FF6500] [animation-delay:.35s]" />
          <span className="loading-data-node absolute bottom-3 left-10 h-2 w-2 rounded-full bg-[#FF6500] [animation-delay:.7s]" />
          <span className="loading-data-node absolute bottom-6 right-8 h-2 w-2 rounded-full bg-[#1264E8] [animation-delay:1.05s]" />
          <Image src="/nexgen-logo-light-v2.png" alt="NexGen Data Lab" width={220} height={100} priority className="h-auto w-48 object-contain" />
        </div>
        <div className="mt-3 h-1 w-36 overflow-hidden rounded-full bg-slate-100"><span className="loading-progress block h-full w-1/2 rounded-full bg-gradient-to-r from-[#1264E8] to-[#FF6500]" /></div>
        <p className="mt-4 text-sm font-medium text-slate-500">Loading NexGen Data Lab…</p>
      </div>
    </div>
  );
}
