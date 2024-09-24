import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"

async function Images() {
  const images = await db.query.images.findMany({orderBy: (model, { desc }) => desc(model.id)});

  return (images.map(image => (
    <div key={image.id} className="w-48">
      <p>{image.name}</p>
      <img src={image.url} alt="front rage scenery"/>
    </div>
  )))
}

export default async function HomePage() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-wrap items-center justify-center gap-12 px-4 py-16">
        <SignedOut>
          <div className="w-full h-full text-2xl">Please sign in to view the gallery</div>
        </SignedOut>
        <SignedIn>
          <Images />
        </SignedIn>
      </div>
    </main>
  );
}
