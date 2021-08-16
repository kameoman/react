import React from 'react';
import Article from './Article';

class Blog extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    const authorName = "kamehack"
    return(
      <div>
        <Article title={"kame"} />
        <Article title={"kame環境構築"} />
        <Article title={"kameJSXの使い方"} />
      </div>
    )
  }
}

export default Blog