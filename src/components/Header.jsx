const Header = ({ message }) => {
  return (
    <header className="mx-auto mt-2">
      <h1 className="text-2xl mt-8 md:text-4xl font-bold font-redhat text-rose-500 text-center mx-auto ">
        {message ? message : "NO SE SI VOY A LLEGAR A LOS 70 😥"}
      </h1>
    </header>
  );
};

export default Header;
