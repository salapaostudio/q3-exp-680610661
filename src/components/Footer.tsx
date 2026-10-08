import { StudentInfo } from "./StudentInfo";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-4 px-6 py-5 md:px-10">
        <StudentInfo />
        <span className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} CPE207 Corp. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
