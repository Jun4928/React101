import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = function() {
  const infos = Array(3).fill(null).map((x)=> {
    return { // info object
      'img': faker.image.avatar(),
      'author': faker.name.firstName(),
      'date': faker.date.recent().toDateString(),
      'text': faker.lorem.words()
    };
  });

  const comments = [];
  infos.forEach((info, index) => { // comments 배열에 컴포넌트가 들어간다.
    const {img, author, date, text} = info;
    comments.push(
     <ApprovalCard key={index}>
      <CommentDetail 
        key={index}
        img={img} 
        author={author} 
        date={date}
        text={text}
      />
     </ApprovalCard>
    );
  })

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4 style={{color: "red"}}>WARNING</h4>
          Are you sure?
        </div>
      </ApprovalCard>
      {comments}
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);