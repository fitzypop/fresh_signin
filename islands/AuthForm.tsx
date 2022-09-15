export default function AuthForm() {
  return (
    <div class="mt-2">
      <form>
        <label class="m-2">Email</label>
        <input
          type="email"
          class="text-black m-2"
          name="email"
          id="email"
          required
        />
        <label class="m-2">Password</label>
        <input
          type="password"
          class="text-black m-2"
          name="password"
          id="password"
          required
        />
        <button class="border-2 m-2 p-3" type="submit">Submit</button>
      </form>
    </div>
  );
}
