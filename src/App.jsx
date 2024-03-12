import { useState } from "react";
import { IoMdCopy } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import { upper, lower, special, numbers } from "./charcters";

export default function App() {
  const [IncludeSpecialCharcters, setIncludeSpecialCharcters] = useState(false);
  const [IncludeUpper, setIncludeUpper] = useState(false);
  const [IncludeLower, setIncludeLower] = useState(false);
  const [IncludeNumber, setIncludeNumber] = useState(false);
  const [Password, setPassword] = useState("");
  const [passLength, setPassLength] = useState(8);

  const HandleCreatePassword = () => {
    if (
      !IncludeLower &&
      !IncludeUpper &&
      !IncludeSpecialCharcters &&
      !IncludeNumber
    ) {
      setPassword("");
      alert("Selecionar ao menos um");
      return;
    } else {
      var characterList = "";
      if (IncludeLower) characterList = characterList + lower;
      if (IncludeUpper) characterList = characterList + upper;
      if (IncludeSpecialCharcters) characterList = characterList + special;
      if (IncludeNumber) characterList = characterList + numbers;
    }

    setPassword(createPassword(characterList));
  };

  const createPassword = (cList) => {
    var listLength = cList.length;
    let password = "";
    for (var i = 0; i < passLength; i++) {
      const cIndex = Math.round(Math.random() * listLength);
      password = password + cList.charAt(cIndex);
    }
    return password;
  };

  return (
    <div className="bg-[#292929] grid place-items-center h-100v w-full font-JetBrains text-white selection:bg-purple-900 selection:text-purple-950">
      <div className="bg-purple-800 grid place-items-center px-10 py-8 rounded-md">
        <h1 className=" font-bold tracking-widest">Password Generator</h1>

        <div className="w-96">
          <div className="flex gap-5 px-4 py-2 h-10 bg-purple-950 rounded-md w-full justify-center relative my-5">
            <span>{Password}</span>
            <IoMdCopy size={25} className="absolute right-5" />
          </div>

          <div className="flex flex-col w-full items-center gap-3">
            <span className="text-purple-300 font-bold">{passLength}</span>
            <input
              id="minmax-range"
              type="range"
              min="0"
              max="24"
              value={passLength}
              onChange={(e) => setPassLength(e.target.value)}
              class="w-full h-2 bg-purple-950 rounded-xl appearance-none cursor-pointer mb-5 thumb "
            ></input>
          </div>

          <div className="grid w-full gap-x-5 gap-y-2 grid-cols-2 text-sm">
            <div className="flex relative w-full justify-between">
              <label htmlFor="special">Special Characters</label>
              <input
                checked={IncludeSpecialCharcters}
                onChange={(e) => setIncludeSpecialCharcters(e.target.checked)}
                id="special"
                name="special"
                type="checkbox"
                className="outline-none focus:border-purple-500 peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all  checked:border-purple-950 checked:bg-purple-950 checked:before:bg-purple-950 hover:before:opacity-10"
              />
              <IoCheckmark
                size={16}
                className="absolute right-0.5 top-0.5 text-white transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100"
              />
            </div>

            <div className="flex relative w-full justify-between">
              <label htmlFor="lower">Include Lower Case</label>
              <input
                checked={IncludeLower}
                onChange={(e) => setIncludeLower(e.target.checked)}
                id="lower"
                name="lower"
                type="checkbox"
                className="outline-none focus:border-blue-500 peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all  checked:border-purple-950 checked:bg-purple-950 checked:before:bg-purple-950 hover:before:opacity-10"
              />
              <IoCheckmark
                size={16}
                className="absolute right-0.5 top-0.5 text-white transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100"
              />
            </div>

            <div className="flex relative w-full justify-between">
              <label htmlFor="upper">Include Upper Case</label>
              <input
                checked={IncludeUpper}
                onChange={(e) => setIncludeUpper(e.target.checked)}
                id="upper"
                name="upper"
                type="checkbox"
                className="outline-none focus:border-blue-500 peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all  checked:border-purple-950 checked:bg-purple-950 checked:before:bg-purple-950 hover:before:opacity-10"
              />
              <IoCheckmark
                size={16}
                className="absolute right-0.5 top-0.5 text-white transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100"
              />
            </div>

            <div className="flex relative w-full justify-between">
              <label htmlFor="number">Include Numbers</label>
              <input
                checked={IncludeNumber}
                onChange={(e) => setIncludeNumber(e.target.checked)}
                id="number"
                name="number"
                type="checkbox"
                className="outline-none focus:border-blue-500 peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all  checked:border-purple-950 checked:bg-purple-950 checked:before:bg-purple-950 hover:before:opacity-10"
              />
              <IoCheckmark
                size={16}
                className="absolute right-0.5 top-0.5 text-white transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100"
              />
            </div>


          </div>
          <button
            onClick={HandleCreatePassword}
            className="w-full bg-purple-950 mt-5 p-3 rounded-lg hover:border border-purple-500 outline-none "
          >
            {" "}
            Generate Password{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
