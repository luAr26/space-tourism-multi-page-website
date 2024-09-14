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
        <button className="small-pagination-btn">
          <span className="sr-only">Btn-text</span>
        </button>
        <button className="small-pagination-btn">
          <span className="sr-only">Btn-text</span>
        </button>
        <button className="small-pagination-btn small-pagination-btn--active">
          <span className="sr-only">Btn-text</span>
        </button>
      </div>
    </div>
  );
};

export default Button;
