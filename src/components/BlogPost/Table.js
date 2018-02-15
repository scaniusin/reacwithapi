import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const Table = (props) => {
  // deleteHandler(i, e) {
  //   e.preventDefault();
  //   this.props.onDelete(this.props.blogPosts[i].id);
  // }

  return (
    <div>
      {props.auth.isAuthenticated ?
      <Link to="/posts/create" className="btn btn-md btn-success">Create</Link>
      :''}

      <table className="table table-hover table-responsive">
        <thead>
        <tr>
          <th>Nr</th>
          <th className="table-title">Title</th>
          <th>
            {props.auth.isAuthenticated ?
            <span>Options</span>: ''}
          </th>
        </tr>
        </thead>
        {props.isSubmitting ?
          <tbody>
            <tr>
              <td colSpan="3" className="text-xs-center">
                <i className="fa fa-spin fa-spinner"/>
                <span>Loading...</span>
              </td>
            </tr>
          </tbody>
          :
          <tbody>
            {props.blogPosts && props.blogPosts.map((post, i) => {
              return (
                <tr key={post.id}>
                  <td>{i+1}</td>
                  <td>{post.title}</td>
                  {props.auth.isAuthenticated ?
                    (
                      <td>
                        <Link to={`/posts/update/${post.id}`} className="btn btn-default btn-sm">Edit</Link>
                        <btn onClick={props.onDelete.bind(this, post.id)} className="btn btn-danger btn-sm">Delete</btn>
                      </td>
                    ): <td> </td>
                  }
                </tr>);
            })}
          </tbody>
        }
      </table>
    </div>
  );


};

Table.propTypes = {
  auth: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  isSubmitting: React.PropTypes.bool.isRequired,
  // blogPosts: PropTypes.array.isRequired
};

export default Table;
