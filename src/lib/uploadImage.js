const uploadImageToImgBB = async (imageFile) => {
    if (!imageFile) {
      return;
    }
    const apiKey = "8fa196d92c7d1bee69255516ffcf9d00";
    const formData = new FormData();
    formData.append("image", imageFile);
  
    try {
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=" + apiKey,
        {
          method: "POST",
          body: formData,
        }
      );
  
      const data = await response.json();
      if (data.status === 200) {
        const imageUrl = data.data.url;
        return imageUrl;
      } else {
        console.error("Image upload failed");
        return null;
      }
    } catch (error) {
      console.error("Error uploading image: ", error);
      return null;
    }
  };
  
  export { uploadImageToImgBB };