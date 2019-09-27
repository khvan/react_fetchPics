import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: 'Client-ID fb97fec0407fab334c726fbcbae0ac2cb9f8911249231542d062feacba711ea7'
  }

}
  
)