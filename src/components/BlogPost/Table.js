import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const Table = (props) => {
  // deleteHandler(i, e) {
  //   e.preventDefault();
  //   this.props.onDelete(this.props.blogPosts[i].id);
  // }

  return (
    <div className="container">
      {props.auth.isAuthenticated ?
      <Link to="/posts/create" className="btn btn-sm btn-outline-secondary">Write a post</Link>
      :''}

      {props.isSubmitting ?
        <div className="row">
            <div className="text-center">
                <i className="fa fa-spin fa-spinner"/>
                <span>Loading...</span>
            </div>
        </div>
        :
        <div className="row">
          <br/><br/>
          {props.blogPosts && props.blogPosts.map((post) => {
            return (
              <div className="row" key={post.id}>
                <div className="col-sm-1">
                    <div className="thumbnail">
                        {/*<img className="img-thumbnail user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"/>*/}
                        <img className="img-thumbnail user-photo" src={"https://picsum.photos/60/60/?" + post.id}/>
                    </div>
                </div>

                <div className="col-sm-5">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <strong>{post.author}</strong> <span className="text-muted">{post.title}</span>
                            {props.auth.isAuthenticated && post.uid === props.auth.id ?
                                (
                                    <div>
                                        <Link to={`/posts/update/${post.id}`} className="btn btn-outline-info btn-sm">Edit</Link>
                                        <span>    </span>
                                        <btn onClick={props.onDelete.bind(this, post.id)} className="btn btn-outline-danger btn-sm">Delete</btn>
                                    </div>
                                ) : ''
                            }
                        </div>
                        <div className="panel-body">
                            {post.body}
                        </div>
                    </div>
                    <hr/>
                </div>
              </div>
            );
          })}
        </div>
      }

      {/*<table className="table table-hover table-responsive">*/}
        {/*<thead>*/}
        {/*<tr>*/}
          {/*<th>Nr</th>*/}
          {/*<th className="table-title">Title</th>*/}
          {/*<th>*/}
            {/*{props.auth.isAuthenticated ?*/}
            {/*<span>Options</span>: ''}*/}
          {/*</th>*/}
        {/*</tr>*/}
        {/*</thead>*/}
        {/*{props.isSubmitting ?*/}
          {/*<tbody>*/}
            {/*<tr>*/}
              {/*<td colSpan="3" className="text-xs-center">*/}
                {/*<i className="fa fa-spin fa-spinner"/>*/}
                {/*<span>Loading...</span>*/}
              {/*</td>*/}
            {/*</tr>*/}
          {/*</tbody>*/}
          {/*:*/}
          {/*<tbody>*/}
            {/*{props.blogPosts && props.blogPosts.map((post, i) => {*/}
              {/*return (*/}
                {/*<tr key={post.id}>*/}
                  {/*<td>{i+1}</td>*/}
                  {/*<td>{post.title}</td>*/}
                  {/*{props.auth.isAuthenticated ?*/}
                    {/*(*/}
                      {/*<td>*/}
                        {/*<Link to={`/posts/update/${post.id}`} className="btn btn-outline-info btn-sm">Edit</Link>*/}
                        {/*<btn onClick={props.onDelete.bind(this, post.id)} className="btn btn-outline-danger btn-sm">Delete</btn>*/}
                      {/*</td>*/}
                    {/*): <td/>*/}
                  {/*}*/}
                {/*</tr>);*/}
            {/*})}*/}
          {/*</tbody>*/}
        {/*}*/}
      {/*</table>*/}



    </div>
  );


};

Table.propTypes = {
  auth: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  isSubmitting: React.PropTypes.bool.isRequired,
  // blogPosts: PropTypes.array.isRequired,
  // map: PropTypes.func.isRequired
};

export default Table;
