import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import * as moment from 'moment';

const Comments = ({data, theme}) => {
  const commentsData = data.comments
  // console.log(commentsData)
  const Cm = commentsData
    .sort((a, b) => a.postedAt - b.postedAt)
      .map((d) => {
        // console.log(d.poster + "-" + d.postedAt)
        return (
          <Comment 
            theme={theme}
            username={d.poster}
            comment={d.body}
            key={d.poster + "-" + d.postedAt}/>
        );
      })
  return Cm
}

// const Comments = ({ data, theme }) => {
//   const { commentOne, commentTwo } = data;
//   return (
//     <ul className="comments">
//       <Comment
//         theme={theme}
//         username={commentOne.poster}
//         comment={commentOne.body} />
//       <Comment
//         theme={theme}
//         username={commentTwo.poster}
//         comment={commentTwo.body} />
//     </ul>
//   );
// };

Comments.propTypes = {
  theme: PropTypes.string.isRequired,
  data: PropTypes.object
}

Comments.defaultProps = {
  theme: 'light',
  data: {
    comments: [
      {
        postedAt: moment().format('x'), // 投稿時間
        poster: "posterone",
        body: "This is the insta-card"
      },
      {
        postedAt: moment().format('x'), // 投稿時間
        poster: "postertwo",
        body: "So cool!"
      },
    ]
    // commentOne: {
    //   poster: "posterone",
    //   body: "This is the insta-card"
    // },
    // commentTwo: {
    //   poster: "postertwo",
    //   body: "So cool!"
    // }
  }
}


export default Comments;