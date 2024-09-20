import Link from "next/link";

const Button = () => {
  return (
    <div>
      <Link href="/" className="main-menu-item">
        <span className="font-bold">00</span>
        <span>Home</span>
      </Link>
      <h2 className="mb-500 text-preset-5 uppercase">Small pagination</h2>
      <div className="flex gap-600">
        <button className="large-pagination-btn">
          <span className="sr-only">Page 1</span>
          <span>1</span>
        </button>
        <button className="large-pagination-btn large-pagination-btn--active">
          <span className="sr-only">Page 2</span>
          <span>2</span>
        </button>
        <button className="large-pagination-btn">
          <span className="sr-only">Page 3</span>
          <span>3</span>
        </button>
      </div>
    </div>
  );
};

export default Button;
