import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFURL,} = useLoaderData(); 


  const bookCategories = [
    "Fiction",
    "Jackets",
    "Clothing",
    "Phones",
    "Watchs",
    "Security",
    "Clothing",
    "Home decor",
    "Non-fiction",
    "Mystery",
    "Programming",
    "Science fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Business",
    "Memoir",
    "Poetry",
    "Children's books",
    "Travel",
    "Religion and spirituality",
    "Science",
    "Art and design",
  ];


  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    const filter = { _id: new ObjectId(id) };


    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };
    
    fetch(`http://localhost:5000/book/${id}`,{
      method:"PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
      alert("Product Updated Successfully")
    })
  };


  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the product Data!</h2>
      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleUpdate}>

        {/* first row */}
        <div className='flex gap-8'>

          {/* book name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="bookTitle"
                value="Product Title"
              />
            </div>
            <TextInput
              id="bookTitle"
              placeholder="Product Name"
              required
              type="text"
              name='bookTitle'
              defaultValue={bookTitle}
            />
          </div>

          {/* author name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="authorName"
                value="Company Name"
              />
            </div>
            <TextInput
              id="authorName"
              placeholder="Company Name"
              required
              type="text"
              name='authorName'
              className='w-full'
              defaultValue={authorName}
            />
          </div>

        </div>

        {/* 2nd Row */}
        <div className='flex gap-8'>
          {/* book url */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="imageURL"
                value="Product Image URL"
              />
            </div>
            <TextInput
              id="imageURL"
              placeholder="product URL"
              required
              type="text"
              name='imageURL'
              className='w-full'
              defaultValue={imageURL}
            />
          </div>

          {/* book category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="inputState"
                value="Product Category"
              />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>

        </div>

        {/* full width div for book description */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="bookDescription"
              value="Product Description"
            />
          </div>
          <Textarea
            id="bookDescription"
            placeholder="Product Description"
            required
            type="text"
            name='bookDescription'
            className='w-full'
            rows={4}
            defaultValue={bookDescription}
          />
        </div>


        {/* book pdf url */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="bookPDFURL"
              value="Product Link"
            />
          </div>
          <TextInput
            id="bookPDFURL"
            placeholder="Paste Product URL here"
            required
            type="text"
            name='bookPDFURL'
            className='w-full'
            defaultValue={bookPDFURL}
            
          />
        </div>


        {/* Submit btn */}
        <Button type="submit" className='mt-5'>
          Update Products
        </Button>

      </form>
    </div>
  )
}

export default EditBooks