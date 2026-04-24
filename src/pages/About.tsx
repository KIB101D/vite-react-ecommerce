function About() {
  return (
    <div className="flex items-center justify-center flex-1 px-6 py-10">
      <div className="max-w-xl text-center">
        <h1 className="mb-5 text-3xl font-semibold tracking-wide text-gray-800 font-heading">
          About ReactShop
        </h1>

        <p className="leading-relaxed text-gray-600 ">
          ReactShop - a pet project where I apply my frontend skills in
          practice, gradually building a complete e-commerce app while improving
          UI/UX along the way.
        </p>

        <p className="mb-8 text-gray-600">Made with ❤️ for React</p>

        <p className="text-sm italic text-gray-400">
          ~ by{" "}
          <a
            href="https://github.com/KIB101D"
            target="_blank"
            className="underline transition hover:text-indigo-600"
          >
            KIB101D
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
