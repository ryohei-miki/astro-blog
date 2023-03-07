export const Header: React.FC = () => {
  return (
    <header className="flex items-center p-6">
      <a href='/' className="flex-1 text-4xl font-bold">RM Blog</a>
      <ul className="flex space-x-4 font-semibold">
        <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://ryohei-miki.dev"
          >
            Profile
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/ryohei-miki"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://twitter.com/rm_oshushi"
          >
            Twitter
          </a>
        </li>
      </ul>
    </header>
  );
};
