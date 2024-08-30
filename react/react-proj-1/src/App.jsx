import Counter from "./components/Counter";
import { useState, useEffect } from "react";

const App = () => {
  const [inputString, setInputString] = useState("");
  const [items, setItems] = useState([]);
  const [searchedItems, setSearchedItems] = useState(items)

  const handleAddItem = () => {
    //...items means pehle se array me jitne bhi items hain wo khol k rakhdo
    const newItemsArr = [...items, inputString];
    setItems(newItemsArr);
    console.log("added items: ",items)
    setInputString(""); //dubara input ko empty krdo
    // items.push(inputString);
  };

  const deleteItemClickHandler = (indexToBeDeleted) => {
    console.log("DELETE FUNCTION FROM PARENT CALLED", indexToBeDeleted);
    const newItemsArr = items.filter((itemEntry, index) => {
      if (indexToBeDeleted === index) {
        return false;
      } else {
        return true; // resultant array me store hoga wo jiska answer true ha
      }
    });
    setItems(newItemsArr);
    console.log(newItemsArr);
  };

  // useEffect (() => {}, []) useeffect accepts two params 1st is func 2nd is dependency array

  useEffect(() => {
    console.log("useEffect Ran");
  }, [inputString]);

  return (
    <>
      {/* <Counter itemName="Jeans"/>
    <Counter itemName="Shirts"/>
    <Counter itemName="Jacket"/> */}
      <input
        type="text"
        placeholder="New Item Name"
        onChange={(e) => {
          setInputString(e.target.value);
        }}
      />
      <button onClick={handleAddItem}>Add Item</button>
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            const searchString = e.target.value;
            const filteredItems = items.filter((itemsEntry) => {
              return itemsEntry.toLowerCase().includes
              (searchString.toLowerCase())
            });
            console.log(filteredItems);
            setSearchedItems(filteredItems)
            // console.log(searchString)
          }}
        />
      </div>
      {searchedItems.map((itemsEntry, index) => {
        return (
          <Counter
            key={index}
            itemName={itemsEntry}
            deleteHandler={() => deleteItemClickHandler(index)}
          />
        );
      })}
    </>
  );
};
export default App;
