const createComment = async (comments) => {
  const { comment, name, photo, userId, id, token, accessJWT } = comments;

  let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }

  try {
    const response = await accessJWT.post('http://localhost:5000/v1/comment', {
      commentBody: comment,
      commentAuthor: name,
      commentAuthorPhoto: photo,
      userId: userId,
      locationId: id
    }, config);
    console.log(response.data);
    return window.location.reload();
  }catch(error){
    console.log(error.response.data.msg);
    return window.location.reload();
  }
  
};

export default createComment;