import { use, useState, useCallback, useEffect, useRef} from "react";
import "./App.css";

function App() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");


    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() =>{
        let pass = "";
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
        if (numberAllowed) {
            str += numbers;
        }
        if (charAllowed) {
            str += specialChars;
        }

        for (let i = 1; i <= length; i++) {
            const char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
        }
        setPassword(pass);
    },[length, numberAllowed, charAllowed, setPassword]);


    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select(); // jo bhi password select hua ho usse highlight kar dega
        passwordRef.current?.setSelectionRange(0, 16); // ye ek range hai ki kitna password select karna hai
        window.navigator.clipboard.writeText(password) // ye command hai jo clipboard me copy karega
        window.alert("Copied");
    }, [password]) 


    useEffect(() => {
        passwordGenerator();
    }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div>
        <h1 className="text-5xl text-center text-blue-500 mt-30 mb-10">
          Password Generator
        </h1>
        <div className="flex justify-center items-center mb-10">
          <input
            className="border-2 w-100 h-10 px-4 pb-1 rounded"
            type="text"
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className="bg-blue-500 text-white px-4 py-2 ml-2 rounded">
            copy
          </button>
        </div>


        <div className="flex justify-center items-center">
          <div>
            <input 
            type="range"
            min={6}
            max={16}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            />
            <label className="ml-2">Length: {length}</label>
          </div>

          
          <div>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            className="cursor-pointer ml-4"
            onChange={()=> setNumberAllowed((prev)=> !prev)}
            />
            <label className="ml-2">Numbers</label>
          </div>


          <div>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            className="cursor-pointer ml-4"
            onChange={()=> setCharAllowed((prev)=> !prev)}
            />
            <label className="ml-2">Special Characters</label>
          </div>


        </div>
      </div>
    </>
  );
}

export default App;
