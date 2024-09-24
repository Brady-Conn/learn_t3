import { db } from "~/server/db";

const mockURLs = [
  "https://utfs.io/f/0vbOIlzL4S2APlz1OsXc5Yy3KjwmLvxGbhNsr6Ig1iF0o8zU",
  "https://utfs.io/f/0vbOIlzL4S2ADLSYtbakO9MeasPzH4o0WvuYrbFN1U6EAy3C",
  "https://utfs.io/f/0vbOIlzL4S2AXTXqb9ksK5CWagjyukU9A1qpEnOhxzHSwrt6",
  "https://utfs.io/f/0vbOIlzL4S2AbHmUqZWCH6wangTR7NLvYXt2z4Quo9V85IcO"
]

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-wrap items-center justify-center gap-12 px-4 py-16">
        {posts.map(post => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}
        {mockImages.map(image => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="front rage scenery"/>
          </div>
        ))}
      </div>
    </main>
  );
}
