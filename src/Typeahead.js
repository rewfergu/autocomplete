import React, { useEffect, useState } from "react";

const Typeahead = ({
  className,
  data,
  InputComponent,
  NewOptionComponent,
  OptionComponent,
  newOption = false
}) => {
  const [selected, setSelected] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const rx = new RegExp(currentValue);
    const result = data.filter((item) => !!item.match(rx));
    setFilteredResults(result);
  }, [currentValue, data]);

  const TextInput = (props) =>
    InputComponent ? <InputComponent {...props} /> : <input {...props} />;

  const Option = (props) =>
    OptionComponent ? (
      <OptionComponent {...props}>{props.children}</OptionComponent>
    ) : (
      <div {...props}>{props.children}</div>
    );

  const NewOption = (props) =>
    NewOptionComponent ? (
      <NewOptionComponent
        {...props}
        onClick={() => console.log("typeahead click")}
      >
        {props.children}
      </NewOptionComponent>
    ) : (
      <button {...props}>{props.children}</button>
    );

  return (
    <div className={className}>
      <TextInput
        onChange={(e) => {
          setCurrentValue(e.target.value);
          setSelected(false);
        }}
        value={currentValue}
      />
      <div className="typeahead-results">
        {!selected &&
          currentValue &&
          filteredResults.map((item) => (
            <Option
              onClick={() => {
                setCurrentValue(item);
                setSelected(true);
              }}
              key={item}
            >
              {item}
            </Option>
          ))}
        {newOption &&
          !selected &&
          currentValue &&
          !filteredResults.includes(currentValue) && (
            <NewOption>{currentValue}</NewOption>
          )}
      </div>
    </div>
  );
};

export default Typeahead;
