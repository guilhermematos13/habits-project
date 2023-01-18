import { Plus } from "phosphor-react";
import Logo from "../assets/Logo.svg";

export function Header() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
          <img src={Logo} alt="Logo Habits" />
          <button
            type="button"
            className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300"
          >
            <Plus size={20} className="text-purple-500" />
            Novo hábito
          </button>
        </div>
      </div>
    </div>
  );
}
