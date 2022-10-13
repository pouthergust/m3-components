import React from "react";
import "./style.css";

interface SelectProps<Type> extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Type;
  label: string;
  value: string;
  message?: string;
  theme?: string;
}

type OptionProps = IFederalDistrict | ICityOptions

function Select({
  options = [], 
  label, 
  value, 
  message, 
  theme = 'default', 
  ...props
}: SelectProps<Array<OptionProps>>
) {
  
  return (
    <select className={`selectMyLocation --${theme}`} {...props}>
      <option value=''>{label}</option>
      {options.length === 0 ? (<option value=''>{message}</option>) : null}
      {options.map((option: OptionProps) => {
        return (
          <option key={option.id} value={option[value as keyof OptionProps]}>
            {option.nome}
          </option>
        )
      })}
    </select>
  )
}

export default Select;
  