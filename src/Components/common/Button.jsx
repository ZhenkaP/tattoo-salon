function Button({ className = "", onClick, children, type = "button", href }) {
  const baseStyles = `transition-colors hover:bg-rose-950 hover:text-white hover:shadow-white shadow-lg bg-white font-blinker rounded-md cursor-pointer  items-center px-4 py-2 md:p-4 md:text-xl font-blinker ${className}`;
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block ${baseStyles}`}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={baseStyles} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
