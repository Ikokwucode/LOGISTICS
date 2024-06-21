function Button({ text, bg, width, click }) {
  return (
    <button
      className={`px-4 py-2 h-[62px] rounded-md text-white ${width} ${bg}`}
      onClick={click}
    >
      {text}
    </button>
  );
}

export default Button;
