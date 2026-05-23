export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex items-center gap-3 rounded-lg border border-border bg-card/80 px-5 py-4 shadow-premium backdrop-blur">
        <span className="h-3 w-3 animate-pulse rounded-full bg-cyan-500" />
        <span className="text-sm font-medium text-muted-foreground">
          Preparing portfolio
        </span>
      </div>
    </div>
  );
}
