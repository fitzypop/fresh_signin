interface AuthFormProps {
}

export default function AuthForm({}: AuthFormProps) {
  return (
    <div class="mt-2">
      <form class="border-2 px-4 py-5">
        <div class="block">
          <label class="m-2">Email</label>
          <input
            type="email"
            class="text-black m-2 border-1"
            name="email"
            id="email"
            required
          />
        </div>
        <div class="block">
          <label class="m-2">Password</label>
          <input
            type="password"
            class="text-black m-2 border-1"
            name="password"
            id="password"
            required
          />
        </div>

        <button class="border-2 m-2 p-3" type="submit">Submit</button>
      </form>
    </div>
  );
}
