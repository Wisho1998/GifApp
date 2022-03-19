import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories})=>{
  const [inputValue, setValueInput] = useState("")

    const handleChangeValue = (e)=>{
        console.log(e.target.value)
        setValueInput(e.target.value)
    }

    const handleSubmit = (e)=>{
      e.preventDefault()
      if (inputValue.trim().length <= 2) {
        return
      }
      setCategories(categories => [inputValue,...categories])
      setValueInput("")
    }

  return (
    <form onSubmit={handleSubmit} className="form-search">
        <input
            type="text"
            value={inputValue}
            onChange={handleChangeValue}
        />
    </form>
  )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}

export default AddCategory;