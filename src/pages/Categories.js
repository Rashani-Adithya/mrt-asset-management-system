import { useState } from "react";

function Categories() {
  
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);

   const handleAddCategory = () => {
   if (isEditing) {

    const updatedCategories = categories.map((item) =>
      item.id === selectedId
        ? {
            ...item,
            categoryName,
            description,
          }
        : item
    );

    setCategories(updatedCategories);
    setIsEditing(false);

  } else {

    const newCategory = {
      id: Date.now(),
      categoryName,
      description,
    };

    setCategories([...categories, newCategory]);
    setFilteredCategories([...categories, newCategory]);
  }

    setCategoryName("");
    setDescription("");
  };

  const handleEdit = () => {

  const selectedCategory = categories.find(
    (item) => item.id === selectedId
  );

  if (!selectedCategory) {
    alert("Please select a category");
    return;
  }

  setCategoryName(selectedCategory.categoryName);
  setDescription(selectedCategory.description);

  setIsEditing(true);
  };

   const handleDelete = () => {
     if (!selectedId) {
       alert("Please select a category");
       return;
  }

     setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    const updatedCategories = categories.filter(
      (item) => item.id !== selectedId
    );

    setCategories(updatedCategories);
    setFilteredCategories(updatedCategories);
    setSelectedId(null);
    setShowDeleteConfirm(false);

    alert("Category deleted successfully");
    };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    };
  

   const handleSearch = () => {
    const result = categories.filter((item) =>
      item.categoryName
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

     setFilteredCategories(result);
};


    return (
    <div>
      <h1>Asset Category Management</h1>

      <hr />

      <h3>Category Name</h3>
      <input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <br />
      <br />

      <h3>Description</h3>
       <textarea
         rows="4"
         cols="40"
         value={description}
         onChange={(e) => setDescription(e.target.value)}
       ></textarea>

      <br />
      <br />

      <button onClick={handleAddCategory}>
          Add Category
      </button>

      <hr />

      <div style={{ textAlign: "right" }}>
        <input
          type="text"
          placeholder="Search Category"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
           style={{ marginLeft: "10px" }}
           onClick={handleSearch}
        >
            Search
        </button>
      </div>

      <br />

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Select</th>
            <th>Category Name</th>
            <th>Description</th>
          </tr>
        </thead>

       <tbody>
         {filteredCategories.map((item) => (
           <tr key={item.id}>
            <td>
              <input
                 type="radio"
                 name="category"
                 checked={selectedId === item.id}
                 onChange={() => setSelectedId(item.id)}
              />
            </td>
            <td>{item.categoryName}</td>
            <td>{item.description}</td>
          </tr>
         ))}
       </tbody>
      </table>

      <br />

      {showDeleteConfirm && (
     <div
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
        <p>Are you sure you want to delete this category?</p>

        <button onClick={confirmDelete}>
             Yes
        </button>

          <button
            onClick={cancelDelete}
            style={{ marginLeft: "10px" }}
        >
             No
        </button>
      </div>
           )}

      <div style={{ textAlign: "right" }}>
        <button onClick={handleEdit}>
            Edit
        </button>

        <button
           style={{ marginLeft: "10px" }}
           onClick={handleDelete}
        >
           Delete
        </button>
      </div>
    </div>
  );
}

export default Categories;