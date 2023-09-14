type Item = {
  name: string;
  value: string;
};

type Data = {
  [key: string]: Item;
};

type ExampleProps = {
  data: Data;
};

export const Example = ({ data }: ExampleProps) => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-3">
        {Object.keys(data).map((key: string) => {
          const item = data[key];
          switch (item.name) {
            case "You": {
              return (
                <div key={key} className="border border-indigo-200 rounded-xl p-4 my-4 w-full">
                  <p className="mb-2 text-right text-indigo-600">
                    <b>{item.name}</b>
                  </p>
                  <pre className="text-right whitespace-pre-line">{item.value}</pre>
                </div>
              );
            }
            case "Edit": {
              return (
                <div key={key}>
                  <p className="text-center text-red-500 text-sm">
                    <i>{item.value}</i>
                  </p>
                </div>
              );
            }
            default: {
              return (
                <div key={key} className="border border-green-200 rounded-xl p-4 my-4 w-full">
                  <p className="mb-2 text-green-400">
                    <b>{item.name}</b>
                  </p>
                  <pre className="whitespace-pre-line">{item.value}</pre>
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  );
};
