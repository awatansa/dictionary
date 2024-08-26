import { Response } from "../models/response";

// DUMB Component
export function ResultDisplay({ data }: { data: Response[] }) {
  console.log("data", data);
  return (
    <>
      <ul>
        {data.flatMap((d) => {
          return (
            <div>
              <div>{d.phonetic}</div>
              {d.meanings.flatMap((r) => (
                <div>
                  {r.definitions.flatMap((s) => (
                    <li key={s.definition}> {s.definition}</li>
                  ))}
                </div>
              ))}
            </div>
          );
        })}
      </ul>
    </>
  );
}
