export default function Navbar() {
  const hoverEffect = "hover:bg-white hover:text-black";
  const navItem = "inline-block m-1 px-1 ";
  return (
    <nav>
      <div
        class="bg-black text-white text-[1.5rem] flex justify-between items-center"
        id="navbar"
      >
        <div class={`ml-2 ${hoverEffect}`} id="supa-fresh-logo">
          <a href="/" class="flex justify-start items-center">
            <img
              src="/logo.svg"
              height="100px"
              alt="the fresh logo: a sliced lemon dripping with juice"
            />
            <p class="mx-1">Supa Fresh</p>
          </a>
        </div>
        <ul
          class="mr-2 list-none text-[1rem] flex justify-between items-center"
          id="navlinks"
        >
          <li class={`${navItem} ${hoverEffect}`}>
            <a href="/signin">Sign In</a>
          </li>
          <li class="inline-block">
            <p>|</p>
          </li>
          <li class={`${navItem} ${hoverEffect}`}>
            <a href="/signup">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
