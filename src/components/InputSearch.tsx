import { useState, useEffect } from "react";
import { Response } from "../models/response";
import { ResultDisplay } from "./ResultDisplay";

// SMART Compinent
export default function SearchText() {
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [response, setResponse] = useState<Response[]>([]);
  const handleInputChange = (e: any) => {
    setInputText(e.target.value);
  };

  const handleSearch = (e: any) => {
    if (e.key === "Enter") {
      setSearchText(inputText);
    }
  };

  useEffect(() => {
    if (searchText) {
      const finalUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`;
      fetch(finalUrl)
        .then((response) => response.json())
        .then((data: Response[]) => {
          console.log("response", data);
          setResponse(data);
        });
    }
  }, [searchText]);

  return (
    <>
      <input
        onChange={handleInputChange}
        onKeyDown={handleSearch}
        value={inputText}
      ></input>
      {response?.length ? <ResultDisplay data={response} /> : null}
    </>
  );
}
