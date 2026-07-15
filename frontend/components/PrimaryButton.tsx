type PrimaryButtonProps = {
  text: string;
};

export default function PrimaryButton({ text }: PrimaryButtonProps) {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl">
      {text}
    </button>
  );
}
