import { createPost } from "@/actions/actions";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function CreatePost() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create post</h1>
      <form action={createPost} className="h-10 space-x-2 mt-10">
        <input
          type="text"
          name="title"
          placeholder="Title for new post"
          required
          className="border rounded px-3 h-full"
        />
        <button className="h-full bg-blue-500 px-5 rounded text-white">
          Create
        </button>
      </form>

      <LogoutLink>Log out</LogoutLink>
    </main>
  );
}
