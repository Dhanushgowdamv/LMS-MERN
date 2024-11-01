/* eslint-disable no-undef */

/* eslint-disable react/prop-types */

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";


function FormControls({ formControl= [], formData, setFormData }) {
  function renderComponentByType(getControleItem) {
    let element= null;
    const currentControlValue = formData[getControleItem.name] ||   ''
    switch (getControleItem.componentType) {
      case 'input':
        element = (
          <Input
            id={getControleItem.name}
            name={getControleItem.name}
            placeholder={getControleItem.placeholder}
            type={getControleItem.type}
            value={currentControlValue}
            onChange={(event)=> setFormData({
              ...formData,
              [getControleItem.name] : event.target.value
            })}
          />
        );
        break;

      case 'select':
        element = (
          <Select
          onValueChange={(value)=> setFormData({
            ...formData,
            [getControleItem.name]:value
          })}
          value={ currentControlValue }>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControleItem.label} />
            </SelectTrigger>
            <SelectContent>
              {getControleItem.options && getControleItem.options.length > 0
                ? getControleItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;

      case 'textarea':
        element = (
          <Textarea
            id={getControleItem.name}
            name={getControleItem.name}
            placeholder={getControleItem.placeholder}
            value={ currentControlValue }
            onChange={(event)=> setFormData({
              ...formData,
              [getControleItem.name] : event.target.value
            })}
          />
        );
        break;

      default:
        element = (
          <Input
            id={getControleItem.name}
            name={getControleItem.name}
            placeholder={getControleItem.placeholder}
            type={getControleItem.type}
            value={ currentControlValue }
            onChange={(event)=> setFormData({
              ...formData,
              [getControleItem.name] : event.target.value
            })}
          />
        );
        break;
    }
    return element;  
  }

  return (
    <div className="flex flex-col gap-3">
      {formControl.map((controleItem) => (
        <div key={controleItem.name}>
          <Label htmlFor={controleItem.name}>{controleItem.label}</Label>
          {renderComponentByType(controleItem)}  {/* Use the return value */}
        </div>
      ))}
    </div>
  );
}

export default FormControls;
