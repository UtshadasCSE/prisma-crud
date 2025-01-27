import { ModeToggle } from "@/components/DarkMode";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center gap-3">
        <div className="flex items-center gap-2">
          <h2>Welcome to blog posts</h2>
          <div>
            <ModeToggle />
          </div>
        </div>
        <Link href={"/posts"}>
          <Button>View Post</Button>
        </Link>
      </div>
    </div>
  );
}
